import React, { FC } from 'react';
import Container from './styles';
import { Props } from './types';

const Link: FC<Props> = ({ to, children, ...rest }) => (
    <Container to={to} {...rest}>
        {children}
    </Container>
);

export default Link;
