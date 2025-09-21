// Librarys
import fs from "node:fs"
import readline from "node:readline"
import { stdin as input, stdout as output } from "node:process"
import figlet from "figlet"

// Setup
const rl = readline.createInterface({ input, output })

const colorLog = (text, color) => {
  const colors = {
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m"
  }

  const set = colors[color] || "\x1b[0m"

  console.log(`${set}${text}\x1b[0m`)
}

const ask = (question) => {
  return new Promise((resolve) => rl.question(question, resolve))
}

const br = (times = 1) => {
  process.stdout.write("\n".repeat(times));
};

const logBox = (...lines) => {
  const width = Math.max(...lines.map(l => l.length));
  const top = "┌" + "─".repeat(width + 2) + "┐";
  const bottom = "└" + "─".repeat(width + 2) + "┘";

  colorLog(top, "green");
  lines.forEach(line => {
    const space = " ".repeat(width - line.length);
    colorLog(`│ ${line}${space} │`, "green");
  });
  colorLog(bottom, "green");
};

const index = async () => {
  const logo = figlet.textSync("Setup center", {
    font: "Standard",
    horizontalLayout: "default",
    verticalLayout: "default"
  })

  // First
  colorLog(logo, "yellow")
  br()
  console.log("Welcome to the Template setup center!")
  console.log("Please answer the following questions to set up your project.")
  br()

  // Questions
  const title = await ask("Input app title: ")
  const description = await ask("Input app description: ")
  const author = await ask("Input author name: ")
  const version = await ask("Input app version: ")
  br()

  // Get
  let pkg = JSON.parse(fs.readFileSync("./package.json", "utf-8"))

  // Write
  const env = [`VITE_TITLE=${title}`,`VITE_DESCRIPTION=${description}`, `VITE_AUTHOR=${author}`].join("\n")

  pkg.name = title.toLowerCase().replace(/\s+/g, "-")
  pkg.description = description
  pkg.author = author
  pkg.version = version
  pkg.license = undefined

  fs.writeFileSync(".env", env, "utf-8")
  fs.writeFileSync("./package.json", JSON.stringify(pkg, null, 2), "utf-8")

  // Delete
  if (fs.existsSync('./LICENSE')) {
    fs.unlinkSync('./LICENSE')
  }

  // Final
  logBox(
    "The project is roughly set up!",
    'Run "npm run dev" to start developing.'
  );
  rl.close()
}

index()
