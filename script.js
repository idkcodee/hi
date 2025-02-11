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
    gifContainer.innerHTML = ""; // Remove any existing GIFs

    let slayKitty = document.createElement("img");
    slayKitty.src = "slayyy-sanrio.gif";
    slayKitty.classList.add("slay-kitty");
    gifContainer.appendChild(slayKitty);

    // Remove "No" button when "Yes" is pressed
    let noBtn = document.querySelector(".no");
    if (noBtn) {
        noBtn.remove();
    }

    startRain(); // Start raining images
}

function rejectMission() {
    let question = document.getElementById("question");

    if (rejectionCount < rejectionMessages.length) {
        question.innerText = rejectionMessages[rejectionCount];
    } else {
        question.innerText = "Gotcha BITCH";
        document.querySelector(".no").style.display = "none";
    }

    rejectionCount++;

    let gifContainer = document.getElementById("gif-container");
    gifContainer.innerHTML = ""; // Wipe previous GIFs

    // ✅ Remove existing crying kitty before adding a new one
    let existingCryingKitty = document.querySelector(".cry-kitty");
    if (existingCryingKitty) {
        existingCryingKitty.remove();
    }

    let cryKitty = document.createElement("img");
    cryKitty.src = "10-1.png";
    cryKitty.classList.add("cry-kitty");
    gifContainer.appendChild(cryKitty);
}




function startRain() {
    for (let i = 0; i < 20; i++) {
        let rainDrop = document.createElement("img");
        rainDrop.src = "photo.png";
        rainDrop.classList.add("rain-drop");

        rainDrop.style.position = "fixed";
        rainDrop.style.left = `${Math.random() * 100}vw`;
        rainDrop.style.top = "-10%";
        rainDrop.style.width = `${Math.random() * 40 + 20}px`;
        rainDrop.style.zIndex = "9999";

        document.body.appendChild(rainDrop);

        setTimeout(() => {
            rainDrop.remove();
        }, 4000);
    }
}
