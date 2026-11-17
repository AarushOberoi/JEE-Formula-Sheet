/* Chemistry — structure from the official JEE Main syllabus; formulas only from the provided books:
   NCERT Chemistry Class XI Part I (kech101–106) and Class XII Part II (lech201–205).
   Class XI Part II and Class XII Part I were NOT provided, so topics found only there are gaps. */
window.FORMULA_DATA = window.FORMULA_DATA || {};
(function () {
  const C11 = (u) => `NCERT Chemistry XI Part I, Unit ${u}`;
  const C12 = (u) => `NCERT Chemistry XII Part II, Unit ${u}`;
  const R = String.raw;
  const GAP11 = "This unit is in NCERT Chemistry Class XI Part II, which is not in the books folder.";
  const GAP12 = "This unit is in NCERT Chemistry Class XII Part I, which is not in the books folder.";

  window.FORMULA_DATA.chem = {
    id: "chem",
    name: "Chemistry",
    tagline: "Physical · Inorganic · Organic",
    chapters: [
      {
        unit: 1, section: "Physical Chemistry",
        title: "Some Basic Concepts in Chemistry",
        status: "covered",
        topics: [
          {
            title: "Atomic and molecular masses",
            formulas: [
              { n: "Atomic mass unit", t: R`1\,\text{amu} = 1\,\text{u} = \tfrac{1}{12}\times\text{mass of one } {}^{12}\text{C atom} = 1.66056\times10^{-24}\,\text{g}`, s: C11(1) },
              { n: "Average atomic mass", t: R`\bar{A} = \sum_i (\text{fractional abundance})_i \times (\text{isotopic mass})_i`, c: "Accounts for the natural abundance of isotopes.", s: C11(1) },
              { n: "Molecular mass", t: R`M = \sum (\text{atomic masses of all atoms in the molecule})`, s: C11(1) }
            ]
          },
          {
            title: "Mole concept and molar mass",
            formulas: [
              { n: "Avogadro constant", t: R`1\ \text{mol} = N_A = 6.022\,140\,76\times10^{23}\ \text{entities}`, s: C11(1) },
              { n: "Number of moles", t: R`n = \frac{\text{mass (g)}}{\text{molar mass (g mol}^{-1})} = \frac{N}{N_A}`, v: "N = number of particles.", s: C11(1) },
              { n: "Molar mass", t: R`\text{Molar mass (g mol}^{-1}) = \text{numerically equal to atomic/molecular mass in u}`, s: C11(1) }
            ]
          },
          {
            title: "Percentage composition",
            formulas: [
              { n: "Mass per cent of an element", t: R`\text{Mass \% of element} = \frac{\text{mass of that element in the compound}}{\text{molar mass of the compound}} \times 100`, s: C11(1) }
            ]
          },
          {
            title: "Empirical and molecular formulae",
            formulas: [
              { n: "Molecular formula", t: R`\text{Molecular formula} = n \times \text{Empirical formula},\qquad n = \frac{\text{Molar mass}}{\text{Empirical formula mass}}`, c: "Steps: mass % → moles of each element → simplest whole-number ratio.", s: C11(1) }
            ]
          },
          {
            title: "Chemical equations and stoichiometry",
            formulas: [
              { n: "Stoichiometric ratio", t: R`aA + bB \rightarrow cC + dD:\qquad \frac{n_A}{a} = \frac{n_B}{b} = \frac{n_C}{c} = \frac{n_D}{d}`, c: "The limiting reagent is the reactant that is used up first; it decides the amount of product.", s: C11(1) }
            ]
          }
        ]
      },
      {
        unit: 2, section: "Physical Chemistry",
        title: "Atomic Structure",
        status: "covered",
        topics: [
          {
            title: "Sub-atomic particles",
            formulas: [
              { n: "Charge to mass ratio of electron", t: R`\frac{e}{m_e} = 1.758820\times10^{11}\ \text{C kg}^{-1};\qquad m_e = 9.1094\times10^{-31}\ \text{kg}`, s: C11(2) },
              { n: "Atomic and mass number", t: R`Z = \text{no. of protons} = \text{no. of electrons (neutral atom)};\qquad A = \text{protons} + \text{neutrons}`, s: C11(2) }
            ]
          },
          {
            title: "Nature of electromagnetic radiation",
            formulas: [
              { n: "Wave relation", t: R`c = \nu\lambda`, v: "c = 3.0 × 10⁸ m s⁻¹, ν = frequency (Hz), λ = wavelength (m).", s: C11(2) },
              { n: "Wavenumber", t: R`\bar{\nu} = \frac{1}{\lambda}`, v: "Units: m⁻¹ or cm⁻¹.", s: C11(2) },
              { n: "Planck's quantum theory", t: R`E = h\nu = \frac{hc}{\lambda}`, v: "h = 6.626 × 10⁻³⁴ J s", s: C11(2) }
            ]
          },
          {
            title: "Photoelectric effect",
            formulas: [
              { n: "Einstein's equation", t: R`h\nu = h\nu_0 + \frac{1}{2}m_e v^2`, v: "hν₀ = W₀ = work function (minimum energy to eject an electron); ν₀ = threshold frequency.", s: C11(2) }
            ]
          },
          {
            title: "Spectrum of the hydrogen atom",
            formulas: [
              { n: "Balmer series", t: R`\bar{\nu} = 109{,}677\left(\frac{1}{2^2} - \frac{1}{n^2}\right)\ \text{cm}^{-1}`, c: "n = 3, 4, 5, …; the only series in the visible region.", s: C11(2) },
              { n: "Rydberg formula", t: R`\bar{\nu} = 109{,}677\left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right)\ \text{cm}^{-1}`, c: "n₁ = 1, 2, …; n₂ = n₁ + 1, n₁ + 2, … (Lyman n₁=1, Balmer 2, Paschen 3, Brackett 4, Pfund 5). 109,677 cm⁻¹ = Rydberg constant for hydrogen.", s: C11(2) }
            ]
          },
          {
            title: "Bohr model of hydrogen atom — energy and radii of orbits",
            formulas: [
              { n: "Bohr frequency condition", t: R`\nu = \frac{\Delta E}{h} = \frac{E_2 - E_1}{h}`, s: C11(2) },
              { n: "Quantisation of angular momentum", t: R`m_e v r = n\,\frac{h}{2\pi},\quad n = 1, 2, 3, \dots`, s: C11(2) },
              { n: "Radius of orbits (H atom)", t: R`r_n = n^2 a_0,\qquad a_0 = 52.9\ \text{pm}`, s: C11(2) },
              { n: "Energy of electron (H atom)", t: R`E_n = -R_H\left(\frac{1}{n^2}\right),\qquad R_H = 2.18\times10^{-18}\ \text{J}`, c: "E = 0 for a free electron (n = ∞); negative energy means the bound state is stable.", s: C11(2) },
              { n: "Hydrogen-like ions (He⁺, Li²⁺ …)", t: R`E_n = -2.18\times10^{-18}\left(\frac{Z^2}{n^2}\right)\ \text{J};\qquad r_n = \frac{52.9\,n^2}{Z}\ \text{pm}`, s: C11(2) },
              { n: "Energy of transition", t: R`\Delta E = E_f - E_i = R_H\left(\frac{1}{n_i^2} - \frac{1}{n_f^2}\right)`, c: "nf > ni: absorption (ΔE positive); ni > nf: emission (ΔE negative).", s: C11(2) },
              { n: "Frequency and wavenumber of a line", t: R`\nu = 3.29\times10^{15}\left(\frac{1}{n_i^2} - \frac{1}{n_f^2}\right)\ \text{Hz};\qquad \bar\nu = 1.09677\times10^{7}\left(\frac{1}{n_i^2} - \frac{1}{n_f^2}\right)\ \text{m}^{-1}`, s: C11(2) }
            ]
          },
          {
            title: "Dual nature of matter; de Broglie relationship",
            formulas: [
              { n: "de Broglie wavelength", t: R`\lambda = \frac{h}{mv} = \frac{h}{p}`, v: "m = mass, v = velocity, p = momentum of the particle.", s: C11(2) }
            ]
          },
          {
            title: "Heisenberg uncertainty principle",
            formulas: [
              { n: "Uncertainty principle", t: R`\Delta x \cdot \Delta p_x \ge \frac{h}{4\pi};\qquad \Delta x \cdot \Delta(mv_x) \ge \frac{h}{4\pi};\qquad \Delta x \cdot \Delta v_x \ge \frac{h}{4\pi m}`, s: C11(2) }
            ]
          },
          {
            title: "Quantum mechanical model; ψ and ψ²; quantum numbers",
            formulas: [
              { n: "Schrödinger equation", t: R`\hat{H}\psi = E\psi`, v: "Ĥ = Hamiltonian operator; ψ = wave function; |ψ|² = probability density.", s: C11(2) },
              { n: "Orbitals in a subshell", t: R`\text{No. of orbitals} = 2l + 1;\quad m_l = -l, \dots, 0, \dots, +l`, s: C11(2) },
              { n: "Maximum electrons in shell n", t: R`2n^2`, s: C11(2) },
              { n: "Nodes", t: R`\text{Radial nodes} = n - l - 1;\qquad \text{Angular nodes} = l;\qquad \text{Total nodes} = n - 1`, s: C11(2) },
              { n: "Energy order (multi-electron atoms)", t: R`\text{Lower } (n + l) \Rightarrow \text{lower energy; equal } (n + l) \Rightarrow \text{lower } n \text{ has lower energy}`, c: "In hydrogen, energy depends only on n: 1s < 2s = 2p < 3s = 3p = 3d < 4s = …", s: C11(2) }
            ]
          }
        ]
      },
      {
        unit: 3, section: "Physical Chemistry",
        title: "Chemical Bonding and Molecular Structure",
        status: "covered",
        topics: [
          {
            title: "Kossel–Lewis approach; formal charge",
            formulas: [
              { n: "Formal charge", t: R`\text{F.C.} = V - L - \tfrac{1}{2}S`, v: "V = valence electrons of the free atom, L = non-bonding (lone pair) electrons, S = shared (bonding) electrons.", c: "Lowest-energy structure has the smallest formal charges.", s: C11(4) }
            ]
          },
          {
            title: "Ionic bonding — lattice enthalpy",
            formulas: [
              { n: "Lattice enthalpy", t: R`\text{MX(s)} \rightarrow \text{M}^{+}(\text{g}) + \text{X}^{-}(\text{g});\qquad \Delta_{\text{lattice}}H > 0`, c: "Energy needed to separate one mole of a solid ionic compound into gaseous ions; found indirectly from the Born–Haber cycle (Hess's law).", s: C11(4) + "; " + C11(5) }
            ]
          },
          {
            title: "Covalent bonding — dipole moment",
            formulas: [
              { n: "Dipole moment", t: R`\mu = Q \times r`, v: "Q = magnitude of charge, r = distance between the charges. Unit: debye; 1 D = 3.33564 × 10⁻³⁰ C m.", c: "Dipole moment is a vector; for a polyatomic molecule it is the vector sum of bond dipoles.", s: C11(4) }
            ]
          },
          {
            title: "Molecular orbital theory — bond order, bond length and bond energy",
            formulas: [
              { n: "LCAO", t: R`\sigma = \psi_A + \psi_B\ (\text{bonding}),\qquad \sigma^{*} = \psi_A - \psi_B\ (\text{antibonding})`, s: C11(4) },
              { n: "Bond order (MOT)", t: R`\text{B.O.} = \tfrac{1}{2}\,(N_b - N_a)`, v: "N_b = electrons in bonding MOs, N_a = electrons in antibonding MOs.", c: "B.O. > 0: stable molecule; B.O. ≤ 0 (N_b ≤ N_a): molecule does not exist. Higher B.O. → shorter bond length, higher bond enthalpy.", s: C11(4) },
              { n: "Magnetic nature", t: R`\text{Unpaired electrons in MOs} \Rightarrow \text{paramagnetic};\ \ \text{all paired} \Rightarrow \text{diamagnetic}`, s: C11(4) }
            ]
          }
        ]
      },
      {
        unit: 4, section: "Physical Chemistry",
        title: "Chemical Thermodynamics",
        status: "covered",
        topics: [
          {
            title: "First law of thermodynamics — work, heat and internal energy",
            formulas: [
              { n: "First law", t: R`\Delta U = q + w`, c: "Sign convention: q and w are positive when added to the system. ΔU is a state function; q and w are path functions.", s: C11(5) },
              { n: "Adiabatic process", t: R`\Delta U = w_{ad}\qquad (q = 0)`, s: C11(5) },
              { n: "Pressure–volume work", t: R`w = -p_{ex}\,\Delta V = -p_{ex}(V_f - V_i)`, s: C11(5) },
              { n: "Reversible work", t: R`w_{rev} = -\int_{V_i}^{V_f} p\,dV`, s: C11(5) },
              { n: "Isothermal reversible expansion (ideal gas)", t: R`w_{rev} = -nRT\ln\frac{V_f}{V_i} = -2.303\,nRT\log\frac{V_f}{V_i}`, s: C11(5) },
              { n: "Free expansion", t: R`p_{ex} = 0 \;\Rightarrow\; w = 0`, s: C11(5) },
              { n: "Isothermal changes of an ideal gas (ΔU = 0)", t: R`\text{Irreversible: } q = -w = p_{ex}(V_f - V_i);\qquad \text{Reversible: } q = -w = 2.303\,nRT\log\frac{V_f}{V_i}`, s: C11(5) },
              { n: "Constant volume", t: R`\Delta U = q_V`, s: C11(5) }
            ]
          },
          {
            title: "Enthalpy",
            formulas: [
              { n: "Enthalpy", t: R`H = U + pV`, s: C11(5) },
              { n: "Constant pressure", t: R`\Delta H = \Delta U + p\Delta V = q_p`, s: C11(5) },
              { n: "ΔH and ΔU for gaseous reactions", t: R`\Delta H = \Delta U + \Delta n_g RT`, v: "Δn_g = moles of gaseous products − moles of gaseous reactants.", s: C11(5) }
            ]
          },
          {
            title: "Heat capacity and molar heat capacity",
            formulas: [
              { n: "Heat and heat capacity", t: R`q = C\,\Delta T`, s: C11(5) },
              { n: "Specific heat", t: R`q = c \times m \times \Delta T = C\,\Delta T`, v: "c = specific heat capacity, m = mass.", s: C11(5) },
              { n: "At constant V and p", t: R`q_V = C_V\Delta T = \Delta U;\qquad q_p = C_p\Delta T = \Delta H`, s: C11(5) },
              { n: "Mayer's relation (ideal gas)", t: R`C_p - C_V = R`, c: "Molar heat capacities of an ideal gas.", s: C11(5) }
            ]
          },
          {
            title: "Hess's law; enthalpies of formation, combustion, atomization, sublimation, phase transition, hydration, solution",
            formulas: [
              { n: "Standard enthalpy of reaction", t: R`\Delta_r H^{\ominus} = \sum_i a_i\,\Delta_f H^{\ominus}(\text{products}) - \sum_i b_i\,\Delta_f H^{\ominus}(\text{reactants})`, v: "aᵢ, bᵢ = stoichiometric coefficients.", s: C11(5) },
              { n: "Hess's law of constant heat summation", t: R`\Delta_r H = \Delta_r H_1 + \Delta_r H_2 + \Delta_r H_3 + \cdots`, c: "Enthalpy change is the same whether the reaction occurs in one step or many.", s: C11(5) },
              { n: "Phase transitions", t: R`\Delta_{sub}H^{\ominus} = \Delta_{fus}H^{\ominus} + \Delta_{vap}H^{\ominus}`, c: "Fusion, vaporisation and sublimation enthalpies are always positive.", s: C11(5) },
              { n: "Enthalpy of solution", t: R`\Delta_{sol}H^{\ominus} = \Delta_{lattice}H^{\ominus} + \Delta_{hyd}H^{\ominus}`, s: C11(5) }
            ]
          },
          {
            title: "Enthalpies of bond dissociation",
            formulas: [
              { n: "From bond enthalpies (gas phase)", t: R`\Delta_r H^{\ominus} = \sum \text{bond enthalpies}_{\text{reactants}} - \sum \text{bond enthalpies}_{\text{products}}`, c: "Valid for reactions in the gaseous state.", s: C11(5) }
            ]
          },
          {
            title: "Second law — entropy; ΔS of universe and ΔG as criteria for spontaneity",
            formulas: [
              { n: "Entropy change", t: R`\Delta S = \frac{q_{rev}}{T}`, s: C11(5) },
              { n: "Total entropy change", t: R`\Delta S_{total} = \Delta S_{sys} + \Delta S_{surr} > 0`, c: "For a spontaneous process. At equilibrium ΔS_total = 0. Isolated system: ΔU = 0, ΔS > 0.", s: C11(5) },
              { n: "Gibbs energy", t: R`G = H - TS;\qquad \Delta G = \Delta H - T\Delta S`, s: C11(5) },
              { n: "Spontaneity criterion", t: R`\Delta G < 0 \ (\text{spontaneous}),\quad \Delta G = 0 \ (\text{equilibrium}),\quad \Delta G > 0\ (\text{non-spontaneous})`, s: C11(5) },
              { n: "Relation with ΔS_total", t: R`T\Delta S_{total} = T\Delta S_{sys} - \Delta H_{sys} = -\Delta G`, c: "So ΔS_total > 0 ⇔ ΔG < 0 (at constant T and p).", s: C11(5) }
            ]
          },
          {
            title: "ΔG° (standard Gibbs energy change) and equilibrium constant",
            formulas: [
              { n: "Standard Gibbs energy and K", t: R`\Delta_r G^{\ominus} = -RT\ln K = -2.303\,RT\log K`, s: C11(5) },
              { n: "", t: R`\Delta_r G^{\ominus} = \Delta_r H^{\ominus} - T\Delta_r S^{\ominus} = -RT\ln K`, s: C11(5) }
            ]
          }
        ]
      },
      {
        unit: 5, section: "Physical Chemistry",
        title: "Solutions",
        status: "partial",
        note: "Concentration terms come from NCERT XI Unit 1 (Reactions in Solutions). Vapour pressure, Raoult's law, colligative properties and the van't Hoff factor are in NCERT Chemistry XII Part I, which was not provided.",
        topics: [
          {
            title: "Methods for expressing concentration — molality, molarity, mole fraction, percentage",
            formulas: [
              { n: "Mass per cent (w/w)", t: R`\text{Mass \%} = \frac{\text{Mass of solute}}{\text{Mass of solution}} \times 100`, s: C11(1) },
              { n: "Mole fraction", t: R`x_A = \frac{n_A}{n_A + n_B},\qquad x_B = \frac{n_B}{n_A + n_B},\qquad x_A + x_B = 1`, s: C11(1) },
              { n: "Molarity", t: R`M = \frac{\text{No. of moles of solute}}{\text{Volume of solution in litres}}`, c: "Unit mol L⁻¹; depends on temperature because volume changes with temperature.", s: C11(1) },
              { n: "Molality", t: R`m = \frac{\text{No. of moles of solute}}{\text{Mass of solvent in kg}}`, c: "Unit mol kg⁻¹; does not change with temperature.", s: C11(1) },
              { n: "Dilution", t: R`M_1 V_1 = M_2 V_2`, c: "Moles of solute are unchanged on dilution.", s: C11(1) },
              { n: "Percentage by volume", t: R`\text{(not in the provided books)}`, gapItem: true, s: "—" }
            ]
          },
          { title: "Vapour pressure of solutions and Raoult's law; ideal and non-ideal solutions; vapour pressure–composition plots", gap: true },
          { title: "Colligative properties: relative lowering of vapour pressure, depression of freezing point, elevation of boiling point, osmotic pressure", gap: true },
          { title: "Determination of molecular mass; abnormal molar mass; van't Hoff factor", gap: true }
        ]
      },
      {
        unit: 6, section: "Physical Chemistry",
        title: "Equilibrium",
        status: "covered",
        topics: [
          {
            title: "Equilibria involving physical processes; Henry's law",
            formulas: [
              { n: "Henry's law", t: R`\text{Mass of gas dissolved in a given mass of solvent} \propto \text{pressure of the gas above the solvent}`, c: "At a given temperature.", s: C11(6) }
            ]
          },
          {
            title: "Law of chemical equilibrium; equilibrium constants Kp and Kc",
            formulas: [
              { n: "Equilibrium constant (Kc)", t: R`aA + bB \rightleftharpoons cC + dD:\qquad K_c = \frac{[C]^c[D]^d}{[A]^a[B]^b}`, c: "Equilibrium concentrations; constant at a fixed temperature.", s: C11(6) },
              { n: "Reverse reaction", t: R`K'_c = \frac{1}{K_c}`, s: C11(6) },
              { n: "Equation multiplied by n", t: R`K''_c = (K_c)^{n}`, c: "e.g. halving the equation gives K_c^{1/2}.", s: C11(6) },
              { n: "Kp in terms of partial pressures", t: R`K_p = \frac{p_C^{\,c}\;p_D^{\,d}}{p_A^{\,a}\;p_B^{\,b}}`, s: C11(6) },
              { n: "Relation between Kp and Kc", t: R`K_p = K_c\,(RT)^{\Delta n}`, v: "Δn = (moles of gaseous products) − (moles of gaseous reactants); R = 0.0831 bar L mol⁻¹ K⁻¹.", s: C11(6) },
              { n: "Heterogeneous equilibrium", t: R`\text{CaCO}_3(s) \rightleftharpoons \text{CaO}(s) + \text{CO}_2(g):\qquad K_c = [\text{CO}_2],\quad K_p = p_{\text{CO}_2}`, c: "Pure solids and liquids are omitted (activity = 1).", s: C11(6) },
              { n: "Combined reactions", t: R`K_{NET} = K_1 \times K_2 \times \cdots`, s: C11(6) }
            ]
          },
          {
            title: "Significance of K; reaction quotient",
            formulas: [
              { n: "Reaction quotient", t: R`Q_c = \frac{[C]^c[D]^d}{[A]^a[B]^b}\ \ (\text{any instant})`, c: "Q_c > K_c: reverse reaction; Q_c < K_c: forward reaction; Q_c = K_c: at equilibrium.", s: C11(6) }
            ]
          },
          {
            title: "Significance of ΔG and ΔG° in chemical equilibrium",
            formulas: [
              { n: "", t: R`\Delta G = \Delta G^{\ominus} + RT\ln Q`, s: C11(6) },
              { n: "At equilibrium", t: R`\Delta G^{\ominus} = -RT\ln K;\qquad K = e^{-\Delta G^{\ominus}/RT}`, c: "ΔG° < 0 → K > 1 (products favoured); ΔG° > 0 → K < 1.", s: C11(6) }
            ]
          },
          {
            title: "Ionization of water; pH scale",
            formulas: [
              { n: "Ionic product of water", t: R`K_w = [\text{H}^+][\text{OH}^-] = 1\times10^{-14}\ \text{M}^2\ \ (298\ \text{K})`, s: C11(6) },
              { n: "pH and pOH", t: R`\text{pH} = -\log[\text{H}^+],\qquad \text{pOH} = -\log[\text{OH}^-]`, c: "Acidic pH < 7, basic pH > 7, neutral pH = 7 (at 298 K).", s: C11(6) },
              { n: "", t: R`\text{p}K_w = \text{pH} + \text{pOH} = 14`, s: C11(6) }
            ]
          },
          {
            title: "Acid–base equilibria and ionization constants (incl. multistage ionization)",
            formulas: [
              { n: "Weak acid", t: R`K_a = \frac{[\text{H}^+][\text{X}^-]}{[\text{HX}]},\qquad \text{p}K_a = -\log K_a`, s: C11(6) },
              { n: "Degree of ionization", t: R`K_a = \frac{c\alpha^2}{1 - \alpha};\qquad [\text{H}^+] = c\alpha`, v: "c = initial concentration, α = degree of ionization.", s: C11(6) },
              { n: "Percent dissociation", t: R`\%\ \text{dissociation} = \frac{[\text{HA}]_{dissociated}}{[\text{HA}]_{initial}}\times100`, s: C11(6) },
              { n: "Weak base", t: R`K_b = \frac{[\text{M}^+][\text{OH}^-]}{[\text{MOH}]},\qquad \text{p}K_b = -\log K_b`, s: C11(6) },
              { n: "Conjugate acid–base pair", t: R`K_a \times K_b = K_w;\qquad \text{p}K_a + \text{p}K_b = \text{p}K_w = 14`, s: C11(6) },
              { n: "Polyprotic acids", t: R`K_{a_1} > K_{a_2} > K_{a_3}`, c: "Each successive ionization is weaker.", s: C11(6) }
            ]
          },
          {
            title: "Hydrolysis of salts and pH of their solutions",
            formulas: [
              { n: "Salt of weak acid and weak base", t: R`\text{pH} = 7 + \tfrac{1}{2}\,(\text{p}K_a - \text{p}K_b)`, s: C11(6) }
            ]
          },
          {
            title: "Buffer solutions",
            formulas: [
              { n: "Henderson–Hasselbalch (acidic buffer)", t: R`\text{pH} = \text{p}K_a + \log\frac{[\text{Conjugate base, A}^-]}{[\text{Acid, HA}]} \approx \text{p}K_a + \log\frac{[\text{Salt}]}{[\text{Acid}]}`, c: "When [salt] = [acid], pH = pKₐ.", s: C11(6) },
              { n: "Basic buffer", t: R`\text{pOH} = \text{p}K_b + \log\frac{[\text{Conjugate acid, BH}^+]}{[\text{Base, B}]};\qquad \text{pH} = 14 - \text{pOH}`, s: C11(6) }
            ]
          },
          {
            title: "Solubility of sparingly soluble salts; solubility product",
            formulas: [
              { n: "Solubility product", t: R`\text{BaSO}_4(s) \rightleftharpoons \text{Ba}^{2+} + \text{SO}_4^{2-}:\qquad K_{sp} = [\text{Ba}^{2+}][\text{SO}_4^{2-}]`, s: C11(6) },
              { n: "General salt MₓXᵧ", t: R`K_{sp} = [\text{M}^{p+}]^x[\text{X}^{q-}]^y = (xS)^x(yS)^y = x^x\,y^y\,S^{x+y}`, v: "S = molar solubility.", s: C11(6) },
              { n: "Molar solubility", t: R`S = \left(\frac{K_{sp}}{x^x\,y^y}\right)^{1/(x+y)}`, s: C11(6) },
              { n: "Precipitation condition", t: R`Q_{sp} > K_{sp} \Rightarrow \text{precipitation};\quad Q_{sp} < K_{sp} \Rightarrow \text{dissolution}`, c: "Common ion lowers solubility.", s: C11(6) },
              { n: "Effect of pH (salt of weak acid)", t: R`S = \left\{\frac{K_{sp}\,([\text{H}^+] + K_a)}{K_a}\right\}^{1/2}`, s: C11(6) }
            ]
          }
        ]
      },
      {
        unit: 7, section: "Physical Chemistry",
        title: "Redox Reactions and Electrochemistry", status: "gap",
        note: "Redox reactions are in NCERT Chemistry XI Part II and electrochemistry is in XII Part I; neither was provided.",
        topics: [
          { title: "Oxidation and reduction, oxidation number, balancing of redox reactions", gap: true },
          { title: "Conductance, molar conductivity, Kohlrausch's law", gap: true },
          { title: "Electrochemical cells, electrode potentials, Nernst equation, cell potential and Gibbs energy", gap: true }
        ]
      },
      {
        unit: 8, section: "Physical Chemistry",
        title: "Chemical Kinetics", status: "gap", note: GAP12,
        topics: [
          { title: "Rate of reaction, order and molecularity, rate law and rate constant", gap: true },
          { title: "Integrated rate equations and half-lives of zero and first order reactions", gap: true },
          { title: "Effect of temperature: Arrhenius theory, activation energy; collision theory", gap: true }
        ]
      },
      {
        unit: 9, section: "Inorganic Chemistry",
        title: "Classification of Elements and Periodicity in Properties",
        status: "covered",
        topics: [
          {
            title: "Periodic trends: atomic and ionic radii",
            formulas: [
              { n: "Covalent radius", t: R`r_{cov} = \tfrac{1}{2}\times(\text{internuclear distance in a covalent molecule, e.g. Cl}_2)`, s: C11(3) },
              { n: "Metallic radius", t: R`r_{met} = \tfrac{1}{2}\times(\text{internuclear distance between adjacent atoms in the metallic crystal})`, s: C11(3) }
            ]
          },
          {
            title: "Ionization enthalpy and electron gain enthalpy",
            formulas: [
              { n: "Ionization enthalpy", t: R`\text{X(g)} \rightarrow \text{X}^+(\text{g}) + e^-;\qquad \Delta_i H > 0`, c: "Second IE > first IE. Generally increases across a period and decreases down a group.", s: C11(3) },
              { n: "Electron gain enthalpy", t: R`\text{X(g)} + e^- \rightarrow \text{X}^-(\text{g});\qquad \Delta_{eg}H`, c: "Becomes more negative across a period and less negative down a group.", s: C11(3) }
            ]
          },
          {
            title: "Valence and oxidation states",
            formulas: [
              { n: "Valence of representative elements", t: R`\text{Valence} = \text{no. of valence electrons} \quad\text{or}\quad 8 - \text{no. of valence electrons}`, s: C11(3) }
            ]
          }
        ]
      },
      { unit: 10, section: "Inorganic Chemistry", title: "p-Block Elements", status: "gap", note: "Groups 13–18 are in NCERT Chemistry XI Part II / XII Part I; neither was provided.",
        topics: [ { title: "Group 13 to Group 18: electronic configuration, trends in properties, unique behaviour of the first element", gap: true } ] },
      { unit: 11, section: "Inorganic Chemistry", title: "d- and f-Block Elements", status: "gap", note: GAP12,
        topics: [ { title: "Transition elements: configuration, trends, magnetic properties; K₂Cr₂O₇ and KMnO₄", gap: true }, { title: "Lanthanoids and actinoids", gap: true } ] },
      { unit: 12, section: "Inorganic Chemistry", title: "Coordination Compounds", status: "gap", note: GAP12,
        topics: [ { title: "Werner's theory, ligands, coordination number, IUPAC nomenclature, isomerism", gap: true }, { title: "Valence bond approach and crystal field theory; colour and magnetic properties", gap: true } ] },
      { unit: 13, section: "Organic Chemistry", title: "Purification and Characterisation of Organic Compounds", status: "gap", note: GAP11,
        topics: [ { title: "Purification methods; qualitative and quantitative analysis; empirical and molecular formula calculations", gap: true } ] },
      { unit: 14, section: "Organic Chemistry", title: "Some Basic Principles of Organic Chemistry", status: "gap", note: GAP11,
        topics: [ { title: "Tetravalency, hybridization, classification, isomerism, nomenclature, bond fission, electronic displacement effects, reaction types", gap: true } ] },
      { unit: 15, section: "Organic Chemistry", title: "Hydrocarbons", status: "gap", note: GAP11,
        topics: [ { title: "Alkanes, alkenes, alkynes and aromatic hydrocarbons", gap: true } ] },
      {
        unit: 16, section: "Organic Chemistry",
        title: "Organic Compounds Containing Halogens",
        status: "covered",
        note: "Mainly descriptive and reaction-based; only quantitative relations from the book are listed.",
        topics: [
          {
            title: "General methods, nature of C–X bond",
            formulas: [
              { n: "Homologous series of haloalkanes", t: R`\text{C}_n\text{H}_{2n+1}\text{X}`, v: "Monohaloalkanes; X = F, Cl, Br, I.", s: C12(6) }
            ]
          },
          {
            title: "Mechanisms of substitution reactions",
            formulas: [
              { n: "S_N2 rate", t: R`\text{Rate} \propto [\text{R–X}][\text{Nu}^-]\quad(\text{second order})`, c: "Rate depends on both substrate and nucleophile; inversion of configuration.", s: C12(6) },
              { n: "S_N1 rate", t: R`\text{Rate} \propto [\text{R–X}]\quad(\text{first order})`, c: "Rate depends only on the substrate; via carbocation.", s: C12(6) }
            ]
          }
        ]
      },
      {
        unit: 17, section: "Organic Chemistry",
        title: "Organic Compounds Containing Oxygen",
        status: "covered",
        note: "Mainly descriptive and reaction-based; only quantitative relations from the book are listed.",
        topics: [
          {
            title: "Phenols: acidic nature",
            formulas: [
              { n: "Acid strength (phenols)", t: R`\text{Greater p}K_a \Rightarrow \text{weaker acid}`, c: "Electron-withdrawing groups (e.g. –NO₂) at o/p raise acidity; electron-releasing groups lower it.", s: C12(7) }
            ]
          },
          {
            title: "Carboxylic acids: acidic strength and factors affecting it",
            formulas: [
              { n: "pKa", t: R`\text{p}K_a = -\log K_a`, c: "Smaller pKₐ = stronger acid. Strong acids pKₐ < 1; moderately strong 1–5; weak 5–15; extremely weak > 15.", s: C12(8) }
            ]
          }
        ]
      },
      {
        unit: 18, section: "Organic Chemistry",
        title: "Organic Compounds Containing Nitrogen",
        status: "covered",
        topics: [
          {
            title: "Amines: basic character",
            formulas: [
              { n: "Basicity constant", t: R`\text{R–NH}_2 + \text{H}_2\text{O} \rightleftharpoons \text{R–NH}_3^+ + \text{OH}^-:\qquad K_b = \frac{[\text{R–NH}_3^+][\text{OH}^-]}{[\text{R–NH}_2]}`, s: C12(9) },
              { n: "pKb", t: R`\text{p}K_b = -\log K_b`, c: "Larger K_b (smaller pK_b) = stronger base. pK_b(NH₃) = 4.75; aliphatic amines 3 to 4.22; aromatic amines are weaker bases.", s: C12(9) }
            ]
          },
          { title: "Diazonium salts: importance in synthetic organic chemistry", formulas: [], info: "Reaction-based topic; the book gives no quantitative formulas." }
        ]
      },
      {
        unit: 19, section: "Organic Chemistry",
        title: "Biomolecules",
        status: "covered",
        topics: [
          {
            title: "Carbohydrates: classification, aldoses and ketoses, monosaccharides",
            formulas: [
              { n: "General formula of carbohydrates", t: R`\text{C}_x(\text{H}_2\text{O})_y`, c: "Historical formula: not all compounds fitting it are carbohydrates (e.g. acetic acid C₂(H₂O)₂), and some carbohydrates do not fit it (e.g. rhamnose C₆H₁₂O₅).", s: C12(10) },
              { n: "Glucose / fructose", t: R`\text{C}_6\text{H}_{12}\text{O}_6`, s: C12(10) }
            ]
          },
          { title: "Proteins, vitamins, nucleic acids, hormones", formulas: [], info: "Qualitative topics; the book gives no quantitative formulas." }
        ]
      },
      { unit: 20, section: "Organic Chemistry", title: "Principles Related to Practical Chemistry", status: "gap", note: "Practical chemistry is not covered by the provided textbooks.",
        topics: [ { title: "Detection of extra elements and functional groups; preparations; titrimetric exercises; salt analysis; experiments", gap: true } ] }
    ]
  };
})();
