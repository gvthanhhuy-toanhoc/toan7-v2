export const LEVEL_META = {
  dat:  { label:'Đạt',      symbol:'⭐',   color:'#22c55e', light:'#dcfce7', dark:'#15803d', rank:1 },
  kha:  { label:'Khá',      symbol:'⭐⭐',  color:'#3b82f6', light:'#dbeafe', dark:'#1d4ed8', rank:2 },
  gioi: { label:'Giỏi',     symbol:'⭐⭐⭐', color:'#a855f7', light:'#f3e8ff', dark:'#7e22ce', rank:3 },
  xs:   { label:'Xuất sắc', symbol:'🏆',   color:'#f97316', light:'#ffedd5', dark:'#c2410c', rank:4 },
}

export const TYPE_META = {
  tn:  { label:'Trắc nghiệm',  icon:'🔵', desc:'Chọn đáp án đúng' },
  ds:  { label:'Đúng / Sai',   icon:'✅', desc:'Nhận định mệnh đề' },
  tln: { label:'Trả lời ngắn', icon:'✏️', desc:'Điền kết quả' },
  tl:  { label:'Tự luận',      icon:'📝', desc:'Trình bày lời giải' },
}

export const CHAPTERS = [
  { id:'c1', title:'Số hữu tỉ',             icon:'½',  color:'#22c55e', desc:'ℚ, phép tính, tỉ lệ thức, luỹ thừa' },
  { id:'c2', title:'Số thực',               icon:'√',  color:'#3b82f6', desc:'Căn bậc hai, số vô tỉ, ℝ' },
  { id:'c3', title:'Góc & đường thẳng',     icon:'∠',  color:'#a855f7', desc:'Góc đối đỉnh, song song, so le' },
  { id:'c4', title:'Tam giác',              icon:'△',  color:'#f97316', desc:'Bằng nhau, cân, đều, Pythagore' },
  { id:'c5', title:'Thống kê & xác suất',  icon:'📊', color:'#ec4899', desc:'Bảng tần số, biểu đồ, xác suất' },
  { id:'c6', title:'Biểu thức đại số',     icon:'x²', color:'#eab308', desc:'Đơn thức, đa thức, nghiệm' },
]

export const BADGES = [
  { id:'first',    label:'Câu đầu tiên',  icon:'🎯', desc:'Hoàn thành câu hỏi đầu tiên',       cond: s => s.total >= 1 },
  { id:'streak5',  label:'Combo x5',      icon:'🔥', desc:'5 câu đúng liên tiếp',               cond: s => s.streak >= 5 },
  { id:'streak10', label:'Combo x10',     icon:'⚡', desc:'10 câu đúng liên tiếp',              cond: s => s.streak >= 10 },
  { id:'xp100',    label:'100 XP',        icon:'💎', desc:'Tích luỹ 100 XP',                    cond: s => s.xp >= 100 },
  { id:'xp500',    label:'500 XP',        icon:'👑', desc:'Tích luỹ 500 XP',                    cond: s => s.xp >= 500 },
  { id:'acc90',    label:'Siêu chính xác',icon:'🎖', desc:'Độ chính xác ≥ 90% (≥10 câu)',      cond: s => s.total >= 10 && s.correct/s.total >= .9 },
  { id:'done50',   label:'Học chăm',      icon:'📚', desc:'Làm 50 câu hỏi',                     cond: s => s.total >= 50 },
  { id:'master',   label:'Bậc thầy',      icon:'🦁', desc:'Đạt 4 cấp độ xuất sắc',             cond: s => s.xp >= 200 },
]

// ──────────────────────────────────────────────────────────
// CHƯƠNG 1 – SỐ HỮU TỈ
// ──────────────────────────────────────────────────────────
const c1_dat_tn = [
  { _ch:'c1', q:'Số nào sau đây là số hữu tỉ?', opts:['$\\sqrt{2}$','$\\pi$','$\\dfrac{3}{7}$','$\\sqrt{5}$'], ans:2, sol:'$\\dfrac{3}{7}\\in\\mathbb{Q}$ vì $3,7\\in\\mathbb{Z},\\;7\\neq0$.' },
  { _ch:'c1', q:'$\\dfrac{-3}{5}+\\dfrac{1}{5}$ bằng:', opts:['$\\dfrac{-2}{5}$','$\\dfrac{2}{5}$','$\\dfrac{-4}{5}$','$\\dfrac{4}{5}$'], ans:0, sol:'$\\dfrac{-3+1}{5}=\\dfrac{-2}{5}$' },
  { _ch:'c1', q:'$0{,}25$ viết dạng phân số tối giản là:', opts:['$\\dfrac{25}{100}$','$\\dfrac{1}{4}$','$\\dfrac{5}{20}$','$\\dfrac{2}{8}$'], ans:1, sol:'$0{,}25=\\dfrac{25}{100}=\\dfrac{1}{4}$' },
  { _ch:'c1', q:'Giá trị $|-7|$ bằng:', opts:['$-7$','$0$','$7$','$49$'], ans:2, sol:'$|-7|=7$ (giá trị tuyệt đối luôn không âm).' },
  { _ch:'c1', q:'$\\left(\\dfrac{1}{2}\\right)^3$ bằng:', opts:['$\\dfrac{1}{6}$','$\\dfrac{3}{2}$','$\\dfrac{1}{8}$','$\\dfrac{1}{4}$'], ans:2, sol:'$\\left(\\dfrac{1}{2}\\right)^3=\\dfrac{1}{8}$' },
  { _ch:'c1', q:'Số đối của $\\dfrac{-3}{5}$ là:', opts:['$\\dfrac{3}{5}$','$\\dfrac{-5}{3}$','$\\dfrac{5}{3}$','$-1$'], ans:0, sol:'$\\dfrac{-3}{5}+\\dfrac{3}{5}=0$ → số đối là $\\dfrac{3}{5}$.' },
  { _ch:'c1', q:'$\\dfrac{-2}{3}\\times\\dfrac{3}{4}$ bằng:', opts:['$\\dfrac{-1}{2}$','$\\dfrac{1}{2}$','$\\dfrac{-6}{12}$','$\\dfrac{-2}{4}$'], ans:0, sol:'$\\dfrac{-2\\times3}{3\\times4}=\\dfrac{-6}{12}=-\\dfrac{1}{2}$' },
  { _ch:'c1', q:'$\\left(-2\\right)^4$ bằng:', opts:['$-16$','$8$','$16$','$-8$'], ans:2, sol:'$(-2)^4=(-2)\\times(-2)\\times(-2)\\times(-2)=16$ (số chẵn mũ → dương).' },
  { _ch:'c1', q:'$\\dfrac{3}{4}-\\dfrac{1}{4}$ bằng:', opts:['$\\dfrac{2}{4}$','$\\dfrac{1}{4}$','$\\dfrac{1}{2}$','$\\dfrac{2}{0}$'], ans:2, sol:'$\\dfrac{3-1}{4}=\\dfrac{2}{4}=\\dfrac{1}{2}$' },
  { _ch:'c1', q:'Phân số nào bằng $\\dfrac{2}{3}$?', opts:['$\\dfrac{4}{9}$','$\\dfrac{6}{9}$','$\\dfrac{3}{4}$','$\\dfrac{4}{6}$'], ans:3, sol:'$\\dfrac{4}{6}=\\dfrac{2}{3}$ (rút gọn bởi $2$).' },
]

const c1_kha_tn = [
  { _ch:'c1', q:'Cho $\\dfrac{x}{2}=\\dfrac{y}{3}=\\dfrac{z}{5}$, $x+y+z=20$. Tìm $x$:', opts:['$2$','$4$','$3$','$5$'], ans:1, sol:'$10k=20\\Rightarrow k=2\\Rightarrow x=2k=4$' },
  { _ch:'c1', q:'$\\left(-\\dfrac{2}{3}\\right)^2+\\dfrac{1}{9}$ bằng:', opts:['$\\dfrac{5}{9}$','$\\dfrac{1}{3}$','$1$','$\\dfrac{7}{9}$'], ans:0, sol:'$\\dfrac{4}{9}+\\dfrac{1}{9}=\\dfrac{5}{9}$' },
  { _ch:'c1', q:'$3$ số tỉ lệ $2:3:5$ và tổng $=30$. Số lớn nhất là:', opts:['$10$','$15$','$9$','$6$'], ans:1, sol:'$10k=30\\Rightarrow k=3$. Max$=5k=15$.' },
  { _ch:'c1', q:'$\\dfrac{5}{6}-\\dfrac{1}{4}+\\dfrac{1}{12}$ bằng:', opts:['$\\dfrac{2}{3}$','$\\dfrac{7}{12}$','$\\dfrac{3}{4}$','$\\dfrac{5}{12}$'], ans:0, sol:'LCD$=12$: $\\dfrac{10-3+1}{12}=\\dfrac{8}{12}=\\dfrac{2}{3}$' },
  { _ch:'c1', q:'Nghiệm của $|x-2|=5$ là:', opts:['$x=3$','$x=7$ hoặc $x=-3$','$x=-7$','$x=5$'], ans:1, sol:'$x-2=5\\Rightarrow x=7$; $x-2=-5\\Rightarrow x=-3$.' },
  { _ch:'c1', q:'$\\dfrac{a}{2}=\\dfrac{b}{3}$. Tỉ số $\\dfrac{a}{b}$ bằng:', opts:['$\\dfrac{2}{3}$','$\\dfrac{3}{2}$','$6$','$\\dfrac{1}{6}$'], ans:0, sol:'$a=2k,b=3k\\Rightarrow\\dfrac{a}{b}=\\dfrac{2}{3}$' },
  { _ch:'c1', q:'$(-1)^{2025}$ bằng:', opts:['$1$','$-1$','$0$','$2025$'], ans:1, sol:'$(-1)^{\\text{lẻ}}=-1$.' },
  { _ch:'c1', q:'$\\left(\\dfrac{3}{4}-\\dfrac{1}{2}\\right)\\times8$ bằng:', opts:['$2$','$1$','$4$','$6$'], ans:0, sol:'$\\dfrac{1}{4}\\times8=2$' },
]

const c1_gioi_tn = [
  { _ch:'c1', q:'Cho $\\dfrac{a}{b}=\\dfrac{c}{d}$. Kết luận nào SAI?', opts:['$\\dfrac{a+b}{b}=\\dfrac{c+d}{d}$','$\\dfrac{a}{c}=\\dfrac{b}{d}$','$\\dfrac{a-b}{b}=\\dfrac{c-d}{d}$','$\\dfrac{a}{b}=\\dfrac{a-c}{b-d}$'], ans:3, sol:'Ba tính chất đầu đúng. $\\dfrac{a-c}{b-d}\\neq\\dfrac{a}{b}$ trong TQ.' },
  { _ch:'c1', q:'$x,y,z>0$, $xyz=1$. Giá trị nhỏ nhất của $x+y+z$ là:', opts:['$1$','$2$','$3$','$\\dfrac{1}{3}$'], ans:2, sol:'AM-GM: $\\dfrac{x+y+z}{3}\\geq\\sqrt[3]{1}=1\\Rightarrow x+y+z\\geq3$.' },
  { _ch:'c1', q:'$\\dfrac{1}{1\\times2}+\\dfrac{1}{2\\times3}+\\cdots+\\dfrac{1}{99\\times100}$ bằng:', opts:['$\\dfrac{99}{100}$','$\\dfrac{100}{101}$','$\\dfrac{1}{100}$','$1$'], ans:0, sol:'$\\sum=1-\\dfrac{1}{100}=\\dfrac{99}{100}$ (kính thiên văn).' },
]

const c1_tln = [
  { _ch:'c1', q:'$\\dfrac{3}{4}+\\dfrac{1}{4}=$', ans:'1', alts:['1/1'], sol:'$\\dfrac{4}{4}=1$' },
  { _ch:'c1', q:'$|-15|=$', ans:'15', alts:[], sol:'$|-15|=15$' },
  { _ch:'c1', q:'$\\dfrac{2}{3}\\times\\left(-\\dfrac{3}{4}\\right)=$', ans:'-1/2', alts:['-0.5'], sol:'$\\dfrac{-6}{12}=-\\dfrac{1}{2}$' },
  { _ch:'c1', q:'Nếu $\\dfrac{a}{3}=\\dfrac{b}{5}$ và $a+b=16$, tìm $b$:', ans:'10', alts:[], sol:'$3k+5k=16\\Rightarrow k=2,\\;b=5k=10$' },
]

const c1_tl = [
  { _ch:'c1', q:'Tìm $x$: $\\dfrac{x}{3}=\\dfrac{4}{6}$', sol:'$\\dfrac{4}{6}=\\dfrac{2}{3}\\Rightarrow x=2$. Kiểm tra: $\\dfrac{2}{3}=\\dfrac{4}{6}$ ✓' },
  { _ch:'c1', q:'Tính $\\dfrac{1}{2}+\\dfrac{1}{3}+\\dfrac{1}{6}$', sol:'LCD$=6$: $\\dfrac{3+2+1}{6}=\\dfrac{6}{6}=1$' },
  { _ch:'c1', q:'Ba số $x,y,z$ tỉ lệ $1:2:3$, hiệu số lớn nhất và nhỏ nhất bằng $12$. Tính $y$:', sol:'$3k-k=2k=12\\Rightarrow k=6\\Rightarrow y=2k=12$' },
]

// ──────────────────────────────────────────────────────────
// CHƯƠNG 2 – SỐ THỰC
// ──────────────────────────────────────────────────────────
const c2_dat_tn = [
  { _ch:'c2', q:'$\\sqrt{49}$ bằng:', opts:['$7$','$-7$','$\\pm7$','$14$'], ans:0, sol:'$\\sqrt{49}=7$ (căn bậc hai số học, giá trị dương).' },
  { _ch:'c2', q:'$\\sqrt{2}$ là số:', opts:['Hữu tỉ','Nguyên','Vô tỉ','Tự nhiên'], ans:2, sol:'$\\sqrt{2}\\approx1{,}41421...$ không viết được dạng $\\dfrac{a}{b}$.' },
  { _ch:'c2', q:'$\\sqrt{0}$ bằng:', opts:['$1$','$0$','Không xác định','$-1$'], ans:1, sol:'$\\sqrt{0}=0$.' },
  { _ch:'c2', q:'$\\sqrt{25}+\\sqrt{16}$ bằng:', opts:['$\\sqrt{41}$','$9$','$7$','$11$'], ans:1, sol:'$5+4=9$.' },
  { _ch:'c2', q:'$\\mathbb{Q}\\cup(\\mathbb{R}\\setminus\\mathbb{Q})$ bằng:', opts:['$\\mathbb{Q}$','$\\mathbb{Z}$','$\\mathbb{R}$','$\\mathbb{N}$'], ans:2, sol:'Hữu tỉ $\\cup$ vô tỉ $=\\mathbb{R}$.' },
  { _ch:'c2', q:'$\\sqrt{100}$ bằng:', opts:['$50$','$10$','$-10$','$\\pm10$'], ans:1, sol:'$\\sqrt{100}=10$.' },
  { _ch:'c2', q:'$\\sqrt{a^2}$ bằng:', opts:['$a$','$-a$','$|a|$','$a^2$'], ans:2, sol:'$\\sqrt{a^2}=|a|$ với mọi $a\\in\\mathbb{R}$.' },
  { _ch:'c2', q:'Số nào là số vô tỉ?', opts:['$\\sqrt{4}$','$\\sqrt{9}$','$\\sqrt{16}$','$\\sqrt{3}$'], ans:3, sol:'$\\sqrt{4}=2,\\;\\sqrt{9}=3,\\;\\sqrt{16}=4$ đều là số nguyên. $\\sqrt{3}$ là vô tỉ.' },
]

const c2_kha_tn = [
  { _ch:'c2', q:'$\\sqrt{49}-\\sqrt{16}$ bằng:', opts:['$\\sqrt{33}$','$3$','$5$','$11$'], ans:1, sol:'$7-4=3$' },
  { _ch:'c2', q:'$\\sqrt{3}\\cdot\\sqrt{3}$ bằng:', opts:['$\\sqrt{6}$','$3$','$9$','$6$'], ans:1, sol:'$\\sqrt{3}\\cdot\\sqrt{3}=(\\sqrt{3})^2=3$' },
  { _ch:'c2', q:'$\\sqrt{12}-\\sqrt{3}$ bằng:', opts:['$\\sqrt{9}$','$\\sqrt{3}$','$3$','$1$'], ans:1, sol:'$2\\sqrt{3}-\\sqrt{3}=\\sqrt{3}$' },
  { _ch:'c2', q:'$(\\sqrt{5}-3)^2$ bằng:', opts:['$14-6\\sqrt{5}$','$14+6\\sqrt{5}$','$5-9$','$4$'], ans:0, sol:'$(\\sqrt{5})^2-2\\cdot3\\cdot\\sqrt{5}+9=5-6\\sqrt{5}+9=14-6\\sqrt{5}$' },
]

const c2_tln = [
  { _ch:'c2', q:'$\\sqrt{144}-\\sqrt{81}=$', ans:'3', alts:[], sol:'$12-9=3$' },
  { _ch:'c2', q:'$\\sqrt{(\\sqrt{5}-3)^2}=$', ans:'3-√5', alts:['3-sqrt(5)'], sol:'$\\sqrt{5}<3$ nên $|\\sqrt{5}-3|=3-\\sqrt{5}$' },
]

const c2_tl = [
  { _ch:'c2', q:'So sánh $\\sqrt{5}+1$ và $\\sqrt{6}$.', sol:'Bình phương: $(\\sqrt{5}+1)^2=6+2\\sqrt{5}>6=(\\sqrt{6})^2$.\nVì cả hai dương: $\\sqrt{5}+1>\\sqrt{6}$.' },
]

// ──────────────────────────────────────────────────────────
// CHƯƠNG 3 – GÓC & ĐƯỜNG THẲNG SONG SONG
// ──────────────────────────────────────────────────────────
const c3_dat_tn = [
  { _ch:'c3', q:'Góc bù của $70°$ là:', opts:['$20°$','$110°$','$290°$','$70°$'], ans:1, sol:'$180°-70°=110°$' },
  { _ch:'c3', q:'Góc phụ của $35°$ là:', opts:['$145°$','$55°$','$325°$','$35°$'], ans:1, sol:'$90°-35°=55°$' },
  { _ch:'c3', q:'Góc vuông có số đo:', opts:['$45°$','$180°$','$90°$','$60°$'], ans:2, sol:'Góc vuông $=90°$.' },
  { _ch:'c3', q:'Hai góc đối đỉnh thì:', opts:['Bù nhau','Phụ nhau','Bằng nhau','Kề nhau'], ans:2, sol:'Hai góc đối đỉnh bằng nhau.' },
  { _ch:'c3', q:'Tổng hai góc kề bù bằng:', opts:['$90°$','$180°$','$270°$','$360°$'], ans:1, sol:'Hai góc kề bù có tổng $=180°$.' },
  { _ch:'c3', q:'Hai đường thẳng song song bị cắt bởi đường thứ ba, góc so le trong:', opts:['Bù nhau','Phụ nhau','Bằng nhau','Kề bù'], ans:2, sol:'Góc so le trong bằng nhau khi hai đường thẳng song song.' },
  { _ch:'c3', q:'Góc bẹt có số đo:', opts:['$90°$','$45°$','$270°$','$180°$'], ans:3, sol:'Góc bẹt $=180°$.' },
  { _ch:'c3', q:'Hai đường thẳng song song bị cắt, góc đồng vị:', opts:['Bù nhau','Bằng nhau','Phụ nhau','Kề nhau'], ans:1, sol:'Góc đồng vị bằng nhau.' },
]

const c3_kha_tn = [
  { _ch:'c3', q:'Góc ngoài tại đỉnh $A$ của $\\triangle ABC$ bằng:', opts:['$\\widehat{A}$','$\\widehat{B}+\\widehat{C}$','$\\widehat{B}-\\widehat{C}$','$180°-\\widehat{A}$'], ans:1, sol:'Góc ngoài $=$ tổng hai góc trong không kề.' },
  { _ch:'c3', q:'Hai đường thẳng $a\\parallel b$, đường cắt $c$ tạo góc $70°$ với $a$. Góc so le tương ứng với $b$ là:', opts:['$110°$','$70°$','$20°$','$140°$'], ans:1, sol:'Góc so le trong bằng nhau: $70°$.' },
  { _ch:'c3', q:'Tổng bốn góc trong của tứ giác bằng:', opts:['$180°$','$270°$','$360°$','$540°$'], ans:2, sol:'Tổng bốn góc trong tứ giác $=360°$.' },
]

const c3_tln = [
  { _ch:'c3', q:'Góc bù của $120°$ là bao nhiêu độ?', ans:'60', alts:['60°'], sol:'$180°-120°=60°$' },
  { _ch:'c3', q:'Hai góc đối đỉnh. Một góc $=53°$. Góc kia $=$?', ans:'53', alts:['53°'], sol:'Góc đối đỉnh bằng nhau: $53°$.' },
]

const c3_tl = [
  { _ch:'c3', q:'Cho hai đường thẳng $a\\parallel b$, đường thẳng $c$ cắt $a$ tạo góc $65°$. Tính góc mà $c$ tạo với $b$.', sol:'Vì $a\\parallel b$, góc so le trong bằng nhau:\n$$\\alpha=65°$$\nGóc bù: $180°-65°=115°$.' },
]

// ──────────────────────────────────────────────────────────
// CHƯƠNG 4 – TAM GIÁC
// ──────────────────────────────────────────────────────────
const c4_dat_tn = [
  { _ch:'c4', q:'Tổng ba góc trong tam giác bằng:', opts:['$90°$','$270°$','$180°$','$360°$'], ans:2, sol:'Tổng ba góc trong tam giác $=180°$.' },
  { _ch:'c4', q:'Tam giác có ba cạnh bằng nhau gọi là:', opts:['Vuông','Cân','Tù','Đều'], ans:3, sol:'Tam giác đều có $3$ cạnh bằng nhau và $3$ góc $=60°$.' },
  { _ch:'c4', q:'Định lí Pythagore: Tam giác vuông tại $A$:', opts:['$BC^2=AB^2+AC^2$','$AB^2=BC^2+AC^2$','$AB^2=AC^2-BC^2$','$BC=AB+AC$'], ans:0, sol:'$$BC^2=AB^2+AC^2$$' },
  { _ch:'c4', q:'Tam giác cân tại $A$ thì:', opts:['$AB=BC$','$AB=AC$','$BC=AC$','$\\widehat{B}=\\widehat{A}$'], ans:1, sol:'Tam giác cân tại $A$: $AB=AC$.' },
  { _ch:'c4', q:'Đường trung tuyến là đoạn thẳng:', opts:['Từ đỉnh vuông góc cạnh đối','Từ đỉnh đến trung điểm cạnh đối','Phân giác góc','Từ đỉnh đến cạnh đối'], ans:1, sol:'Trung tuyến nối đỉnh đến trung điểm cạnh đối diện.' },
  { _ch:'c4', q:'Tam giác $ABC$ cân tại $A$, $\\widehat{A}=40°$. Góc $B$ bằng:', opts:['$40°$','$70°$','$100°$','$80°$'], ans:1, sol:'$\\widehat{B}=\\dfrac{180°-40°}{2}=70°$' },
  { _ch:'c4', q:'Ba đường trung tuyến của tam giác đồng quy tại:', opts:['Trực tâm','Tâm ngoại tiếp','Trọng tâm','Tâm nội tiếp'], ans:2, sol:'Ba đường trung tuyến đồng quy tại trọng tâm $G$.' },
]

const c4_kha_tn = [
  { _ch:'c4', q:'$\\triangle ABC$ vuông tại $A$, $AB=6$, $AC=8$. $BC=$?', opts:['$10$','$14$','$\\sqrt{28}$','$7$'], ans:0, sol:'$BC^2=36+64=100\\Rightarrow BC=10$' },
  { _ch:'c4', q:'Trọng tâm $G$ chia trung tuyến $AM$ theo tỉ lệ $AG:GM=$', opts:['$1:2$','$2:1$','$1:1$','$3:1$'], ans:1, sol:'$GA=\\dfrac{2}{3}AM,\\;GM=\\dfrac{1}{3}AM\\Rightarrow GA:GM=2:1$.' },
  { _ch:'c4', q:'$\\triangle ABC$ với $\\widehat{A}=90°$, $AB=5$, $BC=13$. $AC=$?', opts:['$8$','$12$','$\\sqrt{194}$','$10$'], ans:1, sol:'$AC^2=169-25=144\\Rightarrow AC=12$' },
  { _ch:'c4', q:'Đường phân giác $AD$ trong $\\triangle ABC$, $AB=3$, $AC=4$. $\\dfrac{BD}{DC}=$?', opts:['$\\dfrac{3}{4}$','$\\dfrac{4}{3}$','$\\dfrac{3}{7}$','$1$'], ans:0, sol:'Theo định lí đường phân giác: $\\dfrac{BD}{DC}=\\dfrac{AB}{AC}=\\dfrac{3}{4}$.' },
  { _ch:'c4', q:'$\\triangle ABC=\\triangle DEF$ theo trường hợp nào nếu $AB=DE$, $BC=EF$, $AC=DF$?', opts:['g.c.g','c.g.c','c.c.c','g.g.c'], ans:2, sol:'Ba cạnh bằng nhau → trường hợp c.c.c.' },
]

const c4_gioi_tn = [
  { _ch:'c4', q:'$\\triangle ABC$ cân tại $A$, $BC=8$, chu vi $=30$. $AB=$?', opts:['$11$','$8$','$7$','$15$'], ans:0, sol:'$2AB+8=30\\Rightarrow AB=11$' },
  { _ch:'c4', q:'Trong $\\triangle ABC$, $M$ trung điểm $BC$. Đường trung tuyến $AM$ thỏa:', opts:['$AM=\\dfrac{BC}{2}$','$AM<\\dfrac{AB+AC}{2}$','$AM>AB+AC$','$AM=AB-AC$'], ans:1, sol:'Bất đẳng thức trung tuyến: $AM<\\dfrac{AB+AC}{2}$.' },
]

const c4_tln = [
  { _ch:'c4', q:'$\\triangle ABC$ vuông tại $C$, $AB=10$, $AC=6$. $BC=$?', ans:'8', alts:[], sol:'$BC^2=100-36=64\\Rightarrow BC=8$' },
  { _ch:'c4', q:'$\\triangle ABC$: $\\widehat{A}=50°$, $\\widehat{B}=70°$. $\\widehat{C}=$?', ans:'60', alts:['60°'], sol:'$180°-50°-70°=60°$' },
]

const c4_tl = [
  { _ch:'c4', q:'Chứng minh: $\\triangle ABC$ có $\\widehat{B}=\\widehat{C}$ thì $AB=AC$.', hint:'Kẻ phân giác $AD$. Xét $\\triangle ABD$ và $\\triangle ACD$.', sol:'Kẻ phân giác $AD$ ($D\\in BC$).\nXét $\\triangle ABD$ và $\\triangle ACD$:\n• $\\widehat{B}=\\widehat{C}$ (gt)\n• $\\widehat{BAD}=\\widehat{CAD}$ (phân giác)\n• $AD$ chung\n$\\Rightarrow\\triangle ABD=\\triangle ACD$ (g.c.g)\n$\\Rightarrow AB=AC$ ✓ $\\blacksquare$' },
  { _ch:'c4', q:'$\\triangle ABC$ vuông tại $A$, đường cao $AH$. Chứng minh $AH^2=BH\\cdot HC$.', hint:'Chứng minh $\\triangle ABH\\sim\\triangle CAH$.', sol:'$\\triangle ABH\\sim\\triangle CAH$ (g.g).\n$$\\dfrac{AH}{HB}=\\dfrac{HC}{AH}\\Rightarrow AH^2=BH\\cdot HC\\quad\\blacksquare$$' },
]

// ──────────────────────────────────────────────────────────
// CHƯƠNG 5 – THỐNG KÊ & XÁC SUẤT
// ──────────────────────────────────────────────────────────
const c5_dat_tn = [
  { _ch:'c5', q:'Số trung bình cộng của $2, 4, 6, 8$ là:', opts:['$4$','$5$','$6$','$3$'], ans:1, sol:'$(2+4+6+8)/4=20/4=5$' },
  { _ch:'c5', q:'Tung xúc xắc một lần, xác suất được mặt $6$ là:', opts:['$\\dfrac{1}{6}$','$\\dfrac{1}{3}$','$\\dfrac{1}{2}$','$1$'], ans:0, sol:'$P=\\dfrac{1}{6}$ vì có $6$ kết quả đồng khả năng.' },
  { _ch:'c5', q:'Xác suất của một sự kiện chắc chắn bằng:', opts:['$0$','$0{,}5$','$1$','$2$'], ans:2, sol:'Xác suất sự kiện chắc chắn $=1$.' },
  { _ch:'c5', q:'Mode (Yếu vị) của $1,2,2,3,3,3,4$ là:', opts:['$2$','$3$','$4$','$1$'], ans:1, sol:'Giá trị $3$ xuất hiện nhiều nhất ($3$ lần).' },
  { _ch:'c5', q:'Tung đồng xu, xác suất được mặt ngửa là:', opts:['$\\dfrac{1}{4}$','$\\dfrac{1}{3}$','$\\dfrac{1}{2}$','$1$'], ans:2, sol:'$P(\\text{ngửa})=\\dfrac{1}{2}$.' },
]

const c5_kha_tn = [
  { _ch:'c5', q:'Trung vị của $1,3,5,7,9$ là:', opts:['$3$','$4$','$5$','$6$'], ans:2, sol:'Sắp xếp tăng dần: giá trị giữa là $5$.' },
  { _ch:'c5', q:'Trong $20$ học sinh, $12$ thích Toán. Tần suất thích Toán là:', opts:['$12$','$60\\%$','$0{,}4$','$8$'], ans:1, sol:'$\\dfrac{12}{20}=0{,}6=60\\%$' },
  { _ch:'c5', q:'Hộp có $3$ bi đỏ, $2$ bi xanh. Lấy ngẫu nhiên $1$ bi. $P(\\text{đỏ})=$?', opts:['$\\dfrac{2}{5}$','$\\dfrac{3}{5}$','$\\dfrac{1}{5}$','$\\dfrac{3}{2}$'], ans:1, sol:'$P=\\dfrac{3}{5}$' },
]

const c5_tln = [
  { _ch:'c5', q:'Điểm trung bình của $7, 8, 9, 6, 10$ là:', ans:'8', alts:[], sol:'$(7+8+9+6+10)/5=40/5=8$' },
  { _ch:'c5', q:'Xác suất tung xúc xắc được số chẵn là $P=$ ? (dạng phân số)', ans:'1/2', alts:['3/6','0.5'], sol:'$P=\\dfrac{3}{6}=\\dfrac{1}{2}$' },
]

const c5_tl = [
  { _ch:'c5', q:'Lớp $40$ HS, $24$ thích Toán, $30$ thích Văn, $10$ thích cả hai. Bao nhiêu em không thích môn nào?', sol:'Dùng bao hàm-loại trừ:\n$$|T\\cup V|=24+30-10=44$$\nNhưng chỉ có $40$ HS nên kiểm tra lại: $|T\\cup V|\\leq40$. Điều chỉnh: $|\\text{không thích gì}|=40-44=-4$?\nDữ liệu mâu thuẫn — thực tế $|T\\cup V|=44>40$ là không thể.\n**Bài cho mục suy luận:** Khi số liệu hợp lệ: $|\\text{không thích gì}|=40-|T\\cup V|$.' },
]

// ──────────────────────────────────────────────────────────
// CHƯƠNG 6 – BIỂU THỨC ĐẠI SỐ
// ──────────────────────────────────────────────────────────
const c6_dat_tn = [
  { _ch:'c6', q:'$2x$ là:', opts:['Hằng số','Đa thức','Đơn thức','Đa thức bậc hai'], ans:2, sol:'$2x$ là đơn thức (tích của hệ số $2$ và biến $x$).' },
  { _ch:'c6', q:'Bậc của đơn thức $5x^2y^3$ là:', opts:['$2$','$3$','$5$','$6$'], ans:2, sol:'Bậc $=2+3=5$.' },
  { _ch:'c6', q:'$(2x+3)+(x-1)$ bằng:', opts:['$3x+2$','$3x+4$','$x+2$','$2x+2$'], ans:0, sol:'$(2x+x)+(3-1)=3x+2$' },
  { _ch:'c6', q:'$2x+3=7$, $x$ bằng:', opts:['$1$','$2$','$3$','$5$'], ans:1, sol:'$2x=4\\Rightarrow x=2$' },
  { _ch:'c6', q:'Đa thức $x^2-4$ phân tích được thành:', opts:['$(x-2)^2$','$(x+2)(x-2)$','$(x+4)(x-1)$','$x(x-4)$'], ans:1, sol:'$x^2-4=x^2-2^2=(x+2)(x-2)$.' },
  { _ch:'c6', q:'$(a+b)^2$ bằng:', opts:['$a^2+b^2$','$a^2-2ab+b^2$','$a^2+2ab+b^2$','$a^2+ab+b^2$'], ans:2, sol:'$(a+b)^2=a^2+2ab+b^2$.' },
]

const c6_kha_tn = [
  { _ch:'c6', q:'$(a-b)^2$ bằng:', opts:['$a^2-b^2$','$a^2-2ab+b^2$','$a^2+2ab+b^2$','$(a-b)(a+b)$'], ans:1, sol:'$(a-b)^2=a^2-2ab+b^2$.' },
  { _ch:'c6', q:'$x^2-5x+6=0$, nghiệm là:', opts:['$x=1$ hoặc $6$','$x=2$ hoặc $3$','$x=-2$ hoặc $-3$','$x=5$'], ans:1, sol:'$(x-2)(x-3)=0\\Rightarrow x=2$ hoặc $x=3$.' },
  { _ch:'c6', q:'$3x-2=x+6$, $x$ bằng:', opts:['$2$','$4$','$-4$','$1$'], ans:1, sol:'$2x=8\\Rightarrow x=4$' },
  { _ch:'c6', q:'$(x+1)(x-1)$ bằng:', opts:['$x^2+1$','$x^2-1$','$x^2-2x-1$','$x^2+2x-1$'], ans:1, sol:'Hằng đẳng thức: $a^2-b^2=(a+b)(a-b)$, ở đây $a=x,b=1$.' },
]

const c6_tln = [
  { _ch:'c6', q:'$x^2-9=(x+?)(x-3)$, $?=$', ans:'3', alts:[], sol:'$x^2-9=(x+3)(x-3)$.' },
  { _ch:'c6', q:'$(2x+1)^2=4x^2+?x+1$, $?=$', ans:'4', alts:[], sol:'$(2x+1)^2=4x^2+4x+1\\Rightarrow?=4$.' },
]

const c6_tl = [
  { _ch:'c6', q:'Chứng minh $n^3-n\\;\\vdots\\;6$ với $n\\in\\mathbb{Z}$.', hint:'$n^3-n=n(n-1)(n+1)$ — tích $3$ số nguyên liên tiếp.', sol:'$n^3-n=(n-1)n(n+1)$: tích $3$ số nguyên liên tiếp.\n• Chia hết $2$: có ít nhất $1$ số chẵn.\n• Chia hết $3$: có đúng $1$ số chia hết $3$.\n$\\Rightarrow 6\\mid n^3-n$ ✓ $\\blacksquare$' },
  { _ch:'c6', q:'Giải phương trình $x^2-7x+12=0$.', sol:'$x^2-7x+12=(x-3)(x-4)=0$\n$$\\Rightarrow x=3\\quad\\text{hoặc}\\quad x=4$$' },
]

// ──────────────────────────────────────────────────────────
// TỔNG HỢP XUẤT SẮC (không phân chương cụ thể)
// ──────────────────────────────────────────────────────────
const xs_tn = [
  { q:'$\\dfrac{a}{2}=\\dfrac{b}{3}=\\dfrac{c}{5}$, $a+b+c=30$. $a^2+b^2+c^2=$?', opts:['$342$','$200$','$300$','$160$'], ans:0, sol:'$k=3\\Rightarrow a=6,b=9,c=15$. $36+81+225=342$.' },
  { q:'$p$ nguyên tố $>3\\Rightarrow 12\\mid(p^2-1)$. Điều này:', opts:['Đúng với một số $p$','Đúng với mọi $p$','Sai','Chỉ đúng với $p=5$'], ans:1, sol:'$p^2-1=(p-1)(p+1)$. Tích hai số chẵn liên tiếp chia $4$; một chia $3$. Vậy $\\vdots12$.' },
  { q:'Diện tích $\\triangle$ với $A(0,0)$, $B(4,0)$, $C(1,3)$ là:', opts:['$6$','$5$','$4$','$8$'], ans:0, sol:'$S=\\dfrac{1}{2}|x_A(y_B-y_C)+x_B(y_C-y_A)+x_C(y_A-y_B)|=\\dfrac{1}{2}|12|=6$.' },
  { q:'$1^2+2^2+3^2+\\cdots+10^2=$', opts:['$385$','$380$','$375$','$400$'], ans:0, sol:'$\\dfrac{10\\cdot11\\cdot21}{6}=385$.' },
  { q:'$1+2+3+\\cdots+100=$', opts:['$5000$','$5050$','$4950$','$5100$'], ans:1, sol:'$\\dfrac{100\\cdot101}{2}=5050$.' },
]

const xs_tl = [
  { q:'Chứng minh: Trong $\\triangle ABC$, $M$ là trung điểm $BC$ thì $AM<\\dfrac{AB+AC}{2}$.', hint:'Kéo dài $AM$ đến $D$, $MD=MA$. Chứng minh $ABDC$ là hình bình hành.', sol:'Kéo dài $AM$ đến $D$: $MD=MA$.\n$ABDC$ là hình bình hành (hai đường chéo cắt tại trung điểm).\n$\\Rightarrow BD=AC$.\nTrong $\\triangle ABD$: $AB+BD>AD=2AM$.\nThay $BD=AC$: $AB+AC>2AM\\Rightarrow AM<\\dfrac{AB+AC}{2}$ $\\blacksquare$' },
  { q:'Cho $a+b+c=0$. Tính $M=\\dfrac{a^2}{bc}+\\dfrac{b^2}{ac}+\\dfrac{c^2}{ab}$.', hint:'$a+b+c=0\\Rightarrow a^3+b^3+c^3=3abc$.', sol:'$M=\\dfrac{a^3+b^3+c^3}{abc}=\\dfrac{3abc}{abc}=3$.' },
]

// ──────────────────────────────────────────────────────────
// XÂY DỰNG DB
// ──────────────────────────────────────────────────────────
export const DB = {
  dat: {
    tn:  [...c1_dat_tn, ...c2_dat_tn, ...c3_dat_tn, ...c4_dat_tn, ...c5_dat_tn, ...c6_dat_tn],
    ds:  [
      { stmts:[{s:'$\\dfrac{0}{5}$ là số hữu tỉ',c:true},{s:'$\\sqrt{4}$ là số vô tỉ',c:false},{s:'$|-3|=3$',c:true},{s:'$0$ không phải số hữu tỉ',c:false}], sol:'$\\sqrt{4}=2\\in\\mathbb{Z}$ (hữu tỉ). $0=\\dfrac{0}{1}\\in\\mathbb{Q}$.' },
      { stmts:[{s:'Hai góc bù nhau có tổng $=180°$',c:true},{s:'Góc vuông $=90°$',c:true},{s:'Hai góc phụ nhau có tổng $=180°$',c:false},{s:'Góc bẹt $=180°$',c:true}], sol:'Hai góc phụ nhau có tổng $=90°$.' },
      { stmts:[{s:'$(-2)^2=4$',c:true},{s:'$-2^2=4$',c:false},{s:'$(-1)^{100}=1$',c:true},{s:'$(-1)^{101}=1$',c:false}], sol:'$-2^2=-(2^2)=-4$. $(-1)^{101}=-1$.' },
      { stmts:[{s:'$\\sqrt{a^2}=a$ với mọi $a\\in\\mathbb{R}$',c:false},{s:'$|x|\\geq0$',c:true},{s:'$\\sqrt{a^2}=|a|$',c:true},{s:'$\\sqrt{9}=\\pm3$',c:false}], sol:'$\\sqrt{a^2}=|a|$. $\\sqrt{9}=3$ (dương).' },
    ],
    tln: [...c1_tln, ...c2_tln, ...c3_tln, ...c4_tln, ...c5_tln, ...c6_tln],
    tl:  [...c1_tl,  ...c2_tl,  ...c3_tl,  ...c4_tl,  ...c5_tl,  ...c6_tl],
  },
  kha: {
    tn:  [...c1_kha_tn, ...c2_kha_tn, ...c3_kha_tn, ...c4_kha_tn, ...c5_kha_tn, ...c6_kha_tn],
    ds:  [
      { stmts:[{s:'$|x|\\geq0$ với mọi $x$',c:true},{s:'Nếu $a>b$ thì $a^2>b^2$',c:false},{s:'Góc ngoài $\\triangle=$ tổng $2$ góc trong không kề',c:true},{s:'Tam giác đều là tam giác cân',c:true}], sol:'Phản ví dụ: $a=-3,b=1$, $a<b$ nhưng $a^2>b^2$.' },
      { stmts:[{s:'Tam giác đều là tam giác cân',c:true},{s:'Tam giác cân là tam giác đều',c:false},{s:'$BC^2=AB^2+AC^2$ khi vuông tại $A$',c:true},{s:'Tam giác có thể có $2$ góc tù',c:false}], sol:'Tam giác cân chưa chắc đều. Tổng góc $=180°$ nên không thể $2$ góc tù.' },
      { stmts:[{s:'$3$ số tỉ lệ $2:3:5$ luôn là $2,3,5$',c:false},{s:'$\\dfrac{a}{b}=\\dfrac{c}{d}\\Rightarrow ad=bc$',c:true},{s:'$\\dfrac{a+b}{b}=\\dfrac{a}{b}+1$',c:true},{s:'$\\dfrac{a}{b}=\\dfrac{ka}{kb}$ với $k=0$',c:false}], sol:'$3$ số tỉ lệ $2:3:5$ có thể là $4,6,10$. $k=0$ vì $kb=0$.' },
    ],
    tln: [...c1_tln, ...c2_tln, ...c3_tln, ...c4_tln],
    tl:  [
      { _ch:'c1', q:'Tìm $x$: $|3x-6|=9$', hint:'$|A|=b\\Leftrightarrow A=b$ hoặc $A=-b$', sol:'$3x-6=9\\Rightarrow x=5$; $3x-6=-9\\Rightarrow x=-1$.' },
      { _ch:'c4', q:'$\\triangle ABC$ cân tại $A$, chu vi $=30$, $BC=8$. Tính $AB$:', sol:'$2AB+8=30\\Rightarrow AB=11$ cm.' },
    ],
  },
  gioi: {
    tn:  [...c1_gioi_tn, ...c2_kha_tn, ...c3_kha_tn, ...c4_gioi_tn, ...c5_kha_tn, ...c6_kha_tn],
    ds:  [
      { stmts:[{s:'$\\sqrt{a}\\cdot\\sqrt{b}=\\sqrt{ab}$ với $a,b\\geq0$',c:true},{s:'$\\sqrt{a+b}=\\sqrt{a}+\\sqrt{b}$',c:false},{s:'$(\\sqrt{a})^2=a$ với $a\\geq0$',c:true},{s:'$\\sqrt{a^2}=a$ với mọi $a$',c:false}], sol:'$\\sqrt{a+b}\\neq\\sqrt{a}+\\sqrt{b}$. $\\sqrt{a^2}=|a|$.' },
      { stmts:[{s:'Ba đường trung tuyến đồng quy tại trọng tâm',c:true},{s:'Ba đường phân giác đồng quy tại tâm ngoại tiếp',c:false},{s:'Ba đường cao của $\\triangle$ đồng quy',c:true},{s:'Ba đường trung trực đồng quy tại tâm ngoại tiếp',c:true}], sol:'Ba đường phân giác đồng quy tại tâm **nội tiếp**.' },
    ],
    tln: [
      { _ch:'c1', q:'$\\dfrac{a}{2}=\\dfrac{b}{3}=\\dfrac{c}{5}$, $a+b+c=30$. $b-a=$?', ans:'3', alts:[], sol:'$k=3,a=6,b=9\\Rightarrow b-a=3$' },
      { _ch:'c4', q:'$\\triangle ABC$ vuông tại $C$, $AB=10$, $AC=6$. $BC=$?', ans:'8', alts:[], sol:'$BC^2=100-36=64\\Rightarrow BC=8$' },
    ],
    tl:  [...c4_tl, ...c6_tl],
  },
  xs: {
    tn:  xs_tn,
    ds:  [
      { stmts:[{s:'$p$ nguyên tố $>3\\Rightarrow12\\mid(p^2-1)$',c:true},{s:'$\\sqrt{2}+\\sqrt{3}=\\sqrt{5}$',c:false},{s:'Đường trung tuyến $m_a<\\dfrac{b+c}{2}$',c:true},{s:'$\\dfrac{a+c}{b+d}=\\dfrac{a}{b}$ nếu $\\dfrac{a}{b}=\\dfrac{c}{d}$',c:true}], sol:'$\\sqrt{2}+\\sqrt{3}\\approx3{,}146\\neq\\sqrt{5}\\approx2{,}236$.' },
      { stmts:[{s:'$a^2\\geq0$ với mọi $a\\in\\mathbb{R}$',c:true},{s:'$a^2>b^2\\Rightarrow a>b$',c:false},{s:'$|a+b|\\leq|a|+|b|$',c:true},{s:'$|a-b|\\geq||a|-|b||$',c:true}], sol:'Phản ví dụ: $a=-5,b=3\\Rightarrow a^2=25>9=b^2$ nhưng $a<b$.' },
    ],
    tln: [
      { q:'$1+2+3+\\cdots+100=$', ans:'5050', alts:[], sol:'$S=\\dfrac{100\\cdot101}{2}=5050$.' },
      { _ch:'c1', q:'$\\dfrac{a}{3}=\\dfrac{b}{4}=\\dfrac{c}{5}$, $a-b+c=12$. $a+b+c=$?', ans:'36', alts:[], sol:'$(3-4+5)k=4k=12\\Rightarrow k=3\\Rightarrow12k=36$.' },
    ],
    tl:  xs_tl,
  },
}
