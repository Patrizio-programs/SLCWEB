import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  // Uncomment to allow cross-origin requests from non-localhost origins
  // during local development (e.g. GitHub Codespaces, Gitpod, Docker).
  // Use 'private' to allow all private-network IPs (WSL2, Docker, etc.)
  // server: {
  //   allowedOrigins: ['https://your-codespace.github.dev'],
  // },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "eyebrow",
            label: "Eyebrow",
          },
          {
            type: "string",
            name: "title",
            label: "Headline",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Tagline",
            isBody: true,
          },
          {
            type: "object",
            name: "ctaPrimary",
            label: "Primary button",
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "href", label: "Link" },
            ],
          },
          {
            type: "object",
            name: "ctaSecondary",
            label: "Secondary button",
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "href", label: "Link" },
            ],
          },
        ],
        ui: {
          // Opens the /tinacms-demo page for visual editing. Change or remove to fit your site.
          router: () => "/tinacms-demo",
        },
      },
      {
        name: "hero",
        label: "Hero",
        path: "content/hero",
        fields: [
          {
            type: "string",
            name: "heroTitle",
            label: "Hero Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "heroText",
            label: "Hero Text",
            isBody: true,
          },
          {
            type: "object",
            name: "heroButton",
            label: "Hero Button",
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "button", label: "Button Text" },
            ], 
          },
        ],
      },
      {
        name: "nav",
        label: "Navigation",
        path: "content/nav",
        fields: [
          {
            type: "string",
            name: "nav1Label",
            label: "Nav 1 Label",
          },
          {
            type: "string",
            name: "nav1Link",
            label: "Nav 1 Link",
          },
          {
            type: "string",
            name: "nav2Label",
            label: "Nav 2 Label",
          },
          {
            type: "string",
            name: "nav2Link",
            label: "Nav 2 Link",
          },
          {
            type: "string",
            name: "nav3Label",
            label: "Nav 3 Label",
          },
          {
            type: "string",
            name: "nav3Link",
            label: "Nav 3 Link",
          },
        ],
      },
      {
        name: "services",
        label: "Services",
        path: "content/services",
        fields: [
          {
            type: "object",
            name: "service1",
            label: "Service 1",
            fields: [
              { type: "string", name: "serviceTitle", label: "Service Title" },
              { type: "string", name: "serviceText", label: "Service Text" },
            ],
          },
          {
            type: "object",
            name: "service2",
            label: "Service 2",
            fields: [
              { type: "string", name: "serviceTitle", label: "Service Title" },
              { type: "string", name: "serviceText", label: "Service Text" },
            ],
          },
          {
            type: "object",
            name: "service3",
            label: "Service 3",
            fields: [
              { type: "string", name: "serviceTitle", label: "Service Title" },
              { type: "string", name: "serviceText", label: "Service Text" },
            ],
          },
          {
            type: "object",
            name: "service4",
            label: "Service 4",
            fields: [
              { type: "string", name: "serviceTitle", label: "Service Title" },
              { type: "string", name: "serviceText", label: "Service Text" },
            ],
          },
        ],
      },
      {
        name: "socials",
        label: "Socials",
        path: "content/socials",
        fields: [
          {
            type: "string",
            name: "facebook",
            label: "Facebook",
          },
          {
            type: "string",
            name: "instagram",
            label: "Instagram",
          },
          {
            type: "string",
            name: "youtube",
            label: "YouTube",
          },
          {
            type: "string",
            name: "linkedin",
            label: "LinkedIn",
          },
        ],
      },
      {
        name: "courses",
        label: "Courses",
        path: "content/courses",
        fields: [
          {
            type: "string",
            name: "lessonNumber",
            label: "Lesson Number",
          },
          {
            type: "string",
            name: "ClassBadge",
            label: "Class Badge",
          },
          {
            type: "string",
            name: "ClassDescription",
            label: "Class Description",
     
          },
          {
            type: "string",
            name: "detail1",
            label: "Detail 1",
          },
          {
            type: "string",
            name: "detail2",
            label: "Detail 2",
          },
          {
            type: "string",
            name: "detail3",
            label: "Detail 3",
          },
          {
            type: "string",
            name: "detail4",
            label: "Detail 4",
          },
          {
            type: "string",
            name: "enrollFormLink",
            label: "Enroll Form Link",
          },
        ],
      },
      
      // add new schema after this line
    ],
  },
});
