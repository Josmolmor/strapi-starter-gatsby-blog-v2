import React, { FC } from 'react';
import RightNav from '../RightNav';
import { StyledBurger, MoonButton, SunButton, RotateDiv } from './styles';
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
                            <RotateDiv>
                                <SunButton onClick={() => context.changeTheme()} />
                            </RotateDiv>
                        ) : (
                            <RotateDiv>
                                <MoonButton onClick={() => context.changeTheme()} />
                            </RotateDiv>
                        )}
                    </RightNav>
                </>
            )}
        </myContext.Consumer>
    );
};
export default Burger;
