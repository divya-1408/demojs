document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("signupForm");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const formData = new FormData(this);

        fetch("signup.php", {
            method: "POST",
            body: formData
        })
        .then(res => res.text())
        .then(data => {
            alert(data);
        });

    });

});
