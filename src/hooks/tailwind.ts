import page from "@/data/tailwind/page"
import parts from "@/data/tailwind/parts"
import unit from "@/data/tailwind/unit"
import color from "@/data/tailwind/color"
import template from "@/data/tailwind/template"

const sources = { page, parts, unit, color, template } as const

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
 * get(args, extraClasses)
 * - args: 各JSONのキーを指定してドットパスを取得
 * - extraClasses: 個別に追加したいクラス文字列 or 配列
 */
const get = (args: GetArgs, extraClasses?: string | string[]): string => {
  const collectedTokens: string[] = []

  // JSONからのクラスを収集
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

  // 第2引数の個人的なクラスを追加
  if (extraClasses) {
    const extras = Array.isArray(extraClasses) ? extraClasses : [extraClasses]
    for (const cls of extras) {
      cls.split(/\s+/).forEach((t) => {
        if (t) collectedTokens.push(t)
      })
    }
  }

  // 重複削除＋順序維持
  const seen = new Set<string>()
  const finalTokens = collectedTokens.filter((t) => !seen.has(t) && seen.add(t))
  return finalTokens.join(" ").trim()
}

export default get
