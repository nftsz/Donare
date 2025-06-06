// JavaScript para controlar o modal de criação de anúncios

document.addEventListener("DOMContentLoaded", function () {

    // Abrir modal 
    document
        .querySelector(".btn.create_ad")
        .addEventListener("click", function () {
            document.getElementById("adModal").style.display = "block";
            document.body.style.overflow = "hidden"; // Impede scroll da página
        });

    // Fechar modal
    document
        .querySelector("#adModal .close-modal")
        .addEventListener("click", function () {
            document.getElementById("adModal").style.display = "none";
            document.body.style.overflow = "auto";
        });

    // Fechar ao clicar fora
    window.addEventListener("click", function (event) {
        if (event.target === document.getElementById("adModal")) {
            document.getElementById("adModal").style.display = "none";
            document.body.style.overflow = "auto";
        }
    });

    // Preview de imagens
    document
        .getElementById("itemImage")
        ?.addEventListener("change", function (e) {
            const preview = document.getElementById("imagePreview");
            preview.innerHTML = "";

            if (this.files) {
                Array.from(this.files).forEach((file) => {
                    const reader = new FileReader();

                    reader.onload = function (e) {
                        const img = document.createElement("img");
                        img.src = e.target.result;
                        preview.appendChild(img);
                    };

                    reader.readAsDataURL(file);
                });
            }
        });


    // Enviar formulário
    document.getElementById("adForm")?.addEventListener("submit", function (e) {
        e.preventDefault();
        const submitBtn = this.querySelector(".submit-btn");
        submitBtn.textContent = "Publicando...";
        submitBtn.disabled = true;

        // Simula uma notificacao ao enviar o formulario
        function showNotification() {
            const notification = document.getElementById("notification");

            notification.classList.remove("notification-hidden");
            notification.style.animation = "slideIn 0.2s forwards";

            // Esconde após 3 segundos
            setTimeout(() => {
                notification.style.animation = "slideOut 0.5s forwards";
                setTimeout(() => {
                    notification.classList.add("notification-hidden");
                }, 500);
            }, 3000);
        }

        setTimeout(() => {
            showNotification(); 
            document.getElementById("adModal").style.display = "none";
            document.body.style.overflow = "auto";
            this.reset();
            document.getElementById("imagePreview").innerHTML = "";
            submitBtn.textContent = "Publicar Anúncio";
            submitBtn.disabled = false;
        }, 1500);
    });
});
