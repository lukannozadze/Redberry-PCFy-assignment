// inputs
const brandSelectElement = document.getElementById("brand");
const cpuSelectElement = document.getElementById("cpu");
const laptopName = document.getElementById("laptop-name");
const coresNumber = document.getElementById("cores-number");
const cpuStreamNumber = document.getElementById("stream-number");
const ram = document.getElementById("ram");
const purchaseDate = document.getElementById("purchase-date");
const price = document.getElementById("laptop-price");
const answerSSD = document.getElementById("ssd");
const answerHDD = document.getElementById("hdd");
const answerBrandNew = document.getElementById("brand-new");
const answerSecondary = document.getElementById("secondary");
const ssdText = document.getElementById("answer-ssd").textContent;
const hddText = document.getElementById("answer-hdd").textContent;

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

const saveBtn = document.querySelector(".btn-save");

let updatedUser = {};

const brandsArr = [];
fetch("https://pcfy.redberryinternship.ge/api/brands")
  .then((r) => r.json())
  .then((res) => {
    res.data.forEach((item) => {
      const brandOptEl = document.createElement("option");
      brandOptEl.value = item.name;
      brandOptEl.textContent = item.name;
      brandSelectElement.append(brandOptEl);
      brandsArr.push(item);
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

//////////////////////////////////////////BRANDS///////////////////////////////////////////////////////
brandSelectElement.addEventListener("click", function () {
  if (brandSelectElement.value !== "ლეპტოპის ბრენდი") {
    const currentEl = brandsArr.find(
      (el) => el.name === brandSelectElement.value
    );
    updatedUser = {
      ...updatedUser,
      laptop_brand_id: currentEl.id,
    };
  }
});
///////////////////////////////////////CPUS///////////////////////////////////////////////
cpuSelectElement.addEventListener("click", function () {
  if (cpuSelectElement.value !== "CPU") {
    updatedUser = {
      ...updatedUser,
      laptop_cpu: cpuSelectElement.value,
    };
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
      laptop_cpu_threads: cpuStreamNumber.value,
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
    updatedUser = {
      ...updatedUser,
      laptop_ram: ram.value,
    };
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
    updatedUser = {
      ...updatedUser,
      laptop_purchase_date: purchaseDate.value,
    };
  } else {
    purchaseDateMark.style.display = "none";
  }
});

///////////////////////////////////////////LAPTOP PRICE/////////////////////////////////
price.addEventListener("blur", function () {
  if (price.value.match(numbersRule)) {
    priceGelIcon.style.display = "none";
    priceMark.style.display = "flex";
    updatedUser = {
      ...updatedUser,
      laptop_price: price.value,
    };
  } else {
    priceMark.style.display = "none";
    priceGelIcon.style.display = "flex";
  }
  if (price.value === "") {
    priceMark.style.display = "none";
    priceGelIcon.style.display = "flex";
  }
});

/////////////////////////////////////LAPTOP HARD DRIVE TYPE//////////////////////////
answerSSD.addEventListener("click", function () {
  if (answerSSD.checked) {
    updatedUser = {
      ...updatedUser,
      laptop_hard_drive_type: ssdText,
    };
  }
});

answerHDD.addEventListener("click", function () {
  if (answerHDD.checked) {
    updatedUser = {
      ...updatedUser,
      laptop_hard_drive_type: hddText,
    };
  }
});

////////////////////////////////////////////LAPTOP STATE///////////////////////////////////
answerBrandNew.addEventListener("click", function () {
  if (answerBrandNew.checked) {
    updatedUser = {
      ...updatedUser,
      laptop_state: "new",
    };
  }
});

answerSecondary.addEventListener("click", function () {
  if (answerSecondary.checked) {
    updatedUser = {
      ...updatedUser,
      laptop_state: "used",
    };
  }
});
////////////////////////////////////////////////SAVE BUTTON EVENT/////////////////////////////////////
saveBtn.addEventListener("click", function (e) {
  if (
    laptopName.value === "" ||
    brandSelectElement.value === "ლეპტოპის ბრენდი" ||
    cpuSelectElement.value === "CPU" ||
    coresNumber.value === "" ||
    cpuStreamNumber.value === "" ||
    ram.value === "" ||
    price.value === "" ||
    (!answerSSD.checked && !answerSSD.checked) ||
    (!answerBrandNew.checked && !answerSecondary.checked)
  ) {
    e.preventDefault();
  }
  if (
    laptopNameMark.style.display === "none" ||
    coresNumberMark.style.display === "none" ||
    coresStreamMark.style.display === "none" ||
    ramMark.style.display === "none" ||
    priceMark.style.display === "none"
  ) {
    e.preventDefault();
  }
});

const form = document.querySelector(".upload-text-button-flex-container");
const formBtn = document.querySelector(".button");
const fileInput = document.getElementById("img");

formBtn.addEventListener("click", function () {
  fileInput.click();
});

fileInput.addEventListener("change", function ({ target }) {
  let file = target.files[0];
  if (file) {
    let fileName = file.name;
    // uploadFile(fileName);
  }
});
