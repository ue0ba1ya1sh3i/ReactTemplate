import page from "@/assets/json/tailwind/page.json"
import parts from "@/assets/json/tailwind/parts.json"
import unit from "@/assets/json/tailwind/unit.json"
import color from "@/assets/json/tailwind/color.json"

const sources = { page, parts, unit, color } as const

const getNested = (obj: any, path: string): any => {
  return path.split(".").reduce((cur, key) => {
    if (cur == null) return undefined
    return typeof cur === "object" && key in cur ? cur[key] : undefined
  }, obj)
}

const collectStrings = (val: any): string[] => {
  if (val == null) return []
  if (typeof val === "string") return [val]
  if (Array.isArray(val)) return val.flatMap(collectStrings)
  if (typeof val === "object") return Object.values(val).flatMap(collectStrings)
  return []
}

type GetArgs = Partial<Record<keyof typeof sources, string | string[]>>

/**
 * get({...}) : 各JSON名をキーにしてドットパスを指定
 * 例：
 * get({
 *   page: "normal.root.color",
 *   parts: ["red.lg", "footer.bg"],
 *   unit: "p.ps"
 * })
 */
const get = (args: GetArgs): string => {
  const collectedTokens: string[] = []

  for (const [sourceKey, pathOrPaths] of Object.entries(args)) {
    const source = (sources as any)[sourceKey]
    if (!source) continue

    const paths = Array.isArray(pathOrPaths) ? pathOrPaths : [pathOrPaths]
    for (const path of paths) {
      const val = getNested(source, path)
      const tokens = collectStrings(val).flatMap((v) => v.split(/\s+/))
      for (const t of tokens) if (t) collectedTokens.push(t)
    }
  }

  // 重複削除＋順序維持
  const seen = new Set<string>()
  const finalTokens = collectedTokens.filter((t) => !seen.has(t) && seen.add(t))
  return finalTokens.join(" ").trim()
}

export default get
