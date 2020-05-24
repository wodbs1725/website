let allButtons = document.querySelectorAll('button[id^=favbtn]'),
    favul = document.getElementById('favlist-content'),
    favulContent = document.getElementById('favlist-content'),
    showmemo = document.getElementsByClassName('list-box'),
    showBkm = document.getElementById('bookmarks'),
    showRbt = document.getElementById('removeName'),
    showRbt2 = document.getElementById('removebmk'),
    memocontents = document.getElementById('mainList');
// LocalStorage info //
const form = document.querySelector('.name-form'),
    memoForm = document.querySelector('.write-box')
    input = form.querySelector('input'),
    memoInput = memoForm.querySelector('.memo-text'),
    memobox = document.querySelector('.list-box'),
    greeting = document.querySelector('.name-greeting'),
    USER_NAME = 'currentUser',
    SHOW_CU = 'showing',
    USER_FAV = 'currentFav',
    USER_MEMO = 'currentMemo';
// 메모 버튼  기능//
document.getElementById('allDelBtn').addEventListener('click', delAllEle);
document.getElementById('selDelBtn').addEventListener('click', delSelected);

// 상단 버튼 기능 //
function info() {
  alert('로고를 클릭하면 해당 사이트로 이동하고 이름을 클릭하시면 북마크에 등록이 됩니다. 지우고 싶은 북마크는 해당 링크의 이름을 다시 눌러 지울 수 있습니다.');
}
function removebmk() {
  localStorage.removeItem(USER_FAV);
  location.reload();
}
function removeName() {
  localStorage.removeItem(USER_NAME);
  location.reload();
}
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

// 즐겨찾기 추가 및 제거 //
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

// 메모 제거 //
function delSelected() {
  const body = document.getElementById('mainList');
  var chkbox = document.querySelectorAll('#mainList .btn-chk');
  for(let i in chkbox) {
      if(chkbox[i].nodeType == 1 && chkbox[i].checked == true) {
          body.removeChild(chkbox[i].parentNode.parentNode);
      }
  }
  let memoParent = document.getElementById('mainList').innerHTML;
  localStorage.setItem(USER_MEMO, memoParent);
}
function delAllEle() {
  const list = document.getElementById('mainList');
  const listChild = list.children;
  for(let i=0; i < listChild.length; i++) {
      list.removeChild(listChild[i])
      i--;
      let memoParent = document.getElementById('mainList').innerHTML;
      localStorage.setItem(USER_MEMO, memoParent);
  }
}

// 메모 추가 //
function addMemo() {
  event.preventDefault();
  if (!memoInput.value) {
    alert('내용을 입력해주세요!');
    memoInput.focus();
    return false;
  }
  const tr = document.createElement('tr');
  const input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  input.setAttribute('class', 'btn-chk');

  const td01 = document.createElement('td');
  td01.appendChild(input);
  tr.appendChild(td01);

  const td02 = document.createElement('td');
  td02.innerHTML = memoInput.value;
  tr.appendChild(td02);

  document.getElementById('mainList').appendChild(tr);
  memoInput.value = '';
  memoInput.focus();

  let memoParent = document.getElementById('mainList').innerHTML;
  localStorage.setItem(USER_MEMO, memoParent);
}

// 메모 불러오기 //
function loadMemo() {
    let memoLists = localStorage.getItem(USER_MEMO)
    memocontents.innerHTML = memoLists;
    memoForm.addEventListener('submit', addMemo);
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
  greeting.innerText = `안녕하세요, ${text}님!`;
  memobox.style.display = 'block';
  showBkm.style.display = 'block';
  showRbt.style.display = 'inline-block';
  showRbt2.style.display= 'inline-block';
  loadFav();
  loadMemo();
}

// 이름 저장 //
function saveName(text) {
  localStorage.setItem(USER_NAME, text);
}

// 이름 입력 //
function handleName() {
  event.preventDefault();
  const currentValue = input.value;
  greetingUser(currentValue);
  saveName(currentValue);
}

// 이름 묻기 //
function askUserName() {
  form.classList.add(SHOW_CU);
  form.addEventListener('submit', handleName);
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