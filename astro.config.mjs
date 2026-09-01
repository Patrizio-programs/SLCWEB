// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import partytown from "@astrojs/partytown";
import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), partytown(), markdoc()],
  output: "static", // must be inside the config object
  // also inside the config object
});
