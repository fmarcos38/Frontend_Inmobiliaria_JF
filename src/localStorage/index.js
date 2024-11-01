//obtengo data user
const userData = () => {
    const data = JSON.parse(localStorage.getItem('userData'));
    return data;
};

//logOut
const logout = () => {
    localStorage.removeItem('userData');
};

export {
    userData,
    logout
}