import React, { useState, useRef } from 'react';
import Modal from 'react-modal';
import InputMask from 'react-input-mask';
import cx from 'classnames';
import axios from 'axios';
import Svg from '@/../public/img/success_contact.svg';
import Logo from '@/../public/img/logo_janrose.svg';
import styles from '@/styles/components/Modal.module.scss';
import modalStyles from '@/styles/components/Modal.module.scss';

export default function CustomModal({ modalIsOpen, closeModal }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [text, setText] = useState('');
    const [sendFormStatus, setSendFormStatus] = useState(0);
    const [inputErrorStatus, setInputErrorStatus] = useState({});
    const [inputError, setInputError] = useState({});
    const subtitleRef = useRef(null);

    const sendContact = () => {
        const contact = {
            nome,
            email,
            telefone,
            mensagem: text,
            type: 'case',
        };

        setSendFormStatus(1);
        axios.post(`${process.env.NEXT_PUBLIC_API_DOMAIN}/orcamento`, contact, {
            headers: { "Authorization": process.env.NEXT_PUBLIC_API_AUTH }
        })
        .then(() => {
            setNome('');
            setEmail('');
            setTelefone('');
            setText('');
            setSendFormStatus(3);
        })
        .catch((err) => {
            setInputError(err?.response?.data?.error);
            setInputErrorStatus(err?.response?.data?.error);
            setSendFormStatus(2);
        });
    };

    const removeError = (field) => {
        setInputErrorStatus((prev) => ({ ...prev, [field]: false }));
    };

    const afterOpenModal = () => {
        if (subtitleRef.current) {
            subtitleRef.current.style.color = '#000';
        }
    };

    return (
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="Orçamento"
            className={modalStyles['custom-modal']}
            ariaHideApp={false}
        >
            <div className={modalStyles['space']}>
                {sendFormStatus === 3 ? (
                    <div className={styles.confirmed} style={{ maxWidth: 408, textAlign: 'center', margin: 'auto' }}>
                        <div style={{ backgroundColor: '#282424', width: 100, height: 100, position: 'relative', borderRadius: '50%', margin: 'auto', marginBottom: '1em' }}>
                            <span style={{ position: 'absolute', top: '39px', left: '31px' }}>
                                <Svg />
                            </span>
                        </div>
                        <span style={{ color: '#E30613', fontSize: 32, marginTop: '1em' }}>Mensagem enviada!</span>
                        <p style={{ color: 'white', marginTop: '1em' }}>Agradecemos pelo seu interesse em nossos produtos e serviços. Estamos ansiosos para atender às suas necessidades de maneira excepcional. Em breve, nossa equipe entrará em contato para entender completamente seus requisitos e preferências, visando proporcionar-lhe uma experiência verdadeiramente personalizada.</p>
                    </div>
                ) : (
                    <>
                        <div className={cx("grid-x grid-container grid-padding-x", modalStyles['grid'])}>
                            <div className="cell shrink">
                                <Logo />
                                <div className={modalStyles['btn']}>
                                    <button onClick={closeModal}><i className="fa-solid fa-arrow-left"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="grid-x grid-container grid-padding-x">
                            <div className="cell shrink">
                                <strong>Formulário</strong>
                            </div>
                        </div>
                        <div className="grid-x grid-container grid-padding-x">
                            <form action="" method="POST" onSubmit={sendContact}>
                                <div className={cx(styles.formLine, { 'error': inputErrorStatus?.nome })}>
                                    <label>Nome</label>
                                    <input
                                        type="text"
                                        placeholder="Nome"
                                        value={nome}
                                        onChange={e => setNome(e.target.value)}
                                        onFocus={() => removeError('nome')}
                                        style={{ backgroundColor: '#282424', color: 'white' }}
                                    />
                                    <span className="text-error">{inputError?.nome}</span>
                                </div>
                                <div className={cx(styles.formLine, { 'error': inputErrorStatus?.email })}>
                                    <label>E-mail</label>
                                    <input
                                        type="email"
                                        placeholder="O seu melhor e-mail"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        onFocus={() => removeError('email')}
                                        style={{ backgroundColor: '#282424', color: 'white' }}
                                    />
                                    <span className="text-error">{inputError?.email}</span>
                                </div>
                                <div className={cx(styles.formLine, { 'error': inputErrorStatus?.telefone })}>
                                    <label>Telefone</label>
                                    <InputMask
                                        type="text"
                                        mask="(99) 99999-9999"
                                        maskChar={null}
                                        placeholder="(00) 0000-0000"
                                        value={telefone}
                                        onChange={e => setTelefone(e.target.value)}
                                        onFocus={() => removeError('telefone')}
                                        style={{ backgroundColor: '#282424', color: 'white' }}
                                    />
                                    <span className="text-error">{inputError?.telefone}</span>
                                </div>
                                <div className={cx(styles.formLine, { 'error': inputErrorStatus?.text })}>
                                    <label>Cidade/Estado</label>
                                    <input
                                        className={modalStyles['textArea']}
                                        type="text"
                                        placeholder="Digite sua Cidade"
                                        value={text}
                                        onChange={e => setText(e.target.value)}
                                        onFocus={() => removeError('text')}
                                        style={{ backgroundColor: '#282424', color: 'white' }}
                                    />
                                    <span className="text-error">{inputError?.text}</span>
                                </div>
                                <div className={modalStyles['btnIn']}>
                                    {(sendFormStatus === 0) && <button className="btnSimple large" onClick={sendContact}>Enviar Mensagem</button>}
                                    {(sendFormStatus === 1) && <button className="btnSimple about btnSimple-sending"><i className="fa-solid fa-spinner fa-spin-pulse"></i> Enviando</button>}
                                    {(sendFormStatus === 2) && <button className="btnSimple about btnSimple-erro"><i className="fa-regular fa-circle-xmark"></i> Valide os campos</button>}
                                </div>
                            </form>
                        </div>
                    </>
                )}
            </div>
        </Modal>
    );
}
