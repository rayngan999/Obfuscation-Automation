ï»¿try{var e='', i="https://monitor.clickcease.com/conversions/api/TrackConversion",a=decodeURI(document.referrer),n={referrer:a,Fp:e,timeSpent:ccConVal},r=new XMLHttpRequest;r.open("POST",i,!0),r.setRequestHeader("Content-Type","application/json;charset=UTF-8"),r.send(JSON.stringify(n))}catch(err){var uri="https://monitor.clickcease.com/conversions/api/TrackConversion",ref=decodeURI(document.referrer),data={referrer:ref,Fp:0},xmlHttp=new XMLHttpRequest;xmlHttp.open("POST",uri,!0),xmlHttp.setRequestHeader("Content-Type","application/json;charset=UTF-8"),xmlHttp.send(JSON.stringify(data))}