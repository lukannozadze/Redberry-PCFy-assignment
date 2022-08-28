const brandSelectElement = document.getElementById("brand");
const cpuSelectElement = document.getElementById("cpu");
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
