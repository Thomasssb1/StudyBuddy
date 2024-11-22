// @ts-nocheck
const heroColour = "#539F54";
const tertiaryColour = "#3B3A3A";
const primaryTextColour = "#C3C3C3";

function checkIfAIIsAvailable(): void {
  if (!self.ai || !self.ai.languageModel) {
    alert("AI is not available");
  }
}

function addInitialMessage(): void {
  const chatContainer = document.querySelector("#chat-container");
  let message = generateMessageContainer();
  chatContainer?.appendChild(message);
}

function generateMessageContainer(): HTMLElement {
  function createProfileView(): HTMLElement {
    let profileView = document.createElement("div");
    profileView.style.borderRadius = "100%";
    profileView.style.border = `3px solid ${heroColour}`;
    profileView.style.background = tertiaryColour;
    profileView.style.width = "50px";
    profileView.style.height = "50px";
    return profileView;
  }

  function createMessageBox(
    prompt: string,
    promptButton: boolean,
  ): HTMLElement {
    let messageBox = document.createElement("div");
    messageBox.style.background = tertiaryColour;
    messageBox.style.color = primaryTextColour;
    messageBox.style.borderRadius = "1.5rem";
    messageBox.style.padding = "10px";
    messageBox.style.width = "80%";
    messageBox.style.maxWidth = "300px";
    messageBox.style.height = "80%";
    messageBox.style.marginTop = "2%";
    messageBox.style.textAlign = "center";
    messageBox.style.verticalAlign = "middle";
    messageBox.style.lineHeight = "1rem";
    messageBox.innerHTML = prompt;

    if (promptButton) {
      const button = document.createElement("button");
      button.style.background = heroColour;
      button.style.color = primaryTextColour;
      button.style.borderRadius = "1.5rem";
      button.style.padding = "3px 5px";
      button.style.marginLeft = "4px";
      button.style.zIndex = "10";
      button.style.position = "relative";
      button.innerHTML = "Sure!";

      button.addEventListener("click", function click() {
        askQuestion("Can you explain this page to me?");
      });

      messageBox.appendChild(button);
    }

    return messageBox;
  }

  let messageCount = document.querySelectorAll(".message-container").length;

  let messageContainer = document.createElement("div");
  messageContainer.className = "message-container";
  messageContainer.style.display = "flex";
  messageContainer.style.justifyContent = "space-around";
  messageContainer.style.gridColumnStart = `${messageCount + 1}`;
  messageContainer.style.gridRowStart = `${messageCount + 1}`;

  let profileView = createProfileView();
  let messageBox = createMessageBox("Want me to explain this page?", true);
  messageContainer.appendChild(profileView);
  messageContainer.appendChild(messageBox);
  return messageContainer;
}

const askQuestion = async (prompt: string): Promise<void> => {
  const { available, defaultTemperature, defaultTopK, maxTopK } =
    await ai.languageModel.capabilities();
  if (available !== "no") {
    const session = await ai.languageModel.create();
    const response = await session.prompt(prompt);
    alert(response);
  }
};

addInitialMessage();
