ï»¿(function ($) {
    $(function () {

        var itemsChecked = new Array();

        function initSaveFavoriteButtonsPlugin() {

            var updateSaveFavoriteButtons = function () {

                $(".jq_save_favorite").each(function () {

                    var itemId = $(this).attr("jq_item_id");

                    if (itemId !== null && itemId !== undefined && itemId !== "") {

                        if (itemsChecked.indexOf(itemId) > -1) {

                            // already checked

                        } else {

                            //console.info(itemId);

                            itemsChecked.push(itemId);

                            updateSingleItem(this);
                        }
                    }
                });
            };

            updateSaveFavoriteButtons();


            //$(".jq_save_favorite").off("click");
        }

        window.initSaveFavoriteButtonsPlugin = initSaveFavoriteButtonsPlugin;

        initSaveFavoriteButtonsPlugin();

        $(document).on("click", ".jq_save_favorite", function (event) {
            clickOnSaveButton(this);
        });

        $(document).on("click", ".jq_save_favorite_header", function (event) {
            var currentDOMElement = this;
            var element = null;
            $(".jq_save_favorite").each(function () {
                if (this !== currentDOMElement && $(this).attr('jq_item_id') !== undefined) {
                    element = this;
                    return;
                }
            });

            if (element !== null && element !== undefined) {
                clickOnSaveButton(element);
            }
        });

        function clickOnSaveButton(element) {
            var isLockedContent = $(element).parents('.cc-locked').length > 0;
            if (!isLockedContent) {
                event.preventDefault();
                event.stopPropagation();
            }
            var item = $(element);
            var itemId = $(element).attr("jq_item_id");
            var site = $(element).attr("jq_site");
            var operType = $(element).attr("jq_oper_type");

            if (operType === "LOGIN") {
                window.location.href = $(".jq_login_url").val();
                return;
            }

            var formdata = new FormData();
            formdata.append('itemId', itemId);

            var url = "/ManageFavoritesFedertennis/ManageFavorites/";

            if (site === "SUPERTENNIS") {
                url = "/ManageFavoritesSupertennis/ManageFavorites/";
            }

            if (operType === "ADD") {

                url += "SaveFavorite";

            } else {

                url += "RemoveFavorite";
            }
            $.ajax({
                type: "POST",
                url: url,
                processData: false,
                contentType: false,
                data: formdata,
                success: function (result) {
                    if (result.toUpperCase() === "OK") {
                        updateSingleItem(item);
                    }
                    else if (result.toUpperCase() === "FORBIDDEN") {
                        window.location.href = $(".jq_login_url").val();
                    } else {
                        MessageBox("Errore", "Impossibile salvare questo elemento. Per favore riprova.");
                    }
                }
            });
        }

        function updateSingleItem(item) {
            var itemOff = $(item);
            var itemOn = $(item).next();
            var itemId = $(item).attr("jq_item_id");
            var itemIsWidget = $(item).attr("jq_item_is_widget") === "true";
            $(itemOn).hide();
            $(itemOff).hide();
            if (itemId === "" || itemId === null || itemId === undefined) {
                return;
            }
            var clientFavorites = window.readCookie("FitFavoritesCookie");
            if (clientFavorites.toUpperCase().indexOf(itemId.toUpperCase()) >= 0) {
                $(item).show();
                $(item).attr("jq_oper_type", "REMOVE");
                if (itemIsWidget) {
                    $(itemOn).css("opacity", "1");
                    $(itemOn).show();
                } else {
                    $(item).html("\
                                    <div class=\"cc-svg cc-svg-bookmark-active\"><span>Salva</span></div>\
                                    <span class=\"cc-button-label\" > Rimuovi da my FIT</span >\
                                ");
                }

            } else {
                $(item).show();
                $(item).attr("jq_oper_type", "ADD");

                if (itemIsWidget) {
                    $(itemOff).show();
                    $(item).addClass("cc-favorite-off");

                } else {
                    $(item).html("\
                                    <div class=\"cc-svg cc-svg-bookmark\"><span>Salva</span></div>\
                                    <span class=\"cc-button-label\" > Salva in my FIT</span >\
                                ");
                }
            }

        }

    });

})(jQueryV2);