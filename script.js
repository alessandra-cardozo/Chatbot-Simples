function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    let chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<div style="color:#ff4d6d; font-weight:bold;">Você: ${userInput}</div>`;

    let botMessage = getBotResponse(userInput);
    chatBox.innerHTML += `<div style="color:#4d4d4d; font-weight:bold;">Bot: ${botMessage}</div>`;

    document.getElementById("user-input").value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
    return `Aqui estão alguns resultados para sua pergunta: <br>
    <a href="https://www.google.com/search?q=${encodeURIComponent(input)}" target="_blank">🔎 Buscar no Google</a>`;
}

// Função para limpar o chat
function clearChat() {
    document.getElementById("chat-box").innerHTML = "";
}

// Adicionando a função para capturar o "Enter"
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

