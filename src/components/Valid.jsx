import './Valid.css'
import React from "react";
import iconSuccess from '../assets/images/iconSuccess.svg'

export default props => {
    const handleDismiss = () => {
        props.onDismiss();
    }

    return (
        <div className="pageConfirm">
            <div className="cardConfirm">
                <div className="conteudoConfirm">
                    <img src={iconSuccess} alt="" />
                    <h1>Thanks for subscribing</h1>
                    <p>A confirmation email has been sent to <strong>{props.email}</strong>
                        . Pleases open it and click the button inside to confirm your subscription</p>
                    <button onClick={handleDismiss}>Dismiss message</button>
                </div>
            </div>
        </div>
    )
}