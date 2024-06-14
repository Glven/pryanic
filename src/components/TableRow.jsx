import React from 'react';
import {useDispatch} from "react-redux";
import {changeFormVisible, delRow, getCurrentRow} from "../store/reducers/tableSlice";

const TableRow = ({
    id,
    companySigDate,
    companySignatureName,
    documentName,
    documentStatus,
    documentType,
    employeeNumber,
    employeeSigDate,
    employeeSignatureName}) => {

    const dispatch = useDispatch()

    const handleDelete = id => {
        dispatch(delRow(id))
    }

    const handleChange = id => {
        dispatch(getCurrentRow(id))
        dispatch(changeFormVisible(true))
    }

    return (
        <div className="table-row">
            <div className="table-row__col table-row__col-10">{companySigDate.slice(0, 10)}</div>
            <div className="table-row__col table-row__col-11">{companySignatureName}</div>
            <div className="table-row__col table-row__col-11">{documentName}</div>
            <div className="table-row__col table-row__col-11">{documentStatus}</div>
            <div className="table-row__col table-row__col-grow">{documentType}</div>
            <div className="table-row__col table-row__col-5">{employeeNumber}</div>
            <div className="table-row__col table-row__col-10">{employeeSigDate.slice(0, 10)}</div>
            <div className="table-row__col table-row__col-11">{employeeSignatureName}</div>
            <div className="table-row__buttons">
                <button onClick={e => handleDelete(id)}>✖</button>
                <button onClick={e => handleChange(id)}>✏</button>
            </div>
        </div>
    );
};

export default TableRow;