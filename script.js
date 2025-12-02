function caesarCipher(text, shift) {
    const result = [];
    for (let i = 0; i < text.length; i++) {

        let char = text[i];

        // Jika huruf A–Z atau a–z
        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);

            // Huruf besar A–Z
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + shift) % 26 + 26) % 26 + 65);
            }
            // Huruf kecil a–z
            else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + shift) % 26 + 26) % 26 + 97);
            }
        }

        result.push(char);
    }
    return result.join("");
}

function encrypt() {
    let text = document.getElementById("text").value;
    let shift = parseInt(document.getElementById("shift").value);
    document.getElementById("result").value = caesarCipher(text, shift);
}

function decrypt() {
    let text = document.getElementById("text").value;
    let shift = parseInt(document.getElementById("shift").value);
    document.getElementById("result").value = caesarCipher(text, -shift);
}

function copyText() {
    let result = document.getElementById("result");
    result.select();
    document.execCommand("copy");
    alert("Hasil berhasil dicopy!");
}
