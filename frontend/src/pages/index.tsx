import React, { FC } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Layout, ArticleList, Banner } from 'components';
import 'assets/css/main.css';
import { Container } from 'styles/pages/Base';

const IndexPage: FC = () => {
    return (
        <Layout>
            <StaticQuery
                query={graphql`
                    query {
                        strapiHomepage {
                            Hero {
                                HeroText
                            }
                        }
                        allStrapiArticle(filter: { status: { eq: "published" } }) {
                            edges {
                                node {
                                    strapiId
                                    slug
                                    title
                                    category {
                                        name
                                    }
                                    image {
                                        childImageSharp {
                                            fixed(width: 800, height: 500) {
                                                src
                                            }
                                        }
                                    }
                                    user {
                                        username
                                        image {
                                            childImageSharp {
                                                fixed(width: 30, height: 30) {
                                                    src
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                `}
                render={(data) => (
                    <Container>
                        <Banner data={data} ctaButtonText="¡Hablemos!" />
                        <ArticleList articles={data.allStrapiArticle.edges} />
                    </Container>
                )}
            />
        </Layout>
    );
};

export default IndexPage;
