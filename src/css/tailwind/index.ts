export const tailwind = {
  body: {
    main: "bg-gradient-to-r from-violet-200 to-pink-200 dark:bg-gray-900 p-4 text-black dark:text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
  },

  page: {
    welcome: {
      main: {
        main: "flex justify-center",
        title: "bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent"
      }
    }
  }
} as const;