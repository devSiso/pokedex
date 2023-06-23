const path = require('path');
import type { StorybookConfig } from "@storybook/vue-webpack5";

const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ['../public'],
  webpackFinal: async (config, { configType }) => {
    //@ts-ignore
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
};
export default config;
