define("components/heroWithPromotion",["FR","jquery","services/utilities"],function(i,n,t){var e={init:function(){e.checkClipPathSupport(),e.initializeResponsiveImages()},checkClipPathSupport:function(){t.supportClipPath(n(".hero_with_promotion"))},initializeResponsiveImages:function(){n.cloudinary.responsive()}};n(function(){return e.init()})});
//# sourceMappingURL=heroWithPromotion.js.map
