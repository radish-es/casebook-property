import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        name: "concept",
        label: "Concept",
        path: "content/concepts",
        match: {
          exclude: '**/_index',
        },
        format: 'md',
        fields: [
          {
            type: "string",
            name: "class",
            label: "Class",
            required: true,
            list: false,
            options: [
              {
                value: 'concept',
                label: 'Concept'
              }
            ]
          },
          {
            label: "Title",
            name: "title",
            type: "string",
          },
          {
            label: "Short Title",
            name: "short",
            type: "string",
          },
          {
            label: "Description",
            name: "description",
            type: "string"
          },
          {
            label: 'Tags',
            name: 'tags',
            type: 'string',
            list: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "lesson",
        label: "Lesson",
        path: "content/lessons",
        match: {
          exclude: '**/_index',
        },
        format: 'md',
        fields: [
          {
            type: "string",
            name: "class",
            label: "Class",
            required: true,
            list: false,
            options: [
              {
                value: 'lesson',
                label: 'Lesson'
              }
            ]
          },
          {
            label: "Title",
            name: "title",
            type: "string",
          },
          {
            label: "Short Title",
            name: "short",
            type: "string",
          },
          {
            label: "Description",
            name: "description",
            type: "string"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
