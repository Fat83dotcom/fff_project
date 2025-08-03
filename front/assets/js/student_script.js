// formulario

const API_URL = "http://localhost:8000/students/"; // substitua depois

document
  .getElementById("student-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const birthdate = document.getElementById("birthdate").value;

    const payload = {
      name,
      address,
      birthdate,
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
        message.textContent = "Aluno cadastrado com sucesso!";
        message.classList.add("success");
        document.getElementById("student-form").reset();
      } else {
        message.textContent = "Erro ao cadastrar aluno.";
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
const tableBody = document.querySelector("#students-table tbody");

async function loadStudents() {
  try {
    const response = await fetch(API_URL); // mesma URL, método GET
    if (!response.ok) throw new Error("Erro ao carregar alunos");

    const students = await response.json();
    tableBody.innerHTML = ""; // limpa antes de inserir

    students.forEach((student) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.address}</td>
        <td>${student.birthdate}</td>
      `;
      tableBody.appendChild(row);
    });
  } catch (error) {
    tableBody.innerHTML = `<tr><td colspan="3">Erro ao carregar dados.</td></tr>`;
  }
}

// Carrega alunos ao abrir a página
// loadStudents();
