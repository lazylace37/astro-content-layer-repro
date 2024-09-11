import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  loader: () => {
    return [{ id: "1", image: "./src/images/astro-logo-light-gradient.png" }];
  },
  schema: ({ image }) =>
    z.object({
      image: image(),
    }),
});
export const collections = {
  blog: blogCollection,
};
