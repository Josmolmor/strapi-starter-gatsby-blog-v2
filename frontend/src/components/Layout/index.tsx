import React, { FC } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Nav, Seo } from 'components';
import Container from './styles';
import { myContext } from 'context';

const Layout: FC = ({ children }) => {
    return (
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
                <myContext.Consumer>
                    {() => (
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
                </myContext.Consumer>
            )}
        />
    );
};

export default Layout;
