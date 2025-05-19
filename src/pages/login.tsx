
import { BaseButtonComponent } from "../components/buttons/base-button/base-button"
import { TextFieldComponent } from "../components/inputs/text-field/text-field"
import "./login.scss"

export const Login = () =>
    <div className="login-container">
        <div className="login-card">
            <h1 className="login-title">Login</h1>
            <form action="" className="login-form">
                <div className="login-form-input-group">
                    <div className="input-group">
                        <TextFieldComponent label="E-mail" name="email" placeholder="Digite seu e-mail" type="email" />
                    </div>
                    <div className="input-group">
                        <TextFieldComponent label="Senha" name="senha" placeholder="Digite sua senha" type="password" />
                    </div>
                </div>
                <div className="login-form-actions">
                    <BaseButtonComponent size="full" layout="filled-base-button">
                        Entrar
                    </BaseButtonComponent>
                    <a href="#" className="forgot-password">Esqueci a senha</a>
                </div>
            </form>
        </div>
    </div>
