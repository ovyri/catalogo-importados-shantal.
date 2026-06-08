document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal-talles');
    const closeBtn = document.querySelector('.close-btn');
    const modalTitulo = document.getElementById('modal-producto-titulo');
    const modalGaleria = document.getElementById('modal-galeria');
    const botonesConsultar = document.querySelectorAll('.btn-add');
    const btnModalEnlace = document.querySelector('.btn-modal-wsp');

    botonesConsultar.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const tarjetaProducto = e.target.closest('.producto-card');
            const nombreProducto = tarjetaProducto.querySelector('h3').innerText;
            
            modalTitulo.innerText = nombreProducto;
            modalGaleria.innerHTML = ""; // Limpiamos la galería anterior

            // Configuración especial si el cliente toca la sección de Zapatillas
            if (nombreProducto.toLowerCase().includes('zapatillas')) {
                btnModalEnlace.href = "https://www.zapasok.com/";
                btnModalEnlace.innerText = "Ver Catálogo en ZapasOK 👟";
                btnModalEnlace.style.backgroundColor = "#2980b9";
            } else {
                btnModalEnlace.href = "https://www.instagram.com/importados.shantal/";
                btnModalEnlace.innerText = "Preguntar por Instagram 📲";
                btnModalEnlace.style.backgroundColor = "#f39c12";

                // Si no es zapatillas, cargamos la galería de imágenes secundarias que guardaste
                const fotosAttr = tarjetaProducto.getAttribute('data-fotos');
                if (fotosAttr) {
                    const listaFotos = fotosAttr.split(',');
                    listaFotos.forEach(rutaFoto => {
                        const img = document.createElement('img');
                        img.src = rutaFoto;
                        img.alt = "Vista del producto";
                        img.classList.add('img-miniatura');
                        modalGaleria.appendChild(img);
                    });
                }
            }
            
            modal.classList.add('show');
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
});