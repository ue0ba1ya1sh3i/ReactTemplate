export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-nested": {},

    "postcss-preset-env": {
      stage: 1,

      features: {
        "nesting-rules": true
      }
    },

    ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {})
  }
}
