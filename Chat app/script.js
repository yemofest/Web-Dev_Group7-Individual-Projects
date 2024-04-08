document.addEventListener("DOMContentLoaded", function() {
    const chatWindow = document.getElementById('chat-window');
    const messageForm = document.getElementById('message-form');

    // Initialize WebSocket connection
    const socket = new WebSocket('ws://localhost:3000');

    // Event listener for WebSocket connection opened
    socket.addEventListener('open', function(event) {
        console.log('Connected to WebSocket server');
    });

    // Event listener for WebSocket messages received
    socket.addEventListener('message', function(event) {
        const message = JSON.parse(event.data);
        displayMessage(message);
    });

    // Event listener for form submission (sending messages)
    messageForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const username = document.getElementById('username').value;
        const message = document.getElementById('message').value;

        // Create message object
        const chatMessage = {
            username: username,
            message: message
        };

        // Send message to WebSocket server
        socket.send(JSON.stringify(chatMessage));

        // Clear message input
        document.getElementById('message').value = '';
    });

    // Function to display incoming messages in the chat window
    function displayMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message');
        messageElement.innerHTML = `<strong>${message.username}:</strong> ${message.message}`;
        chatWindow.appendChild(messageElement);
        chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to bottom
    }
});
