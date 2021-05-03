var form = document.getElementById("contact-form");

async function handleSubmit(event) {
  event.preventDefault();
  var alertDiv = document.getElementById("alert-div");
  var alertDivP = document.getElementById("alert-div-p");
  var alertErrDiv = document.getElementById("alert-err-div");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      alertDivP.style.margin = "10px 0";
      if (response.status >= 400 && response.status < 500) {
        alertErrDiv.style.display = "block";
      } else {
        alertDiv.style.display = "block";
      }
      form.reset();
    })
    .catch((error) => {
      alertDivP.style.margin = "10px 0";
      alertErrDiv.style.display = "initial";
    });
}
form.addEventListener("submit", handleSubmit);
