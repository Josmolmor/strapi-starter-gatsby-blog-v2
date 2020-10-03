import dark from './dark';
import light from './light';

const themesInternal = {
    dark,
    light,
};

export type Theme = typeof light;
export type ThemeKey = keyof typeof themesInternal;

const themes: { [k in ThemeKey]: Theme } = themesInternal;

export default themes;
