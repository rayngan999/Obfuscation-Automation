ocBackbone.app('discountClubPopup');ocBackbone.apps.discountClubPopup.views.POPUPCONTROL=Backbone.View.extend({initialize:function(){this.freeSmartPassData=JSON.parse(Backbone.$('#js-freeSmartPassData').html()||"null");this.isOneOfFreeDiscountClubPopup=false;_.bindAll(this,'popup');this.$el.on('click','.js-show-popup, .tandc',this.popup);this.detailsContainer=this.$el.find('.odp-details');if(this.freeSmartPassData){this.isOneOfFreeDiscountClubPopup=true;this.popup();}},popup:function(evt){var wrapperId='discountClubPopup';if(evt)evt.preventDefault();if(!this.isOneOfFreeDiscountClubPopup&&this.detailsContainer.get(0)){wrapperId='discountClubPopupDetails';}
this.popupData={isTandC:(function(currentEvt){if(typeof(currentEvt)!="undefined"){return(currentEvt.currentTarget.className==='tandc')?true:false;}else{return false;}})(evt),popupContainer:webshop.popup.create({wrapperId:wrapperId,onClose:function(){var paymentsContainerJsp=jQ('.paymentsContainer').data('jsp');if(paymentsContainerJsp){paymentsContainerJsp.destroy();}}})};this.popupData.popupContainer.container.addClass((this.isTandC)?'terms spinner':'spinner').position('center');if(this.isOneOfFreeDiscountClubPopup){this.popupData.popupContainer.container.addClass('discountclub-trial');}
if(!this.detailsContainer.get(0)||this.isOneOfFreeDiscountClubPopup){this.template=Handlebars.templates['discountClub/freeSmartPassPopup'];this.render();}else{this.template=_.template(this.detailsContainer.wrap('<div ></div>').parent().html());this.render();}
this.isOneOfFreeDiscountClubPopup=false;jQ('.paymentsContainer').jScrollPane({showArrows:true,animateScroll:true,animateDuration:200,autoReinitialise:false,contentWidth:374});},render:function(){var smartPassInfo=this.freeSmartPassData.freeDiscountClubData;var data={loggedin:this.$el.find('.js-show-popup').hasClass('loggedIn'),hasMembership:this.$el.find('.banner').hasClass('member'),isTandC:this.popupData.isTandC,faqLink:this.freeSmartPassData.faqLink,actionLink:this.freeSmartPassData.actionLink,discountClubTermsLink:this.freeSmartPassData.discountClubTermsLink,freeDiscountClubData:smartPassInfo};if(smartPassInfo){_.extend(data,{isAnytime:smartPassInfo.popupType==="ANYTIME",isMidweek:smartPassInfo.popupType==="MIDWEEK",contractLength:smartPassInfo.contractLength,schemeName:smartPassInfo.schemeName,endDateFriendly:smartPassInfo.endDateFriendly})}
this.popupData.popupContainer.container.append(this.template(data));this.popupData.popupContainer.container.removeClass('spinner').position('center');delete this.freeSmartPassData.freeDiscountClubData;}});new ocBackbone.apps.discountClubPopup.views.POPUPCONTROL({el:Backbone.$('.odp-container')});