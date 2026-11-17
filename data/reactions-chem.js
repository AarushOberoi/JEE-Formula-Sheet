/* Chemistry REACTIONS — extracted from the provided NCERT Chemistry Class XII Part II
   (Units 6–10: lech201–lech205). Grouped under the JEE Main syllabus units 16–19
   ("General methods of preparation, properties and reactions"). */
window.CHEM_REACTIONS = (function () {
  const R = String.raw;
  const U = (u) => `NCERT Chemistry XII Part II, Unit ${u}`;
  const T = (s) => R`\text{${s}}`; // not used for TeX bodies; kept for readability
  void T;
  return {
    // ================= Syllabus Unit 16 ← NCERT Unit 6: Haloalkanes and Haloarenes =================
    16: [
      {
        title: "Reactions · Preparation of haloalkanes",
        items: [
          { n: "From alcohols — HX", t: R`\text{R–OH} + \text{HX} \xrightarrow{\text{ZnCl}_2\ (\text{for HCl})} \text{R–X} + \text{H}_2\text{O}`, c: "Reactivity of alcohols: 3° > 2° > 1°. Tertiary alcohols react with conc. HCl at room temperature." },
          { n: "From alcohols — NaBr / H₂SO₄", t: R`\text{R–OH} + \text{NaBr} + \text{H}_2\text{SO}_4 \rightarrow \text{R–Br} + \text{NaHSO}_4 + \text{H}_2\text{O}` },
          { n: "From alcohols — PX₃ / PCl₅", t: R`3\text{R–OH} + \text{PX}_3 \rightarrow 3\text{R–X} + \text{H}_3\text{PO}_3;\qquad \text{R–OH} + \text{PCl}_5 \rightarrow \text{R–Cl} + \text{POCl}_3 + \text{HCl}`, c: "X = Cl, Br (PBr₃/PI₃ generated in situ from red P + Br₂/I₂)." },
          { n: "From alcohols — thionyl chloride", t: R`\text{R–OH} + \text{SOCl}_2 \rightarrow \text{R–Cl} + \text{SO}_2\uparrow + \text{HCl}\uparrow`, c: "Preferred: both by-products are gases, giving pure alkyl halide." },
          { n: "Free-radical halogenation", t: R`\text{CH}_3\text{CH}_2\text{CH}_2\text{CH}_3 \xrightarrow{\text{Cl}_2,\ h\nu} \text{CH}_3\text{CH}_2\text{CH}_2\text{CH}_2\text{Cl} + \text{CH}_3\text{CH}_2\text{CHClCH}_3`, c: "Gives a mixture of isomeric mono- and polyhaloalkanes." },
          { n: "Addition of HX to alkenes", t: R`\text{CH}_3\text{CH}{=}\text{CH}_2 + \text{HI} \rightarrow \text{CH}_3\text{CHICH}_3\ (\text{major})`, c: "Markovnikov's rule." },
          { n: "Addition of halogens", t: R`\text{CH}_2{=}\text{CH}_2 + \text{Br}_2 \xrightarrow{\text{CCl}_4} \text{BrCH}_2\text{–CH}_2\text{Br}`, c: "Discharge of reddish-brown bromine colour — test for unsaturation (vic-dibromide)." },
          { n: "Finkelstein reaction", t: R`\text{R–X} + \text{NaI} \xrightarrow{\text{dry acetone}} \text{R–I} + \text{NaX}\quad(\text{X = Cl, Br})`, c: "NaCl/NaBr precipitate in dry acetone, driving the reaction forward (Le Chatelier)." },
          { n: "Swarts reaction", t: R`\text{H}_3\text{C–Br} + \text{AgF} \rightarrow \text{H}_3\text{C–F} + \text{AgBr}`, c: "Alkyl fluorides from alkyl chlorides/bromides using AgF, Hg₂F₂, CoF₂ or SbF₃." }
        ]
      },
      {
        title: "Reactions · Preparation of haloarenes",
        items: [
          { n: "Electrophilic substitution", t: R`\text{C}_6\text{H}_5\text{CH}_3 + \text{X}_2 \xrightarrow{\text{Fe, dark}} o\text{- and } p\text{-XC}_6\text{H}_4\text{CH}_3`, c: "Lewis acid (Fe/FeCl₃) catalyst; o- and p-isomers separable. Iodination needs an oxidising agent (HNO₃/HIO₄); fluoro compounds not made this way." },
          { n: "Sandmeyer reaction", t: R`\text{ArN}_2^+\text{X}^- \xrightarrow{\text{Cu}_2\text{X}_2} \text{Ar–X} + \text{N}_2\quad(\text{X = Cl, Br})`, c: "Diazonium salt from a primary aromatic amine with cold NaNO₂ + mineral acid (273–278 K)." },
          { n: "Iodoarene from diazonium salt", t: R`\text{ArN}_2^+\text{Cl}^- + \text{KI} \rightarrow \text{Ar–I} + \text{KCl} + \text{N}_2` }
        ]
      },
      {
        title: "Reactions · Nucleophilic substitution of haloalkanes",
        items: [
          { n: "General", t: R`\text{Nu}^- + \text{R–X} \rightarrow \text{R–Nu} + \text{X}^-`, c: "Halogen bonded to sp³ carbon; C–X bond is polar." },
          { n: "With aqueous KOH", t: R`\text{R–X} + \text{KOH (aq)} \rightarrow \text{R–OH} + \text{KX}`, c: "Alcohol." },
          { n: "With KCN vs AgCN (ambident CN⁻)", t: R`\text{R–X} + \text{KCN} \rightarrow \text{R–CN}\ (\text{nitrile});\qquad \text{R–X} + \text{AgCN} \rightarrow \text{R–NC}\ (\text{isonitrile})`, c: "KCN is ionic (attack through C); AgCN is covalent (attack through N)." },
          { n: "With KNO₂ vs AgNO₂ (ambident NO₂⁻)", t: R`\text{R–X} + \text{KNO}_2 \rightarrow \text{R–O–N{=}O}\ (\text{alkyl nitrite});\qquad \text{R–X} + \text{AgNO}_2 \rightarrow \text{R–NO}_2\ (\text{nitroalkane})` },
          { n: "Other nucleophiles", t: R`\text{NH}_3 \to \text{RNH}_2;\quad \text{R'O}^-\text{Na}^+ \to \text{R–O–R'};\quad \text{R'COOAg} \to \text{R'COOR};\quad \text{LiAlH}_4 \to \text{R–H};\quad \text{R'}^-\text{M}^+ \to \text{R–R'}` },
          { n: "S_N2 mechanism", t: R`\text{Rate} = k[\text{R–X}][\text{Nu}^-];\quad \text{reactivity: CH}_3\text{X} > 1^\circ > 2^\circ > 3^\circ`, c: "One step, backside attack, inversion of configuration (Walden inversion)." },
          { n: "S_N1 mechanism", t: R`\text{Rate} = k[\text{R–X}];\quad \text{reactivity: } 3^\circ > 2^\circ > 1^\circ > \text{CH}_3\text{X}`, c: "Two steps via carbocation; polar protic solvents; optically active substrate gives racemisation. Benzylic/allylic halides are very reactive." },
          { n: "Effect of halogen", t: R`\text{R–I} > \text{R–Br} > \text{R–Cl} > \text{R–F}`, c: "For both S_N1 and S_N2 (leaving group ability)." }
        ]
      },
      {
        title: "Reactions · Elimination and reactions with metals",
        items: [
          { n: "Dehydrohalogenation (β-elimination)", t: R`\text{R–CH}_2\text{–CH}_2\text{–X} \xrightarrow{\text{alc. KOH},\ \Delta} \text{R–CH{=}CH}_2 + \text{KX} + \text{H}_2\text{O}`, c: "Zaitsev (Saytzeff) rule: the more substituted alkene is the major product." },
          { n: "Grignard reagent", t: R`\text{R–X} + \text{Mg} \xrightarrow{\text{dry ether}} \text{R–Mg–X}`, c: "Must be kept free of moisture." },
          { n: "Grignard + water", t: R`\text{RMgX} + \text{H}_2\text{O} \rightarrow \text{RH} + \text{Mg(OH)X}`, c: "Any source of protons (water, alcohols, amines) converts RMgX to alkane." },
          { n: "Wurtz reaction", t: R`2\text{RX} + 2\text{Na} \xrightarrow{\text{dry ether}} \text{R–R} + 2\text{NaX}` }
        ]
      },
      {
        title: "Reactions · Haloarenes",
        items: [
          { n: "Replacement by –OH (Dow-type)", t: R`\text{C}_6\text{H}_5\text{Cl} \xrightarrow[\text{(ii) H}^+]{\text{(i) NaOH, 623 K, 300 atm}} \text{C}_6\text{H}_5\text{OH}`, c: "Aryl halides are far less reactive towards nucleophiles (resonance, sp² C–X)." },
          { n: "Activation by –NO₂ at o/p", t: R`p\text{-O}_2\text{N–C}_6\text{H}_4\text{–Cl} \xrightarrow[\text{(ii) H}^+]{\text{(i) NaOH, 443 K}} p\text{-O}_2\text{N–C}_6\text{H}_4\text{–OH}`, c: "More –NO₂ groups at o/p positions → milder conditions (2,4-dinitro: 368 K; 2,4,6-trinitro: warm water)." },
          { n: "Halogenation", t: R`\text{C}_6\text{H}_5\text{Cl} + \text{Cl}_2 \xrightarrow{\text{anhyd. FeCl}_3} o\text{- and } p\text{-dichlorobenzene}`, c: "Halogen is deactivating but o,p-directing." },
          { n: "Nitration", t: R`\text{C}_6\text{H}_5\text{Cl} \xrightarrow{\text{conc. HNO}_3 + \text{conc. H}_2\text{SO}_4} \text{1-chloro-2-nitrobenzene} + \text{1-chloro-4-nitrobenzene (major)}` },
          { n: "Sulphonation", t: R`\text{C}_6\text{H}_5\text{Cl} \xrightarrow{\text{conc. H}_2\text{SO}_4,\ \Delta} \text{2- and 4-chlorobenzenesulphonic acid (major para)}` },
          { n: "Friedel–Crafts alkylation", t: R`\text{C}_6\text{H}_5\text{Cl} + \text{CH}_3\text{Cl} \xrightarrow{\text{anhyd. AlCl}_3} o\text{- and } p\text{-chlorotoluene}` },
          { n: "Friedel–Crafts acylation", t: R`\text{C}_6\text{H}_5\text{Cl} + \text{CH}_3\text{COCl} \xrightarrow{\text{anhyd. AlCl}_3} o\text{- and } p\text{-chloroacetophenone}` },
          { n: "Wurtz–Fittig reaction", t: R`\text{Ar–X} + \text{R–X} + 2\text{Na} \xrightarrow{\text{dry ether}} \text{Ar–R} + 2\text{NaX}` },
          { n: "Fittig reaction", t: R`2\,\text{Ar–X} + 2\text{Na} \xrightarrow{\text{dry ether}} \text{Ar–Ar} + 2\text{NaX}` }
        ]
      },
      {
        title: "Reactions · Polyhalogen compounds (chloroform, iodoform, freons, DDT)",
        items: [
          { n: "Oxidation of chloroform", t: R`2\,\text{CHCl}_3 + \text{O}_2 \xrightarrow{\text{light}} 2\,\text{COCl}_2 + 2\,\text{HCl}`, c: "Phosgene is very poisonous — chloroform is stored in closed dark bottles, filled to the brim." },
          { n: "Freons", t: R`\text{CCl}_4 \xrightarrow{\text{Swarts (SbF}_3)} \text{CCl}_2\text{F}_2\ (\text{freon-12})`, c: "Unreactive, non-toxic; reach the stratosphere and deplete ozone." },
          { n: "Iodoform & DDT", t: R`\text{CHI}_3\ (\text{antiseptic, releases I}_2);\qquad \text{DDT} = p,p'\text{-dichlorodiphenyltrichloroethane (insecticide, persistent)}` }
        ]
      }
    ],

    // ================= Syllabus Unit 17 ← NCERT Units 7 & 8 =================
    17: [
      {
        title: "Reactions · Preparation of alcohols",
        items: [
          { n: "Acid-catalysed hydration of alkenes", t: R`>\text{C{=}C}< + \text{H}_2\text{O} \overset{\text{H}^+}{\rightleftharpoons} >\text{C(H)–C(OH)}<`, c: "Markovnikov's rule; via carbocation." },
          { n: "Hydroboration–oxidation", t: R`\text{CH}_3\text{CH{=}CH}_2 \xrightarrow{(\text{BH}_3)_2} (\text{CH}_3\text{CH}_2\text{CH}_2)_3\text{B} \xrightarrow{\text{H}_2\text{O}_2,\ \text{OH}^-} 3\,\text{CH}_3\text{CH}_2\text{CH}_2\text{OH} + \text{B(OH)}_3`, c: "Anti-Markovnikov orientation; excellent yield." },
          { n: "Reduction of aldehydes and ketones", t: R`\text{RCHO} + \text{H}_2 \xrightarrow{\text{Pd}} \text{RCH}_2\text{OH};\qquad \text{R–CO–R'} \xrightarrow{\text{NaBH}_4} \text{R–CH(OH)–R'}`, c: "Also LiAlH₄. Aldehydes → 1°, ketones → 2° alcohols." },
          { n: "Reduction of acids and esters", t: R`\text{RCOOH} \xrightarrow[\text{(ii) H}_2\text{O}]{\text{(i) LiAlH}_4} \text{RCH}_2\text{OH};\qquad \text{RCOOR'} \xrightarrow{\text{H}_2,\ \text{catalyst}} \text{RCH}_2\text{OH} + \text{R'OH}` },
          { n: "From Grignard reagents", t: R`>\text{C{=}O} + \text{RMgX} \rightarrow >\text{C(R)–OMgX} \xrightarrow{\text{H}_2\text{O}} >\text{C(R)–OH} + \text{Mg(OH)X}`, c: "HCHO → 1° alcohol; other aldehydes → 2°; ketones → 3° alcohol." }
        ]
      },
      {
        title: "Reactions · Preparation of phenols",
        items: [
          { n: "From haloarenes", t: R`\text{C}_6\text{H}_5\text{Cl} \xrightarrow[\text{(ii) HCl}]{\text{(i) NaOH, 623 K, 320 atm}} \text{C}_6\text{H}_5\text{OH}` },
          { n: "From benzenesulphonic acid", t: R`\text{C}_6\text{H}_6 \xrightarrow{\text{oleum}} \text{C}_6\text{H}_5\text{SO}_3\text{H} \xrightarrow[\text{(ii) H}^+]{\text{(i) NaOH, fuse}} \text{C}_6\text{H}_5\text{OH}` },
          { n: "From diazonium salts", t: R`\text{C}_6\text{H}_5\text{N}_2^+\text{Cl}^- + \text{H}_2\text{O} \xrightarrow{\text{warm}} \text{C}_6\text{H}_5\text{OH} + \text{N}_2 + \text{HCl}` },
          { n: "From cumene", t: R`\text{Cumene} \xrightarrow{\text{O}_2} \text{Cumene hydroperoxide} \xrightarrow{\text{H}^+,\ \text{H}_2\text{O}} \text{C}_6\text{H}_5\text{OH} + \text{CH}_3\text{COCH}_3`, c: "Industrial method; acetone is a by-product." }
        ]
      },
      {
        title: "Reactions · Alcohols and phenols: O–H and C–O cleavage",
        items: [
          { n: "Reaction with active metals", t: R`2\,\text{R–OH} + 2\text{Na} \rightarrow 2\,\text{R–O}^-\text{Na}^+ + \text{H}_2;\qquad 2\,\text{C}_6\text{H}_5\text{OH} + 2\text{Na} \rightarrow 2\,\text{C}_6\text{H}_5\text{O}^-\text{Na}^+ + \text{H}_2` },
          { n: "Phenol with NaOH", t: R`\text{C}_6\text{H}_5\text{OH} + \text{NaOH} \rightarrow \text{C}_6\text{H}_5\text{O}^-\text{Na}^+ + \text{H}_2\text{O}`, c: "Phenols are more acidic than alcohols (phenoxide is resonance-stabilised); alcohols do not react with NaOH." },
          { n: "Esterification", t: R`\text{Ar/R–OH} + \text{R'–COOH} \overset{\text{H}^+}{\rightleftharpoons} \text{Ar/R–OCOR'} + \text{H}_2\text{O}`, c: "Also with acid chlorides (in pyridine) or anhydrides. Acetylation of salicylic acid gives aspirin." },
          { n: "Reaction with HX — Lucas test", t: R`\text{R–OH} + \text{HCl} \xrightarrow{\text{ZnCl}_2} \text{R–Cl} + \text{H}_2\text{O}`, c: "Turbidity: 3° immediately; 1° does not at room temperature." },
          { n: "Dehydration", t: R`\text{C}_2\text{H}_5\text{OH} \xrightarrow{\text{conc. H}_2\text{SO}_4,\ 443\ \text{K}} \text{CH}_2{=}\text{CH}_2 + \text{H}_2\text{O}`, c: "Ease: 3° > 2° > 1° (2°: 85% H₃PO₄, 440 K; 3°: 20% H₃PO₄, 358 K). Mechanism: protonation → carbocation → loss of H⁺." },
          { n: "Oxidation of alcohols", t: R`\text{R–CH}_2\text{OH} \xrightarrow{[\text{O}]} \text{R–CHO} \xrightarrow{[\text{O}]} \text{R–COOH};\qquad \text{R–CH(OH)–R'} \xrightarrow{\text{CrO}_3} \text{R–CO–R'}`, c: "PCC stops 1° alcohols at the aldehyde. 3° alcohols resist oxidation." },
          { n: "Dehydrogenation over Cu at 573 K", t: R`1^\circ \rightarrow \text{aldehyde};\quad 2^\circ \rightarrow \text{ketone};\quad 3^\circ \rightarrow \text{alkene (dehydration)}` }
        ]
      },
      {
        title: "Reactions · Phenols: electrophilic substitution",
        items: [
          { n: "Nitration (dilute HNO₃)", t: R`\text{C}_6\text{H}_5\text{OH} \xrightarrow{\text{dil. HNO}_3,\ 298\ \text{K}} o\text{-nitrophenol} + p\text{-nitrophenol}`, c: "o-isomer is steam-volatile (intramolecular H-bond); separated by steam distillation." },
          { n: "Nitration (conc. HNO₃)", t: R`\text{C}_6\text{H}_5\text{OH} \xrightarrow{\text{conc. HNO}_3} \text{2,4,6-trinitrophenol (picric acid)}` },
          { n: "Bromination in CS₂", t: R`\text{C}_6\text{H}_5\text{OH} \xrightarrow{\text{Br}_2\ \text{in CS}_2,\ 273\ \text{K}} o\text{- and } p\text{-bromophenol}`, c: "Solvent of low polarity, low temperature → monobromination." },
          { n: "Bromine water", t: R`\text{C}_6\text{H}_5\text{OH} + 3\text{Br}_2 \xrightarrow{\text{H}_2\text{O}} \text{2,4,6-tribromophenol (white ppt)} + 3\text{HBr}` },
          { n: "Kolbe's reaction", t: R`\text{C}_6\text{H}_5\text{O}^-\text{Na}^+ \xrightarrow[\text{(ii) H}^+]{\text{(i) CO}_2} o\text{-HO–C}_6\text{H}_4\text{–COOH (salicylic acid)}`, c: "Phenoxide ion is more reactive than phenol towards electrophile CO₂." },
          { n: "Reimer–Tiemann reaction", t: R`\text{C}_6\text{H}_5\text{OH} \xrightarrow[\text{(ii) H}^+]{\text{(i) CHCl}_3,\ \text{aq. NaOH}} o\text{-HO–C}_6\text{H}_4\text{–CHO (salicylaldehyde)}`, c: "Via dichloromethyl intermediate (–CHCl₂) hydrolysed by alkali." },
          { n: "With zinc dust", t: R`\text{C}_6\text{H}_5\text{OH} + \text{Zn} \xrightarrow{\Delta} \text{C}_6\text{H}_6 + \text{ZnO}` },
          { n: "Oxidation", t: R`\text{C}_6\text{H}_5\text{OH} \xrightarrow{\text{Na}_2\text{Cr}_2\text{O}_7,\ \text{H}_2\text{SO}_4} \text{benzoquinone}`, c: "In air, phenols slowly turn dark (quinone formation)." }
        ]
      },
      {
        title: "Reactions · Ethers",
        items: [
          { n: "Dehydration of alcohols", t: R`2\,\text{C}_2\text{H}_5\text{OH} \xrightarrow{\text{H}_2\text{SO}_4,\ 413\ \text{K}} \text{C}_2\text{H}_5\text{–O–C}_2\text{H}_5 + \text{H}_2\text{O}`, c: "Suitable for 1° alcohols; S_N2 attack of alcohol on protonated alcohol." },
          { n: "Williamson synthesis", t: R`\text{R–X} + \text{R'–O}^-\text{Na}^+ \rightarrow \text{R–O–R'} + \text{NaX}`, c: "Best with 1° alkyl halides; 3° halides give alkenes (elimination). Phenoxide + CH₃Br → anisole." },
          { n: "Cleavage by HX", t: R`\text{R–O–R} + \text{HX} \rightarrow \text{R–X} + \text{R–OH}`, c: "Reactivity HI > HBr > HCl. With 3° alkyl group, halide forms on the tertiary carbon (S_N1)." },
          { n: "Alkyl aryl ethers with HI", t: R`\text{C}_6\text{H}_5\text{–O–CH}_3 + \text{HI} \rightarrow \text{C}_6\text{H}_5\text{OH} + \text{CH}_3\text{I}`, c: "O–aryl bond is stronger (partial double bond) — phenol, not iodobenzene, forms." },
          { n: "Anisole: halogenation", t: R`\text{C}_6\text{H}_5\text{OCH}_3 \xrightarrow{\text{Br}_2\ \text{in ethanoic acid}} p\text{-bromoanisole (major)} + o\text{-bromoanisole}`, c: "–OCH₃ is o,p-directing and activating." },
          { n: "Anisole: Friedel–Crafts", t: R`\text{C}_6\text{H}_5\text{OCH}_3 \xrightarrow{\text{CH}_3\text{Cl / CH}_3\text{COCl, anhyd. AlCl}_3} o\text{- and } p\text{-substituted products (para major)}` },
          { n: "Anisole: nitration", t: R`\text{C}_6\text{H}_5\text{OCH}_3 \xrightarrow{\text{conc. H}_2\text{SO}_4 + \text{conc. HNO}_3} o\text{- and } p\text{-nitroanisole}` }
        ]
      },
      {
        title: "Reactions · Preparation of aldehydes and ketones",
        items: [
          { n: "Oxidation / dehydrogenation of alcohols", t: R`1^\circ\ \text{alcohol} \rightarrow \text{aldehyde};\qquad 2^\circ\ \text{alcohol} \rightarrow \text{ketone}`, c: "Mild oxidants (CrO₃/PCC) or Cu/Ag at high temperature." },
          { n: "Ozonolysis of alkenes", t: R`\text{R}_2\text{C{=}CR}_2 \xrightarrow[\text{(ii) Zn/H}_2\text{O}]{\text{(i) O}_3} 2\,\text{R}_2\text{C{=}O}` },
          { n: "Hydration of alkynes", t: R`\text{HC{≡}CH} + \text{H}_2\text{O} \xrightarrow{\text{HgSO}_4,\ \text{H}_2\text{SO}_4} \text{CH}_3\text{CHO}`, c: "Ethyne gives ethanal; other alkynes give ketones." },
          { n: "Rosenmund reduction", t: R`\text{R–COCl} + \text{H}_2 \xrightarrow{\text{Pd–BaSO}_4} \text{R–CHO} + \text{HCl}`, c: "Poisoned catalyst stops the reduction at the aldehyde." },
          { n: "Stephen reaction", t: R`\text{R–CN} + \text{SnCl}_2 + \text{HCl} \rightarrow \text{R–CH{=}NH} \xrightarrow{\text{H}_3\text{O}^+} \text{R–CHO}` },
          { n: "DIBAL-H reduction", t: R`\text{R–CN} \xrightarrow[\text{(ii) H}_2\text{O}]{\text{(i) AlH}(i\text{-Bu})_2} \text{R–CHO}`, c: "Esters are similarly reduced to aldehydes with DIBAL-H." },
          { n: "Etard reaction", t: R`\text{C}_6\text{H}_5\text{CH}_3 \xrightarrow{\text{CrO}_2\text{Cl}_2,\ \text{CS}_2} \text{chromium complex} \xrightarrow{\text{H}_3\text{O}^+} \text{C}_6\text{H}_5\text{CHO}` },
          { n: "Toluene with CrO₃ / acetic anhydride", t: R`\text{C}_6\text{H}_5\text{CH}_3 \xrightarrow{\text{CrO}_3,\ (\text{CH}_3\text{CO})_2\text{O},\ 273\text{–}283\ \text{K}} \text{C}_6\text{H}_5\text{CH(OCOCH}_3)_2 \xrightarrow{\text{H}_3\text{O}^+} \text{C}_6\text{H}_5\text{CHO}` },
          { n: "Side-chain chlorination", t: R`\text{C}_6\text{H}_5\text{CH}_3 \xrightarrow{\text{Cl}_2,\ h\nu} \text{C}_6\text{H}_5\text{CHCl}_2 \xrightarrow{\text{H}_2\text{O},\ 373\ \text{K}} \text{C}_6\text{H}_5\text{CHO}` },
          { n: "Gatterman–Koch reaction", t: R`\text{C}_6\text{H}_6 + \text{CO} + \text{HCl} \xrightarrow{\text{anhyd. AlCl}_3/\text{CuCl}} \text{C}_6\text{H}_5\text{CHO}` },
          { n: "Ketones from acyl chlorides", t: R`2\,\text{R–MgX} + \text{CdCl}_2 \rightarrow \text{R}_2\text{Cd} + 2\,\text{Mg(X)Cl};\qquad 2\,\text{R'–COCl} + \text{R}_2\text{Cd} \rightarrow 2\,\text{R'–CO–R} + \text{CdCl}_2` },
          { n: "Ketones from nitriles", t: R`\text{R–CN} + \text{R'MgX} \rightarrow \text{R–C(R'){=}NMgX} \xrightarrow{\text{H}_3\text{O}^+} \text{R–CO–R'}` },
          { n: "Friedel–Crafts acylation", t: R`\text{Ar–H} + \text{R–COCl} \xrightarrow{\text{anhyd. AlCl}_3} \text{Ar–CO–R} + \text{HCl}` }
        ]
      },
      {
        title: "Reactions · Aldehydes and ketones: nucleophilic addition",
        items: [
          { n: "Addition of HCN", t: R`>\text{C{=}O} + \text{HCN} \xrightarrow{\text{base}} >\text{C(OH)CN}\ (\text{cyanohydrin})`, c: "Base generates CN⁻, a stronger nucleophile." },
          { n: "Addition of sodium hydrogensulphite", t: R`>\text{C{=}O} + \text{NaHSO}_3 \rightleftharpoons >\text{C(OH)SO}_3\text{Na}`, c: "Crystalline adduct; regenerates carbonyl with dil. acid/alkali — used for separation and purification." },
          { n: "Addition of Grignard reagent", t: R`>\text{C{=}O} \xrightarrow[\text{(ii) H}_3\text{O}^+]{\text{(i) RMgX}} \text{alcohols}` },
          { n: "Addition of alcohols", t: R`\text{RCHO} \xrightarrow{\text{R'OH, dry HCl}} \text{hemiacetal} \xrightarrow{\text{R'OH}} \text{RCH(OR')}_2\ (\text{acetal})`, c: "Ketones with ethylene glycol give cyclic ketals." },
          { n: "Addition of ammonia derivatives", t: R`>\text{C{=}O} + \text{H}_2\text{N–Z} \rightleftharpoons >\text{C{=}N–Z} + \text{H}_2\text{O}`, c: "Z = –OH (oxime), –NH₂ (hydrazone), –NHC₆H₅ (phenylhydrazone), –NHCONH₂ (semicarbazone), 2,4-DNP (2,4-dinitrophenylhydrazone). pH controlled." },
          { n: "Relative reactivity", t: R`\text{HCHO} > \text{aldehydes} > \text{ketones}`, c: "Steric hindrance and +I effect of alkyl groups reduce reactivity of ketones." }
        ]
      },
      {
        title: "Reactions · Aldehydes and ketones: reduction, oxidation, α-H",
        items: [
          { n: "Clemmensen reduction", t: R`>\text{C{=}O} \xrightarrow{\text{Zn–Hg, conc. HCl}} >\text{CH}_2 + \text{H}_2\text{O}` },
          { n: "Wolff–Kishner reduction", t: R`>\text{C{=}O} \xrightarrow{\text{NH}_2\text{NH}_2} >\text{C{=}NNH}_2 \xrightarrow{\text{KOH / ethylene glycol},\ \Delta} >\text{CH}_2 + \text{N}_2` },
          { n: "Tollens' test", t: R`\text{RCHO} + 2[\text{Ag(NH}_3)_2]^+ + 3\text{OH}^- \rightarrow \text{RCOO}^- + 2\text{Ag}\downarrow + 2\text{H}_2\text{O} + 4\text{NH}_3`, c: "Silver mirror — given by aldehydes, not ketones." },
          { n: "Fehling's test", t: R`\text{R–CHO} + 2\text{Cu}^{2+} + 5\text{OH}^- \rightarrow \text{RCOO}^- + \text{Cu}_2\text{O}\downarrow\ (\text{red-brown}) + 3\text{H}_2\text{O}`, c: "Aromatic aldehydes do not respond." },
          { n: "Oxidation of ketones", t: R`\text{R–CO–CH}_2\text{–R'} \xrightarrow{\text{strong [O]}} \text{mixture of carboxylic acids (C–C cleavage)}` },
          { n: "Haloform reaction", t: R`\text{R–CO–CH}_3 \xrightarrow{\text{NaOX}} \text{R–COONa} + \text{CHX}_3`, c: "Methyl ketones (and CH₃CH(OH)– compounds); with NaOI gives yellow iodoform — iodoform test." },
          { n: "Aldol condensation (aldehyde)", t: R`2\,\text{CH}_3\text{CHO} \xrightarrow{\text{dil. NaOH}} \text{CH}_3\text{CH(OH)CH}_2\text{CHO} \xrightarrow{\Delta,\ -\text{H}_2\text{O}} \text{CH}_3\text{CH{=}CHCHO}`, c: "Needs at least one α-H. Product: 3-hydroxybutanal → but-2-enal." },
          { n: "Aldol condensation (ketone)", t: R`2\,\text{CH}_3\text{COCH}_3 \xrightarrow{\text{Ba(OH)}_2} (\text{CH}_3)_2\text{C(OH)CH}_2\text{COCH}_3 \xrightarrow{\Delta,\ -\text{H}_2\text{O}} (\text{CH}_3)_2\text{C{=}CHCOCH}_3`, c: "4-hydroxy-4-methylpentan-2-one → 4-methylpent-3-en-2-one." },
          { n: "Cross aldol condensation", t: R`\text{CH}_3\text{CHO} + \text{CH}_3\text{CH}_2\text{CHO} \xrightarrow[\text{(ii) }\Delta]{\text{(i) NaOH}} \text{4 products}`, c: "But-2-enal, 2-methylpent-2-enal (self) + 2-methylbut-2-enal, pent-2-enal (cross). Ketones can also be one component." },
          { n: "Cannizzaro reaction", t: R`2\,\text{HCHO} + \text{conc. KOH} \xrightarrow{\Delta} \text{CH}_3\text{OH} + \text{HCOOK};\qquad 2\,\text{C}_6\text{H}_5\text{CHO} + \text{conc. NaOH} \rightarrow \text{C}_6\text{H}_5\text{CH}_2\text{OH} + \text{C}_6\text{H}_5\text{COONa}`, c: "Aldehydes without α-H; disproportionation." },
          { n: "Electrophilic substitution", t: R`\text{C}_6\text{H}_5\text{CHO} \xrightarrow{\text{conc. HNO}_3/\text{H}_2\text{SO}_4,\ 273\text{–}283\ \text{K}} m\text{-nitrobenzaldehyde}`, c: "Carbonyl group is deactivating and meta-directing." }
        ]
      },
      {
        title: "Reactions · Carboxylic acids",
        items: [
          { n: "From 1° alcohols and aldehydes", t: R`\text{RCH}_2\text{OH} \xrightarrow[\text{(ii) H}_3\text{O}^+]{\text{(i) alk. KMnO}_4} \text{RCOOH}`, c: "Also CrO₃–H₂SO₄ (Jones reagent)." },
          { n: "From alkylbenzenes", t: R`\text{C}_6\text{H}_5\text{CH}_3 \xrightarrow[\text{(ii) H}_3\text{O}^+]{\text{(i) KMnO}_4\text{–KOH},\ \Delta} \text{C}_6\text{H}_5\text{COOH}`, c: "Whole side chain (any length) is oxidised to –COOH." },
          { n: "From nitriles and amides", t: R`\text{R–CN} \xrightarrow{\text{H}^+ \text{ or } \text{OH}^-,\ \text{H}_2\text{O}} \text{R–CONH}_2 \xrightarrow{\text{H}_3\text{O}^+} \text{R–COOH}` },
          { n: "From Grignard reagents", t: R`\text{R–MgX} + \text{CO}_2\ (\text{dry ice}) \rightarrow \text{R–COOMgX} \xrightarrow{\text{H}_3\text{O}^+} \text{R–COOH}` },
          { n: "From acyl halides, anhydrides, esters", t: R`\text{RCOCl} + \text{H}_2\text{O} \rightarrow \text{RCOOH} + \text{HCl};\qquad (\text{RCO})_2\text{O} + \text{H}_2\text{O} \rightarrow 2\,\text{RCOOH}`, c: "Esters: acidic hydrolysis gives acid directly; basic hydrolysis gives carboxylate." },
          { n: "Acidic nature", t: R`2\,\text{RCOOH} + 2\text{Na} \rightarrow 2\,\text{RCOONa} + \text{H}_2;\qquad \text{RCOOH} + \text{NaHCO}_3 \rightarrow \text{RCOONa} + \text{H}_2\text{O} + \text{CO}_2\uparrow`, c: "Effervescence with NaHCO₃ distinguishes acids from phenols." },
          { n: "Acid strength order", t: R`\text{CF}_3\text{COOH} > \text{CCl}_3\text{COOH} > \text{CHCl}_2\text{COOH} > \text{NO}_2\text{CH}_2\text{COOH} > \text{NC–CH}_2\text{COOH}`, c: "EWG increase acidity; EDG decrease. F > Cl > Br > I (as substituents); HCOOH > CH₃COOH; benzoic acid > aliphatic acids (except HCOOH)." },
          { n: "Formation of anhydride", t: R`2\,\text{RCOOH} \xrightarrow{\text{H}^+ \text{ or P}_2\text{O}_5,\ \Delta} (\text{RCO})_2\text{O} + \text{H}_2\text{O}` },
          { n: "Esterification", t: R`\text{RCOOH} + \text{R'OH} \overset{\text{H}^+}{\rightleftharpoons} \text{RCOOR'} + \text{H}_2\text{O}` },
          { n: "With PCl₅, PCl₃, SOCl₂", t: R`\text{RCOOH} + \text{PCl}_5 \rightarrow \text{RCOCl} + \text{POCl}_3 + \text{HCl};\quad 3\,\text{RCOOH} + \text{PCl}_3 \rightarrow 3\,\text{RCOCl} + \text{H}_3\text{PO}_3;\quad \text{RCOOH} + \text{SOCl}_2 \rightarrow \text{RCOCl} + \text{SO}_2 + \text{HCl}` },
          { n: "With ammonia", t: R`\text{RCOOH} + \text{NH}_3 \rightleftharpoons \text{RCOO}^-\text{NH}_4^+ \xrightarrow{\Delta,\ -\text{H}_2\text{O}} \text{RCONH}_2` },
          { n: "Reduction", t: R`\text{RCOOH} \xrightarrow[\text{(ii) H}_3\text{O}^+]{\text{(i) LiAlH}_4 \text{ or B}_2\text{H}_6} \text{RCH}_2\text{OH}` },
          { n: "Decarboxylation", t: R`\text{R–COONa} \xrightarrow{\text{NaOH + CaO},\ \Delta} \text{R–H} + \text{Na}_2\text{CO}_3`, c: "Kolbe electrolysis of aqueous carboxylate salts also decarboxylates (gives R–R)." },
          { n: "Hell–Volhard–Zelinsky (HVZ)", t: R`\text{R–CH}_2\text{–COOH} \xrightarrow[\text{(ii) H}_2\text{O}]{\text{(i) X}_2,\ \text{red P}} \text{R–CH(X)–COOH}`, c: "α-halogenation; X = Cl, Br; needs α-H." },
          { n: "Ring substitution", t: R`\text{C}_6\text{H}_5\text{COOH} \xrightarrow{\text{conc. HNO}_3 + \text{conc. H}_2\text{SO}_4} m\text{-nitrobenzoic acid}`, c: "–COOH is deactivating, meta-directing; aromatic acids do not undergo Friedel–Crafts reaction." }
        ]
      }
    ],

    // ================= Syllabus Unit 18 ← NCERT Unit 9: Amines =================
    18: [
      {
        title: "Reactions · Preparation of amines",
        items: [
          { n: "Reduction of nitro compounds", t: R`\text{Ar–NO}_2 \xrightarrow{\text{H}_2,\ \text{Ni/Pt/Pd}} \text{Ar–NH}_2;\qquad \text{Ar–NO}_2 \xrightarrow{\text{Sn + HCl or Fe + HCl}} \text{Ar–NH}_2`, c: "Fe + HCl preferred (FeCl₂ formed is hydrolysed, regenerating HCl)." },
          { n: "Ammonolysis of alkyl halides", t: R`\text{R–X} + \text{NH}_3 \xrightarrow{373\ \text{K}} \text{R–NH}_3^+\text{X}^- \xrightarrow{\text{base}} \text{R–NH}_2`, c: "Gives a mixture of 1°, 2°, 3° amines and quaternary ammonium salt; large excess NH₃ favours 1°." },
          { n: "Reduction of nitriles", t: R`\text{R–C{≡}N} \xrightarrow{\text{H}_2/\text{Ni or LiAlH}_4 \text{ or Na(Hg)/C}_2\text{H}_5\text{OH}} \text{R–CH}_2\text{–NH}_2`, c: "Ascent of series (one extra carbon)." },
          { n: "Reduction of amides", t: R`\text{R–CONH}_2 \xrightarrow[\text{(ii) H}_2\text{O}]{\text{(i) LiAlH}_4} \text{R–CH}_2\text{–NH}_2` },
          { n: "Gabriel phthalimide synthesis", t: R`\text{Phthalimide} \xrightarrow{\text{KOH (alc)}} \text{K-phthalimide} \xrightarrow{\text{R–X}} \text{N-alkylphthalimide} \xrightarrow{\text{NaOH (aq)}} \text{R–NH}_2 + \text{sodium phthalate}`, c: "Only primary aliphatic amines; aromatic amines cannot be made (aryl halides don't undergo nucleophilic substitution with phthalimide anion)." },
          { n: "Hoffmann bromamide degradation", t: R`\text{R–CONH}_2 + \text{Br}_2 + 4\text{NaOH} \rightarrow \text{R–NH}_2 + \text{Na}_2\text{CO}_3 + 2\text{NaBr} + 2\text{H}_2\text{O}`, c: "Amine has one carbon less than the amide (migration of R from carbonyl C to N)." }
        ]
      },
      {
        title: "Reactions · Chemical reactions of amines",
        items: [
          { n: "Salt formation (basic character)", t: R`\text{R–NH}_2 + \text{HX} \rightleftharpoons \text{R–NH}_3^+\text{X}^-;\qquad \text{C}_6\text{H}_5\text{NH}_2 + \text{HCl} \rightleftharpoons \text{C}_6\text{H}_5\text{NH}_3^+\text{Cl}^-` },
          { n: "Basic strength in water", t: R`(\text{C}_2\text{H}_5)_2\text{NH} > (\text{C}_2\text{H}_5)_3\text{N} > \text{C}_2\text{H}_5\text{NH}_2 > \text{NH}_3;\qquad (\text{CH}_3)_2\text{NH} > \text{CH}_3\text{NH}_2 > (\text{CH}_3)_3\text{N} > \text{NH}_3`, c: "Inductive, solvation (H-bonding) and steric effects. Gas phase: 3° > 2° > 1° > NH₃. Aniline is a weaker base than NH₃ (lone pair in resonance)." },
          { n: "Alkylation", t: R`\text{R–NH}_2 + \text{R'–X} \rightarrow \text{R–NH–R'} + \text{HX}` },
          { n: "Acylation", t: R`\text{C}_2\text{H}_5\text{NH}_2 + \text{CH}_3\text{COCl} \xrightarrow{\text{pyridine}} \text{C}_2\text{H}_5\text{NHCOCH}_3 + \text{HCl}`, c: "Also with anhydrides; benzoylation with C₆H₅COCl. Pyridine removes HCl. 3° amines don't react (no N–H)." },
          { n: "Carbylamine reaction", t: R`\text{R–NH}_2 + \text{CHCl}_3 + 3\text{KOH} \xrightarrow{\Delta} \text{R–NC} + 3\text{KCl} + 3\text{H}_2\text{O}`, c: "Foul-smelling isocyanide — test for primary amines (aliphatic and aromatic)." },
          { n: "With nitrous acid (aliphatic)", t: R`\text{R–NH}_2 + \text{HNO}_2 \xrightarrow{\text{NaNO}_2 + \text{HCl}} [\text{R–N}_2^+\text{Cl}^-] \xrightarrow{\text{H}_2\text{O}} \text{R–OH} + \text{N}_2 + \text{HCl}`, c: "Quantitative N₂ evolution — estimation of amino acids/proteins." },
          { n: "With nitrous acid (aromatic) — diazotisation", t: R`\text{C}_6\text{H}_5\text{NH}_2 + \text{NaNO}_2 + 2\text{HCl} \xrightarrow{273\text{–}278\ \text{K}} \text{C}_6\text{H}_5\text{N}_2^+\text{Cl}^- + \text{NaCl} + 2\text{H}_2\text{O}` },
          { n: "Hinsberg's reagent (C₆H₅SO₂Cl)", t: R`1^\circ:\ \text{C}_6\text{H}_5\text{SO}_2\text{NHR (soluble in alkali)};\quad 2^\circ:\ \text{C}_6\text{H}_5\text{SO}_2\text{NR}_2\ (\text{insoluble});\quad 3^\circ:\ \text{no reaction}`, c: "Distinguishes 1°, 2° and 3° amines." },
          { n: "Bromination of aniline", t: R`\text{C}_6\text{H}_5\text{NH}_2 + 3\text{Br}_2 \xrightarrow{\text{Br}_2\text{-water}} \text{2,4,6-tribromoaniline (white ppt)} + 3\text{HBr}`, c: "–NH₂ strongly activating. For monosubstitution, first acetylate: aniline → acetanilide → p-bromoacetanilide → hydrolysis → p-bromoaniline." },
          { n: "Nitration of aniline", t: R`\text{C}_6\text{H}_5\text{NH}_2 \xrightarrow{\text{HNO}_3,\ \text{H}_2\text{SO}_4,\ 288\ \text{K}} p\ (51\%) + m\ (47\%) + o\ (2\%)\text{-nitroaniline}`, c: "Anilinium ion (meta-directing) forms in acid; tarry oxidation products too. Protect as acetanilide to get p-nitroaniline." },
          { n: "Sulphonation of aniline", t: R`\text{C}_6\text{H}_5\text{NH}_2 \xrightarrow{\text{conc. H}_2\text{SO}_4} \text{anilinium hydrogensulphate} \xrightarrow{453\text{–}473\ \text{K}} \text{sulphanilic acid}`, c: "Exists as zwitterion." },
          { n: "No Friedel–Crafts reaction", t: R`\text{C}_6\text{H}_5\text{NH}_2 + \text{AlCl}_3 \rightarrow \text{salt (N becomes positive, deactivating)}` }
        ]
      },
      {
        title: "Reactions · Diazonium salts in synthesis",
        items: [
          { n: "Sandmeyer reaction", t: R`\text{ArN}_2^+\text{X}^- \xrightarrow{\text{Cu}_2\text{Cl}_2/\text{HCl}} \text{ArCl};\quad \xrightarrow{\text{Cu}_2\text{Br}_2/\text{HBr}} \text{ArBr};\quad \xrightarrow{\text{CuCN/KCN}} \text{ArCN}\quad (+\,\text{N}_2)` },
          { n: "Gattermann reaction", t: R`\text{ArN}_2^+\text{X}^- \xrightarrow{\text{Cu/HX}} \text{ArX} + \text{N}_2 + \text{CuX}\quad(\text{X = Cl, Br})`, c: "Copper powder; yield generally better in Sandmeyer." },
          { n: "Replacement by iodide", t: R`\text{ArN}_2^+\text{Cl}^- + \text{KI} \rightarrow \text{ArI} + \text{KCl} + \text{N}_2` },
          { n: "Replacement by fluoride", t: R`\text{ArN}_2^+\text{Cl}^- + \text{HBF}_4 \rightarrow \text{ArN}_2^+\text{BF}_4^- \xrightarrow{\Delta} \text{ArF} + \text{BF}_3 + \text{N}_2` },
          { n: "Replacement by H", t: R`\text{ArN}_2^+\text{Cl}^- + \text{H}_3\text{PO}_2 + \text{H}_2\text{O} \rightarrow \text{ArH} + \text{N}_2 + \text{H}_3\text{PO}_3 + \text{HCl}`, c: "Ethanol also reduces: → ArH + N₂ + CH₃CHO + HCl." },
          { n: "Replacement by –OH", t: R`\text{ArN}_2^+\text{Cl}^- + \text{H}_2\text{O} \xrightarrow{283\ \text{K}} \text{ArOH} + \text{N}_2 + \text{HCl}` },
          { n: "Replacement by –NO₂", t: R`\text{ArN}_2^+\text{BF}_4^- \xrightarrow{\text{NaNO}_2,\ \text{Cu},\ \Delta} \text{ArNO}_2 + \text{NaBF}_4 + \text{N}_2` },
          { n: "Coupling with phenol", t: R`\text{C}_6\text{H}_5\text{N}_2^+\text{Cl}^- + \text{C}_6\text{H}_5\text{OH} \xrightarrow{\text{OH}^-} p\text{-hydroxyazobenzene (orange dye)} + \text{Cl}^- + \text{H}_2\text{O}`, c: "Electrophilic substitution at the para position." },
          { n: "Coupling with aniline", t: R`\text{C}_6\text{H}_5\text{N}_2^+\text{Cl}^- + \text{C}_6\text{H}_5\text{NH}_2 \xrightarrow{\text{H}^+} p\text{-aminoazobenzene (yellow dye)} + \text{Cl}^- + \text{H}_2\text{O}` }
        ]
      }
    ],

    // ================= Syllabus Unit 19 ← NCERT Unit 10: Biomolecules =================
    19: [
      {
        title: "Reactions · Carbohydrates (glucose and disaccharides)",
        items: [
          { n: "Glucose from sucrose", t: R`\text{C}_{12}\text{H}_{22}\text{O}_{11} + \text{H}_2\text{O} \xrightarrow{\text{H}^+} \text{C}_6\text{H}_{12}\text{O}_6\ (\text{glucose}) + \text{C}_6\text{H}_{12}\text{O}_6\ (\text{fructose})`, c: "Boiled with dil. HCl or H₂SO₄ in alcoholic solution." },
          { n: "Glucose from starch", t: R`(\text{C}_6\text{H}_{10}\text{O}_5)_n + n\,\text{H}_2\text{O} \xrightarrow{\text{H}^+,\ 393\ \text{K},\ 2\text{–}3\ \text{atm}} n\,\text{C}_6\text{H}_{12}\text{O}_6` },
          { n: "With HI (prolonged heating)", t: R`\text{Glucose} \xrightarrow{\text{HI},\ \Delta} n\text{-hexane}`, c: "All six carbons in a straight chain." },
          { n: "With hydroxylamine / HCN", t: R`\text{Glucose} \xrightarrow{\text{NH}_2\text{OH}} \text{oxime};\qquad \text{Glucose} \xrightarrow{\text{HCN}} \text{cyanohydrin}`, c: "Presence of a carbonyl group." },
          { n: "With bromine water", t: R`\text{Glucose} \xrightarrow{\text{Br}_2\ \text{water}} \text{gluconic acid}`, c: "Carbonyl is an aldehyde group." },
          { n: "Acetylation", t: R`\text{Glucose} \xrightarrow{\text{acetic anhydride}} \text{glucose pentaacetate}`, c: "Five –OH groups on different carbons." },
          { n: "With nitric acid", t: R`\text{Glucose} \xrightarrow{\text{HNO}_3} \text{saccharic acid (glucaric acid)}`, c: "Presence of a primary alcohol (–CH₂OH) group." },
          { n: "Anomalies of open-chain structure", t: R`\text{No Schiff's test; no NaHSO}_3 \text{ adduct; pentaacetate does not react with NH}_2\text{OH}`, c: "Explained by cyclic hemiacetal structure (α and β anomers)." },
          { n: "Invert sugar", t: R`\text{Sucrose (dextrorotatory)} \xrightarrow{\text{H}_2\text{O}} \text{D-(+)-glucose} + \text{D-(}-\text{)-fructose (laevorotatory mixture)}` },
          { n: "Maltose and lactose", t: R`\text{Maltose} \rightarrow 2\ \alpha\text{-D-glucose};\qquad \text{Lactose} \rightarrow \beta\text{-D-galactose} + \beta\text{-D-glucose}` }
        ]
      },
      {
        title: "Reactions · Amino acids and proteins",
        items: [
          { n: "Zwitterion", t: R`\text{H}_2\text{N–CHR–COOH} \rightleftharpoons \text{H}_3\overset{+}{\text{N}}\text{–CHR–COO}^-`, c: "Amphoteric; dipolar ion." },
          { n: "Peptide bond formation", t: R`\text{H}_2\text{N–CHR–COOH} + \text{H}_2\text{N–CHR'–COOH} \rightarrow \text{H}_2\text{N–CHR–CO–NH–CHR'–COOH} + \text{H}_2\text{O}`, c: "–CO–NH– is the peptide linkage (dipeptide)." }
        ]
      }
    ]
  };
})();
