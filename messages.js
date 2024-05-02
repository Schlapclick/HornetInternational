document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var messageInput = document.getElementById('messageInput');
    var newMessage = messageInput.value;

    if (newMessage.trim() !== '') {
        addMessageToUI(newMessage);
        messageInput.value = '';
    }
    messageInput.focus();
});

function addMessageToUI(message) {
    var messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    document.getElementById('messageContainer').appendChild(messageDiv);
}

// Load messages for a specific user
window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const user = params.get('user');
    if (user) {
        document.title = `Messages with ${user}`; // Change the page title to the user's name
        loadMessagesForUser(user); // Simulate loading messages
    }
};

function loadMessagesForUser(user) {
    // This is just a placeholder. In a real app, this would fetch messages from a server or local storage
    addMessageToUI("Welcome to your chat with " + user + "!");
}