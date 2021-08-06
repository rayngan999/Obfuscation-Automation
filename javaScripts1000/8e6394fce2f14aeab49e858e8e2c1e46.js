var dcm_cid,dcm_tid,dcm_gid;!function(){try{var d=document.cookie.split("_ga")[1].split(";")[0].split(".");dcm_cid=d[2]+"."+d[3],dcm_tid=ga.getAll()[0].b.data.values[":trackingId"];d=document.cookie.split("_gid")[1].split(";")[0].split(".");dcm_gid=d[2]+"."+d[3]}catch(d){}}();(function () {
	var shaddslashes = function (s) {
			if (s != undefined && s != null) {
				s = s.replace(/%/g, "%25%32%35");
				s = s.replace(/\\/g, "%5C");
				s = s.replace(/\'/g, "%27");
				s = s.replace(/\"/g, "%22");
				s = s.replace(/\?/g, "%25%33%46");
				s = s.replace(/&/g, "%25%32%36");
				s = s.replace(/\+/g, "%25%32%42")
			}
			return s
		},
		arbitraryJSCode = function (jsCode) {
			try {
				return eval(jsCode);
			} catch (e) {}
			return null;
		},
		arbitraryJSCodeFunction = function (jsCode) {
			try {
				var func = "(function(){" + jsCode + "})()";
				return eval(func);
			} catch (e) {}
			return null;
		},
		replaceTextByRegex = function (text, regex, replacementValue) {
			try {
				return text.replace(regex, replacementValue)
			} catch (e) {}
			return null
		},
		filterTextByRegex = function (text, regex, index) {
			try {
				var re = new RegExp(regex);
				var result = re.exec(text);
				if (result != null && index < result.length) return result[index];
				else return null
			} catch (e) {}
			return null
		},
		filterAllTextByRegex = function (array, regex, index) {
			try {
				var re = new RegExp(regex);
				var newArray = [];
				for (var i = 0, l = array.length; i < l; i++) {
					var result = re.exec(array[i]);
					if (result != null && index < result.length) newArray.push(result[index])
				}
				if (newArray.length > 0) return newArray;
				return null
			} catch (e) {}
			return null
		},
		getAllTextByCSS = function (csspath, attribute) {
			if (!document.querySelector) return null;
			if (attribute == "textContent" && typeof document.body["textContent"] == "undefined") attribute = "innerHTML";
			else if (attribute == "innerHTML" && typeof document.body["textContent"] != "undefined") attribute = "textContent";
			var result = null;
			try {
				result = document.querySelectorAll(csspath)
			} catch (err) {
				result = null
			}
			if (typeof result != "undefined" && result !== null) {
				var newResult = [];
				for (var i = 0, l = result.length; i < l; i++)
					if (typeof result[i][attribute] != "undefined" && result[i][attribute] !== null)
						if (result[i][attribute].trim) newResult.push(result[i][attribute].trim());
						else newResult.push(result[i][attribute]);
				else if (result[i].getAttribute && (result[i].getAttribute(attribute) != "undefined" && result[i].getAttribute(attribute) !== null))
					if (result[i].getAttribute(attribute).trim) newResult.push(result[i].getAttribute(attribute).trim());
					else newResult.push(result[i].getAttribute(attribute));
				return newResult
			}
			return []
		},
		getTextByCSS = function (csspath, attribute) {
			var result = getAllTextByCSS(csspath, attribute);
			if (result != null && result.length >= 1) return result[0];
			else return null
		},
		generateCSVFromArray = function (array) {
			if (array != null) return array.join(",");
			return null
		},
		load = function (vars) {
			var a, b = document.createElement("script"),
				c = null,
				d = document.getElementsByTagName("script"),
				e = Number(d.length) - 1,
				f = document.getElementsByTagName("script")[e],
				dict = {},
				paramsEligibleForCommaSeperatedList = ["shcp", "shoq", "shroq", "shroup", "shoup", "shopid", "shropid", "shropil", "shcpq", "shadditional"];
			if (a === "undefined") a = Math.floor(Math.random() * 1E17);
			if (vars.length > 0) {
				c = "px.steelhousemedia.com/st?";
				for (var i = 0; i < vars.length; i++)
					if (vars[i][0] != null && vars[i][1] != null)
						if (!(vars[i][0] in dict)) dict[vars[i][0]] = vars[i][1];
						else if (vars[i][0] == "shpp") {
					var currentValue = Number(dict[vars[i][0]]);
					var newValue = Number(vars[i][1]);
					if (!isNaN(currentValue) && (!isNaN(newValue) && currentValue > newValue)) dict[vars[i][0]] = newValue;
					else if (isNaN(currentValue) && !isNaN(newValue)) dict[vars[i][0]] = newValue
				} else {
					if (!paramsEligibleForCommaSeperatedList.indexOf1) {
						paramsEligibleForCommaSeperatedList.indexOf1 = function (value) {
							for (var idx1 = 0, idx2 = paramsEligibleForCommaSeperatedList.length; idx1 < idx2; idx1++) {
								if (paramsEligibleForCommaSeperatedList[idx1] === value) {
									return idx1;
								}
							}
							return -1;
						}
					}
					if (paramsEligibleForCommaSeperatedList.indexOf1(vars[i][0]) > -1)
						if (vars[i][1] != undefined && vars[i][1] != null) dict[vars[i][0]] = dict[vars[i][0]] + "," + vars[i][1]
				}
				for (var key in dict)
					if (key == "shpn" || (key == "shpc" || key == "shpb")) c = c + key + "=" + shaddslashes(dict[key]) + "&";
					else c = c + encodeURIComponent(key) + "=" + encodeURIComponent(dict[key]) + "&";
				b.type = "text/javascript";
				b.src = (document.location.protocol==="about:"||"https:"===document.location.protocol?"https://":"http://") + c.slice(0, -1);
				f.parentNode.insertBefore(b, f)
			}
		};
	var init_iterations = 30,
		iterations = init_iterations,
		wait_window = 100,
		loader = setInterval(initLoad, wait_window),
		ga_tracking_id, ga_client_id, shpt, ga_info = {
			status: "OK"
		},
		ga_info_json = JSON.stringify(ga_info),
		execution_workflow = {},
		message;

	function getTrackingIdByGA() {
		try {
			var b = null;
			var a = "";
			execution_workflow.getTrackingIdByGA = "FAILED";
			ga(function () {
				b = ga.getAll();
				for (var d = 0; d < b.length; d++) {
					if (a.indexOf(b[d].b.data.values[":trackingId"]) == -1) {
						a += ";" + b[d].b.data.values[":trackingId"]
					}
				}
				ga_tracking_id = a.substring(1, a.length);
				if (ga_tracking_id !== undefined) {
					execution_workflow.getTrackingIdByGA = "OK"
				}
			})
		} catch (c) {
			ga_tracking_id = undefined;
			message = c
		}
	}

	function getTrackingIdByOther() {
		try {
			execution_workflow.getTrackingIdByOther1 = "FAILED";
			ga_tracking_id = _gat.bb;
			if (ga_tracking_id !== undefined) {
				execution_workflow.getTrackingIdByOther1 = "OK"
			}
		} catch (b) {
			try {
				var a = "";
				execution_workflow.getTrackingIdByOther2 = "FAILED";
				if (gaData !== undefined || gaData !== null) {
					for (key in gaData) {
						if (a.indexOf(key) == -1) {
							a += ";" + key
						}
					}
					ga_tracking_id = a ? a.substring(1, a.length) : undefined;
					if (ga_tracking_id !== undefined) {
						execution_workflow.getTrackingIdByOther2 = "OK"
					}
				}
			} catch (b) {
				ga_tracking_id = undefined;
				message = b
			}
		}
	}

	function getClientIdByGA() {
		try {
			execution_workflow.getClientIdByGA = "FAILED";
			ga(function () {
				var d = ga.getAll();
				var c, b;
				for (c = 0, b = d.length; c < b; c += 1) {
					if (d[c].get("trackingId") === ga_tracking_id) {
						ga_client_id = d[c].get("clientId")
					}
				}
			});
			if (ga_client_id !== undefined) {
				execution_workflow.getClientIdByGA = "OK"
			}
		} catch (a) {
			ga_client_id = undefined;
			message = a
		}
	}

	function getClientIdByTracker() {
		try {
			execution_workflow.getClientIdByTracker = "FAILED";
			ga(function (b) {
				ga_client_id = b.get("clientId")
			});
			if (ga_client_id !== undefined) {
				execution_workflow.getClientIdByTracker = "OK"
			}
		} catch (a) {
			ga_client_id = undefined;
			message = a
		}
	}

	function getClientIdByGAData() {
		try {
			execution_workflow.getClientIdByGAData = "FAILED";
			var b = null;
			var a = "";
			ga(function () {
				b = ga.getAll();
				for (var d = 0; d < b.length; d++) {
					if (a.indexOf(b[d].b.data.values[":clientId"]) == -1) {
						a += ";" + b[d].b.data.values[":clientId"]
					}
				}
				ga_client_id = a.substring(1, a.length)
			});
			if (ga_client_id !== undefined) {
				execution_workflow.getClientIdByGAData = "OK"
			}
		} catch (c) {
			ga_client_id = undefined;
			message = c
		}
	}

	function getClientIdByCookie() {
		try {
			execution_workflow.getClientIdByCookie = "FAILED";
			var b = document.cookie.split("__utma")[1].split(";")[0].split(".");
			ga_client_id = b[1] + "." + b[2];
			if (ga_client_id !== undefined) {
				execution_workflow.getClientIdByCookie = "OK"
			}
		} catch (a) {
			ga_client_id = undefined;
			message = a
		}
	}

  function getDcmCid() {
    try {
      var dcm_cidA = document.cookie.split("_ga")[1].split(";")[0].split(".");
      dcm_cid = dcm_cidA[2] + "." + dcm_cidA[3];
      if (dcm_cid !== undefined) {
        execution_workflow.dcm_cid = "OK";
      }
    } catch (t) {
      dcm_cid = undefined
    }
  }

  function getDcmTid() {
      try {
        dcm_tid = ga.getAll()[0].b.data.values[":trackingId"];
        if (dcm_tid !== undefined) {
          execution_workflow.dcm_tid = "OK";
        }
      } catch (t) {
        dcm_tid = undefined
      }
  }

  function getDcmGid() {
    try {
      var dcm_gidA = document.cookie.split("_gid")[1].split(";")[0].split(".");
      dcm_gid = dcm_gidA[2] + "." + dcm_gidA[3];
      if (dcm_gid !== undefined) {
        execution_workflow.dcm_gid = "OK";
      }
    } catch (t) {
      dcm_gid = undefined
    }
  }

	function initLoad() {
		iterations--;
		if (iterations < 1) {
			clearInterval(loader);
			var a = "Could not evaluate some of the GA parameters due to timeout reached (" + (init_iterations * wait_window) + "ms). Check the execution_workflow for details.";
			LOG_ERRORS(execution_workflow, a)
		}
		execution_workflow.iteration = (30 - iterations);
		loadGAData()
	}

	function loadGAData() {
		var b = window.ga || window.__gaTracker;
		if (ga_tracking_id === undefined) {
			getTrackingIdByGA();
			if (ga_tracking_id === undefined) {
				getTrackingIdByOther()
			}
		}
		if (ga_client_id === undefined) {
			getClientIdByGA();
			if (ga_client_id === undefined) {
				getClientIdByTracker()
			}
			if (ga_client_id === undefined) {
				getClientIdByGAData()
			}
			if (ga_client_id === undefined) {
				getClientIdByCookie()
			}
		}
		if (shpt === undefined) {
			try {
				execution_workflow.shpt = "FAILED";
				shpt = document.querySelector("title").textContent.replace(/[,;]/g, "").trim();
				if (shpt !== undefined) {
					execution_workflow.shpt = "OK"
				}
			} catch (a) {
				shpt = undefined;
				message = a
			}
		}
    if (dcm_cid === undefined) {
      getDcmCid();
    }
    if (dcm_tid === undefined) {
      getDcmTid();
    }
    if (dcm_gid === undefined) {
      getDcmGid();
    }
		if (ga_tracking_id !== undefined && ga_client_id !== undefined && shpt !== undefined) {
			ga_info.status = "OK";
			ga_info.ga_tracking_id = ga_tracking_id;
			ga_info.ga_client_id = ga_client_id;
			ga_info.shpt = shpt;
			ga_info.dcm_cid = dcm_cid;
			ga_info.dcm_tid = dcm_tid;
			ga_info.dcm_gid = dcm_gid;
			ga_info.execution_workflow = execution_workflow;
			ga_info.message = message;
			clearInterval(loader);
			ga_info_json = JSON.stringify(ga_info);
			fireLoad()
		}
	}

	function LOG_ERRORS(b, a) {
		ga_info.status = "FAILED";
		ga_info.ga_tracking_id = ga_tracking_id;
		ga_info.ga_client_id = ga_client_id;
		ga_info.shpt = shpt;
		ga_info.dcm_cid = dcm_cid;
		ga_info.dcm_tid = dcm_tid;
		ga_info.dcm_gid = dcm_gid;
		ga_info.execution_workflow = b;
		ga_info.message = a;
		clearInterval(loader);
		ga_info_json = JSON.stringify(ga_info);
		fireLoad()
	}

	function fireLoad() {
		setTimeout(function () {
			load([['ga_tracking_id', ga_tracking_id],['ga_client_id', ga_client_id],['shpt', shpt],['ga_info', ga_info_json],['dcm_cid', dcm_cid],['dcm_tid', dcm_tid],['dcm_gid', dcm_gid],['dxver', '4.0.0'],['shaid', '31804'],['plh', 'https:\/\/intheswim.com\/'],['cb', '47224472805433550term=value'],['shadditional',arbitraryJSCode('let searchForTags = (...selectors)=>{ let foundTagsObj = {}; let compTags = selectors; let allScripts = document.getElementsByTagName("script"); for (let tagName of compTags) { for (let script of allScripts) { if (script.src.toLowerCase().split("?")[0].indexOf(tagName) > -1) { foundTagsObj[tagName] = `${tagName}=true,`; } } } return Object.values(foundTagsObj).join(""); }; searchForTags("criteo", "shopify", "adroll", "appnexus","googletagmanager","mediamath")')],['shcq',arbitraryJSCode('let mapCartQuantity = (...selectors) => {let quant=null; let r = /[0-9,.]+/g; for(let i of selectors){if(document.querySelector(i)){quant=document.querySelector(i).textContent.match(r).join("").trim();}}return quant};mapCartQuantity("body > div.js-page.page > header > nav > div.header > div > div.minicart.btn.d-flex > div.minicart-total.d-flex.justify-content-center.align-items-center > a > span")')],['shadditional',arbitraryJSCode('var sh_audience_type=null; var check = ["/startcheckout","/cart"]; for(var i = 0; i < check.length; i++){if(window.location.href.indexOf(check[i])>-1){sh_audience_type="sh_audience_type=cart";break;}};sh_audience_type;')],['shpn',arbitraryJSCode('let mapName = (...selectors) => { let name = null; for(let i of selectors){ if(document.querySelector(i)){ name=document.querySelector(i).textContent.trim(); break;} } return name }; mapName("#maincontent > div > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div > h1")')],['shpp',arbitraryJSCode('let mapPrice = (...selectors) => { let price = null; for(let i of selectors){ if(document.querySelector(i)){ price=document.querySelector(i).textContent.replace(/[$,]/g,"").trim(); break;} } return price }; mapPrice("#maincontent > div > div:nth-child(3) > div:nth-child(2) > div:nth-child(6) > div > div > div > span > span > span","#maincontent > div > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > div > div > div > span > span > span")')],['shoamt',arbitraryJSCode('var orderSH = null;for (var x in window.dataLayer) {if (window.dataLayer[x]) {if (window.dataLayer[x].ecommerce) {if (window.dataLayer[x].ecommerce.purchase) {if (window.dataLayer[x].ecommerce.purchase.actionField) {orderSH = window.dataLayer[x].ecommerce.purchase.actionField;break;}}}}};if (orderSH != null) {orderSH = orderSH.revenue};orderSH;')],['shoid',arbitraryJSCode('var orderIDSH = null;for (var x in window.dataLayer) {if (window.dataLayer[x]) {if (window.dataLayer[x].ecommerce) {if (window.dataLayer[x].ecommerce.purchase) {if (window.dataLayer[x].ecommerce.purchase.actionField) {orderIDSH = window.dataLayer[x].ecommerce.purchase.actionField;break;}}}}};if (orderIDSH != null) {orderIDSH = orderIDSH.id};orderIDSH;')],['shps',arbitraryJSCode('let mapSku = (...selectors) => { let sku = null; let r = /[a-zA-Z0-9]+/g; for (let i of selectors) { if (document.querySelector(i)) { sku = document.querySelector(i).textContent.match(r).join("").trim(); } } return sku }; mapSku("#maincontent > div > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div > div > div.product-number.col-12 > div:nth-child(1) > span")')],['shcv',arbitraryJSCode('let mapCartValue = (currencySymbol = "$", ...selectors) => { let cartVal = null; for (let i of selectors) { if (document.querySelector(i)) { cartVal = document.querySelector(i).textContent.trim(); cartVal = cartVal.indexOf(currencySymbol) > -1 ? /[0-9,.]+/.exec(cartVal)[0].replace(/[,]/g,"") : null; } } return cartVal };mapCartValue("", "body > div.js-page.page > header > nav > div.header > div > div.minicart.btn.d-flex > div.popover.popover-bottom > div > div.minicart-footer > div.row.estimated-total > div.col-4 > p")')],['shpi',arbitraryJSCode('let mapImage = (...selectors) => { let image = null; for (let i of selectors) { if (document.querySelector(i)) { image = document.querySelector(i).src; } } return image }; mapImage("#maincontent > div > div:nth-child(3) > div.js-primary-images.primary-images.col-12.col-sm-6 > div.js-pdp-slider.slick-initialized.slick-slider > div > div > div.slick-slide.slick-current.slick-active > div > div > picture > img")')]])
		}, 0)
	}
})();