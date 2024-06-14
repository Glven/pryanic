import React from 'react';
import NavButtons from "../components/NavButtons";
import Table from "../components/Table";
import {useDispatch, useSelector} from "react-redux";
import {changeFormVisible} from "../store/reducers/tableSlice";
import TableForm from "../components/TableForm";
import Loading from "../components/Loading";

const MainPage = () => {
    const dispatch = useDispatch()
    const isFormVisible = useSelector(state => state.table.formVisible)
    const status = useSelector(state => state.table.status)

    return (
        <div className="container">
            <NavButtons/>
            {status === 'error' &&
                <div style={{
                    textAlign: 'center',
                    color: '#fff'
                }}>
                    <h1>Нет данных</h1>
                </div>
            }
            {status === 'loading' &&
                <Loading/>
            }
            {status === 'done' &&
            <>
                <Table/>
                {isFormVisible && <TableForm/>}
                {!isFormVisible &&
                    <button className="table__btn" onClick={e => dispatch(changeFormVisible(true))}>
                        +
                    </button>
                }
            </>
            }
        </div>
    );
};

export default MainPage;