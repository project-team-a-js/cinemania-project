const modal = document.querySelector(".team-modal");
const footerLink = document.querySelector(".footer-link");
const footerCloseBtn = document.querySelector(".team-modal .modal-close-btn");

const teamContainer = document.querySelector(".team-modal .team-container");
const memberCard = document.querySelector(".team-modal .member-card");

/*const teamMembers = [
  {
    name: "Abdullah Furkan Toy",
    role: "FullStack Developer",
    image: "",
    gitLink: "https://github.com/okazaki55",
    linkedLink: "https://www.linkedin.com/in/a-furkan-t/",
  },
  {
    name: "Aykut Şahinbaş",
    role: "FullStack Developer",
    image: "./img/aykut-sahinbas.jpeg",
    gitLink: "https://github.com/ayktshnbs",
    linkedLink: "",
  },
  {
    name: "Burak Ezer",
    role: "FullStack Developer",
    image: "./img/burak-ezer.jpeg",
    gitLink: "https://github.com/burak-ezer",
    linkedLink: "",
  },
  {
    name: "Çağla Karabudak Akın",
    role: "FullStack Developer",
    image: "./img/cagla-karabudak-akin.jpg",
    gitLink: "https://github.com/caglaakin",
    linkedLink: "https://www.linkedin.com/in/%C3%A7a%C4%9Fla-karabudak-ak%C4%B1n-b118b118a/",
  },
  {
    name: "Emre Ayvaz",
    role: "FullStack Developer",
    image: "./img/emre-ayvaz.jpeg",
    gitLink: "https://github.com/Emreayvz",
    linkedLink: "https://www.linkedin.com/in/emreayvz/",
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
    gitLink: "https://github.com/ilkerthedev",
    linkedLink: "https://www.linkedin.com/in/ilker-%C5%9Felimen-206338266/",
  },
  {
    name: "Mehmet Öndüç",
    role: "FullStack Developer",
    image: "./img/mehmet-onduc.jpeg",
    gitLink: "https://github.com/Mehmetonduc",
    linkedLink: "https://www.linkedin.com/in/muhammet-mehmet-%C3%B6nd%C3%BC%C3%A7-b07582210/",
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
    image: "./img/umay-ece-mantar.jpeg",
    gitLink: "https://github.com/cicikusdev",
    linkedLink: "https://www.linkedin.com/in/umayecemantar",
  },
];

const userNoImage = "./img/no-user-image.jpeg";

function addTeamMember(team) {
  memberCard.innerHTML = "";

  team.forEach((member) => {
    const memberImage = member.image === "" ? userNoImage : member.image;

    const teamMember = document.createElement("li");
    teamMember.classList.add("team-member");
    teamMember.innerHTML = `
      <img class="member-img" src="${memberImage}" alt="${member.name}"/>
      <div class="member-info">
        <p class="member-p">${member.name}</p>
        <p class="member-p2">${member.role}</p>
        <div class="member-link-container">
          <a class="member-link" href="${member.linkedLink || "#"}" target="_blank">
            <svg class="link-svg" width="30" height="30">
              <use href="./img/upFooIcons.svg#creators-linkedin"></use>
            </svg>
          </a>
          <a class="member-link" href="${member.gitLink || "#"}" target="_blank">
            <svg class="link-svg" width="30" height="30">
              <use href="./img/upFooIcons.svg#creators-github"></use>
            </svg>
          </a>
        </div>
      </div>
    `;

    memberCard.appendChild(teamMember);
  });
  
  if (memberCard.children.length > 0) {
    teamContainer.appendChild(memberCard);
  }
}*/

function openModal() {
  if (modal) {
    modal.style.display = "flex";
  }
}

function closeModal() {
  if (modal) {
    modal.style.display = "none";
  }
}

if (footerLink) {
  footerLink.addEventListener("click", (event) => {
    event.preventDefault();
    openModal();
  });
}

if (modal) {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal && modal.style.display === "flex") {
    closeModal();
  }
});

if (footerCloseBtn) {
  footerCloseBtn.addEventListener("click", closeModal);
}