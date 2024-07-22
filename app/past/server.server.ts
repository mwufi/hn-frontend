import fs from "fs/promises"
import path from "path"

export async function readBarJson() {
  try {
    // Construct the path to bar.json
    const filePath = path.join(process.cwd(), "bar.json")

    // Read the file
    const fileContents = await fs.readFile(filePath, "utf8")

    // Parse the JSON content
    const data = JSON.parse(fileContents)

    return data
  } catch (error) {
    console.error("Error reading bar.json:", error)
    throw error
  }
}

export async function hello(key, settingsData) {
  "use server"

  console.log("hello", key, settingsData)
}

