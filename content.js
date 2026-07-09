console.log("no work we trade loaded")

if (window.location.href.includes("pocketoption")) {

    const panel = document.createElement("div")

    panel.innerHTML = `
    <div style="
    background:#111;
    color:#d4af37;
    padding:15px;
    border-radius:10px;
    width:250px;
    font-family:Arial;
    ">
    <h3>No Work We Trade</h3>
    <p>otc scanner connected</p>
    <button id="nwwtScan">
    start scanner
    </button>
    <p id="nwwtStatus">
    waiting...
    </p>
    </div>
    `

    panel.style.position = "fixed"
    panel.style.top = "100px"
    panel.style.right = "20px"
    panel.style.zIndex = "999999"

    document.body.appendChild(panel)


    document.getElementById("nwwtScan").onclick = () => {

    document.getElementById("nwwtStatus").innerText =
    "looking for market data..."

    console.clear()

    console.log("window keys")
    console.log(Object.keys(window))

    }
