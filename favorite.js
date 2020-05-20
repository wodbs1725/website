// 각각 다른 버튼 클릭 //
let allButtons = document.querySelectorAll('button[id^=favbtn]'),
    favul = document.getElementById('favlist-content'),
    favulContent = document.getElementById('favlist-content'),
    showBkm = document.getElementById('bookmarks');
    showRbt = document.getElementById('removeName');
// 사용자 이름 //
const form = document.querySelector('.name-form'),
    input = form.querySelector('input'),
    greeting = document.querySelector('.name-greeting'),
    USER_NAME = 'currentUser',
    SHOW_CU = 'showing',
    USER_FAV = 'currentFav';

// 웹사이트 즐겨찾기에 추가 //
function favWeb() {
  alert('Ctrl + D를 눌러 이 웹사이트를 즐겨찾기에 추가하실 수 있습니다');
}

// 즐겨찾기에서 삭제 //
function eraseBmks() {
  let eraseBtn = favul.querySelectorAll('button[class^=favbtn]');
  for (let j = 0; j < eraseBtn.length; j += 1) {
      eraseBtn[j].addEventListener('click', function(event) {
      let eraseclicked = this.parentElement;
      eraseclicked.remove();
      let favul = document.getElementById('favlist-content')
      // console.log(favul);
      localStorage.setItem(USER_FAV, eval(JSON.stringify(favul.innerHTML)));
      });
  }
}

// 버튼 클릭 상호작용 //
for (let i = 0; i < allButtons.length; i += 1) {
    allButtons[i].addEventListener('click', function() {
        let clicklink = this.parentElement,
            cloneli = clicklink.cloneNode(true);
        // console.log('you clicked:', clicklink.parentElement, 'you clicked:', favul);
        // 즐겨찾기에 클릭한 링크가 있으면 경고 //
        if ((favul.innerText).indexOf(clicklink.innerText) > -1) {
        alert('이미 즐겨찾기에 추가된 링크입니다');
        // 즐겨찾기에 클릭한 링크가 없으면 링크 추가 //
        } else {
        favul.appendChild(cloneli);
        // console.log(favul);
        localStorage.setItem(USER_FAV, eval(JSON.stringify(favul.innerHTML)));
        eraseBmks();
        }
    });  
}

// 즐겨찾기 불러오기 //
function loadFav() {
    let favlists = localStorage.getItem(USER_FAV);
    favul.innerHTML = favlists;
    eraseBmks();
}

// 사용자 이름 가져오기 //
function greetingUser(text) {
  form.classList.remove(SHOW_CU);
  greeting.classList.add(SHOW_CU);
  greeting.innerText = `안녕하세요, ${text}님`;
  showBkm.style.display = 'block';
  showRbt.style.display = 'inline-block';
  loadFav();
}

// 이름 지우기 //
function removeName() {
  localStorage.removeItem(USER_NAME);
  location.reload();
}

// 이름 저장 //
function saveName(text) {
  localStorage.setItem(USER_NAME, text);
}

// 이름 입력 //
function handleSubmit() {
  event.preventDefault();
  const currentValue = input.value;
  greetingUser(currentValue);
  saveName(currentValue);
}

// 이름 묻기 //
function askUserName() {
  form.classList.add(SHOW_CU);
  form.addEventListener('submit', handleSubmit);
}

// 정보 불러오기 //
function loadInfo() {
  const currentUser = localStorage.getItem(USER_NAME);
  if(currentUser === null){
      askUserName();
  } else {
      greetingUser(currentUser);
  }
}

// 실행 //
function init() {
  loadInfo();
}
init();