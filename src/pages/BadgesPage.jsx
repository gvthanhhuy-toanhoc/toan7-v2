import { BADGES } from '../data/questions'

export default function BadgesPage({ quiz }) {
  const { earnedBadges, stats, accuracy } = quiz

  return (
    <div className="max-w-2xl mx-auto px-4 py-5">
      <div className="text-center mb-6">
        <div className="text-5xl mb-2 float">🏅</div>
        <h2 className="text-2xl font-black text-gray-800">Huy Hiệu Thành Tích</h2>
        <p className="text-sm text-gray-500">
          Đã đạt <strong className="text-yellow-600">{earnedBadges.length}</strong> / {BADGES.length} huy hiệu
        </p>
      </div>

      {/* Progress bar for badges */}
      <div className="card mb-5">
        <div className="flex justify-between text-xs font-bold text-gray-500 mb-2">
          <span>Tiến độ sưu tập</span>
          <span>{earnedBadges.length}/{BADGES.length}</span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: Math.round(earnedBadges.length/BADGES.length*100)+'%', background:'linear-gradient(90deg,#eab308,#f97316)' }} />
        </div>
      </div>

      {/* Badge grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
        {BADGES.map(b => {
          const earned = earnedBadges.includes(b.id)
          return (
            <div key={b.id}
              className={`card card-hover text-center p-4 transition-all ${earned ? 'ring-2 ring-yellow-300' : 'opacity-50 grayscale'}`}>
              <div className={`text-4xl mb-2 ${earned ? 'pop' : ''}`}>{b.icon}</div>
              <p className={`text-sm font-black mb-1 ${earned ? 'text-gray-800' : 'text-gray-500'}`}>{b.label}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{b.desc}</p>
              {earned && <div className="mt-2 text-xs font-bold text-yellow-600 bg-yellow-50 rounded-lg py-1">✓ Đã đạt</div>}
            </div>
          )
        })}
      </div>

      {/* Personal stats */}
      <div className="card">
        <h3 className="font-black text-gray-700 mb-3">📊 Thống kê của bạn</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label:'Tổng câu đã làm', v: stats.total,        icon:'📝', color:'text-blue-600'   },
            { label:'Số câu đúng',     v: stats.correct,       icon:'✅', color:'text-green-600'  },
            { label:'Độ chính xác',    v: accuracy+'%',        icon:'🎯', color:'text-purple-600' },
            { label:'Streak tốt nhất', v: stats.bestStreak,    icon:'🔥', color:'text-orange-600' },
            { label:'Tổng XP',         v: stats.xp,            icon:'⭐', color:'text-yellow-600' },
            { label:'Huy hiệu',        v: earnedBadges.length, icon:'🏅', color:'text-pink-600'   },
          ].map((s,i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-3 text-center">
              <div className="text-xl mb-1">{s.icon}</div>
              <div className={`text-xl font-black ${s.color}`}>{s.v}</div>
              <div className="text-xs text-gray-400 font-medium mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
        <button onClick={() => { if(confirm('Xoá toàn bộ dữ liệu?')) quiz.resetAll() }}
          className="w-full mt-4 text-xs text-red-400 hover:text-red-600 font-bold border border-red-200 hover:border-red-300 py-2 rounded-xl transition-colors">
          🗑️ Xoá toàn bộ dữ liệu
        </button>
      </div>
    </div>
  )
}
