import { StyledComponentProps } from 'styled-components';
import { Theme } from 'styles/themes';

export type ElementProps<T extends keyof JSX.IntrinsicElements> = StyledComponentProps<T, Theme, {}, keyof {}>;
