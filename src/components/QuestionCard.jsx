import { LEVEL_META, TYPE_META } from '../data/questions'
import { MultipleChoice, TrueFalse, ShortAnswer, EssayAnswer } from './Questions'

export default function QuestionCard({ question, type, level, qIndex, total, answered, onAnswer, onNext }) {
  if (!question) return (
    <div className="card text-center text-gray-400 py-10">
      <p className="text-4xl mb-3">🤷</p>
      <p className="font-bold">Chưa có câu hỏi cho mục này!</p>
      <p className="text-sm mt-1">Hãy chọn dạng bài khác nhé.</p>
    </div>
  )

  const lv = LEVEL_META[level]
  const tp = TYPE_META[type]

  return (
    <div className="card bounce-in">
      {/* Meta */}
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        <span className="badge font-black text-sm" style={{ background: lv.light, color: lv.dark }}>
          {lv.symbol} {lv.label}
        </span>
        <span className="badge bg-gray-100 text-gray-600 font-bold">
          {tp.icon} {tp.label}
        </span>
        <span className="ml-auto text-xs font-bold text-gray-400">
          Câu {qIndex + 1}/{total}
        </span>
      </div>

      {/* Body */}
      {type === 'tn'  && <MultipleChoice question={question} onAnswer={onAnswer} answered={answered} />}
      {type === 'ds'  && <TrueFalse      question={question} onAnswer={onAnswer} answered={answered} />}
      {type === 'tln' && <ShortAnswer    question={question} onAnswer={onAnswer} answered={answered} />}
      {type === 'tl'  && <EssayAnswer    question={question} onAnswer={onAnswer} answered={answered} level={level} />}

      {/* Next */}
      {answered && (
        <button onClick={onNext}
          className="btn btn-primary w-full mt-4">
          Câu tiếp theo →
        </button>
      )}
    </div>
  )
}
