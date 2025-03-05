//Creando el nav reponsive
const menu = document.querySelector('.nav__menu');
const nvopen = document.querySelector('#menu-abrir');
const nvclose = document.querySelector('#menu-cerrar');

function navOpenClose() {
    menu.classList.toggle('nav__menu-visible');
}

nvopen.addEventListener('click', navOpenClose);
nvclose.addEventListener('click', navOpenClose);

const selectedSymptoms = [];

function toggleDropdown() {
    document.getElementById('dropdown-options').classList.toggle('active');
}

function selectSymptom(symptom) {
    if (!selectedSymptoms.includes(symptom)) {
        selectedSymptoms.push(symptom);
        updateSelectedSymptoms();
        document.getElementById('option-' + symptom).style.display = 'none';
    }
}

function removeSymptom(symptom) {
    const index = selectedSymptoms.indexOf(symptom);
    if (index !== -1) {
        selectedSymptoms.splice(index, 1);
        updateSelectedSymptoms();
        document.getElementById('option-' + symptom).style.display = 'block';
    }
}

function updateSelectedSymptoms() {
    const symptomsList = document.getElementById('symptoms-list');
    symptomsList.innerHTML = '';
    selectedSymptoms.forEach(symptom => {
        const symptomElement = document.createElement('span');
        symptomElement.classList.add('selected-option');
        symptomElement.textContent = symptom;
        
        const closeBtn = document.createElement('span');
        closeBtn.classList.add('close-btn');
        closeBtn.textContent = 'x';
        closeBtn.onclick = () => removeSymptom(symptom);
        
        symptomElement.appendChild(closeBtn);
        symptomsList.appendChild(symptomElement);
    });
    
    document.getElementById('dropdown-options').classList.remove('active');
}

function diagnose() {
    alert('Diagnosticando: ' + selectedSymptoms.join(', '));
    // agregar la lógica para el diagnóstico
}