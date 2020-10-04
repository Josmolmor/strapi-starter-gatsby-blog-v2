import React, { FC, useEffect, useState } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Backdrop, Container, NavbarLogo } from './styles';
import { Link } from 'components';
import Burger from './Burger';
import { useWindowSize } from 'hooks';

const Nav: FC = () => {
    const windowSize = useWindowSize();
    useEffect(() => {
        if (!windowSize?.width) {
            return;
        }
        windowSize?.width > 768 && setOpen(false);
    }, [windowSize]);
    const [open, setOpen] = useState(false);

    const handleMenuOpening = (status: boolean) => {
        setOpen(!open);
        document.body.style.overflow = status ? 'hidden' : 'unset';
    };

    return (
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
                    {open && <Backdrop onClick={() => handleMenuOpening(false)} />}
                    <div className="uk-navbar-left">
                        <Link to="/">
                            <NavbarLogo />
                        </Link>
                    </div>
                    <Burger open={open} data={data} onClick={() => handleMenuOpening(!open)} />
                </Container>
            )}
        />
    );
};

export default Nav;
