import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const apps = [
  { name: "catalog", port: 5173, base: "/", title: "React Tutorials" },
  { name: "router", port: 5174, base: "/router/", title: "React Router" },
  { name: "jotai", port: 5175, base: "/jotai/", title: "Jotai" },
  {
    name: "context-reducer",
    port: 5176,
    base: "/context-reducer/",
    title: "Context + Reducer",
  },
  { name: "hooks", port: 5177, base: "/hooks/", title: "Hooks" },
  { name: "hoc", port: 5178, base: "/hoc/", title: "HOC" },
  {
    name: "react-bootstrap",
    port: 5179,
    base: "/react-bootstrap/",
    title: "React Bootstrap",
  },
  { name: "radix", port: 5180, base: "/radix/", title: "Radix UI" },
  { name: "axios", port: 5181, base: "/axios/", title: "Axios" },
  {
    name: "tanstack-query",
    port: 5182,
    base: "/tanstack-query/",
    title: "TanStack Query",
  },
  { name: "forms", port: 5183, base: "/forms/", title: "React Hook Form + Zod" },
  {
    name: "suspense-lazy",
    port: 5184,
    base: "/suspense-lazy/",
    title: "Suspense + Lazy",
  },
  { name: "portals", port: 5185, base: "/portals/", title: "Portals" },
  {
    name: "error-boundaries",
    port: 5186,
    base: "/error-boundaries/",
    title: "Error Boundaries",
  },
];

function write(path, content) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, content);
}

for (const app of apps) {
  const dir = join(root, "apps", app.name);
  if (existsSync(join(dir, "package.json"))) {
    console.log(`skip existing ${app.name}`);
    continue;
  }

  const isBootstrap = app.name === "react-bootstrap";
  const deps = {
    react: "^19.1.0",
    "react-dom": "^19.1.0",
  };
  const devDeps = {
    "@types/react": "^19.1.2",
    "@types/react-dom": "^19.1.2",
    "@vitejs/plugin-react": "^4.4.1",
    typescript: "^5.8.3",
    vite: "^6.3.5",
  };

  if (!isBootstrap) {
    deps["@tailwindcss/vite"] = "^4.1.5";
    deps.tailwindcss = "^4.1.5";
  }

  write(
    join(dir, "package.json"),
    JSON.stringify(
      {
        name: `@tutorials/${app.name}`,
        private: true,
        version: "0.0.0",
        type: "module",
        scripts: {
          dev: `vite --port ${app.port} --strictPort`,
          build: "tsc -b && vite build",
          lint: "tsc -b --pretty false",
          preview: `vite preview --port ${app.port}`,
        },
        dependencies: deps,
        devDependencies: devDeps,
      },
      null,
      2,
    ) + "\n",
  );

  write(
    join(dir, "tsconfig.json"),
    JSON.stringify(
      {
        extends: "../../tsconfig.base.json",
        compilerOptions: {
          tsBuildInfoFile: "./node_modules/.tmp/tsconfig.tsbuildinfo",
        },
        include: ["src"],
        references: [{ path: "./tsconfig.node.json" }],
      },
      null,
      2,
    ) + "\n",
  );

  write(
    join(dir, "tsconfig.node.json"),
    JSON.stringify(
      {
        compilerOptions: {
          target: "ES2022",
          lib: ["ES2023"],
          module: "ESNext",
          skipLibCheck: true,
          moduleResolution: "bundler",
          allowImportingTsExtensions: true,
          isolatedModules: true,
          moduleDetection: "force",
          noEmit: true,
          strict: true,
          noUnusedLocals: true,
          noUnusedParameters: true,
          noFallthroughCasesInSwitch: true,
          noUncheckedSideEffectImports: true,
        },
        include: ["vite.config.ts"],
      },
      null,
      2,
    ) + "\n",
  );

  const vitePlugins = isBootstrap
    ? `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === "production" ? "${app.base}" : "/",
});
`
    : `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.NODE_ENV === "production" ? "${app.base}" : "/",
});
`;

  write(join(dir, "vite.config.ts"), vitePlugins);

  write(
    join(dir, "index.html"),
    `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${app.title}</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`,
  );

  write(
    join(dir, "src/vite-env.d.ts"),
    `/// <reference types="vite/client" />
`,
  );

  if (!isBootstrap) {
    write(
      join(dir, "src/index.css"),
      `@import "tailwindcss";

:root {
  font-family: "IBM Plex Sans", "Segoe UI", sans-serif;
  line-height: 1.5;
  color: #0f172a;
  background: #f8fafc;
}

body {
  margin: 0;
  min-height: 100vh;
}
`,
    );
  }

  write(
    join(dir, "src/main.tsx"),
    `import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
${isBootstrap ? "" : 'import "./index.css";\n'}
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
`,
  );

  write(
    join(dir, "src/App.tsx"),
    `export const App = () => {
  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="text-3xl font-semibold">${app.title}</h1>
      <p className="mt-2 text-slate-600">Lesson placeholder.</p>
    </main>
  );
};
`,
  );

  console.log(`created ${app.name}`);
}
