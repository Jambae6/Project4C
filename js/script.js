let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

function editField(button, field) {
    const inputField = document.getElementById(`${field}Field`);
    const submitButton = document.getElementById(`${field}Submit`);
    const displayField = document.getElementById(`${field}Display`);

    inputField.value = displayField.textContent;
    inputField.classList.remove("hidden");
    submitButton.classList.remove("hidden");
    displayField.classList.add("hidden");
    button.classList.add("hidden");
  }