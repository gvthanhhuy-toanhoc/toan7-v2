import { useEffect, useState } from 'react'
import { LEVEL_META, TYPE_META, CHAPTERS } from '../data/questions'
import QuestionCard from '../components/QuestionCard'
import ScorePanel from '../components/ScorePanel'

export default function PracticePage({ quiz }) {
  const {
    level, type, chapter, currentQ, qIndex, questions, score,
    answered, done, stats, accuracy, seenIds,
    setLevel, setType, setChapter,
    recordAnswer, next, restart, refresh, freshStart,
    saveToLeaderboard, soundOn, setSoundOn,
  } = quiz

  const [showChapterPicker, setShowChapterPicker] = useState(false)

  useEffect(() => { if (!questions.length) quiz.start(level, type) }, [])

  const selectedChapter = chapter ? CHAPTERS.find(c => c.id === chapter) : null

  return (
    <div className="max-w-2xl mx-auto px-4 py-5">

      {/* Stats */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {[
          { v:stats.total,   label:'Đã làm',   bg:'bg-blue-50',   tx:'text-blue-700' },
          { v:stats.correct, label:'Đúng',      bg:'bg-green-50',  tx:'text-green-700' },
          { v:accuracy+'%',  label:'Chính xác', bg:'bg-purple-50', tx:'text-purple-700' },
          { v:stats.streak,  label:'🔥 Streak', bg:'bg-orange-50', tx:'text-orange-700' },
        ].map((s,i) => (
          <div key={i} className={`${s.bg} rounded-2xl p-3 text-center`}>
            <div className={`text-xl font-black ${s.tx}`}>{s.v}</div>
            <div className="text-xs font-bold text-gray-500 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="card mb-4">
        {/* Level */}
        <p className="text-xs font-black text-gray-400 uppercase tracking-wider mb-2">Cấp độ</p>
        <div className="flex gap-2 flex-wrap mb-4">
          {Object.entries(LEVEL_META).map(([k,m]) => (
            <button key={k} onClick={() => setLevel(k)}
              style={level===k ? {background:m.color,borderColor:m.color,color:'#fff'} : {borderColor:m.color,color:m.dark}}
              className={`px-4 py-1.5 rounded-full text-xs font-black border-2 transition-all ${level!==k?'bg-white hover:opacity-80':''}`}>
              {m.symbol} {m.label}
            </button>
          ))}
        </div>

        {/* Type */}
        <p className="text-xs font-black text-gray-400 uppercase tracking-wider mb-2">Dạng bài</p>
        <div className="flex gap-2 flex-wrap mb-4">
          {Object.entries(TYPE_META).map(([k,m]) => (
            <button key={k} onClick={() => setType(k)}
              className={`px-3 py-1.5 rounded-xl text-xs font-black border-2 transition-all ${type===k?'bg-gray-800 text-white border-gray-800':'bg-white text-gray-500 border-gray-200 hover:border-gray-400'}`}>
              {m.icon} {m.label}
            </button>
          ))}
        </div>

        {/* Chapter filter */}
        <p className="text-xs font-black text-gray-400 uppercase tracking-wider mb-2">Chủ đề / Chương</p>
        <div className="flex gap-2 flex-wrap mb-1">
          <button
            onClick={() => { quiz.setChapter ? setChapter(null) : null; setShowChapterPicker(false) }}
            className={`px-3 py-1.5 rounded-xl text-xs font-black border-2 transition-all ${!chapter?'bg-gray-800 text-white border-gray-800':'bg-white text-gray-500 border-gray-200 hover:border-gray-400'}`}>
            🌐 Tất cả chương
          </button>
          {CHAPTERS.map(ch => (
            <button key={ch.id} onClick={() => { quiz.setChapter(ch.id) }}
              style={chapter===ch.id ? {background:ch.color,borderColor:ch.color,color:'#fff'} : {borderColor:ch.color,color:ch.color}}
              className={`px-3 py-1.5 rounded-xl text-xs font-black border-2 transition-all ${chapter!==ch.id?'bg-white hover:opacity-80':''}`}>
              {ch.icon} {ch.title.length > 8 ? ch.title.substring(0,8)+'…' : ch.title}
            </button>
          ))}
        </div>
        {selectedChapter && (
          <p className="text-xs text-gray-400 mt-1">📌 Đang luyện: <strong style={{color:selectedChapter.color}}>{selectedChapter.title}</strong> — {selectedChapter.desc}</p>
        )}
      </div>

      {/* Action bar */}
      <div className="flex gap-2 mb-3 flex-wrap items-center">
        <button onClick={refresh}
          className="flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-xl bg-blue-50 text-blue-700 border-2 border-blue-100 hover:bg-blue-100 transition-colors">
          🔀 Câu hỏi mới
        </button>
        <button onClick={freshStart}
          className="flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-xl bg-purple-50 text-purple-700 border-2 border-purple-100 hover:bg-purple-100 transition-colors">
          ✨ Làm lại từ đầu
        </button>
        <button onClick={() => setSoundOn(s => !s)}
          className={`text-xs font-bold px-3 py-2 rounded-xl border-2 transition-all ml-auto ${soundOn?'bg-green-50 text-green-700 border-green-200':'bg-gray-50 text-gray-400 border-gray-200'}`}>
          {soundOn ? '🔊 Âm thanh' : '🔇 Tắt tiếng'}
        </button>
      </div>

      {/* Seen counter */}
      {seenIds.length > 0 && !done && (
        <div className="flex items-center gap-1.5 mb-3 text-xs text-gray-400 font-medium">
          <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
          Đã xem {seenIds.length} câu hỏi trong phiên · Câu hỏi mới được ưu tiên
        </div>
      )}

      {/* Progress bar */}
      {!done && questions.length > 0 && (
        <div className="mb-4">
          <div className="flex justify-between text-xs font-bold text-gray-400 mb-1.5">
            <span>Tiến độ</span>
            <span>{qIndex+1}/{questions.length}</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{width:Math.round((qIndex/questions.length)*100)+'%'}} />
          </div>
        </div>
      )}

      {/* Quiz or Score */}
      {!done ? (
        <QuestionCard question={currentQ} type={type} level={level}
          qIndex={qIndex} total={questions.length}
          answered={answered} onAnswer={recordAnswer} onNext={next} />
      ) : (
        <ScorePanel score={score} total={questions.length} level={level}
          onRestart={restart} onSaveScore={saveToLeaderboard} />
      )}
    </div>
  )
}
