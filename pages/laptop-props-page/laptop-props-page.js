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

//laptopName laptopBrand laptopCpuName laptopCoresNumber laptopCpuStream laptopRam laptopPurchaseDate laptopPurchasePrice storageTypeAnswer laptopConditionAnswer
if (localStorage.getItem("laptopName")) {
  laptopName.value = localStorage.getItem("laptopName");
} else {
  laptopName.value = "";
}
if (localStorage.getItem("laptopBrand")) {
  brandSelectElement.value = localStorage.getItem("laptopBrand");
  console.log("shemevedi");
} else {
  brandSelectElement.value = "ლეპტოპის ბრენდი";
}
if (localStorage.getItem("laptopCpuName")) {
  cpuSelectElement.value = localStorage.getItem("laptopCpuName");
} else {
  cpuSelectElement.value = "CPU";
}
if (localStorage.getItem("laptopCoresNumber")) {
  coresNumber.value = localStorage.getItem("laptopCoresNumber");
} else {
  coresNumber.value = "";
}
if (localStorage.getItem("laptopCpuStream")) {
  cpuStreamNumber.value = localStorage.getItem("laptopCpuStream");
} else {
  cpuStreamNumber.value = "";
}
if (localStorage.getItem("laptopRam")) {
  ram.value = localStorage.getItem("laptopRam");
} else {
  ram.value = "";
}
if (localStorage.getItem("laptopPurchaseDate")) {
  purchaseDate.value = localStorage.getItem("laptopPurchaseDate");
} else {
  purchaseDate.value = "";
}
if (localStorage.getItem("laptopPurchasePrice")) {
  price.value = localStorage.getItem("laptopPurchasePrice");
}
if (localStorage.getItem("storageTypeAnswer")) {
  if (localStorage.getItem("storageTypeAnswer") === "SSD") {
    answerSSD.checked = true;
  } else {
    answerHDD.checked = true;
  }
}
if (localStorage.getItem("laptopConditionAnswer")) {
  if (localStorage.getItem("laptopConditionAnswer") === "new") {
    answerBrandNew.checked = true;
  } else {
    answerSecondary.checked = true;
  }
}

const userFromLocalStorage = localStorage.getItem("user");
updatedUser = JSON.parse(userFromLocalStorage);

const emptyFieldError = function (el) {
  if (el.value === "" || el.value === "ლეპტოპის ბრენდი" || el.value === "CPU") {
    el.style.border = "0.2rem solid #E52F2F ";
  }
};

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
    if (localStorage.getItem("laptopBrand")) {
      brandSelectElement.value = localStorage.getItem("laptopBrand");
      console.log("shemevedi");
    } else {
      brandSelectElement.value = "ლეპტოპის ბრენდი";
    }
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
    if (localStorage.getItem("laptopCpuName")) {
      cpuSelectElement.value = localStorage.getItem("laptopCpuName");
    } else {
      cpuSelectElement.value = "CPU";
    }
  });
////////////////////////////////////////////////////LAPTOP NAME//////////////////////////////////////////////
laptopName.addEventListener("blur", function () {
  let laptopNameText = document.getElementById("name-text");
  let laptopNameRule = document.querySelector(".laptop-name-rule");
  if (laptopName.value.match(laptopNameRule)) {
    laptopNameMark.style.display = "flex";
    laptopName.style.border = "0.2rem solid rgba(138, 192, 226, 1)";
    laptopNameRule.textContent = "ლათინური ასოები, ციფრები, !@#$%^&*()_+=";
    laptopNameRule.style.color = "rgba(0, 0, 0, 0.6)";
    laptopNameText.style.color = "#2E2E2E";
    updatedUser = {
      ...updatedUser,
      laptop_name: laptopName.value,
    };
    localStorage.setItem("laptopName", laptopName.value);
  } else {
    laptopNameMark.style.display = "none";
  }
  if (laptopName.value === "") {
    laptopNameMark.style.display = "none";
  }
  if (laptopName.value === "") {
    laptopName.style.border = "0.2rem solid #E52F2F";
    laptopNameRule.textContent = "შეავსე გამოტოვებული ველი";
    laptopNameRule.style.color = "#E52F2F";
    laptopNameText.style.color = "#E52F2F";
  }
  if (!laptopName.value.match(laptopNameRule) && laptopName.value !== "") {
    laptopName.style.border = "0.2rem solid #E52F2F";
    laptopNameRule.textContent =
      "გამოიყენე ლათინური ასოები, ციფრები, !@#$%^&*()_+=";
    laptopNameText.style.color = "#E52F2F";
    laptopNameRule.style.color = "#E52F2F";
    // localStorage.setItem("laptopName", laptopName.value);
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
    localStorage.setItem("laptopBrand", currentEl.name);
  }
});
brandSelectElement.addEventListener("blur", function () {
  if (brandSelectElement.value === "ლეპტოპის ბრენდი") {
    brandSelectElement.style.border = `0.2rem solid #E52F2F `;
  } else {
    brandSelectElement.style.border = "none";
  }
});
///////////////////////////////////////CPUS///////////////////////////////////////////////
cpuSelectElement.addEventListener("click", function () {
  if (cpuSelectElement.value !== "CPU") {
    updatedUser = {
      ...updatedUser,
      laptop_cpu: cpuSelectElement.value,
    };
    localStorage.setItem("laptopCpuName", cpuSelectElement.value);
  }
});
cpuSelectElement.addEventListener("blur", function () {
  if (cpuSelectElement.value === "CPU") {
    cpuSelectElement.style.border = `0.2rem solid #E52F2F `;
  } else {
    cpuSelectElement.style.border = "none";
  }
});
/////////////////////////////////// CORES NUMBER //////////////////////////////////
coresNumber.addEventListener("blur", function () {
  let coresNumberText = document.getElementById("cpu-text");
  let coresNumberRule = document.querySelector(".cores-number-rule");
  if (coresNumber.value.match(numbersRule)) {
    coresNumberMark.style.display = "flex";
    coresNumber.style.border = "0.2rem solid rgba(138, 192, 226, 1)";
    coresNumberRule.textContent = "მხოლოდ ციფრები";
    coresNumberRule.style.color = "rgba(0, 0, 0, 0.6)";
    coresNumberText.style.color = "#2E2E2E";
    updatedUser = {
      ...updatedUser,
      laptop_cpu_cores: coresNumber.value,
    };
    localStorage.setItem("laptopCoresNumber", coresNumber.value);
  } else {
    coresNumberMark.style.display = "none";
  }
  if (coresNumber.value === "") {
    coresNumberMark.style.display = "none";
  }
  if (coresNumber.value === "") {
    coresNumber.style.border = "0.2rem solid #E52F2F";
    coresNumberRule.textContent = "შეავსე გამოტოვებული ველი";
    coresNumberRule.style.color = "#E52F2F";
    coresNumberText.style.color = "#E52F2F";
  }
  if (!coresNumber.value.match(numbersRule) && coresNumber.value !== "") {
    coresNumber.style.border = "0.2rem solid #E52F2F";
    coresNumberRule.textContent = "გამოიყენე მხოლოდ ციფრები";
    coresNumberRule.style.color = "#E52F2F";
    coresNumberText.style.color = "#E52F2F";
    localStorage.setItem("laptopCoresNumber", coresNumber.value);
  }
});

////////////////////////////CPU STREAM/////////////////////////////////////////////////
cpuStreamNumber.addEventListener("blur", function () {
  let streamNumberText = document.getElementById("stream-number-text");
  let streamNumberRule = document.querySelector(".stream-number-rule");
  if (cpuStreamNumber.value.match(numbersRule)) {
    coresStreamMark.style.display = "flex";
    cpuStreamNumber.style.border = "0.2rem solid rgba(138, 192, 226, 1)";
    streamNumberRule.textContent = "მხოლოდ ციფრები";
    streamNumberRule.style.color = "rgba(0, 0, 0, 0.6)";
    streamNumberText.style.color = "#2E2E2E";
    updatedUser = {
      ...updatedUser,
      laptop_cpu_threads: cpuStreamNumber.value,
    };
    localStorage.setItem("laptopCpuStream", cpuStreamNumber.value);
  } else {
    coresStreamMark.style.display = "none";
  }
  if (cpuStreamNumber.value === "") {
    coresStreamMark.style.display = "none";
  }
  if (cpuStreamNumber.value === "") {
    cpuStreamNumber.style.border = "0.2rem solid #E52F2F";
    streamNumberRule.textContent = "შეავსე გამოტოვებული ველი";
    streamNumberRule.style.color = "#E52F2F";
    streamNumberText.style.color = "#E52F2F";
  }
  if (
    !cpuStreamNumber.value.match(numbersRule) &&
    cpuStreamNumber.value !== ""
  ) {
    cpuStreamNumber.style.border = "0.2rem solid #E52F2F";
    streamNumberRule.textContent = "გამოიყენე მხოლოდ ციფრები";
    streamNumberRule.style.color = "#E52F2F";
    streamNumberText.style.color = "#E52F2F";
    localStorage.setItem("laptopCpuStream", cpuStreamNumber.value);
  }
});

//////////////////////////RAM/////////////////////////////////////////////////////////
ram.addEventListener("blur", function () {
  let ramText = document.getElementById("ram-text");
  let ramRule = document.querySelector(".ram-number-rule");
  if (ram.value.match(numbersRule)) {
    ramMark.style.display = "flex";
    ram.style.border = "0.2rem solid rgba(138, 192, 226, 1)";
    ramRule.textContent = "მხოლოდ ციფრები";
    ramRule.style.color = "rgba(0, 0, 0, 0.6)";
    ramText.style.color = "#2E2E2E";
    updatedUser = {
      ...updatedUser,
      laptop_ram: ram.value,
    };
    localStorage.setItem("laptopRam", ram.value);
  } else {
    ramMark.style.display = "none";
  }

  if (ram.value === "") {
    ram.style.border = "0.2rem solid #E52F2F";
    ramRule.textContent = "შეავსე გამოტოვებული ველი";
    ramRule.style.color = "#E52F2F";
    ramText.style.color = "#E52F2F";
    ramMark.style.display = "none";
  }
  if (!ram.value.match(numbersRule) && ram.value !== "") {
    ram.style.border = "0.2rem solid #E52F2F";
    ramRule.textContent = "გამოიყენე მხოლოდ ციფრები";
    ramRule.style.color = "#E52F2F";
    ramText.style.color = "#E52F2F";
    localStorage.setItem("laptopRam", ram.value);
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
    localStorage.setItem("laptopPurchaseDate", purchaseDate.value);
  } else {
    purchaseDateMark.style.display = "none";
  }
});

///////////////////////////////////////////LAPTOP PRICE/////////////////////////////////
price.addEventListener("blur", function () {
  let priceText = document.getElementById("price-text");
  let priceRule = document.querySelector(".price-number-rule");
  if (price.value.match(numbersRule)) {
    priceGelIcon.style.display = "none";
    priceMark.style.display = "flex";
    price.style.border = "0.2rem solid rgba(138, 192, 226, 1)";
    priceRule.textContent = "მხოლოდ ციფრები";
    priceRule.style.color = "rgba(0, 0, 0, 0.6)";
    priceText.style.color = "#2E2E2E";
    updatedUser = {
      ...updatedUser,
      laptop_price: price.value,
    };
    localStorage.setItem("laptopPurchasePrice", price.value);
  } else {
    priceMark.style.display = "none";
    priceGelIcon.style.display = "flex";
  }
  if (price.value === "") {
    priceMark.style.display = "none";
    priceGelIcon.style.display = "flex";
  }
  if (price.value === "") {
    price.style.border = "0.2rem solid #E52F2F";
    priceRule.textContent = "შეავსე გამოტოვებული ველი";
    priceRule.style.color = "#E52F2F";
    priceText.style.color = "#E52F2F";
  }
  if (!price.value.match(numbersRule) && price.value !== "") {
    price.style.border = "0.2rem solid #E52F2F";
    priceRule.textContent = "გამოიყენე მხოლოდ ციფრები";
    priceRule.style.color = "#E52F2F";
    priceText.style.color = "#E52F2F";
    localStorage.setItem("laptopPurchasePrice", price.value);
  }
});

/////////////////////////////////////LAPTOP HARD DRIVE TYPE//////////////////////////
answerSSD.addEventListener("click", function () {
  if (answerSSD.checked) {
    updatedUser = {
      ...updatedUser,
      laptop_hard_drive_type: ssdText,
    };
    localStorage.setItem("storageTypeAnswer", ssdText);
  }
});

answerHDD.addEventListener("click", function () {
  if (answerHDD.checked) {
    updatedUser = {
      ...updatedUser,
      laptop_hard_drive_type: hddText,
    };
    localStorage.setItem("storageTypeAnswer", hddText);
  }
});

////////////////////////////////////////////LAPTOP STATE///////////////////////////////////
answerBrandNew.addEventListener("click", function () {
  if (answerBrandNew.checked) {
    updatedUser = {
      ...updatedUser,
      laptop_state: "new",
    };
    localStorage.setItem("laptopConditionAnswer", "new");
  }
});

answerSecondary.addEventListener("click", function () {
  if (answerSecondary.checked) {
    updatedUser = {
      ...updatedUser,
      laptop_state: "used",
    };
    localStorage.setItem("laptopConditionAnswer", "used");
  }
});

////////////////////////////////////IMAGE FILE//////////////////////////////////////////////////
const form = document.querySelector(".upload-text-button-flex-container");
const formBtn = document.querySelector(".button");
const fileInput = document.getElementById("img");
const imgInputField = document.querySelector(".img-input");

let formData = new FormData();
fileInput.addEventListener("change", function () {
  updatedUser = {
    ...updatedUser,
    laptop_image: imgInputField.files[0],
  };
});

//////////////////////////////////////////////SAVE BUTTON//////////////////////////////////////////////
////////////////////////////////////////////////SAVE BUTTON EVENT/////////////////////////////////////
saveBtn.addEventListener("click", function (e) {
  localStorage.setItem("user", JSON.stringify(updatedUser));
  if (
    laptopName.value === "" ||
    brandSelectElement.value === "ლეპტოპის ბრენდი" ||
    cpuSelectElement.value === "CPU" ||
    coresNumber.value === "" ||
    cpuStreamNumber.value === "" ||
    ram.value === "" ||
    price.value === "" ||
    (!answerSSD.checked && !answerHDD.checked) ||
    (!answerBrandNew.checked && !answerSecondary.checked)
  ) {
    e.preventDefault();
    emptyFieldError(laptopName);
    emptyFieldError(brandSelectElement);
    emptyFieldError(cpuStreamNumber);
    emptyFieldError(cpuSelectElement);
    emptyFieldError(coresNumber);
    emptyFieldError(ram);
    emptyFieldError(price);
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

  ////////////////////////////////STORAGE TYPE//////////////////////////////////////////////////////
  let storageIcon = document.querySelector(".storage-type-warning-icon");
  let storageText = document.getElementById("storage-txt");
  if (!answerSSD.checked && !answerHDD.checked) {
    storageText.style.color = "#E52F2F";
    storageIcon.style.display = "flex";
  } else {
    storageIcon.style.display = "none";
    storageText.style.color = "#000000";
  }
  /////////////////////////////////LAPTOP CONDITION/////////////////////////////////////////////////
  let conditionIcon = document.querySelector(".condition-warning-icon");
  let conditionText = document.getElementById("laptop-condition-text");
  if (!answerBrandNew.checked && !answerSecondary.checked) {
    conditionText.style.color = "#E52F2F";
    conditionIcon.style.display = "flex";
  } else {
    conditionText.style.display = "none";
    conditionText.style.color = "#000000";
  }

  /////////////UPLOAD IMAGE////////////////////////////////////////////////
  let uploadContainer = document.querySelector(".upload-container");
  let uploadContainerText = document.querySelector(".upload-txt");
  let uploadCOntainerIcon = document.querySelector(".upload-warning-icon");
  if (fileInput.files.length === 0) {
    uploadContainer.style.border = "0.2rem dashed #E52F2F";
    uploadContainer.style.backgroundColor = "#FFF1F1";
    uploadContainerText.style.color = "#E52F2F";
    uploadCOntainerIcon.style.display = "flex";
  }

  if (updatedUser !== null) {
    formData.append("name", updatedUser.name);
    formData.append("surname", updatedUser.surname);
    formData.append("team_id", updatedUser.team_id);
    formData.append("position_id", updatedUser.position_id);
    formData.append("phone_number", updatedUser.phone_number);
    formData.append("email", updatedUser.email);
    formData.append("token", "dfcb53d734ba326d29dacdd754100855");
    formData.append("laptop_name", updatedUser.laptop_name);
    formData.append("laptop_image", imgInputField.files[0]);
    formData.append("laptop_brand_id", updatedUser.laptop_brand_id);
    formData.append("laptop_cpu", updatedUser.laptop_cpu);
    formData.append("laptop_cpu_cores", updatedUser.laptop_cpu_cores);
    formData.append("laptop_cpu_threads", updatedUser.laptop_cpu_threads);
    formData.append("laptop_ram", updatedUser.laptop_ram);
    formData.append(
      "laptop_hard_drive_type",
      updatedUser.laptop_hard_drive_type
    );
    formData.append("laptop_state", updatedUser.laptop_state);
    formData.append("laptop_purchase_date", updatedUser.laptop_purchase_date);
    formData.append("laptop_price", String(updatedUser.laptop_price));

    console.log(updatedUser);

    const response = fetch(
      "https://pcfy.redberryinternship.ge/api/laptop/create",
      {
        method: "POST",
        headers: {
          accept: "application/json",
        },
        body: formData,
      }
    ).catch(console.error());
    console.log(response);
  }
});
