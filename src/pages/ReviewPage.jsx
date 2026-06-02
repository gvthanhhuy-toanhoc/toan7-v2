import { useState } from 'react'
import QuestionCard from '../components/QuestionCard'
import ScorePanel from '../components/ScorePanel'

export default function ReviewPage({ quiz }) {
  const { wrongList, clearWrong, recordAnswer, answered, next, done, restart,
          qIndex, questions, score, currentQ, saveToLeaderboard } = quiz
  const [started, setStarted] = useState(false)

  function begin() {
    quiz.start(quiz.level, quiz.type, true)
    setStarted(true)
  }

  if (!started || wrongList.length === 0) return (
    <div className="max-w-2xl mx-auto px-4 py-8 text-center">
      <div className="card">
        <div className="text-6xl mb-4">🔁</div>
        <h2 className="text-2xl font-black text-gray-800 mb-2">Ôn tập bài sai</h2>
        {wrongList.length === 0 ? (
          <>
            <p className="text-gray-500 mb-4">Chưa có câu sai nào! Bạn học rất tốt 🎉</p>
            <button onClick={() => window.location.hash='#/'} className="btn btn-primary">← Về luyện tập</button>
          </>
        ) : (
          <>
            <p className="text-gray-600 mb-2">Bạn có <strong className="text-red-500">{wrongList.length}</strong> câu cần ôn lại.</p>
            <p className="text-sm text-gray-400 mb-5">Luyện lại các câu đã làm sai để ghi nhớ chắc hơn!</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={begin} className="btn btn-primary">🚀 Bắt đầu ôn tập</button>
              <button onClick={() => { clearWrong(); setStarted(false) }}
                className="btn btn-secondary text-red-500">🗑️ Xoá danh sách</button>
            </div>
          </>
        )}
      </div>

      {/* Wrong list preview */}
      {wrongList.length > 0 && (
        <div className="mt-5">
          <h3 className="font-black text-gray-700 mb-3 text-left">📋 Danh sách câu sai ({wrongList.length})</h3>
          <div className="flex flex-col gap-2">
            {wrongList.slice(0,8).map((q, i) => (
              <div key={i} className="card text-left p-3 flex items-start gap-3">
                <span className="text-red-400 text-lg flex-shrink-0">✗</span>
                <p className="text-sm text-gray-700 font-medium line-clamp-2">{q.q?.replace(/\$[^$]+\$/g, '[CT]')}</p>
              </div>
            ))}
            {wrongList.length > 8 && (
              <p className="text-sm text-gray-400 text-center">... và {wrongList.length - 8} câu khác</p>
            )}
          </div>
        </div>
      )}
    </div>
  )

  return (
    <div className="max-w-2xl mx-auto px-4 py-5">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">🔁</span>
        <div>
          <h2 className="font-black text-gray-800">Chế độ ôn tập</h2>
          <p className="text-xs text-gray-500">Luyện lại các câu đã sai</p>
        </div>
        <div className="ml-auto bg-red-50 text-red-600 font-black text-sm px-3 py-1.5 rounded-xl border-2 border-red-100">
          {wrongList.length} câu sai
        </div>
      </div>

      <div className="mb-4">
        <div className="progress-track">
          <div className="progress-fill bg-gradient-to-r from-red-400 to-orange-400"
            style={{ width: Math.round((qIndex/questions.length)*100)+'%' }} />
        </div>
      </div>

      {!done ? (
        <QuestionCard question={currentQ} type={currentQ?._type ?? 'tn'}
          level={currentQ?._level ?? 'dat'} qIndex={qIndex} total={questions.length}
          answered={answered} onAnswer={recordAnswer} onNext={next} />
      ) : (
        <ScorePanel score={score} total={questions.length} level="dat"
          onRestart={() => { setStarted(false) }} onSaveScore={saveToLeaderboard} />
      )}
    </div>
  )
}
