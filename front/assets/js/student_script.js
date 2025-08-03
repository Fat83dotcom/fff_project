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
      const response = await fetch(
        "http://localhost:8000/students/?format=api",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

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
