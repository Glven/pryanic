import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {authorization, resetAuthError} from "../store/reducers/authSlice";

const Auth = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const authError = useSelector(state => state.auth.authError)
    const dispatch = useDispatch()


    const handleSubmit = e => {
        e.preventDefault()
        dispatch(authorization({username, password}))
        setUsername(''); setPassword('')
    }

    return (
        <div className="auth" onSubmit={ e => handleSubmit(e) }>
            <form method={'post'} className={'form auth__form'}>
                <h1 className="form__title">Авторизация</h1>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder={'Логин'}
                        onChange={ e => {
                            setUsername(e.target.value)
                            dispatch(resetAuthError())
                        } }
                        value={ username }
                        required
                        className="form-group__input"/>
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder={'Пароль'}
                        onChange={ e => {
                            setPassword(e.target.value)
                            dispatch(resetAuthError())
                        } }
                        value={ password }
                        required
                        className="form-group__input"/>
                </div>
                <button className="form__btn">Войти</button>
                <span className={`form__error ${authError !== '' && 'form__error--active'}`}>{authError}</span>
            </form>
        </div>
    );
};

export default Auth;