// setCookie("myClass","",10);

var myClass = getCookie("myClass");
if(myClass == null) myClass = "10";

if(myClass == ""){
  Metro.dialog.create({
    title:"Welcome",
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

      
      
updateMenu();

setPage("home");

const classSelector = document.querySelector('.class-selector');

classSelector.value = myClass;
classSelector.addEventListener('change',(event) => {
  setCookie("myClass",event.target.value)
  updateMenu();
})
