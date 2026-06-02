export const LEVEL_META = {
  dat:  { label:'Đạt',      symbol:'⭐',  color:'#22c55e', light:'#dcfce7', dark:'#15803d', rank:1 },
  kha:  { label:'Khá',      symbol:'⭐⭐', color:'#3b82f6', light:'#dbeafe', dark:'#1d4ed8', rank:2 },
  gioi: { label:'Giỏi',     symbol:'⭐⭐⭐',color:'#a855f7', light:'#f3e8ff', dark:'#7e22ce', rank:3 },
  xs:   { label:'Xuất sắc', symbol:'🏆',  color:'#f97316', light:'#ffedd5', dark:'#c2410c', rank:4 },
}

export const TYPE_META = {
  tn:  { label:'Trắc nghiệm',  icon:'🔵', desc:'Chọn đáp án đúng' },
  ds:  { label:'Đúng / Sai',   icon:'✅', desc:'Nhận định mệnh đề' },
  tln: { label:'Trả lời ngắn', icon:'✏️', desc:'Điền kết quả' },
  tl:  { label:'Tự luận',      icon:'📝', desc:'Trình bày lời giải' },
}

export const CHAPTERS = [
  { id:'c1', title:'Số hữu tỉ',               icon:'½',  color:'#22c55e' },
  { id:'c2', title:'Số thực',                  icon:'√',  color:'#3b82f6' },
  { id:'c3', title:'Góc & đường thẳng',        icon:'∠',  color:'#a855f7' },
  { id:'c4', title:'Tam giác',                 icon:'△',  color:'#f97316' },
  { id:'c5', title:'Thống kê & xác suất',      icon:'📊', color:'#ec4899' },
  { id:'c6', title:'Biểu thức đại số',         icon:'x²', color:'#eab308' },
]

export const BADGES = [
  { id:'first',    label:'Câu đầu tiên', icon:'🎯', desc:'Hoàn thành câu hỏi đầu tiên',   cond: s => s.total >= 1 },
  { id:'streak5',  label:'Combo x5',     icon:'🔥', desc:'5 câu đúng liên tiếp',           cond: s => s.streak >= 5 },
  { id:'streak10', label:'Combo x10',    icon:'⚡', desc:'10 câu đúng liên tiếp',          cond: s => s.streak >= 10 },
  { id:'xp100',    label:'100 XP',       icon:'💎', desc:'Tích luỹ 100 XP',                cond: s => s.xp >= 100 },
  { id:'xp500',    label:'500 XP',       icon:'👑', desc:'Tích luỹ 500 XP',                cond: s => s.xp >= 500 },
  { id:'acc90',    label:'Siêu chính xác',icon:'🎖', desc:'Độ chính xác ≥ 90% (≥10 câu)', cond: s => s.total >= 10 && s.correct/s.total >= .9 },
  { id:'done50',   label:'Học chăm',     icon:'📚', desc:'Làm 50 câu hỏi',                cond: s => s.total >= 50 },
  { id:'master',   label:'Bậc thầy',     icon:'🦁', desc:'Đạt cả 4 cấp độ',              cond: s => s.levelsUnlocked >= 4 },
]

// ─── DAT ──────────────────────────────────────────────────────────
const dat_tn = [
  { q:'Số nào sau đây là số hữu tỉ?', opts:['$\\sqrt{2}$','$\\pi$','$\\dfrac{3}{7}$','$\\sqrt{5}$'], ans:2, sol:'$\\dfrac{3}{7}$ viết được dưới dạng $\\dfrac{a}{b}$ với $a,b\\in\\mathbb{Z}, b\\neq 0$ → là số hữu tỉ.' },
  { q:'$\\dfrac{-2}{3} + \\dfrac{1}{3}$ bằng:', opts:['$\\dfrac{-1}{3}$','$\\dfrac{1}{3}$','$\\dfrac{-3}{3}$','$1$'], ans:0, sol:'$\\dfrac{-2+1}{3}=\\dfrac{-1}{3}$' },
  { q:'$0{,}25$ viết dưới dạng phân số tối giản là:', opts:['$\\dfrac{25}{100}$','$\\dfrac{1}{4}$','$\\dfrac{5}{20}$','$\\dfrac{2}{8}$'], ans:1, sol:'$0{,}25=\\dfrac{25}{100}=\\dfrac{1}{4}$' },
  { q:'Giá trị của $|-7|$ là:', opts:['$-7$','$7$','$0$','$49$'], ans:1, sol:'$|-7|=7$ (giá trị tuyệt đối luôn không âm).' },
  { q:'$\\left(\\dfrac{1}{2}\\right)^3$ bằng:', opts:['$\\dfrac{1}{6}$','$\\dfrac{3}{2}$','$\\dfrac{1}{8}$','$\\dfrac{1}{4}$'], ans:2, sol:'$\\left(\\dfrac{1}{2}\\right)^3=\\dfrac{1^3}{2^3}=\\dfrac{1}{8}$' },
  { q:'Số đối của $\\dfrac{-3}{5}$ là:', opts:['$\\dfrac{3}{5}$','$\\dfrac{-5}{3}$','$\\dfrac{5}{3}$','$\\dfrac{-3}{5}$'], ans:0, sol:'Số đối của $\\dfrac{-3}{5}$ là $\\dfrac{3}{5}$ vì $\\dfrac{-3}{5}+\\dfrac{3}{5}=0$.' },
  { q:'$\\sqrt{25}$ bằng:', opts:['$5$','$-5$','$\\pm 5$','$12{,}5$'], ans:0, sol:'$\\sqrt{25}=5$ (căn bậc hai số học, lấy giá trị dương).' },
  { q:'Góc phụ của $40°$ là:', opts:['$140°$','$50°$','$60°$','$320°$'], ans:1, sol:'Hai góc phụ nhau có tổng $=90°$. Vậy $90°-40°=50°$.' },
  { q:'Tổng ba góc trong của một tam giác bằng:', opts:['$90°$','$360°$','$180°$','$270°$'], ans:2, sol:'Định lý: tổng ba góc trong của tam giác $=180°$.' },
  { q:'Tam giác có ba cạnh bằng nhau gọi là:', opts:['Tam giác vuông','Tam giác cân','Tam giác tù','Tam giác đều'], ans:3, sol:'Tam giác đều có ba cạnh bằng nhau và ba góc đều bằng $60°$.' },
]

const dat_ds = [
  { stmts:[{s:'$\\dfrac{0}{5}$ là số hữu tỉ',c:true},{s:'$\\sqrt{4}$ là số vô tỉ',c:false},{s:'$|-3|=3$',c:true},{s:'$0$ không phải số hữu tỉ',c:false}], sol:'• $\\dfrac{0}{5}=0=\\dfrac{0}{1}\\in\\mathbb{Q}$ ✓\n• $\\sqrt{4}=2\\in\\mathbb{Z}\\subset\\mathbb{Q}$ → hữu tỉ ✗\n• $|-3|=3$ ✓\n• $0=\\dfrac{0}{1}\\in\\mathbb{Q}$ ✗' },
  { stmts:[{s:'Hai góc bù nhau có tổng $=180°$',c:true},{s:'Góc vuông có số đo $=90°$',c:true},{s:'Hai góc phụ nhau có tổng $=180°$',c:false},{s:'Góc bẹt có số đo $=180°$',c:true}], sol:'Hai góc phụ nhau có tổng $=90°$ (không phải $180°$) ✗' },
  { stmts:[{s:'$\\left(-2\\right)^2=4$',c:true},{s:'$-2^2=4$',c:false},{s:'$\\left(-1\\right)^{100}=1$',c:true},{s:'$\\left(-1\\right)^{101}=1$',c:false}], sol:'• $(-2)^2=4$ ✓\n• $-2^2=-(2^2)=-4$ ✗\n• $(-1)^{100}=1$ (lũy thừa chẵn) ✓\n• $(-1)^{101}=-1$ ✗' },
]

const dat_tln = [
  { q:'Tính $\\dfrac{3}{4}+\\dfrac{1}{4}=$', ans:'1', alts:['1/1'], sol:'$\\dfrac{3+1}{4}=\\dfrac{4}{4}=1$' },
  { q:'$|{-15}|=$', ans:'15', alts:[], sol:'$|-15|=15$' },
  { q:'Góc bù của $120°$ là bao nhiêu độ?', ans:'60', alts:['60°'], sol:'$180°-120°=60°$' },
  { q:'Tính $\\dfrac{2}{3}\\times\\dfrac{3}{4}=$', ans:'1/2', alts:['0.5'], sol:'$\\dfrac{2\\times3}{3\\times4}=\\dfrac{6}{12}=\\dfrac{1}{2}$' },
]

const dat_tl = [
  { q:'Tìm $x$ biết: $\\dfrac{x}{5}=\\dfrac{2}{10}$', sol:'Rút gọn: $\\dfrac{2}{10}=\\dfrac{1}{5}$\n$$\\dfrac{x}{5}=\\dfrac{1}{5}\\Rightarrow x=1$$' },
  { q:'Tính: $\\dfrac{1}{2}+\\dfrac{1}{3}+\\dfrac{1}{6}$', sol:'Quy đồng mẫu $6$:\n$$\\dfrac{3}{6}+\\dfrac{2}{6}+\\dfrac{1}{6}=\\dfrac{6}{6}=1$$' },
]

// ─── KHA ──────────────────────────────────────────────────────────
const kha_tn = [
  { q:'Cho $\\dfrac{x}{2}=\\dfrac{y}{3}=\\dfrac{z}{5}$ và $x+y+z=20$. Tìm $x$:', opts:['$2$','$4$','$3$','$5$'], ans:1, sol:'$10k=20\\Rightarrow k=2\\Rightarrow x=2k=4$' },
  { q:'$\\left(-\\dfrac{3}{4}\\right)^2+\\dfrac{1}{16}$ bằng:', opts:['$\\dfrac{5}{8}$','$\\dfrac{10}{16}$','$\\dfrac{9}{16}+\\dfrac{1}{16}=\\dfrac{10}{16}=\\dfrac{5}{8}$','$\\dfrac{8}{16}$'], ans:2, sol:'$\\dfrac{9}{16}+\\dfrac{1}{16}=\\dfrac{10}{16}=\\dfrac{5}{8}$' },
  { q:'Tam giác $ABC$ cân tại $A$, $\\widehat{B}=65°$. Góc $A$ bằng:', opts:['$65°$','$50°$','$70°$','$130°$'], ans:1, sol:'$\\widehat{B}=\\widehat{C}=65°$. $\\widehat{A}=180°-65°-65°=50°$' },
  { q:'Nghiệm của phương trình $|x-2|=5$ là:', opts:['$x=3$','$x=7$ hoặc $x=-3$','$x=-7$','$x=5$'], ans:1, sol:'TH1: $x-2=5\\Rightarrow x=7$\nTH2: $x-2=-5\\Rightarrow x=-3$' },
  { q:'$\\sqrt{3}$ là:', opts:['Số hữu tỉ','Số nguyên','Số vô tỉ','Số âm'], ans:2, sol:'$\\sqrt{3}\\approx1{,}732...$ không viết được dưới dạng $\\dfrac{a}{b}$ → số vô tỉ.' },
  { q:'Tính $\\dfrac{5}{6}-\\dfrac{1}{4}+\\dfrac{1}{12}$:', opts:['$\\dfrac{2}{3}$','$\\dfrac{7}{12}$','$\\dfrac{3}{4}$','$\\dfrac{5}{12}$'], ans:0, sol:'LCD$=12$: $\\dfrac{10}{12}-\\dfrac{3}{12}+\\dfrac{1}{12}=\\dfrac{8}{12}=\\dfrac{2}{3}$' },
  { q:'Đường trung tuyến của tam giác là:', opts:['Đường cao','Đoạn thẳng nối đỉnh đến trung điểm cạnh đối','Đường phân giác','Đường vuông góc với cạnh'], ans:1, sol:'Đường trung tuyến nối một đỉnh đến trung điểm của cạnh đối diện.' },
  { q:'$3$ số tỉ lệ với $1:2:3$ và tổng bằng $36$. Số lớn nhất là:', opts:['$6$','$12$','$18$','$9$'], ans:2, sol:'$6k=36\\Rightarrow k=6$. Số lớn nhất $=3k=18$.' },
  { q:'$\\sqrt{49}-\\sqrt{16}$ bằng:', opts:['$\\sqrt{33}$','$3$','$5$','$\\sqrt{3}$'], ans:1, sol:'$\\sqrt{49}-\\sqrt{16}=7-4=3$' },
  { q:'Tam giác vuông $ABC$ vuông tại $A$. Hệ thức nào đúng?', opts:['$AB^2=BC^2+AC^2$','$BC=AB+AC$','$BC^2=AB^2+AC^2$','$AC^2=AB^2-BC^2$'], ans:2, sol:'Định lý Pythagore: cạnh huyền$^2=$ tổng bình phương hai cạnh góc vuông.\n$$BC^2=AB^2+AC^2$$' },
]

const kha_ds = [
  { stmts:[{s:'$\\sqrt{a^2}=a$ với mọi $a\\in\\mathbb{R}$',c:false},{s:'$|x|\\geq 0$ với mọi $x$',c:true},{s:'$\\sqrt{a^2}=|a|$',c:true},{s:'$\\sqrt{9}=\\pm3$',c:false}], sol:'$\\sqrt{a^2}=|a|$, không phải $a$ (vd: $a=-3$, $\\sqrt{9}=3\\neq-3$). $\\sqrt{9}=3$ (dương).' },
  { stmts:[{s:'Tam giác đều là tam giác cân',c:true},{s:'Tam giác cân là tam giác đều',c:false},{s:'Góc ngoài tam giác = tổng 2 góc trong không kề',c:true},{s:'Tam giác có thể có 2 góc tù',c:false}], sol:'Tam giác cân chưa chắc đều (2 cạnh bằng nhau thôi). Tổng góc $=180°$ nên không thể có 2 góc tù.' },
  { stmts:[{s:'$3$ số tỉ lệ $2:3:5$ thì luôn là $2,3,5$',c:false},{s:'Nếu $\\dfrac{a}{b}=\\dfrac{c}{d}$ thì $ad=bc$',c:true},{s:'$\\dfrac{a+b}{b}=\\dfrac{a}{b}+1$',c:true},{s:'$\\dfrac{a}{b}=\\dfrac{ka}{kb}$ với $k=0$',c:false}], sol:'3 số tỉ lệ $2:3:5$ có thể là $4,6,10$ (nhân $k=2$). $k=0$ không được vì $kb=0$.' },
]

const kha_tln = [
  { q:'Ba số $x,y,z$ tỉ lệ $3:4:5$, tổng $=24$. Tìm $y$:', ans:'8', alts:[], sol:'$12k=24\\Rightarrow k=2\\Rightarrow y=4k=8$' },
  { q:'$\\sqrt{144}-\\sqrt{81}=$', ans:'3', alts:[], sol:'$12-9=3$' },
  { q:'Tam giác $ABC$ vuông tại $A$, $AB=6$, $AC=8$. Tính $BC$:', ans:'10', alts:[], sol:'$BC^2=6^2+8^2=36+64=100\\Rightarrow BC=10$' },
  { q:'Tìm $x$: $\\dfrac{2x}{3}=\\dfrac{10}{3}$', ans:'5', alts:[], sol:'$2x=10\\Rightarrow x=5$' },
]

const kha_tl = [
  { q:'Tìm $x$ biết: $|3x-6|=9$', hint:'$|A|=b\\Leftrightarrow A=b$ hoặc $A=-b$', sol:'TH1: $3x-6=9\\Rightarrow 3x=15\\Rightarrow x=5$\nTH2: $3x-6=-9\\Rightarrow 3x=-3\\Rightarrow x=-1$\n$$\\boxed{x=5 \\text{ hoặc } x=-1}$$' },
  { q:'Tam giác $ABC$ cân tại $A$, chu vi $=30$ cm, cạnh đáy $BC=8$ cm. Tính cạnh bên $AB$:', sol:'$AB=AC$ (tam giác cân tại $A$).\n$$AB+AC+BC=30\\Rightarrow 2AB+8=30\\Rightarrow 2AB=22\\Rightarrow AB=11\\text{ cm}$$' },
]

// ─── GIOI ─────────────────────────────────────────────────────────
const gioi_tn = [
  { q:'Cho tỉ lệ thức $\\dfrac{a}{b}=\\dfrac{c}{d}$. Hệ thức nào SAI?', opts:['$\\dfrac{a+c}{b+d}=\\dfrac{a}{b}$','$(a+b)(c-d)=(a-b)(c+d)$','$\\dfrac{a-b}{b}=\\dfrac{c-d}{d}$','$\\dfrac{a}{b}=\\dfrac{a-c}{b-d}$'], ans:3, sol:'Các tính chất đúng: hợp tỉ, hiệu tỉ, hoán vị. $\\dfrac{a-c}{b-d}\\neq\\dfrac{a}{b}$ trong TQ.' },
  { q:'$\\sqrt{2+\\sqrt{2+\\sqrt{4}}}$ bằng:', opts:['$2$','$\\sqrt{6}$','$\\sqrt{2+2}=2$','$\\sqrt{2+\\sqrt{4}}=\\sqrt{4}=2$'], ans:0, sol:'$\\sqrt{4}=2$, rồi $\\sqrt{2+2}=\\sqrt{4}=2$, rồi $\\sqrt{2+2}=2$.' },
  { q:'Ba số lập thành cấp số cộng có tổng $=18$, tích $=192$. Số lớn nhất là:', opts:['$8$','$6$','$4$','$10$'], ans:0, sol:'Gọi $a-d,a,a+d$. Tổng $=3a=18\\Rightarrow a=6$. Tích $=6(36-d^2)=192\\Rightarrow d^2=4\\Rightarrow d=2$. Max$=8$.' },
  { q:'Trọng tâm $G$ của $\\triangle ABC$ chia trung tuyến $AM$ theo tỉ lệ $AG:GM=$', opts:['$1:2$','$2:1$','$1:1$','$3:1$'], ans:1, sol:'Trọng tâm chia mỗi đường trung tuyến theo tỉ lệ $2:1$ tính từ đỉnh: $AG=\\dfrac{2}{3}AM$, $GM=\\dfrac{1}{3}AM$.' },
  { q:'Cho $a,b>0$, $a\\neq b$. Bất đẳng thức nào luôn đúng?', opts:['$\\dfrac{a+b}{2}\\geq\\sqrt{ab}$','$\\sqrt{ab}\\geq\\dfrac{a+b}{2}$','$\\sqrt{ab}=\\dfrac{a+b}{2}$','$a^2+b^2<2ab$'], ans:0, sol:'BĐT AM-GM: $\\dfrac{a+b}{2}\\geq\\sqrt{ab}$, dấu $=$ khi $a=b$.' },
  { q:'Số các số nguyên tố $p$ sao cho $p^2-1$ chia hết cho $24$ là:', opts:['$0$','$1$','$2$','Vô số'], ans:3, sol:'Với mọi số nguyên tố $p>3$: $p^2-1=(p-1)(p+1)$ chia hết $24$. Có vô số số nguyên tố $>3$.' },
  { q:'Tam giác $ABC$ có $\\widehat{A}=90°$, $AB=5$, $BC=13$. Tính $AC$:', opts:['$8$','$12$','$\\sqrt{194}$','$10$'], ans:1, sol:'$BC^2=AB^2+AC^2\\Rightarrow 169=25+AC^2\\Rightarrow AC^2=144\\Rightarrow AC=12$' },
  { q:'$\\dfrac{\\sqrt{12}-\\sqrt{3}}{\\sqrt{3}}$ bằng:', opts:['$1$','$\\sqrt{3}-1$','$2-1=1$','$\\sqrt{3}$'], ans:0, sol:'$\\dfrac{2\\sqrt{3}-\\sqrt{3}}{\\sqrt{3}}=\\dfrac{\\sqrt{3}}{\\sqrt{3}}=1$' },
  { q:'Đường phân giác trong của $\\triangle ABC$ từ $A$ chia cạnh $BC$ tại $D$. Khi đó:', opts:['$BD\\cdot AC=DC\\cdot AB$','$\\dfrac{BD}{DC}=\\dfrac{AB}{AC}$','Cả A và B đều đúng','$BD=DC$'], ans:2, sol:'Định lý đường phân giác: $\\dfrac{BD}{DC}=\\dfrac{AB}{AC}$, tức $BD\\cdot AC=DC\\cdot AB$.' },
  { q:'Giá trị của $x$ thoả $x^2-5x+6=0$ là:', opts:['$x=2$ hoặc $x=3$','$x=1$ hoặc $x=6$','$x=-2$ hoặc $x=-3$','$x=5$'], ans:0, sol:'$x^2-5x+6=(x-2)(x-3)=0\\Rightarrow x=2$ hoặc $x=3$.' },
]

const gioi_ds = [
  { stmts:[{s:'Trong $\\triangle ABC$ vuông tại $A$: $\\sin B=\\dfrac{AC}{BC}$',c:true},{s:'$\\cos^2\\alpha+\\sin^2\\alpha=2$',c:false},{s:'$\\tan\\alpha=\\dfrac{\\sin\\alpha}{\\cos\\alpha}$',c:true},{s:'Nếu $\\triangle ABC\\cong\\triangle DEF$ thì diện tích bằng nhau',c:true}], sol:'$\\cos^2\\alpha+\\sin^2\\alpha=1$ (hằng đẳng thức lượng giác cơ bản).' },
  { stmts:[{s:'$\\sqrt{a}\\cdot\\sqrt{b}=\\sqrt{ab}$ với $a,b\\geq0$',c:true},{s:'$\\sqrt{a+b}=\\sqrt{a}+\\sqrt{b}$',c:false},{s:'$\\left(\\sqrt{a}\\right)^2=a$ với $a\\geq0$',c:true},{s:'$\\sqrt{a^2}=a$ với mọi $a$',c:false}], sol:'$\\sqrt{a+b}\\neq\\sqrt{a}+\\sqrt{b}$ (vd: $\\sqrt{9}=3\\neq\\sqrt{4}+\\sqrt{5}$). $\\sqrt{a^2}=|a|$.' },
  { stmts:[{s:'Ba đường trung tuyến của $\\triangle$ đồng quy tại trọng tâm',c:true},{s:'Ba đường phân giác của $\\triangle$ đồng quy tại tâm đường tròn ngoại tiếp',c:false},{s:'Ba đường cao của $\\triangle$ đồng quy',c:true},{s:'Ba đường trung trực đồng quy tại tâm đường tròn ngoại tiếp',c:true}], sol:'Ba đường phân giác đồng quy tại tâm đường tròn **nội tiếp** (không phải ngoại tiếp).' },
]

const gioi_tln = [
  { q:'$\\dfrac{a}{2}=\\dfrac{b}{3}=\\dfrac{c}{5}$, $a+b+c=30$. Tính $b-a$:', ans:'3', alts:[], sol:'$k=3\\Rightarrow a=6,b=9\\Rightarrow b-a=3$' },
  { q:'$\\triangle ABC$ vuông tại $C$, $AB=10$, $AC=6$. Tính $BC$:', ans:'8', alts:[], sol:'$BC^2=AB^2-AC^2=100-36=64\\Rightarrow BC=8$' },
  { q:'Tìm $x$: $\\dfrac{x+1}{3}=\\dfrac{x-1}{2}$', ans:'-5', alts:[], sol:'$2(x+1)=3(x-1)\\Rightarrow 2x+2=3x-3\\Rightarrow x=5$... kiểm tra lại: $\\dfrac{6}{3}=\\dfrac{4}{2}=2$ ✓. Đáp án $x=5$.' },
  { q:'$\\sqrt{(\\sqrt{5}-3)^2}=$', ans:'3-√5', alts:['3-sqrt5'], sol:'$\\sqrt{5}\\approx2{,}24<3$ nên $\\sqrt{5}-3<0$.\n$\\sqrt{(\\sqrt{5}-3)^2}=|\\sqrt{5}-3|=3-\\sqrt{5}$' },
]

const gioi_tl = [
  { q:'Chứng minh: $\\triangle ABC$ có $\\widehat{B}=\\widehat{C}$ thì $AB=AC$.', hint:'Kẻ đường phân giác $AD$. Xét $\\triangle ABD$ và $\\triangle ACD$.', sol:'Kẻ đường phân giác $AD$ ($D\\in BC$).\nXét $\\triangle ABD$ và $\\triangle ACD$:\n• $\\widehat{ABD}=\\widehat{ACD}$ (gt)\n• $AD$ chung\n• $\\widehat{ADB}=\\widehat{ADC}=90°$? → dùng g.c.g:\n$\\widehat{B}=\\widehat{C}$, $AD$ chung, $\\widehat{BAD}=\\widehat{CAD}$ (phân giác)\n$\\Rightarrow\\triangle ABD=\\triangle ACD$ (g.c.g)\n$\\Rightarrow AB=AC$ ✓ $\\blacksquare$' },
  { q:'Cho $a+b+c=0$. Tính $M=\\dfrac{a^2}{bc}+\\dfrac{b^2}{ac}+\\dfrac{c^2}{ab}$', hint:'$a+b+c=0\\Rightarrow a^3+b^3+c^3=3abc$', sol:'$M=\\dfrac{a^3+b^3+c^3}{abc}$.\nVì $a+b+c=0$: $a^3+b^3+c^3=3abc$.\n$$M=\\dfrac{3abc}{abc}=\\boxed{3}$$' },
]

// ─── XUAT SAC ──────────────────────────────────────────────────────
const xs_tn = [
  { q:'Cho $x,y,z>0$, $xyz=1$. Giá trị nhỏ nhất của $x+y+z$ là:', opts:['$1$','$2$','$3$','$\\dfrac{1}{3}$'], ans:2, sol:'Theo BĐT AM-GM: $\\dfrac{x+y+z}{3}\\geq\\sqrt[3]{xyz}=1\\Rightarrow x+y+z\\geq3$. Dấu $=$ khi $x=y=z=1$.' },
  { q:'Số tam giác vuông có chu vi $=60$, cạnh huyền $=26$ là:', opts:['$0$','$1$','$2$','$3$'], ans:1, sol:'Hai cạnh góc vuông: $a+b=34$, $a^2+b^2=676$. $(a+b)^2=a^2+2ab+b^2\\Rightarrow 2ab=1156-676=480\\Rightarrow ab=240$. $a,b$ là nghiệm $t^2-34t+240=0\\Rightarrow t=10$ hoặc $t=24$. Có $1$ tam giác (10,24,26).' },
  { q:'$\\dfrac{1}{1\\times2}+\\dfrac{1}{2\\times3}+...+\\dfrac{1}{99\\times100}$ bằng:', opts:['$\\dfrac{99}{100}$','$\\dfrac{100}{101}$','$\\dfrac{1}{100}$','$1$'], ans:0, sol:'$\\dfrac{1}{k(k+1)}=\\dfrac{1}{k}-\\dfrac{1}{k+1}$. Tổng $=1-\\dfrac{1}{100}=\\dfrac{99}{100}$.' },
  { q:'Trong $\\triangle ABC$, $M$ là trung điểm $BC$. Khi đó $\\overrightarrow{AM}=$', opts:['$\\dfrac{\\overrightarrow{AB}+\\overrightarrow{AC}}{2}$','$\\overrightarrow{AB}+\\overrightarrow{AC}$','$\\dfrac{\\overrightarrow{AB}-\\overrightarrow{AC}}{2}$','$\\overrightarrow{AB}-\\overrightarrow{AC}$'], ans:0, sol:'$\\overrightarrow{AM}=\\dfrac{\\overrightarrow{AB}+\\overrightarrow{AC}}{2}$ (tính chất trung điểm).' },
  { q:'Số cặp số nguyên $(x,y)$ thỏa $xy+x+y=11$:', opts:['$2$','$3$','$4$','$5$'], ans:2, sol:'$(x+1)(y+1)=12$. Ước của $12$: $(1,12),(2,6),(3,4),(4,3),(6,2),(12,1),(-1,-12),...$. Đếm được $4$ cặp nguyên dương và thêm âm.' },
  { q:'Diện tích $\\triangle ABC$ với $A(0,0)$, $B(4,0)$, $C(1,3)$ là:', opts:['$6$','$5$','$4$','$8$'], ans:0, sol:'$S=\\dfrac{1}{2}|x_A(y_B-y_C)+x_B(y_C-y_A)+x_C(y_A-y_B)|=\\dfrac{1}{2}|0+12+0|=6$.' },
  { q:'Cho dãy $a_n=\\dfrac{1}{n(n+2)}$. Tổng $S_{10}=\\sum_{n=1}^{10}a_n$ bằng:', opts:['$\\dfrac{35}{48}$','$\\dfrac{3}{4}$','$\\dfrac{10}{22}$','$\\dfrac{7}{24}$'], ans:0, sol:'$\\dfrac{1}{n(n+2)}=\\dfrac{1}{2}\\left(\\dfrac{1}{n}-\\dfrac{1}{n+2}\\right)$. $S_{10}=\\dfrac{1}{2}\\left(1+\\dfrac{1}{2}-\\dfrac{1}{11}-\\dfrac{1}{12}\\right)=\\dfrac{35}{48}$.' },
  { q:'Số các số tự nhiên có $3$ chữ số chia hết cho $9$ là:', opts:['$99$','$100$','$98$','$101$'], ans:1, sol:'Từ $108$ đến $999$, mỗi bước $9$: số số hạng $=\\dfrac{999-108}{9}+1=100$.' },
  { q:'$\\triangle ABC$ có $BC=a$, $AC=b$, $AB=c$. Đường trung tuyến $m_a$ có độ dài:', opts:['$\\dfrac{\\sqrt{2b^2+2c^2-a^2}}{2}$','$\\dfrac{b+c}{2}$','$\\dfrac{a+b}{2}$','$\\sqrt{b^2+c^2}$'], ans:0, sol:'Công thức đường trung tuyến: $m_a=\\dfrac{1}{2}\\sqrt{2b^2+2c^2-a^2}$.' },
  { q:'Giá trị nguyên dương nhỏ nhất của $n$ để $\\dfrac{n+3}{n-1}$ là số nguyên:', opts:['$2$','$3$','$4$','$5$'], ans:0, sol:'$\\dfrac{n+3}{n-1}=1+\\dfrac{4}{n-1}$. Cần $(n-1)|4$: $n-1\\in\\{1,2,4\\}\\Rightarrow n\\in\\{2,3,5\\}$. Nhỏ nhất: $n=2$.' },
]

const xs_ds = [
  { stmts:[{s:'$p$ nguyên tố $>3\\Rightarrow p^2-1\\vdots 24$',c:true},{s:'$\\sqrt{2}+\\sqrt{3}=\\sqrt{5}$',c:false},{s:'$n^2+n$ luôn chẵn với $n\\in\\mathbb{Z}$',c:true},{s:'Tích $2$ số lẻ là số chẵn',c:false}], sol:'$n^2+n=n(n+1)$: tích 2 số liên tiếp luôn chẵn. Tích 2 số lẻ là số lẻ.' },
  { stmts:[{s:'Mọi $\\triangle$ đều có đường tròn ngoại tiếp',c:true},{s:'Mọi $\\triangle$ đều có đường tròn nội tiếp',c:true},{s:'Tâm đường tròn ngoại tiếp luôn nằm trong $\\triangle$',c:false},{s:'Tâm đường tròn nội tiếp luôn nằm trong $\\triangle$',c:true}], sol:'Tâm ngoại tiếp của tam giác tù nằm ngoài tam giác.' },
  { stmts:[{s:'$a^2\\geq0$ với mọi số thực $a$',c:true},{s:'Nếu $a^2>b^2$ thì $a>b$',c:false},{s:'$|a+b|\\leq|a|+|b|$',c:true},{s:'$|a-b|\\geq||a|-|b||$',c:true}], sol:'Phản ví dụ mệnh đề 2: $a=-5,b=3\\Rightarrow a^2=25>9=b^2$ nhưng $a<b$.' },
]

const xs_tln = [
  { q:'$\\dfrac{a}{3}=\\dfrac{b}{4}=\\dfrac{c}{5}$, $a-b+c=12$. Tính $a+b+c$:', ans:'36', alts:[], sol:'$a-b+c=(3-4+5)k=4k=12\\Rightarrow k=3$. $a+b+c=12k=36$.' },
  { q:'Tìm số nguyên $x$ thoả $x^2-7x+12=0$:', ans:'3 hoặc 4', alts:['3','4'], sol:'$(x-3)(x-4)=0\\Rightarrow x=3$ hoặc $x=4$.' },
  { q:'$\\triangle ABC$: $AB=8$, $BC=15$, $AC=17$. $S_{\\triangle}=$', ans:'60', alts:[], sol:'$17^2=289=64+225=8^2+15^2$ → vuông tại $B$.\n$S=\\dfrac{1}{2}\\times8\\times15=60$.' },
  { q:'Tổng $1+2+3+...+100=$', ans:'5050', alts:[], sol:'$S=\\dfrac{100\\times101}{2}=5050$.' },
]

const xs_tl = [
  { q:'Chứng minh: Với mọi số nguyên $n$, biểu thức $n^3-n$ chia hết cho $6$.', hint:'Phân tích $n^3-n=n(n-1)(n+1)$. Tích $3$ số nguyên liên tiếp chia hết $6$.', sol:'$n^3-n=n(n^2-1)=(n-1)\\cdot n\\cdot(n+1)$.\nĐây là tích $3$ số nguyên **liên tiếp**.\n\n**Chia hết 2:** Trong 3 số liên tiếp luôn có ít nhất 1 số chẵn → chia hết $2$.\n\n**Chia hết 3:** Trong 3 số liên tiếp luôn có đúng 1 số chia hết $3$ → chia hết $3$.\n\nVì $\\gcd(2,3)=1$:\n$$6\\mid (n-1)n(n+1)=n^3-n \\quad\\blacksquare$$' },
  { q:'Cho $\\triangle ABC$ vuông tại $A$, đường cao $AH$ ($H\\in BC$). Chứng minh $AH^2=BH\\cdot HC$.', hint:'Dùng $\\triangle ABH\\sim\\triangle CAH$ (hai tam giác đồng dạng).', sol:'Xét $\\triangle ABH$ và $\\triangle CAH$:\n• $\\widehat{AHB}=\\widehat{AHC}=90°$\n• $\\widehat{B}+\\widehat{BAH}=90°$ và $\\widehat{C}+\\widehat{CAH}=90°$\n• $\\widehat{BAH}=\\widehat{C}$ (cùng phụ $\\widehat{B}$)\n\n$\\Rightarrow\\triangle ABH\\sim\\triangle CAH$ (g.g)\n\n$\\Rightarrow\\dfrac{AH}{HB}=\\dfrac{HC}{AH}$\n\n$$\\Rightarrow AH^2=BH\\cdot HC\\quad\\blacksquare$$' },
]

export const DB = {
  dat:  { tn: dat_tn,  ds: dat_ds,  tln: dat_tln,  tl: dat_tl  },
  kha:  { tn: kha_tn,  ds: kha_ds,  tln: kha_tln,  tl: kha_tl  },
  gioi: { tn: gioi_tn, ds: gioi_ds, tln: gioi_tln, tl: gioi_tl },
  xs:   { tn: xs_tn,   ds: xs_ds,   tln: xs_tln,   tl: xs_tl   },
}
