document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

async function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();

    if (!message) return;

    // Display user message
    displayMessage(message, 'user');

    // Clear input field
    userInput.value = '';

    try {
        const response = await fetch("https://d7f1-2409-40e0-29-116d-19c-da48-f69f-cc4.ngrok-free.app/chatbot", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message })
        });
        
        const responseData = await response.json();

        if (responseData.response.includes("Enter admin username and password")) {
            displayMessage(responseData.response, 'bot');
            const adminInput = prompt("Enter admin username and password:");
            if (adminInput) {
                const adminResponse = await fetch("https://d7f1-2409-40e0-29-116d-19c-da48-f69f-cc4.ngrok-free.app/chatbot", {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message: adminInput })
                });
                const adminResponseData = await adminResponse.json();
                displayMessage(adminResponseData.response, 'bot');
            }
        } else if (Array.isArray(responseData.response)) {
            let promptsMessage = "Saved Prompts:\n" + responseData.response.map(p => `- ${p.prompt}`).join('\n');
            displayMessage(promptsMessage, 'bot');
        } else {
            displayMessage(responseData.response, 'bot');
        }
    } catch (error) {
        console.error("Error communicating with the chatbot:", error);
        displayMessage("Error communicating with the chatbot. Please try again.", 'bot');
    }
}

function displayMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', `${sender}-message`, 'p-2', 'rounded-lg', 'mb-2', 'max-w-[80%]');
    messageElement.textContent = message;

    if (sender === 'user') {
        messageElement.classList.add('bg-blue-500', 'text-white', 'self-end');
    } else {
        messageElement.classList.add('bg-gray-200', 'text-gray-800', 'self-start');
    }

    const chatbotMessages = document.getElementById('chatbot-messages');
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

    anime({
        targets: messageElement,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 500,
        easing: 'easeOutExpo',
    });
}

// Chatbot Minimize/Expand Logic
const chatbotContainer = document.getElementById('chatbot-container');
const minimizeBtn = document.getElementById('minimize-btn');
const chatbotMessages = document.getElementById('chatbot-messages');
let isMinimized = false;

minimizeBtn.addEventListener('click', () => {
    isMinimized = !isMinimized;
    gsap.to(chatbotContainer, {
        height: isMinimized ? '60px' : 'auto',
        duration: 0.3,
        ease: 'power2.out',
    });
    chatbotMessages.style.display = isMinimized ? 'none' : 'block';
    minimizeBtn.innerHTML = isMinimized ? `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
        </svg>` : `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>`;
});
