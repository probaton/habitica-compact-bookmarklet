javascript:(function() {
  var url = 'https://habitica.com/';
  if (!document.location.href.startsWith(url)) {
    window.location.href = url;
    return;
  }
  var navItems;
  var interval = setInterval(() => {
    navItems = document.querySelectorAll('li.topbar-item.droppable');
    if (navItems) {
      try {
        navItems[navItems.length - 1].remove();
        document.querySelector('.reward').remove();
        var cols = document.querySelectorAll('div.tasks-column');
        for (var i = 0; i < cols.length; i++) {
          cols[i].style.flex = '0 0 33%';
          cols[i].style['max-width'] = '33%';
        }
      } finally {
        clearInterval(interval);
      }
    }
  }, 200);
})();