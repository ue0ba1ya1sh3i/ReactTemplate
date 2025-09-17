const data = {
  button: (color: string) => {
    const styles = color === "white"
      ? "bg-white text-gray-800 hover:bg-gray-200"
      : "bg-gray-800 text-white hover:bg-gray-700";

    return `py-3 px-5 rounded-xl shadow-lg font-bold transition ${styles}`;
  }
} as const;

export default data;
