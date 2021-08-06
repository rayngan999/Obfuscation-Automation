'use strict'
var baseUrl = 'https://cdn.appconsent.io/tcf2/28.4.0'
var head = document.getElementsByTagName('head')[0]
var script = document.createElement('script')
script.type = 'text/javascript'
script.src = baseUrl + '/core.bundle.js'
head.appendChild(script)
