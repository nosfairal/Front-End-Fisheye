function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

//check "prénom" data
function FirstName() {
    let inputValue = document.getElementById("prenom").value;
    if (inputValue !== "") {
        return true;
    }
    else {
        return false;
    }
}

//check "nom de famille" data
function LastName() {
    let inputValue = document.getElementById("nom").value;
    if (inputValue !== "") {
        return true;
    }
    else {
        return false;
    }
}

//check "email" data
function Email() {
    let inputValue = document.getElementById("email").value;
    if (inputValue !== "") {
        return true;
    }
    else {
        return false;
    }
}

function message() {
    let inputValue = document.getElementById("message").value;
    if (inputValue !== "") {
        return true;
    }
    else {
        return false;
    }
}

// Validate form
document.querySelector("#submit").addEventListener("click", (e) => {
    // "annuler" le comportement par défaut
    e.preventDefault();


    // verify one by one fields
    const verifFirstName = FirstName();
    const verifLastName = LastName();
    const verifEmail = Email();
    const verifMessage = message();


    // If all is correct
    if (verifFirstName && verifLastName && verifEmail && verifMessage) {
        console.log(document.getElementById("prenom").value);
        console.log(document.getElementById("nom").value);
        console.log(document.getElementById("email").value);
        console.log(document.getElementById("message").value);
    }
    else {
        console.log("Il y a une erreur");
    }
})