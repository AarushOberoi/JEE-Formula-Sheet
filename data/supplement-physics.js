/* ADDED formulas (Physics) — standard results for syllabus topics the provided HC Verma volumes
   do not treat. Not extracted from the provided PDFs; shown with an "Added" label. */
window.FORMULA_SUPPLEMENT = window.FORMULA_SUPPLEMENT || {};
(function () {
  const R = String.raw;
  Object.assign(window.FORMULA_SUPPLEMENT, {
    // Unit 1: Errors in measurement
    "physics:1:2": [
      { n: "Mean value", t: R`a_{mean} = \frac{1}{n}\sum_{i=1}^{n} a_i` },
      { n: "Absolute error", t: R`\Delta a_i = a_{mean} - a_i` },
      { n: "Mean absolute error", t: R`\Delta a_{mean} = \frac{1}{n}\sum_{i=1}^{n}|\Delta a_i|`, c: "Result is reported as a = a_mean ± Δa_mean." },
      { n: "Relative and percentage error", t: R`\delta a = \frac{\Delta a_{mean}}{a_{mean}},\qquad \text{percentage error} = \frac{\Delta a_{mean}}{a_{mean}} \times 100\%` },
      { n: "Sum or difference", t: R`Z = A \pm B \;\Rightarrow\; \Delta Z = \Delta A + \Delta B`, c: "Absolute errors add." },
      { n: "Product or quotient", t: R`Z = AB \text{ or } \frac{A}{B} \;\Rightarrow\; \frac{\Delta Z}{Z} = \frac{\Delta A}{A} + \frac{\Delta B}{B}`, c: "Relative errors add." },
      { n: "Powers", t: R`Z = \frac{A^p B^q}{C^r} \;\Rightarrow\; \frac{\Delta Z}{Z} = p\frac{\Delta A}{A} + q\frac{\Delta B}{B} + r\frac{\Delta C}{C}` }
    ],
    // Unit 16: reflecting telescope placeholder
    "physics:16:6:item:4": [
      { n: "Reflecting telescope", t: R`m = \frac{f_o}{f_e},\qquad f_o = \frac{R}{2}`, v: "Objective = concave mirror of radius of curvature R; f_e = focal length of eyepiece.", c: "Normal adjustment. Advantages: no chromatic aberration, paraboloidal mirror removes spherical aberration, easier to support large aperture (e.g. Cassegrain)." }
    ],
    // Unit 19: Solar cell
    "physics:19:3": [
      { n: "Condition for generation", t: R`h\nu \ge E_g`, c: "Photons create e–h pairs near the junction; built-in field separates them — no external bias needed." },
      { n: "Operating point", t: R`\text{I–V curve lies in the fourth quadrant};\quad V_{oc} \text{ at } I = 0,\ \ I_{sc} \text{ at } V = 0`, v: "V_oc = open-circuit voltage, I_sc = short-circuit current." },
      { n: "Power delivered", t: R`P = V\,I,\qquad P_{max} = V_m I_m`, c: "Semiconductors with E_g ≈ 1.5 eV (Si, GaAs) are preferred." }
    ],
    // Unit 20: Experimental skills
    "physics:20:0": [
      { n: "Vernier least count", t: R`\text{L.C.} = 1\,\text{MSD} - 1\,\text{VSD} = \frac{\text{value of 1 MSD}}{\text{number of vernier divisions}}`, c: "When n VSD = (n − 1) MSD." },
      { n: "Vernier reading", t: R`\text{Reading} = \text{MSR} + (\text{VSR} \times \text{L.C.}) - (\text{zero error})`, c: "Zero error positive if vernier zero is right of main-scale zero; subtract it (with sign)." },
      { n: "Screw gauge pitch & least count", t: R`\text{Pitch} = \frac{\text{distance moved on main scale}}{\text{no. of rotations}},\qquad \text{L.C.} = \frac{\text{Pitch}}{\text{no. of circular scale divisions}}` },
      { n: "Screw gauge reading", t: R`\text{Reading} = \text{MSR} + (\text{CSR} \times \text{L.C.}) - (\text{zero error})` }
    ],
    "physics:20:9": [
      { n: "Half-deflection method", t: R`G = \frac{R\,S}{R - S}`, v: "R = series resistance for full deflection θ, S = shunt that halves it to θ/2.", c: "If R ≫ S, G ≈ S." },
      { n: "Figure of merit", t: R`k = \frac{E}{(R + G)\,\theta}`, v: "Current per division (A/div); E = emf of cell, θ = deflection in divisions." }
    ],
    "physics:20:10": [
      { n: "Concave mirror", t: R`\frac{1}{f} = \frac{1}{v} + \frac{1}{u}`, c: "Image located by removing parallax between image and pin; f also from u–v or 1/u–1/v graph (intercepts = 1/f)." },
      { n: "Convex lens", t: R`\frac{1}{f} = \frac{1}{v} - \frac{1}{u}` },
      { n: "Convex mirror (using a convex lens)", t: R`f = \frac{R}{2}`, c: "Image formed by the lens is made to retrace its path from the mirror; then lens-to-image distance minus lens-to-mirror distance = R." }
    ],
    "physics:20:14": [
      { n: "Identification by multimeter", t: R`\begin{array}{ll} \text{Resistor} & \text{same resistance in both directions} \\ \text{Diode} & \text{low } R \text{ one way, very high } R \text{ the other} \\ \text{LED} & \text{like a diode, and glows when forward biased} \\ \text{Capacitor} & \text{initial deflection that decays to zero (charging)} \end{array}` }
    ]
  });
})();
