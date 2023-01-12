function getPageElement(className){
  let pages = document.getElementsByClassName("page");
  for(let x = 0; x < pages.length; x ++){
    let page = pages[x];
    if(page.classList.contains(className)) return page;
  }
  return null;
}

function setPage(className){
  let pages = document.getElementsByClassName("page");
  for (let x = 0; x < pages.length; x++) {
    let page = pages[x];
    page.style.display = "none";
  }
  let pageEl = getPageElement(className);
  pageEl.style.display = "block";
  
}
