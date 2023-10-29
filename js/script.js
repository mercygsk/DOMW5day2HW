// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about' },
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
  
  let showingSubMenu = false
  let mainEl = document.querySelector("main")
  mainEl.style.background='var(--main-bg)'
  mainEl.innerHTML = "<h1>SEI Rocks!</h1>"
  mainEl.classList.add('flex-ctr')
  
  let topMenuEl = document.getElementById("top-menu")
  topMenuEl.style.height = "100%"
  topMenuEl.style.background='var(--top-menu-bg)'
  topMenuEl.classList.add('flex-around')
  
  for(i=0; i < menuLinks.length; i++)
  {
      const newEl = document.createElement('a')
      newEl.classList.add('anc-link')
      newEl.setAttribute('href', menuLinks[i].href)
      newEl.append(menuLinks[i].text)
      document.getElementById("top-menu").appendChild(newEl)
  }
  
  
  let subMenuEl = document.getElementById("sub-menu")
  subMenuEl.style.height = "100%"
  subMenuEl.style.background='var(--sub-menu-bg)'
  subMenuEl.classList.add('flex-around')
  subMenuEl.style.position = "absolute"
  subMenuEl.style.top = "0"
  
  const topMenuLinks = document.getElementById('top-menu').querySelectorAll('a')
  
  const topMenuEll = document.getElementById("top-menu")
  
  topMenuEll.addEventListener("click", function(event) {
    event.preventDefault();
    
    if(event.target.tagName !== 'A') {
      return;
    }
    // console.log(event.target.tagName);
    // console.log(event.target)
    // console.log(event.target.textContent);
  
    if(event.target.classList.contains('active')) {
      event.target.classList.remove('active');
      showingSubMenu = false;
      subMenuEl.style.top = 0;
      return;
    }
  
    topMenuLinks.forEach(function(link) {
      link.classList.remove('active');
    });
    event.target.classList.add('active');
    if(event.target.text !== 'about')
    {
      mainEl.innerHTML = "<h1>" + `${event.target.textContent}` + "</h1>";
      showingSubMenu = true;
      //console.log(topMenuLinks);
      if(showingSubMenu) {
        buildSubMenu(event.target.text)
        console.log(subMenuEl)
        subMenuEl.style.top = "100%"
        //showingSubMenu = false;
      }
      else {
        subMenuEl.style.top = "0";
        subMenuEl.innerHTML = '';
  
      }
    }
    else {
      mainEl.innerHTML = "<h1>" + `${event.target.textContent}` + "</h1>";
    }
  });
  
  function buildSubMenu(x){
    subMenuEl.innerHTML = '';
    for(i=0; i < menuLinks.length; i++)
    {
      if(x == menuLinks[i].text)
      {
        //console.log(menuLinks[i].subLinks)
        for(j=0; j < menuLinks[i].subLinks.length; j++)
        {
          //console.log(menuLinks[i].subLinks[j].href)
          const newSubEl = document.createElement('a')
          newSubEl.classList.add('anc-sub-link')
          newSubEl.setAttribute('href', menuLinks[i].subLinks[j].href)
          newSubEl.append(menuLinks[i].subLinks[j].text)
          document.getElementById("sub-menu").appendChild(newSubEl)
        }
      }
    }
  }
  
  subMenuEl.addEventListener("click", function(event) {
    event.preventDefault();
    
    if(event.target.tagName !== 'A') {
      return;
    }
    //console.log(event.target.tagName);
    //console.log(event.target)
    console.log(event.target.textContent);
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    topMenuLinks.forEach(function(link) {
      link.classList.remove('active');
    });
    mainEl.innerHTML = "<h1>" + `${event.target.textContent}` + "</h1>";
  
  });
  console.log(mainEl)
  console.log(topMenuEl)
  console.log(subMenuEl)
  console.log(topMenuLinks)