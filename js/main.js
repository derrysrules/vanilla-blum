// $("#menu").click(function() {
//     document.getElementById("nav").style.height = "100%";
//     document.getElementById("nav").style.opacity = "1";
//     document.getElementById("nav").style.pointerEvents = "auto";
//   });
function contacte() {
    var form = document.getElementById("formular");
    form.scrollIntoView({ behavior: 'smooth' });
  }
function tema_i(){
    document.getElementById("tort_center").style.display ="flex";
    document.getElementById("biscuiti_center").style.display="none";
    document.getElementById("turte-dulci").style.display ="none";
}

function tema_e(){
    document.getElementById("tort_center").style.display ="none";
    document.getElementById("biscuiti_center").style.display ="flex";
    document.getElementById("turte-dulci").style.display ="none";
}

function tema_f(){
    document.getElementById("tort_center").style.display ="none";
    document.getElementById("biscuiti_center").style.display ="none";
    document.getElementById("turte-dulci").style.display ="flex";
}
function openContact(){
    document.getElementById("container")
}
emailjs.init("axZli0JrcNuhqDehP");
function send() {
  let f=document.getElementById("form");
  if (f.checkValidity()==false){
    f.reportValidity();
    return;
  }

var data = {
    nume: document.getElementById("nume").value,
    email: document.getElementById("email").value,
    mesaj: document.getElementById("mesaj").value,
    phone: document.getElementById("telefon").value
};


  emailjs.send("service_kjvz6pm", "template_j7bf6fs", data)
    .then(function(response) {
      alert('Mesajul este transmis!')
      form.reset(); 
    }, function(error) {
      alert('Eroare la transmitere.Va rugam incercati mai tarziu.');
    });
  }



// 1 formular mesaj
  emailjs.init("axZli0JrcNuhqDehP");
function send() {
  let f=document.getElementById("form");
  if (f.checkValidity()==false){
    f.reportValidity();
    return;
  }

var data = {
    nume: document.getElementById("nume").value,
    email: document.getElementById("email").value,
    mesaj: document.getElementById("mesaj").value,
    phone: document.getElementById("telefon").value
};


  emailjs.send("service_kjvz6pm", "template_j7bf6fs", data)
    .then(function(response) {
      alert('Mesajul este transmis!')
      form.reset(); 
    }, function(error) {
      alert('Eroare la transmitere.Va rugam incercati mai tarziu.');
    });
  }

// email pentru formular 

emailjs.init("axZli0JrcNuhqDehP");
function sendEmail() {
  let f=document.getElementById("comanda");
  if (f.checkValidity()==false){
    f.reportValidity();
    return;
  }

var cerere = {
    kilograme: document.getElementById("kg").value,
    design: document.getElementById("design").value,
    foto: document.getElementById("foto").value,
    lista: document.getElementById("lista").value
};


  emailjs.sendEmail("service_kjvz6pm", "template_hkmhw6n", cerere)
    .then(function(response) {
      alert('Mesajul este transmis!')
      form.reset(); 
    }, function(error) {
      alert('Eroare la transmitere.Va rugam incercati mai tarziu.');
    });
  }












