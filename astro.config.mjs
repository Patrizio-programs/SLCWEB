// @ts-check
import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify/functions"; // or .edge depending on your needs

import react from "@astrojs/react";
import partytown from "@astrojs/partytown";
import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), partytown(), markdoc()],
  output: "server",          // must be inside the config object
  adapter: netlify(),        // also inside the config object
});
