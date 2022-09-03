//selects
const teamSelectElement = document.getElementById("team");
const positionSelectElement = document.getElementById("position");

const userNameInput = document.getElementById("fname");
const userLastNameInput = document.getElementById("lname");
const userEmailInput = document.getElementById("email");
const userTelInput = document.getElementById("tel");

//icons
const userNameMark = document.getElementById("firstname-mark");
const userLastNameMark = document.getElementById("lastname-mark");
const userEmailMark = document.getElementById("email-mark");
const userTelMark = document.getElementById("tel-mark");

//rules
const userNameRule = /^[ა-ჰ]{2,}$/;
const userLastNameRule = /^[ა-ჰ]{2,}$/;
const userTelRule = /^[+]995[0-9]{9}$/;

//next button
const nextBtn = document.querySelector(".next-btn");
let user = {};
///////////////////////////////REFRESH////////////////////////////////////
if (localStorage.getItem("userName")) {
  userNameInput.value = localStorage.getItem("userName");
} else {
  userNameInput.value = "";
}
if (localStorage.getItem("userLastName")) {
  userLastNameInput.value = localStorage.getItem("userLastName");
} else {
  userLastNameInput.value = "";
}
if (localStorage.getItem("clickedTeamElement")) {
  teamSelectElement.value = localStorage.getItem("clickedTeamElement");
} else {
  teamSelectElement.value = "თიმი";
}
if (localStorage.getItem("clickedPositionElement")) {
  positionSelectElement.value = localStorage.getItem("clickedPositionElement");
} else {
  positionSelectElement.value = "პოზიცია";
}
if (localStorage.getItem("userEmail")) {
  userEmailInput.value = localStorage.getItem("userEmail");
} else {
  userEmailInput.value = "";
}
if (localStorage.getItem("userTel")) {
  userTelInput.value = localStorage.getItem("userTel");
} else {
  userTelInput.value = "";
}

/////////////////////////////////////////////////EMPTY FIELD ERROR////////////////////////////////////
const emptyFieldError = function (el) {
  if (el.value === "" || el.value === "თიმი" || el.value === "პოზიცია") {
    el.style.border = "0.2rem solid #E52F2F ";
  }
};

//input fields array

const teamArr = []; //teams info array
const posArr = []; //positions info array

//fetching information from teams API and creating elements
const teamSort = async function () {
  let teamsResponse = await fetch(
    "https://pcfy.redberryinternship.ge/api/teams"
  );
  let teamsData = await teamsResponse.json();
  teamsData.data.forEach((item) => {
    teamArr.push(item);
    const teamOptEl = document.createElement("option");
    teamOptEl.value = item.name;
    teamOptEl.textContent = item.name;
    teamSelectElement.append(teamOptEl);
  });
  if (localStorage.getItem("clickedTeamElement")) {
    teamSelectElement.value = localStorage.getItem("clickedTeamElement");
  }
};
teamSort();

let filteredPosArr = []; //filtered positions array
//fetching information from positions API and creating elements
const positionSort = async function () {
  let positionResponse = await fetch(
    "https://pcfy.redberryinternship.ge/api/positions"
  );
  let positionsData = await positionResponse.json();
  positionsData.data.forEach((item) => {
    const positionOptEl = document.createElement("option");
    positionOptEl.value = item.name;
    positionOptEl.textContent = item.name;
    positionSelectElement.append(positionOptEl);
    posArr.push(item);
  });
  if (localStorage.getItem("clickedPositionElement")) {
    positionSelectElement.value = localStorage.getItem(
      "clickedPositionElement"
    );
  }

  if (localStorage.getItem("filteredPosNamesArr")) {
    document.getElementById("position").innerHTML = "";

    let posNames = JSON.parse(localStorage.getItem("filteredPosNamesArr"));

    for (let i = 0; i < posNames.length; i++) {
      const positionOptEl = document.createElement("option");
      positionOptEl.value = posNames[i];
      positionOptEl.textContent = posNames[i];
      positionSelectElement.append(positionOptEl);
    }
    positionSelectElement.value = localStorage.getItem(
      "clickedPositionElement"
    );
  }
};
positionSort();

////////////////////// USERNAME///////////////////////////////////////////////
let userNameRuleTxt = document.querySelector(".first-name-rule");
let fnameText = document.getElementById("fname-txt");
userNameInput.addEventListener("blur", function () {
  if (userNameInput.value.match(userNameRule)) {
    userNameMark.style.display = "flex";
    userNameInput.style.border = "0.2rem solid rgba(138, 192, 226, 1)";
    userNameRuleTxt.textContent = "მინიმუმ 2 სიმბოლო, ქართული ასოები";
    userNameRuleTxt.style.color = "rgba(0, 0, 0, 0.6)";
    fnameText.style.color = "#000000";
    user = {
      ...user,
      name: userNameInput.value,
    };
    //save userName for refresh
    localStorage.setItem("userName", userNameInput.value);
  } else {
    userNameMark.style.display = "none";
  }
  if (userNameInput.value === "") {
    userNameInput.style.border = "0.2rem solid #E52F2F";

    userNameRuleTxt.textContent = "შეავსე გამოტოვებული ველი";
    userNameRuleTxt.style.color = "#E52F2F";
    fnameText.style.color = "#E52F2F";
  }
  if (!userNameInput.value.match(userNameRule) && userNameInput.value !== "") {
    userNameInput.style.border = "0.2rem solid #E52F2F";
    userNameRuleTxt.textContent = "გამოიყენე მხოლოდ ქართული ასოები";
    userNameRuleTxt.style.color = "#E52F2F";
    fnameText.style.color = "#E52F2F";
    localStorage.setItem("userName", userNameInput.value);
  }
});
/////////////////////////USERLASTNAME/////////////////////////////////////////
let userLastNameRuleTxt = document.querySelector(".last-name-rule");
let lnameText = document.getElementById("lname-text");
userLastNameInput.addEventListener("blur", function () {
  if (userLastNameInput.value.match(userLastNameRule)) {
    userLastNameMark.style.display = "flex";
    userLastNameInput.style.border = "0.2rem solid rgba(138, 192, 226, 1)";
    userLastNameRuleTxt.textContent = "მინიმუმ 2 სიმბოლო, ქართული ასოები";
    userLastNameRuleTxt.style.color = "rgba(0, 0, 0, 0.6)";
    lnameText.style.color = "#000000";
    user = {
      ...user,
      surname: userLastNameInput.value,
    };
    localStorage.setItem("userLastName", userLastNameInput.value);
  } else {
    userLastNameMark.style.display = "none";
  }
  if (userLastNameInput.value === "") {
    userLastNameInput.style.border = "0.2rem solid #E52F2F";
    userLastNameRuleTxt.textContent = "შეავსე გამოტოვებული ველი";
    userLastNameRuleTxt.style.color = "#E52F2F";
    lnameText.style.color = "#E52F2F";
  }
  if (
    !userLastNameInput.value.match(userNameRule) &&
    userLastNameInput.value !== ""
  ) {
    userLastNameInput.style.border = "0.2rem solid #E52F2F";
    userLastNameRuleTxt.textContent = "გამოიყენე მხოლოდ ქართული ასოები";
    userLastNameRuleTxt.style.color = "#E52F2F";
    lnameText.style.color = "#E52F2F";
    localStorage.setItem("userLastName", userLastNameInput.value);
  }
});
//////////////////////////////USEREMAIL////////////////////////////////////
let emailText = document.getElementById("mail-text");
let userEmailRuleText = document.querySelector(".email-rule");
userEmailInput.addEventListener("blur", function () {
  if (userEmailInput.value.endsWith("@redberry.ge")) {
    userEmailMark.style.display = "flex";
    userEmailInput.style.border = "0.2rem solid rgba(138, 192, 226, 1)";
    userEmailRuleText.textContent = "უნდა მთავრდებოდეს redberry.ge-ით";
    userEmailRuleText.style.color = "rgba(0, 0, 0, 0.6)";
    emailText.style.color = "#000000";
    user = {
      ...user,
      email: userEmailInput.value,
    };
    localStorage.setItem("userEmail", userEmailInput.value);
  } else {
    userEmailMark.style.display = "none";
  }
  if (userEmailInput.value === "") {
    userEmailInput.style.border = "0.2rem solid #E52F2F";
    userEmailRuleText.textContent = "შეავსე გამოტოვებული ველი";
    userEmailRuleText.style.color = "#E52F2F";
    emailText.style.color = "#E52F2F";
  }
  if (
    !userEmailInput.value.endsWith("@redberry.ge") &&
    userEmailInput.value !== ""
  ) {
    userEmailInput.style.border = "0.2rem solid #E52F2F";
    userEmailRuleText.textContent = "უნდა მთავრდებოდეს redberry.ge-ით";
    userEmailRuleText.style.color = "#E52F2F";
    emailText.style.color = "#E52F2F";
    localStorage.setItem("userEmail", userEmailInput.value);
  }
});
///////////////////////////////USERTEL/////////////////////////////////////
let telText = document.getElementById("tel-text");
let userTelRuleText = document.querySelector(".tel-rule");
userTelInput.addEventListener("blur", function () {
  if (userTelInput.value.match(userTelRule)) {
    userTelMark.style.display = "flex";
    userTelInput.style.border = "0.2rem solid rgba(138, 192, 226, 1)";
    userTelRuleText.textContent =
      "უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს";
    userTelRuleText.style.color = "rgba(0, 0, 0, 0.6)";
    telText.style.color = "#000000";
    user = {
      ...user,
      phone_number: userTelInput.value,
    };
    localStorage.setItem("userTel", userTelInput.value);
  } else {
    userTelMark.style.display = "none";
  }
  if (userTelInput.value === "") {
    userTelInput.style.border = "0.2rem solid #E52F2F ";
    userTelRuleText.textContent = "შეავსე გამოტოვებული ველი";
    userTelRuleText.style.color = "#E52F2F";
    telText.style.color = "#E52F2F";
  }
  if (!userTelInput.value.match(userTelRule) && userTelInput.value !== "") {
    userTelInput.style.border = "0.2rem solid #E52F2F ";
    userTelRuleText.textContent =
      "მხოლოდ ციფრები, უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს";
    userTelRuleText.style.color = "#E52F2F";
    telText.style.color = "#E52F2F";
    localStorage.setItem("userTel", userTelInput.value);
  }
});
////////////////////////TEAM////////////////////////////////////////
let filteredPosNamesArr = [];
if (localStorage.getItem("filteredPosNamesArr")) {
  filteredPosNamesArr = JSON.parse(localStorage.getItem("filteredPosNamesArr"));
}

teamSelectElement.addEventListener("change", async function () {
  //filtering positions by teams id
  filteredPosArr = [];
  if (teamSelectElement.value !== "თიმი") {
    const currentEl = teamArr.find((el) => el.name === teamSelectElement.value);
    for (let i = 0; i < posArr.length; i++) {
      if (currentEl.id === posArr[i].team_id) {
        filteredPosArr.push(posArr[i]);
        filteredPosNamesArr.push(posArr[i].name);
      }
    }

    let defaultOptEl = document.createElement("option");
    document.getElementById("position").innerHTML = "";
    defaultOptEl.classList.add = "position-option-header";
    defaultOptEl.setAttribute("hidden", "");
    defaultOptEl.selected = "true";
    defaultOptEl.textContent = "პოზიცია";
    positionSelectElement.append(defaultOptEl);
    filteredPosArr.forEach((item) => {
      const positionOptEl = document.createElement("option");
      positionOptEl.value = item.name;
      positionOptEl.textContent = item.name;
      positionSelectElement.append(positionOptEl);
    });
    user = {
      ...user,
      team_id: currentEl.id,
    };
    localStorage.setItem("clickedTeamElement", currentEl.name);
  }
});

teamSelectElement.addEventListener("blur", function () {
  if (teamSelectElement.value === "თიმი") {
    teamSelectElement.style.border = `0.2rem solid #E52F2F `;
  } else {
    teamSelectElement.style.border = `none `;
  }
});

/////////////////////////POSITION/////////////////////////////////////
positionSelectElement.addEventListener("change", function () {
  if (positionSelectElement.value !== "პოზიცია") {
    const currentEl = posArr.find(
      (el) => el.name === positionSelectElement.value
    );
    user = {
      ...user,
      position_id: currentEl.id,
    };
    localStorage.setItem("clickedPositionElement", currentEl.name);
  }
});
positionSelectElement.addEventListener("blur", function () {
  if (positionSelectElement.value === "პოზიცია") {
    positionSelectElement.style.border = `0.2rem solid #E52F2F `;
  } else {
    positionSelectElement.style.border = `none `;
  }
});

/////////////////Prevent next button event if any of the input field is empty///////////////////
nextBtn.addEventListener("click", function (e) {
  localStorage.setItem("user", JSON.stringify(user));
  if (
    userNameInput.value === "" ||
    userLastNameInput.value === "" ||
    userEmailInput.value === "" ||
    userTelInput.value === "" ||
    teamSelectElement.value === "თიმი" ||
    positionSelectElement.value === "პოზიცია"
  ) {
    e.preventDefault();
    emptyFieldError(userNameInput);
    emptyFieldError(userLastNameInput);
    emptyFieldError(userEmailInput);
    emptyFieldError(userTelInput);
    emptyFieldError(teamSelectElement);
    emptyFieldError(positionSelectElement);
  }
  if (
    userNameMark.style.display === "" ||
    userLastNameMark.style.display === "" ||
    userEmailMark.style.display === "" ||
    userTelMark.style.display === ""
  ) {
    e.preventDefault();
  }

  localStorage.setItem(
    "filteredPosNamesArr",
    JSON.stringify(filteredPosNamesArr)
  );
  let currentTeamEl = "";
  let currentPosEl = "";

  if (teamSelectElement.value !== "თიმი") {
    localStorage.removeItem("filteredPosNamesArr");
    currentTeamEl = teamArr.find((el) => el.name === teamSelectElement.value);
  }
  if (positionSelectElement.value !== "პოზიცია") {
    currentPosEl = posArr.find((el) => el.name === positionSelectElement.value);
  }
  if (currentTeamEl.id !== currentPosEl.team_id) {
    e.preventDefault();
    teamSelectElement.style.border = `0.2rem solid #E52F2F `;
    positionSelectElement.style.border = `0.2rem solid #E52F2F `;
  }
});

if (
  localStorage.getItem("user") &&
  !localStorage.getItem("user").length === 0
) {
  user.name = JSON.parse(localStorage.getItem("user")).name;
  user.surname = JSON.parse(localStorage.getItem("user")).surname;
  user.email = JSON.parse(localStorage.getItem("user")).email;
  user.phone_number = JSON.parse(localStorage.getItem("user")).phone_number;

  userNameInput.value = user.name;
  userLastNameInput.value = user.surname;
  userEmailInput.value = user.email;
  userTelInput.value = user.phone_number;
}
