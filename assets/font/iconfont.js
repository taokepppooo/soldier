;(window._iconfont_svg_string_3671074 =
  '<svg><symbol id="icon-right" viewBox="0 0 1024 1024"><path d="M436.053333 308.053333a32 32 0 0 1 45.226667 0L685.226667 512l-203.946667 203.946667a32 32 0 1 1-45.226667-45.226667L594.773333 512l-158.72-158.72a32 32 0 0 1 0-45.226667z"  ></path></symbol><symbol id="icon-left" viewBox="0 0 1024 1024"><path d="M587.946667 308.053333a32 32 0 0 0-45.226667 0L338.773333 512l203.946667 203.946667a32 32 0 1 0 45.226667-45.226667L429.226667 512l158.72-158.72a32 32 0 0 0 0-45.226667z"  ></path></symbol></svg>'),
  (function (n) {
    var t = (t = document.getElementsByTagName('script'))[t.length - 1],
      e = t.getAttribute('data-injectcss'),
      t = t.getAttribute('data-disable-injectsvg')
    if (!t) {
      var o,
        i,
        a,
        d,
        c,
        s = function (t, e) {
          e.parentNode.insertBefore(t, e)
        }
      if (e && !n.__iconfont__svg__cssinject__) {
        n.__iconfont__svg__cssinject__ = !0
        try {
          document.write(
            '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>'
          )
        } catch (t) {
          console && console.log(t)
        }
      }
      ;(o = function () {
        var t,
          e = document.createElement('div')
        ;(e.innerHTML = n._iconfont_svg_string_3671074),
          (e = e.getElementsByTagName('svg')[0]) &&
            (e.setAttribute('aria-hidden', 'true'),
            (e.style.position = 'absolute'),
            (e.style.width = 0),
            (e.style.height = 0),
            (e.style.overflow = 'hidden'),
            (e = e),
            (t = document.body).firstChild
              ? s(e, t.firstChild)
              : t.appendChild(e))
      }),
        document.addEventListener
          ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
            ? setTimeout(o, 0)
            : ((i = function () {
                document.removeEventListener('DOMContentLoaded', i, !1), o()
              }),
              document.addEventListener('DOMContentLoaded', i, !1))
          : document.attachEvent &&
            ((a = o),
            (d = n.document),
            (c = !1),
            r(),
            (d.onreadystatechange = function () {
              'complete' == d.readyState && ((d.onreadystatechange = null), l())
            }))
    }
    function l() {
      c || ((c = !0), a())
    }
    function r() {
      try {
        d.documentElement.doScroll('left')
      } catch (t) {
        return void setTimeout(r, 50)
      }
      l()
    }
  })(window)
