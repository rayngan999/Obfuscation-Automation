// window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=t.forceSSL||"https:"===document.location.protocol,a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=(r?"https:":"http:")+"//cdn.heapanalytics.com/js/heap-"+e+".js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(a,n);for(var o=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","removeEventProperty","setEventProperties","track","unsetEventProperty"],c=0;c<p.length;c++)heap[p[c]]=o(p[c])};

// load synchronously after heap.js has loaded via separate file
window.cc("Load sdc-heap (this occurs after heap library was loaded.)", "run");
heap.load(window.heap_app_id, window.heap_app_options);

if (window.heap && !!user_uuid) {
  try {
    window.heap.identify(user_uuid);
  } catch (err) {
    //- if Heap's identify API fails, do nothing; don't want this to break other javascript on the page.
    //- Note that the identify API call will only produce additional network activity if the user has not yet
    //- been identified.
    console.error(
      "Unable call heap.identify() with logged user",
      user_uuid,
      err
    );
  }
}

if (window.heap && window.optimizely) {
  try {
    // Create an object to store experiment names and variations
    var props = {};

    // This covers both A/B Experiments and Personalization
    var camState = window.optimizely
      .get("state")
      .getCampaignStates({ isActive: true });
    for (x in camState) {
      if (camState.isInCampaignHoldback != true) {
        props[camState[x].id] = camState[x].variation.name;
      } else {
        props[camState[x].id] = "Campaign Hold Back";
      }
    }

    heap.addUserProperties(props);
  } catch (err) {
    console.error(
      "Unable to associate Optimizely Campaigns with Heap Properties",
      err
    );
  }
}
