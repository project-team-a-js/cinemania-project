const modal = document.querySelector(".modal");
const footerLink = document.querySelector(".footer-link");
const footerCloseBtn = document.querySelector(".modal-close-btn");

const teamContainer = document.querySelector(".team-container");
const memberCard = document.querySelector(".member-card");

const teamMembers = [
  {
    name: "Abdullah Furkan Toy",
    role: "FullStack Developer",
    image: "",
    gitLink: "",
    linkedLink: "",
  },
  {
    name: "Aykut Şahinbaş",
    role: "FullStack Developer",
    image: "",
    gitLink: "",
    linkedLink: "",
  },
  {
    name: "Burak Ezer",
    role: "FullStack Developer",
    image: "",
    gitLink: "",
    linkedLink: "",
  },
  {
    name: "Çağla Karabudak Akın",
    role: "FullStack Developer",
    image: "",
    gitLink: "",
    linkedLink: "",
  },
  {
    name: "Emre Ayvaz",
    role: "FullStack Developer",
    image: "",
    gitLink: "",
    linkedLink: "",
  },
  {
    name: "Erdem İzcikılınç",
    role: "FullStack Developer",
    image: "",
    gitLink: "",
    linkedLink: "",
  },
  {
    name: "İlker Şelimen",
    role: "FullStack Developer",
    image: "",
    gitLink: "",
    linkedLink: "",
  },
  {
    name: "Mehmet Öndüç",
    role: "FullStack Developer",
    image: "",
    gitLink: "",
    linkedLink: "",
  },
  {
    name: "Özgür Korkmaz",
    role: "FullStack Developer",
    image: "",
    gitLink: "",
    linkedLink: "",
  },
  {
    name: "Umay Ece Mantar",
    role: "FullStack Developer",
    image: "",
    gitLink: "",
    linkedLink: "",
  },
];


function addTeamMember(team) { 
  
  memberCard.innerHTML = "";

  team.forEach(member => {
    const teamMember = document.createElement("li");
    teamMember.classList.add("team-member");
    teamMember.innerHTML = `
      <img class="member-img" src="${member.image}" alt="${member.name}"/>
      <div class="member-info">
        <p class="member-p">${member.name}</p>
        <p class="member-p2">${member.role}</p>
        <div class="member-link-container">
          <a class="member-link" href="${member.linkedLink || "#"}">
            <svg class="link-svg" width="30" height="30">
              <use href="./img/upFooIcons.svg#creators-linkedin"></use>
            </svg>
          </a>
          <a class="member-link" href="${member.gitLink || "#"}">
            <svg class="link-svg" width="30" height="30">
              <use href="./img/upFooIcons.svg#creators-github"></use>
            </svg>
          </a>
        </div>
      </div>
    `;

    memberCard.appendChild(teamMember);
    teamContainer.appendChild(memberCard);

  });
}


function openModal() {
  modal.style.display = "flex";
  addTeamMember(teamMembers);
}

function closeModal() {
  modal.style.display = "none";
}

footerLink.addEventListener("click", (event) => {
  event.preventDefault();
  openModal();
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.style.display === "flex") {
    closeModal();
  }
});

footerCloseBtn.addEventListener("click", closeModal);
