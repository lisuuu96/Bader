function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
  
    if (name === "") {
      alert("Name muss ausgefüllt sein");
      return false;
    }
  
    if (email === "") {
      alert("Email muss ausgefültt sein");
      return false;
    }
  
    if (phone === "") {
      alert("Telefon muss ausgefüllt sein");
      return false;
    }
  
  
    return true;
  }
