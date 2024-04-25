module.exports = {
  "stories": [
    "../stories/showcase.stories.tsx",
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],

  "addons": [
    "@storybook/addon-essentials"
  ],

  "framework": {
    name: "@storybook/angular",
    options: {}
  },

  docs: {
    autodocs: true
  }
}
