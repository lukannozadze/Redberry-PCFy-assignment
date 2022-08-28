const teamSelectElement = document.getElementById("team");

fetch("https://pcfy.redberryinternship.ge/api/teams")
  .then((r) => r.json())
  .then((res) => {
    res.data.forEach((item) => {
      const optEl = document.createElement("option");
      optEl.value = item.name;
      optEl.textContent = item.name;
      teamSelectElement.append(optEl);
    });
  });
