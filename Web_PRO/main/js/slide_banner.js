const outer = document.querySelector('#outer');
const innerList = document.querySelector('#inner-list');
const inners = document.querySelectorAll('.inner');
//html에서의 DOM 객체들 id와 class를 통해 불러옴
let currentIndex = 0;
//이미지의 인덱스 표시

inners.forEach((inner) => {
    inner.style.width = `${outer.clientWidth}px`;
})
//각각의 사진 요소들 width값 설정 해주고 출력
innerList.style.width = `${outer.clientWidth * inners.length}px`;

const buttonLeft = document.querySelector('#button-left');
const buttonRight = document.querySelector('#button-right');
//버튼 DOM 가져옴
buttonLeft.addEventListener('click', () => {
    currentIndex--;
    currentIndex = currentIndex < 0 ? 0 : currentIndex;

    innerList.style.marginLeft = `-${outer.clientWidth * currentIndex}px`;

    clearInterval(interval);
    interval = getInterval();
    //자연스럽게 화면을 넘어가게 해줌
});
//좌측 버튼 클릭 했을 경우 인덱스 -1 하고 만약 0을 보다 작으면 0으로 초기화

buttonRight.addEventListener('click', () => {
    currentIndex++;
    currentIndex = currentIndex >= inners.length ? inners.length - 1 : currentIndex;

    innerList.style.marginLeft = `-${outer.clientWidth * currentIndex}px`;

    clearInterval(interval);

    interval = getInterval();
});
//우측 버튼 클릭 했을 경우 인덱스 +1 하고 만약 사진의 최대 개수를 넘었다면 다시 그 개수로 초기화
const getInterval = () => {
    return setInterval(() => {
        currentIndex++;
        currentIndex = currentIndex >= inners.length ? 0 : currentIndex;
        innerList.style.marginLeft = `-${outer.clientWidth * currentIndex}px`;

    }, 8000);
}
//8초 동안 보여주고 자연 스럽게 화면 넘어가게 해줌 (최대 개수를 넘었다면 0으로 처음으로 돌아가게 함)
let interval = getInterval();