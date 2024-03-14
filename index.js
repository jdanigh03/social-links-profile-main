const createCard = () => {
  const contenedorCarta = document.createElement("div");
  contenedorCarta.className = "card"; 

  const imagenCarta = document.createElement("img");
  imagenCarta.src = "./assets/images/avatar-jessica.jpeg";
  imagenCarta.className = "card-image"; 

  const nombreCarta = document.createElement("h2");
  nombreCarta.textContent = "Jessica Randall";

  const localizacion = document.createElement("h4");
  localizacion.textContent = "London, United Kingdom";

  const bio = document.createElement("h5");
  bio.textContent = "Front-end developer and avid reader.";

  const contenedordeBoton = document.createElement("div");
  contenedordeBoton.className = "contenedor"; 

  const socialLinks = ["GitHub", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"];

  socialLinks.forEach((link) => 
  {
    const button = document.createElement("button");
    button.textContent = link;
    contenedordeBoton.appendChild(button);
  });

  contenedorCarta.appendChild(imagenCarta);
  contenedorCarta.appendChild(nombreCarta);
  contenedorCarta.appendChild(localizacion);
  contenedorCarta.appendChild(bio);
  contenedorCarta.appendChild(contenedordeBoton);

  return contenedorCarta;
};

const mountPoint = document.querySelector("#app"); 
const addCardButton = document.querySelector("#addCardButton"); 

const addCard = () => {
  mountPoint.appendChild(createCard());
};

addCardButton.addEventListener("click", addCard);