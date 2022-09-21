import axios from 'axios'

const API = axios.create({ baseURL: `${process.env.REACT_APP_SERVER}` })

API.interceptors.request.use((req) => {
    if (localStorage.getItem('Profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req;
})

export const login = (authData) => API.post('/user/login', authData);



export const postQAComment = (CommentData) => API.post(`/comments/post`, CommentData)
export const deleteQAComment = (id) => API.delete(`/comments/delete/${id}`)
export const editQAComment = (id, commentBody) => API.patch(`/comments/edit/${id}`, { commentBody })
export const getAllcomments = () => API.get('/comments/get');


export const postStaff = (StaffData) => API.post(`/staff/post`, StaffData)
export const deleteStaff = (id) => API.delete(`/staff/delete/${id}`)
export const editStaff = (id, commentBody) => API.patch(`/staff/edit/${id}`, { commentBody })
export const getAllStaffDetails = () => API.get('/staff/get');