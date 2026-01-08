# Mint Digital Website

Marketing website for Mint Digital - a boutique consulting agency helping non-profits, universities, and public sector organizations design data-driven tools and strategies.

## Tech Stack

- **Framework:** SvelteKit 2.x with Svelte 5
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn-svelte pattern (bits-ui based)
- **Icons:** lucide-svelte
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
cd website
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
npm run preview  # preview production build locally
```

### Type Checking

```bash
npm run check
```

## Docker (for Claude Code)

If you want to yolo with Claude Code in a sandboxed environment:

```bash
docker-compose up -d
docker compose exec agent claude --dangerously-skip-permissions
```

This gives Claude Code a contained environment to work in without risk to your local system.

**You may need to copy a login url into a browser and then copy an auth code back into the docker terminal**

## Project Structure

```
mint/
├── CLAUDE.md           # AI assistant context and guidelines
├── Dockerfile
├── docker-compose.yml
├── content-assets/     # Design references, copy, and images
└── website/            # SvelteKit application (Vercel root)
    ├── src/
    │   ├── routes/     # Pages
    │   └── lib/        # Components and utilities
    └── static/         # Static assets
```

## Additional Context

See `CLAUDE.md` for detailed project guidelines, design references, code conventions, and content assets. This file is useful context for AI assistants working on the project.
