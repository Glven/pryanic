import React from 'react';
import {fetchTable, resetStatus, resetTable} from "../store/reducers/tableSlice";
import {logout} from "../store/reducers/authSlice";
import {useDispatch} from "react-redux";

const NavButtons = () => {
    const dispatch = useDispatch()

    const handleFetch = e => {
        e.preventDefault()
        dispatch(fetchTable())
    }
    const handleLogout = e => {
        e.preventDefault()
        dispatch(logout())
        dispatch(resetTable())
        dispatch(resetStatus())
    }
    return (
        <div>
            <div className="buttons-wrapper">
                <button onClick={ e => {handleFetch(e)} } className="buttons-wrapper__btn">
                    Получить данные
                </button>
                <button onClick={e => {handleLogout(e)}} className="buttons-wrapper__btn">
                    Выход
                </button>
            </div>
        </div>
    );
};

export default NavButtons;