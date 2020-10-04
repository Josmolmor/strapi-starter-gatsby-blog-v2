import React, { FC } from 'react';
import { Seo, Layout, MyForm } from 'components';

const Contact: FC = () => (
    <Layout>
        <Seo title="Contacto" />
        <MyForm />
    </Layout>
);

export default Contact;
