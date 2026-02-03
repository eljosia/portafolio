import { defineConfig } from "tinacms";
import { SCHEMA_FIELDS, fieldDefinitions } from "../src/constants/schema";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "master";

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
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
      {
        name: "pageData",
        label: "Datos de la Página",
        path: "src/data",
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: SCHEMA_FIELDS.map((field) => ({
          type: "object",
          name: field.name,
          label: field.label,
          fields: fieldDefinitions[field.name] || [{ type: "string", name: "placeholder", label: "Próximamente" }]
        })),
      },
    ],
},
});