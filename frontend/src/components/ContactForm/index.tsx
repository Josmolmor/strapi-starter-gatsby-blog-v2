import React, { FC, useState } from 'react';
import { Button } from 'components';
import {
    Container,
    Content,
    Form,
    TakeNotesIllustration,
    OutputContainer,
    FormTitle,
    FormSubTitle,
    SocialLinksContainer,
    InstagramIcon,
    FacebookIcon,
    YoutubeIcon,
    TwitterIcon,
    SocialMedia,
} from './styles';

const ContactForm: FC = ({ ...rest }) => {
    const [status, setStatus] = useState('');

    const handleSubmitForm = (ev: any) => {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                setStatus('SUCCESS');
            } else {
                setStatus('ERROR');
            }
        };
        xhr.send(data);
    };

    return (
        <Container {...rest}>
            <FormTitle>Contacta conmigo</FormTitle>
            <FormSubTitle>
                Rellena el formulario a continuación o ponte en contacto a través de mis redes sociales
            </FormSubTitle>
            <Content>
                <Form onSubmit={(ev) => handleSubmitForm(ev)} action="https://formspree.io/f/xvovzplq" method="POST">
                    <label htmlFor="username">Nombre</label>
                    <input required id="username" type="text" name="username" />
                    <label htmlFor="email">Email</label>
                    <input required id="email" type="email" name="email" />
                    <label htmlFor="message">Mensaje</label>
                    <textarea required id="message" name="message" />
                    <OutputContainer>
                        <Button>Submit</Button>
                        {status === 'SUCCESS' && <span>¡Gracias por ponerte en contacto!</span>}
                        {status === 'ERROR' && <span>Ooops! No se ha podido enviar el correo.</span>}
                    </OutputContainer>
                </Form>
                <SocialLinksContainer>
                    <SocialMedia target="_blank" href="http://instagram.com/laconsultadevirginia">
                        <InstagramIcon /> @laconsultadevirginia
                    </SocialMedia>
                    <SocialMedia target="_blank" href="">
                        <FacebookIcon /> @virginia.otero
                    </SocialMedia>
                    <SocialMedia target="_blank" href="">
                        <YoutubeIcon /> Virginia Otero
                    </SocialMedia>
                    <SocialMedia target="_blank" href="http://twitter.com/virllyotero">
                        <TwitterIcon /> @virllyotero
                    </SocialMedia>
                </SocialLinksContainer>
            </Content>
            <TakeNotesIllustration />
        </Container>
    );
};

export default ContactForm;
