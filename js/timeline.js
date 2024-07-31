const milestones = [
  {
    name: "Primer Año",
    description: "• Comencé a dar mis primeros pasos y a decir mis primeras palabras.",
    description2: "• Conocí a mi mejor amiga, con quien mantengo una amistad de 17 años hasta el día de hoy.",
  },
  {
    name: "Cuatro Años",
    description: "• Ingresé al jardín de infancia 'Mi Mundo', ubicado en la Colonia Nueva Montserrat.",
    description2: "• Recibí mi primera bicicleta como regalo.",
  },
  {
    name: "Seis Años",
    description: "• Empecé el primer año de primaria en el Colegio Jesucristo Rey de Gloria, situado en Zona 4 Mixco, Colonia Bosques de San Nicolás.",
    description2: "• Comencé clases de piano.",
  },
  {
    name: "Ocho Años",
    description: "• Recibí mi primera consola de videojuegos, la PlayStation Vita, como regalo.",
    description2: "• Conocí a mi mejor amigo, Jonathan.",
  },
  {
    name: "Diez Años",
    description: "• Me mudé por primera vez a mi nuevo hogar en la Colonia El Maestro 2, Zona 15.",
    description2: "• Empecé a interesarme en el mundo de la tecnología y la robótica.",
  },
  {
    name: "Doce Años",
    description: "• Me regalaron mi primera guitarra y una segunda consola de videojuegos, un PlayStation 4 Pro.",
    description2: "• Comencé a aprender a manejar motocicleta y automóvil.",
  },
  {
    name: "Trece Años",
    description: "• Empecé a aprender de forma autodidacta sobre lenguajes de programación, desarrollo de sistemas operativos, ciberseguridad y sistemas operativos.",
    description2: "• Comencé a desarrollar mis primeros sistemas operativos y programas, y a profundizar en electrónica.",
  },
  {
    name: "Catorce Años",
    description: "• Adquirí mi primera guitarra eléctrica y me interesé más en la música, produciendo mis primeros sencillos y EP.",
    description2: "• Logré finalizar el desarrollo de mis primeros sistemas operativos propios, basados en Linux y Windows.",
  },
  {
    name: "Quince Años",
    description: "• Inicié mi primer trabajo autónomo, enfocado en la venta de CDKeys, reparación e instalación de software y hardware.",
    description2: "• Descubrí un nuevo interés en la mecánica y electromecánica.",
  },
  {
    name: "Dieciséis Años",
    description: "• Compré mi primera motocicleta con un amigo, una Suzuki GSF S 2002, y participé en mi primera carrera, alcanzando una velocidad de 224 km/h y quedando en primer lugar.",
    description2: "• Realicé cursos en Intecap y obtuve certificaciones en informática, incluyendo gestión y mantenimiento de servidores y redes, reparación de computadoras y lenguajes de programación.",
  },
  {
    name: "Diecisiete Años (Actualmente)",
    description: "• Empecé a realizar mis primeros viajes en motocicleta por toda la ciudad de forma independiente.",
    description2: "• Experimenté mi primer accidente en motocicleta, una experiencia memorable.",
  },
];

document.addEventListener('DOMContentLoaded', function() {
  const timeline = document.getElementById('timeline');
  
  let html = "";
  milestones.forEach(function(milestone) {
    html += `
      <div class='child'>
        <div class='content' style='text-align: justify;'>
          <h4 style='font-style: italic; font-size: 35px;'>${milestone.name}</h4>
          <p style='font-size: 23px;'>${milestone.description}</p>
          <p style='font-size: 23px;'>${milestone.description2}</p>
        </div>
      </div>`;
  });
  
  timeline.innerHTML = html;

  const items = document.querySelectorAll(".child");
  
  items.forEach(function(item) {
    if (item.offsetTop < 300) item.classList.add("_show");
  });
  
  window.addEventListener("scroll", function() {
    const scroll = document.documentElement.scrollTop;
    items.forEach(function(elem) {
      if (elem.offsetTop - window.innerHeight / 2 < scroll) {
        elem.classList.remove("_hide");
        elem.classList.add("_show");
      } else {
        elem.classList.remove("_show");
        elem.classList.add("_hide");
      }
    });
  });
  
  console.log("el diablo loco xd");
});
