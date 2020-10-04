import React, { FC } from 'react';
import RightNav from '../RightNav';
import { StyledBurger } from './styles';
import BurgerType from './types';

const Burger: FC<BurgerType> = ({ open, data, onClick }) => {
    return (
        <>
            <StyledBurger open={open} onClick={onClick}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <RightNav open={open} data={data} />
        </>
    );
};
export default Burger;
