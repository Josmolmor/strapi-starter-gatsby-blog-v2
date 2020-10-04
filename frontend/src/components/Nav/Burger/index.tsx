import React, { FC } from 'react';
import RightNav from '../RightNav';
import { StyledBurger, MoonButton, SunButton } from './styles';
import BurgerType from './types';
import { myContext } from 'context';

const Burger: FC<BurgerType> = ({ open, data, onClick }) => {
    return (
        <myContext.Consumer>
            {(context) => (
                <>
                    <StyledBurger open={open} onClick={onClick}>
                        <div />
                        <div />
                        <div />
                    </StyledBurger>
                    <RightNav open={open} data={data}>
                        {context?.isDark ? (
                            <SunButton onClick={() => context.changeTheme()} />
                        ) : (
                            <MoonButton onClick={() => context.changeTheme()} />
                        )}
                    </RightNav>
                </>
            )}
        </myContext.Consumer>
    );
};
export default Burger;
