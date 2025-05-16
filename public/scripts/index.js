function show_prompt(title = "Prompt", text = "None") {
    // Check if the popup already exists to prevent duplicates
    if (document.getElementById("popup")) {
        document.getElementById("prompt-h3").innerText = title;
        document.getElementById("prompt-p").innerText = text;
        document.getElementById("popup").style.display = "block";
        return;
    }

    // Create the style element
    const style = document.createElement("style");
    style.innerHTML = `
        #popup {
            background-color: #6666FF;
            width: 200px;
            text-align: center;
            font-family: Arial, Sans-Serif, Helvetica;
            padding: 5px;
            color: white;
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        }

        #prompt-h3 {
            margin-top: 2px;
            margin-bottom: 2px;
        }

        #prompt-p {
            margin-top: 4px;
        }

        #prompt-b {
            margin-bottom: 10px;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            color: white;
            background-color: #4444FF;
            padding: 10px;
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);

    // Create the popup div
    const popup = document.createElement("div");
    popup.id = "popup";
    popup.innerHTML = `
        <h3 id="prompt-h3">${title}</h3>
        <p id="prompt-p">${text}</p>
        <button id="prompt-b" onclick="remove('popup')">Okay</button>
    `;

    document.body.appendChild(popup);
}

function remove(id = "") {
    if (id.length == 0) return;

    const elem = document.getElementById(id);
    elem.remove();
}

function show(type="") {
    if (type.length == 0) console.error("Type is equal to none!");

    if (type == "Window") {
        show_prompt("Window", "Show game window here");
    }

    if (type == "Script") {
        show_prompt("Script", "Show script editor here");
    }
}