import { promises as fs } from "fs";
import path from "path";

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch (error) {
    return false;
  }
}

async function loadPackageJSON(rootDir) {
  const pkgPath = path.join(rootDir, "package.json");
  if (!(await fileExists(pkgPath))) {
    return null;
  }

  try {
    const raw = await fs.readFile(pkgPath, "utf8");
    return JSON.parse(raw);
  } catch (error) {
    console.warn(`Unable to parse package.json: ${error.message}`);
    return null;
  }
}

function containsDependency(pkg, name) {
  if (!pkg) return false;
  const sections = ["dependencies", "devDependencies", "peerDependencies", "optionalDependencies"];
  return sections.some((key) => typeof pkg[key] === "object" && pkg[key] && name in pkg[key]);
}

function scriptContains(pkg, name) {
  if (!pkg || typeof pkg.scripts !== "object" || !pkg.scripts) {
    return false;
  }
  return Object.values(pkg.scripts).some((value) => typeof value === "string" && value.includes(name));
}

async function detectFramework(rootDir = process.cwd()) {
  const pkg = await loadPackageJSON(rootDir);
  if (pkg) {
    if (containsDependency(pkg, "next") || scriptContains(pkg, "next")) {
      return {
        framework: "next",
        source: "package.json",
      };
    }

    if (
      containsDependency(pkg, "vite") ||
      containsDependency(pkg, "react-scripts") ||
      scriptContains(pkg, "vite") ||
      scriptContains(pkg, "react-scripts")
    ) {
      return {
        framework: "spa",
        source: "package.json",
      };
    }
  }

  const nextIndicators = [
    "next.config.js",
    "next.config.mjs",
    "pages",
    "app",
  ];

  for (const entry of nextIndicators) {
    const candidate = path.join(rootDir, entry);
    if (await fileExists(candidate)) {
      return {
        framework: "next",
        source: candidate,
      };
    }
  }

  const spaIndicators = [
    "vite.config.js",
    "vite.config.ts",
    "index.html",
    path.join("public", "index.html"),
    path.join("src", "main.jsx"),
    path.join("src", "main.tsx"),
  ];

  for (const entry of spaIndicators) {
    const candidate = path.join(rootDir, entry);
    if (await fileExists(candidate)) {
      return {
        framework: "spa",
        source: candidate,
      };
    }
  }

  return {
    framework: "unknown",
    source: null,
  };
}

const rootDir = process.argv[2] ? path.resolve(process.argv[2]) : process.cwd();
detectFramework(rootDir)
  .then((result) => {
    if (result.framework === "next") {
      console.log("Detected Next.js project.");
    } else if (result.framework === "spa") {
      console.log("Detected static SPA (React/Vite) project.");
    } else {
      console.log("Unable to confidently detect project type.");
    }
    console.log(JSON.stringify(result, null, 2));
  })
  .catch((error) => {
    console.error("Detection failed:", error);
    process.exitCode = 1;
  });
