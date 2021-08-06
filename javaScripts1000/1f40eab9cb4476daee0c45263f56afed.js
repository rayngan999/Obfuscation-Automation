/* for Blogroll */
if (typeof Blogroll == "undefined") {
    var Blogroll = function(id, config, feeds, is_categorize) {
        this.id = id;
        this.config = config;
        this.feeds = feeds;
        this.is_categorize = is_categorize;

        // XXXX get from document.getElementsByTagName('script').pop().src ????
        if (typeof blogroll_roll_host == 'undefined') {
            this.roll_host = 'https://blogroll.livedoor.net/';
            this.cms_host  = 'https://blogroll.livedoor.com/';
        } else {
            this.roll_host = blogroll_roll_host;
            this.cms_host  = blogroll_cms_host;
        }

        this.now = new Date();
        return this;
    };
    Blogroll.setClass = function (elem, class_name) {
        if (document.documentMode && document.documentMode >= 8) {
            elem.setAttribute('class', class_name);
        } else if (elem.addEventListener)  {
            elem.setAttribute('class', class_name);
        } else {
            elem.setAttribute('className', class_name);
        }
    };
    Blogroll.prototype.setup_style = function(target_div, name, value) {
        var ch = this.config;

        if (name != undefined) {
            if (value != undefined) {
                ch[name] = value;
            } else {
                value = document.getElementById(name).value;
                ch[name] = value;
            }
        }
    };
    Blogroll.prototype.create_item = function(item) {
        var li = document.createElement('li');
        Blogroll.setClass(li, 'blogroll-list');
        this.add_icon(li, item);
        var anchor = this.create_anchor(item);
        li.appendChild(anchor);
        if (this.config.show_new != 0) {
            this.add_new(li, item);
        }
        this.add_date(li, item);
        this.add_sbm(li, item);

        return li;
    };
    Blogroll.prototype.create_category_name = function(ul, name) {
        var li = document.createElement('li');
        Blogroll.setClass(li, 'blogroll-category-name');
        var category_name = document.createTextNode(name);
        li.appendChild(category_name);
        ul.appendChild(li);
    };

    Blogroll.prototype.create_anchor = function(item) {
        var ch = this.config;
        var anchor_text;
        var entry_title = item.entry_title;
        var anchor = document.createElement('a');

        if (ch.title_charnum != 0) {
            entry_title = entry_title.substr(0, ch.title_charnum);
            if (ch.title_charnum < item.entry_title.length) {
                entry_title += '...';
                anchor.title = item.entry_title;
            }
        }

        if (ch.view_text == 'entry') {
            anchor_text = entry_title;
        } else if (ch.view_text == 'feed-entry') {
            anchor_text = item.feed_title + ' / ' + entry_title;
        } else if (ch.view_text == 'entry-feed') {
            anchor_text = entry_title + ' / ' + item.feed_title;
        } else if (ch.view_text == 'feed') {
            anchor_text = item.feed_title;
        }
        Blogroll.setClass(anchor, 'blogroll-link');
        anchor.href = item.entry_link;
        anchor.target = "_blank";
        anchor.appendChild(document.createTextNode(anchor_text));
        this.add_tracking(anchor, item);

        return anchor;
    };

    Blogroll.prototype.format_item_date = function(item) {
        var ch = this.config;
        var date_str = "";
        if (ch.show_md == 1 || ch.show_hm == 1) {
            date_str = ' (';
            if (ch.show_md != 0) {
                var ym = new Date( item.posted_at * 1000 );
                ym = ym.getMonth()+1 + '/' + ym.getDate();
                date_str += ym;
            }
            if (ch.show_hm != 0) {
                var hm = new Date( item.posted_at * 1000 );
                hm = ("0"+ hm.getHours() ).slice(-2) + ':' + ("0"+ hm.getMinutes() ).slice(-2);
                if (ch.show_md != 0) {
                    date_str += ' ' + hm;
                } else {
                    date_str += hm;
                }
            }
            date_str += ')';
        }
        return date_str;
    };

    Blogroll.prototype.add_date = function(li, item) {
        var date_str = this.format_item_date(item);
        var date = document.createElement('span');
        Blogroll.setClass(date, 'blogroll-link-time');
        date.appendChild(document.createTextNode(date_str));
        li.appendChild(date);
    };

    Blogroll.prototype.add_icon = function(li, item) {
        var ch = this.config;

        if (ch.view_icon != 0) {
            var img = document.createElement('img');
            Blogroll.setClass(img, 'blogroll-icon');
            img.src = item.icon_path;
            li.appendChild(img);
        }

        if (ch.view_favicon != 0) {
            var favimg = document.createElement('img');
            Blogroll.setClass(favimg, 'blogroll-favicon');
            favimg.src = this.roll_host + 'url/' + item.entry_link;
            favimg.width = 16;
            favimg.height = 16;
            li.appendChild(favimg);
        }
    };

    Blogroll.prototype.add_new = function(li, item) {
        var now = this.now;
        now = Math.ceil(now.getTime() / 1000);
        var diff = now - item.posted_at;
        if (diff < (this.config.new_limit)) {
            var new_span = document.createElement('span');
            Blogroll.setClass(new_span, 'blogroll-new-entry');
            new_span.appendChild(document.createTextNode('NEW!'));
            li.appendChild(new_span);
        }
    };

    Blogroll.prototype.add_ad = function(div, ul) {
        if (this.config.ad_type === "text") {
            var ad = this.config.ad_list[Math.floor(Math.random() * this.config.ad_list.length)];

            if (ad) {
                var ad_a = document.createElement('a');
                ad_a.href = this.roll_host + 'ad_redirect?ad_id=' + ad.id + '&channel_id=' + this.id;
                ad_a.target = '_blank';
                ad_a.appendChild(document.createTextNode(ad.text));

                var ad_li = document.createElement('li');
                Blogroll.setClass(ad_li, 'blogroll-list blogroll-ad-text');
                ad_li.setAttribute('style', "display: block !important;");

                if (this.config.view_favicon != 0) {
                    var ad_favicon = document.createElement("img");
                    Blogroll.setClass(ad_favicon, 'blogroll-favicon');
                    ad_favicon.src = this.roll_host + 'img/blog_favicon.ico';
                    ad_favicon.width = 16;
                    ad_favicon.height = 16;
                    ad_li.appendChild(ad_favicon);
                }

                ad_li.appendChild(ad_a);
                ul.insertBefore(ad_li, ul.firstChild);
            }
        } else if (this.config.ad_type == "img") {
            var img_ad_div = document.createElement('div');
            Blogroll.setClass(img_ad_div, 'blogroll-ad-img');
            img_ad_div.setAttribute('style', "display: block !important;");

            var img_ad_anchor = document.createElement('a');
            var ad_banner = this.config.ad_banner_list[Math.floor(Math.random() * this.config.ad_banner_list.length)];

            if (ad_banner) {
                img_ad_anchor.href = this.roll_host + 'ad_redirect?ad_id=' + ad_banner.id + '&channel_id=' + this.id;
                img_ad_anchor.target = '_blank';
                img_ad_anchor.title = ad_banner.text;

                var img_ad = document.createElement('img');
                img_ad.src = ad_banner.src;
                img_ad.setAttribute('alt', '');
                img_ad.setAttribute('style', "display: inline !important;");

                img_ad_anchor.appendChild(img_ad);
                img_ad_div.appendChild(img_ad_anchor);

                div.appendChild(img_ad_div);
            }
        }

        var default_ad = document.createElement('div');
        Blogroll.setClass(default_ad, 'blogroll-ad-default');
        default_ad.setAttribute('style', "display: block !important;");

        var default_ad_anchor = document.createElement('a');
        default_ad_anchor.href = 'https://blogroll.livedoor.com/';
        default_ad_anchor.target = '_blank';
        default_ad_anchor.appendChild(document.createTextNode('Powered by livedoor ç¸äºRSS'));
        default_ad.appendChild(default_ad_anchor);
        div.appendChild(default_ad);
    };

    Blogroll.prototype.add_sbm = function(li, item) {
        var ch = this.config;

        if (ch.view_hatena_bookmark != 0) {
            var hatebu = document.createElement('img');
            hatebu.src = "https://b.hatena.ne.jp/entry/image/" + item.entry_link;
            hatebu.style.border = 'none';
            var link = document.createElement('a');
            Blogroll.setClass(link, 'blogroll-hatebu');
            link.href = "https://b.hatena.ne.jp/entry/" + item.entry_link;
            link.target = "_blank";
            link.appendChild(hatebu);
            li.appendChild(link);
        }
    };

    Blogroll.prototype.add_tracking = function(a, item) {
        var channel_id = this.id;
        if (typeof blogroll_is_preview != "undefined") {
            return;
        }
        var call_url = this.roll_host + "click_js" +
            '?c=' + channel_id +
            '&f=' + item.feed_id +
            '&url=' + encodeURIComponent(item.entry_link) +
            '&sig=' + item.sig +
            '&title=' + encodeURIComponent(item.entry_title);

        var log_click = function (ev) {
            var log_img = document.createElement('img');
            log_img.src = call_url + '&_=' + (new Date()).getTime();
        };

        if (a.addEventListener) {
            a.addEventListener('click', log_click, false);
        } else if (a.attachEvent) { // for IE
            a.attachEvent('onclick', log_click);
        }
    };
    Blogroll.prototype.show_log = function() {
        var log_img = document.createElement('img');
        log_img.src = this.roll_host + 'img/blank.gif?channel_id=' + this.id;
    };

    Blogroll.prototype.show_categorized_feeds = function(div_id, name, value, ul) {
        "use strict";

        var entries = this.feeds;
        var channel = this.config;

        // entries array must be sorted.
        var category_id2feed = {};
        for (var i=0, l=entries.length; i<l; ++i) {
            var category_id = entries[i].category_id;
            if (!category_id2feed[category_id]) {
                category_id2feed[category_id] = [];
            }
            category_id2feed[category_id].push(entries[i]);
        }

        var show_number = (channel.show_number != 0) ? channel.show_number : this.feeds.length;
        var remains = show_number;

        var retval = [];
        (function () {
            var categories = channel.categories;
            for (var i=0, l=categories.length; i<l; i++) {
                var category_title = categories[i][1] || 'ã«ãã´ãªåæªè¨­å®';
                var category_id = categories[i][0];
                remains = this.show_one_category_entries(ul, category_title, category_id2feed[category_id], remains);
            }
        }).call(this);
        if (category_id2feed[0]) { // have non categorized feed
            this.show_one_category_entries(ul, 'ã«ãã´ãªåæªè¨­å®', category_id2feed[0], remains);
        }
    };
    Blogroll.prototype.show_one_category_entries = function(ul, category_name, entries, limit) {
        "use strict";

        this.create_category_name(ul, category_name);
        for (var i=0, l=entries.length; i<l; ++i) {
            if (limit-- <= 0) {
                return limit;
            }

            var li = this.create_item(entries[i]);
            ul.appendChild(li);
        }
        return limit;
    };
    Blogroll.prototype.show_non_categorized_entries = function(ul) {
        var ch = this.config;
        var len = this.feeds.length;
        if (ch.show_number != 0) {
            len = Math.min(ch.show_number, this.feeds.length);
        }

        for (var i = 0; i < len; i++) {
            var li = this.create_item(this.feeds[i]);
            ul.appendChild(li);
        }
    };
    Blogroll.prototype.show = function(div_id, name, value) {
        "use strict";

        var ch = this.config;
        var div = document.getElementById(div_id);
        div.innerHTML = "";
        this.setup_style(div, name, value);
        var ul = document.createElement('ul');
        Blogroll.setClass(ul, 'blogroll-list-wrap');

        if (this.is_categorize && ch.show_per_category) {
            if (this.feeds.length > 0 && !this.feeds[0].categorize_feeds) {
                this.show_categorized_feeds(div_id, name, value, ul);
            } else {
                // old style.
                var feeds_len = this.feeds.length;
                var total_categorize_feeds_len = 0;
                for (var j = 0; j < feeds_len; j++) {
                    total_categorize_feeds_len += this.feeds[j].categorize_feeds.length;
                }

                var show_number = (ch.show_number != 0) ? ch.show_number : total_categorize_feeds_len;
                var loop = 0;

                for (var i = 0; i < feeds_len; i++) {
                    if (this.feeds[i].category) {
                        this.create_category_name(ul, this.feeds[i].category);
                    }
                    for (var k=0, klen=this.feeds[i].categorize_feeds.length; k<klen; k++) {
                        if (this.feeds[i]) {
                            if (loop < show_number) {
                                var li = this.create_item(this.feeds[i].categorize_feeds[k]);
                                ul.appendChild(li);
                            }
                            loop++;
                        }
                    }
                }
            }
        } else {
            this.show_non_categorized_entries(ul);
        }
        div.appendChild(ul);
        if (ch.show_ad == 1) {
            this.add_ad(div, ul);
        }
        if (typeof blogroll_is_preview == "undefined") {
            this.show_log();
        }
    };
}

// callback function
function blogroll_write_feeds(id, config, feeds, is_categorize, ads) {
    if (typeof ads !== 'undefined') {
        if (config.ad_type === 'img') {
            config.ad_list = [];
            config.ad_banner_list = ads;
        } else {
            config.ad_list = ads;
            config.ad_banner_list = [];
        }
    }
    (new Blogroll(id, config, feeds, is_categorize)).show("blogroll-" + id);
}

(function () {
    if (typeof blogroll_channel_id == "undefined") {
        return;
    }
    document.write('<div id="blogroll-' + blogroll_channel_id + '" class="blogroll-channel"></div>');
    var chid = blogroll_channel_id;
    (function() {
        var script = document.createElement('script');
        // XXXX get from document.getElementsByTagName('script').pop().src ????
        var host = (typeof blogroll_roll_host == 'undefined') ? "https://blogroll.livedoor.net/" : blogroll_roll_host;
        script.src = host + chid + "/roll_data";
        if (typeof blogroll_is_preview != "undefined") {
            script.src += "?is_preview=1";
        }
        script.charset = "UTF-8";
        script.defer = "defer";
        script.async = "async";
        script.type = "text/javascript";
        document.getElementsByTagName('head')[0].appendChild(script);
    }) ();
    blogroll_channel_id = undefined;
})();