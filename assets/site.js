/* Exhibit Binder Studio: shared header + footer.
   Every page has an empty <header id="site-header"> and
   <footer id="site-footer">; this fills both in, so the nav
   and footer markup live in exactly one place. */
(function () {
  var NAV_LINKS = [
    { href: 'index.html', label: 'Home', page: 'home' },
    { href: 'how-it-works.html', label: 'How It Works', page: 'how-it-works' },
    { href: 'features.html', label: 'Features', page: 'features' },
    { href: 'security.html', label: 'Security', page: 'security' }
  ];

  function renderHeader(activePage) {
    var links = NAV_LINKS.map(function (link) {
      var cls = link.page === activePage ? ' class="active"' : '';
      return '<a href="' + link.href + '"' + cls + '>' + link.label + '</a>';
    }).join('');

    return (
      '<div class="wrap">' +
        '<nav>' +
          '<a class="brand" href="index.html"><img class="brand-logo" src="assets/img/logo-nav.png" alt="Exhibit Binder Studio"></a>' +
          '<div class="navlinks">' + links + '</div>' +
          '<div class="navcta">' +
            '<a class="btn btn-ghost" href="contact.html">Contact</a>' +
            '<a class="btn btn-primary" href="contact.html">Try Exhibit Binder Studio</a>' +
          '</div>' +
        '</nav>' +
      '</div>'
    );
  }

  var SOCIAL_LINKS = [
    { href: '#', label: 'X', icon: 'icon-x.png' },
    { href: '#', label: 'YouTube', icon: 'icon-youtube.png' },
    { href: '#', label: 'TikTok', icon: 'icon-tiktok.png' },
    { href: '#', label: 'Reddit', icon: 'icon-reddit.png' }
  ];

  function renderFooter() {
    var social = SOCIAL_LINKS.map(function (s) {
      return '<a href="' + s.href + '" class="fsocial" aria-label="' + s.label + '"><img src="assets/img/' + s.icon + '" alt="' + s.label + '"></a>';
    }).join('');

    return (
      '<div class="wrap">' +
        '<div class="fgrid2">' +
          '<div><img class="flogo" src="assets/img/logo-footer.png" alt="Exhibit Binder Studio"></div>' +
          '<div class="fcols">' +
            '<div class="fcol"><a href="how-it-works.html">How It Works</a><a href="features.html">Features</a><a href="security.html">Security</a></div>' +
            '<div class="fcol"><a href="contact.html">Contact</a><a href="contact.html">Pricing</a><a href="#">Privacy Policy</a><a href="#">Terms of Service</a></div>' +
          '</div>' +
        '</div>' +
        '<div class="fbar"><span>&copy; 2026 Exhibit Binder Studio. All rights reserved.</span><div class="fsocials">' + social + '</div><span>College Produce, Inc. | 100 Biscayne Blvd, Miami, FL 33132</span></div>' +
      '</div>'
    );
  }

  function mount() {
    var headerEl = document.getElementById('site-header');
    var footerEl = document.getElementById('site-footer');
    var activePage = document.body.getAttribute('data-page') || '';
    if (headerEl) headerEl.innerHTML = renderHeader(activePage);
    if (footerEl) footerEl.innerHTML = renderFooter();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
