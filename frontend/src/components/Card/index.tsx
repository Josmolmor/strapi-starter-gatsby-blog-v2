import React, { FC } from 'react';
import { Link } from 'gatsby';
import { Container, CardImg, CardBody, CategoryTag, UserName } from './styles';
import { Props } from './types';

const Card: FC<Props> = ({ article, ...rest }) => {
    return (
        <Link {...rest} to={`/article/${article.node.slug}`} className="uk-link-reset">
            <Container className="uk-card uk-card-muted">
                <div className="uk-card-media-top">
                    <CardImg fixed={article.node.image.childImageSharp.fixed} imgStyle={{ position: 'static' }} />
                </div>
                <CardBody>
                    <CategoryTag id="category">{article.node.category.name}</CategoryTag>
                    <p id="title" className="uk-text-large">
                        {article.node.title}
                    </p>
                    {false && (
                        <div>
                            <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
                                <div>
                                    {article.node.user.image && (
                                        <CardImg
                                            fixed={article.node.user.image.childImageSharp.fixed}
                                            imgStyle={{
                                                position: 'static',
                                                borderRadius: '25%',
                                            }}
                                        />
                                    )}
                                </div>

                                <div className="uk-width-expand">
                                    <UserName>{article.node.user.username}</UserName>
                                </div>
                            </div>
                        </div>
                    )}
                </CardBody>
            </Container>
        </Link>
    );
};

export default Card;
