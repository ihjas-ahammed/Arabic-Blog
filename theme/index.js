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

var myClass = "10";

if(myClass == ""){
  Metro.dialog.create({
    title:"Class",
    content:"<p>Select your class</p>",
    actions: [
      {
        caption: "10",
        cls: "js-dialog-close",
        onclick: () => setCookie("myClass","10",10)
      },
      {
        caption:"+1",
        cls: "js-dialog-close",
        onclick: () => setCookie("myClass","11",10)
      },
      {
        caption: "+2",
        cls: "js-dialog-close",
        onclick: () => setCookie("myClass", "12", 10)
      }
    ]
  });
};

      
      
let navList = document.querySelector(".app-bar-menu");
for(let i = 1; i < 5; i++){
  let c = navList.innerHTML;
  c = c + ' <li><a href="#" class="dropdown-toggle">Unit '+i+'</a><ul class="d-menu" data-role="dropdown"><li><a href="#">Lesson 1</a></li><li><a href="#">Lesson 2</a></li><li><a href="#">Lesson 3</a></li></ul></li>';
  navList.innerHTML = c;
}
