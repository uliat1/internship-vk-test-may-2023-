const {form} = document.forms;

function retrieveFormValue(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const values = Object.fromEntries(formData.entries());

  console.log('>>', values);

}

form.addEventListener('submit', retrieveFormValue);





//Блокировка кнопки "Забронировать"
/*function checkValidity(event) {
    const formNode = event.target.form
    const isValid = formNode.checkValidity()
  
    formNode.querySelector('button').disabled = !isValid
  }
  
  applicantForm.addEventListener('input', checkValidity)*/

