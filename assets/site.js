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
          '<a class="brand" href="index.html"><span class="logo-mark">EB</span> Exhibit Binder Studio</a>' +
          '<div class="navlinks">' + links + '</div>' +
          '<div class="navcta">' +
            '<a class="btn btn-ghost" href="contact.html">See Pricing</a>' +
            '<a class="btn btn-primary" href="contact.html">Try Exhibit Binder Studio</a>' +
          '</div>' +
        '</nav>' +
      '</div>'
    );
  }

  function renderFooter() {
    return (
      '<div class="wrap">' +
        '<div class="fgrid2">' +
          '<div><div class="fbrand">Exhibit Binder Studio</div><div class="ftag">Numbered. Stamped. Filed.</div></div>' +
          '<div class="fcols">' +
            '<div class="fcol"><h5>PRODUCT</h5><a href="how-it-works.html">How It Works</a><a href="features.html">Features</a><a href="security.html">Security</a></div>' +
            '<div class="fcol"><h5>COMPANY</h5><a href="contact.html">Contact</a><a href="contact.html">Pricing</a><a href="#">Privacy Policy</a><a href="#">Terms of Service</a></div>' +
          '</div>' +
        '</div>' +
        '<div class="fbar"><span>&copy; 2026 Exhibit Binder Studio. All rights reserved.</span><span>College Produce, Inc. | 100 Biscayne Blvd, Miami, FL 33132</span></div>' +
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
