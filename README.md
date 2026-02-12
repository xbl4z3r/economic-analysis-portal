<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey?style=for-the-badge" alt="License" />
</p>

<h1 align="center">Inflationary Imbalance and Economic Recession</h1>

<p align="center">
  <strong>Economic Analysis Portal for Romania</strong>
</p>

---

## Description

This project is an **educational web portal** dedicated to analyzing current economic phenomena in Romania, with a focus on **inflation** and **economic recession**. The application provides a detailed perspective on the causes of the 9% inflation rate, recession risks, and government measures proposed for economic stabilization.

The project was developed as part of **Colegiul Național „Tudor Vladimirescu"**'s participation in the competition, aiming to present complex economic concepts in an interactive and accessible manner.

## Features

### Home Page (Acasă)
- **Hero Section** with professional financial design and dynamic visual effects
- Key statistics presented in animated cards (inflation rate, proposed VAT, recession duration)
- Navigation cards to main sections with intuitive icons
- Contextual section with current economic situation analysis

### Inflation Page (Inflație)
- **Clear definition** of the inflation concept
- **Visual European comparison** with countries like Estonia, Croatia, and Austria
- **6 detailed cards** presenting the causes of the 9% inflation rate:
  - Income growth without productivity backing
  - Consumer credit expansion
  - Decline in domestic production
  - Excessive imports
  - Budget deficit and excessive borrowing
  - Electoral period effects

### Recession Page (Recesiune)
- **Definition** emphasizing the 2 consecutive quarters criterion
- **Interactive timeline** illustrating the transition from inflation to recession in 5 steps
- **Social effects cards** with severity indicators:
  - Rising unemployment
  - Credit difficulties
  - Population pessimism
  - Labor force migration
  - Poverty intensification

### Government Policies Page (Politici Guvernamentale)
- **VAT comparison table** (old vs. new rates)
- **Tax cards** for dividends, housing, land, and automobiles
- **Excise section** for tobacco (+10%) and fuel (+10%)
- **Budgetary measures**: salary and pension freezes
- **Summary table** with all fiscal measures and their impact

### Design & UX
- **Dual theme** (light/dark mode) with instant toggle
- **Color palette** "Financial Blue" and "Slate Gray" for professional appearance
- **Responsive design** optimized for desktop, tablet, and mobile
- **Fixed navigation** with hamburger menu on mobile devices
- **Subtle animations** for an interactive experience

## Technologies Used

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.1.6 | React framework with App Router for routing and SSR |
| **React** | 19.2.4 | Library for building user interfaces |
| **TypeScript** | 5.9 | Static typing for safer and more maintainable code |
| **Tailwind CSS** | 4.1 | Utility-first CSS framework for rapid styling |
| **Bun** | Latest | High-performance JavaScript runtime and package manager |

## Open Source Libraries

This project uses the following open source libraries, to which we extend our gratitude:

| Library | License | Usage |
|---------|---------|-------|
| [**Lucide React**](https://lucide.dev/) | ISC | Modern and consistent SVG icons |
| [**next-themes**](https://github.com/pacocoursey/next-themes) | MIT | Dark/light mode theme management |
| [**class-variance-authority**](https://cva.style/) | Apache-2.0 | Component variants for UI |
| [**clsx**](https://github.com/lukeed/clsx) | MIT | Utility for conditional CSS classes |
| [**tailwind-merge**](https://github.com/dcastil/tailwind-merge) | MIT | Intelligent Tailwind class merging |
| [**Radix UI**](https://www.radix-ui.com/) | MIT | Accessible UI primitives |
| [**shadcn/ui**](https://ui.shadcn.com/) | MIT | Reusable UI components (Button, Card) |
| [**Geist Font**](https://vercel.com/font) | OFL-1.1 | Modern font by Vercel |

## Installation & Running

### Prerequisites
- [Bun](https://bun.sh/) (recommended) or Node.js 18+

### Installation Steps

```bash
# Clone the repository
git clone https://github.com/xbl4z3r/economic-analysis-portal.git

# Navigate to the project directory
cd economic-analysis-portal

# Install dependencies
bun install

# Start the development server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Available Commands

| Command | Description |
|---------|-------------|
| `bun run dev` | Start the development server |
| `bun run build` | Build the application for production |
| `bun run start` | Start the production server |
| `bun run lint` | Check code with ESLint |

## Project Structure

```
economic-analysis-portal/
├── src/
│   ├── app/                    # App Router (Next.js 16)
│   │   ├── page.tsx            # Home page
│   │   ├── layout.tsx          # Application layout
│   │   ├── globals.css         # Global styles and theme
│   │   ├── inflatie/
│   │   │   └── page.tsx        # Inflation page
│   │   ├── recesiune/
│   │   │   └── page.tsx        # Recession page
│   │   └── politici/
│   │       └── page.tsx        # Government policies page
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   └── card.tsx
│   │   ├── navbar.tsx          # Navigation bar
│   │   ├── footer.tsx          # Site footer
│   │   ├── theme-provider.tsx  # Theme provider
│   │   └── theme-toggle.tsx    # Dark/light toggle button
│   └── lib/
│       └── utils.ts            # Utility functions (cn)
├── public/                     # Static files
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## Deployment

The application is optimized for deployment on [Vercel](https://vercel.com/):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/xbl4z3r/economic-analysis-portal)

Alternatively, it can be deployed on any platform that supports Next.js (Netlify, Railway, etc.).

## License

This project is licensed under the [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License (CC BY-NC-ND 4.0)](LICENSE.md).

You are free to:
- **Share** — copy and redistribute the material in any medium or format

Under the following terms:
- **Attribution** — You must give appropriate credit
- **NonCommercial** — You may not use the material for commercial purposes
- **NoDerivatives** — You may not distribute modified versions

## Author

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/xbl4z3r">
        <img src="https://github.com/xbl4z3r.png" width="100px;" alt="xbl4z3r"/><br />
        <sub><b>xbl4z3r</b></sub>
      </a>
      <br />
      <sub>Developer & Designer</sub>
    </td>
  </tr>
</table>
