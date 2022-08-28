const brandSelectElement = document.getElementById("brand");
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
