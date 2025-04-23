// Function to get query parameters from the URL
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

// Retrieve the subject and flow from the URL parameters
const params = getQueryParams();
const subject = params.subject;
const flow = params.flow;

// Arrays for subjects
const subjects = {
  "Modern Physics": [
    { topic: "Attendance Percentage", icon: "fas fa-percentage" },
  ],
  "Discrete Maths": [
    { topic: "Attendance Percentage", icon: "fas fa-percentage" },
  ],
  "Linear Algebra": [
    { topic: "Attendance Percentage", icon: "fas fa-percentage" },
  ],
  "Object Oriented Programming": [
    { topic: "Attendance Percentage", icon: "fas fa-percentage" },
  ],
  "User Interface Design": [
    { topic: "Attendance Percentage", icon: "fas fa-percentage" },
  ],
  "Glimpses of Glorius India": [
    { topic: "Attendance Percentage", icon: "fas fa-percentage" },
  ],
  "Manufacturing Practices":[
    { topic: "Attendance Percentage", icon: "fas fa-percentage" },
  ]
};

// Function to save visited topics to local storage and navigate to topic details
  // Navigate to topic details after saving
  window.location.href = `/topicDetails.html?subject=${encodeURIComponent(
    subject
  )}&topic=${encodeURIComponent(topic)}&flow=${encodeURIComponent(flow)}`;


// Display the subject as a heading and list the topics
const subjectHeading = document.getElementById("subject-heading");
const topicsList = document.getElementById("topics-list");

if (subject && subjects[subject]) {
  subjectHeading.textContent = subject;
  subjects[subject].forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<a href="javascript:void(0);" onclick="saveVisitedTopic('${subject}','${item.topic}')">
            <i class="${item.icon}"></i>
            <p>${item.topic}</p>
        </a>`;
    topicsList.appendChild(card);

    // Lock subsequent topics based on local storage
    const visitedTopics = JSON.parse(
      localStorage.getItem(`${subject}-visited-topics`) || "[]"
    );
    if (
      index > 0 &&
      !visitedTopics.includes(subjects[subject][index - 1].topic)
    ) {
      card.classList.add("locked");
    }
  });
} else {
  subjectHeading.textContent = "Subject not found";
  topicsList.innerHTML = "<p>No topics found for this subject</p>";
}

// Predefined responses for the chat bot
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

// Chat bot functionality
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

    // Get the bot's response
    const botResponse =
      responses[message] || "I'm sorry, I don't understand that.";
    const botMessageElement = document.createElement("div");
    botMessageElement.textContent = `Bot: ${botResponse}`;
    messagesContainer.appendChild(botMessageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
}

// Initialize chat bot display state
document.getElementById("chat-bot").style.display = "none";
