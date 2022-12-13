// 헤더

let header = document.querySelector("header");
let headerHeight = header.offsetHeight;

window.onscroll = function () {
  let windowTop = window.scrollY;
  	// 스크롤 세로값이 헤더높이보다 크거나 같으면 
	// 헤더에 클래스 'drop'을 추가한다
  if (windowTop >= headerHeight) {
    header.classList.add("drop");
  } 
  // 아니면 클래스 'drop'을 제거
  else {
    header.classList.remove("drop");
  }
};

// 메뉴
const menuList = document.querySelector('.navi li');
const subMenu = document.querySelector('.sub');
const subBg = document.getElementById('#subBg');

function mouseoverEvent() {
  // subBg.classList.slidesToShow(0);
  // subMenu.classList.slidesToShow(0);
}
menuList.addEventListener('mouseover', mouseoverEvent);

// lang
const lang = document.querySelector('.lang');
const langMenu = document.querySelector('.langMenu');

function langClickEvent() {
  langMenu.classList.toggle('active');
}

lang.addEventListener('click', langClickEvent);

// ham
let hamMenu = document.querySelector('.hamMenu');
let hamLineFir = document.querySelector('.ham');
let hamLineSec = document.querySelector('.ham::before');
let hamLineThu = document.querySelector('.ham::after');

function hamClickEvent() {
  // hamLineFir.style.backgroundColor = 'transparent';
  // hamLineSec.style.transform = "rotate(45deg)"
  // hamLineThu.style.transform = "rotate(-45deg)"
}

hamMenu.addEventListener('click', hamClickEvent);


// slide : section1
let swiper = new Swiper(".mySwiper", {
  slidesPerView : 6,
  spaceBetween: 8,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// section01 hover event
let slideCardBox = document.querySelectorAll('.sec1CardBox');
let slideP = document.querySelectorAll('.sec1Name');


slideP.forEach(function(e){
  let data1 = e.getAttribute('data-name'); // data-name속성값 가져오기
  let data2 = e.innerHTML; // 내용가져오기

  e.addEventListener('mouseover',function() {
      e.innerHTML = data1; // 내용변경하기
  });
  e.addEventListener('mouseout',function() {
      e.innerHTML = data2;
  });
})



// section 02
let swiper2 = new Swiper(".mySwiper2", {
  slidesPerView : 6,
  spaceBetween: 8,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


/* 1. hover 됐을 때 카드 슬라이드 업 */
/* 2. 첫번째 카드를 하이트를 0을 줘서 없애는 식으로 아래 두번째 카드를 보이게 만들기 */

// let sec2Card1 = querySelectorAll('.default');
// let sec2Card2 = querySelectorAll('.hover');

// function slideUp() {
//   sec2Card1.style.display = "none";
//   sec2Card2.style.display = "block";
// }

// function slideDown() {
//   sec2Card1.style.display = "block";
//   sec2Card2.style.display = "none";
// }

// sec2Card1.addEventListener("mouseover", slideUp);
// sec2Card1.addEventListener("mouseout", slideDown);

