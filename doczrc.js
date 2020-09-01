import noriega from "typography-theme-noriega";
import { merge } from "lodash/fp";
import { toTheme } from "@theme-ui/typography";

export default {
  menu: ["Introduction", "Getting started", "Recipe: Webserver", "Going further"],
  ignore: ['README.md'],
  plugins: ["gatsby-theme-docz"],
  themeConfig: merge(toTheme(noriega), {
    colors: {
      primary: "#cc9779",
      link: "#cc9779",
      sidebar: {
        navLinkActive: "#cc9779",
      },
      text: "#4b4d4e",
    },
    styles: {
      h1: {
        fontSize: 6,
      },
      h2: {
        fontSize: 3,
      },
      h3: {
        fontSize: 2,
      },
      inlineCode: {
        color: '#d73a49',
        backgroundColor: '#f6f8fa',
        padding: '0.15rem 0.30rem',
        borderRadius: '0.15rem'
      }
    },
  }),
};
