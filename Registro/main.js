
let musicos = [];

function agregarMusico() {
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const estilo = document.getElementById('estilo').value;
    const experiencia = document.getElementById('experiencia').value;
    const localidad = document.getElementById('localidad').value;

    if (!nombre || !telefono || !estilo || !experiencia || !localidad) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    const musico = {
        nombre,
        telefono,
        estilo,
        experiencia,
        localidad
    };

    musicos.push(musico);
    document.getElementById('musicianForm').reset();
    mostrarMusicos();
}

function cargarDatos() {
    fetch('musicians.json')
        .then(response => response.json())
        .then(data => {
            musicos = [...musicos, ...data];
            mostrarMusicos();
        })
        .catch(error => {
            console.error('Error al cargar datos:', error);
        });
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

function mostrarMusicos() {
    const musicianList = document.getElementById('musicianList');
    musicianList.innerHTML = '';

    musicos.forEach(musico => {
        const card = document.createElement('div');
        card.className = 'card mb-2';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const cardText = document.createElement('p');
        cardText.textContent = `
            Nombre: ${musico.nombre}
            Teléfono: ${musico.telefono}
            Estilo Musical: ${musico.estilo}
            Experiencia: ${musico.experiencia}
            Localidad: ${musico.localidad}
        `;

        cardBody.appendChild(cardText);
        card.appendChild(cardBody);
        musicianList.appendChild(card);
    });

}