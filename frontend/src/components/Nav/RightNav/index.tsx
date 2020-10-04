import React, { FC } from 'react';
import { Link, Button } from 'components';
import { NavbarRightSide } from './styles';
import RightNavTypes from './types';

const RightNav: FC<RightNavTypes> = ({ open, data }) => {
    return (
        <NavbarRightSide open={open}>
            <Link to="/">Blog</Link>
            <Link to="/about">Sobre mi</Link>
            <Link to="/contact">Contacto</Link>
            <Button variant="ghost" type="button">
                Categorías
            </Button>
            <div uk-dropdown="animation: uk-animation-slide-top-small; duration: 750">
                <ul className="uk-nav uk-dropdown-nav">
                    {data.allStrapiCategory.edges.map((category: any) => {
                        return (
                            <li key={`category__${category.node.slug}`}>
                                <Link to={`/category/${category.node.slug}`}>{category.node.name}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </NavbarRightSide>
    );
};

export default RightNav;
