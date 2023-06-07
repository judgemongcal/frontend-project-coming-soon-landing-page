const emailArea = document.querySelector(".email");
const notifyBtn = document.querySelector(".notify-btn");
const errorMsg = document.querySelector(".error-msg");


notifyBtn.addEventListener("click", (e) => {

    const email = document.getElementById('emailInput').value;
    const btn = document.getElementById('notify').value;

    const isValid =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 

    if (!isValid.test(email.toLowerCase())) {
        emailArea.style.borderColor = "red";
        errorMsg.style.display = "block";
        emailArea.value = '';
    }

    else{
        emailArea.style.borderColor = "green";
        e.preventDefault();
    }

    
});
