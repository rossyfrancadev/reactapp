export const TOKEN_KEY = "token"

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
    localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
}

export function isAuthenticated() {

    var foi = localStorage.getItem(TOKEN_KEY) !== null ? true : false;

    return foi;
}