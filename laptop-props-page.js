// inputs
const brandSelectElement = document.getElementById("brand");
const laptopName = document.getElementById("laptop-name");
const cpuSelectElement = document.getElementById("cpu");
const coresNumber = document.getElementById("cores-number");
const cpuStreamNumber = document.getElementById("stream-number");
const ram = document.getElementById("ram");
const purchaseDate = document.getElementById("purchase-date");
const price = document.getElementById("laptop-price");

//icons
const laptopNameMark = document.getElementById("name-mark");
const coresNumberMark = document.getElementById("cores-number-mark");
const coresStreamMark = document.getElementById("cores-stream-mark");
const ramMark = document.getElementById("ram-mark");
const purchaseDateMark = document.getElementById("purchase-date-mark");
const priceMark = document.getElementById("price-mark");
const priceGelIcon = document.querySelector(".gel-icon");

//rules
const numbersRule = /^[0-9]*$/;
const laptopNameRule = /^[a-zA-Z0-9\W]*$/;

let updatedUser = {};

fetch("https://pcfy.redberryinternship.ge/api/brands")
  .then((r) => r.json())
  .then((res) => {
    res.data.forEach((item) => {
      const brandOptEl = document.createElement("option");
      brandOptEl.value = item.name;
      brandOptEl.textContent = item.name;
      brandSelectElement.append(brandOptEl);
    });
  });

fetch("https://pcfy.redberryinternship.ge/api/cpus")
  .then((r) => r.json())
  .then((res) => {
    res.data.forEach((item) => {
      const cpuOptEl = document.createElement("option");
      cpuOptEl.value = item.name;
      cpuOptEl.textContent = item.name;
      cpuSelectElement.append(cpuOptEl);
    });
  });
////////////////////////////////////////////////////LAPTOP NAME//////////////////////////////////////////////
laptopName.addEventListener("blur", function () {
  if (laptopName.value.match(laptopNameRule)) {
    laptopNameMark.style.display = "flex";
    updatedUser = {
      ...updatedUser,
      laptop_name: laptopName.value,
    };
  } else {
    laptopNameMark.style.display = "none";
  }
  if (laptopName.value === "") {
    laptopNameMark.style.display = "none";
  }
});

/////////////////////////////////// CORES NUMBER //////////////////////////////////
coresNumber.addEventListener("blur", function () {
  if (coresNumber.value.match(numbersRule)) {
    coresNumberMark.style.display = "flex";
    updatedUser = {
      ...updatedUser,
      laptop_cpu_cores: coresNumber.value,
    };
  } else {
    coresNumberMark.style.display = "none";
  }
  if (coresNumber.value === "") {
    coresNumberMark.style.display = "none";
  }
});

////////////////////////////CPU STREAM/////////////////////////////////////////////////
cpuStreamNumber.addEventListener("blur", function () {
  if (cpuStreamNumber.value.match(numbersRule)) {
    coresStreamMark.style.display = "flex";
    updatedUser = {
      ...updatedUser,
      laptop_cpu_threads:
    };
  } else {
    coresStreamMark.style.display = "none";
  }
  if (cpuStreamNumber.value === "") {
    coresStreamMark.style.display = "none";
  }
});

//////////////////////////RAM/////////////////////////////////////////////////////////
ram.addEventListener("blur", function () {
  if (ram.value.match(numbersRule)) {
    ramMark.style.display = "flex";
  } else {
    ramMark.style.display = "none";
  }
  if (ram.value === "") {
    ramMark.style.display = "none";
  }
});
///////////////////////////////////////////PURCHASE DATE/////////////////////////////////
purchaseDate.addEventListener("blur", function () {
  if (purchaseDate.value !== "") {
    purchaseDateMark.style.display = "flex";
  } else {
    purchaseDateMark.style.display = "none";
  }
});

///////////////////////////////////////////LAPTOP PRICE/////////////////////////////////
price.addEventListener("blur", function () {
  if (price.value.match(numbersRule)) {
    priceGelIcon.style.display = "none";
    priceMark.style.display = "flex";
  } else {
    priceMark.style.display = "none";
    priceGelIcon.style.display = "flex";
  }
  if (price.value === "") {
    priceMark.style.display = "none";
    priceGelIcon.style.display = "flex";
  }
});
