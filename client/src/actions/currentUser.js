export const setCurrentUser = (s) => {
    let data=null;
    // console.log(JSON.parse(localStorage.getItem('Profile')))
    if (s) {
        data=JSON.parse(localStorage.getItem('Profile'))
    }else if(s==="logout"){
        localStorage.clear();
    }
    return {
        type: 'FETCH_CURRENT_USER', 
        payload: data
    }
}