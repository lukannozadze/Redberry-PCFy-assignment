const teamSelectElement = document.getElementById("team");
const positionSelectElement = document.getElementById("position");
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
