// Inicialización de elementos
const botones = document.querySelectorAll('.btn-apartado');
const itemsContenido = document.querySelectorAll('.contenido-item');
const itemInicial = document.getElementById('item-platillos');

// Función para mostrar el contenido seleccionado
function mostrarItem(idItem) {
    // Validar que el item exista
    const itemSeleccionado = document.getElementById(`item-${idItem}`);
    if (!itemSeleccionado) return;

    // Ocultar todos los items y desmarcar botones
    itemsContenido.forEach(item => item.classList.remove('activo'));
    botones.forEach(boton => boton.setAttribute('aria-pressed', 'false'));

    // Mostrar item seleccionado y marcar botón
    itemSeleccionado.classList.add('activo');
    document.getElementById(`btn-${idItem}`).setAttribute('aria-pressed', 'true');
    itemSeleccionado.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Función de inicialización
function inicializarApp() {
    // Mostrar el primer item al cargar
    itemInicial.classList.add('activo');
    document.getElementById('btn-platillos').setAttribute('aria-pressed', 'true');

    // Agregar eventos a los botones
    botones.forEach(boton => {
        // Evento clic
        boton.addEventListener('click', () => {
            const id = boton.id.split('-')[1];
            mostrarItem(id);
        });

        // Evento teclado (accesibilidad)
        boton.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const id = boton.id.split('-')[1];
                mostrarItem(id);
            }
        });
    });
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', inicializarApp);
