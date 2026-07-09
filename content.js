console.log("no work we trade loaded")

if (window.location.href.includes("pocketoption")) {

    console.log("pocket option detected")

    const panel = document.createElement("div")

    panel.id = "nwwt-panel"

    panel.innerHTML = `
    <div style="
    background:#111;
    color:#d4af37;
    padding:15px;
    width:250px;
    border-radius:10px;
    font-family:Arial;
    box-shadow:0 0 15px #000;
    ">
    <h3>No Work We Trade</h3>
    <p>scanner connected</p>
    <button id="startScanner">
    start scanner
    </button>
    <p id="status">
    waiting...
    </p>
    </div>
    `

    panel.style.position = "fixed"
    panel.style.top = "100px"
    panel.style.right = "20px"
    panel.style.zIndex = "999999"

    document.body.appendChild(panel)


    document
    .getElementById("startScanner")
    .onclick = function(){

        document.getElementById("status").innerText =
        "scanning chart..."

    }

}
