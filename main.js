const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./assets/img/female3.png"
  }
];

const containerEl = document.getElementById("container");
const nameEl = document.getElementById("name");
const roleEl = document.getElementById("role");
const emailEl = document.getElementById("email")
const formEl = document.querySelector("form");

function cardRenderer() {
    teamMembers.forEach(e => {
        containerEl.innerHTML += `
            <div class="card">
                <img src="${e.img}" alt="">
                <div class="right">
                    <h3 class="name">${e.name}</h3>
                    <p class="role">${e.role}</p>
                    <a href="${e.email}">${e.email}</a>
                </div>
            </div>
            `
    });
}

formEl.addEventListener("submit", (event) => {
    event.preventDefault();

    containerEl.innerHTML += `
        <div class="card">
            <img src="./assets/img/female2.png" alt="">
            <div class="right">
                <h3 class="name">${nameEl.value}</h3>
                <p class="role">${roleEl.value}</p>
                <a href="${emailEl.value}">${emailEl.value}</a>
            </div>
        </div>
        `
});

cardRenderer();

