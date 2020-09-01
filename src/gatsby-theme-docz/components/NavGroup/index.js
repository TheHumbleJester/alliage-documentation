/** @jsx jsx */
import React from 'react';
import { jsx, Box } from 'theme-ui';
import { NavGroup as BaseNavGroup } from "gatsby-theme-docz/src/components/NavGroup";

export const NavGroup = (props) => <Box sx={{ px: 3 }}><BaseNavGroup {...props} /></Box>