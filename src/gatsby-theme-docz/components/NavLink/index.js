/** @jsx jsx */
import React from 'react';
import { jsx, Box } from 'theme-ui';
import { NavLink as BaseNavLink } from "gatsby-theme-docz/src/components/NavLink/index";

export const NavLink = (props) => <Box sx={{ px: 3 }}><BaseNavLink {...props} /></Box>