import { useState, useCallback, useEffect, useRef } from 'react'
import { DB, BADGES, CHAPTERS } from '../data/questions'

const LS = {
  stats:   'toan7v2_stats',
  wrong:   'toan7v2_wrong',
  board:   'toan7v2_board',
  badges:  'toan7v2_badges',
  seen:    'toan7v2_seen',
}

function load(key, def) {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : def } catch { return def }
}
function save(key, val) { try { localStorage.setItem(key, JSON.stringify(val)) } catch {} }

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

// Fisher-Yates shuffle
function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Build questions avoiding recently seen ones, then reset if pool exhausted
function buildSmartQs(lv, tp, seenIds, count = 5) {
  const pool = DB[lv]?.[tp] ?? []
  if (!pool.length) return []

  // Assign stable ids
  const withId = pool.map((q, i) => ({ ...q, _id: `${lv}_${tp}_${i}` }))

  // Prefer unseen
  const unseen = withId.filter(q => !seenIds.includes(q._id))
  const source = unseen.length >= count ? unseen : withId // reset if exhausted

  return shuffle(source).slice(0, Math.min(count, source.length))
}

// Build by chapter
function buildChapterQs(chapterId, lv, tp, count = 5) {
  const pool = DB[lv]?.[tp] ?? []
  const ch = CHAPTERS.find(c => c.id === chapterId)
  if (!ch || !pool.length) return []
  // Filter by chapter tag if present, otherwise use all (fallback)
  const tagged = pool.filter(q => q._ch === chapterId)
  const source = tagged.length >= 2 ? tagged : pool
  return shuffle(source.map((q, i) => ({ ...q, _id: `${lv}_${tp}_${i}` }))).slice(0, count)
}

export function useQuiz() {
  const [level,     setLevelState] = useState('dat')
  const [type,      setTypeState]  = useState('tn')
  const [chapter,   setChapterState] = useState(null)   // null = all chapters
  const [questions, setQuestions]  = useState([])
  const [qIndex,    setQIndex]     = useState(0)
  const [score,     setScore]      = useState(0)
  const [answered,  setAnswered]   = useState(false)
  const [done,      setDone]       = useState(false)
  const [reviewMode, setReviewMode] = useState(false)
  const [soundOn,   setSoundOn]    = useState(true)
  const [newBadges, setNewBadges]  = useState([])

  const [stats, setStats] = useState(() => load(LS.stats, {
    total: 0, correct: 0, streak: 0, bestStreak: 0, xp: 0, levelsUnlocked: 1
  }))
  const [wrongList,    setWrongList]    = useState(() => load(LS.wrong,  []))
  const [leaderboard,  setLeaderboard]  = useState(() => load(LS.board,  []))
  const [earnedBadges, setEarnedBadges] = useState(() => load(LS.badges, []))
  // seenIds: track which question ids have been shown recently
  const [seenIds, setSeenIds] = useState(() => load(LS.seen, []))

  useEffect(() => { save(LS.stats,  stats)        }, [stats])
  useEffect(() => { save(LS.wrong,  wrongList)     }, [wrongList])
  useEffect(() => { save(LS.board,  leaderboard)   }, [leaderboard])
  useEffect(() => { save(LS.badges, earnedBadges)  }, [earnedBadges])
  useEffect(() => { save(LS.seen,   seenIds)       }, [seenIds])

  const accuracy = stats.total > 0 ? Math.round(stats.correct / stats.total * 100) : 0

  const start = useCallback((lv, tp, opts = {}) => {
    const { review = false, chId = null, fresh = false, count = 5 } = opts
    let qs

    if (review && wrongList.length > 0) {
      qs = shuffle(wrongList).slice(0, count)
    } else if (chId) {
      qs = buildChapterQs(chId, lv, tp, count)
    } else {
      const currentSeen = fresh ? [] : seenIds
      qs = buildSmartQs(lv, tp, currentSeen, count)
      // Track seen
      if (!fresh) {
        const newSeen = [...new Set([...currentSeen, ...qs.map(q => q._id).filter(Boolean)])]
        setSeenIds(newSeen.slice(-50)) // keep last 50
      } else {
        setSeenIds([])
      }
    }

    setQuestions(qs)
    setQIndex(0); setScore(0); setAnswered(false); setDone(false)
    setReviewMode(review)
    if (chId) setChapterState(chId)
    else if (!review) setChapterState(null)
  }, [wrongList, seenIds])

  const setLevel   = useCallback((lv) => { setLevelState(lv); start(lv, type) }, [type, start])
  const setType    = useCallback((tp) => { setTypeState(tp);  start(level, tp) }, [level, start])
  const setChapter = useCallback((chId) => {
    setChapterState(chId)
    start(level, type, { chId })
  }, [level, type, start])

  const restart = useCallback(() => {
    start(level, type, { review: reviewMode, chId: chapter })
  }, [level, type, reviewMode, chapter, start])

  // Refresh = new random set avoiding already-seen this session
  const refresh = useCallback(() => {
    start(level, type, { chId: chapter })
  }, [level, type, chapter, start])

  // Fresh start = clear seen history entirely
  const freshStart = useCallback(() => {
    start(level, type, { chId: chapter, fresh: true })
  }, [level, type, chapter, start])

  function checkBadges(newStats) {
    const fresh2 = BADGES.filter(b => !earnedBadges.includes(b.id) && b.cond(newStats))
    if (fresh2.length > 0) {
      const ids = fresh2.map(b => b.id)
      setEarnedBadges(prev => [...prev, ...ids])
      setNewBadges(fresh2)
      setTimeout(() => setNewBadges([]), 4000)
    }
  }

  const recordAnswer = useCallback((correct, question) => {
    setAnswered(true)
    if (soundOn) playSound(correct ? 'correct' : 'wrong')
    if (correct) setScore(s => s + 1)
    else {
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
    const entry = {
      name, score: sc, total: questions.length, level,
      chapter: chapter ? CHAPTERS.find(c => c.id === chapter)?.title : 'Tất cả',
      date: new Date().toLocaleDateString('vi')
    }
    setLeaderboard(prev => [...prev, entry].sort((a, b) => b.score - a.score).slice(0, 10))
  }

  function clearWrong() { setWrongList([]) }
  function resetAll() {
    setStats({ total:0,correct:0,streak:0,bestStreak:0,xp:0,levelsUnlocked:1 })
    setWrongList([]); setLeaderboard([]); setEarnedBadges([]); setSeenIds([])
  }
  function clearSeen() { setSeenIds([]) }

  // Progress per chapter
  const chapterProgress = CHAPTERS.map(ch => {
    const total = Object.values(DB).reduce((acc, lvl) =>
      acc + Object.values(lvl).reduce((a, pool) =>
        a + pool.filter(q => q._ch === ch.id).length, 0), 0)
    return { ...ch, total }
  })

  return {
    level, type, chapter, questions, qIndex, currentQ: questions[qIndex] ?? null,
    score, answered, done, stats, accuracy, reviewMode, soundOn, setSoundOn,
    wrongList, leaderboard, earnedBadges, newBadges, seenIds,
    setLevel, setType, setChapter, recordAnswer, next,
    restart, refresh, freshStart, start,
    saveToLeaderboard, clearWrong, resetAll, clearSeen,
    chapterProgress,
  }
}
