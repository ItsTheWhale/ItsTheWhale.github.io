const cache = {
    setCookie: function(name, value, expiryDays, path) {
        const d = new Date();
        d.setTime(d.getTime() + (expiryDays*24*60*60*1000));
        let expiry = "expires="+ d.toUTCString();
        document.cookie = `${name}=${value}; expiry=${expiry}; path=${path}`
    },
    getCookie: function(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    },
    deleteCookie: function(name) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    }
};
let settings = {
    theme: "light"
}
const editSettings = {
    theme: function(theme) {
        settings.theme = theme;
        cache.setCookie("theme", settings.theme, 365, "/settings")
    }
}
const initialisePage = {
    theme: function() {
        settings.theme = cache.getCookie("theme");
        document.getElementsByTagName("html").setAttribute("data-theme", settings.theme);
    }
}