import React, { FC } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout from 'components/Layout';
import ArticlesComponent from 'components/ArticleList';

import 'assets/css/main.css';
import { Container, HeroHeader, HeroText, SubHeroText, TitleContent, ButtonContainer } from './styles/Base';
import Button from 'components/Button';

const IndexPage: FC = () => (
    <Layout>
        <StaticQuery
            query={graphql`
                query {
                    strapiHomepage {
                        Hero {
                            HeroText
                            SubHeroText
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
                    <HeroHeader>
                        <TitleContent>
                            <HeroText>{data.strapiHomepage.Hero.HeroText}</HeroText>
                            <SubHeroText>{data.strapiHomepage.Hero.SubHeroText}</SubHeroText>
                        </TitleContent>
                        <ButtonContainer>
                            <Button to="/contact">¡Hablemos!</Button>
                        </ButtonContainer>
                    </HeroHeader>
                    <ArticlesComponent articles={data.allStrapiArticle.edges} />
                </Container>
            )}
        />
    </Layout>
);

export default IndexPage;
