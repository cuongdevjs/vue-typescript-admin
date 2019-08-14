export default {
  saveToken(token: string) {
    return localStorage.setItem("aquaDraw_token", token);
  },

  removeToken() {
    return localStorage.removeItem("aquaDraw_token");
  },

  checkIsAuthenticated: function() {
    let tokenDataStr = localStorage.getItem("aquaDraw_token");
    return Promise.resolve(tokenDataStr);
  },

  getToken() {
    let tokenStr = localStorage.getItem("aquaDraw_token");
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
