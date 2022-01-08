function handleSubmit(){
    let name = document.getElementById("fullName").value;
    const email = document.getElementById("signEmail").value;
    const username = document.getElementById("signName").value;
    const password = document.getElementById("signPassword").value;
    const formData = {
        name,
        email,
        password,
        username
    }

    const options = {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch(window.location.href+"signup", options)
    .then(response => response.json())
    .then(data => alert(data.message));

}