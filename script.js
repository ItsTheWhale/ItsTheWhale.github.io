const cache = {
    setCookie: function (name, value, expiryDays, path) {
        const d = new Date();
        d.setTime(d.getTime() + (expiryDays * 24 * 60 * 60 * 1000));
        let expiry = d.toUTCString();
        document.cookie = `${name}=${value}; expires=${expiry}; path=${path}`
    },
    getCookie: function (cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
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
    deleteCookie: function (name) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    }
};
let settings = {
    theme: "light",
    themeNumber: 0
};
const UITheme = {
    sun: `<svg width="25" height="25" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">  <circle cx="10" cy="10" r="4"/>
    <path fill-rule="evenodd" d="M10 2a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 0110 2zm0 13a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5zm8-5a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2a.5.5 0 01.5.5zM5 10a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2a.5.5 0 01.5.5zm10.657-5.657a.5.5 0 010 .707l-1.414 1.414a.5.5 0 01-.707-.707l1.414-1.414a.5.5 0 01.707 0zm-9.193 9.193a.5.5 0 010 .707L5.05 15.657a.5.5 0 01-.707-.707l1.414-1.414a.5.5 0 01.707 0zm9.193 2.121a.5.5 0 01-.707 0l-1.414-1.414a.5.5 0 01.707-.707l1.414 1.414a.5.5 0 010 .707zM6.464 6.464a.5.5 0 01-.707 0L4.343 5.05a.5.5 0 01.707-.707l1.414 1.414a.5.5 0 010 .707z" clip-rule="evenodd"/>
    </svg>`,
    moon: `<svg width="25" height="25" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.002 8.002 0 1010.586 10.586z"/></svg>`
};
const editSettings = {
    theme: function() {
        settings.themeNumber = settings.themeNumber === 0 ? 1 : 0;
        settings.theme = settings.themeNumber === 0 ? "light" : "dark";
        cache.setCookie("theme", settings.theme, 365, "/");
        cache.setCookie("themeNumber", settings.themeNumber, 365, "/");
        document.getElementsByTagName("html")[0].setAttribute("class", settings.theme);
        document.getElementById("themechanger").innerHTML = settings.theme == "light" ? UITheme.moon : UITheme.sun;
    }
};
const initialisePage = {
    theme: function() {
        settings.theme = cache.getCookie("theme");
        settings.themeNumber = Number(cache.getCookie("themeNumber"));
        document.getElementsByTagName("html")[0].setAttribute("class", settings.theme);
        document.getElementById("themechanger").innerHTML = settings.theme == "light" ? UITheme.moon : UITheme.sun;
    }
};
const projectDescription = {
    projectDesc: ["A simple CPS test", "A template for a custom wordle", "Links to send to your enemies"],
    projectId: ["project-clickTest", "project-customWordle", "project-trolls"],
    descId: ["projectdesc-clickTest", "projectdesc-customWordle", "projectdesc-trolls"],
};
for (let i in projectDescription.projectId) {
    let project = document.getElementById(projectDescription.projectId[i]);
    let desc = document.getElementById(projectDescription.descId[i]);
    project.addEventListener("mouseenter", () => { desc.innerHTML = projectDescription.projectDesc[i] });
    project.addEventListener("mouseleave", () => { desc.innerHTML = '' });
};
//setTimeout(function() {while (true) {eval("debugger")}});
{
    initialisePage.theme();
}