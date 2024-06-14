import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addRow, editRow} from "../store/reducers/tableSlice";

const TableForm = () => {
    const [companySignatureName, setCompanySignatureName] = useState('')
    const [documentName, setDocumentName] = useState('')
    const [documentStatus, setDocumentStatus] = useState('')
    const [documentType, setDocumentType] = useState('')
    const [employeeNumber, setEmployeeNumber] = useState('')
    const [employeeSignatureName, setEmployeeSignatureName] = useState('')
    const current = useSelector(state => state.table.currentRow)
    const dispatch = useDispatch()

    useEffect(() => {
        if (current) {
            setCompanySignatureName(current.companySignatureName)
            setDocumentName(current.documentName)
            setDocumentStatus(current.documentStatus)
            setDocumentType(current.documentType)
            setEmployeeNumber(current.employeeNumber)
            setEmployeeSignatureName(current.employeeSignatureName)
        }
    }, [current])

    const handleSubmit = e => {
        e.preventDefault()
        const date = `${new Date().toISOString()}\t`
        const rowData = {
            companySigDate: date,
            companySignatureName,
            documentName,
            documentStatus,
            documentType,
            employeeNumber,
            employeeSigDate: date,
            employeeSignatureName
        }
        if (current) {
            dispatch(editRow({id: current.id, rowData}))
        } else {
            dispatch(addRow(rowData))
        }
        setCompanySignatureName('')
        setDocumentStatus('')
        setEmployeeSignatureName('')
        setDocumentName('')
        setDocumentType('')
        setEmployeeNumber('')
    }

    return (
        <form className="form table__form" onSubmit={e => handleSubmit(e)}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-group__input"
                    placeholder={'Название подписи компании'}
                    value={companySignatureName}
                    onChange={ e => setCompanySignatureName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    className="form-group__input"
                    placeholder={'Имя документа'}
                    value={documentName}
                    onChange={ e =>  setDocumentName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    className="form-group__input"
                    placeholder={'Статус документа'}
                    value={documentStatus}
                    onChange={ e =>  setDocumentStatus(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    className="form-group__input"
                    placeholder={'Тип документа'}
                    value={documentType}
                    onChange={ e =>  setDocumentType(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    className="form-group__input"
                    placeholder={'Номер работника'}
                    value={employeeNumber}
                    onChange={ e =>  setEmployeeNumber(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    className="form-group__input"
                    placeholder={'Имя подписи сотрудника'}
                    value={employeeSignatureName}
                    onChange={ e =>  setEmployeeSignatureName(e.target.value)}
                    required
                />
            </div>
            <button className="form__btn" type="submit">Сохранить</button>
        </form>
    );
};

export default TableForm;