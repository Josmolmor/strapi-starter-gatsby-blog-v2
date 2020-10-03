import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Nav from 'components/nav';
import Seo from 'components/seo';
import Container from './styles';

const Layout: FC = ({ children }) => (
    <StaticQuery
        query={graphql`
            query {
                strapiHomepage {
                    Seo {
                        metaTitle
                        metaDescription
                        shareImage {
                            image {
                                publicURL
                            }
                        }
                    }
                }
            }
        `}
        render={(data) => (
            <>
                <Seo
                    title={data.strapiHomepage.Seo.metaTitle}
                    description={data.strapiHomepage.Seo.metaDescription}
                    image={data.strapiHomepage.Seo.shareImage.image.url}
                />
                <Nav />
                <Container>{children}</Container>
            </>
        )}
    />
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
