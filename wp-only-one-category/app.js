(function () {
  'use strict'
  var $categorychecklist, $categoryAll
  // Check whether it's the target page
  $categorychecklist = document.getElementById('categorychecklist')
  if (!$categorychecklist) return
  // Remove tabs
  [
    document.getElementById('category-tabs'),
    document.getElementById('category-pop')
  ].forEach(function (el) {
    el.parentNode.removeChild(el)
  })
  // Adjust style
  $categoryAll = document.getElementById('category-all')
  $categoryAll.style.display = 'block'
  $categoryAll.style.border = '0'
  $categoryAll.style.backgroundColor = 'transparent'
  // From checkbox to radio
  Array.prototype.slice.call(
    $categorychecklist.querySelectorAll('[type="checkbox"]')
  ).forEach(function (el) {
    el.setAttribute('type', 'radio')
  })
})();
