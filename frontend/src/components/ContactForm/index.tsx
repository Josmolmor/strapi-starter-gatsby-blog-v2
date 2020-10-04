import React, { FC, useState } from 'react';
import { Button } from 'components';
import { Container, Form, TakeNotesIllustration, OutputContainer } from './styles';

const ContactForm: FC = () => {
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
        <Container>
            <Form onSubmit={(ev) => handleSubmitForm(ev)} action="https://formspree.io/f/xvovzplq" method="POST">
                <label htmlFor="username">Nombre</label>
                <input id="username" type="text" name="username" />
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" />
                <label htmlFor="message">Mensaje</label>
                <input id="message" type="text" name="message" />
                <OutputContainer>
                    <Button>Submit</Button>
                    {status === 'SUCCESS' && <span>¡Gracias por ponerte en contacto!</span>}
                    {status === 'ERROR' && <span>Ooops! No se ha podido enviar el correo.</span>}
                </OutputContainer>
            </Form>
            <TakeNotesIllustration />
        </Container>
    );
};

export default ContactForm;
