import React, { FC } from 'react';
import { Seo, Layout, ContactForm } from 'components';

const Contact: FC = () => (
    <Layout>
        <Seo title="Contacto" />
        <ContactForm />
    </Layout>
);

export default Contact;
