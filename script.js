const chat = document.getElementById("chat");
const input = document.getElementById("user-input");
const sendBtn = document.getElementById("send");

function addMessage(text, className) {
  const message = document.createElement("div");
  message.className = `message ${className}`;
  message.textContent = text;
  chat.appendChild(message);
  chat.scrollTop = chat.scrollHeight;
}

function getBotResponse(inputText) {
  const msg = inputText.toLowerCase();
  if (msg.includes("hello") || msg.includes("hi")) {
    return "Hi! How can I help you?";
  } else if (msg.includes("bye")) {
    return "Goodbye!";
  } else {
    return "Sorry, I didn’t understand that.";
  }
}

sendBtn.addEventListener("click", () => {
  const userText = input.value.trim();
  if (userText === "") return;
  addMessage("You: " + userText, "user");
  const botReply = getBotResponse(userText);
  setTimeout(() => addMessage("Bot: " + botReply, "bot"), 500);
  input.value = "";
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    sendBtn.click();
  }
});