<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Pushnews Bolachas</title>
</head>
<body>
<!--
Yo! Are you investigating us? Cool!

Want to join our amazing team? We might have an open position just for you.

Reach us at https://www.pushnews.eu, tell us you found this message and explain us what this piece of code does. ! :-)
-->
<script>
    /* bellow you can find a sample incoming message format */
    var dataTemplate = {
        type: "ping",
        data: {
            responseType: "echo",
            groupName: "pushnews",
            subscriberId: "123123_1231",
            message: "lala"
        }
    };

    /* now let's get down to business! */
    window.addEventListener("message", function (event) {
        /**
         * Prepare data
         */
        var data = event.data;
        try {
            data = JSON.parse(data);
        } catch (e) {
            return;
        }

        if (!data.hasOwnProperty("type")) {
            return;
        }
        var type = data.type;

        if (!data.hasOwnProperty("data")) {
            data.data = {};
        }
        data = data.data;

        var context = data.hasOwnProperty("context") ? data["context"] : {};
        var responseType = data.hasOwnProperty("responseType") ? data["responseType"] : "echo";
        var groupName = data.hasOwnProperty("groupName") ? data["groupName"] : "pushnews";
        var savedSubscriberIds = localStorage.getItem("pnews_subscriber") ? JSON.parse(localStorage.getItem("pnews_subscriber")) : {};

        /**
         * Send a message back to the source
         *
         * @param data
         */
        var response = function (data) {
            var message = JSON.stringify({
                type: responseType,
                context: context,
                data: data
            });
            event.source.postMessage(message, event.origin);
        };

        /**
         * Handle incoming message
         */
        switch (type) {
            case "ping":
                console.log("PONG!");
                response({status: true, message: "PONG!"});
                break;

            case "getFirstSubscriberId":
                if (savedSubscriberIds.hasOwnProperty("pushnews") && savedSubscriberIds["pushnews"].length >= 1) {
                    response({status: true, groupName: "pushnews", subscriberId: savedSubscriberIds["pushnews"][0]});
                } else {
                    response({status: false});
                }
                break;

            case "getLastSubscriberId":
                if (savedSubscriberIds.hasOwnProperty("pushnews") && savedSubscriberIds["pushnews"].length >= 1) {
                    response({status: true, groupName: "pushnews", subscriberId: savedSubscriberIds["pushnews"][savedSubscriberIds["pushnews"].length - 1]});
                } else {
                    response({status: false});
                }
                break;

            case "getSubscriberId":
                if (null === savedSubscriberIds || !savedSubscriberIds.hasOwnProperty(groupName) || !savedSubscriberIds[groupName].length >= 1) {
                    response({status: false});
                    break;
                }

                response({status: true, groupName: groupName, subscriberId: savedSubscriberIds[groupName][0]});
                break;

            case "setSubscriberId":
                if (!data.hasOwnProperty("subscriberId")) {
                    break;
                }
                var subscriberId = data.subscriberId;
                var savedSubscriberIdsForGroupName = savedSubscriberIds.hasOwnProperty(groupName) ? savedSubscriberIds[groupName] : [];
                // if subscriberId is not already set, store it
                if (-1 === savedSubscriberIdsForGroupName.indexOf(subscriberId)) {
                    savedSubscriberIdsForGroupName.push(subscriberId);
                    savedSubscriberIds[groupName] = savedSubscriberIdsForGroupName;
                    localStorage.setItem("pnews_subscriber", JSON.stringify(savedSubscriberIds));
                }

                // ##############################
                // CLEANUP BLOCK
                // ##############################
                // now, lets clean the duplicates because in the past we were not checking if subscriberId was already set
                // the block can eventually be removed in the future
                savedSubscriberIds = localStorage.getItem("pnews_subscriber") ? JSON.parse(localStorage.getItem("pnews_subscriber")) : {};
                savedSubscriberIdsForGroupName = savedSubscriberIds.hasOwnProperty(groupName) ? savedSubscriberIds[groupName] : [];
                savedSubscriberIdsForGroupName = [...new Set(savedSubscriberIdsForGroupName)];
                savedSubscriberIds[groupName] = savedSubscriberIdsForGroupName;
                localStorage.setItem("pnews_subscriber", JSON.stringify(savedSubscriberIds));
                // ##############################
                // / CLEANUP BLOCK
                // ##############################
                break;
        }
    });
</script>
</body>
</html>
