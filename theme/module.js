function getPageElement(className) {
  let pages = document.getElementsByClassName("page");
  for (let x = 0; x < pages.length; x++) {
    let page = pages[x];
    if (page.classList.contains(className)) return page;
  }
  return null;
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setPage(className) {
  let pages = document.getElementsByClassName("page");
  for (let x = 0; x < pages.length; x++) {
    let page = pages[x];
    page.style.display = "none";
  }
  let pageEl = getPageElement(className);
  pageEl.style.display = "block";

  if (className == "home") {
    updateMenu();
  } else {
    var myClass = className;
    let navList = document.querySelector(".app-bar-menu");
    updateMenu();
    let c = navList.innerHTML;
    for (let i = 1; i < 5; i++) {
      let unitLink1 = "/pages/" + myClass + "_unit-" + i + "_lesson-1.html";
      let unitLink2 = "/pages/" + myClass + "_unit-" + i + "_lesson-2.html";
      let unitLink3 = "/pages/" + myClass + "_unit-" + i + "_lesson-3.html";
      c = c + ' <li><a href="#" class="dropdown-toggle">Unit ' + i + '</a><ul class="d-menu" data-role="dropdown"><li><a href="' + unitLink1 + '">Lesson 1</a></li><li><a href="' + unitLink2 + '">Lesson 2</a></li><li><a href="' + unitLink3 + '">Lesson 3</a></li></ul></li>';
      navList.innerHTML = c;
    }
  }

}

function updateMenu() {

  let navList = document.querySelector(".app-bar-menu");
  c = "<li><a href=\".\">Home</a></li>"
  navList.innerHTML = c;
}