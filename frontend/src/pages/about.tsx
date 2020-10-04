import React, { FC } from 'react';
import Seo from 'components/Seo';
import Layout from 'components/Layout';
import { Container, ProfileImg } from './styles/About';

const About: FC = () => (
    <Layout>
        <Seo title="Sobre mi" />
        <Container>
            <h1>Sobre mi</h1>
            <ProfileImg
                src="https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/e35/52634061_406487686782970_5390746217276537196_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=110&_nc_ohc=nLewLVfi0QwAX_1KPaP&oh=ce4c6a3b2907df6faa7d16104eee39da&oe=5F75EFB2"
                alt="Virginia Otero"
            />
        </Container>
    </Layout>
);

export default About;
