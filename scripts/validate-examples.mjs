import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";

const rootDir = process.cwd();
const schemaPath = path.join(rootDir, "rfc", "schemas", "agent-manifest.v0.1.schema.json");
const schemaOnly = process.argv.includes("--schema-only");

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function walkJsonFiles(dirPath) {
  if (!fs.existsSync(dirPath)) {
    return [];
  }

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkJsonFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".json")) {
      files.push(fullPath);
    }
  }

  return files.sort();
}

function formatErrors(errors = []) {
  return errors
    .map((error) => {
      const location = error.instancePath || "/";
      return `  - ${location}: ${error.message}`;
    })
    .join("\n");
}

const ajv = new Ajv2020({
  allErrors: true,
  strict: false
});
addFormats(ajv);

let schema;
try {
  schema = readJson(schemaPath);
  ajv.compile(schema);
  console.log(`ok schema ${path.relative(rootDir, schemaPath)}`);
} catch (error) {
  console.error(`failed schema ${path.relative(rootDir, schemaPath)}`);
  console.error(error.message);
  process.exit(1);
}

if (schemaOnly) {
  process.exit(0);
}

const validate = ajv.getSchema(schema.$id) ?? ajv.compile(schema);
const rfcExampleFiles = walkJsonFiles(path.join(rootDir, "rfc", "examples"));
const existingManifestFiles = walkJsonFiles(path.join(rootDir, "examples")).filter(
  (filePath) => path.basename(filePath) === "agent-manifest.json"
);

const files = [...new Set([...rfcExampleFiles, ...existingManifestFiles])];
let failed = 0;

for (const filePath of files) {
  const relativePath = path.relative(rootDir, filePath);

  try {
    const data = readJson(filePath);
    const valid = validate(data);

    if (valid) {
      console.log(`ok ${relativePath}`);
    } else {
      failed += 1;
      console.error(`failed ${relativePath}`);
      console.error(formatErrors(validate.errors));
    }
  } catch (error) {
    failed += 1;
    console.error(`failed ${relativePath}`);
    console.error(`  - ${error.message}`);
  }
}

if (failed > 0) {
  console.error(`\n${failed} file(s) failed validation.`);
  process.exit(1);
}

console.log(`\nValidated ${files.length} example file(s).`);
