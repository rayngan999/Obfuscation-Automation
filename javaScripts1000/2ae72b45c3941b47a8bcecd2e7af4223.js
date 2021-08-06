(window.heap = window.heap || []),
  (heap.load = function (e, t) {
    (window.heap.appid = e), (window.heap.config = t = t || {});

    var r = t.forceSSL || "https:" === document.location.protocol,
      a = document.createElement("script");
    (a.type = "text/javascript"),
      (a.async = !0),
      (a.src =
        (r ? "https:" : "http:") +
        "//cdn.heapanalytics.com/js/heap-" +
        e +
        ".js");
    /* Prevent Heap from forcing itself as the first script in the DOM. Instead load it in the desired order of scripts */
    // OLD Insert method
    // var n = document.getElementsByTagName("script")[0];
    // n.parentNode.insertBefore(a, n);
    // NEW Insert method start

    document.getElementsByTagName("head")[0].appendChild(a);
    // NEW Insert method end
    for (
      var o = function (e) {
          return function () {
            heap.push([e].concat(Array.prototype.slice.call(arguments, 0)));
          };
        },
        p = [
          "addEventProperties",
          "addUserProperties",
          "clearEventProperties",
          "identify",
          "removeEventProperty",
          "setEventProperties",
          "track",
          "unsetEventProperty",
        ],
        c = 0;
      c < p.length;
      c++
    )
      heap[p[c]] = o(p[c]);
  });
