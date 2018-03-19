function validateForm() {
    var x = document.forms["form"]["email"].value;
    if (x == "") {
        alert("Name and email must be filled out");
        return false;
    }
}