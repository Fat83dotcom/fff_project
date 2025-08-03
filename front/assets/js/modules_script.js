// formulario

const API_URL = "http://localhost:8000/modules/"; // substitua depois

document
  .getElementById("modules-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;

    const payload = {
      name,
    };

    const message = document.getElementById("message");
    message.classList.add("hidden");
    message.classList.remove("success", "error");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        message.textContent = "Matéria cadastrado com sucesso!";
        message.classList.add("success");
        document.getElementById("student-form").reset();
      } else {
        message.textContent = "Erro ao cadastrar Matéria.";
        message.classList.add("error");
      }
    } catch (error) {
      message.textContent = "Erro de conexão com o servidor.";
      message.classList.add("error");
    }

    message.classList.remove("hidden");
  });

// tabela

const message = document.getElementById("message");
const tableBody = document.querySelector("#modules-table tbody");

async function loadModules() {
  try {
    const response = await fetch(API_URL); // mesma URL, método GET
    if (!response.ok) throw new Error("Erro ao carregar alunos");

    const modules = await response.json();
    tableBody.innerHTML = ""; // limpa antes de inserir

    modules.forEach((module) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${module.name}</td>
        
      `;
      tableBody.appendChild(row);
    });
  } catch (error) {
    tableBody.innerHTML = `<tr><td colspan="3">Erro ao carregar dados.</td></tr>`;
  }
}

// Carrega alunos ao abrir a página
// loadStudents();
