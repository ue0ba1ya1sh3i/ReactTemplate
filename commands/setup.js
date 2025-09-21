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

const index = async () => {
  console.clear()

  const logo = figlet.textSync("Setup center", {
    font: "Standard",
    horizontalLayout: "default",
    verticalLayout: "default"
  })

  // First
  colorLog(logo, "yellow")
  console.log("Welcome to the Template setup center!")
  console.log("Please answer the following questions to set up your project.\n")

  // Questions
  const title = await ask("Input app title: ")
  const description = await ask("Input app description: ")
  const author = await ask("Input author name: ")

  // Get
  let pkg = JSON.parse(fs.readFileSync("./package.json", "utf-8"))

  // Write
  const env = [`VITE_TITLE=${title}`,`VITE_DESCRIPTION=${description}`, `VITE_AUTHOR=${author}`].join("\n")

  pkg.name = title.toLowerCase().replace(/\s+/g, "-")
  pkg.description = description
  pkg.author = author

  fs.writeFileSync(".env", env, "utf-8")
  fs.writeFileSync("./package.json", JSON.stringify(pkg, null, 2), "utf-8")

  // Final
  colorLog("✅ The project is roughly set up!", "green")
  colorLog('👉 Run "npm run dev" to start developing.', "green")
  rl.close()
}

index()
