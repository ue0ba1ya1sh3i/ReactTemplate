// Import
import fs from "node:fs"
import readline from "node:readline"
import { stdin as input, stdout as output } from "node:process"
import figlet from "figlet"

const rl = readline.createInterface({ input, output })

// Functons
const br = (times = 1) => process.stdout.write("\n".repeat(times))
const ask = (question) => new Promise((resolve) => rl.question(question, resolve))

const colorLog = (text, color) => {
  const colors = { 
    red: "\x1b[31m", 
    green: "\x1b[32m", 
    yellow: "\x1b[33m" 
  }

  console.log(`${colors[color] || "\x1b[0m"}${text}\x1b[0m`)
}

const logBox = (...lines) => {
  // Values
  const width = Math.max(...lines.map((l) => l.length))
  const top = "┌" + "─".repeat(width + 2) + "┐"
  const bottom = "└" + "─".repeat(width + 2) + "┘"

  // Log
  colorLog(top, "green")

  lines.forEach((line) => {
    const space = " ".repeat(width - line.length)
    colorLog(`│ ${line}${space} │`, "green")
  })

  colorLog(bottom, "green")
}

// Main
const index = async () => {
  //Values
  let answers = {}

  const questions = [
    { key: "title", prompt: "Input app title: " },
    { key: "short_title", prompt: "Input app short title: " },
    { key: "description", prompt: "Input app description: " },
    { key: "author", prompt: "Input author name: " },
    { key: "version", prompt: "Input app version: " },
    { key: "google_serch_id", prompt: "Input google serch id" }
  ]

  // Messages
  br()
  const logo = figlet.textSync("Setup center", { font: "Standard" })
  colorLog(logo, "yellow")
  br()
  console.log("Welcome to the Template setup center!")
  console.log("Please answer the following questions to set up your project.")
  br()

  // Questions
  for (const q of questions) {
    answers[q.key] = await ask(q.prompt)
  }

  br()

  // Set files
  try {
    const pkg = JSON.parse(fs.readFileSync("./package.json", "utf-8"))

    pkg.name = answers.title.toLowerCase().replace(/\s+/g, "-")
    pkg.description = answers.description
    pkg.author = answers.author
    pkg.version = answers.version
    pkg.license = undefined

    fs.writeFileSync("./package.json", JSON.stringify(pkg, null, 2), "utf-8")
    
    const envVars = {
      VITE_TITLE: answers.title,
      VITE_SHORT_TITLE: answers.short_title,
      VITE_DESCRIPTION: answers.description,
      VITE_AUTHOR: answers.author
    }
    
    fs.writeFileSync(
      ".env",
      Object.entries(envVars)
        .map(([k, v]) => `${k}=${v}`)
        .join("\n"),
      "utf-8"
    )

    // LICENSE 削除
    if (fs.existsSync("./LICENSE")) fs.unlinkSync("./LICENSE")
    if (fs.existsSync("./README_japanese.md")) fs.unlinkSync("./README_japanese.md")
  } catch (err) {
    colorLog(`Error: ${err.message}`, "red")
    rl.close()
    return
  }
  
  logBox("The project is roughly set up!", 'Run "npm run dev" to start developing.')

  rl.close()
}

index()
