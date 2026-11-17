/* ADDED formulas (Chemistry) — standard NCERT-level results for syllabus topics that the
   provided books do not cover. Not extracted from the provided PDFs; shown with an "Added" label.
   Key format: "subject:unit:topicIndex", or "subject:unit:topicIndex:item:formulaIndex" to fill a
   single placeholder formula. */
window.FORMULA_SUPPLEMENT = window.FORMULA_SUPPLEMENT || {};
(function () {
  const R = String.raw;
  Object.assign(window.FORMULA_SUPPLEMENT, {
    // ---------- Unit 5: Solutions ----------
    "chem:5:0:item:5": [
      { n: "Percentage by volume (V/V)", t: R`\text{Volume \%} = \frac{\text{Volume of solute}}{\text{Total volume of solution}} \times 100` },
      { n: "Mass by volume % (w/V)", t: R`\text{w/V \%} = \frac{\text{Mass of solute (g)}}{\text{Volume of solution (mL)}} \times 100` },
      { n: "Parts per million", t: R`\text{ppm} = \frac{\text{Parts of component}}{\text{Total parts of all components}} \times 10^{6}` }
    ],
    "chem:5:1": [
      { n: "Raoult's law (volatile components)", t: R`p_1 = x_1\,p_1^{\circ},\qquad p_2 = x_2\,p_2^{\circ}`, v: "p° = vapour pressure of the pure component, x = mole fraction in the liquid." },
      { n: "Total vapour pressure", t: R`p_{total} = p_1 + p_2 = p_1^{\circ} + (p_2^{\circ} - p_1^{\circ})\,x_2`, c: "Linear in x₂ for an ideal solution." },
      { n: "Composition of vapour", t: R`y_1 = \frac{p_1}{p_{total}},\qquad y_2 = \frac{p_2}{p_{total}}` },
      { n: "Non-volatile solute", t: R`p_1 = x_1\,p_1^{\circ}`, c: "Only the solvent contributes to vapour pressure." },
      { n: "Henry's law", t: R`p = K_H\,x`, v: "x = mole fraction of the gas in solution, K_H = Henry's constant (higher K_H → lower solubility)." },
      { n: "Ideal solution", t: R`\Delta_{mix}H = 0,\qquad \Delta_{mix}V = 0`, c: "Obeys Raoult's law over the entire range; A–B interactions ≈ A–A and B–B." },
      { n: "Non-ideal: positive deviation", t: R`p > p_{Raoult},\quad \Delta_{mix}H > 0,\quad \Delta_{mix}V > 0`, c: "A–B attractions weaker (e.g. ethanol + acetone); may form minimum-boiling azeotrope." },
      { n: "Non-ideal: negative deviation", t: R`p < p_{Raoult},\quad \Delta_{mix}H < 0,\quad \Delta_{mix}V < 0`, c: "A–B attractions stronger (e.g. chloroform + acetone); may form maximum-boiling azeotrope." }
    ],
    "chem:5:2": [
      { n: "Relative lowering of vapour pressure", t: R`\frac{p_1^{\circ} - p_1}{p_1^{\circ}} = x_2 = \frac{n_2}{n_1 + n_2} \approx \frac{n_2}{n_1}`, c: "Dilute solution of non-volatile solute." },
      { n: "Molar mass from RLVP", t: R`M_2 = \frac{w_2\,M_1\,p_1^{\circ}}{w_1\,(p_1^{\circ} - p_1)}` },
      { n: "Elevation of boiling point", t: R`\Delta T_b = T_b - T_b^{\circ} = K_b\,m`, v: "m = molality; K_b = ebullioscopic constant (K kg mol⁻¹)." },
      { n: "Depression of freezing point", t: R`\Delta T_f = T_f^{\circ} - T_f = K_f\,m`, v: "K_f = cryoscopic constant." },
      { n: "K_b and K_f from solvent properties", t: R`K_b = \frac{R\,M_1\,T_b^2}{1000\,\Delta_{vap}H},\qquad K_f = \frac{R\,M_1\,T_f^2}{1000\,\Delta_{fus}H}`, v: "M₁ = molar mass of solvent (g mol⁻¹), ΔH in J mol⁻¹." },
      { n: "Osmotic pressure", t: R`\pi = CRT = \frac{n_2}{V}RT`, c: "C = molarity; at equilibrium; isotonic solutions have equal π." }
    ],
    "chem:5:3": [
      { n: "Molar mass from ΔT_b / ΔT_f", t: R`M_2 = \frac{1000\,K_b\,w_2}{\Delta T_b\,w_1},\qquad M_2 = \frac{1000\,K_f\,w_2}{\Delta T_f\,w_1}`, v: "w₂ = mass of solute (g), w₁ = mass of solvent (g)." },
      { n: "Molar mass from osmotic pressure", t: R`M_2 = \frac{w_2\,R\,T}{\pi\,V}` },
      { n: "van't Hoff factor", t: R`i = \frac{\text{Normal molar mass}}{\text{Abnormal molar mass}} = \frac{\text{Observed colligative property}}{\text{Calculated colligative property}} = \frac{\text{Total moles of particles after}}{\text{moles before association/dissociation}}`, c: "i > 1 dissociation; i < 1 association." },
      { n: "Modified colligative equations", t: R`\frac{p_1^{\circ} - p_1}{p_1^{\circ}} = i\,\frac{n_2}{n_1},\quad \Delta T_b = iK_bm,\quad \Delta T_f = iK_fm,\quad \pi = iCRT` },
      { n: "Degree of dissociation", t: R`\alpha = \frac{i - 1}{n - 1}`, v: "n = number of ions from one formula unit." },
      { n: "Degree of association", t: R`\alpha = \frac{1 - i}{1 - \frac{1}{n}}`, v: "n molecules associate into one (e.g. n = 2 for dimerisation)." }
    ],

    // ---------- Unit 7: Redox & electrochemistry ----------
    "chem:7:0": [
      { n: "Oxidation / reduction (electronic)", t: R`\text{Oxidation} = \text{loss of } e^-\ (\text{O.N. increases});\qquad \text{Reduction} = \text{gain of } e^-\ (\text{O.N. decreases})` },
      { n: "Oxidation number rules", t: R`\sum \text{O.N.} = 0\ (\text{neutral molecule});\qquad \sum \text{O.N.} = \text{charge}\ (\text{ion});\qquad \text{O.N. of an element in free state} = 0` },
      { n: "Common oxidation numbers", t: R`\text{F} = -1;\ \ \text{O} = -2\ (\text{peroxides } -1,\ \text{superoxides } -\tfrac12,\ \text{OF}_2\ +2);\ \ \text{H} = +1\ (\text{metal hydrides } -1);\ \ \text{Group 1} = +1,\ \text{Group 2} = +2` },
      { n: "Balancing condition", t: R`\text{Total increase in O.N.} = \text{Total decrease in O.N.}\quad(\text{electrons lost} = \text{electrons gained})`, c: "Then balance O with H₂O and H with H⁺ (acidic) or OH⁻ (basic) — half-reaction / oxidation-number methods." },
      { n: "Disproportionation", t: R`\text{Same element is simultaneously oxidised and reduced, e.g. } 2\text{H}_2\text{O}_2 \rightarrow 2\text{H}_2\text{O} + \text{O}_2` }
    ],
    "chem:7:1": [
      { n: "Resistance and resistivity", t: R`R = \rho\,\frac{l}{A}`, s: "" },
      { n: "Conductance and conductivity", t: R`G = \frac{1}{R},\qquad \kappa = \frac{1}{\rho} = \frac{G^*}{R}`, v: "G* = l/A = cell constant (cm⁻¹ or m⁻¹); κ in S cm⁻¹ or S m⁻¹." },
      { n: "Molar conductivity", t: R`\Lambda_m = \frac{\kappa}{c};\qquad \Lambda_m\ (\text{S cm}^2\,\text{mol}^{-1}) = \frac{1000\,\kappa\ (\text{S cm}^{-1})}{M\ (\text{mol L}^{-1})}` },
      { n: "Variation with concentration (strong electrolyte)", t: R`\Lambda_m = \Lambda_m^{\circ} - A\sqrt{c}`, c: "Debye–Hückel–Onsager; Λm increases on dilution for all electrolytes (steeply for weak ones)." },
      { n: "Kohlrausch's law", t: R`\Lambda_m^{\circ} = \nu_+\,\lambda_+^{\circ} + \nu_-\,\lambda_-^{\circ}`, v: "λ° = limiting molar conductivity of each ion; ν = number of ions per formula unit." },
      { n: "Application: Λ°m of a weak electrolyte", t: R`\Lambda_m^{\circ}(\text{CH}_3\text{COOH}) = \Lambda_m^{\circ}(\text{CH}_3\text{COONa}) + \Lambda_m^{\circ}(\text{HCl}) - \Lambda_m^{\circ}(\text{NaCl})` },
      { n: "Degree of dissociation & K_a", t: R`\alpha = \frac{\Lambda_m}{\Lambda_m^{\circ}},\qquad K_a = \frac{c\,\alpha^2}{1 - \alpha} = \frac{c\,\Lambda_m^2}{\Lambda_m^{\circ}(\Lambda_m^{\circ} - \Lambda_m)}` }
    ],
    "chem:7:2": [
      { n: "Standard cell potential", t: R`E^{\circ}_{cell} = E^{\circ}_{cathode} - E^{\circ}_{anode} = E^{\circ}_{right} - E^{\circ}_{left}`, c: "Reduction potentials; oxidation at anode (left), reduction at cathode (right). SHE: E° = 0." },
      { n: "Nernst equation (electrode)", t: R`\text{M}^{n+} + ne^- \rightarrow \text{M}:\quad E = E^{\circ} - \frac{RT}{nF}\ln\frac{1}{[\text{M}^{n+}]} = E^{\circ} - \frac{0.059}{n}\log\frac{1}{[\text{M}^{n+}]}`, c: "0.059 V at 298 K." },
      { n: "Nernst equation (cell)", t: R`E_{cell} = E^{\circ}_{cell} - \frac{2.303RT}{nF}\log Q = E^{\circ}_{cell} - \frac{0.059}{n}\log Q` },
      { n: "Daniell cell example", t: R`E_{cell} = E^{\circ}_{cell} - \frac{0.059}{2}\log\frac{[\text{Zn}^{2+}]}{[\text{Cu}^{2+}]}` },
      { n: "Equilibrium constant", t: R`E^{\circ}_{cell} = \frac{2.303RT}{nF}\log K_c = \frac{0.059}{n}\log K_c\ \ (298\ \text{K})` },
      { n: "Cell potential and Gibbs energy", t: R`\Delta_rG = -nFE_{cell},\qquad \Delta_rG^{\circ} = -nFE^{\circ}_{cell} = -RT\ln K`, v: "F = 96487 C mol⁻¹. Spontaneous cell: E_cell > 0 ⇔ ΔG < 0." },
      { n: "Faraday's first law (electrolysis)", t: R`m = Z\,I\,t = \frac{M}{nF}\,I\,t,\qquad Q = I\,t` },
      { n: "Faraday's second law", t: R`\frac{m_1}{m_2} = \frac{E_1}{E_2}`, c: "Same charge passed; E = equivalent mass (M/n)." },
      { n: "Dry (Leclanché) cell", t: R`\text{Anode: Zn} \rightarrow \text{Zn}^{2+} + 2e^-;\quad \text{Cathode: MnO}_2 + \text{NH}_4^+ + e^- \rightarrow \text{MnO(OH)} + \text{NH}_3`, c: "≈ 1.5 V" },
      { n: "Lead storage battery (discharge)", t: R`\text{Pb} + \text{PbO}_2 + 2\text{H}_2\text{SO}_4 \rightarrow 2\text{PbSO}_4 + 2\text{H}_2\text{O}`, c: "Anode: Pb + SO₄²⁻ → PbSO₄ + 2e⁻; Cathode: PbO₂ + SO₄²⁻ + 4H⁺ + 2e⁻ → PbSO₄ + 2H₂O. Reversed on charging." },
      { n: "H₂–O₂ fuel cell", t: R`\text{Cathode: O}_2 + 2\text{H}_2\text{O} + 4e^- \rightarrow 4\text{OH}^-;\quad \text{Anode: } 2\text{H}_2 + 4\text{OH}^- \rightarrow 4\text{H}_2\text{O} + 4e^-;\quad \text{Net: } 2\text{H}_2 + \text{O}_2 \rightarrow 2\text{H}_2\text{O}` }
    ],

    // ---------- Unit 8: Chemical kinetics ----------
    "chem:8:0": [
      { n: "Average and instantaneous rate", t: R`r_{av} = -\frac{\Delta[\text{R}]}{\Delta t} = \frac{\Delta[\text{P}]}{\Delta t};\qquad r = -\frac{d[\text{R}]}{dt} = \frac{d[\text{P}]}{dt}` },
      { n: "Rate in terms of stoichiometry", t: R`a\text{A} + b\text{B} \rightarrow c\text{C} + d\text{D}:\quad r = -\frac{1}{a}\frac{d[\text{A}]}{dt} = -\frac{1}{b}\frac{d[\text{B}]}{dt} = \frac{1}{c}\frac{d[\text{C}]}{dt} = \frac{1}{d}\frac{d[\text{D}]}{dt}` },
      { n: "Rate law", t: R`\text{Rate} = k[\text{A}]^x[\text{B}]^y;\qquad \text{Order} = x + y`, c: "x, y found experimentally; may be zero, fractional or integer." },
      { n: "Units of rate constant", t: R`k:\ (\text{mol L}^{-1})^{1 - n}\,\text{s}^{-1}`, c: "Zero order: mol L⁻¹ s⁻¹; first order: s⁻¹; second order: L mol⁻¹ s⁻¹." },
      { n: "Molecularity", t: R`\text{Number of reacting species colliding in an elementary step} = 1, 2 \text{ or } 3`, c: "Defined only for elementary reactions; for a complex reaction the slowest step decides the rate." }
    ],
    "chem:8:1": [
      { n: "Zero order — integrated", t: R`[\text{R}] = [\text{R}]_0 - kt;\qquad k = \frac{[\text{R}]_0 - [\text{R}]}{t}`, c: "Plot of [R] vs t is linear with slope −k." },
      { n: "Zero order — half-life", t: R`t_{1/2} = \frac{[\text{R}]_0}{2k}` },
      { n: "First order — integrated", t: R`\ln[\text{R}] = \ln[\text{R}]_0 - kt;\qquad [\text{R}] = [\text{R}]_0\,e^{-kt}` },
      { n: "", t: R`k = \frac{2.303}{t}\log\frac{[\text{R}]_0}{[\text{R}]};\qquad k = \frac{2.303}{t_2 - t_1}\log\frac{[\text{R}]_1}{[\text{R}]_2}`, c: "Plot of log[R] vs t is linear, slope = −k/2.303." },
      { n: "First order — half-life", t: R`t_{1/2} = \frac{0.693}{k}`, c: "Independent of initial concentration." },
      { n: "First order gas-phase reaction A(g) → B(g) + C(g)", t: R`k = \frac{2.303}{t}\log\frac{p_i}{2p_i - p_t}`, v: "pᵢ = initial pressure, p_t = total pressure at time t." },
      { n: "Pseudo first-order", t: R`\text{Rate} = k'[\text{A}],\quad k' = k[\text{B}]`, c: "When B is in large excess (e.g. water in hydrolysis of esters)." }
    ],
    "chem:8:2": [
      { n: "Arrhenius equation", t: R`k = A\,e^{-E_a/RT}`, v: "A = Arrhenius (frequency) factor, Ea = activation energy." },
      { n: "Logarithmic form", t: R`\ln k = \ln A - \frac{E_a}{RT};\qquad \text{slope of } \ln k \text{ vs } \tfrac{1}{T} = -\frac{E_a}{R}` },
      { n: "Two temperatures", t: R`\log\frac{k_2}{k_1} = \frac{E_a}{2.303R}\left(\frac{T_2 - T_1}{T_1T_2}\right)` },
      { n: "Fraction of effective molecules", t: R`f = e^{-E_a/RT}` },
      { n: "Temperature coefficient", t: R`\frac{k_{T+10}}{k_T} \approx 2 \text{ to } 3` },
      { n: "Catalyst", t: R`\text{Lowers } E_a\ \text{(alternative path)};\quad \text{does not change } \Delta G \text{ or } K` },
      { n: "Collision theory", t: R`\text{Rate} = P\,Z_{AB}\,e^{-E_a/RT}`, v: "Z_AB = collision frequency, P = probability (steric) factor." }
    ],

    // ---------- Unit 10: p-block ----------
    "chem:10:0": [
      { n: "Valence-shell configurations", t: R`\text{G13: } ns^2np^1;\ \ \text{G14: } ns^2np^2;\ \ \text{G15: } ns^2np^3;\ \ \text{G16: } ns^2np^4;\ \ \text{G17: } ns^2np^5;\ \ \text{G18: } ns^2np^6\ (\text{He } 1s^2)` },
      { n: "Group oxidation state", t: R`\text{Highest O.S.} = \text{number of valence electrons} = \text{group number} - 10` },
      { n: "Inert pair effect", t: R`\text{Stability of } (\text{group O.S.} - 2) \text{ increases down the group}`, c: "e.g. Tl⁺ > Tl³⁺, Pb²⁺ > Pb⁴⁺, Bi³⁺ > Bi⁵⁺." },
      { n: "Common oxidation states", t: R`\text{G13: } +3, +1;\ \ \text{G14: } +4, +2;\ \ \text{G15: } -3 \text{ to } +5;\ \ \text{G16: } -2, +2, +4, +6;\ \ \text{G17: } -1, +1, +3, +5, +7`, c: "F shows only −1; O mostly −2 (no d orbitals in the first element)." },
      { n: "Trends", t: R`\text{Down a group: atomic radius} \uparrow,\ \text{ionisation enthalpy} \downarrow,\ \text{electronegativity} \downarrow,\ \text{metallic character} \uparrow` },
      { n: "Unique first member", t: R`\text{Small size, high EN, no } d\text{-orbitals} \Rightarrow \text{max covalency } 4;\ p\pi\text{–}p\pi \text{ multiple bonding}`, c: "Applies to B, C, N, O, F." }
    ],

    // ---------- Unit 11: d & f block ----------
    "chem:11:0": [
      { n: "General configuration (d-block)", t: R`(n - 1)d^{\,1-10}\,ns^{\,1-2}`, c: "Exceptions: Cr 3d⁵4s¹, Cu 3d¹⁰4s¹ (extra stability of half-filled / filled d)." },
      { n: "Spin-only magnetic moment", t: R`\mu = \sqrt{n(n + 2)}\ \text{BM}`, v: "n = number of unpaired electrons; BM = Bohr magneton." },
      { n: "Colour", t: R`\text{d–d transitions: absorbed } \Delta E = h\nu = \frac{hc}{\lambda}`, c: "Colour seen is complementary to the absorbed light; d⁰ and d¹⁰ ions are colourless." },
      { n: "KMnO₄ preparation", t: R`2\text{MnO}_2 + 4\text{KOH} + \text{O}_2 \rightarrow 2\text{K}_2\text{MnO}_4 + 2\text{H}_2\text{O};\quad 3\text{MnO}_4^{2-} + 4\text{H}^+ \rightarrow 2\text{MnO}_4^- + \text{MnO}_2 + 2\text{H}_2\text{O}` },
      { n: "KMnO₄ as oxidant", t: R`\text{Acidic: MnO}_4^- + 8\text{H}^+ + 5e^- \rightarrow \text{Mn}^{2+} + 4\text{H}_2\text{O};\qquad \text{Neutral/weakly basic: MnO}_4^- + 2\text{H}_2\text{O} + 3e^- \rightarrow \text{MnO}_2 + 4\text{OH}^-` },
      { n: "K₂Cr₂O₇ preparation", t: R`4\text{FeCr}_2\text{O}_4 + 8\text{Na}_2\text{CO}_3 + 7\text{O}_2 \rightarrow 8\text{Na}_2\text{CrO}_4 + 2\text{Fe}_2\text{O}_3 + 8\text{CO}_2`, c: "Then 2Na₂CrO₄ + 2H⁺ → Na₂Cr₂O₇ + 2Na⁺ + H₂O; Na₂Cr₂O₇ + 2KCl → K₂Cr₂O₇ + 2NaCl." },
      { n: "Chromate–dichromate equilibrium", t: R`2\text{CrO}_4^{2-}\ (\text{yellow}) + 2\text{H}^+ \rightleftharpoons \text{Cr}_2\text{O}_7^{2-}\ (\text{orange}) + \text{H}_2\text{O}`, c: "pH dependent." },
      { n: "K₂Cr₂O₇ as oxidant (acidic)", t: R`\text{Cr}_2\text{O}_7^{2-} + 14\text{H}^+ + 6e^- \rightarrow 2\text{Cr}^{3+} + 7\text{H}_2\text{O}` }
    ],
    "chem:11:1": [
      { n: "Lanthanoid configuration", t: R`[\text{Xe}]\,4f^{\,1-14}\,5d^{\,0-1}\,6s^2`, c: "Common oxidation state +3 (some +2, +4, e.g. Eu²⁺, Ce⁴⁺)." },
      { n: "Lanthanoid contraction", t: R`\text{Steady decrease in atomic and } \text{Ln}^{3+} \text{ radii from La to Lu}`, c: "Due to imperfect shielding by 4f electrons; makes 4d and 5d radii nearly equal (Zr ≈ Hf)." },
      { n: "Actinoid configuration", t: R`[\text{Rn}]\,5f^{\,1-14}\,6d^{\,0-1}\,7s^2`, c: "Wider range of oxidation states (+3 to +7) as 5f, 6d, 7s are close in energy." }
    ],

    // ---------- Unit 12: Coordination compounds ----------
    "chem:12:0": [
      { n: "Coordination number", t: R`\text{C.N.} = \text{number of ligand donor atoms bonded to the central atom}`, c: "Bidentate ligand (e.g. en, C₂O₄²⁻) contributes 2; EDTA⁴⁻ is hexadentate." },
      { n: "Oxidation state of central metal", t: R`x + \sum(\text{charges of ligands}) = \text{charge on the complex ion}` },
      { n: "Werner's theory", t: R`\text{Primary valence} = \text{oxidation state (ionisable)};\quad \text{Secondary valence} = \text{C.N. (non-ionisable, directional)}` },
      { n: "Geometrical isomers (common cases)", t: R`[\text{MA}_2\text{B}_2]\ \text{sq. planar: cis, trans};\quad [\text{MA}_4\text{B}_2]\ \text{oct.: cis, trans};\quad [\text{MA}_3\text{B}_3]\ \text{oct.: fac, mer}`, c: "Tetrahedral complexes show no geometrical isomerism." },
      { n: "Structural isomerism types", t: R`\text{Linkage (e.g. } -\text{NO}_2/-\text{ONO}),\ \text{coordination},\ \text{ionisation},\ \text{solvate (hydrate)}` }
    ],
    "chem:12:1": [
      { n: "VBT hybridisation and shape", t: R`\text{C.N. 4: } sp^3\ (\text{tetrahedral}),\ dsp^2\ (\text{square planar});\qquad \text{C.N. 6: } d^2sp^3\ (\text{inner}),\ sp^3d^2\ (\text{outer})\ \text{octahedral}` },
      { n: "Octahedral crystal field splitting", t: R`t_{2g}:\ -0.4\,\Delta_o;\qquad e_g:\ +0.6\,\Delta_o` },
      { n: "CFSE (octahedral)", t: R`\text{CFSE} = (-0.4\,n_{t_{2g}} + 0.6\,n_{e_g})\,\Delta_o\ (+\ \text{pairing energies } P)` },
      { n: "Tetrahedral splitting", t: R`\Delta_t = \frac{4}{9}\,\Delta_o`, c: "Order reversed: e lower, t₂ higher; tetrahedral complexes are almost always high-spin." },
      { n: "High spin vs low spin", t: R`\Delta_o < P:\ \text{high spin (weak field)};\qquad \Delta_o > P:\ \text{low spin (strong field)}` },
      { n: "Spectrochemical series", t: R`\text{I}^- < \text{Br}^- < \text{SCN}^- < \text{Cl}^- < \text{S}^{2-} < \text{F}^- < \text{OH}^- < \text{C}_2\text{O}_4^{2-} < \text{H}_2\text{O} < \text{NCS}^- < \text{edta}^{4-} < \text{NH}_3 < \text{en} < \text{CN}^- < \text{CO}` },
      { n: "Colour and magnetism", t: R`\Delta_o = h\nu = \frac{hc}{\lambda};\qquad \mu = \sqrt{n(n + 2)}\ \text{BM}`, c: "Absorbed light promotes t₂g → e_g; complementary colour is observed." }
    ],

    // ---------- Unit 13: Purification & characterisation ----------
    "chem:13:0": [
      { n: "Retardation factor (chromatography)", t: R`R_f = \frac{\text{Distance moved by the substance from base line}}{\text{Distance moved by the solvent from base line}}` },
      { n: "Lassaigne's test: nitrogen", t: R`\text{Na} + \text{C} + \text{N} \rightarrow \text{NaCN};\quad 3[\text{Fe(CN)}_6]^{4-} + 4\text{Fe}^{3+} \rightarrow \text{Fe}_4[\text{Fe(CN)}_6]_3\ (\text{Prussian blue})` },
      { n: "Lassaigne's test: sulphur", t: R`\text{S}^{2-} + [\text{Fe(CN)}_5\text{NO}]^{2-} \rightarrow [\text{Fe(CN)}_5\text{NOS}]^{4-}\ (\text{violet})`, c: "N and S together give SCN⁻ → blood red with Fe³⁺." },
      { n: "Lassaigne's test: halogens", t: R`\text{X}^- + \text{Ag}^+ \rightarrow \text{AgX}`, c: "AgCl white (soluble in NH₃), AgBr pale yellow (sparingly soluble), AgI yellow (insoluble)." },
      { n: "Phosphorus test", t: R`\text{Na}_3\text{PO}_4 + 3\text{HNO}_3 \rightarrow \text{H}_3\text{PO}_4 + 3\text{NaNO}_3;\ \ \text{+ ammonium molybdate} \rightarrow (\text{NH}_4)_3\text{PO}_4\cdot12\text{MoO}_3\ (\text{yellow})` },
      { n: "Carbon and hydrogen (Liebig)", t: R`\%\text{C} = \frac{12 \times m_{\text{CO}_2} \times 100}{44 \times m};\qquad \%\text{H} = \frac{2 \times m_{\text{H}_2\text{O}} \times 100}{18 \times m}`, v: "m = mass of organic compound." },
      { n: "Nitrogen (Dumas)", t: R`\%\text{N} = \frac{28 \times V_{\text{N}_2}\ (\text{mL at STP}) \times 100}{22400 \times m}` },
      { n: "Nitrogen (Kjeldahl)", t: R`\%\text{N} = \frac{1.4 \times M \times 2\left(V - \frac{V_1}{2}\right)}{m}`, v: "M = molarity of H₂SO₄, V = volume of acid taken (mL), V₁ = volume of NaOH (same molarity) used for back-titration.", c: "Not for nitro, azo compounds or N in a ring (pyridine)." },
      { n: "Halogens (Carius)", t: R`\%\text{X} = \frac{\text{atomic mass of X} \times m_{\text{AgX}} \times 100}{\text{molar mass of AgX} \times m}` },
      { n: "Sulphur (Carius)", t: R`\%\text{S} = \frac{32 \times m_{\text{BaSO}_4} \times 100}{233 \times m}` },
      { n: "Phosphorus", t: R`\%\text{P} = \frac{31 \times m_{\text{Mg}_2\text{P}_2\text{O}_7} \times 100}{222 \times m};\qquad \%\text{P} = \frac{31 \times m_{\text{(NH}_4)_3\text{PO}_4\cdot12\text{MoO}_3} \times 100}{1877 \times m}` },
      { n: "Oxygen", t: R`\%\text{O} = 100 - (\text{sum of percentages of all other elements})` },
      { n: "Empirical → molecular formula", t: R`n = \frac{\text{Molar mass}}{\text{Empirical formula mass}}` }
    ],

    // ---------- Unit 14: GOC ----------
    "chem:14:0": [
      { n: "Hybridisation of carbon", t: R`sp^3:\ 109.5^\circ,\ 25\%\ s;\qquad sp^2:\ 120^\circ,\ 33\%\ s;\qquad sp:\ 180^\circ,\ 50\%\ s`, c: "Greater s-character → shorter, stronger bond; more electronegative carbon." },
      { n: "Homologous series", t: R`\text{Successive members differ by } -\text{CH}_2-\ (14\ \text{u})` },
      { n: "Degree of unsaturation (DBE)", t: R`\text{DBE} = C - \frac{H}{2} - \frac{X}{2} + \frac{N}{2} + 1`, v: "Rings + π bonds; X = halogens; O and S are ignored." },
      { n: "Stereoisomers", t: R`\text{Maximum number of optical isomers} = 2^n`, v: "n = number of chiral (stereogenic) centres.", c: "Fewer if the molecule has symmetry (meso forms)." },
      { n: "Bond fission", t: R`\text{Homolytic: A}{:}\text{B} \rightarrow \text{A}^{\bullet} + \text{B}^{\bullet};\qquad \text{Heterolytic: A}{:}\text{B} \rightarrow \text{A}^+ + {:}\text{B}^-` },
      { n: "Stability of carbocations and free radicals", t: R`3^\circ > 2^\circ > 1^\circ > \text{CH}_3`, c: "Due to +I effect and hyperconjugation. Carbanions: CH₃⁻ > 1° > 2° > 3°." },
      { n: "Inductive effect", t: R`-I:\ -\text{NO}_2 > -\text{CN} > -\text{COOH} > -\text{F} > -\text{Cl} > -\text{Br} > -\text{I};\qquad +I:\ (\text{CH}_3)_3\text{C}- > (\text{CH}_3)_2\text{CH}- > \text{CH}_3\text{CH}_2- > \text{CH}_3-`, c: "Permanent; decreases rapidly along the chain." },
      { n: "Hyperconjugation", t: R`\text{No. of hyperconjugative structures} = \text{number of } \alpha\text{-H atoms}` },
      { n: "Electrophiles and nucleophiles", t: R`\text{Electrophile: } e^-\text{ pair acceptor (H}^+, \text{NO}_2^+, \text{R}_3\text{C}^+);\quad \text{Nucleophile: } e^-\text{ pair donor (OH}^-, \text{CN}^-, \text{NH}_3)` },
      { n: "Reaction types", t: R`\text{Substitution},\ \text{addition},\ \text{elimination},\ \text{rearrangement}` }
    ],

    // ---------- Unit 15: Hydrocarbons ----------
    "chem:15:0": [
      { n: "General formulas", t: R`\text{Alkanes } \text{C}_n\text{H}_{2n+2};\quad \text{Alkenes } \text{C}_n\text{H}_{2n};\quad \text{Alkynes } \text{C}_n\text{H}_{2n-2};\quad \text{Cycloalkanes } \text{C}_n\text{H}_{2n}` },
      { n: "Combustion", t: R`\text{C}_x\text{H}_y + \left(x + \frac{y}{4}\right)\text{O}_2 \rightarrow x\,\text{CO}_2 + \frac{y}{2}\,\text{H}_2\text{O}` },
      { n: "Wurtz reaction", t: R`2\text{RX} + 2\text{Na} \xrightarrow{\text{dry ether}} \text{R–R} + 2\text{NaX}` },
      { n: "Decarboxylation", t: R`\text{RCOONa} + \text{NaOH} \xrightarrow{\text{CaO},\ \Delta} \text{R–H} + \text{Na}_2\text{CO}_3` },
      { n: "Halogenation of alkanes", t: R`\text{Reactivity: F}_2 > \text{Cl}_2 > \text{Br}_2 > \text{I}_2;\qquad \text{H abstraction: } 3^\circ > 2^\circ > 1^\circ`, c: "Free-radical chain: initiation, propagation, termination." },
      { n: "Conformations of ethane", t: R`\text{Staggered more stable than eclipsed};\ \ \Delta E \approx 12.5\ \text{kJ mol}^{-1}`, c: "Torsional strain; Sawhorse and Newman projections." },
      { n: "Markovnikov's rule", t: R`\text{H}^+ \text{ adds to the double-bonded C carrying more H atoms}`, c: "Peroxide (Kharasch) effect reverses this for HBr only." },
      { n: "Ozonolysis", t: R`\text{R}_2\text{C}{=}\text{CR}'_2 \xrightarrow{\text{O}_3,\ \text{Zn/H}_2\text{O}} \text{R}_2\text{C}{=}\text{O} + \text{O}{=}\text{CR}'_2` },
      { n: "Acidity", t: R`\text{HC}{\equiv}\text{CH} > \text{H}_2\text{C}{=}\text{CH}_2 > \text{H}_3\text{C–CH}_3`, c: "sp carbon has highest s-character; terminal alkynes react with Na/NaNH₂." },
      { n: "Hückel's rule (aromaticity)", t: R`(4n + 2)\ \pi \text{ electrons},\ n = 0, 1, 2, \dots`, c: "Planar, cyclic, fully conjugated." },
      { n: "Directive influence", t: R`o/p\text{-directors: }-\text{OH}, -\text{NH}_2, -\text{OCH}_3, -\text{CH}_3, -\text{X};\qquad m\text{-directors: }-\text{NO}_2, -\text{CN}, -\text{CHO}, -\text{COOH}, -\text{SO}_3\text{H}`, c: "Halogens are o/p directing but deactivating." },
      { n: "Friedel–Crafts", t: R`\text{C}_6\text{H}_6 + \text{RCl} \xrightarrow{\text{anhyd. AlCl}_3} \text{C}_6\text{H}_5\text{R} + \text{HCl};\qquad \text{C}_6\text{H}_6 + \text{RCOCl} \xrightarrow{\text{anhyd. AlCl}_3} \text{C}_6\text{H}_5\text{COR} + \text{HCl}` },
      { n: "Nitration electrophile", t: R`\text{HNO}_3 + 2\text{H}_2\text{SO}_4 \rightarrow \text{NO}_2^+ + \text{H}_3\text{O}^+ + 2\text{HSO}_4^-` }
    ],

    // ---------- Unit 20: Practical chemistry ----------
    "chem:20:0": [
      { n: "Titration (molarity equation)", t: R`\frac{M_1V_1}{n_1} = \frac{M_2V_2}{n_2}`, v: "n₁, n₂ = stoichiometric coefficients of the two reactants in the balanced equation." },
      { n: "KMnO₄ vs oxalic acid", t: R`2\text{MnO}_4^- + 5\text{C}_2\text{O}_4^{2-} + 16\text{H}^+ \rightarrow 2\text{Mn}^{2+} + 10\text{CO}_2 + 8\text{H}_2\text{O}`, c: "Warm to 60–70 °C; KMnO₄ is self-indicator (colourless → light pink)." },
      { n: "KMnO₄ vs Mohr's salt", t: R`\text{MnO}_4^- + 5\text{Fe}^{2+} + 8\text{H}^+ \rightarrow \text{Mn}^{2+} + 5\text{Fe}^{3+} + 4\text{H}_2\text{O}`, c: "Done cold, in dil. H₂SO₄." },
      { n: "Acid–base indicators", t: R`\text{Phenolphthalein: } 8.2\text{–}10\ (\text{colourless} \to \text{pink});\qquad \text{Methyl orange: } 3.1\text{–}4.4\ (\text{red} \to \text{yellow})`, c: "Strong acid–weak base: methyl orange; weak acid–strong base: phenolphthalein." },
      { n: "Mohr's salt / potash alum", t: R`\text{FeSO}_4\cdot(\text{NH}_4)_2\text{SO}_4\cdot6\text{H}_2\text{O};\qquad \text{K}_2\text{SO}_4\cdot\text{Al}_2(\text{SO}_4)_3\cdot24\text{H}_2\text{O}`, c: "Crystallised from equimolar solutions with a little dil. H₂SO₄ to prevent hydrolysis." },
      { n: "Acetanilide", t: R`\text{C}_6\text{H}_5\text{NH}_2 + (\text{CH}_3\text{CO})_2\text{O} \rightarrow \text{C}_6\text{H}_5\text{NHCOCH}_3 + \text{CH}_3\text{COOH}`, c: "p-Nitroacetanilide: nitration of acetanilide with conc. HNO₃/H₂SO₄ (para product)." },
      { n: "Aniline yellow (p-aminoazobenzene)", t: R`\text{C}_6\text{H}_5\text{N}_2^+\text{Cl}^- + \text{C}_6\text{H}_5\text{NH}_2 \rightarrow p\text{-H}_2\text{N–C}_6\text{H}_4\text{–N}{=}\text{N–C}_6\text{H}_5 + \text{HCl}` },
      { n: "Iodoform", t: R`\text{CH}_3\text{CH}_2\text{OH} + 4\text{I}_2 + 6\text{NaOH} \rightarrow \text{CHI}_3 + \text{HCOONa} + 5\text{NaI} + 5\text{H}_2\text{O}`, c: "Yellow precipitate; test for CH₃CO– / CH₃CH(OH)– groups." },
      { n: "Functional group tests", t: R`\text{Phenol: neutral FeCl}_3 \to \text{violet};\ \ \text{C=O: 2,4-DNP} \to \text{orange ppt};\ \ \text{–COOH: NaHCO}_3 \to \text{CO}_2\uparrow` },
      { n: "Aldehyde (Tollens')", t: R`\text{RCHO} + 2[\text{Ag(NH}_3)_2]^+ + 3\text{OH}^- \rightarrow \text{RCOO}^- + 2\text{Ag}\downarrow + 2\text{H}_2\text{O} + 4\text{NH}_3`, c: "Silver mirror; ketones do not respond." },
      { n: "Primary amine (carbylamine)", t: R`\text{RNH}_2 + \text{CHCl}_3 + 3\text{KOH} \xrightarrow{\Delta} \text{RNC} + 3\text{KCl} + 3\text{H}_2\text{O}`, c: "Offensive smell of isocyanide." },
      { n: "Alcohols (Lucas test)", t: R`\text{ZnCl}_2/\text{conc. HCl}:\ 3^\circ \text{ immediate turbidity},\ 2^\circ \text{ in ~5 min},\ 1^\circ \text{ no turbidity at room temperature}` },
      { n: "Cation group reagents", t: R`\begin{array}{ll} \text{0: NH}_4^+ & \text{NaOH, heat (NH}_3) \\ \text{I: Pb}^{2+} & \text{dil. HCl} \\ \text{II: Pb}^{2+}, \text{Cu}^{2+} & \text{H}_2\text{S in dil. HCl} \\ \text{III: Al}^{3+}, \text{Fe}^{3+} & \text{NH}_4\text{OH} + \text{NH}_4\text{Cl} \\ \text{IV: Zn}^{2+}, \text{Ni}^{2+} & \text{H}_2\text{S in NH}_4\text{OH} \\ \text{V: Ca}^{2+}, \text{Ba}^{2+} & (\text{NH}_4)_2\text{CO}_3 \text{ in NH}_4\text{OH} \\ \text{VI: Mg}^{2+} & \text{Na}_2\text{HPO}_4 \end{array}` },
      { n: "Principle of group separation", t: R`\text{Precipitation when ionic product} > K_{sp}`, c: "Common-ion effect: H⁺ suppresses [S²⁻] in Group II; NH₄Cl suppresses [OH⁻] in Group III." },
      { n: "Anion tests (dil. H₂SO₄ group)", t: R`\text{CO}_3^{2-} \to \text{CO}_2 \text{ (lime water milky)};\ \ \text{S}^{2-} \to \text{H}_2\text{S (lead acetate paper black)};\ \ \text{NO}_2^- \to \text{brown NO}_2` },
      { n: "Anion tests (conc. H₂SO₄ / others)", t: R`\text{Cl}^- \to \text{HCl};\ \text{Br}^- \to \text{Br}_2 \text{ (orange)};\ \text{I}^- \to \text{I}_2 \text{ (violet)};\ \text{NO}_3^- \to \text{brown ring};\ \text{SO}_4^{2-} + \text{Ba}^{2+} \to \text{BaSO}_4 \text{ (white)}` },
      { n: "Enthalpy measurement (calorimetry)", t: R`q = (m\,c + W)\,\Delta T;\qquad \Delta H = -\frac{q}{n}`, v: "W = water equivalent of calorimeter, n = moles reacting / dissolved." },
      { n: "Neutralisation (strong acid + strong base)", t: R`\text{H}^+(aq) + \text{OH}^-(aq) \rightarrow \text{H}_2\text{O}(l);\quad \Delta_nH \approx -57\ \text{kJ mol}^{-1}`, c: "Less negative for weak acids/bases (energy used for ionisation)." },
      { n: "Enthalpy of solution of CuSO₄", t: R`\Delta_{sol}H = -\frac{q}{n_{\text{CuSO}_4}}` },
      { n: "Lyophobic sol (hydrolysis)", t: R`\text{FeCl}_3 + 3\text{H}_2\text{O} \xrightarrow{\text{boiling}} \text{Fe(OH)}_3\ (\text{sol}) + 3\text{HCl}`, c: "Lyophilic sols (starch, gum) form directly on warming with water." },
      { n: "Kinetics: iodide + H₂O₂", t: R`\text{H}_2\text{O}_2 + 2\text{I}^- + 2\text{H}^+ \rightarrow \text{I}_2 + 2\text{H}_2\text{O};\qquad \text{I}_2 + 2\text{S}_2\text{O}_3^{2-} \rightarrow 2\text{I}^- + \text{S}_4\text{O}_6^{2-}`, c: "Time for blue starch–iodine colour to appear gives the rate (clock reaction)." }
    ]
  });
})();
