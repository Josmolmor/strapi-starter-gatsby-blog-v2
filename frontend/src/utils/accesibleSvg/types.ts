import { ReactNode } from 'react';
import { ElementProps } from 'utils/elementProps';

export interface AcceptedProps extends ElementProps<'svg'> {
    desc?: string;
    title?: string;
}

export interface InjectedProps extends ElementProps<'svg'> {
    ariaLabelledBy?: string;
    children?: ReactNode;
    role: string;
}
