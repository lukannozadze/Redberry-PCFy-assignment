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
const userTelRule = /^\d{9}$/;

const nextBtn = document.querySelector(".next-btn");

let user = {};

const teamArr = []; //teams info array
const posArr = []; //positions info array
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

////////////////////// USERNAME///////////////////////////////////////////////
userNameInput.addEventListener("blur", function () {
  if (userNameInput.value.match(userNameRule)) {
    userNameMark.style.display = "flex";
    user = {
      ...user,
      name: userNameInput.value,
    };
  } else {
    userNameMark.style.display = "none";
  }
});
/////////////////////////USERLASTNAME/////////////////////////////////////////
userLastNameInput.addEventListener("blur", function () {
  if (userLastNameInput.value.match(userLastNameRule)) {
    userLastNameMark.style.display = "flex";
    user = {
      ...user,
      surname: userLastNameInput.value,
    };
  } else {
    userLastNameMark.style.display = "none";
  }
});
//////////////////////////////USEREMAIL////////////////////////////////////
userEmailInput.addEventListener("blur", function () {
  if (userEmailInput.value.endsWith("@redberry.ge")) {
    userEmailMark.style.display = "flex";
    user = {
      ...user,
      email: userEmailInput.value,
    };
  } else {
    userEmailMark.style.display = "none";
  }
});
///////////////////////////////USERTEL/////////////////////////////////////
userTelInput.addEventListener("blur", function () {
  if (userTelInput.value.match(userTelRule)) {
    userTelMark.style.display = "flex";
    user = {
      ...user,
      phone_number: userTelInput.value,
    };
  } else {
    userTelMark.style.display = "none";
  }
});
////////////////////////TEAM////////////////////////////////////////
teamSelectElement.addEventListener("click", function () {
  if (teamSelectElement.value !== "თიმი") {
    const currentEl = teamArr.find((el) => el.name === teamSelectElement.value);
    user = {
      ...user,
      team_id: currentEl.id,
    };
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
  }
});

/////////////////Prevent next button event if any of the input field is empty///////////////////
// nextBtn.addEventListener("click", function (e) {
//   if (
//     userNameInput.value === "" ||
//     userLastNameInput.value === "" ||
//     userEmailInput.value === "" ||
//     userTelInput.value === "" ||
//     teamSelectElement.value === "თიმი" ||
//     positionSelectElement.value === "პოზიცია"
//   ) {
//     e.preventDefault();
//   }
//   if (
//     userNameMark.style.display === "none" ||
//     userLastNameMark.style.display === "none" ||
//     userEmailMark.style.display === "none" ||
//     userTelMark.style.display === "none"
//   ) {
//     e.preventDefault();
//   }
// });
