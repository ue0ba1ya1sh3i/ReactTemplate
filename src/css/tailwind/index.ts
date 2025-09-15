const tailwind = {
  button: (bg: string, text: string, hover: string) => {
    return `py-3 px-5 rounded-xl shadow-lg font-bold transition bg-${bg} text-${text} hover:bg-${hover}`;
  }
} as const;

export default tailwind;