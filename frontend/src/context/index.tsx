import React, { FC, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Themes from 'styles/themes';

export const myContext = React.createContext<{ isDark: boolean; changeTheme: any }>({
    isDark: false,
    changeTheme: undefined,
});

const Provider: FC = ({ children }) => {
    const [isDark, setTheme] = useState(false);

    return (
        <myContext.Provider
            value={{
                isDark,
                changeTheme: () => setTheme(!isDark),
            }}
        >
            <ThemeProvider theme={isDark ? Themes.dark : Themes.light}>{children}</ThemeProvider>
        </myContext.Provider>
    );
};

const ThemeContextProvider: FC<{ element: any }> = ({ element }) => <Provider>{element}</Provider>;

export default ThemeContextProvider;
