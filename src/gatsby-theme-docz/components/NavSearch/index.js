/** @jsx jsx */
import React from "react";
import { jsx, Box } from "theme-ui";
import { NavSearch as BaseNavSearch } from "gatsby-theme-docz/src/components/NavSearch/index";

import logo from "./logo.svg";

export const NavSearch = (props) => {
  return (
    <>
      <Box sx={{ pl: 2, pt: 2, pb: 1, mb: 1 }}>
        <a href="/">
          <img src={logo} alt="Alliage" width="90%" />
        </a>
      </Box>
      <Box sx={{ px: 3, py: 2, backgroundColor: (t) => t.colors.header.bg }}>
        <BaseNavSearch {...props} />
      </Box>
    </>
  );
};
