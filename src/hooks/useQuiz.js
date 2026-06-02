import { useState, useCallback, useEffect } from 'react'
import { DB, BADGES } from '../data/questions'

const LS = {
  stats:   'toan7v2_stats',
  wrong:   'toan7v2_wrong',
  board:   'toan7v2_board',
  badges:  'toan7v2_badges',
}

function load(key, def) {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : def } catch { return def }
}
function save(key, val) { try { localStorage.setItem(key, JSON.stringify(val)) } catch {} }

// Simple beep sounds using Web Audio API
function playSound(type) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain); gain.connect(ctx.destination)
    if (type === 'correct') {
      osc.frequency.setValueAtTime(523, ctx.currentTime)
      osc.frequency.setValueAtTime(659, ctx.currentTime + 0.1)
      osc.frequency.setValueAtTime(784, ctx.currentTime + 0.2)
      gain.gain.setValueAtTime(0.3, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5)
      osc.start(); osc.stop(ctx.currentTime + 0.5)
    } else {
      osc.frequency.setValueAtTime(300, ctx.currentTime)
      osc.frequency.setValueAtTime(200, ctx.currentTime + 0.1)
      gain.gain.setValueAtTime(0.3, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3)
      osc.start(); osc.stop(ctx.currentTime + 0.3)
    }
  } catch {}
}

export function useQuiz() {
  const [level, setLevelState] = useState('dat')
  const [type,  setTypeState]  = useState('tn')
  const [questions, setQuestions] = useState([])
  const [qIndex,    setQIndex]    = useState(0)
  const [score,     setScore]     = useState(0)
  const [answered,  setAnswered]  = useState(false)
  const [done,      setDone]      = useState(false)
  const [reviewMode, setReviewMode] = useState(false)
  const [soundOn, setSoundOn] = useState(true)
  const [newBadges, setNewBadges] = useState([])

  const [stats, setStats] = useState(() => load(LS.stats, {
    total: 0, correct: 0, streak: 0, bestStreak: 0, xp: 0, levelsUnlocked: 1
  }))
  const [wrongList, setWrongList] = useState(() => load(LS.wrong, []))
  const [leaderboard, setLeaderboard] = useState(() => load(LS.board, []))
  const [earnedBadges, setEarnedBadges] = useState(() => load(LS.badges, []))

  useEffect(() => { save(LS.stats,  stats)        }, [stats])
  useEffect(() => { save(LS.wrong,  wrongList)     }, [wrongList])
  useEffect(() => { save(LS.board,  leaderboard)   }, [leaderboard])
  useEffect(() => { save(LS.badges, earnedBadges)  }, [earnedBadges])

  const accuracy = stats.total > 0 ? Math.round(stats.correct / stats.total * 100) : 0

  function buildQs(lv, tp) {
    const pool = DB[lv]?.[tp] ?? []
    return [...pool].sort(() => Math.random() - .5).slice(0, 5)
  }

  const start = useCallback((lv, tp, review = false) => {
    let qs
    if (review && wrongList.length > 0) {
      qs = [...wrongList].sort(() => Math.random() - .5).slice(0, 5)
    } else {
      qs = buildQs(lv, tp)
    }
    setQuestions(qs)
    setQIndex(0); setScore(0); setAnswered(false); setDone(false)
    setReviewMode(review)
  }, [wrongList])

  const setLevel = useCallback((lv) => { setLevelState(lv); start(lv, type) }, [type, start])
  const setType  = useCallback((tp) => { setTypeState(tp);  start(level, tp) }, [level, start])
  const restart  = useCallback(() => start(level, type, reviewMode), [level, type, reviewMode, start])

  function checkBadges(newStats) {
    const fresh = BADGES.filter(b => !earnedBadges.includes(b.id) && b.cond(newStats))
    if (fresh.length > 0) {
      const ids = fresh.map(b => b.id)
      setEarnedBadges(prev => [...prev, ...ids])
      setNewBadges(fresh)
      setTimeout(() => setNewBadges([]), 4000)
    }
  }

  const recordAnswer = useCallback((correct, question) => {
    setAnswered(true)
    if (soundOn) playSound(correct ? 'correct' : 'wrong')
    if (correct) setScore(s => s + 1)
    else {
      // add to wrong list (avoid duplicates)
      if (question) {
        setWrongList(prev => {
          const exists = prev.some(q => q.q === question.q)
          return exists ? prev : [...prev, { ...question, _level: level, _type: type }]
        })
      }
    }
    setStats(prev => {
      const streak = correct ? prev.streak + 1 : 0
      const newStats = {
        total:          prev.total + 1,
        correct:        correct ? prev.correct + 1 : prev.correct,
        streak,
        bestStreak:     Math.max(prev.bestStreak, streak),
        xp:             prev.xp + (correct ? 10 : 2),
        levelsUnlocked: prev.levelsUnlocked,
      }
      checkBadges(newStats)
      return newStats
    })
  }, [soundOn, level, type, earnedBadges])

  const next = useCallback(() => {
    if (qIndex + 1 >= questions.length) setDone(true)
    else { setQIndex(i => i + 1); setAnswered(false) }
  }, [qIndex, questions.length])

  function saveToLeaderboard(name, sc) {
    const entry = { name, score: sc, total: questions.length, level, date: new Date().toLocaleDateString('vi') }
    setLeaderboard(prev => [...prev, entry].sort((a, b) => b.score - a.score).slice(0, 10))
  }

  function clearWrong() { setWrongList([]) }
  function resetAll() {
    setStats({ total:0,correct:0,streak:0,bestStreak:0,xp:0,levelsUnlocked:1 })
    setWrongList([]); setLeaderboard([]); setEarnedBadges([])
  }

  return {
    level, type, questions, qIndex, currentQ: questions[qIndex] ?? null,
    score, answered, done, stats, accuracy, reviewMode, soundOn, setSoundOn,
    wrongList, leaderboard, earnedBadges, newBadges,
    setLevel, setType, recordAnswer, next, restart, start,
    saveToLeaderboard, clearWrong, resetAll,
  }
}
