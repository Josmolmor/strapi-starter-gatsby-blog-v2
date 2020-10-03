import { BaseThemedCssFunction, css, DefaultTheme } from 'styled-components';
import keysOf from 'utils/keysOf';

// MEDIA QUERIES
const size = {
    mobile: '375px',
    mobileXL: '480px',
    tablet: '768px',
    tabletH: '990px',
    laptop: '1024px',
} as const;

const minWidthQuery = (width: string) => `@media (min-width: ${width})`;

const minWidth = (width: string): BaseThemedCssFunction<DefaultTheme> => (
    // tslint:disable:no-any
    first: any,
    ...args: any
) =>
    css`
        ${minWidthQuery(width)} {
            ${css(first, ...args)};
        }
    `;

interface Breakpoint extends ReturnType<typeof minWidth> {
    query: string;
}

export const from = keysOf(size).reduce(
    (acc, key) => ({
        ...acc,
        [key]: (() => {
            const mixin = minWidth(size[key]) as Breakpoint;
            mixin.query = minWidthQuery(size[key]);
            return mixin;
        })(),
    }),
    {} as { [key in keyof typeof size]: Breakpoint },
);
