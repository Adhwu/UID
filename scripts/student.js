const subjects = [
    { name: "Modern Physics", icon: "fas fa-atom",link:"modernphysics.html" },
    { name: "Discrete Maths", icon: "fas fa-square-root-alt",link:"discrete.html" },
    { name: "Linear Algebra", icon: "fas fa-calculator",link:"linear.html" },
    { name: "Object Oriented Programming", icon: "fas fa-desktop",link:"oops.html" },
    { name: "User Interface Designing", icon: "fas fa-laptop",link:"uid.html"},
    { name: "Glimpses of Glorius India", icon: "fas fa-landmark",link:"adm.html" },
    { name: "Manufacturing Practices", icon: "fas fa-tools",link:"meee.html" },
  ];
  
  const flow = new URLSearchParams(window.location.search).get("flow");
  const cardContainer = document.getElementById("card-container");
  
  subjects.forEach((subject) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <i class="${subject.icon}"></i>
      <span>${subject.name}</span>`;
    
    card.onclick = () => {
      window.location.href = subject.link;
    };
  
    cardContainer.appendChild(card);
  });
  