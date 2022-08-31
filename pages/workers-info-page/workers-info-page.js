//selects
const teamSelectElement = document.getElementById("team");
const positionSelectElement = document.getElementById("position");

//inputs
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

/////////////////////////////////////////////////EMPTY FIELD ERROR////////////////////////////////////
const emptyFieldError = function (el) {
  if (el.value === "" || el.value === "თიმი" || el.value === "პოზიცია") {
    el.style.border = "0.2rem solid #E52F2F ";
  }
};

//input fields array
let user = {};

const teamArr = []; //teams info array
const posArr = []; //positions info array
//fetching information from teams API and creating elements
fetch("https://pcfy.redberryinternship.ge/api/teams")
  .then((r) => r.json())
  .then((res) => {
    res.data.forEach((item) => {
      const teamOptEl = document.createElement("option");
      teamOptEl.value = item.name;
      teamOptEl.textContent = item.name;
      teamSelectElement.append(teamOptEl);
      teamArr.push(item);
    });
  });
let filteredPosArr = []; //filtered positions array

//fetching information from positions API and creating elements
fetch("https://pcfy.redberryinternship.ge/api/positions")
  .then((r) => r.json())
  .then((res) => {
    res.data.forEach((item) => {
      const positionOptEl = document.createElement("option");
      positionOptEl.value = item.name;
      positionOptEl.textContent = item.name;
      positionSelectElement.append(positionOptEl);
      posArr.push(item);
    });
  });
// let userNameRuleTxt;
// let fnameText;
////////////////////// USERNAME///////////////////////////////////////////////
let userNameRuleTxt = document.querySelector(".first-name-rule");
let fnameText = document.getElementById("fname-txt");
userNameInput.addEventListener("blur", function () {
  if (userNameInput.value.match(userNameRule)) {
    userNameMark.style.display = "flex";
    userNameInput.style.border = "0.2rem solid rgba(138, 192, 226, 1)";
    userNameRuleTxt.textContent = "მინიმუმ 2 სიმბოლო, ქართული ასოები";
    userNameRuleTxt.style.color = "#2E2E2E";
    fnameText.style.color = "#000000";
    user = {
      ...user,
      name: userNameInput.value,
    };
    // localStorage.setItem("user", JSON.stringify(user));
  } else {
    userNameMark.style.display = "none";
  }
  if (userNameInput.value === "") {
    userNameInput.style.border = "0.2rem solid #E52F2F";
    console.log(userNameRuleTxt);
    userNameRuleTxt.textContent = "შეავსე გამოტოვებული ველი";
    userNameRuleTxt.style.color = "#E52F2F";
    fnameText.style.color = "#E52F2F";
  }
  if (!userNameInput.value.match(userNameRule) && userNameInput.value !== "") {
    userNameInput.style.border = "0.2rem solid #E52F2F";
    userNameRuleTxt.textContent = "გამოიყენე მხოლოდ ქართული ასოები";
    userNameRuleTxt.style.color = "#E52F2F";
    fnameText.style.color = "#E52F2F";
    // user = {
    //   ...user,
    //   name: userNameInput.value,
    // };
    // localStorage.setItem("user", JSON.stringify(user));
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
    userLastNameRuleTxt.style.color = "#2E2E2E";
    lnameText.style.color = "#000000";
    user = {
      ...user,
      surname: userLastNameInput.value,
    };
    // localStorage.setItem("user", JSON.stringify(user));
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
    // user = {
    //   ...user,
    //   surname: userLastNameInput.value,
    // };
    // localStorage.setItem("user", JSON.stringify(user));
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
    userEmailRuleText.style.color = "#2E2E2E";
    emailText.style.color = "#000000";
    user = {
      ...user,
      email: userEmailInput.value,
    };
    // localStorage.setItem("user", JSON.stringify(user));
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
    // user = {
    //   ...user,
    //   email: userEmailInput.value,
    // };
    // localStorage.setItem("user", JSON.stringify(user));
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
    userTelRuleText.style.color = "#2E2E2E";
    telText.style.color = "#000000";
    user = {
      ...user,
      phone_number: userTelInput.value,
    };
    // localStorage.setItem("user", JSON.stringify(user));
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
    // user = {
    //   ...user,
    //   phone_number: userTelInput.value,
    // };
    // localStorage.setItem("user", JSON.stringify(user));
  }
});
////////////////////////TEAM////////////////////////////////////////
teamSelectElement.addEventListener("click", function () {
  //filtering positions by teams id
  filteredPosArr = [];
  document.getElementById("position").innerHTML = "";
  if (teamSelectElement.value !== "თიმი") {
    const currentEl = teamArr.find((el) => el.name === teamSelectElement.value);
    for (let i = 0; i < posArr.length; i++) {
      if (currentEl.id === posArr[i].team_id) {
        filteredPosArr.push(posArr[i]);
      }
    }
    const defaultOptEl = document.createElement("option");
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
    localStorage.setItem("user", JSON.stringify(user));
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
positionSelectElement.addEventListener("click", function () {
  if (positionSelectElement.value !== "პოზიცია") {
    const currentEl = posArr.find(
      (el) => el.name === positionSelectElement.value
    );
    user = {
      ...user,
      position_id: currentEl.id,
    };
    // localStorage.setItem("user", JSON.stringify(user));
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
    userNameMark.style.display === "none" ||
    userLastNameMark.style.display === "none" ||
    userEmailMark.style.display === "none" ||
    userTelMark.style.display === "none"
  ) {
    e.preventDefault();
  }
  console.log(user);
});

//////When page is refreshed information should not lose
// window.onload = function () {
//   if (localStorage.getItem("user") !== null) {
//     userNameInput.value = JSON.parse(localStorage.getItem("user")).name;
//     userLastNameInput.value = JSON.parse(localStorage.getItem("user")).surname;
//     userEmailInput.value = JSON.parse(localStorage.getItem("user")).email;
//     userTelInput.value = JSON.parse(localStorage.getItem("user")).phone_number;
//     if (userNameInput.value.match(userNameRule)) {
//       userNameMark.style.display = "flex";
//     } else if (JSON.parse(localStorage.getItem("user")).name !== undefined) {
//       userNameInput.style.border = "0.2rem solid #E52F2F";
//       userNameRuleTxt.textContent = "გამოიყენე მხოლოდ ქართული ასოები";
//       userNameRuleTxt.style.color = "#E52F2F";
//       fnameText.style.color = "#E52F2F";
//     } else {
//       userNameInput.value = "";
//     }
//     if (userLastNameInput.value.match(userLastNameRule)) {
//       userLastNameMark.style.display = "flex";
//     } else if (JSON.parse(localStorage.getItem("user")).surname !== undefined) {
//       userLastNameInput.style.border = "0.2rem solid #E52F2F";
//       userLastNameRuleTxt.textContent = "გამოიყენე მხოლოდ ქართული ასოები";
//       userLastNameRuleTxt.style.color = "#E52F2F";
//       lnameText.style.color = "#E52F2F";
//     } else {
//       userLastNameInput.value = "";
//     }
//     if (userEmailInput.value.endsWith("@redberry.ge")) {
//       userEmailMark.style.display = "flex";
//     } else if (JSON.parse(localStorage.getItem("user")).email !== undefined) {
//       userEmailInput.style.border = "0.2rem solid #E52F2F";
//       userEmailRuleText.textContent = "უნდა მთავრდებოდეს redberry.ge-ით";
//       userEmailRuleText.style.color = "#E52F2F";
//       emailText.style.color = "#E52F2F";
//     } else {
//       userEmailInput.value = "";
//     }
//     if (userTelInput.value.match(userTelRule)) {
//       userTelMark.style.display = "flex";
//     } else if (
//       JSON.parse(localStorage.getItem("user")).phone_number !== undefined
//     ) {
//       userTelInput.style.border = "0.2rem solid #E52F2F ";
//       userTelRuleText.textContent =
//         "მხოლოდ ციფრები, უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს";
//       userTelRuleText.style.color = "#E52F2F";
//       telText.style.color = "#E52F2F";
//     } else {
//       userTelInput.value = "";
//     }
//   }
// };
