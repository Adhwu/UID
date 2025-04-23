function showContent(sectionId) {
  const sections = document.querySelectorAll(".content");
  sections.forEach((section) => {
    section.style.display = "none";
  });
  document.getElementById(sectionId).style.display = "block";

  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });
  document
    .querySelector(`nav a[onclick="showContent('${sectionId}')"]`)
    .classList.add("active");
}

function getQueryParams() {
  const params = {};
  const queryString = window.location.search.substring(1);
  const pairs = queryString.split("&");
  pairs.forEach((pair) => {
    const [key, value] = pair.split("=");
    params[key] = decodeURIComponent(value);
  });
  return params;
}

const params = getQueryParams();
const subject = params.subject;
const topic = params.topic;
const flow = params.flow;

const topicDetails = {
  "Ohm s law and resistance": {
    theory:
      "Ohm's law states that the current through a conductor between two points is directly proportional to the voltage across the two points.",
    procedure: "Details about the procedure for Ohm's law and resistance.",
    animation: "Details about the animation for Ohm's law and resistance.",
    simulator: "Details about the simulator for Ohm's law and resistance.",
    video: "Details about the video for Ohm's law and resistance.",
    selfEvaluation:
      "Details about self evaluation for Ohm's law and resistance.",
    resources: "Details about resources for Ohm's law and resistance.",
    feedback: "Details about feedback for Ohm's law and resistance.",
  },
  "Zener Diode": {
    theory:
      "A Zener diode is a type of diode that allows current to flow in the forward direction like a normal diode, but also in the reverse direction if the voltage is larger than the breakdown voltage known as 'Zener knee voltage'.",
    procedure: "Materials required : Battery, Rheostat, Small resistance (200 Ω), Milliammeter, Voltmeter, Key, Zener diode",
    animation: "Details about the animation for Zener Diode.",
    simulator: "Details about the simulator for Zener Diode.",
    video: "Details about the video for Zener Diode.",
    selfEvaluation: "Details about self evaluation for Zener Diode.",
    resources: "Details about resources for Zener Diode.",
    feedback: "Details about feedback for Zener Diode.",
  },
  "Conversion of Galvanometer to Ammeter": {
    theory:
      "Conversion of Galvanometer to Ammeter is done by connecting a low resistance in parallel with the galvanometer.",
    procedure:
      "Details about the procedure for Conversion of Galvanometer to Ammeter.",
    animation:
      "Details about the animation for Conversion of Galvanometer to Ammeter.",
    simulator:
      "Details about the simulator for Conversion of Galvanometer to Ammeter.",
    video: "Details about the video for Conversion of Galvanometer to Ammeter.",
    selfEvaluation:
      "Details about self evaluation for Conversion of Galvanometer to Ammeter.",
    resources:
      "Details about resources for Conversion of Galvanometer to Ammeter.",
    feedback:
      "Details about feedback for Conversion of Galvanometer to Ammeter.",
  },
  // Add more topics as needed
};

const navLinks = document.getElementById("nav-links");
if (flow === "tutorial") {
  navLinks.innerHTML = `
                <a href="#" class="active" onclick="showContent('procedure')">Procedure</a>
                <a href="#" onclick="showContent('animation')">Animation</a>
                <a href="#" onclick="showContent('simulator')">Simulator</a>
                <a href="#" onclick="showContent('video')">Video</a>
                <a href="#" onclick="showContent('self-evaluation')">Self Evaluation</a>
                <a href="#" onclick="showContent('resources')">Resources</a>
                <a href="#" onclick="showContent('feedback')">Feedback</a>
            `;
} else if (flow === "reference") {
  navLinks.innerHTML = `
                <a href="#" class="active" onclick="showContent('theory')">Theory</a>
            `;
  document.getElementById("theory").style.display = "block";
}

if (topic && topicDetails[topic]) {
  document.getElementById("topic-title").textContent = topic;
  if (flow === "reference") {
    document.getElementById("theory-content").textContent =
      topicDetails[topic].theory;
  } else {
    document.getElementById("procedure-content").textContent =
      topicDetails[topic].procedure;
    document.getElementById("animation-content").textContent =
      topicDetails[topic].animation;
    document.getElementById("simulator-content").textContent =
      topicDetails[topic].simulator;
    document.getElementById("video-content").textContent =
      topicDetails[topic].video;
    document.getElementById("self-evaluation-content").textContent =
      topicDetails[topic].selfEvaluation;
    document.getElementById("resources-content").textContent =
      topicDetails[topic].resources;
    document.getElementById("feedback-content").textContent =
      topicDetails[topic].feedback;
  }
} else {
  document.getElementById("topic-title").textContent = "Topic not found";
  if (flow === "reference") {
    document.getElementById("theory-content").textContent =
      "No details found for this topic";
  } else {
    document.getElementById("procedure-content").textContent =
      "No details found for this topic";
  }
}

function toggleChatBot() {
  const chatBot = document.getElementById("chat-bot");
  chatBot.style.display = chatBot.style.display === "none" ? "flex" : "none";
}

function sendMessage() {
  const input = document.getElementById("chat-bot-input");
  const message = input.value.trim().toLowerCase();
  if (message) {
    const messagesContainer = document.getElementById("chat-bot-messages");
    const userMessageElement = document.createElement("div");
    userMessageElement.textContent = `You: ${message}`;
    messagesContainer.appendChild(userMessageElement);
    input.value = "";
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    const botResponse =
      responses[message] || "I'm sorry, I don't understand that.";
    const botMessageElement = document.createElement("div");
    botMessageElement.textContent = `Bot: ${botResponse}`;
    messagesContainer.appendChild(botMessageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
}
const responses = {
  hello: "Hi there! How can I help you?",
  "how are you": "I'm just a bot, but I'm doing great! How about you?",
  "what is your name": "I'm your friendly chat bot!",
  bye: "Goodbye! Have a great day!",
  hi: "Hello! How can I assist you today?",
  help: "I can provide information about the topics. Just type the topic name.",
  thanks: "You're welcome!",
  "": "Please type a message to get a response.",
  physics:
    "Physics is the natural science that studies matter, its motion and behavior through space and time, and the related entities of energy and force.",
  maths:
    "Mathematics includes the study of such topics as quantity, structure, space, and change.",
};
document.getElementById("chat-bot").style.display = "none";
