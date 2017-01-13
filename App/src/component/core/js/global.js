var o2 = o2 || {};
o2.Global = function() {
    "use strict";
    var a = {},
        b = 575,
        c = jQuery("html"),
        d = function() {
            jQuery("#javascriptWarning").remove()
        },
        e = function(a, b) {
            var c = jQuery(".lp-mobile-chat-button:eq(" + b + ")");
            c.after(jQuery.parseHTML(a)), c.next("div").find(".product-cta").text(""), c.appendTo(c.next("div").find(".product-cta")), f($("div.lp-available:eq(" + b + ")"), c)
        },
        f = function(a, b) {
            a.on("click", function() {
                b.click()
            }), b.on("click", function(a) {
                a.stopPropagation()
            })
        },
        g = function(a, b) {
            var c = jQuery(".lp-mobile-chat-button:eq(" + b + ")");
            c.after(jQuery.parseHTML(a))
        },
        h = function() {
            jQuery(".lp-mobile-chat-button").detach()
        },
        i = function() {
            jQuery(".lp").detach()
        },
        j = function() {
            c.on("click", '#o2-page-wrapper a[href^="#"]', function() {
                var a = !0,
                    b = jQuery(this).attr("href").replace("#", ""),
                    c = function() {
                        return jQuery('[name="' + b + '"]').length > 0 ? jQuery('[name="' + b + '"]').offset().top : void(a = !1)
                    }();
                a && jQuery("html, body").animate({
                    scrollTop: c + "px"
                })
            })
        },
        k = function() {
            var a = jQuery(".module"),
                b = /iPhone|iPod|iPad|Android|BlackBerry/.test(navigator.userAgent);
            b || a.each(function() {
                var a = jQuery(this);
                a.hasClass("no-hover") || a.find("a:first-child").append('<span class="hover-down" />')
            })
        },
        l = function() {
            $(".deep-link").on("click keypress", function(a) {
                a.preventDefault(), $(this).find("form").submit()
            })
        },
        m = function() {
            Modernizr.svg || jQuery('img[src*="svg"]').attr("src", function() {
                return jQuery(this).attr("src").replace(".svg", ".png")
            })
        },
        n = function(a, b, c) {
            var d = new Date;
            d.setDate(d.getDate() + c);
            var e = escape(b) + (null === c ? "" : "; expires=" + d.toUTCString());
            //document.cookie = a + "=" + e + ";domain=.o2.co.uk;path=/"
            document.cookie = a + "=" + e; 
        },
        o = function(a) {
            var b = document.cookie.indexOf(a + "="),
                c = b + a.length + 1;
            if (!b && a !== document.cookie.substring(0, a.length)) return null;
            if (-1 === b) return null;
            var d = document.cookie.indexOf(";", c);
            return -1 === d && (d = document.cookie.length), unescape(document.cookie.substring(c, d))
        },
        p = function() {
            var a = String(o("anonP3"));
            return a = a.replace(/</g, " "), a = a.replace(/>/g, " "), a = a.replace(/{/g, " "), a = a.replace(/}/g, " "), a = a.replace(/\"/g, " "), a = a.replace(/\//g, " "), a = a.replace(/\\/g, " "), a = a.replace(/;/g, " "), a = a.replace(/script/gi, " "), a = a.replace(/javascript/gi, " ")
        };
    return a.isMobile = function(a) {
        if (!a) {
            var d = jQuery("body");
            d.css("overflow-y", "hidden"), a = c.width(), d.css("overflow-y", "")
        }
        return b > a ? !0 : !1
    }, a.getUserName = function() {
        return p()
    }, a.setCookie = function(a, b, c) {
        return n(a, b, c)
    }, a.getCookie = function(a) {
        return o(a)
    }, a.setMobileLivePersonAvailable = function(a, b) {
        return e(a, b)
    }, a.setMobileLivePersonUnavailable = function(a, b) {
        return g(a, b)
    }, a.detachMobileLivePersonButtons = function() {
        return h()
    }, a.detatchInactiveMobileLivePersonPlaceholder = function() {
        return i()
    }, a.init = function() {
        d(), k(), l(), m(), j()
    }, a
}(), jQuery(function() {
    for (var a in o2) o2[a].init && o2[a].init()
});

function scrollToAnchor(aid){
    var aTag = $('a[name="'+ aid +'"]');
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}


o2.GenericContent = (function() {
    'use strict';
 
    var genericContent = {},

        genericAccordionInit = function() {
 
            var $accordion = jQuery('.accordion'),
                $accordionLinkElements = jQuery('.accordion h2'),
                $accordionContentElements = jQuery('.accordion div');

            if ($accordion.length > 0) {
                $accordionLinkElements.prepend('<span class="js-accordion-indicator">&#43;</span>');
                $accordionLinkElements.on('click', genericAccordionLinkClick);
                $accordionContentElements.hide();
            }

            $accordionLinkElements.keydown(function(event){    
                if(event.keyCode===13){
                    $(this).trigger('click');
                }
            });

        },

        genericAccordionLinkClick = function() {


            toggleSymbol = '&#43;';
            jQuery('.js-accordion-indicator').html(toggleSymbol);
            var $thisAccordionContent = jQuery(this).siblings('div').first(),
                toggleSymbol = '&#8722;';
            if ($thisAccordionContent.is(':hidden')) {
                jQuery('.accordion div').hide();
                $thisAccordionContent.slideDown();
                $thisAccordionContent.closest('li').prepend('<a id="anchor" name="anchor">&nbsp;</a>');
                scrollToAnchor('anchor');
                jQuery('#anchor').remove();             
            } else {
                $thisAccordionContent.slideUp();
                toggleSymbol = '&#43;';
            }
            jQuery(this).find('.js-accordion-indicator').html(toggleSymbol);
        };

    genericContent.init = function() {
        genericAccordionInit();
    };

    return genericContent;

})();