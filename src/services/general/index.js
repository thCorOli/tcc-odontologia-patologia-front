function deleteCookie() {
    var today = new Date();
    today.setHours(today.getHours() - 24);
    const expire = "expires=" + today.toUTCString();
    var cvalue = "False";
    document.cookie = "isAdmin=" + cvalue + ";" + expire + ";path=/";
  }
  
  export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("admin");
    deleteCookie();
  };
  