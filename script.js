document.addEventListener("DOMContentLoaded", function () {
  const epiForm = document.getElementById("epiForm");
  const statusDiv = document.getElementById("status");

  epiForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const nome = document.getElementById("nome").value;
      const departamento = document.getElementById("departamento").value;
      const epi = document.getElementById("epi").value;

      // Simulando o envio dos dados para um servidor (pode ser substituído pela lógica real)
      setTimeout(function () {
          const entregaStatus = "Em processamento";
          statusDiv.innerHTML = `
              <p><strong>Nome:</strong> ${nome}</p>
              <p><strong>Departamento:</strong> ${departamento}</p>
              <p><strong>EPI Solicitado:</strong> ${epi}</p>
              <p><strong>Status de Entrega:</strong> ${entregaStatus}</p>
          `;
      }, 2000); // Simula um atraso no processamento

      // Limpar o formulário
      epiForm.reset();
  });
});
