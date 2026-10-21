# arielwolffe.com

My corner of the internet: projects, writing and whatever I'm tinkering with.

Two modes, one set of content (`src/content/site.ts`):

- **Standard mode** at `/`: fast, static, works everywhere.
- **Story mode** at `/story` (desktop only, in progress): a scroll-driven storybook built with GSAP.

## Run it

```sh
nvm use          # Node version in .nvmrc
pnpm install
pnpm dev         # http://localhost:4321
pnpm build       # static site in dist/
```

Built with [Astro](https://astro.build).
