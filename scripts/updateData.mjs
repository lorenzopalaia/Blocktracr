import * as fs from "fs";
import * as path from "path";

const updateData = () => {
  const now = new Date();

  const DataContent = `const config = {
  logos: {
    lastUpdated: "${now.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })}",
  },
  footer: {
    year: ${now.getFullYear()},
  },
};

export default config;
`;

  const DataPath = path.join(process.cwd(), "config.ts");

  try {
    fs.writeFileSync(DataPath, DataContent, "utf8");
    console.log("Data file updated successfully!");
  } catch (error) {
    console.error("Error updating Data file:", error);
  }
};

updateData();
