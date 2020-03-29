/*-----------------------------------------------------------------------------------*/
/*	RETINA.JS
/*-----------------------------------------------------------------------------------*/
(function () {
    function t(e) {
        this.path = e;
        var t = this.path.split("."),
            n = t.slice(0, t.length - 1).join("."),
            r = t[t.length - 1];
        this.at_2x_path = n + "@2x." + r
    }
    function n(e) {
        this.el = e, this.path = new t(this.el.getAttribute("src"));
        var n = this;
        this.path.check_2x_variant(function (e) {
            e && n.swap()
        })
    }
    var e = typeof exports == "undefined" ? window : exports;
    e.RetinaImagePath = t, t.confirmed_paths = [], t.prototype.is_external = function () {
        return !!this.path.match(/^https?\:/i) && !this.path.match("//" + document.domain)
    }, t.prototype.check_2x_variant = function (e) {
        var n, r = this;
        if (this.is_external()) return e(!1);
        if (this.at_2x_path in t.confirmed_paths) return e(!0);
        n = new XMLHttpRequest, n.open("HEAD", this.at_2x_path), n.onreadystatechange = function () {
            return n.readyState != 4 ? e(!1) : n.status >= 200 && n.status <= 399 ? (t.confirmed_paths.push(r.at_2x_path), e(!0)) : e(!1)
        }, n.send()
    }, e.RetinaImage = n, n.prototype.swap = function (e) {
        function n() {
            t.el.complete ? (t.el.setAttribute("width", t.el.offsetWidth), t.el.setAttribute("height", t.el.offsetHeight), t.el.setAttribute("src", e)) : setTimeout(n, 5)
        }
        typeof e == "undefined" && (e = this.path.at_2x_path);
        var t = this;
        n()
    }, e.devicePixelRatio > 1 && (window.onload = function () {
        var e = document.getElementsByTagName("img"),
            t = [],
            r, i;
        for (r = 0; r < e.length; r++) i = e[r], t.push(new n(i))
    })
})();
/*-----------------------------------------------------------------------------------*/
/*	ANCHOR SCROLL
/*-----------------------------------------------------------------------------------*/
/**
 * Copyright (c) 2007 Ariel Flesler - aflesler<a>gmail<d>com | https://github.com/flesler
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.0.0
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(t,o,n){var i=o.hash.slice(1),a=document.getElementById(i)||document.getElementsByName(i)[0];if(a){t&&t.preventDefault();var l=e(n.target);if(!(n.lock&&l.is(":animated")||n.onBefore&&!1===n.onBefore(t,a,l))){if(n.stop&&l.stop(!0),n.hash){var r=a.id===i?"id":"name",s=e("<a> </a>").attr(r,i).css({position:"absolute",top:e(window).scrollTop(),left:e(window).scrollLeft()});a[r]="",e("body").prepend(s),location.hash=o.hash,s.remove(),a[r]=i}l.scrollTo(a,n).trigger("notify.serialScroll",[a])}}}var o=location.href.replace(/#.*/,""),n=e.localScroll=function(t){e("body").localScroll(t)};return n.defaults={duration:1e3,axis:"y",event:"click",stop:!0,target:window,autoscroll:!0},e.fn.localScroll=function(i){function a(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,"")===o&&(!i.filter||e(this).is(i.filter))}return(i=e.extend({},n.defaults,i)).autoscroll&&i.hash&&location.hash&&(i.target&&window.scrollTo(0,0),t(0,location,i)),i.lazy?this.on(i.event,"a,area",function(e){a.call(this)&&t(e,this,i)}):this.find("a,area").filter(a).bind(i.event,function(e){t(e,this,i)}).end().end()},n.hash=function(){},n});

/**
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler ○ gmail • com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.1.3
 */
;(function(f){"use strict";"function"===typeof define&&define.amd?define(["jquery"],f):"undefined"!==typeof module&&module.exports?module.exports=f(require("jquery")):f(jQuery)})(function($){"use strict";function n(a){return!a.nodeName||-1!==$.inArray(a.nodeName.toLowerCase(),["iframe","#document","html","body"])}function h(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}var p=$.scrollTo=function(a,d,b){return $(window).scrollTo(a,d,b)};p.defaults={axis:"xy",duration:0,limit:!0};$.fn.scrollTo=function(a,d,b){"object"=== typeof d&&(b=d,d=0);"function"===typeof b&&(b={onAfter:b});"max"===a&&(a=9E9);b=$.extend({},p.defaults,b);d=d||b.duration;var u=b.queue&&1<b.axis.length;u&&(d/=2);b.offset=h(b.offset);b.over=h(b.over);return this.each(function(){function k(a){var k=$.extend({},b,{queue:!0,duration:d,complete:a&&function(){a.call(q,e,b)}});r.animate(f,k)}if(null!==a){var l=n(this),q=l?this.contentWindow||window:this,r=$(q),e=a,f={},t;switch(typeof e){case "number":case "string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)){e= h(e);break}e=l?$(e):$(e,q);case "object":if(e.length===0)return;if(e.is||e.style)t=(e=$(e)).offset()}var v=$.isFunction(b.offset)&&b.offset(q,e)||b.offset;$.each(b.axis.split(""),function(a,c){var d="x"===c?"Left":"Top",m=d.toLowerCase(),g="scroll"+d,h=r[g](),n=p.max(q,c);t?(f[g]=t[m]+(l?0:h-r.offset()[m]),b.margin&&(f[g]-=parseInt(e.css("margin"+d),10)||0,f[g]-=parseInt(e.css("border"+d+"Width"),10)||0),f[g]+=v[m]||0,b.over[m]&&(f[g]+=e["x"===c?"width":"height"]()*b.over[m])):(d=e[m],f[g]=d.slice&& "%"===d.slice(-1)?parseFloat(d)/100*n:d);b.limit&&/^\d+$/.test(f[g])&&(f[g]=0>=f[g]?0:Math.min(f[g],n));!a&&1<b.axis.length&&(h===f[g]?f={}:u&&(k(b.onAfterFirst),f={}))});k(b.onAfter)}})};p.max=function(a,d){var b="x"===d?"Width":"Height",h="scroll"+b;if(!n(a))return a[h]-$(a)[b.toLowerCase()]();var b="client"+b,k=a.ownerDocument||a.document,l=k.documentElement,k=k.body;return Math.max(l[h],k[h])-Math.min(l[b],k[b])};$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(a){return $(a.elem)[a.prop]()}, set:function(a){var d=this.get(a);if(a.options.interrupt&&a._last&&a._last!==d)return $(a.elem).stop();var b=Math.round(a.now);d!==b&&($(a.elem)[a.prop](b),a._last=this.get(a))}};return p});
$(document).ready(function(){ 
    $('.scroll,.nav-collapse .nav').localScroll({
	    offset: {top:-90, left:0}
    });
    $('.nav-collapse .nav a').click(function () { $(".nav-collapse").collapse("hide") });
  });

/*-----------------------------------------------------------------------------------*/
/*	FULLSCREEN SLIDER
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
	if ($.fn.cssOriginal != undefined) $.fn.css = $.fn.cssOriginal;
	$('.fullwidthbanner').revolution({
							delay:9000,
							startwidth:1170,
							startheight:750,

							onHoverStop:"on",						// Stop Banner Timet at Hover on Slide on/off

							thumbWidth:100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
							thumbHeight:50,
							thumbAmount:3,

							hideThumbs:200,
							navigationType:"bullet",				// bullet, thumb, none
							navigationArrows:"solo",				// nexttobullets, solo (old name verticalcentered), none

							navigationStyle:"round",				// round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom


							navigationHAlign:"center",				// Vertical Align top,center,bottom
							navigationVAlign:"bottom",					// Horizontal Align left,center,right
							navigationHOffset:0,
							navigationVOffset:40,

							soloArrowLeftHalign:"left",
							soloArrowLeftValign:"center",
							soloArrowLeftHOffset:20,
							soloArrowLeftVOffset:0,

							soloArrowRightHalign:"right",
							soloArrowRightValign:"center",
							soloArrowRightHOffset:20,
							soloArrowRightVOffset:0,

							touchenabled:"on",						// Enable Swipe Function : on/off



							stopAtSlide:-1,							// Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
							stopAfterLoops:-1,						// Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic

							hideCaptionAtLimit:0,					// It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
							hideAllCaptionAtLilmit:0,				// Hide all The Captions if Width of Browser is less then this value
							hideSliderAtLimit:0,					// Hide the whole slider, and stop also functions if Width of Browser is less than this value


							fullWidth:"on",

							shadow:0

	});	
});
/*-----------------------------------------------------------------------------------*/
/*	FORM
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function ($) {
    $('.forms').dcSlickForms();
});
$(document).ready(function () {
    $('.comment-form input[title], .comment-form textarea').each(function () {
        if ($(this).val() === '') {
            $(this).val($(this).attr('title'));
        }

        $(this).focus(function () {
            if ($(this).val() == $(this).attr('title')) {
                $(this).val('').addClass('focused');
            }
        });
        $(this).blur(function () {
            if ($(this).val() === '') {
                $(this).val($(this).attr('title')).removeClass('focused');
            }
        });
    });
});
/*-----------------------------------------------------------------------------------*/
/*	GRID BLOG
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
    var $container = $('.grid-blog');
    $container.imagesLoaded(function () {
        $container.isotope({
            itemSelector: '.post'
        });
    });
    $(window).on('resize', function(){
    	$('.grid-blog').isotope('reLayout')
	});
});
/*-----------------------------------------------------------------------------------*/
/*	SHOWCASE
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
    var $container = $('.showcase-wrapper .items');
    $container.imagesLoaded(function () {
        $container.isotope({
            itemSelector: '.showcase-wrapper .item',
            layoutMode: 'fitRows'
        });
    });

    $('.showcase-wrapper .filter li a').click(function () {

        $('.showcase-wrapper .filter li a').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector
        });

        return false;
    });
});
/*-----------------------------------------------------------------------------------*/
/*	LIGHTBOX
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
    var $container = $('.lightbox-wrapper .items');
    $container.imagesLoaded(function () {
        $container.isotope({
            itemSelector: '.lightbox-wrapper .item',
            layoutMode: 'fitRows'
        });
    });

    $('.lightbox-wrapper .filter li a').click(function () {

        $('.lightbox-wrapper .filter li a').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector
        });

        return false;
    });
});
/*-----------------------------------------------------------------------------------*/
/*	CONTENT SLIDER
/*-----------------------------------------------------------------------------------*/
/**************************************************************************
 * jQuery Plugin for Content Slider
 * @version: 1.0
 * @requires jQuery v1.8 or later
 * @author ThunderBudies
 **************************************************************************/

$(document).ready(function () {


	 var speed=600;			// SLIDE OUT THE MAIN CONTENT
	 var speed2=500;			// FADE IN THE NEW CONTENTS
	 var header_offset = 90;

	 jQuery.fn.extend({
        unwrapInner: function (selector) {
            return this.each(function () {
                var t = this,
                    c = $(t).children(selector);
                if (c.length === 1) {
                    c.contents().appendTo(t);
                    c.remove();
                }
            });
        }
    });
    
    jQuery('.dropdown-menu.filter a').each(function(i) {
    	jQuery(this).click(function() {
   	
			jQuery('.container.box.showcase-wrapper').css({minHeight:'0px'});
		});
    });




	///////////////////////////
	// GET THE URL PARAMETER //
	///////////////////////////
	function getUrlVars(hashdivider)
			{
				var vars = [], hash;
				var hashes = window.location.href.slice(window.location.href.indexOf(hashdivider) + 1).split('_');
				for(var i = 0; i < hashes.length; i++)
				{
					hashes[i] = hashes[i].replace('%3D',"=");
					hash = hashes[i].split('=');
					vars.push(hash[0]);
					vars[hash[0]] = hash[1];
				}
				return vars;
			}
	////////////////////////
	// GET THE BASIC URL  //
	///////////////////////
    function getAbsolutePath() {
		    var loc = window.location;
		    var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
		    return loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
    }

    //////////////////////////
	// SET THE URL PARAMETER //
	///////////////////////////
    function updateURLParameter(paramVal){
	    	var baseurl = window.location.pathname.split("#")[0];
	    	var url = baseurl.split("#")[0];
	    	if (paramVal==undefined) paramVal="";

	  		par='#'+paramVal;

			if (par=="#") par=" ";
		    window.location.replace(url+par);
	}


    var items = jQuery('.showcase-wrapper .item a');
    var deeplink = getUrlVars("#");

	 jQuery.ajaxSetup({
        // Disable caching of AJAX responses */
        cache: false
    });


    // FIRST ADD THE HANDLING ON THE DIFFERENT PORTFOLIO ITEMS
    items.slice(0, items.length).each(function (i) {
        var item = jQuery(this);
        item.data('index', i);

		var hashy = window.pageYOffset;


        if (jQuery.support.leadingWhitespace == false){
        	var conurl = jQuery(this).data('contenturl');
        	item.attr('href',conurl);
        } else {

				// THE HANDLING IN CASE ITEM IS CLICKED
				item.click(function () {

					hashy = window.pageYOffset;

					jQuery('.portfolio-filter.btn-group.pull-right.open').removeClass("open");

					var cur = item.data('index');
					jQuery('body').data('curPortfolio',cur);

					var hashy = window.pageYOffset;

					var grid = jQuery('.showcase-wrapper');

					// PREPARE THE CONTAINER FOR LOAD / REMOVE ITEMS
					grid.css({'minHeight':grid.outerHeight()+"px",'maxHeight':grid.outerHeight()+"px", 'position':'relative','overfow':'hidden'});
					grid.wrapInner('<div class="grid-remove"></div>');

					// REMOVE THE GRID
					var gr = grid.find('.grid-remove');
					gr.css({width:grid.outerWidth()+"px",height:grid.height()});
					gr.animate({'marginLeft':'-120%'},{duration:speed,queue:false, easing:"easeInOutCubic"});
					gr.fadeOut(speed+500);

					grid.append('<div class="grid-newcontent"></div>');
					grid.find('.grid-newcontent').fadeOut(0);
					grid.append('<div class="grid-loader"></div>');



					 //ADD A NEW CONTENT WRAPPER
					var conurl = jQuery(this).data('contenturl');
					var concon = jQuery(this).data('contentcontainer');
					updateURLParameter(conurl);

					var extraclass = "";

					clearTimeout(jQuery('body').data('minhreset'));
					// PRELOAD THE NEW ITEM
					setTimeout(function () {
						if (conurl != undefined && conurl.length > 0) {

							jQuery('.grid-newcontent').load(conurl + " " + concon, function () {

								//alert(jQuery('body,html').scrollTop()+"  "+grid.offset().top-(header_offset-60));
								
								jQuery('body,html').animate({
									scrollTop: (grid.offset().top-(header_offset-60)) + "px"
								}, {
									duration: 600,
									queue: false
								});


								var gnc = grid.find('.grid-newcontent');
								gnc.fadeIn(speed2);
								//grid.animate({'maxHeight':gnc.innerHeight()+"px"});
								grid.css({'maxHeight':'none'});
								jQuery('body').data('minhreset',setTimeout(function() {
									grid.transition({'minHeight':'0px','maxHeight':'none',duration:400});
								},1500));
								setTimeout(function() {
									var callback = new Function(item.data('callback'));
									callback();
								},speed2+100);
								jQuery('.grid-loader').fadeOut(speed2)
								setTimeout(function() {
									jQuery('.grid-loader').remove();
								},speed2);
							});
						}
					}, speed + 200);



					return false;

				});
			if (i==0) {
						// SET THE BASIC BUTTON FUNCTIONS
						jQuery('.btn.back').live("click",function() {
							updateURLParameter("!");
							jQuery('.portfolio-filter.btn-group.pull-right.open').removeClass("open");

							var grid = jQuery('.showcase-wrapper');
							clearTimeout(jQuery('body').data('minhreset'));

							//alert(jQuery('body,html').scrollTop()+"  "+grid.offset().top-(header_offset-60));
							jQuery('body,html').animate({
								scrollTop: (grid.offset().top-(header_offset-60)) + "px"
							}, {
								duration: 300,
								queue: false
							});

							var gr = grid.find('.grid-remove');
							grid.find('.grid-newcontent').fadeOut(speed2);
							setTimeout(function() {
								grid.find('.grid-newcontent').remove();
								grid.find('.grid-remove').find('div').first().unwrap();
								grid.transition({'minHeight':'0px',duration:300});
								var $container = $('.items').isotope('reLayout');
							},speed2+100);
							grid.css({'minHeight':gr.height()+"px", 'maxHeight':'none'});
							gr.animate({'marginLeft':'0'},{duration:speed,queue:false, easing:"easeInOutCubic"});
							gr.fadeIn(speed+800);
							setTimeout(function() {
								var $container = $('.items').isotope('reLayout');
							},100);
							return false;
						});

						jQuery('.nav-next-item').live('click',function() {
								
								var cur = jQuery('body').data('curPortfolio');
								cur = cur + 1;
								if (cur == items.length) cur = 0;

								jQuery('body').data('curPortfolio',cur);
								var nextitem;
								items.slice(cur, cur + 1).each(function (re) {
									
									nextitem = jQuery(this);
								});
								//console.log("Next Item:"+cur);
								swapContents(nextitem);
								return false;
						});

						jQuery('.nav-prev-item').live('click',function() {
								
								var cur = jQuery('body').data('curPortfolio');
								cur = cur - 1;
								if (cur < 0) cur = items.length - 1;
								jQuery('body').data('curPortfolio',cur);
								var nextitem;
								items.slice(cur, cur + 1).each(function (re) {
									
									nextitem = jQuery(this);
								});
								//console.log("Next Item:"+cur);
								swapContents(nextitem);
								return false;
						});
					}
		}
	});

	var firstfound=0;
    items.slice(0, items.length).each(function (i) {
     var item=jQuery(this);
   	 if (deeplink!=undefined && deeplink.length>0 && deeplink == jQuery(this).data('contenturl')) {
		   	 	if (firstfound==0) {

	  	 			setTimeout(function() {item.click();},2000);
	  	 			firstfound=1;
	  	 		}
    	    }
   });

	function swapContents(nextitem) {

			clearTimeout(jQuery('body').data('minhreset'));

			var grid = jQuery('.showcase-wrapper');
			var gr = grid.find('.grid-remove');

			grid.append('<div class="grid-loader"></div>');

			grid.find('.grid-newcontent').fadeOut(speed2/2);
			grid.css({'minHeight':gr.height()+"px", 'maxHeight':'none'});

			setTimeout(function() {

					//ADD A NEW CONTENT WRAPPER
					var conurl = nextitem.data('contenturl');
					var concon = nextitem.data('contentcontainer');
					updateURLParameter(conurl);



					var extraclass = "";


					if (conurl != undefined && conurl.length > 0) {

							jQuery('.grid-newcontent').load(conurl + " " + concon, function () {
								var gnc = grid.find('.grid-newcontent');
								gnc.fadeIn(speed2);
								//grid.animate({'maxHeight':gnc.innerHeight()+"px"});
								grid.css({'maxHeight':'none'});
								jQuery('body').data('minhreset',setTimeout(function() {
									grid.css({'minHeight':'auto','maxHeight':'none'});
								},2500));

								setTimeout(function() {
									var callback = new Function(nextitem.data('callback'));
									callback();
								},speed2+100);
								jQuery('.grid-loader').fadeOut(speed2)
								setTimeout(function() {
									jQuery('.grid-loader').remove();
								},speed2);
							});
						}
			},speed2+100);
	}

});
/*-----------------------------------------------------------------------------------*/
/*	CALL PORTFOLIO SCRIPTS
/*-----------------------------------------------------------------------------------*/

function callPortfolioScripts() {

    jQuery('.player').fitVids();
    
    $('.portfolio-banner').revolution({
		delay: 9000,
		startheight: 600,
		startwidth: 1170,
		hideThumbs: 200,
		navigationType: "bullet",
		// bullet, thumb, none
		navigationArrows: "verticalcentered",
		// nexttobullets, solo (old name verticalcentered), none
		navigationStyle: "round",
		// round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom
		navigationHAlign: "center",
		// Vertical Align top,center,bottom
		navigationVAlign: "bottom",
		// Horizontal Align left,center,right
		navigationHOffset: 0,
		navigationVOffset: 20,
		soloArrowLeftHalign: "left",
		soloArrowLeftValign: "center",
		soloArrowLeftHOffset: 20,
		soloArrowLeftVOffset: 0,
		soloArrowRightHalign: "right",
		soloArrowRightValign: "center",
		soloArrowRightHOffset: 20,
		soloArrowRightVOffset: 0,
		touchenabled: "on",
		// Enable Swipe Function : on/off
		onHoverStop: "on",
		// Stop Banner Timet at Hover on Slide on/off
		stopAtSlide: -1,
		// Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
		stopAfterLoops: -1,
		// Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic
		hideCaptionAtLimit: 0,
		// It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
		hideAllCaptionAtLilmit: 0,
		// Hide all The Captions if Width of Browser is less then this value
		hideSliderAtLimit: 0,
		// Hide the whole slider, and stop also functions if Width of Browser is less than this value
		shadow: 0,
		//0 = no Shadow, 1,2,3 = 3 Different Art of Shadows  (No Shadow in Fullwidth Version !)
		fullWidth: "off" // Turns On or Off the Fullwidth Image Centering in FullWidth Modus
	});	

};
/*-----------------------------------------------------------------------------------*/
/*	PORTFOLIO SLIDER
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
	if ($.fn.cssOriginal != undefined) $.fn.css = $.fn.cssOriginal;
	$('.portfolio-banner').revolution({
		delay: 9000,
		startheight: 600,
		startwidth: 1170,
		hideThumbs: 200,
		navigationType: "bullet",
		// bullet, thumb, none
		navigationArrows: "verticalcentered",
		// nexttobullets, solo (old name verticalcentered), none
		navigationStyle: "round",
		// round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom
		navigationHAlign: "center",
		// Vertical Align top,center,bottom
		navigationVAlign: "bottom",
		// Horizontal Align left,center,right
		navigationHOffset: 0,
		navigationVOffset: 20,
		soloArrowLeftHalign: "left",
		soloArrowLeftValign: "center",
		soloArrowLeftHOffset: 20,
		soloArrowLeftVOffset: 0,
		soloArrowRightHalign: "right",
		soloArrowRightValign: "center",
		soloArrowRightHOffset: 20,
		soloArrowRightVOffset: 0,
		touchenabled: "on",
		// Enable Swipe Function : on/off
		onHoverStop: "on",
		// Stop Banner Timet at Hover on Slide on/off
		stopAtSlide: -1,
		// Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
		stopAfterLoops: -1,
		// Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic
		hideCaptionAtLimit: 0,
		// It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
		hideAllCaptionAtLilmit: 0,
		// Hide all The Captions if Width of Browser is less then this value
		hideSliderAtLimit: 0,
		// Hide the whole slider, and stop also functions if Width of Browser is less than this value
		shadow: 0,
		//0 = no Shadow, 1,2,3 = 3 Different Art of Shadows  (No Shadow in Fullwidth Version !)
		fullWidth: "on" // Turns On or Off the Fullwidth Image Centering in FullWidth Modus
	});	
});
/*-----------------------------------------------------------------------------------*/
/*	DRIBBBLE
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {			
// NOTE: Don't use this token, replace it with your own client access token.
$.jribbble.setToken('f739579ebb235a0e0456abbb6381e7f8a0d92ff198796ae8deed27c64d6debeb');

$.jribbble.users('gustavholtz').shots({per_page: 8}).then(function(shots) {
  var html = [];
  
  shots.forEach(function(shot) {
    html.push('<li class="thumb"><figure class="overlay"><a href="' + shot.html_url + '" target="_blank">');
    html.push('<img src="' + shot.images.normal + '">');
    html.push('</figure></a></li>');
  });
  
  $('.shots').html(html.join(''));
  $('.overlay a').prepend('<span class="more"></span>');
});
});
/*-----------------------------------------------------------------------------------*/
/*	TESTIMONIALS
/*-----------------------------------------------------------------------------------*/  
 $(document).ready( function() {
      $('.testimonials-tab').easytabs({
	      animationSpeed: 500,
	      updateHash: false,
	      cycle: 5000
      });
      
    });
/*-----------------------------------------------------------------------------------*/
/*	SHOWBIZ
/*-----------------------------------------------------------------------------------*/   
jQuery(document).ready(function() {
          jQuery('.showbiz-container.landscape').showbizpro({
            dragAndScroll:"on",
            visibleElementsArray:[2,2,2,1],
            mediaMaxHeight:[0,0,0,0],
            carousel:"off",
            heightOffsetBottom:0,
            rewindFromEnd:"off",
            autoPlay:"off",
            delay:2000,           
            speed:250
          });
          
          jQuery('.showbiz-container.portrait').showbizpro({
            dragAndScroll:"on",
            visibleElementsArray:[4,3,3,2],
            mediaMaxHeight:[0,0,0,0],
            carousel:"off",
            heightOffsetBottom:0,
            rewindFromEnd:"off",
            autoPlay:"off",
            delay:2000,           
            speed:250
          });
});
/*-----------------------------------------------------------------------------------*/
/*	IMAGE HOVER
/*-----------------------------------------------------------------------------------*/				
$(document).ready(function() {
	$('.overlay a').prepend('<span class="more"></span>');
});
/*-----------------------------------------------------------------------------------*/
/*	MENU
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
      $('.js-activated').dropdownHover().dropdown();
    });
/*-----------------------------------------------------------------------------------*/
/*	PRETTIFY
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function () {
window.prettyPrint && prettyPrint()
});
/*-----------------------------------------------------------------------------------*/
/*	PARALLAX MOBILE
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
if( navigator.userAgent.match(/Android/i) || 
	navigator.userAgent.match(/webOS/i) ||
	navigator.userAgent.match(/iPhone/i) || 
	navigator.userAgent.match(/iPad/i)|| 
	navigator.userAgent.match(/iPod/i) || 
	navigator.userAgent.match(/BlackBerry/i)){
			$('.parallax').addClass('mobile');
}
});
/*-----------------------------------------------------------------------------------*/
/*	DATA REL
/*-----------------------------------------------------------------------------------*/
$('a[data-rel]').each(function() {
    $(this).attr('rel', $(this).data('rel'));
});