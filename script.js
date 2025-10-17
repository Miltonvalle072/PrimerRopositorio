// Maneja el envío del formulario y la validación simple
document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('person-form');
  const nameInput = document.getElementById('name');
  const ageInput = document.getElementById('age');
  const resSection = document.getElementById('result');
  const resName = document.getElementById('res-name');
  const resAge = document.getElementById('res-age');
  const phoneInput = document.getElementById('phone');
  const resPhone = document.getElementById('res-phone');
  const addressInput = document.getElementById('address');
  const resAddress = document.getElementById('res-address');
  const resetBtn = document.getElementById('reset-btn');
  const closeBtn = document.getElementById('close-result');

  function showError(input, message){
    const small = input.parentElement.querySelector('.error');
    small.textContent = message; 
    small.classList.add('visible');
    input.setAttribute('aria-invalid','true');
  }

  function clearError(input){
    const small = input.parentElement.querySelector('.error');
    small.textContent = '';
    small.classList.remove('visible');
    input.removeAttribute('aria-invalid');
  }

  form.addEventListener('submit', function(e){
    e.preventDefault();
    let valid = true;

    // validar nombre
    const name = nameInput.value.trim();
    clearError(nameInput);
    if(name.length < 2){
      showError(nameInput, 'Introduce al menos 2 caracteres en el nombre.');
      valid = false;
    }

    // validar edad
    clearError(ageInput);
    const ageVal = ageInput.value;
    if(ageVal === ''){
      showError(ageInput, 'La edad es obligatoria.');
      valid = false;
    } else {
      const age = Number(ageVal);
      if(!Number.isInteger(age) || age < 0 || age > 150){
        showError(ageInput, 'Introduce una edad válida entre 0 y 150.');
        valid = false;
      }
    }

    if(!valid) return;

    // mostrar resultado
    resName.textContent = name;
    resAge.textContent = ageInput.value;
    resPhone.textContent = phoneInput.value;
    resAddress.textContent = addressInput.value;
    resSection.hidden = false;
    resSection.scrollIntoView({behavior:'smooth'});
  });

  resetBtn.addEventListener('click', function(){
    form.reset();
    clearError(nameInput);
    clearError(ageInput);
    resSection.hidden = true;
  });

  closeBtn.addEventListener('click', function(){
    resSection.hidden = true;
  });
});