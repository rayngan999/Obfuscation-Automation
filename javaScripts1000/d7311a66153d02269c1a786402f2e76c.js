var versionmenu = "v1";

jQueryV2(function() {
	jQueryV2(document).on("click", ".fancybox-single-image", function() {
		jQueryV2.fancybox.open({
			src: jQueryV2(this).data("src"),
			type: 'image',
			caption: jQueryV2(this).data("caption")
		});
	});	
});

function fnMediaGalleryFancyboxView(guid) {
	jQueryV2.ajax({
		url : "https://dp-fit-prod-function.azurewebsites.net/api/v1/content/gallery/image/list",
		type: 'POST',
		dataType: 'json',
		data: JSON.stringify({"guid_foto_gallery" : guid}),
		contentType: "application/json; charset=utf-8",		
		success : function(data) {
			var jsonObjTmp = [];
			jQueryV2.each(data, function(index, element) {
				jQueryV2.each(element.images, function(k, v) {
					if(v.hasOwnProperty('image')) {
						item = {};
						item ["src"] = "/media_gallery/fotogallery/" + String(element.idGallery) + "/" + v.image;
						item ["caption"] = v.descriptionImage;
						jsonObjTmp.push(item);	
					}
				});
			});
			if(jsonObjTmp.length > 0) {
				jQueryV2.fancybox.open(jsonObjTmp);
			}			
		},	
		error : function(xhr, ajaxOptions, thrownError) {
			alert(xhr.status);
			alert(thrownError);
		}
	});
}