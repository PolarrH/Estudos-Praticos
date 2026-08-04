document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("generate");
    const output = document.getElementById("password");
    if (!button || !output) return;
    button.addEventListener("click", () => {
        output.value = generatePassword(12);
    });
});

function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

async function copyPassword() {
    const output = document.getElementById("password");
    if (output) {
        output.select();
        await navigator.clipboard.writeText(output.value);
    }
}