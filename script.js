const inputElement = (type, name, id, label) => {
    return `
        <div class="${type}">
            <label for="${id}">${label}</label>
            <input type="${type}" name="${name}" id="${id}">
        </div>
    `
}

const formElement = `
    <form id="form">
    ${ inputElement("file", "uploadPicture", "uploadPicture", "Upload your picture!")}
    <button>Send</button>
    </form>
`;

let formSubmit = (event) => {
    event.preventDefault();
}

const inputEvent = (event) => {
    console.log(event.target.value);
    if (event.target.getAttribute("name") === "uploadPicture") {

        const image = URL.createObjectURL(event.target.files[0]);
        document.getElementById("inputValueContent").insertAdjacentHTML("beforeend", `
            <img src="${image}">
        `);
    }
}

function loadEvent() {
    const root = document.getElementById("root");
    root.insertAdjacentHTML("beforeend", formElement);
    root.insertAdjacentHTML("beforeend", `
    <div id="inputValueContent"></div>
    `);

    const form = document.getElementById("form");
    form.addEventListener("submit", formSubmit);

    const inputList = form.querySelectorAll("input");
    for (input of inputList) {
        input.addEventListener("input", inputEvent)
    }
}

window.addEventListener("load", loadEvent)