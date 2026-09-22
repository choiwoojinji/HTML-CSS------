const title = document.querySelector('#title');
console.log(title);
// #title이라는건 id = title 동일하다 

const items = document.querySelectorAll('#wrap article');
for(let item of items) {
    console.log(item);
}

// for in 느낌으로 for of 문을 사용해 item변수에 넣고 출력합니다 

for(let i=0; i<items.length; i++){
    console.log(items[i])
}

// 위아래 동일한 for문 입니다     

const list = document.querySelector('.list');
const items2 = list.children;

console.log(items2);
console.log(items2[0]);
console.log(items2[1]);
console.log(items2[2]);
console.log(items2[3]);

const item2 = document.querySelector('.item2');
console.log(item2.parentElement);

// .item2 에 부모요소 부모클래스가 나옴 ul class list 부모요소를 뽑는것

const li = document.querySelector('li')
console.log(li.closest('main'))

const item3 = document.querySelector('.item3')
console.log(item3.previousElementSibling)
console.log(item3.nextElementSibling)

// 36줄 → item2 요소가 나옴 (이전 형제)
// 37줄 → item4 요소가 나옴 (다음 형제)
// previousElementSibling = 이전(previous) 요소(element) 형제(sibling) → 바로 앞 형제
// nextElementSibling = 다음(next) 요소(element) 형제(sibling) → 바로 뒤 형제

const box = document.querySelector('#box');
box.addEventListener('click', () => {
    box.classList.toggle('rotated');
});

// #box를 클릭할 때마다 addEventListener로 'click' 이벤트를 감지합니다
// classList.toggle('rotated')는 rotated 클래스가 없으면 추가하고, 있으면 제거합니다
// style13.css의 #box.rotated 규칙과 transition 덕분에 클릭할 때마다 부드럽게 회전합니다

