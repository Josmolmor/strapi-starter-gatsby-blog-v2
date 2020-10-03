import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from './src/styles/themes';

export const wrapRootElement = ({ element }) => <ThemeProvider theme={Theme.light}>{element}</ThemeProvider>;
