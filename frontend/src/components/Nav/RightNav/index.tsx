import React, { FC, useState } from 'react';
import { Link, Button } from 'components';
import { NavbarRightSide, CategoriesListBackdrop, CategoriesList, Category } from './styles';
import RightNavTypes from './types';

const RightNav: FC<RightNavTypes> = ({ open, data, children }) => {
    const [categoriesOpen, setCategoriesOpen] = useState(false);
    return (
        <NavbarRightSide open={open}>
            <Link to="/">Blog</Link>
            <Link to="/about">Sobre mi</Link>
            <Link to="/contact">Contacto</Link>
            <Button variant="ghost" type="button" onClick={() => setCategoriesOpen(!categoriesOpen)}>
                Categorías
            </Button>
            {categoriesOpen && (
                <>
                    <CategoriesListBackdrop categoriesOpen={open} onClick={() => setCategoriesOpen(!categoriesOpen)} />
                    <CategoriesList categoriesOpen={open}>
                        {data.allStrapiCategory.edges.map((category: any) => {
                            return (
                                <Category key={`category__${category.node.slug}`}>
                                    <Link to={`/category/${category.node.slug}`}>{category.node.name}</Link>
                                </Category>
                            );
                        })}
                    </CategoriesList>
                </>
            )}
            {children}
        </NavbarRightSide>
    );
};

export default RightNav;
