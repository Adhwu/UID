const subjects = [
  { name: "Modern Physics", icon: "fas fa-atom" },
  { name: "Discrete Maths", icon: "fas fa-square-root-alt" },
  { name: "Linear Algebra", icon: "fas fa-calculator" },
  { name: "Object Oriented Programming", icon: "fas fa-desktop" },
  { name: "User Interface Designing", icon: "fas fa-laptop" },
  { name: "Glimpses of Glorius India", icon: "fas fa-landmark" },
  { name: "Manufacturing Practices", icon: "fas fa-tools" },
];

const flow = new URLSearchParams(window.location.search).get("flow");
const cardContainer = document.getElementById("card-container");
subjects.forEach((subject) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<a href="/subjectsDetails.html?subject=${encodeURIComponent(
    subject.name
  )}&flow=${encodeURIComponent(flow)}">
                        <i class="${subject.icon}"></i>
                        ${subject.name}
                      </a>`;
  cardContainer.appendChild(card);
});
