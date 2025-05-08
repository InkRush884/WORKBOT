function getBotResponse(input) {
  const msg = input.toLowerCase();

  if (msg.includes("hello") || msg.includes("hi")) {
    return "Hello! How can I help you today?";
  } else if (msg.includes("how are you")) {
    return "I'm just code, but I'm doing great!";
  } else if (msg.includes("your name")) {
    return "I'm Chatbot, your simple AI assistant.";
  } else if (msg.includes("bye")) {
    return "Goodbye! Have a great day!";
  } else if (msg.includes("what can you do")) {
    return "I can answer basic questions. You can ask me about greetings, my name, or how I'm doing!";
  } else {
    return "Sorry, I didn’t understand that. Try saying 'hello' or 'what can you do'.";
  }
}
