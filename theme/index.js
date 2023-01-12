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

var myClass = getCookie("myClass");

if(myClass == ""){
  Metro.dialog.create({
    title:"Welcome to Mollas",
    content:"<p>Welcome to our arabic website, please select your class and update settings.</p>",
    actions: [
      {
        caption: "Ok",
        cls: "js-dialog-close success rounded",
        onclick: () => setPage("settings")
      }
    ]
  });
};

      
      
let navList = document.querySelector(".app-bar-menu");
for(let i = 1; i < 5; i++){
  let c = navList.innerHTML;
  let unitLink1 = "/pages/class-"+myClass+"-unit-"+i+"lesson-1.html";
  let unitLink2 = "/pages/class-"+myClass+"-unit-"+i+"lesson-2.html";
  let unitLink3 = "/pages/class-"+myClass+"-unit-"+i+"lesson-3.html";
  c = c + ' <li><a href="#" class="dropdown-toggle">Unit '+i+'</a><ul class="d-menu" data-role="dropdown"><li><a href="'+unitLink1+'">Lesson 1</a></li><li><a href="'+unitLink2+'">Lesson 2</a></li><li><a href="'+unitLink3+'">Lesson 3</a></li></ul></li>';
  navList.innerHTML = c;
}

setPage("home");

const classSelector = document.querySelector('.class-selector');

classSelector.addEventListener('change',(selected) => {
  setCookie("myClass",selected+"");
});


setClassSelect(myClass);