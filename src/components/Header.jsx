import { NavLink } from 'react-router-dom'

const NAV = [
  { to:'/',         icon:'🎯', label:'Luyện tập' },
  { to:'/review',   icon:'🔁', label:'Ôn sai' },
  { to:'/board',    icon:'🏆', label:'Bảng vàng' },
  { to:'/badges',   icon:'🏅', label:'Huy hiệu' },
  { to:'/guide',    icon:'📖', label:'Hướng dẫn' },
]

export default function Header({ stats, accuracy, wrongCount }) {
  const xpForNext = 100
  const xpPct = Math.min((stats.xp % xpForNext) / xpForNext * 100, 100)
  const lvl = Math.floor(stats.xp / xpForNext) + 1

  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-20 border-b border-gray-100">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex items-center justify-between h-14 gap-2">
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center text-white font-black text-lg shadow-md">
              T₇
            </div>
            <div className="hidden sm:block">
              <p className="font-black text-gray-800 text-sm leading-none">Toán 7</p>
              <p className="text-xs text-gray-400 leading-none mt-0.5">Kết nối Tri thức</p>
            </div>
          </div>

          <nav className="flex gap-0.5 overflow-x-auto">
            {NAV.map(n => (
              <NavLink key={n.to} to={n.to} end={n.to=='/'}
                className={({ isActive }) =>
                  `px-2 sm:px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap relative ${
                    isActive ? 'bg-green-100 text-green-700' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                  }`
                }
              >
                <span>{n.icon}</span>
                <span className="hidden sm:inline ml-1">{n.label}</span>
                {n.to === '/review' && wrongCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                    {wrongCount > 9 ? '9+' : wrongCount}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex-shrink-0 text-right">
            <div className="flex items-center gap-1 mb-0.5">
              <span className="text-xs font-black text-yellow-600">Lv.{lvl}</span>
              <span className="text-xs text-yellow-500">⭐ {stats.xp} XP</span>
            </div>
            <div className="xp-track w-20">
              <div className="xp-fill" style={{ width: xpPct + '%' }} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
