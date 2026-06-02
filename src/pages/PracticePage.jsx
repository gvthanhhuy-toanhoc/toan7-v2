import { useEffect } from 'react'
import { LEVEL_META, TYPE_META } from '../data/questions'
import QuestionCard from '../components/QuestionCard'
import ScorePanel from '../components/ScorePanel'

export default function PracticePage({ quiz }) {
  const { level, type, currentQ, qIndex, questions, score, answered, done,
          stats, accuracy, setLevel, setType, recordAnswer, next, restart, saveToLeaderboard } = quiz

  useEffect(() => { if (!questions.length) quiz.start(level, type) }, [])

  return (
    <div className="max-w-2xl mx-auto px-4 py-5">

      {/* Stats row */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {[
          { v: stats.total,   label:'Đã làm',  bg:'bg-blue-50',   tx:'text-blue-700'   },
          { v: stats.correct, label:'Đúng',    bg:'bg-green-50',  tx:'text-green-700'  },
          { v: accuracy+'%',  label:'Chính xác',bg:'bg-purple-50',tx:'text-purple-700' },
          { v: stats.streak,  label:'🔥 Streak',bg:'bg-orange-50',tx:'text-orange-700' },
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
          {Object.entries(LEVEL_META).map(([k, m]) => (
            <button key={k} onClick={() => setLevel(k)}
              style={level===k ? { background:m.color, borderColor:m.color, color:'#fff' } : { borderColor:m.color, color:m.dark }}
              className={`px-4 py-1.5 rounded-full text-xs font-black border-2 transition-all ${level!==k ? 'bg-white hover:opacity-80' : ''}`}>
              {m.symbol} {m.label}
            </button>
          ))}
        </div>

        {/* Type */}
        <p className="text-xs font-black text-gray-400 uppercase tracking-wider mb-2">Dạng bài</p>
        <div className="flex gap-2 flex-wrap">
          {Object.entries(TYPE_META).map(([k, m]) => (
            <button key={k} onClick={() => setType(k)}
              className={`px-3 py-1.5 rounded-xl text-xs font-black border-2 transition-all ${
                type===k ? 'bg-gray-800 text-white border-gray-800' : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400'
              }`}>
              {m.icon} {m.label}
            </button>
          ))}
        </div>
      </div>

      {/* Sound toggle */}
      <div className="flex justify-end mb-3">
        <button onClick={() => quiz.setSoundOn(s => !s)}
          className={`text-xs font-bold px-3 py-1.5 rounded-xl border-2 transition-all ${
            quiz.soundOn ? 'bg-green-50 text-green-700 border-green-200' : 'bg-gray-50 text-gray-400 border-gray-200'
          }`}>
          {quiz.soundOn ? '🔊 Âm thanh Bật' : '🔇 Âm thanh Tắt'}
        </button>
      </div>

      {/* Progress */}
      {!done && questions.length > 0 && (
        <div className="mb-4">
          <div className="flex justify-between text-xs font-bold text-gray-400 mb-1.5">
            <span>Tiến độ</span>
            <span>{qIndex + 1}/{questions.length}</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: Math.round((qIndex/questions.length)*100)+'%' }} />
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
