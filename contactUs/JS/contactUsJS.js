
function validateData() {
    document.getElementById("name").style.border = "2px solid #fafafa";
    document.getElementById("email").style.border = "2px solid #fafafa";
    document.getElementById("phone").style.border = "2px solid #fafafa";
    const name1 = document.getElementById("name").value;
    if (!name1) {
        document.getElementById("name").style.border = "thin solid red";
    }
    const email = document.getElementById("email").value;
    if (!email) {
        document.getElementById("email").style.border = "thin solid red";
    }
    const phone = document.getElementById("phone").value;
    if (!phone || isNaN(phone)) {
        document.getElementById("phone").style.border = "thin solid red";
    }
}