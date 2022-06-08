let text = '';
let textarea = document.getElementById("text");
textarea.addEventListener("change", () => {
    text = textarea.value;
    document.getElementById("charactercount").innerText = text.split('').length;
    document.getElementById("wordcount").innerText = text.split(' ').length;
    document.getElementById("sentencecount").innerText = text.split('.').length;
})