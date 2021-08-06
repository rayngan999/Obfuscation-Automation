/*
 * (c) Thomson Global Resources 2008.
 * 
 * All Rights Reserved.
 * 
 * Proprietary Information--Disclosure, use, or reproduction without the written
 * authorization of TGR is prohibited.
 */

function shibbolethRedirect(shibURL){
	shibURLValue = shibURL.value;
	if(shibURLValue != null && shibURLValue!= '') {
		window.location = shibURLValue;
	}
}