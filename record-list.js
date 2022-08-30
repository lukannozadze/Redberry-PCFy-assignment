fetch(
  "https://pcfy.redberryinternship.ge/api/laptops?token=bcc35db3fcb195ea59ae3238e986df92"
)
  .then((r) => r.json())
  .then((res) => {
    console.log(res.data);
    // res.forEach((item) => {
    //   let cpuNameElement = document.createElement("span");
    //   cpuNameElement.classList.add("cpu-name");
    //   let userNameElement = document.createElement("span");
    //   userNameElement.classList.add("user-name");
    //   let seeMoreElement = document.createElementNS("a");
    //   seeMoreElement.classList.add("see-more");
    //   seeMoreElement.href = "#";
    //   let restInfoDiv = document.createElement("div");
    //   restInfoDiv.classList.add("rest-info-div");
    //   restInfoDiv.append(seeMoreElement);
    //   restInfoDiv.append(cpuNameElement);
    //   restInfoDiv.append(userNameElement);
    //   let imgElement = document.createElement("img");
    //   imgElement.alt = "user computer photo";
    //   let computerImgDiv = document.createElement("div");
    //   computerImgDiv.classList.add("computer-img-div");
    //   computerImgDiv.append(imgElement);
    //   let infoContainer = document.createElement("div");
    //   infoContainer.classList.add("info-container");
    //   infoContainer.append(computerImgDiv);
    //   infoContainer.append(restInfoDiv);
    //   imgElement.src = item.laptop.image;
    // });
  });

// <div class="info-container">
//         <div class="computer-img-div">
//           <img src="./assets/old-computer-img.png" alt="old computer photo" />
//         </div>
//         <div class="rest-info-div">
//           <span class="user-name">ირინე ჩანქსელიანი</span>
//           <span class="cpu-name">Pentium II </span>
//           <a class="see-more" href="#">მეტის ნახვა</a>
//         </div>
//       </div>
