ï»¿var Class = {
    create: function () {
        /// <summary>
        /// Creates a new class definition.
        /// </summary>
        return function () {
            this.initialize.apply(this, arguments);
        };
    }
};
var Namespace = {
    create: function (name) {
        /// <summary>
        /// Creates a new namespace.
        /// </summary>
        /// <param name="name" type="String">
        /// Full name for the new namespace.
        /// </param>
        var chk = false;
        var cob = "";
        var spc = name.split(".");
        for (var i = 0; i < spc.length; i++) {
            if (cob != "") { cob += "."; }
            cob += spc[i];
            chk = this.exists(cob);
            if (!chk) { this.add(cob); }
        }
        if (chk) { throw "Namespace: " + name + " is already defined."; }
    },

    add: function (cob) {
        eval("window." + cob + " = new Object();");
    },

    exists: function (cob) {
        eval('var NE = false; try{if(' + cob + '){NE = true;}else{NE = false;}}catch(err){NE=false;}');
        return NE;
    }
};
Array.prototype.contains = function (item) {
    /// <summary>Verifies if an object is contained by the array.</summary>
    /// <param name="item">Candidate item of the array</param>
    /// <returns>bool</returns>
    for (i = 0; i < this.length; i++) {
        if (this[i] == item) return true;
    }
    return false;
};
Array.prototype.add = function (item) {
    this.unshift(item);
    $.unique(this);
};
Array.prototype.remove = function (item) {
    var removed = false;
    var index = 0;
    while ((index < this.length) && !removed) {
        if (this[index] == item) {
            this.splice(index, 1);
            removed = true;
        }
        index++;
    }
};
String.prototype.format = function () {
    var args = arguments;
    var isObjectParameter = (typeof args[0] === 'object');
    if (isObjectParameter) {

        var obj = args[0];

        return this.replace(/{(\w+)}/g, function (match, name) {
            return typeof obj[name] != 'undefined'
            ? obj[name]
            : match;
        });

    } else {
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined'
            ? args[number]
            : match;
        });
    }
};

$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};


Number.prototype.padLeft = function (digits) {
    var result = this.toFixed(0);
    var temp = digits - result.length;
    var zeros = "";
    while (temp > 0) {
        zeros += '0';
        temp--;
    }
    return zeros + result;
};
Number.prototype.toBrazilianCurrency = function () {
    var aux = this.toFixed(2);
    var decimalPart = parseInt(aux.split('.')[1]);
    var integralPart = parseInt(aux.split('.')[0]);
    var integralWithSeparators = addSeparators(integralPart, '.');
    return 'R$ ' + integralWithSeparators + ',' + decimalPart.padLeft(2);
};

function addSeparators(value, separator) {
    var rightmost = 0;
    var leftmost = value;
    var result = '';
    while (leftmost > 999) {
        rightmost = leftmost % 1000;
        leftmost = (leftmost - rightmost) / 1000;
        result = result + rightmost.padLeft(3);
        if (leftmost > 0) {
            result = separator + result;
        }
    }
    if (leftmost > 0) {
        result = leftmost.toFixed(0) + result;
    }
    return (result == '') ? '0' : result;
}

function GetCartAddLink(SkuId, SellerId, Quantity, salesChannel)
{
    if (SkuId > 0 && Quantity > 0) {
        var giftList = '';
        if (jscheckoutGiftListId != 'undefined' && jscheckoutGiftListId != '') {
            giftList = '&gr=' + jscheckoutGiftListId;
        }

        checkoutUrl = jscheckoutAddUrl + "/?sku=" + SkuId + "&seller=" + SellerId + "&qty=" + Quantity + "&sc=" + salesChannel + giftList + "&aaa";
    }
    return checkoutUrl;
}