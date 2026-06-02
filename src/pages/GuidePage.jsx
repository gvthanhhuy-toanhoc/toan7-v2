import MathText from '../components/MathText'
import { LEVEL_META, CHAPTERS } from '../data/questions'

const FORMULAS = [
  { ch:'Số hữu tỉ', icon:'½', items:[
    { t:'Tập số hữu tỉ',      f:'\\mathbb{Q}=\\left\\{\\dfrac{a}{b}\\mid a,b\\in\\mathbb{Z},b\\neq0\\right\\}' },
    { t:'Giá trị tuyệt đối',  f:'|x|=\\begin{cases}x & x\\geq0\\\\-x & x<0\\end{cases}' },
    { t:'Tỉ lệ thức',         f:'\\dfrac{a}{b}=\\dfrac{c}{d}\\Leftrightarrow ad=bc' },
    { t:'Dãy tỉ số bằng nhau',f:'\\dfrac{a}{m}=\\dfrac{b}{n}=\\dfrac{c}{p}=\\dfrac{a+b+c}{m+n+p}' },
  ]},
  { ch:'Số thực', icon:'√', items:[
    { t:'Căn bậc hai',        f:'\\sqrt{a^2}=|a|\\quad(a\\in\\mathbb{R})' },
    { t:'Tích căn',           f:'\\sqrt{a}\\cdot\\sqrt{b}=\\sqrt{ab}\\quad(a,b\\geq0)' },
    { t:'ℝ = ℚ ∪ vô tỉ',     f:'\\mathbb{R}=\\mathbb{Q}\\cup(\\mathbb{R}\\setminus\\mathbb{Q})' },
  ]},
  { ch:'Góc & đường thẳng', icon:'∠', items:[
    { t:'Góc phụ nhau',       f:'\\alpha+\\beta=90°' },
    { t:'Góc bù nhau',        f:'\\alpha+\\beta=180°' },
    { t:'Góc so le trong',    f:'d_1\\parallel d_2\\Leftrightarrow\\alpha_{\\text{so le}}=\\beta_{\\text{so le}}' },
  ]},
  { ch:'Tam giác', icon:'△', items:[
    { t:'Tổng ba góc',        f:'\\widehat{A}+\\widehat{B}+\\widehat{C}=180°' },
    { t:'Pythagore',          f:'BC^2=AB^2+AC^2\\quad(\\text{vuông tại }A)' },
    { t:'Trọng tâm',          f:'AG=\\dfrac{2}{3}AM\\quad(M\\text{ là trung điểm }BC)' },
    { t:'Đường phân giác',    f:'\\dfrac{BD}{DC}=\\dfrac{AB}{AC}' },
    { t:'Đường trung tuyến',  f:'m_a=\\dfrac{1}{2}\\sqrt{2b^2+2c^2-a^2}' },
  ]},
  { ch:'Đại số', icon:'x²', items:[
    { t:'Bình phương tổng',   f:'(a+b)^2=a^2+2ab+b^2' },
    { t:'Bình phương hiệu',   f:'(a-b)^2=a^2-2ab+b^2' },
    { t:'Hiệu hai bình phương',f:'a^2-b^2=(a+b)(a-b)' },
  ]},
]

export default function GuidePage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-5">
      <div className="text-center mb-6">
        <div className="text-5xl mb-2 float">📖</div>
        <h2 className="text-2xl font-black text-gray-800">Hướng dẫn & Công thức</h2>
        <p className="text-sm text-gray-500">Tham khảo nhanh khi luyện tập</p>
      </div>

      {/* Level guide */}
      <h3 className="font-black text-gray-700 mb-3">🎯 Hệ thống cấp độ</h3>
      <div className="grid grid-cols-2 gap-3 mb-6">
        {Object.entries(LEVEL_META).map(([k, m]) => {
          const descs = {
            dat:'Nhận biết, áp dụng công thức trực tiếp.',
            kha:'Hiểu sâu, giải bài 2–3 bước.',
            gioi:'Phân tích, lập luận nhiều bước.',
            xs:'Chứng minh, tư duy sáng tạo cao.',
          }
          return (
            <div key={k} className="card p-4" style={{ borderLeft:`4px solid ${m.color}` }}>
              <div className="text-2xl mb-1">{m.symbol}</div>
              <p className="font-black text-sm mb-1" style={{ color: m.dark }}>{m.label}</p>
              <p className="text-xs text-gray-500">{descs[k]}</p>
            </div>
          )
        })}
      </div>

      {/* Formula reference */}
      <h3 className="font-black text-gray-700 mb-3">📐 Công thức tham khảo</h3>
      <div className="flex flex-col gap-4 mb-6">
        {FORMULAS.map(sec => (
          <div key={sec.ch} className="card">
            <h4 className="font-black text-gray-700 mb-3 flex items-center gap-2">
              <span className="text-xl">{sec.icon}</span>{sec.ch}
            </h4>
            <div className="grid gap-2">
              {sec.items.map(item => (
                <div key={item.t} className="bg-gray-50 rounded-xl px-3 py-2">
                  <p className="text-xs text-gray-400 font-bold mb-1">{item.t}</p>
                  <div className="overflow-x-auto text-sm">
                    <MathText>{`$$${item.f}$$`}</MathText>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tips */}
      <div className="card bg-gradient-to-br from-green-50 to-teal-50 border-2 border-green-100">
        <h3 className="font-black text-green-800 mb-3">💡 Mẹo học tốt</h3>
        <div className="flex flex-col gap-2">
          {[
            ['🎯', 'Làm từ cấp Đạt → Xuất sắc theo thứ tự'],
            ['🔁', 'Dùng chế độ "Ôn sai" sau mỗi buổi học'],
            ['🏆', 'Lưu điểm vào Bảng vàng để theo dõi tiến bộ'],
            ['🔊', 'Âm thanh giúp tập trung và ghi nhớ tốt hơn'],
            ['📝', 'Tự luận giúp rèn tư duy lập luận bài bản'],
          ].map(([icon, tip]) => (
            <div key={tip} className="flex items-start gap-2 text-sm text-green-800">
              <span className="text-base flex-shrink-0">{icon}</span>
              <span className="font-medium">{tip}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
