// innerHTML을 활용한 동적 DOM 생성

const frame = document.querySelector("section");
const data = [
    { text: "title1", bg: "hotpink"},
    { text: "title2", bg: "aqua"},
    { text: "title3", bg: "orange"},
];

let tags = "";

// 배열을 반복돌면서 tags에 생성할 태그 문자열 쌓기
data.forEach((el) => {
    tags += `
    <article>
        <h1 class='tit' data-bg = ${el.bg}>${el.text}</h1>
    </article>
    `;
});

// section 요소 안에 최종적으로 DOM 생성
// console.log(tags);
frame.innerHTML = tags;

// aside라는 엘리먼트 노드를 직접 생성하고 클래스명, 텍스트 추가

// append로 동적 DOM 생성
// 기존 선택자 안쪽의 요소들을 유지하면서 뒤쪽에 새롭게 추가
// append의 인수값으로는 문자값이 아닌 실제 Element Node형태로 전달

const asideEl = document.createElement("aside");
asideEl.classList.add("modal");
asideEl.innerText = "Modal";

/*
console.dir(asideEl);
frame.append(asideEl);
*/
/*
const btnEl = document.createElement("button");
btnEl.innerText = "CLOSE";
asideEl.append(btnEl);
*/


asideEl.innerHTML = `

<div class='con'></div>
<button class ='btnClose'>CLOSE</button>
`;

// 자식요소까지 적용된 aside요소를 기존 자식 요소를 유지한 상태에서 추가
frame.append(asideEl);

/*
// aside 요소 안쪽의 복잡한 자식 요소 구조는 innerHTML로 생성

asideEl.innerText = `
<div class='con'></div>
<button class ='btnClose'>CLOSE</button>`;
*/


// 동적으로 생성된 요소에 이벤트 연결은 이벤트 위임처리
// 이벤트 위임: 항상 존재하는 body요소에 이벤트를 맡겼다가 위임처리
// 무조건 이벤트 타겟을 설정해줘야함
document.body.addEventListener('click', (e) => { 
    if (e.target.className === 'tit') {
        document.body.append(asideEl);
        // 추가
        asideEl.style.backgroundColor = e.target.getAttribute("data-bg");

    }
});

// DOM요소를 완전히 제거 (DOM트리에서 제거)
document.body.addEventListener("click", (e) => {
    if(e.target.className === "btnClose") {
        document.querySelector(".modal").remove();
    }
});



// 분홍box의 close 누르면 보이지 않음 →  h태그 클릭하면 다시 보임