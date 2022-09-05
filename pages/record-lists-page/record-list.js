const gridContainer = document.querySelector(".grid-container");

fetch(
  "https://pcfy.redberryinternship.ge/api/laptops?token=dfcb53d734ba326d29dacdd754100855"
)
  .then((r) => r.json())
  .then((res) => {
    let imgPathsArr = [];
    res.data.forEach((item) => {
      let cpuNameElement = document.createElement("span");
      cpuNameElement.classList.add("cpu-name");
      let userNameElement = document.createElement("span");
      userNameElement.classList.add("user-name");
      let seeMoreElement = document.createElement("a");
      seeMoreElement.classList.add("see-more");
      seeMoreElement.href = "#";
      let restInfoDiv = document.createElement("div");
      restInfoDiv.classList.add("rest-info-div");
      restInfoDiv.append(userNameElement);
      restInfoDiv.append(cpuNameElement);
      restInfoDiv.append(seeMoreElement);
      let imgElement = document.createElement("img");
      imgElement.alt = "user computer photo";
      let computerImgDiv = document.createElement("div");
      computerImgDiv.classList.add("computer-img-div");
      computerImgDiv.append(imgElement);
      let infoContainer = document.createElement("div");
      infoContainer.classList.add("info-container");
      infoContainer.append(computerImgDiv);
      infoContainer.append(restInfoDiv);
      gridContainer.append(infoContainer);
      userNameElement.textContent = `${item.user.name} ${item.user.surname}`;
      cpuNameElement.textContent = item.laptop.name;
      seeMoreElement.textContent = "მეტის ნახვა";
      imgPathsArr.push(item.laptop.image);
      imgPathsArr.forEach((el) => {
        let path = `https://pcfy.redberryinternship.ge${el}`;
        imgElement.src = path;
        seeMoreElement.href = `../laptop-detailed-page/laptop-info-page.html?${item.laptop.id}`;
      });
    });
  });
