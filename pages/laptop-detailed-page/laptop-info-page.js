///LAPTOP IMAGE ELEMENT
let laptopImage = document.querySelector(".laptop-image");

//USER ANSWER ELEMENTS
let userName = document.getElementById("answer-name");
let userTeam = document.getElementById("answer-team");
let userPosition = document.getElementById("answer-position");
let userEmail = document.getElementById("answer-email");
let userTel = document.getElementById("answer-tel");
let laptopName = document.getElementById("answer-lname");
let laptopBrand = document.getElementById("answer-lbrand");
let laptopRam = document.getElementById("answer-lram");
let laptopStorageType = document.getElementById("answer-lstoragetype");
let laptopCpuNameText = document.getElementById("answer-lcpuname");
let laptopCpuCores = document.getElementById("answer-lcpucores");
let laptopCpuThreads = document.getElementById("answer-lcputhreads");
let laptopCondition = document.getElementById("answer-lcondition");
let laptopPrice = document.getElementById("answer-lprice");
let laptopPurchaseDate = document.getElementById("answer-lpurchasedate");

//check the id at the end of the URL and render detailed info
const baseUrl = document.URL;
const id = baseUrl.slice(baseUrl.indexOf("?") + 1);
let teamsArr = [];
let posArr = [];
let brandsArr = [];
const x = async function () {
  let teamsResponse = await fetch(
    "https://pcfy.redberryinternship.ge/api/teams"
  );
  let teamsData = await teamsResponse.json();
  teamsData.data.forEach((item) => {
    teamsArr.push(item);
  });

  let positionsResponse = await fetch(
    "https://pcfy.redberryinternship.ge/api/positions"
  );
  let positionsData = await positionsResponse.json();
  positionsData.data.forEach((item) => {
    posArr.push(item);
  });

  let brandsResponse = await fetch(
    "https://pcfy.redberryinternship.ge/api/brands"
  );
  let brandsData = await brandsResponse.json();
  brandsData.data.forEach((item) => {
    brandsArr.push(item);
  });

  let allDataResponse = await fetch(
    `https://pcfy.redberryinternship.ge/api/laptop/${id}?token=dfcb53d734ba326d29dacdd754100855`
  );
  let allData = await allDataResponse.json();

  let imgPath = `https://pcfy.redberryinternship.ge${allData.data.laptop.image}`;
  laptopImage.src = imgPath;

  userName.textContent = `${allData.data.user.name} ${allData.data.user.surname}`;
  let teamEl = teamsArr.find((el) => el.id === allData.data.user.team_id);
  userTeam.textContent = teamEl.name;
  let posEl = posArr.find((el) => el.id === allData.data.user.position_id);
  userPosition.textContent = posEl.name;
  userEmail.textContent = allData.data.user.email;
  userTel.textContent = allData.data.user.phone_number;
  laptopName.textContent = allData.data.laptop.name;
  let brandEl = brandsArr.find((el) => el.id === allData.data.laptop.brand_id);
  laptopBrand.textContent = brandEl.name;
  laptopRam.textContent = allData.data.laptop.ram;
  laptopStorageType.textContent = allData.data.laptop.hard_drive_type;
  laptopCpuNameText.textContent = allData.data.laptop.cpu.name;
  laptopCpuCores.textContent = allData.data.laptop.cpu.cores;
  laptopCpuThreads.textContent = allData.data.laptop.cpu.threads;
  allData.data.laptop.state === "new"
    ? (laptopCondition.textContent = "ახალი")
    : (laptopCondition.textContent = "მეორადი");
  laptopPrice.textContent = `${allData.data.laptop.price} ₾`;
  laptopPurchaseDate.textContent = allData.data.laptop.purchase_date;
};
x();
