console.log("no work we trade ai scanner loaded")

if (window.location.href.includes("pocketoption")) {

const panel = document.createElement("div")

panel.id = "nwwt-panel"

panel.innerHTML = `

<div id="nwwt-header">
no work we trade
<br>
ai chart scanner
</div>

<button id="nwwtScan">
scan chart
</button>

<div id="nwwt-direction">
trade direction:
<br>
waiting...
</div>

<div id="nwwt-strength">
setup strength:
<br>
--
</div>

<div id="nwwt-pattern">
pattern:
<br>
waiting for scan
</div>

`

panel.style.position = "fixed"
panel.style.top = "100px"
panel.style.right = "20px"
panel.style.zIndex = "999999"
panel.style.width = "280px"
panel.style.background = "#111111"
panel.style.color = "#d4af37"
panel.style.padding = "20px"
panel.style.borderRadius = "15px"
panel.style.fontFamily = "Arial"
panel.style.boxShadow = "0 0 20px #d4af37"

document.body.appendChild(panel)


document.getElementById("nwwtScan").onclick = () => {

document.getElementById("nwwt-direction").innerHTML =
"trade direction:<br>analyzing..."

document.getElementById("nwwt-strength").innerHTML =
"setup strength:<br>scanning candles..."

console.log("chart scan started")

}

}
