# ∑ JEE Formula Sheet

A fast, clean JEE Main formula and reaction repository, organised exactly like the official syllabus: **subject → chapter → topic → formula**.

🔗 **Live site:** https://jee-formula-sheet.aarushoberoi.workers.dev

---

## ✨ Features

- **Syllabus-aligned structure**: follows the official JEE (Main) syllabus
- **Three subjects, 54 chapters**
  - **Physics**: 20 chapters, 400 formulas
  - **Chemistry**: 20 chapters, 413 formulas & reactions
  - **Mathematics**: 14 chapters, 350 formulas
- **Quick Revision** mode for last-minute formula scanning
- **Recently Viewed** to jump back to chapters you opened earlier
- **My Progress** to track the chapters you've covered
- **Beautifully typeset maths** rendered with KaTeX
- **Single-page app** with hash-based routing, with no backend or build step required

## 📚 Chapters Covered

**Physics:** Units and Measurements · Kinematics · Laws of Motion · Work, Energy and Power · Rotational Motion · Gravitation · Properties of Solids and Liquids · Thermodynamics · Kinetic Theory of Gases · Oscillations and Waves · Electrostatics · Current Electricity · Magnetic Effects of Current and Magnetism · Electromagnetic Induction and Alternating Currents · Electromagnetic Waves · Optics · Dual Nature of Matter and Radiation · Atoms and Nuclei · Electronic Devices · Experimental Skills

**Chemistry:** Some Basic Concepts in Chemistry · Atomic Structure · Chemical Bonding and Molecular Structure · Chemical Thermodynamics · Solutions · Equilibrium · Redox Reactions and Electrochemistry · Chemical Kinetics · Classification of Elements and Periodicity in Properties · p-Block Elements · d- and f-Block Elements · Coordination Compounds · Purification and Characterisation of Organic Compounds · Some Basic Principles of Organic Chemistry · Hydrocarbons · Organic Compounds Containing Halogens · Organic Compounds Containing Oxygen · Organic Compounds Containing Nitrogen · Biomolecules · Principles Related to Practical Chemistry

**Mathematics:** Sets, Relations and Functions · Complex Numbers and Quadratic Equations · Matrices and Determinants · Permutations and Combinations · Binomial Theorem and its Simple Applications · Sequence and Series · Limit, Continuity and Differentiability · Integral Calculus · Differential Equations · Co-ordinate Geometry · Three Dimensional Geometry · Vector Algebra · Statistics and Probability · Trigonometry

## 🗂️ Project Structure

```
JEE-Formula-Sheet/
├── index.html      # App shell
├── app.js          # Routing, rendering, progress & recent-views logic
├── styles.css      # Styling
├── data/           # Formula data (subjects, chapters, topics, formulas)
├── assets/         # Static assets
├── ajax:libs:KaTeX:0.16.9/   # KaTeX (maths rendering)
├── s:sourcesans3:v20/        # Source Sans 3 font files
└── css2            # Font stylesheet
```

## 🚀 Run Locally

No build tools needed. Clone the repo and serve the folder with any static server:

```bash
git clone https://github.com/AarushOberoi/JEE-Formula-Sheet.git
cd JEE-Formula-Sheet

# Option 1: Python
python -m http.server 8000

# Option 2: Node
npx serve .
```

Then open `http://localhost:8000` in your browser.

## ☁️ Deployment

The site is deployed as static assets on **Cloudflare Workers**:

```bash
npx wrangler deploy
```

## 📖 Sources

- H C Verma, *Concepts of Physics*, Vol 1 & 2
- NCERT Mathematics, Class XII, Part I & II
- NCERT Chemistry, Class XI Part I & Class XII Part II

The structure follows the official JEE (Main) syllabus.

## 🤝 Contributing

Found a typo or a wrong formula? Contributions are welcome:

1. Fork the repository
2. Create a branch: `git checkout -b fix/formula-name`
3. Commit your changes and open a pull request

## ⚠️ Disclaimer

This is an unofficial study aid. Always cross-check formulas with your textbooks and the official NTA syllabus.

## 👤 Author

Made by [Aarush Oberoi](https://github.com/AarushOberoi)
