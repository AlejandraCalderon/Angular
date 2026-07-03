const daisyui = require("daisyui");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  plugins: [daisyui.default || daisyui],
  daisyui: {
    themes: ['night'],
  },
};
