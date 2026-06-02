import { LEVEL_META } from '../data/questions'

const MEDALS = ['🥇','🥈','🥉']

export default function LeaderboardPage({ quiz }) {
  const { leaderboard } = quiz

  return (
    <div className="max-w-2xl mx-auto px-4 py-5">
      <div className="text-center mb-6">
        <div className="text-5xl mb-2 float">🏆</div>
        <h2 className="text-2xl font-black text-gray-800">Bảng Vàng</h2>
        <p className="text-sm text-gray-500">Top điểm cao nhất</p>
      </div>

      {leaderboard.length === 0 ? (
        <div className="card text-center py-10">
          <div className="text-5xl mb-3">📭</div>
          <p className="font-bold text-gray-600">Chưa có kết quả nào!</p>
          <p className="text-sm text-gray-400 mt-1">Làm bài và lưu điểm để xuất hiện ở đây.</p>
          <button onClick={() => window.location.hash='#/'} className="btn btn-primary mt-4">🎯 Bắt đầu làm bài</button>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {leaderboard.map((entry, i) => {
            const lv = LEVEL_META[entry.level] ?? LEVEL_META.dat
            const pct = Math.round(entry.score / entry.total * 100)
            return (
              <div key={i}
                className={`card flex items-center gap-4 ${i === 0 ? 'ring-2 ring-yellow-300 bg-gradient-to-r from-yellow-50 to-amber-50' : ''}`}>
                <div className="text-3xl w-10 text-center flex-shrink-0">
                  {i < 3 ? MEDALS[i] : <span className="text-lg font-black text-gray-400">#{i+1}</span>}
                </div>
                <div className="flex-1">
                  <p className="font-black text-gray-800 text-base">{entry.name}</p>
                  <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                    <span className="badge text-xs font-bold" style={{ background: lv.light, color: lv.dark }}>
                      {lv.symbol} {lv.label}
                    </span>
                    <span className="text-xs text-gray-400 font-medium">{entry.date}</span>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-black text-xl" style={{ color: lv.color }}>{entry.score}/{entry.total}</p>
                  <p className="text-xs font-bold text-gray-400">{pct}% đúng</p>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {leaderboard.length > 0 && (
        <div className="text-center mt-4">
          <button onClick={() => { if(confirm('Xoá toàn bộ bảng vàng?')) quiz.resetAll() }}
            className="text-xs text-red-400 hover:text-red-600 font-bold border border-red-200 hover:border-red-400 px-3 py-1.5 rounded-xl transition-colors">
            🗑️ Xoá bảng vàng
          </button>
        </div>
      )}
    </div>
  )
}
