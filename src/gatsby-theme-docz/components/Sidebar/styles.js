import { media } from "gatsby-theme-docz/src/theme/breakpoints";
import {
  wrapper as baseWrapper,
  overlay as baseOverlay,
} from "gatsby-theme-docz/src/components/Sidebar/styles";

export * from "gatsby-theme-docz/src/components/Sidebar/styles";

export const wrapper = (params) => {
  const styles = baseWrapper(params);
  return {
    ...styles,
    px: 0,
    py: 0,
    [media.tablet]: {
      ...styles[media.tablet],
      top: 0,
    },
  };
};
export const overlay = (params) => ({ ...baseOverlay(params), top: 0 });
