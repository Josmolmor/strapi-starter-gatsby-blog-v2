import React, { FC } from 'react';
import { ButtonDefault, LinkAsButton } from './styles';
import { Props } from './types';

const Button: FC<Props> = ({ variant, to, children, className, ...rest }) =>
    to ? (
        <LinkAsButton to={to} {...rest}>
            {children}
        </LinkAsButton>
    ) : (
        <ButtonDefault className={className} variant={variant} {...rest}>
            {children}
        </ButtonDefault>
    );

export default Button;
