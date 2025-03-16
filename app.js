document.addEventListener("DOMContentLoaded", () => {
    const messageForm = document.getElementById("message_form");
    const messageInput = document.getElementById("message");
    const messagesContainer = document.querySelector(".messages");

    messageForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const messageText = messageInput.value.trim();

        if (!messageText.length) {
            return;
        }

        const newMessage = document.createElement("p");
        newMessage.classList.add("mine");

        const picture = document.createElement("span");
        picture.classList.add("picture");
        picture.textContent = "M";

        const body = document.createElement("span");
        body.classList.add("body");

        const tag = document.createElement("span");
        tag.classList.add("tag");
        tag.textContent = "@mine";
        const messageContent = document.createElement("span");
        messageContent.classList.add("message");
        messageContent.textContent = messageText;
        body.appendChild(tag);
        body.appendChild(messageContent);
        newMessage.appendChild(picture);
        newMessage.appendChild(body);
        messagesContainer.appendChild(newMessage);

        messagesContainer.scrollIntoView({ behavior: "smooth", block: "end", inline: "end" });
        messageInput.value = "";
    });
});