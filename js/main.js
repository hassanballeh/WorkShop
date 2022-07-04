//START PONNEL
let liUser = document.querySelector(".li-user");
let divUser = document.getElementById("id-user");
let liLan = document.querySelector(".li-lan");
let divLan = document.getElementById("id-lan");
let myUls = document.querySelectorAll("#nav li");
// console.log(myUls);
// for (let i = 0; i < myUls.length; i++) {
//   window.onscroll = () => {
//     if (window.scrollX <= 875) {
//       console.log("s");
//       myUls[i].innerHTML = "";
//     }
//   };
// }
// console.log(window.innerWidth);

liLan.onclick = () => {
  if (divLan.style.display === "none") {
    divLan.style.display = "flex";
  } else divLan.style.display = "none";
};
liUser.onclick = () => {
  if (divUser.style.display === "none") {
    divUser.style.display = "flex";
  } else divUser.style.display = "none";
};
//END PONNEL
// START HEADER
let pro = document.querySelector(".pro");
let cart = document.querySelector(".cart");
pro.onclick = () => {
  if (cart.style.display === "none") {
    cart.style.display = "block";
  } else cart.style.display = "none";
};
// END HEADER
// START LANDING
let myImgs = document.querySelectorAll(".imgs img");
let myImgsCount = Array.from(myImgs).length;
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let myUl = document.querySelectorAll("#circle li");
let myUlCount = Array.from(myUl).length;
let currnetImg = 1;
next.onclick = () => {
  removeAll(myImgs);
  myImgs[currnetImg].classList.add("active");
  myUl[currnetImg].classList.add("active");
  currnetImg++;
  if (currnetImg == myImgsCount) {
    currnetImg = 0;
  }
};
prev.onclick = () => {
  removeAll(myImgs);
  myImgs[myImgsCount - 1].classList.add("active");
  myUl[myImgsCount - 1].classList.add("active");
  myImgsCount--;
  if (myImgsCount == 0) {
    myImgsCount = 3;
  }
};
myUl.forEach((e) => {
  e.onclick = () => {
    removeAll(myImgs);
    e.classList.add("active");
    let s = Array.from(myUl).indexOf(e);
    myImgs[s].classList.add("active");
  };
});
function removeAll(array) {
  array.forEach((e) => {
    if (e.classList.contains("active")) {
      e.classList.remove("active");
    }
  });
  myUl.forEach((e) => {
    if (e.classList.contains("active")) {
      e.classList.remove("active");
    }
  });
}
// END LANDING
// START DISCOUNT
let myBoxes = document.querySelectorAll(".content .box");
let countBoxes = myBoxes.length;
let currentBox = 0;
let right = document.getElementById("right");
let left = document.getElementById("left");
window.onresize = () => {
  if (window.innerWidth <= 1200) {
    myBoxes[2].classList.remove("active");
  } else {
    myBoxes[2].classList.add("active");
  }
  if (window.innerWidth <= 768) {
    myBoxes[1].classList.remove("active");
  } else {
    myBoxes[1].classList.add("active");
  }
};
let z, s;
let i;
right.onclick = () => {
  if (z === undefined || z === 5) {
    i = 0;
  } else i = z;
  for (i; i < myBoxes.length; i++) {
    console.log(i);
    if (myBoxes[i].classList.contains("active")) {
      continue;
    } else {
      myBoxes[i].classList.add("active");
      break;
    }
  }
  s = i;
  z = s;
  console.log(z);
  removeCurrentBox();
};
function removeCurrentBox() {
  myBoxes[currentBox].classList.remove("active");
  currentBox++;
  if (currentBox == 6) currentBox = 0;
}

function addRemove(array) {
  array.forEach((e) => {
    e.classList.toggle("active");
  });
}
let theAdd = 2;
left.onclick = () => {
  if (myBoxes[0].classList.contains("active")) {
    addRemove(myBoxes);
  } else {
    myBoxes[countBoxes - 1].classList.remove("active");
    countBoxes--;
    if (countBoxes === 3) countBoxes = 6;
    if (theAdd === -1) theAdd = 2;
    myBoxes[theAdd].classList.add("active");
    theAdd--;
  }
};
let day = document.getElementsByClassName("day");
let hour = document.getElementsByClassName("hour");
let min = document.getElementsByClassName("min");
let sec = document.getElementsByClassName("sec");
for (let i = 0; i < day.length; i++) {
  day[i].innerHTML = Math.floor(Math.random() * 30);
  hour[i].innerHTML = Math.floor(Math.random() * 24);
  min[i].innerHTML = Math.floor(Math.random() * 60);
  sec[i].innerHTML = Math.floor(Math.random() * 60);
  setInterval(() => {
    sec[i].innerHTML--;
    if (sec[i].innerHTML == 0) {
      sec[i].innerHTML = 60;
      min[i].innerHTML--;
    }
    if (min[i].innerHTML == 0) {
      min[i].innerHTML = 60;
      hour[i].innerHTML--;
    }
    if (hour[i].innerHTML == 0) {
      hour[i].innerHTML = 24;
      day[i].innerHTML--;
    }
  }, 1000);
}
// END DISCOUNT
