import axios from 'axios'

const API = axios.create({ baseURL: `${process.env.REACT_APP_SERVER}` })

API.interceptors.request.use((req) => {
    if (localStorage.getItem('Profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req;
})

export const login = (authData) => API.post('/user/login', authData);
export const getAdminStatus = () => API.get('/user/admin');


export const postService = (serviceData) => API.post(`/service/post`, serviceData)
export const editService = (id, serviceBody) => API.patch(`/service/edit/${id}`, { serviceBody })
export const getAllService = () => API.get('/service/get');
export const deleteService = (id) => API.delete(`/service/delete/${id}`)

export const postComment = (CommentData) => API.post(`/comments/post`, CommentData)
export const deleteComment = (id) => API.delete(`/comments/delete/${id}`)
export const editComment = (id, commentBody) => API.patch(`/comments/edit/${id}`, { commentBody })
export const getAllcomments = () => API.get('/comments/get');


export const postDoubt = (doubtData) => API.post(`/doubt/post`, doubtData)
export const deleteDoubt = (id) => API.delete(`/doubt/delete/${id}`)
export const editDoubt = (id,doubtBody) => API.patch(`/doubt/edit/${id}`, {doubtBody })
export const getAllDoubt = () => API.get('/doubt/get');


export const postStaff = (StaffData) => API.post(`/staff/post`, StaffData)
export const deleteStaff = (id) => API.delete(`/staff/delete/${id}`)
export const editStaff = (id, commentBody) => API.patch(`/staff/edit/${id}`, { commentBody })
export const getAllStaffDetails = () => API.get('/staff/get');


export const postSubmitForm = (SubmitFormData) => API.post(`/submitform/post`, SubmitFormData)
export const editSubmitForm = (id,  fileData,singleFileOptions) => API.patch(`/submitform/edit/${id}`, fileData,singleFileOptions)
export const getAllSubmitForm = () => API.get('/submitform/get');
export const deleteSubmitForm = (id) => API.delete(`/submitform/delete/${id}`)
