 var pub_id = pub_id ?? 44; var config_id = config_id ?? 'config-1'; var rand = rand ?? 2; var country = country ?? 'HK';  
  var slots_array = [];
  var domain_op = window.location.hostname;	
  var queryUrl   = window.location.href;	  
  var loggerObject = {};
  
  String.prototype.hashCode = function() 
  {
	  var hash = 0, i, chr;
	  if (this.length === 0) return hash;
	  for (i = 0; i < this.length; i++)
	  {
		chr   = this.charCodeAt(i);
		hash  = ((hash << 5) - hash) + chr;
		hash |= 0;
	  }
	  return hash;
  };
   
  var pv_id = Date.now() +"-"+ Math.random().toString(36).substr(2, 13)+"-"+ Math.random().toString(36).substr(2, 13) + "-" + queryUrl.hashCode();

  var cachebuster   = pv_id;
  
  
  var query_path_parts = queryUrl?.split(domain_op)?.[1]?.split("?")?.[0]?.replace("/^/+|/+$/g","")?.split("/")?.filter(function(query_part) { return (query_part.length > 0) }) ?? ['','','',''];
  var query_parts_to_remove = query_path_parts.length - 4;
  if (query_parts_to_remove > 0)
  {
	var t;
    for (i = 0 ; i < query_parts_to_remove; ++i)
    {
        t = query_path_parts.shift();
        query_path_parts[0] = t+"/"+query_path_parts[0];
    }
  }
  else
  {
	for (i = 0 ; i < Math.abs(query_parts_to_remove); ++i)
    {
        query_path_parts.push("");
    }
  }
  var placeholder1 = query_path_parts[0];
  var placeholder2 = query_path_parts[1];
  var placeholder3 = query_path_parts[2];
  var placeholder4 = query_path_parts[3];
  var user_agent 	= navigator.userAgent;
  
  loggerObject['pv_id'] = pv_id;
  loggerObject['queryUrl'] = queryUrl;
  loggerObject['queryString'] = queryUrl;
  loggerObject['pub_id'] = pub_id;
  loggerObject['domain'] = domain_op;
  loggerObject['country'] = country;
  loggerObject['config_id'] = config_id;
  loggerObject['rand'] = rand;
  loggerObject['user_agent'] = user_agent;
  loggerObject['placeholder1'] = placeholder1;
  loggerObject['placeholder2'] = placeholder2;
  loggerObject['placeholder3'] = placeholder3;
  loggerObject['placeholder4'] = placeholder4;
  var logger_changed = true;
  
		function slot_requested(event) 
		{
			var slot = event.slot;
			var slot_requested_time = Date.now();
			var slot_id = slot.getSlotElementId();
			var adunit_path = slot.getAdUnitPath();
			slot.setTargeting('slot_requested_time',slot_requested_time);
			
			if (true)
			{
				if (!loggerObject?.['slots'])	{ loggerObject['slots'] = {}; }
				if (!loggerObject?.['slots']?.[slot_id])	{ loggerObject['slots'][slot_id] = { slot_id: slot_id, slot_type: 'gam' , gam : {}}; }
				if (!loggerObject?.['slots']?.[slot_id]?.['gam']?.[adunit_path]){ loggerObject['slots'][slot_id]['gam'][adunit_path] = { adunit_path : adunit_path, adunit_requests : {}}};
				loggerObject['slots'][slot_id]['gam'][adunit_path]['adunit_requests'][slot_requested_time] = 	{
																													slot_requested_time : slot_requested_time,
																													slot_requested_event : true,
																												};
			}
			
			logger_changed = true;

		};
		
		function slot_response_received(event)
		{
			var slot = event.slot;
			var slot_id  = slot.getSlotElementId();			
			var slot_requested_time = slot.getTargeting('slot_requested_time')?.[0];
			var adunit_path = slot.getAdUnitPath();	
			loggerObject['slots'][slot_id]['gam'][adunit_path]['adunit_requests'][slot_requested_time]['slot_response_received'] = true;			
			logger_changed = true;
		};		
		
		function slot_render_ended(event)
		{
			var slot = event.slot;
			var slot_id  = slot.getSlotElementId();			
			var slot_requested_time = slot.getTargeting('slot_requested_time')?.[0];
			var adunit_path = slot.getAdUnitPath();	
			loggerObject['slots'][slot_id]['gam'][adunit_path]['adunit_requests'][slot_requested_time]['slot_render_ended'] = true;
			loggerObject['slots'][slot_id]['gam'][adunit_path]['adunit_requests'][slot_requested_time]['advertiser_id'] = event.advertiserId;
			loggerObject['slots'][slot_id]['gam'][adunit_path]['adunit_requests'][slot_requested_time]['campaign_id'] = event.campaignId;
			loggerObject['slots'][slot_id]['gam'][adunit_path]['adunit_requests'][slot_requested_time]['creative_id'] = event.creativeId;
			loggerObject['slots'][slot_id]['gam'][adunit_path]['adunit_requests'][slot_requested_time]['is_empty'] = event.isEmpty;
			loggerObject['slots'][slot_id]['gam'][adunit_path]['adunit_requests'][slot_requested_time]['line_item_id'] = event.lineItemId;
			loggerObject['slots'][slot_id]['gam'][adunit_path]['adunit_requests'][slot_requested_time]['size'] = event.size;
			logger_changed = true;
		};	
		
		

		function slot_on_load(event)
		{
			var slot = event.slot;
			var slot_id  = slot.getSlotElementId();			
			var slot_requested_time = slot.getTargeting('slot_requested_time')?.[0];
			var adunit_path = slot.getAdUnitPath();	
			loggerObject['slots'][slot_id]['gam'][adunit_path]['adunit_requests'][slot_requested_time]['slot_on_load'] = true;
		};		
		
		
		function impression_viewable(event)
		{
			var slot = event.slot;
			var slot_id  = slot.getSlotElementId();			
			var slot_requested_time = slot.getTargeting('slot_requested_time')?.[0];
			var adunit_path = slot.getAdUnitPath();	
			loggerObject['slots'][slot_id]['gam'][adunit_path]['adunit_requests'][slot_requested_time]['impression_viewable'] = true;
			logger_changed = true;
			
			if (refresh_interval = slot?.getTargeting?.('refresh')?.[0])
			{
				setTimeout(function() {        
										googletag.pubads().refresh([slot]);      
										}, refresh_interval * 1000
							);
			}
		};	
		
			function flat_to_fluentd(obj)
			{   // using fluentd
				obj.config_id = parseInt(obj?.config_id?.split('-')[1]) || 0;
				if (obj?.slots)
				{ 	// new part
					var message_slots = Object.values(obj.slots)
					message_slots.map((e,i) => { if(e?.['gam']) { 
					var temp = Object.values(e.gam);
						delete message_slots[i].gam;
						message_slots[i].gam = temp;
						if  (message_slots[i]?.gam)
						{
							message_slots[i]?.gam?.map((ee, ii) => 
							{
								var temp = Object.values(ee.adunit_requests)
								delete message_slots[i].gam[ii].adunit_requests;
								temp.map((el,ind) => {if(el?.size) { temp[ind]['size'] = el.size[0]+"x"+el.size[1]; }});
								message_slots[i].gam[ii].adunit_requests = temp;
							})
					}}} )
					delete obj.slots;
					obj.slots = message_slots;
				}
			}
			
						
			function post_fluentd()
			{
				var form = new FormData();
				var  temp = JSON.parse(JSON.stringify(loggerObject));
				flat_to_fluentd(temp);
				form.set('json', JSON.stringify(temp));
				temp = undefined;
				var req = new XMLHttpRequest();
				req.open('POST', 'https://custom-fluentd-eyzeqmfaaa-uk.a.run.app/bq-all');
				req.send(form);
			}
			
			function publish_info() 
			{			
				if (logger_changed)
				{
					loggerObject.logtime_int = Date.now();
					if (false)
					{
						var xhr = new XMLHttpRequest();
						xhr.open("POST", "https://serverless-stream.tfla.xyz/receive", true);
						xhr.setRequestHeader('Content-Type', 'text/plain');
						xhr.send(JSON.stringify(loggerObject));						
					}
					post_fluentd();
					loggerObject.logtime_int = undefined;
					logger_changed = false;
				}
			};googletag.cmd.push(function() { googletag.pubads().addEventListener('impressionViewable', impression_viewable); googletag.pubads().addEventListener('slotOnload', slot_on_load); googletag.pubads().addEventListener('slotRenderEnded', slot_render_ended);  googletag.pubads().addEventListener('slotRequested', slot_requested); googletag.pubads().addEventListener('slotResponseReceived', slot_response_received);  }); var timerId = setInterval(publish_info, 1000); ;