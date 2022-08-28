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

fetch("https://pcfy.redberryinternship.ge/api/teams")
  .then((r) => r.json())
  .then((res) => {
    res.data.forEach((item) => {
      const teamOptEl = document.createElement("option");
      teamOptEl.value = item.name;
      teamOptEl.textContent = item.name;
      teamSelectElement.append(teamOptEl);
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
    });
  });

////////////////////// USERNAME///////////////////////////////////////////////
userNameInput.addEventListener("blur", function () {
  if (userNameInput.value.match(userNameRule)) {
    userNameMark.style.display = "flex";
  } else {
    userNameMark.style.display = "none";
  }
});
/////////////////////////USERLASTNAME/////////////////////////////////////////
userLastNameInput.addEventListener("blur", function () {
  if (userLastNameInput.value.match(userLastNameRule)) {
    userLastNameMark.style.display = "flex";
  } else {
    userLastNameMark.style.display = "none";
  }
});
//////////////////////////////USEREMAIL////////////////////////////////////
userEmailInput.addEventListener("blur", function () {
  if (userEmailInput.value.endsWith("@redberry.ge")) {
    userEmailMark.style.display = "flex";
  } else {
    userEmailMark.style.display = "none";
  }
});
///////////////////////////////USERTEL/////////////////////////////////////
userTelInput.addEventListener("blur", function () {
  if (userTelInput.value.match(userTelRule)) {
    userTelMark.style.display = "flex";
  } else {
    userTelMark.style.display = "none";
  }
});
