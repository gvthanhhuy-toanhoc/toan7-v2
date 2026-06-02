import { HashRouter, Routes, Route } from 'react-router-dom'
import Header       from './components/Header'
import { BadgeToast } from './components/Confetti'
import PracticePage  from './pages/PracticePage'
import ReviewPage    from './pages/ReviewPage'
import LeaderboardPage from './pages/LeaderboardPage'
import BadgesPage    from './pages/BadgesPage'
import GuidePage     from './pages/GuidePage'
import { useQuiz }   from './hooks/useQuiz'

export default function App() {
  const quiz = useQuiz()
  return (
    <HashRouter>
      <div className="min-h-screen">
        <Header stats={quiz.stats} accuracy={quiz.accuracy} wrongCount={quiz.wrongList.length} />
        <BadgeToast badges={quiz.newBadges} />
        <Routes>
          <Route path="/"       element={<PracticePage   quiz={quiz} />} />
          <Route path="/review" element={<ReviewPage     quiz={quiz} />} />
          <Route path="/board"  element={<LeaderboardPage quiz={quiz} />} />
          <Route path="/badges" element={<BadgesPage     quiz={quiz} />} />
          <Route path="/guide"  element={<GuidePage />} />
        </Routes>
      </div>
    </HashRouter>
  )
}
