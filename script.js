let rejectionCount = 0;
const rejectionMessages = [
    "De ce mi-ai face una ca asta 🥺",
    "Nici daca te rog frumos? 😢",
    "Fucking PUTA!!! 🎀",
    "OK, I'll start crying... 💔",
    "Last chance! 😠"
];

function acceptMission() {
    let output = document.getElementById("question");
    output.innerText = "YAY! You are now my Valentine! 🎀💖";

    let gifContainer = document.getElementById("gif-container");

    // Remove crying Kitty
    gifContainer.innerHTML = "";

    // Add dancing Hello Kitty
    let slayKitty = document.createElement("img");
    slayKitty.src = "slayyy-sanrio.gif"; // Dancing Hello Kitty GIF
    slayKitty.classList.add("slay-kitty");
    gifContainer.appendChild(slayKitty);

    // Remove "No" button when "Yes" is pressed
    let noBtn = document.querySelector(".no");
    if (noBtn) {
        noBtn.remove();
    }
}

function rejectMission() {
    let question = document.getElementById("question");

    if (rejectionCount < rejectionMessages.length) {
        question.innerText = rejectionMessages[rejectionCount];
    } else {
        question.innerText = "Gotcha BITCH";
        document.querySelector(".no").style.display = "none"; // Hide "No" button
    }

    rejectionCount++;

    if (rejectionCount === 1) {
        let gifContainer = document.getElementById("gif-container");

        // Remove any existing crying Kitty
        gifContainer.innerHTML = "";

        // Add crying Hello Kitty
        let cryKitty = document.createElement("img");
        cryKitty.src = "10-1.png"; // Crying Hello Kitty GIF
        cryKitty.classList.add("cry-kitty");
        gifContainer.appendChild(cryKitty);
    }
}
