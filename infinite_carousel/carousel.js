// 이전 버튼
const $prevBtn = document.querySelector(".prev");
// 다음 버튼
const $nextBtn = document.querySelector(".next");
// 캐러셀 컨테이너
const $carouselWrapper = document.querySelector(".ad-item-container");
// 첫번째 캐러셀 깊은 복사
const $firstcarousel = $carouselWrapper.firstElementChild.cloneNode(true);
// 마지막 캐러셀 깊은 복사
const $lastcarousel = $carouselWrapper.lastElementChild.cloneNode(true);
// 첫번째 캐러셀 복제해서 전체 캐러셀 맨 뒤에 붙인다
$carouselWrapper.appendChild($firstcarousel);
// 마지막 캐러셀 복제해서 전체 캐러셀 맨 앞에 붙인다
$carouselWrapper.insertAdjacentElement("afterbegin", $lastcarousel);

const slideSpeed = 300;
const carouselWidth = 500;
let isMove = false;
let slideIndex = 2;

// 이전 슬라이드
$prevBtn.onclick = _.throttle(() => {
  slideIndex--;
  if (slideIndex === 1) {
    setTimeout(() => {
      $carouselWrapper.style.transition = "none";
      $carouselWrapper.style.transform = `translateX(-2500px)`;
      slideIndex = 7;
      slideIndex--;
    }, slideSpeed);
  }
  $carouselWrapper.style.transition = `${slideSpeed}ms`;
  $carouselWrapper.style.transform = `translateX(-${carouselWidth * (slideIndex - 1)}px)`;
}, 500);

// 다음 슬라이드
$nextBtn.onclick = _.throttle(() => {
  slideIndex++;
  if (slideIndex === 7) {
    setTimeout(() => {
      $carouselWrapper.style.transition = "none";
      $carouselWrapper.style.transform = `translateX(-500px)`;
      slideIndex = 1;
      slideIndex++;
    }, slideSpeed);
  }
  $carouselWrapper.style.transition = `${slideSpeed}ms`;
  $carouselWrapper.style.transform = `translateX(-${carouselWidth * (slideIndex - 1)}px)`;
}, 500);
