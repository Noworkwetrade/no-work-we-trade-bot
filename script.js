document.addEventListener("DOMContentLoaded", () => {

  const button = document.getElementById("scan")
  const status = document.getElementById("status")

  button.addEventListener("click", () => {

    status.textContent = "scanning otc chart..."

    setTimeout(() => {
      status.textContent = "scanner ready"
    }, 2000)

  })

})
