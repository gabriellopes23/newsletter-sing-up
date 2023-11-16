import './Form.css'
import React, { useRef, useState } from 'react'
import ImgPrincipal from '../assets/images/fotoPrincipal.svg'
import Icon from '../assets/images/icon-list.svg'
import Valid from './Valid'

export default props => {

    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [mostrarValid, setMostrarValid] = useState(false);
    const [mostrarCard, setMostrarCard] = useState(true)

    const showValid = () => {
        setMostrarValid(true)
        setMostrarCard(false)
    }

    const showForm = () => {
        setMostrarValid(false)
        setMostrarCard(true)
    }

    const handleEmailChange = (event) => {
        const inputEmail = event.target.value;
        setEmail(inputEmail);
        validateEmail(inputEmail);
    };

    const validateEmail = (inputEmail) => {
        // Utilizando uma expressão regular simples para validar o formato do e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValidEmail(emailRegex.test(inputEmail));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Se o e-mail for válido, você pode prosseguir com a submissão do formulário ou outra lógica
        if (isValidEmail) {
            return (
                showValid()
            )
            // Adicione sua lógica de envio para o servidor aqui
        } else {

        }
    };

    return (
        <div className="page">
            {mostrarCard && (
                <div className='card'>
                    <div className="conteudo">
                        <div className="container">
                            <h1>Stay updated!</h1>
                            <p>Join 60,000+ product managers receiving monthly updates on:</p>
                        </div>

                        <div className='list'>
                            <div className='iten1'><img src={Icon} alt="" /><p>Product discovery and building what matters</p></div>
                            <div className='iten2'><img src={Icon} alt="" /><p>Measuring to ensure updates are a success</p></div>
                            <div className='iten3'><img src={Icon} alt="" /><p>And much more!</p></div>
                        </div>
                        <form className="form" onSubmit={handleSubmit}>
                            <label>Email address</label>
                            {!isValidEmail && <span className="error-message">Valid email required</span>}
                            <input type="email" name='email' placeholder='email@company.com' value={email}
                                onChange={handleEmailChange} required className={isValidEmail ? '' : 'invalid-email'} />
                            <button type='submit'>Subscribe to monthly newsletter</button>
                        </form>
                    </div>
                    <div className="imagem">
                        <img src={ImgPrincipal} alt="Imagem Principal" />
                    </div>
                </div>
            )}
            {mostrarValid && <Valid email={email} onDismiss={showForm} />}
        </div >
    )
}