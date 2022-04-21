const cache = {
    setCookie: function(name, value, expiryDays, path) {
        const d = new Date();
        d.setTime(d.getTime() + (expiryDays*24*60*60*1000));
        let expiry = d.toUTCString();
        document.cookie = `${name}=${value}; expires=${expiry}; path=${path}`
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
    theme: "light",
    themeNumber: 0
}
const editSettings = {
    theme: function() {
        settings.themeNumber = settings.themeNumber === 0 ? 1 : 0;
        settings.theme = settings.themeNumber === 0 ? "light" : "dark";
        cache.setCookie("theme", settings.theme, 365, "/")
    }
}
const initialisePage = {
    theme: function() {
        settings.theme = cache.getCookie("theme");
        document.getElementsByTagName("html")[0].setAttribute("data-theme", settings.theme);
    }
}

{
    initialisePage.theme();
}