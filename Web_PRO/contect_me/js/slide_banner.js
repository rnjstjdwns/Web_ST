const outer = document.querySelector('#outer');
const innerList = document.querySelector('#inner-list');
const inners = querySelectorAll('.inner');
let currentIndex = 0;


inners.forEach((inner) => {
    inner.style.width = `${outer.clientWidth}px`;
})

innerList.style.width = `${outer.clientWidth * inners.length}px`;
