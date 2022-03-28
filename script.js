// Oque ligara o Javascript com o Html que e visível para o cliente!  ⬇
// What will link Javascript with html that is visible to the client!  ⬇
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const submitButton = document.querySelector("#submit-button");
const erroMessage = document.querySelector(".msg");
const items = document.getElementById("users")

/****************************************************************************************/

//A lista de eventos a ser executado!  ⬇
//The list of events to run!  ⬇ 
submitButton.addEventListener("click", function(e) {
    e.preventDefault(); // ⬅ Cancela o evento nativo, não enviara o formulário para o servidor! 
                        // ⬅ Cancels the native event, won't send the form to the server!
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

//                 Test ⬇   
    if (nameValue === ''|| emailValue === '') {
        erroMessage.textContent = "Por favor, Preencha todos os campos!"
        erroMessage.classList= "error";

//      time to clear, the alert! ⬇       
        setTimeout(()=>{
            erroMessage.textContent = "";
            erroMessage.classList = "";

        },3000)

        return;

    }
//  Final result! ⬇ 
    const li = document.createElement("li")
    li.classList = "item";
    li.innerHTML = `Nome: ${nameValue} <br> Email: ${emailValue}`
    items.appendChild(li);

//  Clear inputs ⬇
    nameInput.value = "";
    emailInput.value = "";
});