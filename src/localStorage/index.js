//obtengo data user
const userData = () => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    return userData;
};

//logOut
const logout = () => {
    localStorage.removeItem('userData');
};

export {
    userData,
    logout
}