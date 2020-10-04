import React, { FC } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Container, NavbarLogo, NavbarRightSide } from './styles';
import Link from 'components/Link';
import Button from 'components/Button';

const Nav: FC = () => (
    <StaticQuery
        query={graphql`
            query {
                strapiHomepage {
                    Nav {
                        navText
                    }
                }
                allStrapiCategory {
                    edges {
                        node {
                            slug
                            name
                        }
                    }
                }
            }
        `}
        render={(data) => (
            <Container data-uk-navbar>
                <div className="uk-navbar-left">
                    <Link to="/">
                        <NavbarLogo />
                    </Link>
                </div>

                <NavbarRightSide>
                    <Link to="/">Blog</Link>
                    <Link to="/about">Sobre mi</Link>
                    <Link to="/contact">Contacto</Link>
                    <Button variant="ghost" type="button">
                        Categorías
                    </Button>
                    <div uk-dropdown="animation: uk-animation-slide-top-small; duration: 750">
                        <ul className="uk-nav uk-dropdown-nav">
                            {data.allStrapiCategory.edges.map((category: any, _i: any) => {
                                return (
                                    <li key={`category__${category.node.slug}`}>
                                        <Link to={`/category/${category.node.slug}`}>{category.node.name}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </NavbarRightSide>
            </Container>
        )}
    />
);

export default Nav;
