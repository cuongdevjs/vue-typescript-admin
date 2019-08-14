export default {
  saveToken(token: string) {
    return localStorage.setItem("bus_token", token);
  },

  removeToken() {
    return localStorage.removeItem("bus_token");
  },

  checkIsAuthenticated: function() {
    let tokenDataStr = localStorage.getItem("bus_token");
    return Promise.resolve(tokenDataStr);
  },

  getToken() {
    let tokenStr = localStorage.getItem("bus_token");
    return tokenStr || null;
  },

  get(key: string) {
    return localStorage.getItem(key);
  },

  set(key: string, value: any) {
    return localStorage.setItem(key, value);
  },

  remove(key: string) {
    return localStorage.removeItem(key);
  }
};
