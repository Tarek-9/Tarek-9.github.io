const inputs = {
    name: document.querySelector("#contact__form__name"),
    email: document.querySelector("#contact__form__email"),
    message: document.querySelector("#contact__form__message"),
};

const webhook_url = "https://discordapp.com/api/webhooks/1311614151667355659/wRlHhVJI-mKuG48IoVpN4uOoAVg4ElWd8H3emW_O93ZB3sVvrNifvRnlVhQavAsnKleC";

document.querySelector(".contact__form").addEventListener("submit", (e) => {
    e.preventDefault();
    const messageContent = String.raw
        `
    **Name:** ${inputs.name.value}
    **E-Mail:** ${inputs.email.value}
    **Nachricht:**
    ${inputs.message.value}`;
    const payload = {
        content: messageContent,
    };
    fetch(webhook_url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    })
        .then((response) => {
            if (response.ok) {
                alert("Nachricht erfolgreich an Discord gesendet!");
                location.reload();
            } else {
                alert("Fehler beim Senden an Discord.");
            }
        })
        .catch((error) => console.error("Fehler:", error));
});