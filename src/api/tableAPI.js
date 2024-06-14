import {$authHost} from "./index";

export const fetchTableAPI = async() => {
    const data = await $authHost.get('/ru/data/v3/testmethods/docs/userdocs/get')
    return data
}

export const addRowAPI = async(rowData) => {
    const {
        companySigDate,
        companySignatureName,
        documentName,
        documentStatus,
        documentType,
        employeeNumber,
        employeeSigDate,
        employeeSignatureName
    } = rowData
    await $authHost.post('/ru/data/v3/testmethods/docs/userdocs/create', {
        companySigDate,
        companySignatureName,
        documentName,
        documentStatus,
        documentType,
        employeeNumber,
        employeeSigDate,
        employeeSignatureName
    })
}

export const editRowAPI = async(id, rowData) => {
    const {
        companySigDate,
        companySignatureName,
        documentName,
        documentStatus,
        documentType,
        employeeNumber,
        employeeSigDate,
        employeeSignatureName
    } = rowData
    await $authHost.post('/ru/data/v3/testmethods/docs/userdocs/set/' + id, {
        companySigDate,
        companySignatureName,
        documentName,
        documentStatus,
        documentType,
        employeeNumber,
        employeeSigDate,
        employeeSignatureName
    })
}

export const delRowAPI = async(id) => {
    await $authHost.post('/ru/data/v3/testmethods/docs/userdocs/delete/' + id)
}