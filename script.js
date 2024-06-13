const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

//editar alergias
function editAllergies() {
  // Elimina los botones existentes para evitar duplicados
  removeExistingButtons();

  var allergies = document.querySelectorAll(".allergies ul li");//selecciona todos los elementos li dentro de ul
  allergies.forEach(function (allergy) { //recorre cada elemento li
    var input = document.createElement("input"); //crea un input
    input.type = "text"; //tipo de input
    input.value = allergy.textContent; //asigna el valor del input al texto del elemento li
    allergy.textContent = ""; //limpia el texto del elemento li
    allergy.appendChild(input); //añade el input al elemento li
  });

  var addButton = document.createElement("button"); //crea un botón
  addButton.type = "button";  //tipo de botón
  addButton.textContent = "Agregar Alergia";  //texto del botón
  addButton.addEventListener("click", addAllergy);  //evento al hacer click
  document.querySelector(".allergies").appendChild(addButton);  //añade el botón al elemento con la clase allergies

  var removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.textContent = "Eliminar Alergia";
  removeButton.addEventListener("click", removeAllergy);
  document.querySelector(".allergies").appendChild(removeButton);

  var saveButton = document.createElement("button");
  saveButton.type = "button";
  saveButton.textContent = "Guardar Alergias";
  saveButton.addEventListener("click", saveAllergies);
  document.querySelector(".allergies").appendChild(saveButton);
}

function addAllergy() { //función para añadir alergias
  var ul = document.querySelector(".allergies ul"); //selecciona el elemento ul
  var li = document.createElement("li"); //crea un elemento li
  var input = document.createElement("input"); //crea un input
  input.type = "text"; //tipo de input
  li.appendChild(input); //añade el input al elemento li
  ul.appendChild(li); //añade el elemento li al elemento ul
}

function removeAllergy() { //función para eliminar alergias
  var ul = document.querySelector(".allergies ul"); //selecciona el elemento ul
  var li = ul.lastElementChild; //selecciona el último elemento hijo de ul
  if (li) { //si existe el elemento
    ul.removeChild(li); //elimina el elemento
  }
}

function saveAllergies() { //función para guardar alergias
  var allergies = document.querySelectorAll(".allergies ul li"); //selecciona todos los elementos li dentro de ul
  allergies.forEach(function (allergy) { //recorre cada elemento li
    var input = allergy.querySelector("input"); //selecciona el input dentro del elemento li
    allergy.textContent = input.value;  //asigna el valor del input al texto del elemento li
  });

  // Elimina los botones, pero mantiene el botón de editar
  var buttons = document.querySelectorAll(".allergies button"); //selecciona todos los botones dentro del elemento con la clase allergies
  buttons.forEach(function (button) { //recorre cada botón
    if (button.textContent !== "Editar Alergias") { //si el texto del botón es diferente a "Editar Alergias"
      button.parentNode.removeChild(button); //elimina el botón
    }
  });

  // Crear y añadir el botón de editar
  var editButton = document.createElement("button"); //crea un botón
  editButton.type = "button"; //tipo de botón
  editButton.textContent = "Editar Alergias"; //texto del botón
  editButton.addEventListener("click", editAllergies); //evento al hacer click
  document.querySelector(".allergies").appendChild(editButton); //añade el botón al elemento con la clase allergies
}

function removeExistingButtons() { //función para eliminar botones existentes
  var buttons = document.querySelectorAll(".allergies button"); //selecciona todos los botones dentro del elemento con la clase allergies
  buttons.forEach(function (button) { //recorre cada botón
    button.parentNode.removeChild(button); //elimina cada botón
  });
}

// Editar condiciones médicas
function editConditions() {
  // Elimina los botones existentes para evitar duplicados
  removeExistingButtonsOnMedicalCondition();

  var conditions = document.querySelectorAll(".conditions ul li");
  conditions.forEach(function (condition) {
    var input = document.createElement("input");
    input.type = "text";
    input.value = condition.textContent;
    condition.textContent = "";
    condition.appendChild(input);
  });

  var addButton = document.createElement("button");
  addButton.type = "button";
  addButton.textContent = "Agregar Condición";
  addButton.addEventListener("click", addCondition);
  document.querySelector(".conditions").appendChild(addButton);

  var removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.textContent = "Eliminar Condición";
  removeButton.addEventListener("click", removeCondition);
  document.querySelector(".conditions").appendChild(removeButton);

  var saveButton = document.createElement("button");
  saveButton.type = "button";
  saveButton.textContent = "Guardar Condiciones";
  saveButton.addEventListener("click", saveConditions);
  document.querySelector(".conditions").appendChild(saveButton);
}

function addCondition() {
  var ul = document.querySelector(".conditions ul");
  var li = document.createElement("li");
  var input = document.createElement("input");
  input.type = "text";
  li.appendChild(input);
  ul.appendChild(li);
}

function removeCondition() {
  var ul = document.querySelector(".conditions ul");
  var li = ul.lastElementChild;
  if (li) {
    ul.removeChild(li);
  }
}

function saveConditions() {
  var conditions = document.querySelectorAll(".conditions ul li");
  conditions.forEach(function (condition) {
    var input = condition.querySelector("input");
    condition.textContent = input.value;
  });

  var buttons = document.querySelectorAll(".conditions button");
  buttons.forEach(function (button) {
    if (button.textContent !== "Editar Condiciones Médicas") {
      button.parentNode.removeChild(button);
    }
  });

  var editButton = document.createElement("button");
  editButton.type = "button";
  editButton.textContent = "Editar Condiciones Médicas";
  editButton.addEventListener("click", editConditions);
  document.querySelector(".conditions").appendChild(editButton);
}

function removeExistingButtonsOnMedicalCondition() {
  var buttons = document.querySelectorAll(".conditions button");
  buttons.forEach(function (button) {
    button.parentNode.removeChild(button);
  });
}
