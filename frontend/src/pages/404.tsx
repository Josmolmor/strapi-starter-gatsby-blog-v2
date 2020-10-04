import React, { FC } from 'react';
import { Layout, Seo } from 'components';
import { Container, GifImage } from 'styles/pages/404';

const NotFoundPage: FC = () => (
    <Layout>
        <Container>
            <Seo title="404: Not found" />
            <h1>Oops!</h1>
            <p>Has intentado acceder a una ruta que no existe</p>
            <GifImage alt="monkey" src="https://media.tenor.com/images/5f49839f2cfab2d35707aee6b19f4d42/tenor.gif" />
        </Container>
    </Layout>
);

export default NotFoundPage;
