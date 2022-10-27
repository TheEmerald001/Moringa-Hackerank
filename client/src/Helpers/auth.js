export const logoutFunc =()=>{
    localStorage.removeItem("token")
}

export const setupLogin = token =>{
    localStorage.setItem("token", token)
}