(function(){
function run(n,t,i){var a=new XMLHttpRequest;a.onreadystatechange=function(){if(this.readyState===4&&this.status===200){var t=n.createElement("script");t.type="text/javascript";t.innerHTML="(function() { var load = function() {"+a.responseText+";\n return this;}.bind({}); var _ = load();__CMD__ })()".replace(/__CMD__/g,i);(n.head||n.documentElement).appendChild(t)}};a.onerror=function(){};a.open("GET",t,!0);a.send()}
function add(t,n){var i=t.createElement("script");i.type="text/javascript";i.src=n;i.async=!0;(t.head||t.documentElement).appendChild(i)}
run(document, 'https://cdn.pbstck.com/monitoring-828a61c.js', '_.monitoring.pubstackAutoconfig(' + JSON.stringify({"endpoint":{"script":"https://cdn.pbstck.com/monitoring-828a61c.js","gateway":"https://intake.pbstck.com/v1/intake"},"scopeId":"2651e742-bc26-4d66-9c10-8bae874f7caa","tagId":"d07ff09d-dfe7-427f-96b8-b7091500c9a5","viewabilityEnabled":true,"activation":{"pbjs":[{"global":"pbjs","adUnitNames":".*"}],"sdk":{"generic":false,"pbjs":false}},"bootstrapTime":1627929602475,"bootstrapVersion":"undefined","device":"desktop","browserName":"Firefox","browserVersion":"52","osName":"Mac OS X","osVersion":"10","country":"HK"}) + ');');
})()