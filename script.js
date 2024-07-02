const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const service = document.getElementById("service");
const message = document.getElementById("message");

function sendWhatsapp() {
  const bodyMessage = `Nome Completo: ${fullName.value}<br> Email: ${email.value}<br> Telefone: ${phone.value}<br> Finalidade do Serviço: ${service.value}<br> Detalhes do Serviço: ${message.value}`;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendWhatsapp();
});
