import data from '../data/tailwind.json'

const functions = {
  button: (color: string) => {
    let styles = ''

    if (data.color[color as keyof typeof data.color]) {
      styles = data.color[color as keyof typeof data.color]?.button || ''
    }

    return `py-3 px-5 rounded-xl shadow-lg font-bold transition ${styles}`
  },

  px: {
    normal: 'px-4',
  },
} as const

export default functions
