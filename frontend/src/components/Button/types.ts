import { ElementProps } from 'utils/elementProps';

type variants = 'ghost';

export interface Props extends ElementProps<'button'> {
    to?: string;
    variant?: variants;
}
