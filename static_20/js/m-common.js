// // lazy-img
// function registerListener(t, e) {
//   window.addEventListener ? window.addEventListener(t, e) : window.attachEvent("on" + t, e);
// }
// function isInViewport(t) {
//   var e = t.getBoundingClientRect();
//   return (
//     e.bottom >= 0 &&
//     e.right >= 0 &&
//     e.top <= (window.innerHeight || document.documentElement.clientHeight) &&
//     e.left <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }
// var lazy = [];
// function setLazy() {
//   lazy = document.getElementsByClassName("lazy-img");
// }
// function lazyLoad() {
//   for (var t = 0; t < lazy.length; t++)
//     isInViewport(lazy[t]) &&
//       lazy[t].getAttribute("data-src") &&
//       ((lazy[t].src = lazy[t].getAttribute("data-src")), lazy[t].removeAttribute("data-src"));
//   cleanLazy();
// }
// function cleanLazy() {
//   lazy = Array.prototype.filter.call(lazy, function (t) {
//     return t.getAttribute("data-src");
//   });
// }
// registerListener("load", setLazy),
//   registerListener("load", lazyLoad),
//   registerListener("scroll", lazyLoad),
//   registerListener("resize", lazyLoad);
// function add_favor() {
//   $.post(urlroot + "/ws_action/handle.php?module", {type: "add_favor"}, function (rs) {
//     if (rs == 10) {
//       $("#alert_favourite")
//         .text("Báº¡n cáº§n Ä‘Äƒng nháº­p Ä‘á»ƒ thá»±c hiá»‡n Ä‘Æ°á»£c chá»©c nÄƒng nÃ y")
//         .fadeIn()
//         .fadeOut(1000);
//     } else $("#alert_favourite").text(rs.msg).fadeIn().fadeOut(1000);
//   });
// }
// function TVH_ADS_GetCookie(Name) {
//   var re = new RegExp(Name + "=[^;]+", "i");
//   if (document.cookie.match(re)) return decodeURIComponent(document.cookie.match(re)[0].split("=")[1]);
//   return "";
// }
// function TVH_ADS_SetCookie(name, value, days) {
//   if (typeof days != "undefined") {
//     var expireDate = new Date();
//     var expstring = expireDate.setDate(expireDate.getDate() + days);
//     var now = new Date();
//     now.setTime(now.getTime() + 365 * 24 * 3600 * 1000);
//     document.cookie = name + "=" + decodeURIComponent(value) + "; expires=" + now.toUTCString() + "; path=/";
//   } else document.cookie = name + "=" + decodeURIComponent(value);
// }

// var urlroot = window.location.protocol + "//" + window.location.host;
// var send = 1,
//   str_alert = "",
//   txt_name = "",
//   txt_phone = "",
//   txt_address = "";
// $(document).ready(function () {
//   $("#gotoTop").click(function () {
//     $("html, body").animate({scrollTop: 0}, 300);
//   });
//   if ($("#close_popup").length == 1) {
//     $("#close_popup").click(function () {
//       $.post(urlroot + "/ajax/ajax/member2/close_msg", {}).done(function (data) {
//         $("#ta123home_popup").hide();
//       });
//     });
//   }
//   $("#btn_buycard").click(function () {
//     txt_name = $("#txt_name").val();
//     if (txt_name == "") {
//       str_alert += "<p>+ TÃªn Ä‘á»ƒ chÃºng tÃ´i tiá»‡n liÃªn há»‡.</p>";
//       $("#txt_name").focus();
//       send = 0;
//     }
//     txt_phone = $("#txt_phone").val();
//     if (txt_phone == "") {
//       str_alert += "<p>+ Sá»‘ Ä‘iá»‡n thoáº¡i ngÆ°á»i nháº­n</p>";
//       if (txt_name != "") $("#txt_phone").focus();
//       send = 0;
//     }
//     txt_address = $("#txt_address").val();
//     if (txt_address == "") {
//       send = 0;
//       str_alert += "<p>+ Äá»‹a chá»‰ nháº­n tháº»</p>";
//       if (txt_name != "" && txt_phone != "") $("#txt_address").focus();
//     }
//     if (send == 1) {
//       $("#btn_buycard").hide();
//       $("#alert_form").html('<div style="color:green">Äang gá»­i Ä‘Äƒng kÃ½ tÆ° váº¥n ...</div>');
//       var type_card = "1 tháº» VIP tiáº¿ng Anh";
//       var subject = "";
//       if ($("#subject_form").length == 1) {
//         subject = $("#subject_form").val();
//       }
//       var url_buy_card = urlroot + "/ajax/ajax/datthe/send";
//       var params_card = {
//         subject: subject,
//         "card-type": type_card,
//         fullname: txt_name,
//         phone: txt_phone,
//         address: txt_address,
//       };
//       $.post(url_buy_card, params_card, function (rs) {
//         var rs = $.parseJSON(rs);
//         console.log(rs);
//         if (rs.error) alert(rs.error);
//         else if (rs.success) {
//           location = "/dat-the?return=" + rs.success;
//         }
//       });
//     } else {
//       $("#alert_form").html("<strong>Báº¡n cáº§n nháº­p</strong>" + str_alert);
//     }
//   });
//   $("#search_bh").click(function () {
//     $("#box_search").fadeIn(500);
//   });
//   $("*").click(function (events) {
//     if (!$(events.target).hasClass("img_search") && !$(events.target).hasClass("search-txt"))
//       $("#box_search").fadeOut(500);
//   });
// });
// function showMenu() {
//   $("#box_menu").fadeToggle("slow", "swing");
// }
// $(document).mouseup(function () {
//   $("#box_menu").mouseup(function () {
//     return false;
//   });
//   $("#box_menu").hide();
// });
// var funcs = {},
//   loadFunc = false;
// function showDictionary() {
//   if (!loadFunc) {
//     $.getScript(urlroot + "/mobile/static/js/funcs.js", function () {
//       loadFunc = true;
//       funcs.dich.show();
//     });
//   } else {
//     funcs.dich.show();
//   }
// }
// function m_login_openid(identity) {
//   var url = urlroot + "/ajax/ajax/oauth/" + identity;
//   window.location = url;
// }
// function form_report_err(handler) {
//   if (handler == "close") {
//     $("#render_report_error").html("");
//     return false;
//   }
//   var pre_send = '<div class="m_wrapper_gopy">';
//   pre_send += '<div id="box_send_error" class="m_new_bar">';
//   pre_send += '<div class="m_new_bar_title">BÃ¡o lá»—i - GÃ³p Ã½</div>';
//   pre_send += '<div class="m_new_bar_info">';
//   pre_send +=
//     "Náº¿u báº¡n phÃ¡t hiá»‡n ra lá»—i hoáº·c cÃ³ gÃ³p Ã½ vá» ná»™i dung - cháº¥t lÆ°á»£ng cá»§a bÃ i há»c nÃ y, xin vui lÃ²ng gá»­i cho BQT. ÄÃ³ng gÃ³p cá»§a báº¡n sáº½ giÃºp Tiáº¿ng Anh 123 cÃ³ cháº¥t lÆ°á»£ng ngÃ y má»™t tá»‘t hÆ¡n.<br>";
//   pre_send += "ChÃ¢n thÃ nh cáº£m Æ¡n!";
//   pre_send += "</div>";
//   pre_send += '<textarea placeholder="Xin nháº­p ná»™i dung á»Ÿ Ä‘Ã¢y" class="m_new_bar_area"></textarea>';
//   pre_send += '<a class="m_new_bar_sent" href="javascript:;" onclick="send_report_err(this);">Gá»­i</a>';
//   pre_send +=
//     '<a class="m_new_bar_close" href="javascript:;" onclick="form_report_err(&#39;close&#39;);">ÄÃ³ng cá»­a sá»•</a>';
//   pre_send += '<div style="clear:both;"></div>';
//   pre_send += '<div class="m_new_bar_narrow"></div>';
//   pre_send += "</div>";
//   pre_send += "</div>";
//   $("#render_report_error").html(pre_send);
// }

// function send_report_err(curr) {
//   var content_report = $(".m_new_bar_area").val();
//   var user = $(".m_login a:first").attr("title");
//   if (user == "ÄÄƒng kÃ­") user = "";
//   var link = $(".m_login a:first").attr("href");
//   var vip_kid = $("#is_vipkid").val();
//   if ($.trim(content_report) == 0 || $.trim(content_report).length < 6) {
//     alert("Ná»™i dung gá»­i Ã­t nháº¥t 6 kÃ½ tá»± vÃ  tá»‘i Ä‘a 1.000 kÃ½ tá»±");
//   } else if ($.trim(content_report).length > 1000) {
//     alert("Ná»™i dung gá»­i vÆ°á»£t quÃ¡ 1.000 kÃ½ tá»±");
//   } else {
//     $(curr).removeAttr("onclick").text("Äang gá»­i...");
//     var parrams = {
//       act_nologin: "report_error",
//       cont: content_report,
//       user: user,
//       link: link,
//       vipkid: vip_kid,
//       cn: navigator.appCodeName,
//       n: navigator.appName,
//       bv: navigator.appVersion,
//       con: navigator.cookieEnabled,
//       p: navigator.platform,
//     };
//     $.post(urlroot + "/ws_action/handle.php", parrams, function (data) {
//       if (data) {
//         var bef_send = '<div class="m_wrapper_gopy">';
//         bef_send += '<div class="m_new_bar small">';
//         bef_send += '<div class="m_gopy_success">';
//         bef_send += '<span class="m_gopy_1">Thank you!</span>';
//         bef_send +=
//           '<span class="m_gopy_2">Cáº£m Æ¡n báº¡n. Ná»™i dung gÃ³p Ã½ cá»§a báº¡n Ä‘Ã£ Ä‘Æ°á»£c gá»­i Ä‘áº¿n BQT website.</span>';
//         bef_send += '<span class="m_gopy_3">Cá»­a sá»• sáº½ tá»± Ä‘Ã³ng sau 3 giÃ¢y</span>';
//         bef_send += '<a class="m_gopy_close" href="javascript:;" onclick="form_report_err(&#39;close&#39;);"></a>';
//         bef_send += "</div>";
//         bef_send += '<div class="m_new_bar_narrow"></div>';
//         bef_send += "</div>";
//         bef_send += "</div>";
//         $("#render_report_error").html(bef_send);
//         var t = setInterval(function () {
//           $("#render_report_error").html("");
//           clearInterval(t);
//         }, 3000);
//       }
//     });
//   }
// }
