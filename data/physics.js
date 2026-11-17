/* Physics — structure from the official JEE Main syllabus; formulas only from the provided books:
   H C Verma, Concepts of Physics, Vol 1 (Ch 1–22) and Vol 2 (Ch 23–47).
   Topics the books do not treat are marked as gaps. */
window.FORMULA_DATA = window.FORMULA_DATA || {};
(function () {
  const R = String.raw;
  const HCV = (ch) => `HC Verma Vol ${ch <= 22 ? 1 : 2}, Ch ${ch}`;

  window.FORMULA_DATA.physics = {
    id: "physics",
    name: "Physics",
    tagline: "Mechanics · Heat · Waves · Electromagnetism · Optics · Modern",
    chapters: [
      {
        unit: 1, title: "Units and Measurements", status: "partial",
        note: "Units, dimensions and significant digits come from HCV Ch 1–2. A treatment of errors in measurement (absolute, relative and percentage error, propagation) is not in the provided books.",
        topics: [
          {
            title: "Units of measurement; system of units; SI units; fundamental and derived units",
            formulas: [
              { n: "SI base quantities", t: R`\text{length (m), mass (kg), time (s), electric current (A), temperature (K), amount (mol), luminous intensity (cd)}`, s: HCV(1) },
              { n: "Derived unit", t: R`[\text{derived}] = \text{product of powers of base units, e.g. } 1\ \text{N} = 1\ \text{kg m s}^{-2}`, s: HCV(1) }
            ]
          },
          {
            title: "Least count, significant figures",
            formulas: [
              { n: "Least count", t: R`\text{Least count} = \text{smallest subdivision of the scale of the instrument}`, s: HCV(2) },
              { n: "Significant digits", t: R`\text{All certain digits} + \text{one doubtful (estimated) digit}`, c: "In multiplication/division, keep as many significant digits as in the factor with the least significant digits.", s: HCV(2) }
            ]
          },
          { title: "Errors in measurements", gap: true },
          {
            title: "Dimensions of physical quantities; dimensional analysis and its applications",
            formulas: [
              { n: "Dimensional formula", t: R`[Q] = M^{a}L^{b}T^{c}I^{d}K^{e}\ldots`, v: "a, b, c… are the dimensions of Q in mass, length, time, current, temperature.", s: HCV(1) },
              { n: "Examples", t: R`[\text{velocity}] = LT^{-1},\quad [\text{force}] = MLT^{-2},\quad [\text{work}] = ML^2T^{-2},\quad [\text{pressure}] = ML^{-1}T^{-2}`, s: HCV(1) },
              { n: "Principle of homogeneity", t: R`\text{Terms added, subtracted or equated must have the same dimensions}`, c: "Used to check equations and to derive relations (up to dimensionless constants).", s: HCV(1) },
              { n: "Conversion of units", t: R`n_2 = n_1\left[\frac{M_1}{M_2}\right]^a\left[\frac{L_1}{L_2}\right]^b\left[\frac{T_1}{T_2}\right]^c`, v: "n₁ u₁ = n₂ u₂ for a quantity with dimensions MᵃLᵇTᶜ.", s: HCV(1) }
            ]
          }
        ]
      },
      {
        unit: 2, title: "Kinematics", status: "covered",
        topics: [
          {
            title: "Average speed and instantaneous velocity",
            formulas: [
              { n: "Average speed", t: R`v_{av} = \frac{s}{t_2 - t_1}`, v: "s = distance travelled in time t₂ − t₁.", s: HCV(3) },
              { n: "Instantaneous speed", t: R`v = \lim_{\Delta t\to 0}\frac{\Delta s}{\Delta t} = \frac{ds}{dt}`, s: HCV(3) },
              { n: "Average velocity", t: R`\vec v_{av} = \frac{\vec r_2 - \vec r_1}{t_2 - t_1}`, s: HCV(3) },
              { n: "Instantaneous velocity and acceleration", t: R`\vec v = \frac{d\vec r}{dt},\qquad \vec a = \frac{d\vec v}{dt} = \frac{d^2\vec r}{dt^2}`, s: HCV(3) },
              { n: "", t: R`a = v\frac{dv}{dx}`, c: "Useful when a is given as a function of x.", s: HCV(3) }
            ]
          },
          {
            title: "Relations for uniformly accelerated motion; velocity–time and position–time graphs",
            formulas: [
              { n: "Equations of motion", t: R`v = u + at,\qquad x = ut + \tfrac{1}{2}at^2,\qquad v^2 = u^2 + 2ax`, c: "Constant acceleration along a straight line; x = displacement.", s: HCV(3) },
              { n: "Vector form", t: R`\vec v = \vec u + \vec a t,\qquad \vec r = \vec u t + \tfrac{1}{2}\vec a t^2`, s: HCV(3) },
              { n: "Graphs", t: R`\text{slope of } x\text{–}t = v;\quad \text{slope of } v\text{–}t = a;\quad \text{area under } v\text{–}t = \text{displacement}`, s: HCV(3) },
              { n: "Free fall", t: R`a = g \approx 9.8\ \text{m s}^{-2}\ (\text{downward})`, c: "Air resistance neglected.", s: HCV(3) }
            ]
          },
          {
            title: "Relative velocity",
            formulas: [
              { n: "Relative velocity", t: R`\vec v_{A,B} = \vec v_{A,G} - \vec v_{B,G}`, v: "Velocity of A relative to B; G = ground frame.", s: HCV(3) },
              { n: "", t: R`\vec v_{A,G} = \vec v_{A,B} + \vec v_{B,G}`, s: HCV(3) }
            ]
          },
          {
            title: "Motion in a plane; projectile motion",
            formulas: [
              { n: "Components", t: R`u_x = u\cos\theta,\quad u_y = u\sin\theta;\qquad x = (u\cos\theta)t,\quad y = (u\sin\theta)t - \tfrac{1}{2}gt^2`, s: HCV(3) },
              { n: "Time of flight", t: R`T = \frac{2u\sin\theta}{g}`, s: HCV(3) },
              { n: "Maximum height", t: R`H = \frac{u^2\sin^2\theta}{2g}`, s: HCV(3) },
              { n: "Horizontal range", t: R`R = \frac{u^2\sin 2\theta}{g};\qquad R_{max} = \frac{u^2}{g}\ \text{at}\ \theta = 45^\circ`, c: "Same range for θ and 90° − θ. Level ground, no air resistance.", s: HCV(3) },
              { n: "Equation of trajectory", t: R`y = x\tan\theta - \frac{gx^2}{2u^2\cos^2\theta}`, c: "A parabola.", s: HCV(3) }
            ]
          },
          {
            title: "Uniform circular motion",
            formulas: [
              { n: "Angular velocity and speed", t: R`\omega = \frac{d\theta}{dt},\qquad v = r\omega`, s: HCV(7) },
              { n: "Centripetal acceleration", t: R`a = \frac{v^2}{r} = \omega^2 r`, c: "Directed towards the centre.", s: HCV(7) },
              { n: "Angular acceleration and tangential acceleration", t: R`\alpha = \frac{d\omega}{dt},\qquad a_t = \frac{dv}{dt} = r\alpha`, c: "Non-uniform circular motion: a = √(a_r² + a_t²).", s: HCV(7) },
              { n: "Time period and frequency", t: R`T = \frac{2\pi}{\omega} = \frac{2\pi r}{v},\qquad \nu = \frac{1}{T}`, s: HCV(7) }
            ]
          }
        ]
      },
      {
        unit: 3, title: "Laws of Motion", status: "covered",
        topics: [
          {
            title: "Newton's laws; momentum; impulse",
            formulas: [
              { n: "Second law", t: R`\vec F = m\vec a`, c: "Valid in an inertial frame; F = resultant external force.", s: HCV(5) },
              { n: "Linear momentum", t: R`\vec p = m\vec v,\qquad \vec F = \frac{d\vec p}{dt}`, s: HCV(5) + "; " + HCV(9) },
              { n: "Impulse", t: R`\vec J = \int \vec F\,dt = \Delta\vec p = \vec p_f - \vec p_i`, s: HCV(9) },
              { n: "Third law", t: R`\vec F_{AB} = -\vec F_{BA}`, s: HCV(5) }
            ]
          },
          {
            title: "Law of conservation of linear momentum and its applications",
            formulas: [
              { n: "Conservation of momentum", t: R`\sum\vec F_{ext} = 0 \;\Rightarrow\; \sum m_i\vec v_i = \text{constant}`, s: HCV(9) },
              { n: "Recoil", t: R`m_1\vec v_1 + m_2\vec v_2 = 0`, c: "System initially at rest.", s: HCV(9) }
            ]
          },
          {
            title: "Equilibrium of concurrent forces",
            formulas: [
              { n: "Equilibrium", t: R`\sum\vec F = 0 \iff \sum F_x = 0,\ \sum F_y = 0,\ \sum F_z = 0`, s: HCV(5) },
              { n: "Lami's theorem (three concurrent forces)", t: R`\frac{F_1}{\sin\alpha} = \frac{F_2}{\sin\beta} = \frac{F_3}{\sin\gamma}`, v: "α, β, γ = angles opposite to F₁, F₂, F₃.", s: HCV(5) }
            ]
          },
          {
            title: "Static and kinetic friction; laws of friction; rolling friction",
            formulas: [
              { n: "Kinetic friction", t: R`f_k = \mu_k N`, v: "N = normal force; μ_k = coefficient of kinetic friction.", s: HCV(6) },
              { n: "Static friction", t: R`f_s \le \mu_s N;\qquad f_{s,max} = \mu_s N`, c: "μ_s > μ_k in general; friction independent of area of contact.", s: HCV(6) },
              { n: "Angle of friction", t: R`\tan\lambda = \mu_s`, s: HCV(6) },
              { n: "Rolling friction", t: R`\text{Rolling friction} \ll \text{sliding friction}`, c: "Arises from deformation at the contact; described qualitatively in the book.", s: HCV(6) }
            ]
          },
          {
            title: "Dynamics of uniform circular motion: centripetal force; level and banked roads",
            formulas: [
              { n: "Centripetal force", t: R`F = \frac{mv^2}{r} = m\omega^2 r`, s: HCV(7) },
              { n: "Vehicle on a level road", t: R`v_{max} = \sqrt{\mu_s r g}`, c: "Friction provides the centripetal force.", s: HCV(7) },
              { n: "Banked road (no friction)", t: R`\tan\theta = \frac{v^2}{rg}`, v: "θ = banking angle; v = speed for which the road is banked.", c: "Below this speed the car tends to slip down; above it, to skid outward (friction then needed).", s: HCV(7) }
            ]
          }
        ]
      },
      {
        unit: 4, title: "Work, Energy and Power", status: "covered",
        topics: [
          {
            title: "Work done by a constant and a variable force",
            formulas: [
              { n: "Constant force", t: R`W = \vec F\cdot\vec d = Fd\cos\theta`, s: HCV(8) },
              { n: "Variable force", t: R`W = \int \vec F\cdot d\vec r = \int (F_x\,dx + F_y\,dy + F_z\,dz)`, s: HCV(8) }
            ]
          },
          {
            title: "Kinetic and potential energies; work–energy theorem",
            formulas: [
              { n: "Kinetic energy", t: R`K = \tfrac{1}{2}mv^2 = \frac{p^2}{2m}`, s: HCV(8) },
              { n: "Work–energy theorem", t: R`W_{total} = \Delta K = K_f - K_i`, c: "Work by all forces (internal + external).", s: HCV(8) },
              { n: "Potential energy", t: R`\Delta U = -W_{conservative} = -\int_{r_1}^{r_2}\vec F\cdot d\vec r;\qquad F = -\frac{dU}{dx}`, s: HCV(8) },
              { n: "Gravitational PE (near earth)", t: R`U = mgh`, s: HCV(8) }
            ]
          },
          {
            title: "Power",
            formulas: [
              { n: "Power", t: R`P = \frac{dW}{dt} = \vec F\cdot\vec v`, v: "SI unit watt (W); 1 hp = 746 W.", s: HCV(8) },
              { n: "Average power", t: R`P_{av} = \frac{W}{t}`, s: HCV(8) }
            ]
          },
          {
            title: "Potential energy of a spring",
            formulas: [
              { n: "Spring force", t: R`F = -kx`, s: HCV(8) },
              { n: "Spring PE", t: R`U = \tfrac{1}{2}kx^2`, v: "k = spring constant, x = extension/compression.", s: HCV(8) }
            ]
          },
          {
            title: "Conservation of mechanical energy; conservative and non-conservative forces",
            formulas: [
              { n: "Conservation of mechanical energy", t: R`K + U = \text{constant}`, c: "Only conservative forces do work.", s: HCV(8) },
              { n: "With non-conservative forces", t: R`W_{nc} = \Delta(K + U)`, s: HCV(8) },
              { n: "Conservative force", t: R`\oint \vec F\cdot d\vec r = 0`, c: "Work independent of path.", s: HCV(8) }
            ]
          },
          {
            title: "Motion in a vertical circle",
            formulas: [
              { n: "Speed at height h", t: R`v^2 = u^2 - 2gl(1 - \cos\theta)`, v: "u = speed at lowest point, l = radius, θ = angle from the lowest position.", s: HCV(7) },
              { n: "Completing the circle (string)", t: R`u_{bottom} \ge \sqrt{5gl},\qquad v_{top} \ge \sqrt{gl}`, s: HCV(7) },
              { n: "Tension", t: R`T = \frac{mv^2}{l} + mg\cos\theta`, s: HCV(7) },
              { n: "Oscillation without slackening", t: R`u \le \sqrt{2gl}`, c: "String does not slack when the particle rises at most to the horizontal level.", s: HCV(7) }
            ]
          },
          {
            title: "Elastic and inelastic collisions in one and two dimensions",
            formulas: [
              { n: "Coefficient of restitution", t: R`e = \frac{v_2 - v_1}{u_1 - u_2}`, c: "e = 1 elastic; 0 < e < 1 inelastic; e = 0 perfectly inelastic.", s: HCV(9) },
              { n: "1-D elastic collision", t: R`v_1 = \frac{(m_1 - m_2)u_1 + 2m_2u_2}{m_1 + m_2},\qquad v_2 = \frac{(m_2 - m_1)u_2 + 2m_1u_1}{m_1 + m_2}`, c: "Equal masses exchange velocities.", s: HCV(9) },
              { n: "Perfectly inelastic", t: R`v = \frac{m_1u_1 + m_2u_2}{m_1 + m_2}`, s: HCV(9) },
              { n: "Loss of KE (perfectly inelastic)", t: R`\Delta K = \frac{m_1 m_2}{2(m_1 + m_2)}(u_1 - u_2)^2`, s: HCV(9) },
              { n: "2-D collision", t: R`\sum m\,u_x = \sum m\,v_x,\qquad \sum m\,u_y = \sum m\,v_y`, c: "Plus KE conservation if elastic.", s: HCV(9) }
            ]
          }
        ]
      },
      {
        unit: 5, title: "Rotational Motion", status: "covered",
        topics: [
          {
            title: "Centre of mass of a two-particle system and of a rigid body",
            formulas: [
              { n: "Centre of mass", t: R`\vec r_{cm} = \frac{\sum m_i\vec r_i}{\sum m_i} = \frac{1}{M}\int \vec r\,dm`, s: HCV(9) },
              { n: "Two particles", t: R`x_{cm} = \frac{m_1x_1 + m_2x_2}{m_1 + m_2}`, s: HCV(9) },
              { n: "Motion of CM", t: R`\vec v_{cm} = \frac{\sum m_i\vec v_i}{M},\qquad M\vec a_{cm} = \vec F_{ext}`, s: HCV(9) }
            ]
          },
          {
            title: "Moment of a force, torque, angular momentum",
            formulas: [
              { n: "Torque", t: R`\vec\Gamma = \vec r \times \vec F,\qquad |\vec\Gamma| = rF\sin\theta`, s: HCV(10) },
              { n: "Angular momentum of a particle", t: R`\vec L = \vec r \times \vec p = m(\vec r \times \vec v)`, s: HCV(10) },
              { n: "Rigid body about a fixed axis", t: R`L = I\omega`, s: HCV(10) },
              { n: "Torque–angular momentum", t: R`\vec\Gamma = \frac{d\vec L}{dt}`, s: HCV(10) }
            ]
          },
          {
            title: "Conservation of angular momentum and its applications",
            formulas: [
              { n: "Conservation", t: R`\vec\Gamma_{ext} = 0 \Rightarrow \vec L = \text{constant};\qquad I_1\omega_1 = I_2\omega_2`, s: HCV(10) }
            ]
          },
          {
            title: "Moment of inertia; radius of gyration; values for simple objects",
            formulas: [
              { n: "Moment of inertia", t: R`I = \sum m_i r_i^2 = \int r^2\,dm`, s: HCV(10) },
              { n: "Radius of gyration", t: R`I = Mk^2 \Rightarrow k = \sqrt{I/M}`, s: HCV(10) },
              { n: "Uniform rod (length l)", t: R`I_{centre,\perp} = \frac{Ml^2}{12},\qquad I_{end,\perp} = \frac{Ml^2}{3}`, s: HCV(10) },
              { n: "Ring (radius R)", t: R`I_{axis} = MR^2,\qquad I_{diameter} = \frac{MR^2}{2}`, s: HCV(10) },
              { n: "Uniform disc", t: R`I_{axis} = \frac{MR^2}{2},\qquad I_{diameter} = \frac{MR^2}{4}`, s: HCV(10) },
              { n: "Hollow / solid cylinder (about axis)", t: R`I_{hollow} = MR^2,\qquad I_{solid} = \frac{MR^2}{2}`, s: HCV(10) },
              { n: "Spheres (about diameter)", t: R`I_{shell} = \frac{2}{3}MR^2,\qquad I_{solid} = \frac{2}{5}MR^2`, s: HCV(10) },
              { n: "Rectangular plate (about axis ⊥ through centre)", t: R`I = \frac{M(a^2 + b^2)}{12}`, s: HCV(10) }
            ]
          },
          {
            title: "Parallel and perpendicular axes theorems and their applications",
            formulas: [
              { n: "Parallel axes theorem", t: R`I = I_{cm} + Md^2`, v: "d = distance between the parallel axes.", s: HCV(10) },
              { n: "Perpendicular axes theorem", t: R`I_z = I_x + I_y`, c: "Only for plane (laminar) bodies; z-axis ⊥ to the plane.", s: HCV(10) }
            ]
          },
          {
            title: "Rigid body rotation and equations of rotational motion",
            formulas: [
              { n: "Rotational kinematics", t: R`\omega = \omega_0 + \alpha t,\qquad \theta = \omega_0 t + \tfrac{1}{2}\alpha t^2,\qquad \omega^2 = \omega_0^2 + 2\alpha\theta`, c: "Constant angular acceleration.", s: HCV(10) },
              { n: "Newton's law for rotation", t: R`\Gamma = I\alpha`, s: HCV(10) },
              { n: "Rotational KE", t: R`K = \tfrac{1}{2}I\omega^2`, s: HCV(10) },
              { n: "Work and power", t: R`W = \int\Gamma\,d\theta,\qquad P = \Gamma\omega`, s: HCV(10) },
              { n: "Rolling without slipping", t: R`v_{cm} = R\omega;\qquad K = \tfrac{1}{2}Mv_{cm}^2 + \tfrac{1}{2}I_{cm}\omega^2`, s: HCV(10) },
              { n: "Rolling down an incline", t: R`a = \frac{g\sin\theta}{1 + I/(MR^2)}`, s: HCV(10) }
            ]
          },
          {
            title: "Equilibrium of rigid bodies; comparison of linear and rotational motions",
            formulas: [
              { n: "Equilibrium conditions", t: R`\sum\vec F_{ext} = 0,\qquad \sum\vec\Gamma_{ext} = 0`, s: HCV(10) },
              { n: "Linear ↔ rotational", t: R`x \leftrightarrow \theta,\ \ v \leftrightarrow \omega,\ \ a \leftrightarrow \alpha,\ \ m \leftrightarrow I,\ \ F \leftrightarrow \Gamma,\ \ p \leftrightarrow L`, s: HCV(10) }
            ]
          }
        ]
      },
      {
        unit: 6, title: "Gravitation", status: "covered",
        topics: [
          {
            title: "The universal law of gravitation",
            formulas: [
              { n: "Newton's law of gravitation", t: R`F = \frac{Gm_1m_2}{r^2}`, v: "G = 6.67 × 10⁻¹¹ N m² kg⁻².", s: HCV(11) },
              { n: "Gravitational field", t: R`\vec E = \frac{\vec F}{m};\qquad E = \frac{GM}{r^2}\ (\text{point mass / outside a sphere})`, s: HCV(11) },
              { n: "Inside a uniform solid sphere", t: R`E = \frac{GM}{R^3}\,r`, s: HCV(11) }
            ]
          },
          {
            title: "Acceleration due to gravity and its variation with altitude and depth",
            formulas: [
              { n: "At the surface", t: R`g = \frac{GM}{R^2}`, s: HCV(11) },
              { n: "At height h", t: R`g' = \frac{GM}{(R + h)^2} \approx g\left(1 - \frac{2h}{R}\right)`, c: "Approximation valid for h ≪ R.", s: HCV(11) },
              { n: "At depth d", t: R`g' = g\left(1 - \frac{d}{R}\right)`, s: HCV(11) },
              { n: "Effect of earth's rotation", t: R`g' = g - \omega^2R\cos^2\lambda`, v: "λ = latitude.", s: HCV(11) }
            ]
          },
          {
            title: "Kepler's laws of planetary motion",
            formulas: [
              { n: "Law of orbits", t: R`\text{Planets move in ellipses with the sun at one focus}`, s: HCV(11) },
              { n: "Law of areas", t: R`\frac{dA}{dt} = \text{constant}`, c: "The line joining the sun and the planet sweeps equal areas in equal times (consequence of conservation of angular momentum).", s: HCV(11) },
              { n: "Law of periods", t: R`T^2 \propto a^3;\qquad T^2 = \frac{4\pi^2}{GM}a^3\ (\text{circular orbit})`, s: HCV(11) }
            ]
          },
          {
            title: "Gravitational potential energy; gravitational potential",
            formulas: [
              { n: "Potential energy of two particles", t: R`U = -\frac{Gm_1m_2}{r}`, c: "Zero at infinite separation.", s: HCV(11) },
              { n: "Gravitational potential", t: R`V = \frac{U}{m} = -\frac{GM}{r};\qquad E = -\frac{dV}{dr}`, s: HCV(11) },
              { n: "Solid sphere (inside)", t: R`V = -\frac{GM}{2R^3}(3R^2 - r^2)`, s: HCV(11) }
            ]
          },
          {
            title: "Escape velocity",
            formulas: [
              { n: "Escape velocity", t: R`v_e = \sqrt{\frac{2GM}{R}} = \sqrt{2gR}\ \approx 11.2\ \text{km s}^{-1}\ (\text{earth})`, s: HCV(11) }
            ]
          },
          {
            title: "Motion of a satellite: orbital velocity, time period and energy",
            formulas: [
              { n: "Orbital speed", t: R`v = \sqrt{\frac{GM}{a}} = \sqrt{\frac{gR^2}{R + h}}`, v: "a = R + h = orbit radius.", s: HCV(11) },
              { n: "Time period", t: R`T = \frac{2\pi a}{v} = 2\pi\sqrt{\frac{a^3}{GM}}`, s: HCV(11) },
              { n: "Energies of a satellite", t: R`K = \frac{GMm}{2a},\qquad U = -\frac{GMm}{a},\qquad E = -\frac{GMm}{2a}`, s: HCV(11) },
              { n: "Binding energy", t: R`\text{B.E.} = \frac{GMm}{2a}`, s: HCV(11) }
            ]
          }
        ]
      },
      {
        unit: 7, title: "Properties of Solids and Liquids", status: "covered",
        topics: [
          {
            title: "Elastic behaviour; stress–strain; Hooke's law; Young's, bulk and rigidity moduli",
            formulas: [
              { n: "Stress and strain", t: R`\text{Stress} = \frac{F}{A},\qquad \text{Longitudinal strain} = \frac{\Delta l}{l}`, s: HCV(14) },
              { n: "Hooke's law", t: R`\text{Stress} = E \times \text{strain}`, c: "Within the elastic limit.", s: HCV(14) },
              { n: "Young's modulus", t: R`Y = \frac{F/A}{\Delta l/l} = \frac{Fl}{A\,\Delta l}`, s: HCV(14) },
              { n: "Bulk modulus", t: R`B = -\frac{\Delta p}{\Delta V/V};\qquad \text{compressibility} = \frac{1}{B}`, s: HCV(14) },
              { n: "Modulus of rigidity (shear)", t: R`\eta = \frac{F/A}{\theta}`, v: "θ = shearing strain (angle).", s: HCV(14) },
              { n: "Poisson's ratio", t: R`\sigma = \frac{\text{lateral strain}}{\text{longitudinal strain}} = -\frac{\Delta d/d}{\Delta l/l}`, s: HCV(14) },
              { n: "Elastic potential energy", t: R`U = \tfrac{1}{2}\times\text{stress}\times\text{strain}\times\text{volume};\qquad U = \tfrac{1}{2}F\Delta l`, s: HCV(14) }
            ]
          },
          {
            title: "Pressure due to a fluid column; Pascal's law; effect of gravity on fluid pressure",
            formulas: [
              { n: "Pressure", t: R`p = \frac{F}{A}`, s: HCV(13) },
              { n: "Pressure at depth", t: R`p = p_0 + \rho g h`, c: "Liquid at rest; p₀ = pressure at the surface.", s: HCV(13) },
              { n: "Pascal's law (hydraulic press)", t: R`\frac{F_1}{A_1} = \frac{F_2}{A_2}`, c: "Pressure applied to an enclosed fluid is transmitted undiminished.", s: HCV(13) }
            ]
          },
          {
            title: "Viscosity; Stokes' law; terminal velocity",
            formulas: [
              { n: "Newton's law of viscosity", t: R`F = -\eta A\frac{dv}{dx}`, v: "η = coefficient of viscosity (SI: N s m⁻²).", s: HCV(14) },
              { n: "Stokes' law", t: R`F = 6\pi\eta r v`, s: HCV(14) },
              { n: "Terminal velocity", t: R`v_T = \frac{2r^2(\rho - \sigma)g}{9\eta}`, v: "ρ = density of sphere, σ = density of fluid.", s: HCV(14) }
            ]
          },
          {
            title: "Streamline and turbulent flow; critical velocity",
            formulas: [
              { n: "Equation of continuity", t: R`A_1v_1 = A_2v_2`, c: "Incompressible, steady flow.", s: HCV(13) },
              { n: "Reynolds number", t: R`N = \frac{\rho v D}{\eta}`, c: "Flow is steady for small N and becomes turbulent above a critical value; the corresponding v is the critical velocity.", s: HCV(14) }
            ]
          },
          {
            title: "Bernoulli's principle and its applications",
            formulas: [
              { n: "Bernoulli's equation", t: R`p + \tfrac{1}{2}\rho v^2 + \rho g h = \text{constant}`, c: "Along a streamline; steady, incompressible, non-viscous flow.", s: HCV(13) },
              { n: "Speed of efflux (Torricelli)", t: R`v = \sqrt{2gh}`, s: HCV(13) }
            ]
          },
          {
            title: "Surface energy and surface tension; angle of contact; excess pressure",
            formulas: [
              { n: "Surface tension", t: R`S = \frac{F}{l}`, s: HCV(14) },
              { n: "Surface energy", t: R`W = S\,\Delta A`, c: "Work done to increase surface area.", s: HCV(14) },
              { n: "Excess pressure — drop", t: R`p_{in} - p_{out} = \frac{2S}{R}`, s: HCV(14) },
              { n: "Excess pressure — soap bubble", t: R`p_{in} - p_{out} = \frac{4S}{R}`, c: "Two surfaces.", s: HCV(14) }
            ]
          },
          {
            title: "Applications of surface tension: drops, bubbles and capillary rise",
            formulas: [
              { n: "Capillary rise", t: R`h = \frac{2S\cos\theta}{r\rho g}`, v: "θ = angle of contact, r = radius of tube.", s: HCV(14) }
            ]
          },
          {
            title: "Heat, temperature, thermal expansion",
            formulas: [
              { n: "Temperature scales", t: R`\frac{t_C}{100} = \frac{t_F - 32}{180};\qquad T(\text{K}) = t_C + 273.15`, s: HCV(23) },
              { n: "Linear expansion", t: R`L_\theta = L_0(1 + \alpha\theta)`, s: HCV(23) },
              { n: "Area and volume expansion", t: R`A_\theta = A_0(1 + \beta\theta),\qquad V_\theta = V_0(1 + \gamma\theta);\qquad \beta = 2\alpha,\ \gamma = 3\alpha`, s: HCV(23) }
            ]
          },
          {
            title: "Specific heat capacity; calorimetry; change of state; latent heat",
            formulas: [
              { n: "Specific heat capacity", t: R`Q = ms\,\Delta\theta`, v: "s = specific heat capacity.", s: HCV(25) },
              { n: "Molar heat capacity and heat capacity", t: R`C = \frac{Q}{n\,\Delta T};\qquad \text{Heat capacity} = ms`, s: HCV(25) },
              { n: "Principle of calorimetry", t: R`\text{Heat lost} = \text{Heat gained}`, c: "Isolated system (method of mixtures).", s: HCV(25) },
              { n: "Latent heat", t: R`Q = mL`, s: HCV(25) },
              { n: "Mechanical equivalent of heat", t: R`W = JQ,\qquad J = 4.186\ \text{J cal}^{-1}`, s: HCV(25) }
            ]
          },
          {
            title: "Heat transfer: conduction, convection and radiation",
            formulas: [
              { n: "Conduction", t: R`\frac{\Delta Q}{\Delta t} = KA\frac{T_1 - T_2}{x}`, v: "K = thermal conductivity.", s: HCV(28) },
              { n: "Thermal resistance", t: R`R = \frac{x}{KA};\qquad \text{series: } R = R_1 + R_2;\quad \text{parallel: } \frac{1}{R} = \frac{1}{R_1} + \frac{1}{R_2}`, s: HCV(28) },
              { n: "Stefan–Boltzmann law", t: R`u = e\sigma T^4;\qquad \text{net: } e\sigma A(T^4 - T_0^4)`, v: "σ = 5.67 × 10⁻⁸ W m⁻² K⁻⁴; e = emissivity.", s: HCV(28) },
              { n: "Wien's displacement law", t: R`\lambda_m T = b,\quad b = 0.288\ \text{cm K}`, s: HCV(28) },
              { n: "Kirchhoff's law (radiation)", t: R`\frac{E}{a} = \text{constant (= } E_{black body})`, s: HCV(28) },
              { n: "Newton's law of cooling", t: R`\frac{dT}{dt} = -k(T - T_0)`, c: "Small temperature difference.", s: HCV(28) }
            ]
          }
        ]
      },
      {
        unit: 8, title: "Thermodynamics", status: "covered",
        topics: [
          {
            title: "Thermal equilibrium; zeroth law; heat, work and internal energy",
            formulas: [
              { n: "Zeroth law", t: R`A \sim C,\ B \sim C \Rightarrow A \sim B`, c: "Thermal equilibrium is transitive; basis of temperature.", s: HCV(26) },
              { n: "Work done by a gas", t: R`W = \int_{V_1}^{V_2} p\,dV`, c: "Area under the p–V curve.", s: HCV(26) }
            ]
          },
          {
            title: "First law of thermodynamics",
            formulas: [
              { n: "First law", t: R`\Delta Q = \Delta U + \Delta W`, c: "ΔQ = heat given to the system; ΔW = work done by the system.", s: HCV(26) },
              { n: "Internal energy change (ideal gas)", t: R`\Delta U = nC_V\Delta T`, s: HCV(27) },
              { n: "Molar heat capacities", t: R`C_p - C_V = R,\qquad \gamma = \frac{C_p}{C_V}`, s: HCV(27) },
              { n: "Isochoric / isobaric", t: R`\Delta W = 0\ (\text{isochoric});\qquad \Delta W = p\Delta V,\ \Delta Q = nC_p\Delta T\ (\text{isobaric})`, s: HCV(26) + "; " + HCV(27) }
            ]
          },
          {
            title: "Isothermal and adiabatic processes",
            formulas: [
              { n: "Isothermal work", t: R`W = nRT\ln\frac{V_2}{V_1} = nRT\ln\frac{p_1}{p_2}`, c: "ΔU = 0, so ΔQ = W.", s: HCV(26) + "; " + HCV(27) },
              { n: "Adiabatic relations", t: R`pV^\gamma = \text{const},\quad TV^{\gamma-1} = \text{const},\quad T^\gamma p^{1-\gamma} = \text{const}`, s: HCV(27) },
              { n: "Adiabatic work", t: R`W = \frac{p_1V_1 - p_2V_2}{\gamma - 1} = \frac{nR(T_1 - T_2)}{\gamma - 1}`, s: HCV(27) },
              { n: "Slopes of p–V curves", t: R`\left(\frac{dp}{dV}\right)_{adiabatic} = \gamma\left(\frac{dp}{dV}\right)_{isothermal}`, s: HCV(27) }
            ]
          },
          {
            title: "Second law of thermodynamics: reversible and irreversible processes",
            formulas: [
              { n: "Heat engine efficiency", t: R`\eta = \frac{W}{Q_1} = 1 - \frac{Q_2}{Q_1}`, s: HCV(26) },
              { n: "Carnot engine", t: R`\eta = 1 - \frac{T_2}{T_1};\qquad \frac{Q_2}{Q_1} = \frac{T_2}{T_1}`, c: "Reversible engine between T₁ (source) and T₂ (sink).", s: HCV(26) },
              { n: "Refrigerator (heat pump)", t: R`Q_1 = Q_2 + W`, v: "Q₂ = heat taken from the cold body, W = work done on it, Q₁ = heat given to the hot body.", s: HCV(26) },
              { n: "Entropy", t: R`\Delta S = \int\frac{dQ}{T}`, c: "Reversible path.", s: HCV(26) }
            ]
          }
        ]
      },
      {
        unit: 9, title: "Kinetic Theory of Gases", status: "covered",
        topics: [
          {
            title: "Equation of state of a perfect gas",
            formulas: [
              { n: "Ideal gas equation", t: R`pV = nRT = NkT`, v: "R = 8.314 J K⁻¹ mol⁻¹, k = R/N_A = 1.38 × 10⁻²³ J K⁻¹.", s: HCV(24) },
              { n: "Gas laws", t: R`\text{Boyle: } pV = \text{const (T const)};\quad \text{Charles: } V/T = \text{const (p const)}`, s: HCV(24) }
            ]
          },
          {
            title: "Work done on compressing a gas",
            formulas: [
              { n: "Work on the gas", t: R`W_{on} = -\int p\,dV`, s: HCV(26) }
            ]
          },
          {
            title: "Concept of pressure; kinetic interpretation of temperature; RMS speed",
            formulas: [
              { n: "Pressure from kinetic theory", t: R`p = \frac{1}{3}\rho\,\overline{v^2} = \frac{1}{3}\frac{M}{V}v_{rms}^2`, s: HCV(24) },
              { n: "RMS speed", t: R`v_{rms} = \sqrt{\frac{3RT}{M_0}} = \sqrt{\frac{3kT}{m}} = \sqrt{\frac{3p}{\rho}}`, v: "M₀ = molar mass, m = mass of a molecule.", s: HCV(24) },
              { n: "Average and most probable speed", t: R`\bar v = \sqrt{\frac{8RT}{\pi M_0}},\qquad v_p = \sqrt{\frac{2RT}{M_0}}`, s: HCV(24) },
              { n: "Kinetic energy per molecule", t: R`\tfrac{1}{2}m v_{rms}^2 = \tfrac{3}{2}kT`, s: HCV(24) },
              { n: "Kinetic energy per mole", t: R`E = \tfrac{3}{2}RT`, s: HCV(24) }
            ]
          },
          {
            title: "Degrees of freedom; law of equipartition; specific heats of gases",
            formulas: [
              { n: "Equipartition of energy", t: R`\text{Energy per degree of freedom} = \tfrac{1}{2}kT`, s: HCV(27) },
              { n: "Molar heat capacities", t: R`U = \frac{f}{2}nRT;\qquad C_V = \frac{f}{2}R,\quad C_p = \left(\frac{f}{2} + 1\right)R,\quad \gamma = 1 + \frac{2}{f}`, s: HCV(27) },
              { n: "Monatomic / diatomic", t: R`\text{Monatomic: } f = 3,\ \gamma = \tfrac{5}{3};\qquad \text{Diatomic (rigid): } f = 5,\ \gamma = \tfrac{7}{5}`, s: HCV(27) }
            ]
          },
          {
            title: "Mean free path; Avogadro's number",
            formulas: [
              { n: "Mean free path", t: R`\lambda = \frac{1}{\sqrt 2\,\pi d^2 n}`, v: "d = molecular diameter, n = number of molecules per unit volume.", s: HCV(24) },
              { n: "Avogadro's number", t: R`N_A = 6.02\times10^{23}\ \text{mol}^{-1};\qquad N = nN_A`, s: HCV(24) }
            ]
          }
        ]
      },
      {
        unit: 10, title: "Oscillations and Waves", status: "covered",
        topics: [
          {
            title: "Periodic motion; time period, frequency; displacement as a function of time",
            formulas: [
              { n: "Period and frequency", t: R`T = \frac{2\pi}{\omega},\qquad \nu = \frac{1}{T}`, s: HCV(12) },
              { n: "SHM displacement", t: R`x = A\sin(\omega t + \varphi)`, v: "A = amplitude, φ = initial phase, ωt + φ = phase.", s: HCV(12) }
            ]
          },
          {
            title: "Simple harmonic motion and its equation; phase",
            formulas: [
              { n: "Defining equation", t: R`F = -kx;\qquad \frac{d^2x}{dt^2} = -\omega^2x,\quad \omega = \sqrt{\frac{k}{m}}`, s: HCV(12) },
              { n: "Velocity and acceleration", t: R`v = A\omega\cos(\omega t + \varphi) = \omega\sqrt{A^2 - x^2},\qquad a = -\omega^2x`, s: HCV(12) }
            ]
          },
          {
            title: "Oscillations of a spring: restoring force and force constant",
            formulas: [
              { n: "Spring–mass system", t: R`T = 2\pi\sqrt{\frac{m}{k}}`, s: HCV(12) },
              { n: "Springs in series / parallel", t: R`\frac{1}{k_s} = \frac{1}{k_1} + \frac{1}{k_2};\qquad k_p = k_1 + k_2`, s: HCV(12) }
            ]
          },
          {
            title: "Energy in SHM: kinetic and potential energies",
            formulas: [
              { n: "Energies", t: R`K = \tfrac{1}{2}m\omega^2(A^2 - x^2),\qquad U = \tfrac{1}{2}m\omega^2x^2,\qquad E = \tfrac{1}{2}m\omega^2A^2 = \tfrac{1}{2}kA^2`, s: HCV(12) }
            ]
          },
          {
            title: "Simple pendulum: expression for its time period",
            formulas: [
              { n: "Simple pendulum", t: R`T = 2\pi\sqrt{\frac{l}{g}}`, c: "Small amplitude.", s: HCV(12) },
              { n: "Physical (compound) pendulum", t: R`T = 2\pi\sqrt{\frac{I}{mgl}}`, v: "l = distance of the CM from the suspension point.", s: HCV(12) },
              { n: "Torsional pendulum", t: R`T = 2\pi\sqrt{\frac{I}{k}}`, s: HCV(12) }
            ]
          },
          {
            title: "Wave motion; longitudinal and transverse waves; speed of a travelling wave",
            formulas: [
              { n: "Wave speed", t: R`v = \nu\lambda = \frac{\omega}{k}`, v: "k = 2π/λ (wave number).", s: HCV(15) },
              { n: "Transverse wave on a string", t: R`v = \sqrt{\frac{F}{\mu}}`, v: "F = tension, μ = linear mass density.", s: HCV(15) },
              { n: "Longitudinal (sound) wave", t: R`v = \sqrt{\frac{B}{\rho}};\quad \text{solid rod: } v = \sqrt{\frac{Y}{\rho}}`, s: HCV(16) },
              { n: "Sound in a gas (Laplace)", t: R`v = \sqrt{\frac{\gamma p}{\rho}} = \sqrt{\frac{\gamma RT}{M}}`, s: HCV(16) }
            ]
          },
          {
            title: "Displacement relation for a progressive wave",
            formulas: [
              { n: "Progressive wave", t: R`y = A\sin[\omega(t - x/v)] = A\sin(\omega t - kx)`, c: "Travelling along +x.", s: HCV(15) },
              { n: "Power transmitted on a string", t: R`P = 2\pi^2\mu v A^2\nu^2`, s: HCV(15) }
            ]
          },
          {
            title: "Principle of superposition; reflection of waves",
            formulas: [
              { n: "Superposition", t: R`y = y_1 + y_2`, s: HCV(15) },
              { n: "Interference (same ω, k)", t: R`A = \sqrt{A_1^2 + A_2^2 + 2A_1A_2\cos\delta}`, c: "Constructive: δ = 2nπ; destructive: δ = (2n+1)π.", s: HCV(15) },
              { n: "Reflection", t: R`\text{Fixed end: phase change } \pi;\quad \text{free end: no phase change}`, s: HCV(15) }
            ]
          },
          {
            title: "Standing waves in strings and organ pipes; fundamental mode and harmonics",
            formulas: [
              { n: "Standing wave", t: R`y = 2A\sin kx\cos\omega t`, c: "Node-to-node distance = λ/2.", s: HCV(15) },
              { n: "String fixed at both ends", t: R`\nu_n = \frac{n}{2L}\sqrt{\frac{F}{\mu}},\quad n = 1, 2, 3, \dots`, s: HCV(15) },
              { n: "Open organ pipe", t: R`\nu_n = \frac{nv}{2l},\quad n = 1, 2, 3, \dots`, c: "All harmonics.", s: HCV(16) },
              { n: "Closed organ pipe", t: R`\nu_n = \frac{(2n - 1)v}{4l},\quad n = 1, 2, 3, \dots`, c: "Only odd harmonics.", s: HCV(16) },
              { n: "End correction (resonance tube)", t: R`l_1 + d = \frac{\lambda}{4},\qquad l_2 + d = \frac{3\lambda}{4}`, v: "d = end correction; the node forms slightly above the open end.", s: HCV(16) }
            ]
          },
          {
            title: "Beats",
            formulas: [
              { n: "Beat frequency", t: R`\nu_{beat} = |\nu_1 - \nu_2|`, s: HCV(16) }
            ]
          }
        ]
      },
      {
        unit: 11, title: "Electrostatics", status: "covered",
        topics: [
          {
            title: "Electric charges: conservation; Coulomb's law; superposition; continuous distribution",
            formulas: [
              { n: "Coulomb's law", t: R`F = \frac{1}{4\pi\varepsilon_0}\frac{q_1q_2}{r^2}`, v: "1/(4πε₀) = 9 × 10⁹ N m² C⁻²; ε₀ = 8.85 × 10⁻¹² C² N⁻¹ m⁻².", s: HCV(29) },
              { n: "Quantisation of charge", t: R`q = ne,\quad e = 1.6\times10^{-19}\ \text{C}`, s: HCV(29) },
              { n: "Superposition", t: R`\vec F = \vec F_1 + \vec F_2 + \cdots`, s: HCV(29) },
              { n: "Continuous distribution", t: R`dq = \lambda\,dl = \sigma\,dA = \rho\,dV;\qquad \vec E = \int\frac{dq}{4\pi\varepsilon_0r^2}\hat r`, s: HCV(29) }
            ]
          },
          {
            title: "Electric field: point charge, field lines, dipole and its field; torque on a dipole",
            formulas: [
              { n: "Electric field", t: R`\vec E = \frac{\vec F}{q};\qquad E = \frac{1}{4\pi\varepsilon_0}\frac{Q}{r^2}`, s: HCV(29) },
              { n: "Dipole moment", t: R`\vec p = q\,\vec d\ \ (\text{from } -q \text{ to } +q)`, s: HCV(29) },
              { n: "Field of a dipole", t: R`E_{axis} = \frac{1}{4\pi\varepsilon_0}\frac{2p}{r^3},\qquad E_{equatorial} = \frac{1}{4\pi\varepsilon_0}\frac{p}{r^3}`, c: "r ≫ d.", s: HCV(29) },
              { n: "General point", t: R`E = \frac{1}{4\pi\varepsilon_0}\frac{p}{r^3}\sqrt{3\cos^2\theta + 1}`, s: HCV(29) },
              { n: "Torque on a dipole", t: R`\vec\Gamma = \vec p\times\vec E,\qquad \Gamma = pE\sin\theta`, s: HCV(29) },
              { n: "Field of a ring on its axis", t: R`E = \frac{Qx}{4\pi\varepsilon_0(a^2 + x^2)^{3/2}}`, s: HCV(29) }
            ]
          },
          {
            title: "Electric flux; Gauss's law and its applications",
            formulas: [
              { n: "Electric flux", t: R`\Phi = \oint\vec E\cdot d\vec S`, s: HCV(30) },
              { n: "Gauss's law", t: R`\oint\vec E\cdot d\vec S = \frac{q_{in}}{\varepsilon_0}`, s: HCV(30) },
              { n: "Infinitely long line charge", t: R`E = \frac{\lambda}{2\pi\varepsilon_0 r}`, s: HCV(30) },
              { n: "Infinite plane sheet", t: R`E = \frac{\sigma}{2\varepsilon_0}`, s: HCV(30) },
              { n: "Thin spherical shell", t: R`E = \frac{1}{4\pi\varepsilon_0}\frac{Q}{r^2}\ (r > R);\qquad E = 0\ (r < R)`, s: HCV(30) },
              { n: "Near a conductor's surface", t: R`E = \frac{\sigma}{\varepsilon_0}`, s: HCV(30) }
            ]
          },
          {
            title: "Electric potential: point charge, dipole, system of charges; potential difference; equipotential surfaces",
            formulas: [
              { n: "Potential difference", t: R`V_B - V_A = -\int_A^B\vec E\cdot d\vec r = \frac{W_{A\to B}}{q}`, s: HCV(29) },
              { n: "Point charge", t: R`V = \frac{1}{4\pi\varepsilon_0}\frac{Q}{r}`, s: HCV(29) },
              { n: "Dipole", t: R`V = \frac{1}{4\pi\varepsilon_0}\frac{p\cos\theta}{r^2}`, s: HCV(29) },
              { n: "System of charges", t: R`V = \frac{1}{4\pi\varepsilon_0}\sum\frac{q_i}{r_i}`, s: HCV(29) },
              { n: "Field from potential", t: R`E_x = -\frac{\partial V}{\partial x},\ \ E_y = -\frac{\partial V}{\partial y},\ \ E_z = -\frac{\partial V}{\partial z}`, c: "E is perpendicular to equipotential surfaces.", s: HCV(29) },
              { n: "Charged spherical shell", t: R`V = \frac{Q}{4\pi\varepsilon_0 r}\ (r \ge R),\qquad V = \frac{Q}{4\pi\varepsilon_0 R}\ (r < R)`, s: HCV(29) }
            ]
          },
          {
            title: "Electrical potential energy of two point charges and of a dipole in a field",
            formulas: [
              { n: "Two point charges", t: R`U = \frac{1}{4\pi\varepsilon_0}\frac{q_1q_2}{r}`, s: HCV(29) },
              { n: "Dipole in a uniform field", t: R`U = -\vec p\cdot\vec E = -pE\cos\theta`, s: HCV(29) }
            ]
          },
          {
            title: "Conductors and insulators; dielectrics and electric polarization",
            formulas: [
              { n: "Dielectric constant", t: R`K = \frac{\varepsilon}{\varepsilon_0} = \frac{E_0}{E}`, s: HCV(31) },
              { n: "Induced charge", t: R`Q_{ind} = Q\left(1 - \frac{1}{K}\right)`, s: HCV(31) }
            ]
          },
          {
            title: "Capacitors and capacitance; series and parallel; parallel plate with and without dielectric; energy",
            formulas: [
              { n: "Capacitance", t: R`C = \frac{Q}{V}`, s: HCV(31) },
              { n: "Parallel plate capacitor", t: R`C = \frac{\varepsilon_0A}{d};\qquad C = \frac{K\varepsilon_0A}{d}\ (\text{filled with dielectric})`, s: HCV(31) },
              { n: "Partially filled (slab of thickness t)", t: R`C = \frac{\varepsilon_0A}{d - t + t/K}`, s: HCV(31) },
              { n: "Series", t: R`\frac{1}{C} = \frac{1}{C_1} + \frac{1}{C_2} + \cdots`, s: HCV(31) },
              { n: "Parallel", t: R`C = C_1 + C_2 + \cdots`, s: HCV(31) },
              { n: "Energy stored", t: R`U = \frac{Q^2}{2C} = \tfrac{1}{2}CV^2 = \tfrac{1}{2}QV`, s: HCV(31) },
              { n: "Energy density", t: R`u = \tfrac{1}{2}\varepsilon_0E^2`, s: HCV(31) }
            ]
          }
        ]
      },
      {
        unit: 12, title: "Current Electricity", status: "covered",
        topics: [
          {
            title: "Electric current; drift velocity; mobility and their relation with current",
            formulas: [
              { n: "Current", t: R`i = \frac{dQ}{dt}`, s: HCV(32) },
              { n: "Current density", t: R`j = \frac{i}{A}`, s: HCV(32) },
              { n: "Drift velocity", t: R`i = nAev_d;\qquad v_d = \frac{eE\tau}{2m}\ \ \text{(HCV model)}`, v: "n = free electron density, τ = time between collisions.", s: HCV(32) },
              { n: "Mobility", t: R`\mu = \frac{v_d}{E};\qquad \sigma = ne\mu`, s: HCV(45) }
            ]
          },
          {
            title: "Ohm's law; resistance; I–V characteristics; resistivity and conductivity",
            formulas: [
              { n: "Ohm's law", t: R`V = iR`, c: "Ohmic conductors at constant temperature.", s: HCV(32) },
              { n: "Resistance", t: R`R = \rho\frac{l}{A}`, s: HCV(32) },
              { n: "Microscopic form", t: R`\vec j = \sigma\vec E,\qquad \sigma = \frac{1}{\rho}`, s: HCV(32) }
            ]
          },
          {
            title: "Electrical energy and power",
            formulas: [
              { n: "Power", t: R`P = Vi = i^2R = \frac{V^2}{R}`, s: HCV(32) },
              { n: "Joule heating", t: R`H = i^2Rt`, s: HCV(33) }
            ]
          },
          {
            title: "Series and parallel combinations of resistors",
            formulas: [
              { n: "Series", t: R`R = R_1 + R_2 + \cdots`, s: HCV(32) },
              { n: "Parallel", t: R`\frac{1}{R} = \frac{1}{R_1} + \frac{1}{R_2} + \cdots`, s: HCV(32) }
            ]
          },
          {
            title: "Temperature dependence of resistance",
            formulas: [
              { n: "Temperature coefficient", t: R`R_\theta = R_0(1 + \alpha\theta)`, s: HCV(32) }
            ]
          },
          {
            title: "Internal resistance; potential difference and emf; cells in series and parallel",
            formulas: [
              { n: "Terminal voltage", t: R`V = \mathcal{E} - ir\ (\text{discharging});\qquad V = \mathcal{E} + ir\ (\text{charging})`, s: HCV(32) },
              { n: "Current in a circuit", t: R`i = \frac{\mathcal{E}}{R + r}`, s: HCV(32) },
              { n: "Cells in series", t: R`\mathcal{E}_{eq} = \sum\mathcal{E}_i,\qquad r_{eq} = \sum r_i`, s: HCV(32) },
              { n: "Cells in parallel", t: R`\frac{\mathcal{E}_{eq}}{r_{eq}} = \sum\frac{\mathcal{E}_i}{r_i},\qquad \frac{1}{r_{eq}} = \sum\frac{1}{r_i}`, s: HCV(32) }
            ]
          },
          {
            title: "Kirchhoff's laws and their applications",
            formulas: [
              { n: "Junction law", t: R`\sum i_{in} = \sum i_{out}`, c: "Conservation of charge.", s: HCV(32) },
              { n: "Loop law", t: R`\sum\Delta V = 0\ \ \text{around any closed loop}`, c: "Conservation of energy.", s: HCV(32) }
            ]
          },
          {
            title: "Wheatstone bridge; metre bridge",
            formulas: [
              { n: "Balanced Wheatstone bridge", t: R`\frac{P}{Q} = \frac{R}{S}`, c: "No current through the galvanometer.", s: HCV(32) },
              { n: "Metre (slide-wire) bridge", t: R`\frac{R}{S} = \frac{l}{100 - l}`, v: "l = balancing length (cm) from the end next to R.", s: HCV(32) }
            ]
          }
        ]
      },
      {
        unit: 13, title: "Magnetic Effects of Current and Magnetism", status: "covered",
        topics: [
          {
            title: "Biot–Savart law; field of a circular loop",
            formulas: [
              { n: "Biot–Savart law", t: R`d\vec B = \frac{\mu_0}{4\pi}\frac{i\,d\vec l\times\vec r}{r^3}`, v: "μ₀ = 4π × 10⁻⁷ T m A⁻¹.", s: HCV(35) },
              { n: "Centre of a circular loop", t: R`B = \frac{\mu_0 i}{2a}\ (\times N \text{ turns})`, s: HCV(35) },
              { n: "Axis of a circular loop", t: R`B = \frac{\mu_0 i a^2}{2(a^2 + x^2)^{3/2}}`, s: HCV(35) },
              { n: "Straight wire (finite)", t: R`B = \frac{\mu_0 i}{4\pi d}(\sin\theta_1 + \sin\theta_2)`, s: HCV(35) }
            ]
          },
          {
            title: "Ampere's law: long straight wire and solenoid",
            formulas: [
              { n: "Ampere's law", t: R`\oint\vec B\cdot d\vec l = \mu_0 i_{in}`, s: HCV(35) },
              { n: "Long straight wire", t: R`B = \frac{\mu_0 i}{2\pi d}`, s: HCV(35) },
              { n: "Long solenoid", t: R`B = \mu_0 n i`, v: "n = turns per unit length.", s: HCV(35) }
            ]
          },
          {
            title: "Force on a moving charge in uniform magnetic and electric fields",
            formulas: [
              { n: "Lorentz force", t: R`\vec F = q(\vec E + \vec v\times\vec B)`, s: HCV(34) },
              { n: "Circular motion in B", t: R`r = \frac{mv}{qB},\qquad T = \frac{2\pi m}{qB},\qquad \nu = \frac{qB}{2\pi m}`, c: "v ⊥ B. Helical path if v has a component along B.", s: HCV(34) }
            ]
          },
          {
            title: "Force on a current-carrying conductor; force between parallel currents — definition of ampere",
            formulas: [
              { n: "Force on a conductor", t: R`\vec F = i\,\vec l\times\vec B`, s: HCV(34) },
              { n: "Parallel currents (per unit length)", t: R`\frac{F}{l} = \frac{\mu_0 i_1 i_2}{2\pi d}`, c: "Attractive for parallel currents. 1 A: 2 × 10⁻⁷ N/m at 1 m separation.", s: HCV(35) }
            ]
          },
          {
            title: "Torque on a current loop; moving coil galvanometer — sensitivity, conversion to ammeter and voltmeter",
            formulas: [
              { n: "Magnetic moment of a loop", t: R`\vec\mu = NiA\,\hat n`, s: HCV(34) },
              { n: "Torque on a loop", t: R`\vec\Gamma = \vec\mu\times\vec B`, s: HCV(34) },
              { n: "Moving coil galvanometer", t: R`NiAB = k\theta \;\Rightarrow\; i = \frac{k}{NAB}\,\theta`, v: "k = torsional constant.", s: HCV(34) },
              { n: "Current sensitivity", t: R`\frac{\theta}{i} = \frac{NAB}{k}`, s: HCV(34) },
              { n: "Ammeter (shunt)", t: R`S = \frac{i_g G}{i - i_g}`, s: HCV(32) },
              { n: "Voltmeter (series resistance)", t: R`R = \frac{V}{i_g} - G`, s: HCV(32) }
            ]
          },
          {
            title: "Current loop as a magnetic dipole; bar magnet as an equivalent solenoid; field of a magnetic dipole",
            formulas: [
              { n: "Field on axis of a dipole", t: R`B = \frac{\mu_0}{4\pi}\frac{2M}{d^3}`, s: HCV(36) },
              { n: "Field on equatorial line", t: R`B = \frac{\mu_0}{4\pi}\frac{M}{d^3}`, s: HCV(36) },
              { n: "Bar magnet moment", t: R`M = m\,(2l)`, v: "m = pole strength, 2l = magnetic length.", s: HCV(36) }
            ]
          },
          {
            title: "Torque on a magnetic dipole in a uniform field",
            formulas: [
              { n: "Torque", t: R`\vec\Gamma = \vec M\times\vec B`, s: HCV(36) },
              { n: "Potential energy", t: R`U = -\vec M\cdot\vec B`, s: HCV(36) },
              { n: "Oscillation in a field", t: R`T = 2\pi\sqrt{\frac{I}{MB}}`, s: HCV(36) }
            ]
          },
          {
            title: "Para-, dia- and ferromagnetic substances; effect of temperature",
            formulas: [
              { n: "Magnetisation and susceptibility", t: R`\vec I = \frac{\vec M}{V},\qquad \vec I = \chi\vec H`, s: HCV(37) },
              { n: "Field relations", t: R`\vec B = \mu_0(\vec H + \vec I) = \mu\vec H,\qquad \mu_r = 1 + \chi`, s: HCV(37) },
              { n: "Curie's law (paramagnetic)", t: R`\chi = \frac{c}{T}`, s: HCV(37) },
              { n: "Classification", t: R`\text{Dia: } \chi < 0\ (\text{small});\quad \text{Para: } \chi > 0\ (\text{small});\quad \text{Ferro: } \chi \gg 1`, c: "Ferromagnets become paramagnetic above the Curie temperature.", s: HCV(37) }
            ]
          }
        ]
      },
      {
        unit: 14, title: "Electromagnetic Induction and Alternating Currents", status: "covered",
        topics: [
          {
            title: "Faraday's law; induced emf and current; Lenz's law; eddy currents",
            formulas: [
              { n: "Magnetic flux", t: R`\Phi = \int\vec B\cdot d\vec S = BA\cos\theta`, s: HCV(38) },
              { n: "Faraday's law", t: R`\mathcal{E} = -\frac{d\Phi}{dt}\ \ (\times N)`, c: "Minus sign: Lenz's law — the induced current opposes the change.", s: HCV(38) },
              { n: "Motional emf", t: R`\mathcal{E} = vBl`, s: HCV(38) },
              { n: "Rotating rod", t: R`\mathcal{E} = \tfrac{1}{2}B\omega l^2`, s: HCV(38) }
            ]
          },
          {
            title: "Self and mutual inductance",
            formulas: [
              { n: "Self inductance", t: R`\Phi = Li,\qquad \mathcal{E} = -L\frac{di}{dt}`, s: HCV(38) },
              { n: "Long solenoid", t: R`L = \mu_0n^2Al`, s: HCV(38) },
              { n: "Energy stored", t: R`U = \tfrac{1}{2}Li^2;\qquad u = \frac{B^2}{2\mu_0}`, s: HCV(38) },
              { n: "Mutual inductance", t: R`\Phi_2 = Mi_1,\qquad \mathcal{E}_2 = -M\frac{di_1}{dt}`, s: HCV(38) }
            ]
          },
          {
            title: "Alternating current: peak and RMS values",
            formulas: [
              { n: "AC emf", t: R`\mathcal{E} = \mathcal{E}_0\sin\omega t`, s: HCV(39) },
              { n: "RMS value", t: R`i_{rms} = \frac{i_0}{\sqrt 2},\qquad \mathcal{E}_{rms} = \frac{\mathcal{E}_0}{\sqrt 2}`, s: HCV(39) },
              { n: "Average over half cycle", t: R`\bar i = \frac{2i_0}{\pi}`, s: HCV(39) }
            ]
          },
          {
            title: "Reactance and impedance; LCR series circuit; resonance",
            formulas: [
              { n: "Reactances", t: R`X_L = \omega L,\qquad X_C = \frac{1}{\omega C}`, s: HCV(39) },
              { n: "Impedance (series LCR)", t: R`Z = \sqrt{R^2 + (X_L - X_C)^2},\qquad i_0 = \frac{\mathcal{E}_0}{Z}`, s: HCV(39) },
              { n: "Phase difference", t: R`\tan\varphi = \frac{X_L - X_C}{R}`, s: HCV(39) },
              { n: "Resonance", t: R`\omega_0 = \frac{1}{\sqrt{LC}},\qquad \nu_0 = \frac{1}{2\pi\sqrt{LC}};\qquad Z = R`, s: HCV(39) }
            ]
          },
          {
            title: "Power in AC circuits; wattless current",
            formulas: [
              { n: "Average power", t: R`\bar P = \mathcal{E}_{rms}\,i_{rms}\cos\varphi`, v: "cos φ = power factor = R/Z.", s: HCV(39) },
              { n: "Zero-power (wattless) case", t: R`\varphi = 90^\circ\ (\text{pure } L \text{ or pure } C) \;\Rightarrow\; \bar P = 0`, c: "The book does not use the term 'wattless current'; this follows from P̄ = E_rms i_rms cos φ.", s: HCV(39) }
            ]
          },
          {
            title: "AC generator and transformer",
            formulas: [
              { n: "AC generator", t: R`\mathcal{E} = NBA\omega\sin\omega t`, s: HCV(38) },
              { n: "Transformer", t: R`\frac{\mathcal{E}_2}{\mathcal{E}_1} = \frac{N_2}{N_1} = \frac{i_1}{i_2}`, c: "Ideal transformer (no losses).", s: HCV(39) }
            ]
          }
        ]
      },
      {
        unit: 15, title: "Electromagnetic Waves", status: "covered",
        topics: [
          {
            title: "Displacement current",
            formulas: [
              { n: "Displacement current", t: R`i_d = \varepsilon_0\frac{d\Phi_E}{dt}`, s: HCV(40) },
              { n: "Ampere–Maxwell law", t: R`\oint\vec B\cdot d\vec l = \mu_0(i + i_d)`, s: HCV(40) }
            ]
          },
          {
            title: "Electromagnetic waves and their characteristics; transverse nature",
            formulas: [
              { n: "Speed of EM waves", t: R`c = \frac{1}{\sqrt{\mu_0\varepsilon_0}}`, s: HCV(40) },
              { n: "Field relation", t: R`E_0 = cB_0;\qquad \vec E\perp\vec B\perp\text{direction of propagation}`, s: HCV(40) },
              { n: "Energy density", t: R`u = \tfrac{1}{2}\varepsilon_0E_0^2\ (\text{average});\qquad I = \tfrac{1}{2}\varepsilon_0E_0^2c`, s: HCV(40) }
            ]
          },
          {
            title: "Electromagnetic spectrum and applications",
            formulas: [
              { n: "Spectrum (increasing ν)", t: R`\text{Radio} < \text{Micro} < \text{IR} < \text{Visible} < \text{UV} < \text{X-rays} < \gamma\text{-rays}`, c: "All travel at c in vacuum; c = νλ.", s: HCV(40) }
            ]
          }
        ]
      },
      {
        unit: 16, title: "Optics", status: "partial",
        note: "Reflecting telescopes are not described in the provided books; refracting telescopes are.",
        topics: [
          {
            title: "Reflection of light; spherical mirrors; mirror formula",
            formulas: [
              { n: "Mirror formula", t: R`\frac{1}{u} + \frac{1}{v} = \frac{1}{f},\qquad f = \frac{R}{2}`, c: "Cartesian sign convention.", s: HCV(18) },
              { n: "Magnification (mirror)", t: R`m = -\frac{v}{u}`, s: HCV(18) }
            ]
          },
          {
            title: "Refraction at plane and spherical surfaces",
            formulas: [
              { n: "Snell's law", t: R`\mu_1\sin i = \mu_2\sin r`, s: HCV(18) },
              { n: "Apparent depth", t: R`\text{Apparent depth} = \frac{\text{real depth}}{\mu};\qquad \text{shift} = t\left(1 - \frac{1}{\mu}\right)`, s: HCV(18) },
              { n: "Spherical surface", t: R`\frac{\mu_2}{v} - \frac{\mu_1}{u} = \frac{\mu_2 - \mu_1}{R}`, s: HCV(18) },
              { n: "Magnification (spherical surface)", t: R`m = \frac{\mu_1 v}{\mu_2 u}`, s: HCV(18) }
            ]
          },
          {
            title: "Total internal reflection and its applications",
            formulas: [
              { n: "Critical angle", t: R`\sin\theta_c = \frac{\mu_2}{\mu_1} = \frac{1}{\mu}`, c: "Light going from denser (μ₁) to rarer (μ₂) medium; TIR when i > θ_c. Used in optical fibres.", s: HCV(18) }
            ]
          },
          {
            title: "Thin lens formula; lens maker formula; magnification; power",
            formulas: [
              { n: "Lens maker's formula", t: R`\frac{1}{f} = (\mu - 1)\left(\frac{1}{R_1} - \frac{1}{R_2}\right)`, s: HCV(18) },
              { n: "Thin lens formula", t: R`\frac{1}{v} - \frac{1}{u} = \frac{1}{f}`, s: HCV(18) },
              { n: "Magnification (lens)", t: R`m = \frac{v}{u}`, s: HCV(18) },
              { n: "Power", t: R`P = \frac{1}{f}\ (\text{metre}) \ \text{dioptre}`, s: HCV(18) }
            ]
          },
          {
            title: "Combination of thin lenses in contact",
            formulas: [
              { n: "Lenses in contact", t: R`\frac{1}{F} = \frac{1}{f_1} + \frac{1}{f_2};\qquad P = P_1 + P_2`, s: HCV(18) },
              { n: "Separated by d", t: R`\frac{1}{F} = \frac{1}{f_1} + \frac{1}{f_2} - \frac{d}{f_1f_2}`, s: HCV(18) }
            ]
          },
          {
            title: "Refraction through a prism",
            formulas: [
              { n: "Prism relations", t: R`r_1 + r_2 = A,\qquad \delta = i + i' - A`, s: HCV(18) },
              { n: "Minimum deviation", t: R`\mu = \frac{\sin\frac{A + \delta_m}{2}}{\sin\frac{A}{2}}`, c: "At minimum deviation i = i′, r₁ = r₂ = A/2.", s: HCV(18) },
              { n: "Thin prism", t: R`\delta = (\mu - 1)A`, s: HCV(18) }
            ]
          },
          {
            title: "Microscope and astronomical telescope and their magnifying powers",
            formulas: [
              { n: "Simple microscope", t: R`m = \frac{D}{f}\ (\text{image at }\infty);\qquad m = 1 + \frac{D}{f}\ (\text{image at } D)`, v: "D = 25 cm (least distance of distinct vision).", s: HCV(19) },
              { n: "Compound microscope", t: R`m = \frac{v}{u}\left(1 + \frac{D}{f_e}\right)\ (\text{at } D);\qquad m = \frac{v}{u}\frac{D}{f_e}\ (\text{at }\infty)`, s: HCV(19) },
              { n: "Astronomical telescope", t: R`m = -\frac{f_o}{f_e}\ (\text{normal adjustment});\qquad m = -\frac{f_o}{f_e}\left(1 + \frac{f_e}{D}\right)\ (\text{image at } D)`, s: HCV(19) },
              { n: "Length of telescope", t: R`L = f_o + f_e\ (\text{normal adjustment})`, s: HCV(19) },
              { n: "Reflecting telescope", t: R`\text{(not in the provided books)}`, gapItem: true, s: "—" }
            ]
          },
          {
            title: "Wave optics: wavefront and Huygens' principle; reflection and refraction",
            formulas: [
              { n: "Refraction by Huygens' construction", t: R`\frac{\sin i}{\sin r} = \frac{v_1}{v_2} = \frac{\mu_2}{\mu_1}`, s: HCV(17) },
              { n: "Wavelength in a medium", t: R`\lambda_{medium} = \frac{\lambda}{\mu}`, s: HCV(17) }
            ]
          },
          {
            title: "Interference: Young's double-slit experiment and fringe width; coherent sources",
            formulas: [
              { n: "Path difference", t: R`\Delta x = \frac{yd}{D}`, v: "d = slit separation, D = screen distance, y = position on the screen.", s: HCV(17) },
              { n: "Bright and dark fringes", t: R`\text{Bright: } \Delta x = n\lambda;\qquad \text{Dark: } \Delta x = \left(n + \tfrac12\right)\lambda`, s: HCV(17) },
              { n: "Fringe width", t: R`w = \frac{D\lambda}{d}`, s: HCV(17) },
              { n: "Intensity", t: R`I = I_1 + I_2 + 2\sqrt{I_1I_2}\cos\delta;\qquad \delta = \frac{2\pi}{\lambda}\Delta x`, s: HCV(17) },
              { n: "Equal intensities", t: R`I = 4I_0\cos^2\frac{\delta}{2}`, s: HCV(17) },
              { n: "Thin sheet in one beam", t: R`\text{Fringe shift} = \frac{(\mu - 1)tD}{d}`, s: HCV(17) }
            ]
          },
          {
            title: "Diffraction due to a single slit; width of central maximum",
            formulas: [
              { n: "Minima", t: R`b\sin\theta = n\lambda,\quad n = 1, 2, \dots`, v: "b = slit width.", s: HCV(17) },
              { n: "Angular half-width of central maximum", t: R`\sin\theta = \frac{\lambda}{b}`, s: HCV(17) },
              { n: "Width of central maximum", t: R`2D\lambda/b`, s: HCV(17) }
            ]
          },
          {
            title: "Polarization: plane-polarized light; Brewster's law; Polaroids",
            formulas: [
              { n: "Malus' law", t: R`I = I_0\cos^2\theta`, s: HCV(17) },
              { n: "Brewster's law", t: R`\tan\theta_p = \mu`, c: "Reflected light is fully polarised; reflected and refracted rays are perpendicular.", s: HCV(17) },
              { n: "Unpolarised through a Polaroid", t: R`I = \frac{I_0}{2}`, s: HCV(17) }
            ]
          }
        ]
      },
      {
        unit: 17, title: "Dual Nature of Matter and Radiation", status: "covered",
        topics: [
          {
            title: "Dual nature of radiation; particle nature of light",
            formulas: [
              { n: "Photon energy and momentum", t: R`E = h\nu = \frac{hc}{\lambda},\qquad p = \frac{h}{\lambda} = \frac{E}{c}`, v: "h = 6.63 × 10⁻³⁴ J s; hc ≈ 1240 eV nm.", s: HCV(42) }
            ]
          },
          {
            title: "Photoelectric effect; Hertz and Lenard's observations; Einstein's equation",
            formulas: [
              { n: "Einstein's photoelectric equation", t: R`K_{max} = h\nu - \varphi = \frac{hc}{\lambda} - \varphi`, v: "φ = work function.", s: HCV(42) },
              { n: "Threshold", t: R`\varphi = h\nu_0 = \frac{hc}{\lambda_0}`, s: HCV(42) },
              { n: "Stopping potential", t: R`eV_0 = K_{max} = h\nu - \varphi;\qquad V_0 = \frac{h}{e}\nu - \frac{\varphi}{e}`, c: "Slope of V₀–ν graph = h/e.", s: HCV(42) }
            ]
          },
          {
            title: "Matter waves: de Broglie relation",
            formulas: [
              { n: "de Broglie wavelength", t: R`\lambda = \frac{h}{p} = \frac{h}{mv} = \frac{h}{\sqrt{2mK}}`, s: HCV(42) },
              { n: "Electron accelerated through V", t: R`\lambda = \frac{h}{\sqrt{2meV}} \approx \frac{1.227}{\sqrt V}\ \text{nm}`, s: HCV(42) }
            ]
          }
        ]
      },
      {
        unit: 18, title: "Atoms and Nuclei", status: "covered",
        topics: [
          {
            title: "Alpha-particle scattering; Rutherford's model",
            formulas: [
              { n: "Size of nucleus (from α-scattering)", t: R`r_{nucleus} \sim 10\ \text{fm} = 10^{-14}\ \text{m} \approx 10^{-4}\times r_{atom}`, c: "Nearly all the mass and all the positive charge are concentrated in the nucleus; the book treats this result qualitatively.", s: HCV(43) }
            ]
          },
          {
            title: "Bohr model; energy levels; hydrogen spectrum",
            formulas: [
              { n: "Quantisation", t: R`mvr = \frac{nh}{2\pi}`, s: HCV(43) },
              { n: "Radius", t: R`r_n = \frac{\varepsilon_0h^2n^2}{\pi mZe^2} = 0.053\,\frac{n^2}{Z}\ \text{nm}`, s: HCV(43) },
              { n: "Speed", t: R`v_n = \frac{Ze^2}{2\varepsilon_0hn}`, s: HCV(43) },
              { n: "Energy", t: R`E_n = -\frac{mZ^2e^4}{8\varepsilon_0^2h^2n^2} = -\frac{13.6\,Z^2}{n^2}\ \text{eV}`, s: HCV(43) },
              { n: "Spectral lines", t: R`\frac{1}{\lambda} = RZ^2\left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right),\quad R = 1.097\times10^{7}\ \text{m}^{-1}`, c: "Lyman n₁ = 1 (UV), Balmer n₁ = 2 (visible), Paschen 3, Brackett 4, Pfund 5.", s: HCV(43) }
            ]
          },
          {
            title: "Composition and size of nucleus; atomic masses",
            formulas: [
              { n: "Nuclear radius", t: R`R = R_0A^{1/3},\quad R_0 \approx 1.1\ \text{fm}`, c: "Nuclear density is nearly the same for all nuclei.", s: HCV(46) },
              { n: "Atomic mass unit", t: R`1\,\text{u} = 1.6605\times10^{-27}\ \text{kg} = 931\ \text{MeV}/c^2`, s: HCV(46) }
            ]
          },
          {
            title: "Mass–energy relation; mass defect; binding energy per nucleon",
            formulas: [
              { n: "Mass–energy equivalence", t: R`E = mc^2`, s: HCV(46) },
              { n: "Mass defect", t: R`\Delta m = Zm_p + (A - Z)m_n - M`, s: HCV(46) },
              { n: "Binding energy", t: R`B = \Delta m\,c^2 = [Zm_H + (A - Z)m_n - M_{atom}]c^2`, c: "B/A peaks near A ≈ 56 (~8.8 MeV); lower for very light and heavy nuclei.", s: HCV(46) },
              { n: "Q-value", t: R`Q = (\text{initial mass} - \text{final mass})\,c^2`, s: HCV(46) }
            ]
          },
          {
            title: "Nuclear fission and fusion",
            formulas: [
              { n: "Fission example", t: R`{}^{235}\text{U} + n \rightarrow {}^{236}\text{U} \rightarrow \text{X} + \text{Y} + \text{neutrons} + \sim 200\ \text{MeV}`, s: HCV(46) },
              { n: "Fusion", t: R`\text{Light nuclei combine; energy released since B/A increases}`, s: HCV(46) }
            ]
          }
        ]
      },
      {
        unit: 19, title: "Electronic Devices", status: "partial",
        note: "Solar cells are not described in the provided books.",
        topics: [
          {
            title: "Semiconductors",
            formulas: [
              { n: "Intrinsic semiconductor", t: R`n_e = n_h = n_i`, s: HCV(45) },
              { n: "Carrier product", t: R`n_e\,n_h = \text{constant} = n_i^2`, c: "Stays constant when the semiconductor is doped.", s: HCV(45) },
              { n: "Conductivity", t: R`\sigma = e(n_e\mu_e + n_h\mu_h)`, s: HCV(45) }
            ]
          },
          {
            title: "p–n junction diode: I–V characteristics in forward and reverse bias; diode as a rectifier",
            formulas: [
              { n: "I–V behaviour", t: R`\text{Forward bias: current rises steeply after the barrier;}\ \ \text{Reverse bias: very small current until breakdown}`, s: HCV(45) },
              { n: "Dynamic resistance", t: R`r = \frac{\Delta V}{\Delta i}`, s: HCV(45) },
              { n: "Rectifier output frequency", t: R`\text{Half-wave: } \nu;\qquad \text{Full-wave: } 2\nu`, s: HCV(45) }
            ]
          },
          {
            title: "LED, photodiode, Zener diode; Zener as voltage regulator",
            formulas: [
              { n: "LED / photodiode photon condition", t: R`\frac{hc}{\lambda} \ge E_g`, c: "Photodiode: photons create hole-electron pairs. LED: recombination emits light (visible 380–780 nm).", s: HCV(45) },
              { n: "Zener diode", t: R`V_{out} = V_Z\ \ (\text{in breakdown})`, c: "Operated in reverse breakdown; voltage stays nearly constant.", s: HCV(45) }
            ]
          },
          { title: "Solar cell", gap: true },
          {
            title: "Logic gates (OR, AND, NOT, NAND and NOR)",
            formulas: [
              { n: "OR", t: R`Y = A + B`, s: HCV(45) },
              { n: "AND", t: R`Y = A\cdot B`, s: HCV(45) },
              { n: "NOT", t: R`Y = \bar A`, s: HCV(45) },
              { n: "NAND / NOR", t: R`Y = \overline{A\cdot B};\qquad Y = \overline{A + B}`, s: HCV(45) }
            ]
          }
        ]
      },
      {
        unit: 20, title: "Experimental Skills", status: "partial",
        note: "Only the physics behind experiments that appear in the books is listed. Vernier calipers, screw gauge, half-deflection, parallax focal length and identifying components are not treated as experiments in the provided books.",
        topics: [
          { title: "Vernier calipers; screw gauge", gap: true },
          {
            title: "Simple pendulum: dissipation of energy (amplitude² vs time)",
            formulas: [
              { n: "Energy and amplitude", t: R`E = \tfrac{1}{2}m\omega^2A^2 \propto A^2`, s: HCV(12) }
            ]
          },
          {
            title: "Metre scale: mass by principle of moments",
            formulas: [ { n: "Principle of moments", t: R`\sum\Gamma_{clockwise} = \sum\Gamma_{anticlockwise};\qquad m_1x_1 = m_2x_2`, s: HCV(10) } ]
          },
          {
            title: "Young's modulus of a wire",
            formulas: [ { n: "", t: R`Y = \frac{MgL}{\pi r^2\,\Delta L}`, s: HCV(14) } ]
          },
          {
            title: "Surface tension by capillary rise",
            formulas: [ { n: "", t: R`S = \frac{hr\rho g}{2\cos\theta}`, s: HCV(14) } ]
          },
          {
            title: "Coefficient of viscosity by terminal velocity",
            formulas: [ { n: "", t: R`\eta = \frac{2r^2(\rho - \sigma)g}{9v_T}`, s: HCV(14) } ]
          },
          {
            title: "Speed of sound using a resonance tube",
            formulas: [ { n: "Two resonance lengths", t: R`v = 2\nu(l_2 - l_1)`, c: "End correction cancels.", s: HCV(16) } ]
          },
          {
            title: "Specific heat capacity of a solid and a liquid by method of mixtures",
            formulas: [ { n: "", t: R`m_1s_1(\theta_1 - \theta) = (m_2s_2 + m_cs_c)(\theta - \theta_2)`, s: HCV(25) } ]
          },
          {
            title: "Resistivity using a metre bridge; resistance using Ohm's law",
            formulas: [
              { n: "Metre bridge", t: R`X = R\frac{100 - l}{l};\qquad \rho = \frac{X\pi r^2}{L}`, s: HCV(32) },
              { n: "Ohm's law", t: R`R = \frac{V}{i}`, s: HCV(32) }
            ]
          },
          { title: "Resistance and figure of merit of a galvanometer by half deflection", gap: true },
          { title: "Focal length of mirrors and convex lens by parallax method", gap: true, partialNote: "Mirror/lens formulas are under Optics." },
          {
            title: "Angle of deviation vs angle of incidence for a prism",
            formulas: [ { n: "", t: R`\delta = i + i' - A;\qquad \mu = \frac{\sin\frac{A + \delta_m}{2}}{\sin\frac{A}{2}}`, s: HCV(18) } ]
          },
          {
            title: "Refractive index of a glass slab using a travelling microscope",
            formulas: [ { n: "", t: R`\mu = \frac{\text{real thickness}}{\text{apparent thickness}}`, s: HCV(18) } ]
          },
          { title: "Characteristic curves of p–n junction and Zener diodes", formulas: [], info: "See Electronic Devices for the diode equation and Zener breakdown." },
          { title: "Identification of diode, LED, resistor, capacitor", gap: true }
        ]
      }
    ]
  };
})();
