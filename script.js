/* =========================================================
   LOVE ADVENTURE
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const loginScreen =
  document.getElementById("loginScreen");

const gameScreen =
  document.getElementById("gameScreen");

const nameInput =
  document.getElementById("nameInput");

const startButton =
  document.getElementById("startButton");

const playerName =
  document.getElementById("playerName");

const world =
  document.getElementById("world");

const environment =
  document.getElementById("environment");

const characters =
  document.getElementById("characters");

const boy =
  document.getElementById("boy");

const girl =
  document.getElementById("girl");

const boyBubble =
  document.getElementById("boyBubble");

const girlBubble =
  document.getElementById("girlBubble");

const boyBubbleText =
  document.getElementById("boyBubbleText");

const girlBubbleText =
  document.getElementById("girlBubbleText");

const dialogue =
  document.getElementById("dialogue");

const speaker =
  document.getElementById("speaker");

const dialogueText =
  document.getElementById("dialogueText");

const nextButton =
  document.getElementById("nextButton");

const actionButtons =
  document.getElementById("actionButtons");

const effectLayer =
  document.getElementById("effectLayer");

const shopPanel =
  document.getElementById("shopPanel");

const collectionPanel =
  document.getElementById("collectionPanel");

const shopGrid =
  document.getElementById("shopGrid");

const collectionGrid =
  document.getElementById("collectionGrid");

const buyModal =
  document.getElementById("buyModal");

const buyIcon =
  document.getElementById("buyIcon");

const buyName =
  document.getElementById("buyName");

const buyNowButton =
  document.getElementById("buyNowButton");

const cancelBuyButton =
  document.getElementById("cancelBuyButton");

const successModal =
  document.getElementById("successModal");

const successMessage =
  document.getElementById("successMessage");

const successOkButton =
  document.getElementById("successOkButton");

const useModal =
  document.getElementById("useModal");

const useIcon =
  document.getElementById("useIcon");

const useName =
  document.getElementById("useName");

const useMessage =
  document.getElementById("useMessage");

const useYesButton =
  document.getElementById("useYesButton");

const useNoButton =
  document.getElementById("useNoButton");


/* =========================================================
   GAME STATE
========================================================= */

const state = {

  name: "",

  dialogueIndex: 0,

  currentDialogue: [],

  collection: [],

  equipped: {},

  currentScene: "home",

  selectedItem: null,

  selectedCollectionItem: null,

  proposalStep: 0

};


/* =========================================================
   SHOP ITEMS
========================================================= */

const shopItems = [

  {
    id: "watch",
    name: "Smart Watch",
    icon: "⌚",
    target: "boy",
    category: "watch",
    description: "A stylish watch for the hand."
  },

  {
    id: "necklace",
    name: "Love Necklace",
    icon: "📿",
    target: "girl",
    category: "necklace",
    description: "A beautiful necklace for the girl."
  },

  {
    id: "bracelet",
    name: "Golden Bracelet",
    icon: "💎",
    target: "girl",
    category: "bracelet",
    description: "A shiny bracelet."
  },

  {
    id: "ring",
    name: "Love Ring",
    icon: "💍",
    target: "girl",
    category: "ring",
    description: "A beautiful love ring."
  },

  {
    id: "shoes",
    name: "Sneakers",
    icon: "👟",
    target: "boy",
    category: "shoes",
    description: "Cool sneakers for walking."
  },

  {
    id: "glasses",
    name: "Cool Glasses",
    icon: "🕶️",
    target: "boy",
    category: "glasses",
    description: "Cool sunglasses."
  },

  {
    id: "cap",
    name: "Cool Cap",
    icon: "🧢",
    target: "boy",
    category: "cap",
    description: "A stylish cap."
  },

  {
    id: "bag",
    name: "Cute Bag",
    icon: "👜",
    target: "girl",
    category: "bag",
    description: "A cute little bag."
  },

  {
    id: "girlWatch",
    name: "Girl Watch",
    icon: "⌚",
    target: "girl",
    category: "watch",
    description: "A beautiful watch."
  },

  {
    id: "girlShoes",
    name: "Girl Shoes",
    icon: "👟",
    target: "girl",
    category: "shoes",
    description: "Beautiful shoes."
  },

  {
    id: "boyBracelet",
    name: "Boy Bracelet",
    icon: "💎",
    target: "boy",
    category: "bracelet",
    description: "A stylish bracelet."
  }

];


/* =========================================================
   START
========================================================= */

startButton.addEventListener(
  "click",
  startGame
);

nameInput.addEventListener(
  "keydown",
  function (event) {

    if (event.key === "Enter") {
      startGame();
    }

  }
);


function startGame() {

  const name =
    nameInput.value.trim();

  if (!name) {

    nameInput.focus();

    nameInput.placeholder =
      "Please type your name...";

    return;
  }

  state.name = name;

  playerName.textContent =
    name;

  loginScreen.classList.add("hidden");

  gameScreen.classList.remove("hidden");

  resetWorld();

  startOpeningDialogue();
}


/* =========================================================
   RESET
========================================================= */

function resetWorld() {

  boy.className =
    "character boy";

  girl.className =
    "character girl";

  actionButtons.innerHTML = "";

  dialogue.classList.add("hidden");

  effectLayer.innerHTML = "";

  environment.className =
    "environment";

  world.className =
    "world";

}


/* =========================================================
   DIALOGUES
========================================================= */

const openingDialogue = [

  {
    who: "boy",
    name: "👦 Boy",
    text:
      "আজকে তোমাকে নিয়ে একটা সুন্দর দিন কাটাতে চাই।"
  },

  {
    who: "girl",
    name: "👧 Girl",
    text:
      "সত্যি? তাহলে আজকে অনেক মজা করব! 😊"
  },

  {
    who: "boy",
    name: "👦 Boy",
    text:
      "হ্যাঁ। আগে ফুলের বাগানে যাই।"
  },

  {
    who: "girl",
    name: "👧 Girl",
    text:
      "চলো! 🌸"
  },

  {
    who: "boy",
    name: "👦 Boy",
    text:
      "তারপর খাবার, game, shopping—সব হবে।"
  },

  {
    who: "girl",
    name: "👧 Girl",
    text:
      "আজকের দিনটা তাহলে অনেক মজার হবে! ❤️"
  }

];


function startOpeningDialogue() {

  state.currentDialogue =
    openingDialogue;

  state.dialogueIndex = 0;

  dialogue.classList.remove("hidden");

  showDialogue();
}


function showDialogue() {

  const item =
    state.currentDialogue[
      state.dialogueIndex
    ];

  if (!item) {

    finishDialogue();

    return;
  }

  boy.classList.remove("talking");
  girl.classList.remove("talking");

  boyBubbleText.textContent = "";
  girlBubbleText.textContent = "";

  if (item.who === "boy") {

    boy.classList.add("talking");

    boyBubbleText.textContent =
      item.text;

  } else {

    girl.classList.add("talking");

    girlBubbleText.textContent =
      item.text;
  }

  speaker.textContent =
    item.name;

  dialogueText.textContent =
    item.text;

}


/* =========================================================
   NEXT
========================================================= */

nextButton.addEventListener(
  "click",
  nextDialogue
);


function nextDialogue() {

  state.dialogueIndex++;

  if (
    state.dialogueIndex >=
    state.currentDialogue.length
  ) {

    finishDialogue();

    return;
  }

  showDialogue();
}


function finishDialogue() {

  boy.classList.remove("talking");
  girl.classList.remove("talking");

  dialogue.classList.add("hidden");

  showHomeActions();
}


/* =========================================================
   HOME ACTIONS
========================================================= */

function showHomeActions() {

  actionButtons.innerHTML = `

    <button id="gardenAction">
      🌸 FLOWER GARDEN
    </button>

    <button id="proposalAction">
      💐 PROPOSAL
    </button>

    <button id="foodAction">
      🍔 FOOD
    </button>

    <button id="gameAction">
      🎮 GAME
    </button>

    <button id="hugAction">
      🤗 HUG
    </button>

    <button id="giftAction">
      🎁 GIFT
    </button>

    <button id="shopAction">
      🛍️ SHOP
    </button>

  `;

  document
    .getElementById("gardenAction")
    .onclick =
    openGarden;

  document
    .getElementById("proposalAction")
    .onclick =
    startProposal;

  document
    .getElementById("foodAction")
    .onclick =
    openFood;

  document
    .getElementById("gameAction")
    .onclick =
    openGame;

  document
    .getElementById("hugAction")
    .onclick =
    doHug;

  document
    .getElementById("giftAction")
    .onclick =
    openGift;

  document
    .getElementById("shopAction")
    .onclick =
    openShop;

}


/* =========================================================
   FLOWER GARDEN
========================================================= */

function openGarden() {

  state.currentScene =
    "garden";

  world.classList.add(
    "garden-mode"
  );

  actionButtons.innerHTML = `

    <button id="gardenBack">
      ← BACK
    </button>

    <button id="gardenPick">
      🌸 PICK FLOWER
    </button>

  `;

  const title =
    document.createElement("div");

  title.className =
    "garden-title";

  title.textContent =
    "🌸 Beautiful Flower Garden 🌸";

  effectLayer.appendChild(title);


  const flowers = [
    "🌹",
    "🌷",
    "🌸",
    "🌺",
    "🌼",
    "🌻",
    "💐"
  ];


  flowers.forEach(
    (flower, index) => {

      const element =
        document.createElement("div");

      element.className =
        "garden-flower";

      element.textContent =
        flower;

      element.style.left =
        `${10 + index * 12}%`;

      element.style.bottom =
        `${20 + (index % 3) * 9}%`;

      element.addEventListener(
        "click",
        () => {

          element.animate(
            [
              {
                transform:
                  "scale(1)"
              },
              {
                transform:
                  "scale(1.5) rotate(15deg)"
              },
              {
                transform:
                  "scale(0)"
              }
            ],
            {
              duration: 600
            }
          );

          setTimeout(
            () => element.remove(),
            500
          );

        }
      );

      effectLayer.appendChild(
        element
      );

    }
  );


  document
    .getElementById("gardenBack")
    .onclick =
    leaveGarden;

  document
    .getElementById("gardenPick")
    .onclick =
    pickGardenFlower;

}


function pickGardenFlower() {

  dialogue.classList.remove(
    "hidden"
  );

  state.currentDialogue = [

    {
      who: "boy",
      name: "👦 Boy",
      text:
        "এই ফুলটা তোমার জন্য। 🌹"
    },

    {
      who: "girl",
      name: "👧 Girl",
      text:
        "ওয়াও! ফুলটা অনেক সুন্দর। 🌸"
    }

  ];

  state.dialogueIndex = 0;

  showDialogue();


  nextButton.onclick =
    function () {

      if (
        state.dialogueIndex ===
        0
      ) {

        state.dialogueIndex = 1;

        showDialogue();

        return;
      }

      dialogue.classList.add(
        "hidden"
      );

      showHomeActions();

    };

}


function leaveGarden() {

  world.classList.remove(
    "garden-mode"
  );

  effectLayer.innerHTML = "";

  showHomeActions();

}


/* =========================================================
   PROPOSAL
========================================================= */

function startProposal() {

  actionButtons.innerHTML = "";

  state.proposalStep = 0;

  proposalStepOne();

}


function proposalStepOne() {

  characters.classList.add(
    "proposing"
  );

  showOneActionDialogue(
    "boy",
    "👦 Boy",
    "একটু দাঁড়াও... তোমার জন্য একটা surprise আছে।",
    proposalStepTwo
  );

}


function proposalStepTwo() {

  showOneActionDialogue(
    "boy",
    "👦 Boy",
    "🌹 এই ফুলটা তোমার জন্য।",
    proposalStepThree
  );

}


function proposalStepThree() {

  showOneActionDialogue(
    "boy",
    "👦 Boy",
    "আমি চাই তুমি এই ফুলটা নিজের হাতে নাও। ❤️",
    proposalStepFour
  );

}


function proposalStepFour() {

  showOneActionDialogue(
    "girl",
    "👧 Girl",
    "আচ্ছা... 🌸",
    proposalStepFive
  );

}


function proposalStepFive() {

  girl.classList.add(
    "shy"
  );

  girl.classList.add(
    "has-flower"
  );

  showOneActionDialogue(
    "girl",
    "👧 Girl",
    "🌸 ফুলটা আমি নিলাম। ধন্যবাদ।",
    finishProposal
  );

}


function finishProposal() {

  characters.classList.remove(
    "proposing"
  );

  girl.classList.remove(
    "shy"
  );

  showOneActionDialogue(
    "❤️",
    "❤️",
    "Proposal scene complete! 💗",
    showHomeActions
  );

}


/* =========================================================
   ACTION DIALOGUE
========================================================= */

function showOneActionDialogue(
  who,
  name,
  text,
  nextFunction
) {

  dialogue.classList.remove(
    "hidden"
  );

  boy.classList.remove(
    "talking"
  );

  girl.classList.remove(
    "talking"
  );

  if (who === "boy") {

    boy.classList.add(
      "talking"
    );

    boyBubbleText.textContent =
      text;

  }

  if (who === "girl") {

    girl.classList.add(
      "talking"
    );

    girlBubbleText.textContent =
      text;

  }

  speaker.textContent =
    name;

  dialogueText.textContent =
    text;


  nextButton.onclick =
    function () {

      boy.classList.remove(
        "talking"
      );

      girl.classList.remove(
        "talking"
      );

      if (
        typeof nextFunction ===
        "function"
      ) {

        nextFunction();

      }

    };

}


/* =========================================================
   FOOD
========================================================= */

const foods = [

  ["🍔", "Burger"],
  ["🍕", "Pizza"],
  ["🍟", "Fries"],
  ["🌭", "Hot Dog"],
  ["🌮", "Taco"],
  ["🍝", "Pasta"],
  ["🍜", "Ramen"],
  ["🍗", "Chicken"],
  ["🍿", "Popcorn"],
  ["🍰", "Cake"],
  ["🍩", "Donut"],
  ["🧁", "Cupcake"],
  ["🍦", "Ice Cream"],
  ["🍫", "Chocolate"],
  ["🍓", "Strawberry"],
  ["🍉", "Watermelon"],
  ["🍎", "Apple"],
  ["🥪", "Sandwich"],
  ["🥞", "Pancake"],
  ["🥤", "Cold Drink"]

];


function openFood() {

  actionButtons.innerHTML = "";

  foods.forEach(
    ([icon, name]) => {

      const button =
        document.createElement(
          "button"
        );

      button.textContent =
        `${icon} ${name}`;

      button.onclick =
        () => eatFood(
          icon,
          name
        );

      actionButtons.appendChild(
        button
      );

    }
  );

  const back =
    document.createElement(
      "button"
    );

  back.textContent =
    "← BACK";

  back.onclick =
    showHomeActions;

  actionButtons.appendChild(
    back
  );

}


function eatFood(
  icon,
  name
) {

  const food =
    document.createElement(
      "div"
    );

  food.className =
    "floating-food";

  food.textContent =
    icon;

  effectLayer.appendChild(
    food
  );


  setTimeout(
    () => {

      food.remove();

      showOneActionDialogue(
        "boy",
        "👦 Boy",
        `😋 ${name} খেয়ে অনেক ভালো লাগছে!`,
        showHomeActions
      );

    },
    1800
  );

}


/* =========================================================
   GAME
========================================================= */

function openGame() {

  actionButtons.innerHTML = `

    <button id="ballGame">
      ⚽ BALL GAME
    </button>

    <button id="catchGame">
      🎯 TARGET GAME
    </button>

    <button id="raceGame">
      🏃 RACE
    </button>

    <button id="backGame">
      ← BACK
    </button>

  `;

  document
    .getElementById("ballGame")
    .onclick =
    playBallGame;

  document
    .getElementById("catchGame")
    .onclick =
    playTargetGame;

  document
    .getElementById("raceGame")
    .onclick =
    playRace;

  document
    .getElementById("backGame")
    .onclick =
    showHomeActions;

}


function playBallGame() {

  const ball =
    document.createElement(
      "div"
    );

  ball.className =
    "game-ball";

  ball.textContent =
    "⚽";

  effectLayer.appendChild(
    ball
  );

  setTimeout(
    () => {

      ball.remove();

      showOneActionDialogue(
        "boy",
        "👦 Boy",
        "⚽ Goal! আমরা জিতে গেছি!",
        showHomeActions
      );

    },
    2600
  );

}


function playTargetGame() {

  showOneActionDialogue(
    "girl",
    "👧 Girl",
    "🎯 হ্যাঁ! Target-এ hit করেছি!",
    showHomeActions
  );

}


function playRace() {

  showOneActionDialogue(
    "boy",
    "👦 Boy",
    "🏃 Ready... Set... GO! দৌড়টা মজার ছিল!",
    showHomeActions
  );

}


/* =========================================================
   HUG
========================================================= */

function doHug() {

  characters.classList.add(
    "hugging"
  );

  const heart =
    document.createElement(
      "div"
    );

  heart.className =
    "hug-heart";

  heart.textContent =
    "❤️";

  effectLayer.appendChild(
    heart
  );


  setTimeout(
    () => {

      heart.remove();

      characters.classList.remove(
        "hugging"
      );

      showOneActionDialogue(
        "❤️",
        "🤗",
        "A warm hug! 🤗❤️",
        showHomeActions
      );

    },
    1800
  );

}


/* =========================================================
   GIFT
========================================================= */

function openGift() {

  actionButtons.innerHTML = "";

  const gift =
    document.createElement(
      "div"
    );

  gift.className =
    "gift-box";

  gift.textContent =
    "🎁";

  effectLayer.appendChild(
    gift
  );


  setTimeout(
    () => {

      gift.remove();

      openBalloons();

    },
    1500
  );

}


function openBalloons() {

  const balloons =
    document.createElement(
      "div"
    );

  balloons.className =
    "balloon-effect";

  balloons.textContent =
    "🎈 🎈 🎈 🎈 🎈";

  effectLayer.appendChild(
    balloons
  );


  setTimeout(
    () => {

      balloons.remove();

      openLovePlanet();

    },
    2200
  );

}


function openLovePlanet() {

  const planet =
    document.createElement(
      "div"
    );

  planet.className =
    "love-planet";

  planet.textContent =
    "🌎";

  effectLayer.appendChild(
    planet
  );


  setTimeout(
    () => {

      planet.remove();

      showOneActionDialogue(
        "❤️",
        "🌎 Love Planet",
        "Welcome to the Love Planet! 🌎❤️",
        showHomeActions
      );

    },
    3000
  );

}


/* =========================================================
   SHOP
========================================================= */

document
  .getElementById("shopButton")
  .onclick =
  openShop;


function openShop() {

  shopPanel.classList.remove(
    "hidden"
  );

  renderShop();

}


function renderShop() {

  shopGrid.innerHTML = "";


  shopItems.forEach(
    item => {

      const card =
        document.createElement(
          "div"
        );

      card.className =
        "item-card";

      card.innerHTML = `

        <div class="item-icon">
          ${item.icon}
        </div>

        <h3>
          ${item.name}
        </h3>

        <p>
          ${item.description}
        </p>

        <button>
          BUY
        </button>

      `;


      card
        .querySelector("button")
        .onclick =
        () => openBuy(item);


      shopGrid.appendChild(
        card
      );

    }
  );

}


/* =========================================================
   BUY
========================================================= */

function openBuy(item) {

  state.selectedItem =
    item;

  buyIcon.textContent =
    item.icon;

  buyName.textContent =
    item.name;

  buyModal.classList.remove(
    "hidden"
  );

}


cancelBuyButton.onclick =
  () => {

    buyModal.classList.add(
      "hidden"
    );

  };


buyNowButton.onclick =
  () => {

    const item =
      state.selectedItem;

    if (!item) {
      return;
    }


    const purchased = {

      ...item,

      uniqueId:
        `${Date.now()}-${Math.random()}`,

      used: false

    };


    /*
      Unlimited money.
      কোনো balance কমানো হচ্ছে না।
    */

    state.collection.push(
      purchased
    );


    buyModal.classList.add(
      "hidden"
    );


    successMessage.textContent =
      `${item.name} successfully added to your Collection!`;


    successModal.classList.remove(
      "hidden"
    );


    renderCollection();

  };


successOkButton.onclick =
  () => {

    successModal.classList.add(
      "hidden"
    );

  };


/* =========================================================
   COLLECTION
========================================================= */

document
  .getElementById("collectionButton")
  .onclick =
  openCollection;


function openCollection() {

  collectionPanel.classList.remove(
    "hidden"
  );

  renderCollection();

}


function renderCollection() {

  collectionGrid.innerHTML = "";


  if (
    state.collection.length === 0
  ) {

    collectionGrid.innerHTML = `

      <div
        style="
          grid-column: 1 / -1;
          text-align: center;
          padding: 60px 20px;
          color: #aaa;
        "
      >

        <div style="font-size:60px;">
          🎒
        </div>

        <h3>
          Collection is empty
        </h3>

        <p>
          Go to Shopping Mall and buy something.
        </p>

      </div>

    `;

    return;
  }


  state.collection.forEach(
    item => {

      const card =
        document.createElement(
          "div"
        );

      card.className =
        "item-card";


      const used =
        state.equipped[
          item.uniqueId
        ] === true;


      card.innerHTML = `

        <div class="item-icon">
          ${item.icon}
        </div>

        <h3>
          ${item.name}
        </h3>

        <p>
          ${
            used
              ? "Currently Used ✅"
              : "Available in Collection"
          }
        </p>

        <button>
          ${
            used
              ? "REMOVE"
              : "USE"
          }
        </button>

      `;


      card
        .querySelector("button")
        .onclick =
        () => {

          if (used) {

            askRemove(item);

          } else {

            askUse(item);

          }

        };


      collectionGrid.appendChild(
        card
      );

    }
  );

}


/* =========================================================
   USE
========================================================= */

function askUse(item) {

  state.selectedCollectionItem =
    item;

  useIcon.textContent =
    item.icon;

  useName.textContent =
    item.name;

  useMessage.textContent =
    `${item.name} character-এর গায়ে ব্যবহার করতে চান?`;

  useModal.classList.remove(
    "hidden"
  );

}


useNoButton.onclick =
  () => {

    useModal.classList.add(
      "hidden"
    );

  };


useYesButton.onclick =
  () => {

    const item =
      state.selectedCollectionItem;

    if (!item) {
      return;
    }


    useItem(item);

    useModal.classList.add(
      "hidden"
    );

    renderCollection();

  };


/* =========================================================
   WEAR ITEM
========================================================= */

function useItem(item) {

  /*
    Same category-এর আগের item remove.
  */

  removeCategory(
    item.category,
    item.target
  );


  state.equipped[
    item.uniqueId
  ] = true;


  const target =
    item.target === "boy"
      ? boy
      : girl;


  target.classList.add(
    `wearing-${item.category}`
  );

}


/* =========================================================
   REMOVE CATEGORY
========================================================= */

function removeCategory(
  category,
  targetType
) {

  Object.keys(
    state.equipped
  ).forEach(
    uniqueId => {

      const item =
        state.collection.find(
          x =>
            x.uniqueId ===
            uniqueId
        );


      if (
        item &&
        item.category === category &&
        item.target === targetType
      ) {

        delete state.equipped[
          uniqueId
        ];

      }

    }
  );


  const target =
    targetType === "boy"
      ? boy
      : girl;


  target.classList.remove(
    `wearing-${category}`
  );

}


/* =========================================================
   REMOVE / TAKE OFF
========================================================= */

function askRemove(item) {

  state.selectedCollectionItem =
    item;

  useIcon.textContent =
    item.icon;

  useName.textContent =
    item.name;

  useMessage.textContent =
    `${item.name} খুলে Collection-এ রাখতে চান?`;

  useModal.classList.remove(
    "hidden"
  );

}


useYesButton.addEventListener(
  "click",
  function () {

    const item =
      state.selectedCollectionItem;

    if (!item) {
      return;
    }


    /*
      যদি item already equipped হয়,
      তাহলে YES মানে remove.
    */

    if (
      state.equipped[
        item.uniqueId
      ]
    ) {

      delete state.equipped[
        item.uniqueId
      ];


      const target =
        item.target === "boy"
          ? boy
          : girl;


      target.classList.remove(
        `wearing-${item.category}`
      );


      useModal.classList.add(
        "hidden"
      );


      renderCollection();

      return;
    }

    /*
      Otherwise use.
    */

    useItem(item);

    useModal.classList.add(
      "hidden"
    );

    renderCollection();

  }
);


/* =========================================================
   HOME BUTTON
========================================================= */

document
  .getElementById("homeButton")
  .onclick =
  function () {

    shopPanel.classList.add(
      "hidden"
    );

    collectionPanel.classList.add(
      "hidden"
    );

    leaveGarden();

    showHomeActions();

  };


/* =========================================================
   BOTTOM FOOD
========================================================= */

document
  .getElementById("foodButton")
  .onclick =
  openFood;


/* =========================================================
   BOTTOM GAME
========================================================= */

document
  .getElementById("gameButton")
  .onclick =
  openGame;


/* =========================================================
   BOTTOM HUG
========================================================= */

document
  .getElementById("hugButton")
  .onclick =
  doHug;


/* =========================================================
   CLOSE PANELS
========================================================= */

document
  .querySelectorAll(
    "[data-close]"
  )
  .forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          const id =
            button.dataset.close;

          document
            .getElementById(id)
            .classList.add(
              "hidden"
            );

        }
      );

    }
  );


/* =========================================================
   INITIAL
========================================================= */

shopPanel.classList.add(
  "hidden"
);

collectionPanel.classList.add(
  "hidden"
);

buyModal.classList.add(
  "hidden"
);

successModal.classList.add(
  "hidden"
);

useModal.classList.add(
  "hidden"
);