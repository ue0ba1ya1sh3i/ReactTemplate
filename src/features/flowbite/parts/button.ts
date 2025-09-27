const button = () => {
  const styles = {
    base: "font-bold relative flex items-center justify-center rounded-lg text-center font-medium focus:outline-none focus:ring-4",
    disabled: "pointer-events-none opacity-50",
    fullSized: "w-full",
    grouped: "rounded-none border-l-0 first:rounded-s-lg first:border-l last:rounded-e-lg focus:ring-2",
    pill: "rounded-full",

    size: {
      xs: "h-8 px-3 text-xs",
      sm: "h-9 px-3 text-sm",
      md: "h-10 px-5 text-sm",
      lg: "h-12 px-5 text-base",
      xl: "h-[52px] px-6 text-base"
    },

    "color": {
      "default": "bg-main-700 text-white hover:bg-main-800 focus:ring-main-300 dark:bg-main-600 dark:hover:bg-main-700 dark:focus:ring-main-800",
      "light": "bg-main-200 text-main-900 hover:bg-main-300 focus:ring-main-100 dark:bg-main-50 dark:hover:bg-main-100 dark:focus:ring-main-200"
    },

    "outlineColor": {
      "default": "border border-main-700 text-main-700 hover:border-main-800 hover:bg-main-800 hover:text-white focus:ring-main-300 dark:border-main-600 dark:text-main-500 dark:hover:border-main-700 dark:hover:bg-main-700 dark:hover:text-white dark:focus:ring-main-800",
      "light": "border border-main-200 text-main-900 hover:border-main-300 hover:bg-main-300 hover:text-main-900 focus:ring-main-100 dark:border-main-100 dark:text-main-200 dark:hover:border-main-200 dark:hover:bg-main-200 dark:hover:text-main-900 dark:focus:ring-main-100"
    }
  }

  return styles
}

export default button()