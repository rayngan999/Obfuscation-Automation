function loadDisplacedAds(){$.each($(".banner-ad-displaced"),function(){var n=findBannerAdContainer($(this).attr("adgroup")),t=$(n).find("."+$(this).attr("rendition")+"-banner-ad").find("img"),i=$(n).find("."+$(this).attr("rendition")+"-banner-ad").find("a");$(n).find(".show-desktop").removeClass("show-desktop");$(n).find(".show-tablet").removeClass("show-tablet");t.attr("src")!=undefined?(t.css("display","none"),t.removeClass("show-mobile"),$(this).find("img").attr("src",t.attr("src")),$(this).find("a").attr("href",i.attr("href"))):$(this).parent().css("display","none")})}function findBannerAdContainer(n){return $.grep($(".banner-ad-container"),function(t){return $(t).attr("adgroup")==n})}$(document).ready(function(){var t=$(".banner-ad-placeholder"),n;t.length>0&&(n=[],$.each(t,function(){n.push({AdGroup:$(this).attr("adgroup"),BaseCatID:$(this).attr("baseCatID"),CategoryID:$(this).attr("catID"),RegionID:$(this).attr("regionID"),AlwaysCheckCategoryID:$(this).attr("alwaysCheckCategoryId"),UserScreenWidth:$(this).attr("screenWidth")})}),$.ajax({url:window.Overrides.baseUrl+"/AjaxContent/GetBannerAdModel",type:"POST",contentType:"application/json; charset=utf-8",dataType:window.Overrides.ajaxDataType,data:window.Overrides.jsonDataFunction({settings:n}),success:function(n){for(i=0;i<n.length;i++)$("#banner-ad-placeholder-"+n[i].Key).replaceWith(n[i].Value);loadDisplacedAds()}}))})