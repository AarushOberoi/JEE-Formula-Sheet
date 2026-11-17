/* Mathematics — structure from the official JEE Main syllabus; formulas only from the
   provided books: NCERT Mathematics Class XII Part I (lemh101–106) and Part II (lemh201–207).
   Class XI Mathematics was NOT provided, so units/topics sourced only from it are marked as gaps. */
window.FORMULA_DATA = window.FORMULA_DATA || {};
(function () {
  const P1 = (ch) => `NCERT Maths XII Part I, Ch ${ch}`;
  const P2 = (ch) => `NCERT Maths XII Part II, Ch ${ch}`;
  const R = String.raw;

  window.FORMULA_DATA.math = {
    id: "math",
    name: "Mathematics",
    tagline: "Algebra · Calculus · Vectors · 3D · Probability",
    chapters: [
      {
        unit: 1,
        title: "Sets, Relations and Functions",
        status: "partial",
        note: "Relations and functions are taken from NCERT XII Ch 1. Sets, their algebraic properties and the power set are in Class XI Maths, which was not provided.",
        topics: [
          { title: "Sets and their representation; union, intersection, complement; power set", gap: true },
          {
            title: "Relations, types of relations, equivalence relations",
            formulas: [
              { n: "Empty relation", t: R`R = \varphi \subset X \times X`, v: "No element of X is related to any element of X." , s: P1(1) },
              { n: "Universal relation", t: R`R = X \times X`, v: "Every element of X is related to every element of X.", s: P1(1) },
              { n: "Reflexive relation", t: R`(a, a) \in R \quad \forall\, a \in X`, s: P1(1) },
              { n: "Symmetric relation", t: R`(a, b) \in R \;\Rightarrow\; (b, a) \in R \quad \forall\, a, b \in X`, s: P1(1) },
              { n: "Transitive relation", t: R`(a, b) \in R \text{ and } (b, c) \in R \;\Rightarrow\; (a, c) \in R`, s: P1(1) },
              { n: "Equivalence relation", t: R`R \text{ is reflexive, symmetric and transitive}`, v: "Equivalence class [a] = subset of X of all elements b related to a.", s: P1(1) }
            ]
          },
          {
            title: "Functions; one-one, into and onto functions; composition of functions",
            formulas: [
              { n: "One-one (injective)", t: R`f(x_1) = f(x_2) \;\Rightarrow\; x_1 = x_2 \quad \forall\, x_1, x_2 \in X`, v: "f : X → Y", s: P1(1) },
              { n: "Onto (surjective)", t: R`\forall\, y \in Y,\ \exists\, x \in X \text{ such that } f(x) = y`, c: "Range of f = co-domain Y.", s: P1(1) },
              { n: "Bijective", t: R`f \text{ is both one-one and onto}`, s: P1(1) },
              { n: "Finite-set property", t: R`f : X \to X \text{ one-one} \iff f \text{ onto}`, c: "True only when X is finite; not true for infinite sets.", s: P1(1) },
              { n: "Composition of functions", t: R`(g \circ f)(x) = g\big(f(x)\big)`, v: "f : A → B, g : B → C, so g∘f : A → C", s: P1(1) },
              { n: "Invertible function", t: R`g \circ f = I_X \ \text{ and }\ f \circ g = I_Y \;\Rightarrow\; g = f^{-1}`, c: "f is invertible if and only if f is one-one and onto.", s: P1(1) }
            ]
          }
        ]
      },
      {
        unit: 2,
        title: "Complex Numbers and Quadratic Equations",
        status: "gap",
        note: "This unit is in NCERT Class XI Maths, which is not in the books folder.",
        topics: [
          { title: "Complex numbers as ordered pairs; a + ib form; Argand diagram; algebra of complex numbers", gap: true },
          { title: "Modulus and argument (amplitude) of a complex number", gap: true },
          { title: "Quadratic equations in real and complex number systems; relations between roots and coefficients; nature of roots; formation of quadratic equations", gap: true }
        ]
      },
      {
        unit: 3,
        title: "Matrices and Determinants",
        status: "covered",
        topics: [
          {
            title: "Matrices, algebra of matrices, types of matrices",
            formulas: [
              { n: "Order of a matrix", t: R`A = [a_{ij}]_{m \times n}`, v: "m rows, n columns; [a_ij]_{m×1} column matrix, [a_ij]_{1×n} row matrix, m = n square matrix.", s: P1(3) },
              { n: "Diagonal, scalar, identity matrix", t: R`\text{Diagonal: } a_{ij}=0\ (i\ne j);\quad \text{Scalar: } a_{ij}=0\ (i\ne j),\ a_{ii}=k;\quad I: a_{ij}=\begin{cases}1 & i=j\\ 0 & i\ne j\end{cases}`, s: P1(3) },
              { n: "Equality of matrices", t: R`A = B \iff \text{same order and } a_{ij} = b_{ij}\ \forall\, i, j`, s: P1(3) },
              { n: "Scalar multiple & difference", t: R`kA = [k\,a_{ij}]_{m\times n},\qquad -A = (-1)A,\qquad A - B = A + (-1)B`, s: P1(3) },
              { n: "Properties of addition", t: R`A + B = B + A,\qquad (A+B)+C = A+(B+C)`, c: "A, B, C of the same order.", s: P1(3) },
              { n: "Properties of scalar multiplication", t: R`k(A+B) = kA + kB,\qquad (k+l)A = kA + lA`, s: P1(3) },
              { n: "Matrix multiplication", t: R`A = [a_{ij}]_{m\times n},\ B = [b_{jk}]_{n\times p} \;\Rightarrow\; AB = [c_{ik}]_{m\times p},\quad c_{ik} = \sum_{j=1}^{n} a_{ij}\, b_{jk}`, c: "Defined only when columns of A = rows of B. In general AB ≠ BA.", s: P1(3) },
              { n: "Properties of multiplication", t: R`A(BC) = (AB)C,\quad A(B+C) = AB + AC,\quad (A+B)C = AC + BC`, s: P1(3) }
            ]
          },
          {
            title: "Transpose; symmetric and skew-symmetric matrices",
            formulas: [
              { n: "Transpose", t: R`A = [a_{ij}]_{m\times n} \;\Rightarrow\; A' = A^{T} = [a_{ji}]_{n\times m}`, s: P1(3) },
              { n: "Properties of transpose", t: R`(A')' = A,\quad (kA)' = kA',\quad (A+B)' = A' + B',\quad (AB)' = B'A'`, s: P1(3) },
              { n: "Symmetric / skew-symmetric", t: R`A' = A \ \ (\text{symmetric}),\qquad A' = -A \ \ (\text{skew-symmetric})`, s: P1(3) },
              { n: "Decomposition of a square matrix", t: R`A = \tfrac{1}{2}(A + A') + \tfrac{1}{2}(A - A')`, v: "(A + A′) is symmetric; (A − A′) is skew-symmetric.", s: P1(3) }
            ]
          },
          {
            title: "Determinants of order two and three; evaluation of determinants",
            formulas: [
              { n: "Order 1", t: R`|[a_{11}]| = a_{11}`, s: P1(4) },
              { n: "Order 2", t: R`\begin{vmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{vmatrix} = a_{11}a_{22} - a_{12}a_{21}`, s: P1(4) },
              { n: "Order 3 (expanding along R₁)", t: R`\begin{vmatrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \\ a_3 & b_3 & c_3 \end{vmatrix} = a_1\begin{vmatrix} b_2 & c_2 \\ b_3 & c_3\end{vmatrix} - b_1\begin{vmatrix} a_2 & c_2 \\ a_3 & c_3\end{vmatrix} + c_1\begin{vmatrix} a_2 & b_2 \\ a_3 & b_3\end{vmatrix}`, c: "Expanding along any row or column gives the same value.", s: P1(4) },
              { n: "Minor and cofactor", t: R`A_{ij} = (-1)^{i+j}\, M_{ij}`, v: "M_ij = determinant left after deleting the i-th row and j-th column.", s: P1(4) },
              { n: "Expansion by cofactors", t: R`|A| = a_{11}A_{11} + a_{12}A_{12} + a_{13}A_{13}`, s: P1(4) },
              { n: "Cofactors of another row", t: R`a_{11}A_{21} + a_{12}A_{22} + a_{13}A_{23} = 0`, c: "Elements of one row × cofactors of a different row sum to zero.", s: P1(4) },
              { n: "Determinant of a product", t: R`|AB| = |A|\,|B|`, c: "A, B square matrices of the same order.", s: P1(4) }
            ]
          },
          {
            title: "Area of triangles using determinants",
            formulas: [
              { n: "Area of a triangle", t: R`\Delta = \frac{1}{2}\begin{vmatrix} x_1 & y_1 & 1 \\ x_2 & y_2 & 1 \\ x_3 & y_3 & 1 \end{vmatrix}`, v: "(x₁,y₁), (x₂,y₂), (x₃,y₃) are the vertices.", c: "Area is positive, so take the absolute value. Δ = 0 means the three points are collinear.", s: P1(4) }
            ]
          },
          {
            title: "Adjoint and inverse of a square matrix",
            formulas: [
              { n: "Adjoint", t: R`\operatorname{adj} A = \begin{bmatrix} A_{11} & A_{21} & A_{31} \\ A_{12} & A_{22} & A_{32} \\ A_{13} & A_{23} & A_{33}\end{bmatrix}`, v: "Transpose of the cofactor matrix; A_ij = cofactor of a_ij.", s: P1(4) },
              { n: "Fundamental property", t: R`A(\operatorname{adj} A) = (\operatorname{adj} A)A = |A|\, I`, c: "A is a square matrix of order n.", s: P1(4) },
              { n: "Determinant of adjoint", t: R`|\operatorname{adj} A| = |A|^{\,n-1}`, s: P1(4) },
              { n: "Singular / non-singular", t: R`|A| = 0 \ (\text{singular}),\qquad |A| \neq 0\ (\text{non-singular})`, s: P1(4) },
              { n: "Inverse of a matrix", t: R`A^{-1} = \frac{1}{|A|}\,\operatorname{adj} A`, c: "Exists if and only if |A| ≠ 0. The inverse, if it exists, is unique.", s: P1(4) },
              { n: "Inverse properties", t: R`AB = BA = I \Rightarrow B = A^{-1},\qquad (A^{-1})^{-1} = A,\qquad (AB)^{-1} = B^{-1}A^{-1}`, c: "A, B invertible of the same order.", s: P1(3) + "; " + P1(4) }
            ]
          },
          {
            title: "Test of consistency and solution of simultaneous linear equations using matrices",
            formulas: [
              { n: "Matrix form", t: R`AX = B,\quad A = \begin{bmatrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \\ a_3 & b_3 & c_3\end{bmatrix},\ X = \begin{bmatrix} x \\ y \\ z\end{bmatrix},\ B = \begin{bmatrix} d_1 \\ d_2 \\ d_3\end{bmatrix}`, s: P1(4) },
              { n: "Unique solution", t: R`X = A^{-1}B`, c: "Valid when |A| ≠ 0.", s: P1(4) },
              { n: "Consistency test", t: R`\begin{cases} |A| \neq 0 & \Rightarrow \text{unique solution (consistent)}\\ |A| = 0,\ (\operatorname{adj}A)B \neq O & \Rightarrow \text{no solution (inconsistent)}\\ |A| = 0,\ (\operatorname{adj}A)B = O & \Rightarrow \text{may or may not be consistent}\end{cases}`, s: P1(4) }
            ]
          }
        ]
      },
      { unit: 4, title: "Permutations and Combinations", status: "gap", note: "This unit is in NCERT Class XI Maths, which is not in the books folder.", topics: [
        { title: "Fundamental principle of counting", gap: true },
        { title: "Permutations and combinations; meaning of P(n, r) and C(n, r); simple applications", gap: true } ] },
      { unit: 5, title: "Binomial Theorem and its Simple Applications", status: "gap", note: "This unit is in NCERT Class XI Maths, which is not in the books folder.", topics: [
        { title: "Binomial theorem for a positive integral index; general term and middle term; simple applications", gap: true } ] },
      { unit: 6, title: "Sequence and Series", status: "gap", note: "This unit is in NCERT Class XI Maths, which is not in the books folder.", topics: [
        { title: "Arithmetic and geometric progressions; insertion of AMs and GMs", gap: true },
        { title: "Relation between A.M. and G.M.", gap: true } ] },
      {
        unit: 7,
        title: "Limit, Continuity and Differentiability",
        status: "partial",
        note: "Continuity, differentiation and applications of derivatives come from NCERT XII Ch 5–6. Limits, real-valued functions and graphs of simple functions are in Class XI Maths, which was not provided.",
        topics: [
          { title: "Real-valued functions, algebra of functions; graphs of simple functions; limits", gap: true },
          {
            title: "Continuity and differentiability",
            formulas: [
              { n: "Continuity at a point", t: R`\lim_{x \to c} f(x) = f(c)`, c: "f is continuous if it is continuous at every point of its domain.", s: P1(5) },
              { n: "Algebra of continuous functions", t: R`f \pm g,\quad f\cdot g,\quad \frac{f}{g}\ (g(x)\neq 0) \ \text{ are continuous}`, c: "f and g are continuous.", s: P1(5) },
              { n: "Derivative (first principle)", t: R`f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}`, s: P1(5) },
              { n: "Differentiability at c", t: R`\lim_{h\to 0^-}\frac{f(c+h)-f(c)}{h} = \lim_{h\to 0^+}\frac{f(c+h)-f(c)}{h} \ \ (\text{finite})`, c: "Every differentiable function is continuous; the converse is not true.", s: P1(5) }
            ]
          },
          {
            title: "Differentiation of sum, difference, product and quotient",
            formulas: [
              { n: "Sum / difference rule", t: R`(u \pm v)' = u' \pm v'`, s: P1(5) },
              { n: "Product (Leibnitz) rule", t: R`(uv)' = u'v + uv'`, s: P1(5) },
              { n: "Quotient rule", t: R`\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}`, c: "v ≠ 0", s: P1(5) }
            ]
          },
          {
            title: "Differentiation of trigonometric, inverse trigonometric, logarithmic, exponential, composite and implicit functions",
            formulas: [
              { n: "Standard derivatives", t: R`\frac{d}{dx}x^n = nx^{n-1},\quad \frac{d}{dx}\sin x = \cos x,\quad \frac{d}{dx}\cos x = -\sin x,\quad \frac{d}{dx}\tan x = \sec^2 x`, s: P1(5) + " (Table 5.3)" },
              { n: "Inverse trigonometric functions", t: R`\frac{d}{dx}\sin^{-1}x = \frac{1}{\sqrt{1-x^2}},\quad \frac{d}{dx}\cos^{-1}x = \frac{-1}{\sqrt{1-x^2}},\quad \frac{d}{dx}\tan^{-1}x = \frac{1}{1+x^2}`, c: "sin⁻¹x and cos⁻¹x for x ∈ (−1, 1); tan⁻¹x for x ∈ ℝ.", s: P1(5) },
              { n: "Exponential and logarithm", t: R`\frac{d}{dx}e^x = e^x,\qquad \frac{d}{dx}\log x = \frac{1}{x}`, c: "log x is the natural logarithm, x > 0.", s: P1(5) },
              { n: "Chain rule (composite functions)", t: R`f = v \circ u,\ t = u(x):\qquad \frac{df}{dx} = \frac{dv}{dt}\cdot\frac{dt}{dx}`, c: "Both dv/dt and dt/dx exist.", s: P1(5) },
              { n: "Implicit differentiation", t: R`\text{Differentiate both sides w.r.t. } x,\ \text{treating } y = y(x),\ \text{then solve for } \frac{dy}{dx}`, s: P1(5) },
              { n: "Logarithmic differentiation", t: R`y = [u(x)]^{v(x)} \Rightarrow \log y = v(x)\log u(x) \Rightarrow \frac{1}{y}\frac{dy}{dx} = v'(x)\log u(x) + v(x)\frac{u'(x)}{u(x)}`, c: "f(x) and u(x) must be positive.", s: P1(5) },
              { n: "Parametric form", t: R`x = f(t),\ y = g(t):\qquad \frac{dy}{dx} = \frac{dy/dt}{dx/dt} = \frac{g'(t)}{f'(t)}`, c: "f′(t) ≠ 0", s: P1(5) }
            ]
          },
          {
            title: "Derivatives of order up to two",
            formulas: [
              { n: "Second order derivative", t: R`\frac{d^2y}{dx^2} = \frac{d}{dx}\left(\frac{dy}{dx}\right) = f''(x) = y'' = y_2`, s: P1(5) }
            ]
          },
          {
            title: "Applications of derivatives: rate of change of quantities",
            formulas: [
              { n: "Rate of change", t: R`\frac{dy}{dx} = f'(x);\qquad \left.\frac{dy}{dx}\right|_{x = x_0} = f'(x_0)`, v: "Rate of change of y with respect to x (at x = x₀).", s: P1(6) },
              { n: "Related rates", t: R`x = f(t),\ y = g(t):\quad \frac{dy}{dx} = \frac{dy/dt}{dx/dt}`, c: "dx/dt ≠ 0", s: P1(6) }
            ]
          },
          {
            title: "Monotonic — increasing and decreasing functions",
            formulas: [
              { n: "Increasing / decreasing / constant", t: R`f'(x) > 0 \Rightarrow \text{increasing};\quad f'(x) < 0 \Rightarrow \text{decreasing};\quad f'(x) = 0 \Rightarrow \text{constant}`, c: "On an interval where f is continuous on [a, b] and differentiable on (a, b).", s: P1(6) },
              { n: "Definition", t: R`x_1 < x_2 \Rightarrow f(x_1) < f(x_2)\ (\text{increasing}),\qquad f(x_1) > f(x_2)\ (\text{decreasing})`, s: P1(6) }
            ]
          },
          {
            title: "Maxima and minima of functions of one variable",
            formulas: [
              { n: "Critical point", t: R`f'(c) = 0 \ \text{ or } f \text{ not differentiable at } c`, s: P1(6) },
              { n: "First derivative test", t: R`f' : + \to - \Rightarrow \text{local max};\quad f' : - \to + \Rightarrow \text{local min};\quad \text{no sign change} \Rightarrow \text{point of inflexion}`, c: "Sign of f′(x) as x increases through c.", s: P1(6) },
              { n: "Second derivative test", t: R`f'(c) = 0,\ f''(c) < 0 \Rightarrow \text{local max};\qquad f'(c) = 0,\ f''(c) > 0 \Rightarrow \text{local min}`, c: "If f′(c) = 0 and f″(c) = 0 the test fails; use the first derivative test.", s: P1(6) },
              { n: "Absolute extrema on [a, b]", t: R`\max/\min \text{ of } \{ f(\text{critical points}),\ f(a),\ f(b) \}`, s: P1(6) }
            ]
          }
        ]
      },
      {
        unit: 8,
        title: "Integral Calculus",
        status: "covered",
        topics: [
          {
            title: "Integral as an anti-derivative",
            formulas: [
              { n: "Indefinite integral", t: R`\frac{d}{dx}F(x) = f(x) \;\Rightarrow\; \int f(x)\,dx = F(x) + C`, v: "C = constant of integration.", s: P2(7) },
              { n: "Linearity", t: R`\int [f(x) + g(x)]\,dx = \int f(x)\,dx + \int g(x)\,dx,\qquad \int k\,f(x)\,dx = k\int f(x)\,dx`, s: P2(7) }
            ]
          },
          {
            title: "Fundamental integrals: algebraic, trigonometric, exponential and logarithmic",
            formulas: [
              { n: "Power rule", t: R`\int x^n\,dx = \frac{x^{n+1}}{n+1} + C,\ n \neq -1;\qquad \int dx = x + C`, s: P2(7) },
              { n: "Trigonometric", t: R`\int \cos x\,dx = \sin x + C,\qquad \int \sin x\,dx = -\cos x + C`, s: P2(7) },
              { n: "", t: R`\int \sec^2 x\,dx = \tan x + C,\qquad \int \operatorname{cosec}^2 x\,dx = -\cot x + C`, s: P2(7) },
              { n: "", t: R`\int \sec x\tan x\,dx = \sec x + C,\qquad \int \operatorname{cosec} x\cot x\,dx = -\operatorname{cosec} x + C`, s: P2(7) },
              { n: "Inverse trigonometric", t: R`\int \frac{dx}{\sqrt{1-x^2}} = \sin^{-1}x + C = -\cos^{-1}x + C`, s: P2(7) },
              { n: "", t: R`\int \frac{dx}{1+x^2} = \tan^{-1}x + C = -\cot^{-1}x + C`, s: P2(7) },
              { n: "Exponential & logarithmic", t: R`\int e^x\,dx = e^x + C,\qquad \int a^x\,dx = \frac{a^x}{\log a} + C,\qquad \int \frac{1}{x}\,dx = \log|x| + C`, s: P2(7) }
            ]
          },
          {
            title: "Integration by substitution and using trigonometric identities",
            formulas: [
              { n: "Substitution", t: R`x = g(t) \;\Rightarrow\; \int f(x)\,dx = \int f\big(g(t)\big)\,g'(t)\,dt`, s: P2(7) },
              { n: "tan x and cot x", t: R`\int \tan x\,dx = \log|\sec x| + C,\qquad \int \cot x\,dx = \log|\sin x| + C`, s: P2(7) },
              { n: "sec x and cosec x", t: R`\int \sec x\,dx = \log|\sec x + \tan x| + C,\qquad \int \operatorname{cosec} x\,dx = \log|\operatorname{cosec} x - \cot x| + C`, s: P2(7) },
              { n: "Trigonometric identities", t: R`\text{Use identities such as } \sin^2x = \tfrac{1-\cos 2x}{2},\ \cos^2x = \tfrac{1+\cos 2x}{2},\ 2\sin A\cos B = \sin(A{+}B)+\sin(A{-}B)`, c: "To convert products and powers into standard integrable forms.", s: P2(7) + " (§7.3.2)" }
            ]
          },
          {
            title: "Integration by partial fractions",
            formulas: [
              { n: "Improper rational function", t: R`\frac{P(x)}{Q(x)} = T(x) + \frac{P_1(x)}{Q(x)}`, c: "If deg P ≥ deg Q, divide first; deg P₁ < deg Q.", s: P2(7) },
              { n: "Distinct linear factors", t: R`\frac{px+q}{(x-a)(x-b)} = \frac{A}{x-a} + \frac{B}{x-b},\quad a \neq b`, s: P2(7) },
              { n: "Repeated linear factor", t: R`\frac{px+q}{(x-a)^2} = \frac{A}{x-a} + \frac{B}{(x-a)^2}`, s: P2(7) },
              { n: "Three distinct linear factors", t: R`\frac{px^2+qx+r}{(x-a)(x-b)(x-c)} = \frac{A}{x-a} + \frac{B}{x-b} + \frac{C}{x-c}`, s: P2(7) },
              { n: "Repeated + distinct", t: R`\frac{px^2+qx+r}{(x-a)^2(x-b)} = \frac{A}{x-a} + \frac{B}{(x-a)^2} + \frac{C}{x-b}`, s: P2(7) },
              { n: "Irreducible quadratic factor", t: R`\frac{px^2+qx+r}{(x-a)(x^2+bx+c)} = \frac{A}{x-a} + \frac{Bx+C}{x^2+bx+c}`, c: "x² + bx + c cannot be factorised further.", s: P2(7) }
            ]
          },
          {
            title: "Evaluation of simple integrals of the standard types",
            formulas: [
              { n: "", t: R`\int \frac{dx}{x^2 - a^2} = \frac{1}{2a}\log\left|\frac{x-a}{x+a}\right| + C`, s: P2(7) },
              { n: "", t: R`\int \frac{dx}{a^2 - x^2} = \frac{1}{2a}\log\left|\frac{a+x}{a-x}\right| + C`, s: P2(7) },
              { n: "", t: R`\int \frac{dx}{x^2 + a^2} = \frac{1}{a}\tan^{-1}\frac{x}{a} + C`, s: P2(7) },
              { n: "", t: R`\int \frac{dx}{\sqrt{x^2 - a^2}} = \log\left|x + \sqrt{x^2 - a^2}\right| + C`, s: P2(7) },
              { n: "", t: R`\int \frac{dx}{\sqrt{a^2 - x^2}} = \sin^{-1}\frac{x}{a} + C`, s: P2(7) },
              { n: "", t: R`\int \frac{dx}{\sqrt{x^2 + a^2}} = \log\left|x + \sqrt{x^2 + a^2}\right| + C`, s: P2(7) },
              { n: "", t: R`\int \sqrt{x^2 - a^2}\,dx = \frac{x}{2}\sqrt{x^2 - a^2} - \frac{a^2}{2}\log\left|x + \sqrt{x^2 - a^2}\right| + C`, s: P2(7) },
              { n: "", t: R`\int \sqrt{x^2 + a^2}\,dx = \frac{x}{2}\sqrt{x^2 + a^2} + \frac{a^2}{2}\log\left|x + \sqrt{x^2 + a^2}\right| + C`, s: P2(7) },
              { n: "", t: R`\int \sqrt{a^2 - x^2}\,dx = \frac{x}{2}\sqrt{a^2 - x^2} + \frac{a^2}{2}\sin^{-1}\frac{x}{a} + C`, s: P2(7) },
              { n: "Quadratic in the denominator", t: R`ax^2 + bx + c = a\left[\left(x + \frac{b}{2a}\right)^2 + \left(\frac{c}{a} - \frac{b^2}{4a^2}\right)\right]`, c: "For ∫dx/(ax²+bx+c) and ∫dx/√(ax²+bx+c): complete the square, then use the standard forms.", s: P2(7) },
              { n: "Linear over quadratic", t: R`px + q = A\,\frac{d}{dx}(ax^2+bx+c) + B = A(2ax + b) + B`, c: "For ∫(px+q)/(ax²+bx+c) dx and ∫(px+q)/√(ax²+bx+c) dx; find A, B by comparing coefficients.", s: P2(7) }
            ]
          },
          {
            title: "Integration by parts",
            formulas: [
              { n: "Integration by parts", t: R`\int f_1(x)\,f_2(x)\,dx = f_1(x)\int f_2(x)\,dx - \int\left[\frac{d}{dx}f_1(x)\cdot\int f_2(x)\,dx\right]dx`, c: "Choose as second function (f₂) one whose integral is well known.", s: P2(7) },
              { n: "Integral of type eˣ[f + f′]", t: R`\int e^x\,[f(x) + f'(x)]\,dx = e^x f(x) + C`, s: P2(7) }
            ]
          },
          {
            title: "Fundamental theorem of calculus",
            formulas: [
              { n: "Area function", t: R`A(x) = \int_a^x f(x)\,dx`, s: P2(7) },
              { n: "First fundamental theorem", t: R`A'(x) = f(x)\quad \forall\, x \in [a, b]`, c: "f continuous on [a, b].", s: P2(7) },
              { n: "Second fundamental theorem", t: R`\int_a^b f(x)\,dx = \big[F(x)\big]_a^b = F(b) - F(a)`, c: "f continuous on [a, b]; F′(x) = f(x).", s: P2(7) }
            ]
          },
          {
            title: "Properties of definite integrals",
            formulas: [
              { n: "P₀", t: R`\int_a^b f(x)\,dx = \int_a^b f(t)\,dt`, s: P2(7) },
              { n: "P₁", t: R`\int_a^b f(x)\,dx = -\int_b^a f(x)\,dx;\qquad \int_a^a f(x)\,dx = 0`, s: P2(7) },
              { n: "P₂", t: R`\int_a^b f(x)\,dx = \int_a^c f(x)\,dx + \int_c^b f(x)\,dx`, s: P2(7) },
              { n: "P₃", t: R`\int_a^b f(x)\,dx = \int_a^b f(a + b - x)\,dx`, s: P2(7) },
              { n: "P₄", t: R`\int_0^a f(x)\,dx = \int_0^a f(a - x)\,dx`, c: "Particular case of P₃.", s: P2(7) },
              { n: "P₅", t: R`\int_0^{2a} f(x)\,dx = \int_0^a f(x)\,dx + \int_0^a f(2a - x)\,dx`, s: P2(7) },
              { n: "P₆", t: R`\int_0^{2a} f(x)\,dx = \begin{cases} 2\int_0^a f(x)\,dx, & f(2a - x) = f(x) \\ 0, & f(2a - x) = -f(x)\end{cases}`, s: P2(7) },
              { n: "P₇", t: R`\int_{-a}^{a} f(x)\,dx = \begin{cases} 2\int_0^a f(x)\,dx, & f \text{ even: } f(-x) = f(x) \\ 0, & f \text{ odd: } f(-x) = -f(x)\end{cases}`, s: P2(7) }
            ]
          },
          {
            title: "Determining areas of regions bounded by simple curves in standard forms",
            formulas: [
              { n: "Area with x-axis (vertical strips)", t: R`A = \int_a^b y\,dx = \int_a^b f(x)\,dx`, c: "Region bounded by y = f(x), the x-axis and x = a, x = b.", s: P2(8) },
              { n: "Area with y-axis (horizontal strips)", t: R`A = \int_c^d x\,dy = \int_c^d g(y)\,dy`, c: "Region bounded by x = g(y), the y-axis and y = c, y = d.", s: P2(8) },
              { n: "Curve below the axis", t: R`A = \left|\int_a^b f(x)\,dx\right|;\qquad A = |A_1| + A_2 \ \text{(part below, part above)}`, s: P2(8) },
              { n: "Area of circle x² + y² = a²", t: R`A = 4\int_0^a \sqrt{a^2 - x^2}\,dx = \pi a^2`, s: P2(8) + " (Example 1)" },
              { n: "Area of ellipse x²/a² + y²/b² = 1", t: R`A = \frac{4b}{a}\int_0^a \sqrt{a^2 - x^2}\,dx = \pi ab`, s: P2(8) + " (Example 2)" }
            ]
          }
        ]
      },
      {
        unit: 9,
        title: "Differential Equations",
        status: "covered",
        topics: [
          {
            title: "Ordinary differential equations, their order and degree",
            formulas: [
              { n: "Order", t: R`\text{Order} = \text{order of the highest order derivative present}`, s: P2(9) },
              { n: "Degree", t: R`\text{Degree} = \text{highest power (positive integer) of the highest order derivative}`, c: "Defined only when the equation is a polynomial in its derivatives.", s: P2(9) },
              { n: "General vs particular solution", t: R`\text{General: as many arbitrary constants as the order};\quad \text{Particular: free of arbitrary constants}`, s: P2(9) }
            ]
          },
          {
            title: "Solution by the method of separation of variables",
            formulas: [
              { n: "Variables separable", t: R`\frac{dy}{dx} = g(x)\,h(y) \;\Rightarrow\; \int \frac{dy}{h(y)} = \int g(x)\,dx + C`, c: "h(y) ≠ 0", s: P2(9) }
            ]
          },
          {
            title: "Solution of homogeneous differential equations",
            formulas: [
              { n: "Homogeneous function", t: R`F(\lambda x, \lambda y) = \lambda^n F(x, y)`, v: "F is homogeneous of degree n.", s: P2(9) },
              { n: "Homogeneous DE", t: R`\frac{dy}{dx} = F(x, y) = g\!\left(\frac{y}{x}\right)`, c: "F(x, y) homogeneous of degree zero.", s: P2(9) },
              { n: "Substitution", t: R`y = vx \;\Rightarrow\; \frac{dy}{dx} = v + x\frac{dv}{dx};\qquad \int \frac{dv}{g(v) - v} = \int \frac{dx}{x} + C`, c: "For dx/dy = h(x/y), use x = vy instead.", s: P2(9) }
            ]
          },
          {
            title: "Linear differential equation dy/dx + p(x)y = q(x)",
            formulas: [
              { n: "Linear DE (in y)", t: R`\frac{dy}{dx} + Py = Q`, v: "P, Q are constants or functions of x only.", s: P2(9) },
              { n: "Integrating factor", t: R`\text{I.F.} = e^{\int P\,dx}`, s: P2(9) },
              { n: "General solution", t: R`y \cdot (\text{I.F.}) = \int \big(Q \times \text{I.F.}\big)\,dx + C`, s: P2(9) },
              { n: "Linear DE (in x)", t: R`\frac{dx}{dy} + P_1 x = Q_1 \;\Rightarrow\; x\, e^{\int P_1 dy} = \int \left(Q_1\, e^{\int P_1 dy}\right) dy + C`, v: "P₁, Q₁ are constants or functions of y only.", s: P2(9) }
            ]
          }
        ]
      },
      {
        unit: 10,
        title: "Co-ordinate Geometry",
        status: "gap",
        note: "Straight lines, circles and conic sections are in NCERT Class XI Maths, which is not in the books folder.",
        topics: [
          { title: "Cartesian system; distance formula; section formula; locus; slope; parallel and perpendicular lines; intercepts", gap: true },
          { title: "Straight line: forms of equations, intersection, angle between lines, concurrence, distance of a point from a line, centroid, orthocentre, circumcentre", gap: true },
          { title: "Circle: standard and general form, radius and centre, diameter form, intersection of a line and a circle", gap: true },
          { title: "Conic sections: parabola, ellipse and hyperbola in standard forms", gap: true }
        ]
      },
      {
        unit: 11,
        title: "Three Dimensional Geometry",
        status: "partial",
        note: "Lines in space come from NCERT XII Ch 11. Coordinates of a point in space, distance between two points and the section formula in coordinates are in Class XI Maths (not provided). The distance (PQ) inside the direction-cosine formula and the vector section formula (Ch 10) are included.",
        topics: [
          { title: "Coordinates of a point in space; distance between two points; section formula", gap: true, partialNote: "See the vector section formula under Vector Algebra." },
          {
            title: "Direction ratios and direction cosines",
            formulas: [
              { n: "Direction cosines identity", t: R`l^2 + m^2 + n^2 = 1`, v: "l = cos α, m = cos β, n = cos γ: cosines of the angles with the +x, +y, +z axes.", s: P2(11) },
              { n: "DCs from direction ratios", t: R`l = \frac{a}{\sqrt{a^2+b^2+c^2}},\quad m = \frac{b}{\sqrt{a^2+b^2+c^2}},\quad n = \frac{c}{\sqrt{a^2+b^2+c^2}}`, v: "a, b, c = direction ratios (proportional to l, m, n).", s: P2(11) },
              { n: "DCs of the line through P and Q", t: R`\frac{x_2 - x_1}{PQ},\ \frac{y_2 - y_1}{PQ},\ \frac{z_2 - z_1}{PQ};\qquad PQ = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}`, s: P2(11) }
            ]
          },
          {
            title: "Equation of a line",
            formulas: [
              { n: "Vector form (point + direction)", t: R`\vec r = \vec a + \lambda \vec b`, v: "a⃗ = position vector of a point on the line, b⃗ = vector parallel to the line, λ real.", s: P2(11) },
              { n: "Cartesian form", t: R`\frac{x - x_1}{a} = \frac{y - y_1}{b} = \frac{z - z_1}{c}\qquad\text{or}\qquad \frac{x - x_1}{l} = \frac{y - y_1}{m} = \frac{z - z_1}{n}`, v: "a, b, c = direction ratios; l, m, n = direction cosines.", s: P2(11) },
              { n: "Line through two points", t: R`\vec r = \vec a + \lambda(\vec b - \vec a)`, s: P2(11) }
            ]
          },
          {
            title: "Angle between two intersecting lines",
            formulas: [
              { n: "Using direction cosines", t: R`\cos\theta = |l_1l_2 + m_1m_2 + n_1n_2|`, c: "θ = acute angle between the lines.", s: P2(11) },
              { n: "Using direction ratios", t: R`\cos\theta = \frac{|a_1a_2 + b_1b_2 + c_1c_2|}{\sqrt{a_1^2+b_1^2+c_1^2}\,\sqrt{a_2^2+b_2^2+c_2^2}}`, s: P2(11) },
              { n: "Vector form", t: R`\cos\theta = \frac{|\vec b_1 \cdot \vec b_2|}{|\vec b_1|\,|\vec b_2|}`, c: "Lines r⃗ = a⃗₁ + λb⃗₁ and r⃗ = a⃗₂ + μb⃗₂.", s: P2(11) },
              { n: "Perpendicular / parallel lines", t: R`\perp:\ a_1a_2 + b_1b_2 + c_1c_2 = 0;\qquad \parallel:\ \frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}`, s: P2(11) }
            ]
          },
          {
            title: "Skew lines, the shortest distance between them and its equation",
            formulas: [
              { n: "Skew lines", t: R`\text{Neither parallel nor intersecting (non-coplanar)}`, s: P2(11) },
              { n: "Shortest distance (vector form)", t: R`d = \left|\frac{(\vec b_1 \times \vec b_2)\cdot(\vec a_2 - \vec a_1)}{|\vec b_1 \times \vec b_2|}\right|`, c: "Lines r⃗ = a⃗₁ + λb⃗₁ and r⃗ = a⃗₂ + μb⃗₂. d = 0 means the lines intersect.", s: P2(11) },
              { n: "Shortest distance (Cartesian form)", t: R`d = \frac{\begin{vmatrix} x_2 - x_1 & y_2 - y_1 & z_2 - z_1 \\ a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \end{vmatrix}}{\sqrt{(b_1c_2 - b_2c_1)^2 + (c_1a_2 - c_2a_1)^2 + (a_1b_2 - a_2b_1)^2}}`, s: P2(11) },
              { n: "Distance between parallel lines", t: R`d = \left|\frac{\vec b \times (\vec a_2 - \vec a_1)}{|\vec b|}\right|`, c: "Lines r⃗ = a⃗₁ + λb⃗ and r⃗ = a⃗₂ + μb⃗.", s: P2(11) }
            ]
          }
        ]
      },
      {
        unit: 12,
        title: "Vector Algebra",
        status: "covered",
        topics: [
          {
            title: "Vectors and scalars; addition of vectors",
            formulas: [
              { n: "Position vector & magnitude", t: R`\vec{OP} = \vec r = x\hat i + y\hat j + z\hat k,\qquad |\vec r| = \sqrt{x^2 + y^2 + z^2}`, s: P2(10) },
              { n: "Triangle law", t: R`\vec{AB} + \vec{BC} = \vec{AC};\qquad \vec{AB} + \vec{BC} + \vec{CA} = \vec 0`, s: P2(10) },
              { n: "Properties of addition", t: R`\vec a + \vec b = \vec b + \vec a,\qquad (\vec a + \vec b) + \vec c = \vec a + (\vec b + \vec c)`, s: P2(10) },
              { n: "Unit vector", t: R`\hat a = \frac{\vec a}{|\vec a|}`, c: "a⃗ ≠ 0⃗", s: P2(10) },
              { n: "Scalar multiple", t: R`|\lambda\vec a| = |\lambda|\,|\vec a|`, c: "Same direction if λ > 0, opposite if λ < 0.", s: P2(10) }
            ]
          },
          {
            title: "Components of a vector in two and three dimensions",
            formulas: [
              { n: "DCs of a vector", t: R`l = \frac{a}{r},\quad m = \frac{b}{r},\quad n = \frac{c}{r}`, v: "Vector a î + b ĵ + c k̂ with magnitude r; a, b, c are its direction ratios (scalar components).", s: P2(10) },
              { n: "Vector joining two points", t: R`\vec{P_1P_2} = (x_2 - x_1)\hat i + (y_2 - y_1)\hat j + (z_2 - z_1)\hat k`, s: P2(10) },
              { n: "Component-wise operations", t: R`\vec a \pm \vec b = (a_1 \pm b_1)\hat i + (a_2 \pm b_2)\hat j + (a_3 \pm b_3)\hat k,\qquad \lambda\vec a = \lambda a_1\hat i + \lambda a_2\hat j + \lambda a_3\hat k`, s: P2(10) },
              { n: "Section formula (internal)", t: R`\vec r = \frac{m\vec b + n\vec a}{m + n}`, v: "R divides PQ (position vectors a⃗, b⃗) in ratio m : n.", s: P2(10) },
              { n: "Section formula (external)", t: R`\vec r = \frac{m\vec b - n\vec a}{m - n}`, s: P2(10) },
              { n: "Mid-point", t: R`\vec r = \frac{\vec a + \vec b}{2}`, s: P2(10) }
            ]
          },
          {
            title: "Scalar (dot) product",
            formulas: [
              { n: "Definition", t: R`\vec a \cdot \vec b = |\vec a|\,|\vec b|\cos\theta`, v: "θ = angle between a⃗ and b⃗, 0 ≤ θ ≤ π.", s: P2(10) },
              { n: "Angle between vectors", t: R`\cos\theta = \frac{\vec a \cdot \vec b}{|\vec a|\,|\vec b|}`, s: P2(10) },
              { n: "Component form", t: R`\vec a \cdot \vec b = a_1b_1 + a_2b_2 + a_3b_3`, s: P2(10) },
              { n: "Unit vector products", t: R`\hat i\cdot\hat i = \hat j\cdot\hat j = \hat k\cdot\hat k = 1,\qquad \hat i\cdot\hat j = \hat j\cdot\hat k = \hat k\cdot\hat i = 0`, s: P2(10) },
              { n: "Perpendicular vectors", t: R`\vec a \cdot \vec b = 0 \iff \vec a \perp \vec b`, c: "a⃗, b⃗ non-zero.", s: P2(10) },
              { n: "Projection of a⃗ on b⃗", t: R`\text{Projection} = \vec a \cdot \hat b = \frac{\vec a \cdot \vec b}{|\vec b|}`, s: P2(10) }
            ]
          },
          {
            title: "Vector (cross) product",
            formulas: [
              { n: "Definition", t: R`\vec a \times \vec b = |\vec a|\,|\vec b|\sin\theta\ \hat n`, v: "n̂ = unit vector ⊥ to both a⃗ and b⃗; a⃗, b⃗, n̂ form a right-handed system.", s: P2(10) },
              { n: "Determinant form", t: R`\vec a \times \vec b = \begin{vmatrix} \hat i & \hat j & \hat k \\ a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3\end{vmatrix}`, s: P2(10) },
              { n: "Unit vector products", t: R`\hat i\times\hat j = \hat k,\ \ \hat j\times\hat k = \hat i,\ \ \hat k\times\hat i = \hat j;\qquad \hat i\times\hat i = \vec 0`, s: P2(10) },
              { n: "Properties", t: R`\vec a \times \vec b = -\,\vec b \times \vec a;\qquad \vec a \times \vec b = \vec 0 \iff \vec a \parallel \vec b`, s: P2(10) },
              { n: "Angle via cross product", t: R`\sin\theta = \frac{|\vec a \times \vec b|}{|\vec a|\,|\vec b|}`, s: P2(10) },
              { n: "Area of triangle / parallelogram", t: R`\text{Triangle} = \tfrac{1}{2}|\vec a \times \vec b|,\qquad \text{Parallelogram} = |\vec a \times \vec b|`, v: "a⃗, b⃗ = adjacent sides.", s: P2(10) }
            ]
          }
        ]
      },
      {
        unit: 13,
        title: "Statistics and Probability",
        status: "partial",
        note: "Probability comes from NCERT XII Ch 13. Statistics (mean, median, mode, standard deviation, variance, mean deviation) is in Class XI Maths, which was not provided.",
        topics: [
          { title: "Measures of dispersion: mean, median, mode; standard deviation, variance and mean deviation (grouped and ungrouped)", gap: true },
          {
            title: "Probability of an event; addition and multiplication theorems",
            formulas: [
              { n: "Addition theorem", t: R`P(A \cup B) = P(A) + P(B) - P(A \cap B)`, s: P2(13) + " (Example 14)" },
              { n: "Conditional probability", t: R`P(E\,|\,F) = \frac{P(E \cap F)}{P(F)},\quad P(F) \neq 0`, s: P2(13) },
              { n: "Properties of conditional probability", t: R`0 \le P(E|F) \le 1,\quad P(S|F) = P(F|F) = 1,\quad P(E'|F) = 1 - P(E|F)`, s: P2(13) },
              { n: "", t: R`P\big((E \cup F)|G\big) = P(E|G) + P(F|G) - P\big((E \cap F)|G\big)`, s: P2(13) },
              { n: "Multiplication theorem", t: R`P(E \cap F) = P(E)\,P(F|E) = P(F)\,P(E|F)`, c: "P(E) ≠ 0, P(F) ≠ 0 respectively.", s: P2(13) },
              { n: "Three events", t: R`P(E \cap F \cap G) = P(E)\,P(F|E)\,P\big(G|(E \cap F)\big)`, s: P2(13) },
              { n: "Independent events", t: R`P(E \cap F) = P(E)\,P(F);\qquad P(E|F) = P(E),\ P(F|E) = P(F)`, c: "If E, F are independent, so are E′ & F and E′ & F′.", s: P2(13) },
              { n: "At least one of two independent events", t: R`P(A \cup B) = 1 - P(A')\,P(B')`, s: P2(13) + " (Example 14)" }
            ]
          },
          {
            title: "Bayes' theorem",
            formulas: [
              { n: "Partition of sample space", t: R`E_i \cap E_j = \varphi\ (i \neq j),\quad E_1 \cup E_2 \cup \dots \cup E_n = S,\quad P(E_i) > 0`, s: P2(13) },
              { n: "Theorem of total probability", t: R`P(A) = \sum_{j=1}^{n} P(E_j)\,P(A|E_j)`, s: P2(13) },
              { n: "Bayes' theorem", t: R`P(E_i\,|\,A) = \frac{P(E_i)\,P(A|E_i)}{\sum_{j=1}^{n} P(E_j)\,P(A|E_j)}`, c: "E₁…Eₙ form a partition of S, P(A) ≠ 0.", s: P2(13) }
            ]
          },
          {
            title: "Probability distribution of a random variable",
            formulas: [
              { n: "Random variable", t: R`X : S \to \mathbb{R}`, v: "A real-valued function whose domain is the sample space of a random experiment.", c: "The provided book (2026-27 reprint) gives only the definition; mean/variance of a distribution are not in it.", s: P2(13) }
            ]
          }
        ]
      },
      {
        unit: 14,
        title: "Trigonometry",
        status: "partial",
        note: "Inverse trigonometric functions come from NCERT XII Ch 2. Trigonometric identities and trigonometric functions are in Class XI Maths, which was not provided.",
        topics: [
          { title: "Trigonometrical identities and trigonometrical functions", gap: true },
          {
            title: "Inverse trigonometrical functions and their properties",
            formulas: [
              { n: "Domain and principal value branch", t: R`\begin{array}{lll} \text{Function} & \text{Domain} & \text{Range (P.V. branch)} \\ \hline \sin^{-1}x & [-1, 1] & [-\tfrac{\pi}{2}, \tfrac{\pi}{2}] \\ \cos^{-1}x & [-1, 1] & [0, \pi] \\ \operatorname{cosec}^{-1}x & \mathbb{R} - (-1, 1) & [-\tfrac{\pi}{2}, \tfrac{\pi}{2}] - \{0\} \\ \sec^{-1}x & \mathbb{R} - (-1, 1) & [0, \pi] - \{\tfrac{\pi}{2}\} \\ \tan^{-1}x & \mathbb{R} & (-\tfrac{\pi}{2}, \tfrac{\pi}{2}) \\ \cot^{-1}x & \mathbb{R} & (0, \pi) \end{array}`, s: P1(2) },
              { n: "Notation", t: R`\sin^{-1}x \neq (\sin x)^{-1} = \frac{1}{\sin x}`, s: P1(2) },
              { n: "Definition", t: R`y = \sin^{-1}x \iff x = \sin y`, s: P1(2) },
              { n: "Inverse property", t: R`\sin(\sin^{-1}x) = x,\ x \in [-1, 1];\qquad \sin^{-1}(\sin x) = x,\ x \in \left[-\tfrac{\pi}{2}, \tfrac{\pi}{2}\right]`, c: "Similar results hold for the other functions within their principal value branches.", s: P1(2) },
              { n: "Double-angle forms", t: R`\sin^{-1}\!\left(2x\sqrt{1 - x^2}\right) = 2\sin^{-1}x,\quad -\tfrac{1}{\sqrt 2} \le x \le \tfrac{1}{\sqrt 2}`, s: P1(2) + " (Example 3)" },
              { n: "", t: R`\sin^{-1}\!\left(2x\sqrt{1 - x^2}\right) = 2\cos^{-1}x,\quad \tfrac{1}{\sqrt 2} \le x \le 1`, s: P1(2) + " (Example 3)" },
              { n: "Triple-angle forms", t: R`3\sin^{-1}x = \sin^{-1}(3x - 4x^3),\ x \in \left[-\tfrac12, \tfrac12\right];\qquad 3\cos^{-1}x = \cos^{-1}(4x^3 - 3x),\ x \in \left[\tfrac12, 1\right]`, s: P1(2) + " (Exercise 2.2)" }
            ]
          }
        ]
      }
    ]
  };
})();
