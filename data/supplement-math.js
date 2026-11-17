/* ADDED formulas (Mathematics) — standard NCERT-level results for syllabus topics that the
   provided books do not cover. Not extracted from the provided PDFs; every entry is shown with an
   "Added" label in the app. Key format: "subject:unit:topicIndex". */
window.FORMULA_SUPPLEMENT = window.FORMULA_SUPPLEMENT || {};
(function () {
  const R = String.raw;
  Object.assign(window.FORMULA_SUPPLEMENT, {
    // ---------- Unit 1: Sets ----------
    "math:1:0": [
      { n: "Number of elements in a union", t: R`n(A \cup B) = n(A) + n(B) - n(A \cap B)`, c: "Finite sets A, B. If A ∩ B = φ: n(A ∪ B) = n(A) + n(B)." },
      { n: "Three sets", t: R`n(A\cup B\cup C) = n(A)+n(B)+n(C) - n(A\cap B) - n(B\cap C) - n(A\cap C) + n(A\cap B\cap C)` },
      { n: "Difference of sets", t: R`A - B = \{x : x \in A,\ x \notin B\} = A \cap B'` },
      { n: "Complement laws", t: R`A \cup A' = U,\qquad A \cap A' = \varphi,\qquad (A')' = A,\qquad U' = \varphi,\ \ \varphi' = U` },
      { n: "De Morgan's laws", t: R`(A \cup B)' = A' \cap B',\qquad (A \cap B)' = A' \cup B'` },
      { n: "Distributive laws", t: R`A \cup (B \cap C) = (A \cup B) \cap (A \cup C),\qquad A \cap (B \cup C) = (A \cap B) \cup (A \cap C)` },
      { n: "Commutative / associative / idempotent", t: R`A \cup B = B \cup A,\ \ (A\cup B)\cup C = A\cup(B\cup C),\ \ A \cup A = A,\ \ A \cap A = A` },
      { n: "Power set", t: R`n(A) = m \;\Rightarrow\; n\big(P(A)\big) = 2^m`, v: "P(A) = set of all subsets of A (including φ and A)." },
      { n: "Cartesian product and relations", t: R`n(A) = p,\ n(B) = q \;\Rightarrow\; n(A \times B) = pq,\quad \text{number of relations from } A \text{ to } B = 2^{pq}` }
    ],

    // ---------- Unit 2: Complex numbers & quadratic equations ----------
    "math:2:0": [
      { n: "Iota", t: R`i = \sqrt{-1},\quad i^2 = -1,\quad i^3 = -i,\quad i^4 = 1;\qquad i^{4k} = 1,\ i^{4k+1} = i,\ i^{4k+2} = -1,\ i^{4k+3} = -i` },
      { n: "Complex number as an ordered pair", t: R`z = (a, b) = a + ib,\qquad \operatorname{Re}(z) = a,\ \operatorname{Im}(z) = b`, c: "a + ib = c + id ⇔ a = c and b = d." },
      { n: "Addition and multiplication", t: R`(a + ib) \pm (c + id) = (a \pm c) + i(b \pm d);\qquad (a + ib)(c + id) = (ac - bd) + i(ad + bc)` },
      { n: "Multiplicative inverse / division", t: R`\frac{1}{z} = \frac{\bar z}{|z|^2} = \frac{a - ib}{a^2 + b^2};\qquad \frac{z_1}{z_2} = \frac{z_1\,\bar z_2}{|z_2|^2}`, c: "z ≠ 0" },
      { n: "Conjugate", t: R`\bar z = a - ib;\quad z + \bar z = 2\operatorname{Re}(z),\quad z - \bar z = 2i\operatorname{Im}(z),\quad z\bar z = |z|^2` },
      { n: "Properties of conjugate", t: R`\overline{z_1 \pm z_2} = \bar z_1 \pm \bar z_2,\quad \overline{z_1z_2} = \bar z_1\,\bar z_2,\quad \overline{(z_1/z_2)} = \bar z_1/\bar z_2,\quad \bar{\bar z} = z` },
      { n: "Argand plane", t: R`z = x + iy \;\longleftrightarrow\; P(x, y)`, c: "Real part on x-axis (real axis), imaginary part on y-axis (imaginary axis); z̄ is the reflection of z in the real axis." },
      { n: "Square root of negative real", t: R`\sqrt{-a} = i\sqrt{a}\ (a > 0);\qquad \sqrt{a}\,\sqrt{b} \neq \sqrt{ab}\ \text{if } a, b < 0` }
    ],
    "math:2:1": [
      { n: "Modulus", t: R`|z| = |a + ib| = \sqrt{a^2 + b^2}`, c: "Distance of P(a, b) from the origin." },
      { n: "Properties of modulus", t: R`|z_1z_2| = |z_1||z_2|,\quad \left|\frac{z_1}{z_2}\right| = \frac{|z_1|}{|z_2|},\quad |\bar z| = |z| = |-z|` },
      { n: "Triangle inequality", t: R`|z_1 + z_2| \le |z_1| + |z_2|,\qquad |z_1 - z_2| \ge \big||z_1| - |z_2|\big|` },
      { n: "Distance between two points", t: R`|z_1 - z_2| = \text{distance between } z_1 \text{ and } z_2` },
      { n: "Polar form", t: R`z = r(\cos\theta + i\sin\theta),\quad r = |z|,\quad \cos\theta = \frac{a}{r},\ \sin\theta = \frac{b}{r}`, v: "θ = argument (amplitude) of z." },
      { n: "Principal argument", t: R`-\pi < \arg z \le \pi;\qquad \alpha = \tan^{-1}\left|\frac{b}{a}\right|`, c: "Quadrant I: θ = α; II: θ = π − α; III: θ = −(π − α); IV: θ = −α." },
      { n: "Argument of product / quotient", t: R`\arg(z_1z_2) = \arg z_1 + \arg z_2,\qquad \arg\left(\frac{z_1}{z_2}\right) = \arg z_1 - \arg z_2`, c: "Up to an added multiple of 2π to bring the result into (−π, π]." },
      { n: "Argument of conjugate", t: R`\arg\bar z = -\arg z` }
    ],
    "math:2:2": [
      { n: "Quadratic formula", t: R`ax^2 + bx + c = 0\ (a \neq 0) \;\Rightarrow\; x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}` },
      { n: "Discriminant & nature of roots", t: R`D = b^2 - 4ac:\quad D > 0 \text{ real, distinct};\ \ D = 0 \text{ real, equal } \left(-\tfrac{b}{2a}\right);\ \ D < 0 \text{ non-real, conjugate pair}`, c: "a, b, c real. If a, b, c are rational and D is a perfect square, roots are rational." },
      { n: "Complex roots", t: R`D < 0:\quad x = \frac{-b \pm i\sqrt{4ac - b^2}}{2a}`, c: "Non-real roots of a real quadratic occur in conjugate pairs." },
      { n: "Sum and product of roots", t: R`\alpha + \beta = -\frac{b}{a},\qquad \alpha\beta = \frac{c}{a}` },
      { n: "Difference of roots", t: R`|\alpha - \beta| = \frac{\sqrt{D}}{|a|};\qquad (\alpha - \beta)^2 = (\alpha + \beta)^2 - 4\alpha\beta` },
      { n: "Useful symmetric forms", t: R`\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta,\qquad \alpha^3 + \beta^3 = (\alpha + \beta)^3 - 3\alpha\beta(\alpha + \beta)` },
      { n: "Formation of a quadratic", t: R`x^2 - (\alpha + \beta)x + \alpha\beta = 0`, c: "Quadratic with given roots α, β." }
    ],

    // ---------- Unit 4: P & C ----------
    "math:4:0": [
      { n: "Multiplication principle", t: R`\text{Event 1 in } m \text{ ways, then event 2 in } n \text{ ways} \;\Rightarrow\; m \times n \text{ ways}` },
      { n: "Addition principle", t: R`\text{Either event 1 } (m \text{ ways}) \text{ or event 2 } (n \text{ ways}) \;\Rightarrow\; m + n \text{ ways}`, c: "Events mutually exclusive." },
      { n: "Factorial", t: R`n! = 1 \times 2 \times 3 \times \cdots \times n,\qquad 0! = 1,\qquad n! = n\,(n-1)!` }
    ],
    "math:4:1": [
      { n: "Permutations", t: R`{}^nP_r = P(n, r) = \frac{n!}{(n - r)!},\quad 0 \le r \le n`, c: "Arrangements of r objects out of n distinct objects, without repetition." },
      { n: "Permutations with repetition", t: R`n^r`, c: "r places, each filled by any of n objects (repetition allowed)." },
      { n: "Objects not all distinct", t: R`\frac{n!}{p_1!\,p_2!\cdots p_k!}`, v: "p₁ alike of one kind, p₂ alike of another kind, …" },
      { n: "Combinations", t: R`{}^nC_r = C(n, r) = \binom{n}{r} = \frac{n!}{r!\,(n - r)!}`, c: "Selections of r out of n distinct objects (order does not matter)." },
      { n: "P and C relation", t: R`{}^nP_r = r!\cdot{}^nC_r` },
      { n: "Complementary selections", t: R`{}^nC_r = {}^nC_{n - r};\qquad {}^nC_0 = {}^nC_n = 1` },
      { n: "Equal combinations", t: R`{}^nC_a = {}^nC_b \;\Rightarrow\; a = b \ \text{or}\ a + b = n` },
      { n: "Pascal's rule", t: R`{}^nC_r + {}^nC_{r-1} = {}^{n+1}C_r` },
      { n: "Circular arrangements", t: R`(n - 1)!`, c: "n distinct objects around a circle (clockwise ≠ anticlockwise)." }
    ],

    // ---------- Unit 5: Binomial theorem ----------
    "math:5:0": [
      { n: "Binomial theorem", t: R`(a + b)^n = \sum_{r=0}^{n} {}^nC_r\, a^{n-r}\, b^{r} = {}^nC_0a^n + {}^nC_1a^{n-1}b + \cdots + {}^nC_nb^n`, c: "n a positive integer; there are n + 1 terms." },
      { n: "General term", t: R`T_{r+1} = {}^nC_r\, a^{n-r}\, b^{r}` },
      { n: "Middle term", t: R`n \text{ even: } T_{\frac{n}{2} + 1};\qquad n \text{ odd: } T_{\frac{n+1}{2}} \text{ and } T_{\frac{n+3}{2}}` },
      { n: "Special expansions", t: R`(1 + x)^n = \sum_{r=0}^{n} {}^nC_r x^r;\qquad (1 - x)^n = \sum_{r=0}^{n} (-1)^r\,{}^nC_r x^r` },
      { n: "Sum of binomial coefficients", t: R`{}^nC_0 + {}^nC_1 + \cdots + {}^nC_n = 2^n` },
      { n: "Alternating sum", t: R`{}^nC_0 - {}^nC_1 + {}^nC_2 - \cdots + (-1)^n\,{}^nC_n = 0` },
      { n: "Odd / even coefficients", t: R`{}^nC_0 + {}^nC_2 + \cdots = {}^nC_1 + {}^nC_3 + \cdots = 2^{\,n-1}` },
      { n: "r-th term from the end", t: R`T_r \text{ (from end)} = T_{n - r + 2} \text{ (from beginning)}` },
      { n: "Term independent of x", t: R`\text{Put the power of } x \text{ in } T_{r+1} \text{ equal to } 0 \text{ and solve for } r` }
    ],

    // ---------- Unit 6: Sequence and series ----------
    "math:6:0": [
      { n: "AP: n-th term", t: R`a_n = a + (n - 1)d`, v: "a = first term, d = common difference." },
      { n: "AP: sum of n terms", t: R`S_n = \frac{n}{2}\big[2a + (n - 1)d\big] = \frac{n}{2}(a + l)`, v: "l = last term." },
      { n: "AP property", t: R`a_n = S_n - S_{n-1};\qquad a, b, c \text{ in AP} \iff 2b = a + c` },
      { n: "Arithmetic mean", t: R`A = \frac{a + b}{2}` },
      { n: "Inserting n AMs between a and b", t: R`d = \frac{b - a}{n + 1},\qquad A_k = a + k\,\frac{b - a}{n + 1},\ k = 1, \dots, n`, c: "Sum of the n AMs = n × (a + b)/2." },
      { n: "GP: n-th term", t: R`a_n = a\,r^{\,n-1}`, v: "r = common ratio." },
      { n: "GP: sum of n terms", t: R`S_n = \frac{a(r^n - 1)}{r - 1} = \frac{a(1 - r^n)}{1 - r},\ r \neq 1;\qquad S_n = na,\ r = 1` },
      { n: "Infinite GP", t: R`S_\infty = \frac{a}{1 - r}`, c: "|r| < 1" },
      { n: "GP property", t: R`a, b, c \text{ in GP} \iff b^2 = ac` },
      { n: "Geometric mean", t: R`G = \sqrt{ab}`, c: "a, b > 0" },
      { n: "Inserting n GMs between a and b", t: R`r = \left(\frac{b}{a}\right)^{\frac{1}{n+1}},\qquad G_k = a\,r^{k},\ k = 1, \dots, n`, c: "Product of the n GMs = (√(ab))ⁿ." }
    ],
    "math:6:1": [
      { n: "AM–GM inequality", t: R`A \ge G \iff \frac{a + b}{2} \ge \sqrt{ab}`, c: "a, b > 0; equality iff a = b." },
      { n: "", t: R`A - G = \frac{(\sqrt a - \sqrt b)^2}{2} \ge 0` },
      { n: "Numbers from A and G", t: R`a, b = A \pm \sqrt{(A + G)(A - G)}`, c: "a, b are roots of x² − 2Ax + G² = 0." }
    ],

    // ---------- Unit 7: functions & limits ----------
    "math:7:0": [
      { n: "Algebra of functions", t: R`(f \pm g)(x) = f(x) \pm g(x),\quad (fg)(x) = f(x)g(x),\quad \left(\tfrac{f}{g}\right)(x) = \frac{f(x)}{g(x)},\ g(x)\neq 0`, c: "Defined on the common domain D_f ∩ D_g." },
      { n: "Modulus function", t: R`f(x) = |x| = \begin{cases} x, & x \ge 0 \\ -x, & x < 0\end{cases}` },
      { n: "Signum function", t: R`f(x) = \begin{cases} 1, & x > 0 \\ 0, & x = 0 \\ -1, & x < 0\end{cases}` },
      { n: "Greatest integer function", t: R`f(x) = [x] = \text{greatest integer} \le x;\qquad [x] \le x < [x] + 1` },
      { n: "Exponential / logarithm", t: R`y = a^x \iff x = \log_a y\ \ (a > 0,\ a \neq 1);\quad \log_a(mn) = \log_a m + \log_a n,\ \ \log_a\frac{m}{n} = \log_a m - \log_a n,\ \ \log_a m^k = k\log_a m` },
      { n: "Change of base", t: R`\log_a b = \frac{\log_c b}{\log_c a}` },
      { n: "Existence of a limit", t: R`\lim_{x\to a} f(x) = l \iff \lim_{x\to a^-} f(x) = \lim_{x\to a^+} f(x) = l` },
      { n: "Algebra of limits", t: R`\lim(f \pm g) = \lim f \pm \lim g,\quad \lim(fg) = \lim f\cdot\lim g,\quad \lim\frac{f}{g} = \frac{\lim f}{\lim g}\ (\lim g \neq 0)` },
      { n: "Standard limit (algebraic)", t: R`\lim_{x\to a}\frac{x^n - a^n}{x - a} = n\,a^{\,n-1}` },
      { n: "Standard limits (trigonometric)", t: R`\lim_{x\to 0}\frac{\sin x}{x} = 1,\qquad \lim_{x\to 0}\frac{\tan x}{x} = 1,\qquad \lim_{x\to 0}\frac{1 - \cos x}{x} = 0`, c: "x in radians." },
      { n: "Standard limits (exponential & log)", t: R`\lim_{x\to 0}\frac{e^x - 1}{x} = 1,\quad \lim_{x\to 0}\frac{a^x - 1}{x} = \log_e a,\quad \lim_{x\to 0}\frac{\log_e(1 + x)}{x} = 1,\quad \lim_{x\to 0}(1 + x)^{1/x} = e` }
    ],
    // extra derivatives under the (book-covered) differentiation topic
    "math:7:3": [
      { n: "Remaining trigonometric derivatives", t: R`\frac{d}{dx}\cot x = -\operatorname{cosec}^2 x,\quad \frac{d}{dx}\sec x = \sec x\tan x,\quad \frac{d}{dx}\operatorname{cosec} x = -\operatorname{cosec} x\cot x` },
      { n: "Remaining inverse trigonometric derivatives", t: R`\frac{d}{dx}\cot^{-1}x = \frac{-1}{1 + x^2},\quad \frac{d}{dx}\sec^{-1}x = \frac{1}{|x|\sqrt{x^2 - 1}},\quad \frac{d}{dx}\operatorname{cosec}^{-1}x = \frac{-1}{|x|\sqrt{x^2 - 1}}`, c: "sec⁻¹ and cosec⁻¹ for |x| > 1." },
      { n: "Exponential base a and log base a", t: R`\frac{d}{dx}a^x = a^x\log_e a,\qquad \frac{d}{dx}\log_a x = \frac{1}{x\log_e a}` }
    ],

    // ---------- Unit 10: Coordinate geometry ----------
    "math:10:0": [
      { n: "Distance formula", t: R`PQ = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}` },
      { n: "Section formula (internal)", t: R`\left(\frac{mx_2 + nx_1}{m + n},\ \frac{my_2 + ny_1}{m + n}\right)`, c: "Point dividing the join of (x₁, y₁) and (x₂, y₂) in ratio m : n internally." },
      { n: "Section formula (external)", t: R`\left(\frac{mx_2 - nx_1}{m - n},\ \frac{my_2 - ny_1}{m - n}\right)` },
      { n: "Mid-point", t: R`\left(\frac{x_1 + x_2}{2},\ \frac{y_1 + y_2}{2}\right)` },
      { n: "Area of a triangle", t: R`\Delta = \tfrac{1}{2}\left|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)\right|`, c: "Δ = 0 ⇔ the three points are collinear." },
      { n: "Locus", t: R`\text{Equation satisfied by } (x, y) \text{ for every point of the path}` },
      { n: "Slope", t: R`m = \tan\theta = \frac{y_2 - y_1}{x_2 - x_1}`, c: "θ = inclination with +x-axis (θ ≠ 90°); vertical line has undefined slope." },
      { n: "Parallel and perpendicular lines", t: R`\parallel:\ m_1 = m_2;\qquad \perp:\ m_1 m_2 = -1` },
      { n: "Angle between two lines", t: R`\tan\theta = \left|\frac{m_2 - m_1}{1 + m_1m_2}\right|`, c: "1 + m₁m₂ ≠ 0; θ is the acute angle." },
      { n: "Collinearity", t: R`A, B, C \text{ collinear} \iff \text{slope of } AB = \text{slope of } BC` },
      { n: "Intercepts of ax + by + c = 0", t: R`x\text{-intercept} = -\frac{c}{a},\qquad y\text{-intercept} = -\frac{c}{b}` }
    ],
    "math:10:1": [
      { n: "Horizontal / vertical lines", t: R`y = a \ (\parallel x\text{-axis}),\qquad x = b\ (\parallel y\text{-axis})` },
      { n: "Point–slope form", t: R`y - y_1 = m(x - x_1)` },
      { n: "Two-point form", t: R`y - y_1 = \frac{y_2 - y_1}{x_2 - x_1}(x - x_1)` },
      { n: "Slope–intercept form", t: R`y = mx + c`, v: "c = y-intercept." },
      { n: "Intercept form", t: R`\frac{x}{a} + \frac{y}{b} = 1`, v: "a, b = x- and y-intercepts." },
      { n: "Normal form", t: R`x\cos\omega + y\sin\omega = p`, v: "p = length of perpendicular from origin, ω = its inclination." },
      { n: "General form", t: R`Ax + By + C = 0:\quad m = -\frac{A}{B}` },
      { n: "Parallel / perpendicular to a given line", t: R`\parallel:\ Ax + By + k = 0;\qquad \perp:\ Bx - Ay + k = 0` },
      { n: "Intersection of lines", t: R`\text{Solve } a_1x + b_1y + c_1 = 0,\ a_2x + b_2y + c_2 = 0:\quad x = \frac{b_1c_2 - b_2c_1}{a_1b_2 - a_2b_1},\ y = \frac{c_1a_2 - c_2a_1}{a_1b_2 - a_2b_1}`, c: "a₁b₂ − a₂b₁ ≠ 0" },
      { n: "Concurrency of three lines", t: R`\begin{vmatrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \\ a_3 & b_3 & c_3 \end{vmatrix} = 0`, c: "No two of the lines parallel." },
      { n: "Distance of a point from a line", t: R`d = \frac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}}` },
      { n: "Distance between parallel lines", t: R`d = \frac{|C_1 - C_2|}{\sqrt{A^2 + B^2}}`, c: "Lines Ax + By + C₁ = 0 and Ax + By + C₂ = 0." },
      { n: "Foot of perpendicular", t: R`\frac{h - x_1}{A} = \frac{k - y_1}{B} = -\frac{Ax_1 + By_1 + C}{A^2 + B^2}` },
      { n: "Centroid", t: R`G = \left(\frac{x_1 + x_2 + x_3}{3},\ \frac{y_1 + y_2 + y_3}{3}\right)`, c: "Intersection of medians." },
      { n: "Circumcentre", t: R`O:\ OA = OB = OC`, c: "Intersection of perpendicular bisectors of the sides. Right triangle: mid-point of the hypotenuse." },
      { n: "Orthocentre", t: R`H = \text{intersection of the altitudes}`, c: "Right triangle: the right-angled vertex. Equilateral: H, G, O coincide." },
      { n: "Euler line", t: R`H,\ G,\ O \text{ collinear},\qquad HG : GO = 2 : 1` }
    ],
    "math:10:2": [
      { n: "Standard form", t: R`(x - h)^2 + (y - k)^2 = r^2`, v: "Centre (h, k), radius r." },
      { n: "Centre at origin", t: R`x^2 + y^2 = r^2` },
      { n: "General form", t: R`x^2 + y^2 + 2gx + 2fy + c = 0:\quad \text{centre } (-g, -f),\ \ r = \sqrt{g^2 + f^2 - c}`, c: "Real circle if g² + f² − c > 0; point circle if = 0." },
      { n: "Diameter form", t: R`(x - x_1)(x - x_2) + (y - y_1)(y - y_2) = 0`, c: "(x₁, y₁), (x₂, y₂) are the ends of a diameter." },
      { n: "Line y = mx + c and circle x² + y² = a²", t: R`(1 + m^2)x^2 + 2mcx + (c^2 - a^2) = 0`, c: "Its roots give the x-coordinates of the points of intersection." },
      { n: "Intersection condition", t: R`c^2 < a^2(1 + m^2):\ 2 \text{ points};\quad c^2 = a^2(1 + m^2):\ \text{tangent};\quad c^2 > a^2(1 + m^2):\ \text{no point}`, c: "Equivalent to comparing the distance |c|/√(1 + m²) of the centre from the line with a." }
    ],
    "math:10:3": [
      { n: "Sections of a cone", t: R`\beta = 90^\circ:\ \text{circle};\quad \alpha < \beta < 90^\circ:\ \text{ellipse};\quad \beta = \alpha:\ \text{parabola};\quad 0 \le \beta < \alpha:\ \text{hyperbola}`, v: "α = semi-vertical angle of the cone, β = angle of the cutting plane with the axis." },
      { n: "Eccentricity", t: R`e = \frac{\text{distance from focus}}{\text{distance from directrix}}:\quad e = 1 \text{ parabola},\ e < 1 \text{ ellipse},\ e > 1 \text{ hyperbola}` },
      { n: "Parabola y² = 4ax", t: R`\text{Focus } (a, 0),\ \ \text{directrix } x = -a,\ \ \text{axis } y = 0,\ \ \text{latus rectum} = 4a`, c: "a > 0" },
      { n: "Other standard parabolas", t: R`y^2 = -4ax:\ (-a, 0),\ x = a;\quad x^2 = 4ay:\ (0, a),\ y = -a;\quad x^2 = -4ay:\ (0, -a),\ y = a` },
      { n: "Ellipse x²/a² + y²/b² = 1 (a > b)", t: R`c^2 = a^2 - b^2,\ \ e = \frac{c}{a},\ \ \text{foci } (\pm c, 0),\ \ \text{vertices } (\pm a, 0)`, c: "Major axis 2a along x; minor axis 2b. If b > a, the major axis is along y with foci (0, ±c), c² = b² − a²." },
      { n: "Ellipse: latus rectum & focal property", t: R`\text{Latus rectum} = \frac{2b^2}{a};\qquad PF_1 + PF_2 = 2a` },
      { n: "Hyperbola x²/a² − y²/b² = 1", t: R`c^2 = a^2 + b^2,\ \ e = \frac{c}{a} > 1,\ \ \text{foci } (\pm c, 0),\ \ \text{vertices } (\pm a, 0)`, c: "Transverse axis 2a, conjugate axis 2b." },
      { n: "Hyperbola: latus rectum & focal property", t: R`\text{Latus rectum} = \frac{2b^2}{a};\qquad |PF_1 - PF_2| = 2a` },
      { n: "Hyperbola y²/a² − x²/b² = 1", t: R`\text{Foci } (0, \pm c),\ \ c^2 = a^2 + b^2`, c: "Transverse axis along y." }
    ],

    // ---------- Unit 11: 3D coordinates ----------
    "math:11:0": [
      { n: "Distance between two points", t: R`PQ = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}` },
      { n: "Distance from origin", t: R`OP = \sqrt{x^2 + y^2 + z^2}` },
      { n: "Section formula (internal)", t: R`\left(\frac{mx_2 + nx_1}{m + n},\ \frac{my_2 + ny_1}{m + n},\ \frac{mz_2 + nz_1}{m + n}\right)` },
      { n: "Section formula (external)", t: R`\left(\frac{mx_2 - nx_1}{m - n},\ \frac{my_2 - ny_1}{m - n},\ \frac{mz_2 - nz_1}{m - n}\right)` },
      { n: "Mid-point", t: R`\left(\frac{x_1 + x_2}{2},\ \frac{y_1 + y_2}{2},\ \frac{z_1 + z_2}{2}\right)` },
      { n: "Centroid of a triangle", t: R`\left(\frac{x_1 + x_2 + x_3}{3},\ \frac{y_1 + y_2 + y_3}{3},\ \frac{z_1 + z_2 + z_3}{3}\right)` }
    ],

    // ---------- Unit 13: Statistics + extra probability ----------
    "math:13:0": [
      { n: "Mean (ungrouped / discrete)", t: R`\bar x = \frac{\sum x_i}{n};\qquad \bar x = \frac{\sum f_ix_i}{\sum f_i} = \frac{\sum f_ix_i}{N}` },
      { n: "Mean (step deviation)", t: R`\bar x = a + \frac{\sum f_id_i}{N}\times h,\qquad d_i = \frac{x_i - a}{h}`, v: "a = assumed mean, h = class width; xᵢ = class marks for continuous data." },
      { n: "Median (ungrouped)", t: R`n \text{ odd: } \left(\tfrac{n+1}{2}\right)^{\text{th}} \text{ obs.};\quad n \text{ even: mean of } \left(\tfrac{n}{2}\right)^{\text{th}} \text{ and } \left(\tfrac{n}{2} + 1\right)^{\text{th}} \text{ obs.}`, c: "Data arranged in order." },
      { n: "Median (grouped)", t: R`M = l + \frac{\frac{N}{2} - C}{f}\times h`, v: "l = lower limit of median class, C = cumulative frequency before it, f = its frequency." },
      { n: "Mode (grouped)", t: R`Z = l + \frac{f_1 - f_0}{2f_1 - f_0 - f_2}\times h`, v: "f₁ = frequency of modal class; f₀, f₂ = frequencies of the preceding and succeeding classes." },
      { n: "Empirical relation", t: R`\text{Mode} = 3\,\text{Median} - 2\,\text{Mean}`, c: "For moderately skewed distributions." },
      { n: "Range", t: R`\text{Range} = \text{Max} - \text{Min}` },
      { n: "Mean deviation", t: R`\text{M.D.}(a) = \frac{\sum |x_i - a|}{n};\qquad \text{M.D.}(a) = \frac{\sum f_i|x_i - a|}{N}`, c: "a = mean or median." },
      { n: "Variance (ungrouped)", t: R`\sigma^2 = \frac{1}{n}\sum (x_i - \bar x)^2 = \frac{\sum x_i^2}{n} - \bar x^2` },
      { n: "Variance (grouped)", t: R`\sigma^2 = \frac{1}{N}\sum f_i(x_i - \bar x)^2 = \frac{\sum f_ix_i^2}{N} - \bar x^2` },
      { n: "Variance (step deviation)", t: R`\sigma^2 = h^2\left[\frac{\sum f_id_i^2}{N} - \left(\frac{\sum f_id_i}{N}\right)^2\right]` },
      { n: "Standard deviation", t: R`\sigma = \sqrt{\text{Variance}}` },
      { n: "Coefficient of variation", t: R`\text{C.V.} = \frac{\sigma}{\bar x}\times 100`, c: "Series with the greater C.V. is more variable." },
      { n: "Change of origin and scale", t: R`y_i = ax_i + b \;\Rightarrow\; \bar y = a\bar x + b,\quad \sigma_y = |a|\,\sigma_x,\quad \sigma_y^2 = a^2\sigma_x^2` }
    ],
    "math:13:1": [
      { n: "Probability of an event", t: R`P(E) = \frac{n(E)}{n(S)},\qquad 0 \le P(E) \le 1,\qquad P(E') = 1 - P(E)`, c: "Equally likely outcomes." },
      { n: "Addition theorem (three events)", t: R`P(A\cup B\cup C) = \sum P(A) - P(A\cap B) - P(B\cap C) - P(C\cap A) + P(A\cap B\cap C)` },
      { n: "Mutually exclusive events", t: R`A \cap B = \varphi \;\Rightarrow\; P(A \cup B) = P(A) + P(B)` }
    ],
    "math:13:3": [
      { n: "Probability distribution", t: R`p_i = P(X = x_i) \ge 0,\qquad \sum_i p_i = 1` },
      { n: "Mean (expectation)", t: R`\mu = E(X) = \sum_i x_i\,p_i` },
      { n: "Variance", t: R`\operatorname{Var}(X) = \sigma^2 = \sum (x_i - \mu)^2 p_i = E(X^2) - [E(X)]^2`, c: "Standard deviation σ = √Var(X)." }
    ],

    // ---------- Unit 14: Trigonometry ----------
    "math:14:0": [
      { n: "Radian measure", t: R`\pi\ \text{rad} = 180^\circ;\qquad l = r\theta`, v: "l = arc length, r = radius, θ in radians." },
      { n: "Pythagorean identities", t: R`\sin^2x + \cos^2x = 1,\qquad 1 + \tan^2x = \sec^2x,\qquad 1 + \cot^2x = \operatorname{cosec}^2x` },
      { n: "Domain, range and period", t: R`\sin x, \cos x \in [-1, 1],\ \text{period } 2\pi;\qquad \tan x \in \mathbb{R},\ x \neq (2n+1)\tfrac{\pi}{2},\ \text{period } \pi` },
      { n: "Negative angles", t: R`\sin(-x) = -\sin x,\qquad \cos(-x) = \cos x,\qquad \tan(-x) = -\tan x` },
      { n: "Allied angles", t: R`\sin\left(\tfrac{\pi}{2} - x\right) = \cos x,\ \ \cos\left(\tfrac{\pi}{2} - x\right) = \sin x,\ \ \sin(\pi - x) = \sin x,\ \ \cos(\pi - x) = -\cos x,\ \ \sin(\pi + x) = -\sin x` },
      { n: "Sum and difference (sin, cos)", t: R`\sin(x \pm y) = \sin x\cos y \pm \cos x\sin y,\qquad \cos(x \pm y) = \cos x\cos y \mp \sin x\sin y` },
      { n: "Sum and difference (tan, cot)", t: R`\tan(x \pm y) = \frac{\tan x \pm \tan y}{1 \mp \tan x\tan y},\qquad \cot(x \pm y) = \frac{\cot x\cot y \mp 1}{\cot y \pm \cot x}` },
      { n: "Double angle", t: R`\sin 2x = 2\sin x\cos x = \frac{2\tan x}{1 + \tan^2x}` },
      { n: "", t: R`\cos 2x = \cos^2x - \sin^2x = 2\cos^2x - 1 = 1 - 2\sin^2x = \frac{1 - \tan^2x}{1 + \tan^2x}` },
      { n: "", t: R`\tan 2x = \frac{2\tan x}{1 - \tan^2x}` },
      { n: "Triple angle", t: R`\sin 3x = 3\sin x - 4\sin^3x,\quad \cos 3x = 4\cos^3x - 3\cos x,\quad \tan 3x = \frac{3\tan x - \tan^3x}{1 - 3\tan^2x}` },
      { n: "Sum to product", t: R`\sin x + \sin y = 2\sin\tfrac{x + y}{2}\cos\tfrac{x - y}{2},\qquad \sin x - \sin y = 2\cos\tfrac{x + y}{2}\sin\tfrac{x - y}{2}` },
      { n: "", t: R`\cos x + \cos y = 2\cos\tfrac{x + y}{2}\cos\tfrac{x - y}{2},\qquad \cos x - \cos y = -2\sin\tfrac{x + y}{2}\sin\tfrac{x - y}{2}` },
      { n: "Product to sum", t: R`2\sin x\cos y = \sin(x + y) + \sin(x - y),\qquad 2\cos x\cos y = \cos(x + y) + \cos(x - y)` },
      { n: "", t: R`2\sin x\sin y = \cos(x - y) - \cos(x + y)` }
    ],
    "math:14:1": [
      { n: "Complementary pairs", t: R`\sin^{-1}x + \cos^{-1}x = \tfrac{\pi}{2},\ \ \tan^{-1}x + \cot^{-1}x = \tfrac{\pi}{2},\ \ \sec^{-1}x + \operatorname{cosec}^{-1}x = \tfrac{\pi}{2}`, c: "Within the respective domains." },
      { n: "Negative arguments", t: R`\sin^{-1}(-x) = -\sin^{-1}x,\ \ \tan^{-1}(-x) = -\tan^{-1}x,\ \ \cos^{-1}(-x) = \pi - \cos^{-1}x,\ \ \cot^{-1}(-x) = \pi - \cot^{-1}x` },
      { n: "Reciprocal arguments", t: R`\sin^{-1}\tfrac{1}{x} = \operatorname{cosec}^{-1}x,\quad \cos^{-1}\tfrac{1}{x} = \sec^{-1}x\ \ (|x| \ge 1);\qquad \tan^{-1}\tfrac{1}{x} = \cot^{-1}x\ \ (x > 0)` },
      { n: "Sum of tan⁻¹", t: R`\tan^{-1}x + \tan^{-1}y = \tan^{-1}\frac{x + y}{1 - xy}`, c: "xy < 1" },
      { n: "Difference of tan⁻¹", t: R`\tan^{-1}x - \tan^{-1}y = \tan^{-1}\frac{x - y}{1 + xy}`, c: "xy > −1" },
      { n: "2 tan⁻¹x", t: R`2\tan^{-1}x = \sin^{-1}\frac{2x}{1 + x^2}\ (|x| \le 1) = \cos^{-1}\frac{1 - x^2}{1 + x^2}\ (x \ge 0) = \tan^{-1}\frac{2x}{1 - x^2}\ (|x| < 1)` }
    ]
  });
})();
