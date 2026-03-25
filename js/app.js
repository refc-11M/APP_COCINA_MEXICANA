const botones = document.querySelectorAll('.btn-apartado');
const items = document.querySelectorAll('.contenido-item');
const itemInicial = document.getElementById('item-platillos');

// Función para mostrar item
function mostrarItem(id) {
    items.forEach(item => item.classList.remove('activo'));
    botones.forEach(btn => btn.setAttribute('aria-pressed', 'false'));
    
    const itemSeleccionado = document.getElementById(`item-${id}`);
    itemSeleccionado.classList.add('activo');
    document.getElementById(`btn-${id}`).setAttribute('aria-pressed', 'true');
}

// Inicializar
function inicializar() {
    itemInicial.classList.add('activo');
    document.getElementById('btn-platillos').setAttribute('aria-pressed', 'true');

    // Eventos de botones
    botones.forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.id.split('-')[1];
            mostrarItem(id);
        });
    });
}

document.addEventListener('DOMContentLoaded', inicializar);
