const cache = {
    setCookie: function(name, value, expiry) {
        let placeholder = expiry;
        document.cookie = `${name}=${value}; expiry=${placeholder}`
    }
}