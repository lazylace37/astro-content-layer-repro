# Astro Content Layer bug

In the new Content Layer, returning an image from the `loader` like this:

```typescript
const blogCollection = defineCollection({
  loader: () => {
    return [{ id: "1", image: "./src/images/astro-logo-light-gradient.png" }];
  },
  schema: ({ image }) =>
    z.object({
      image: image(),
    }),
});
```

works in dev: `pnpm dev`,
but fails when building `pnpm build` with:

```bash
14:06:50 [ERROR] [vite] x Build failed in 500ms
Could not resolve "./src/images/astro-logo-light-gradient.png?astroContentImageFlag=" from ".astro/assets.mjs"
```
