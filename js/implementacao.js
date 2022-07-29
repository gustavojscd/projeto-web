window.onhashchange = function(e) {
  const oldURL = e.oldURL.split('#')[1]
  const newURL = e.newURL.split('#')[1]
  console.log(oldURL, newURL)
  const oldLink = document.querySelector(`.menu-nav a[href='#${oldURL}']`)
  const newLink = document.querySelector(`.menu-nav a[href='#${newURL}']`)
  const oldLinkAside = document.querySelector(`.aside-header a[href='#${oldURL}']`)
  const newLinkAside = document.querySelector(`.aside-header a[href='#${newURL}']`)
  oldLink && oldLink.classList.remove('selected')
  newLink && newLink.classList.add('selected')
  oldLinkAside && oldLinkAside.classList.remove('selected')
  newLinkAside && newLinkAside.classList.add('selected')
}