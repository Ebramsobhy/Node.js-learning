import fs from "fs";

export function parseCSV(filePath) {
  const lines = fs.readFileSync(filePath, "utf8").trim().split("\n");
  const dataLines = lines.slice(1);
  return dataLines.map(line => line.split(","));
}