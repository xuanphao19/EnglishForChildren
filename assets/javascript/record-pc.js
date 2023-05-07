// record voice
var _isGetMedia = 0;
function startUserMedia(stream) {
  _isGetMedia = 1;
}
var audio_record = document.getElementById("audio_record");
function showInstructionRecord() {
  $("#kr_arrecord").hide();
  $("#show_hd_record").show();
}
function close_hd(cmd) {
  $("#show_hd_record").hide();
}
window.onload = function init() {
  if ($(".icon-record").length > 0) {
    $(".recording_user").click(function () {
      if (!_isGetMedia) {
        navigator.mediaDevices.getUserMedia({audio: true}, startUserMedia, function (e) {});
      }
    });
  }
};
// end record voice
function stopRecording() {
  console.log("stop");
}
// record text google speech
function replace_txt(str) {
  if (str.indexOf(".") > 0) {
    str = str.replace(/\./g, "");
  }
  if (str.indexOf("!") > 0) {
    str = str.replace(/!/g, "");
  }
  if (str.indexOf("?") > 0) {
    str = str.replace(/\?/g, "");
  }
  if (str.indexOf(",") > 0) {
    str = str.replace(/,/g, "");
  }
  if (str.indexOf("/") > 0) {
    str = str.replace(/\//g, "");
  }
  if (str.indexOf(":") > 0) {
    str = str.replace(/:/g, "");
  }
  if (str.indexOf("â€™") > 0) {
    str = str.replace(/'/g, "'");
  }
  if (str.indexOf("(") > 0) {
    str = str.replace(/\(/g, "");
  }
  if (str.indexOf("(") > 0) {
    str = str.replace(/\(/g, "");
  }
  if (str.indexOf("â€™") > 0) {
    str = str.replace(/â€™/g, "'");
  }
  str = str.toLowerCase();
  str = $.trim(str);
  return str;
}
/*CHAM DIEM LUYEN TAP*/
var n_score = 0;
function kr_score() {
  n_score++;
  if (n_score > 2 && !paidmember()) {
    $("#kr_none_kids").show();
  } else {
    var txt_user = replace_txt($("#krrt_text").text());
    var txt_true = $.trim($("#krrt_text").attr("result").replace(/-/g, " ").replace(/\s+/g, " "));
    txt_true = replace_txt(txt_true);
    $.post("/ws_action/handle.php", {string1: txt_true, string2: txt_user, type: "smarttext"}, function (obj) {
      var data = obj.split("|");
      var persent = data[2];
      $("#krrs_number").text(persent + "%");
      if (persent <= 50) {
        $("#kr_tresult").text("Báº¡n hÃ£y lÃ m láº¡i Ä‘á»ƒ Ä‘áº¡t Ä‘iá»ƒm cao hÆ¡n nhÃ©!");
      } else if (persent > 50 && persent <= 70) {
        $("#kr_tresult").text("Báº¡n lÃ m khÃ¡ tá»‘t. Cá»‘ gáº¯ng hÆ¡n ná»¯a nhÃ©!");
      } else if (persent > 70 && persent <= 90) {
        $("#kr_tresult").text("Báº¡n lÃ m ráº¥t tá»‘t. Cá»‘ gáº¯ng thÃªm Ä‘á»ƒ Ä‘áº¡t 100% nhÃ©.");
      } else if (persent > 90) {
        $("#kr_tresult").text("Báº¡n ráº¥t xuáº¥t sáº¯c. Cá»‘ gáº¯ng phÃ¡t huy nhÃ©!");
      }
    });
  }
}
(function ($) {
  // function wave
  $.fn.wave_random = function (options) {
    var defaults = {$top_min: 0, $top_max: 25};
    var settings = $.extend({}, defaults, options);
    var _self = $(this);
    var _top;
    (function loop_wave() {
      _top = Math.floor(Math.random() * (settings.$top_max - settings.$top_min + 1)) + settings.$top_min;
      _self.stop(true).animate({top: _top}, 200, "linear", function () {
        loop_wave();
      });
    })();
  };
  var cvd_record = {
      id_box: "box_record",
      is_recording: false,
      html_record:
        '<div id="show_hd_record" style="position: fixed;top: 0px;bottom: 0px;right: 0px;left: 0px;background: #0000005c;z-index: 99999; display:none"><div class="content_hd zoomIn animated" style="width: 80%;margin: 20px auto;background: #fff;height: 570px;border-radius: 5px;"><div class="cont" style="padding: 30px; float: left"><h3>Báº¡n nhÃ¬n vÃ o thanh trÃ¬nh duyá»‡t vÃ  lÃ m theo hÆ°á»›ng dáº«n bÃªn dÆ°á»›i</h3><p>Báº¡n click vÃ o biá»ƒu tÆ°á»£ng nhÆ° hÃ¬nh 1 trÃªn thanh trÃ¬nh duyá»‡t</p><p>CÃ³ 1 há»™p thoáº¡i hiá»‡n ra nhÆ° hÃ¬nh 2. Báº¡n click vÃ o lá»±a chá»n Ä‘áº§u tiÃªn (Always allow ....) áº¥n nÃºt Done lÃ  xong (nhÆ° hÃ¬nh 2) sau Ä‘Ã³ báº¡n cÃ³ thá»ƒ ghi Ã¢m Ä‘Æ°á»£c.</p><div style =" float: left; margin-right: 10px"><img src ="/file/common/huong-dan/chrome1.png"  style="width: 307px; vertical-align: top; margin-right:10px;height:141px; border: 2px solid green"/><center>(hÃ¬nh 1)</center></div> <div style="float: left"><img src ="/file/common/huong-dan/chrome2.png" style="width: 333px; height:252px; border:2px solid green" /><center>(hÃ¬nh 2)</center></div></div><div class="fa far" onclick="close_hd(this)" style="cursor:pointer;float: right;font-size: 30px;margin: 20px;">&#xf00d;</div></div></div><div id="record"></div><div class="ge" id="kr_arrecord">\
						<div class="ge" id="kr_uparrow"></div>\
						<div class="ge" id="kr_none_kids">Báº¡n pháº£i lÃ  <a href="/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" target="_blank" title="quyá»n lá»£i thÃ nh viÃªn VIP" style="color:orange; text-decoration:underline">thÃ nh viÃªn VIP cá»§a tienganh123.com</a> má»›i Ä‘Æ°á»£c cháº¥m Ä‘iá»ƒm.</div>\
						<div class="ge" id="kr_arresult">\
						<div class="ge" id="krr_area">\
						<div class="ge" id="krr_ispeak" style="display: block;"></div>\
						<div class="ge" id="krr_arwave" style="display: none;">\
						<div class="ge krrw_wave" style="top: 0px;"></div>\
						<div class="ge krrw_wave" style="top: 0px;"></div>\
						<div class="ge krrw_wave" style="top: 0px;"></div>\
						</div>\
						<div class="ge" id="krr_arscore" style="display: none;">\
						<div class="ge" id="krrs_text">Báº¡n Äáº¡t</div>\
						<div class="ge" id="krrs_number">0%</div>\
						</div>\
						</div>\
						<div class="ge" id="krr_verline" style="display: none;"></div>\
						<div class="ge" id="krr_artext">\
						<div class="ge" id="krrt_bgtext">\
						<div class="ge" id="ff_browser" style="display: none;">(Chá»©c nÄƒng ghi Ã¢m hiá»‡n táº¡i chÆ°a Ä‘Æ°á»£c trÃ¬nh duyá»‡t nÃ y há»— trá»£. Báº¡n hÃ£y dÃ¹ng Chrome phiÃªn báº£n 25 trá»Ÿ lÃªn. <a href= "//www.google.com/chrome" style="color: #149bf0;" target ="_blank">Download Chrome</a></div>\
						<div class="ge" id="krrt_ins" style="display: table-cell;">Báº¡n hÃ£y kÃ­ch chuá»™t vÃ o biá»ƒu tÆ°á»£ng micro hoáº·c áº¥n phÃ­m Enter Ä‘á»ƒ báº¯t Ä‘áº§u ghi Ã¢m...</div>\
						<div class="ge" id="krrt_text" result="hi"></div>\
						</div>\
						</div>\
						</div>\
						<div class="ge" id="kr_tresult" style="display: none;">Báº¡n hÃ£y lÃ m láº¡i Ä‘á»ƒ Ä‘áº¡t Ä‘iá»ƒm cao hÆ¡n nhÃ©!</div>\
						<div class="ge" id="kr_arbutton">\
						<div class="ge" id="krb_arrecord" style="display: none;">\
						<div class="ge" id="krbre_icon"></div>\
						<div class="ge" id="krbre_text">Ghi Ã¢m láº¡i (enter)</div>\
						</div>\
						<div class="ge" id="krb_arspeak" style="display: none;">\
						<div class="ge" id="krbsp_icon"></div>\
						<div class="ge" id="krbsp_text">Nghe láº¡i bÃ i ghi Ã¢m</div>\
						</div>\
						<div class="ge act" id="krb_arstop" style="display: none;">\
						<div class="ge" id="krbst_icon"></div>\
						<div class="ge" id="krbst_text">Dá»«ng ghi Ã¢m (enter)</div>\
						</div>\
						</div>\
						<div class="ge" id="kr_bclose"></div>\
						',
      id_info: "krrt_ins",
      txt_upgrade:
        '(Chá»©c nÄƒng ghi Ã¢m hiá»‡n táº¡i chÆ°a Ä‘Æ°á»£c trÃ¬nh duyá»‡t nÃ y há»— trá»£. Báº¡n hÃ£y dÃ¹ng Chrome phiÃªn báº£n 25 trá»Ÿ lÃªn. <a href= "//www.google.com/chrome" style="color: #149bf0;" target ="_blank">Download Chrome</a>)',
      txt_ins:
        "Báº¡n hÃ£y kÃ­ch chuá»™t vÃ o biá»ƒu tÆ°á»£ng micro hoáº·c áº¥n phÃ­m Enter Ä‘á»ƒ báº¯t Ä‘áº§u ghi Ã¢m...",
      txt_speak_now: "Äang ghi Ã¢m - HÃ£y Ä‘á»c bÃ i ghi Ã¢m cá»§a báº¡n",
      txt_no_microphone:
        "(KhÃ´ng tÃ¬m tháº¥y Microphone cá»§a báº¡n. Cháº¯c cháº¯n ráº±ng Microphone Ä‘Ã£ Ä‘Æ°á»£c cÃ i Ä‘áº·t)",
      txt_blocked:
        '(Quyá»n sá»­ dá»¥ng microphone Ä‘Ã£ bá»‹ tá»« chá»‘i nÃªn khÃ´ng ghi Ã¢m Ä‘Æ°á»£c. <button style="border:none; cursor:pointer; border-radius: 4px; background:#239e28; margin: 10px; font-size:14px; padding: 8px 10px; color:#fff" onclick= showInstructionRecord()>Thiáº¿t láº­p Microphone Ä‘á»ƒ thu Ã¢m</button>',
      txt_denied:
        "(Quyá»n sá»­ dá»¥ng microphone Ä‘Ã£ bá»‹ tá»« chá»‘i nÃªn khÃ´ng ghi Ã¢m Ä‘Æ°á»£c. Báº¡n cáº§n cho phÃ©p TiengAnh123 sá»­ dá»¥ng microphone)",
      txt_start: " (Báº¡n hÃ£y kÃ­ch vÃ o nÃºt micro Ä‘á»ƒ thu Ã¢m.)",
      txt_no_speech: "KhÃ´ng nháº­n Ä‘Æ°á»£c giá»ng nÃ³i. Kiá»ƒm tra láº¡i headphone cá»§a báº¡n.",
      recognizing: false,
      ignore_onend: false,
      id_start: "krr_ispeak",
      final_transcript: "",
      text_record: "krrt_text",
      start_timestamp: 0,
      showInfo: function (str) {
        console.log(str);
        $("#" + cvd_record.id_info).html(str);
      },
    },
    _speech = {
      init: function (option) {
        $("#" + cvd_record.id_box).append(cvd_record.html_record);
        window.___gcfg = {lang: "en"};
        $.extend(cvd_record, option);
        if (!("webkitSpeechRecognition" in window)) {
          console.log(cvd_record.txt_upgrade);
          $("#krrt_ins").html("");
          $("#ff_browser").show();
          //cvd_record.showInfo(cvd_record.txt_upgrade);
          $("#kr_bclose")
            .unbind("click")
            .bind("click", function () {
              $(".bg_yellow").removeClass("bg_yellow");
              $(".kr_bgyellow").removeClass("kr_bgyellow");
              $("#kr_arrecord").hide();
            });
        } else {
          var recognition = new webkitSpeechRecognition();
          recognition.continuous = true;
          recognition.lang = "en-IN";
          recognition.interimResults = true;
          var start_record = document.getElementById(cvd_record.id_start);
          var result_text = document.getElementById(cvd_record.text_record);
          recognition.onstart = function () {
            cvd_record.recognizing = true;
            cvd_record.is_recording = true;
            cvd_record.showInfo(cvd_record.txt_speak_now);
            $("#text_record").html("");
            $("#krrt_text").html("");
          };

          recognition.onerror = function (event) {
            $("#krb_arrecord").css("display", "inline-block");
            $("#krb_arstop").css("display", "none");
            $(".krrw_wave").each(function (index, ele) {
              $(ele).stop(true).css("top", "0px");
            });
            if (!$("#krb_arstop").hasClass("act")) {
              $("#krb_arstop").addClass("act");
            }
            if (event.error == "no-speech") {
              console.log("no-speech");
              $("#krrt_ins").text(cvd_record.txt_no_speech);
              cvd_record.showInfo(cvd_record.txt_no_speech);
              cvd_record.ignore_onend = true;
            }

            if (event.error == "audio-capture") {
              console.log("no-microphone");
              $("#krrt_ins").text(cvd_record.txt_no_microphone);
              cvd_record.showInfo(cvd_record.txt_no_microphone);
              cvd_record.ignore_onend = true;
            }
            if (event.error == "not-allowed") {
              console.log("not-allowed");
              if (event.timeStamp - cvd_record.start_timestamp < 100) {
                console.log("blocked");
                $("#krrt_ins").text(cvd_record.txt_blocked);
                cvd_record.showInfo(cvd_record.txt_blocked);
              } else {
                console.log("denied");
                $("#krrt_ins").text(cvd_record.txt_denied);
                cvd_record.showInfo(cvd_record.txt_denied);
              }
              cvd_record.ignore_onend = true;
            }
          };
          recognition.onend = function () {
            cvd_record.recognizing = false;
            if (cvd_record.ignore_onend) {
              return;
            }
            $(".krrw_wave").each(function (index, ele) {
              $(ele).stop(true).css("top", "0px");
            });
            if (!$("#krb_arstop").hasClass("act")) {
              recognition.stop();
              kr_score();
              if (cvd_record.is_recording) {
                cvd_record.is_recording = false;
                toggleRecordingVoice();
              }
              //console.log('reco end');
              $("#krr_arwave, #krb_arstop, #krrt_ins").css("display", "none");
              $("#krr_arscore, #kr_tresult").css("display", "block");
              $("#krr_verline, #krb_arrecord, #krb_arspeak").css("display", "inline-block");
            }

            if (window.getSelection) {
              window.getSelection().removeAllRanges();
              var range = document.createRange();
              range.selectNode(result_text);
              window.getSelection().addRange(range);
            }
          };

          recognition.onresult = function (event) {
            $("#krrt_ins").css("display", "none");
            var interimTranscripts = "";
            if (typeof event.results == "undefined") {
              recognition.onend = null;
              recognition.stop();
              if (cvd_record.is_recording) {
                cvd_record.is_recording = false;
                toggleRecordingVoice();
              }
              cvd_record.showInfo(cvd_record.id_upgrade);
              return;
            }

            for (var i = event.resultIndex; i < event.results.length; ++i) {
              if (event.results[i].isFinal) {
                cvd_record.final_transcript += event.results[i][0].transcript;
              }
            }
            for (var i = event.resultIndex; i < event.results.length; i++) {
              var transcript = event.results[i][0].transcript;
              transcript.replace("\n", "<br>");
              if (event.results[i].isFinal) {
                finalTranscripts += transcript;
              } else {
                interimTranscripts += transcript;
              }
            }
            if ($("#krb_arstop").hasClass("mode_click")) {
              result_text.innerHTML = cvd_record.final_transcript + "<span>" + interimTranscripts + "</span>";
            }

            if (replace_txt($("#krrt_text").text()) == replace_txt($.trim($("#krrt_text").attr("result")))) {
              $("#krb_arstop").trigger("click");
            }
          };

          $(document).keyup(function (e) {
            if ($("#krb_arstop").css("display") == "inline-block") {
              if (e.keyCode == 13) {
                $("#krb_arstop").trigger("click");
              }
            } else if ($("#krb_arrecord").css("display") == "inline-block") {
              if (e.keyCode == 13) {
                $("#krb_arrecord").trigger("click");
              }
            } else if ($("#krr_ispeak").css("display") == "block") {
              if (e.keyCode == 13) {
                $("#krr_ispeak").trigger("click");
              }
            }
          });

          $("#krb_arstop")
            .unbind("click")
            .bind("click", function () {
              if ($("#krb_arstop").hasClass("mode_click")) {
                $("#krb_arstop").removeClass("mode_click");
                if (!$("#krb_arstop").hasClass("act")) {
                  $("#krb_arstop").addClass("act");
                }
                recognition.stop();
                kr_score();
                if (cvd_record.is_recording) {
                  cvd_record.is_recording = false;
                  toggleRecordingVoice();
                }
                $("#krr_arwave, #krb_arstop, #krrt_ins").css("display", "none");
                $("#krr_arscore, #kr_tresult").css("display", "block");
                $("#krr_verline, #krb_arrecord, #krb_arspeak").css("display", "inline-block");
              }
            });
          $("#krb_arrecord")
            .unbind("click")
            .bind("click", function () {
              $("#krb_arstop").addClass("mode_click");
              $("#krr_verline, #krb_arrecord, #krb_arspeak, #krr_arscore, #kr_tresult").css("display", "none");
              $("#krrt_ins").css("display", "table-cell");
              $("#krr_arwave, #krb_arstop").css("display", "block");
              $("#krb_arstop").css("display", "inline-block");
              $("#krrt_text").html("");
              $("#krrs_number, #kr_tresult").text("");
              cvd_record.final_transcript = "";
              cvd_record.ignore_onend = false;
              $("#audio_record").attr("src", "");
              recognition.start();
              cvd_record.is_recording = true;
              toggleRecordingVoice();
              cvd_record.start_timestamp = event.timeStamp;
              $(".krrw_wave").each(function (index, ele) {
                $(ele).wave_random();
              });
              audio_record.pause();
              $("#krbsp_icon").removeClass("krbsp_icon_active");
              $("#krb_arstop").removeClass("act");
            });
          $("#krb_arspeak")
            .unbind("click")
            .bind("click", function () {
              audio_record.play();
              $("#krbsp_icon").addClass("krbsp_icon_active");
            });

          $("#kr_araudio")
            .unbind("click")
            .bind("click", function () {
              if (!$("#krb_arstop").hasClass("act")) {
                $("#krb_arstop").addClass("act");
              }
              recognition.stop();
              if (cvd_record.is_recording) {
                cvd_record.is_recording = false;
                toggleRecordingVoice();
              }
            });
          $("#kr_bclose")
            .unbind("click")
            .bind("click", function () {
              audio_record.pause();
              if (cvd_record.recognizing) {
                recognition.stop();
                if (cvd_record.is_recording) {
                  cvd_record.is_recording = false;
                  toggleRecordingVoice();
                }
              }
              $(".bg_yellow").removeClass("bg_yellow");
              $(".kr_bgyellow").removeClass("kr_bgyellow");
              $("#kr_arrecord").hide();
              $("#krrt_text").text("");
              $(".status_cham_diem").text("");
            });
          $("#krr_ispeak")
            .unbind("click")
            .bind("click", function () {
              $(this).css("display", "none");
              console.log("click");
              $("#krb_arrecord").trigger("click");
              $("#krb_arstop").removeClass("act");

              $(".krrw_wave").each(function (index, ele) {
                $(ele).wave_random();
              });
            });
        }
      },
    };
  $.fn.speech_chrome = function (option) {
    if (typeof option === "object" || !option) {
      return _speech.init.apply(this, arguments);
    } else {
      $.error("method " + option + " does not exist not jQuery");
    }
  };
  var recorder_voice, gumStream;
  function toggleRecordingVoice() {
    console.log("record - " + cvd_record.is_recording);
    if (recorder_voice && recorder_voice.state == "recording") {
      recorder_voice.stop();
      gumStream.getAudioTracks()[0].stop();
    } else {
      navigator.mediaDevices
        .getUserMedia({
          audio: true,
        })
        .then(function (stream) {
          gumStream = stream;
          recorder_voice = new MediaRecorder(stream);
          recorder_voice.ondataavailable = function (e) {
            if (!cvd_record.is_recording) {
              var url = URL.createObjectURL(e.data);
              console.log(url);
              $("#audio_record").attr("src", url);
            }
          };
          recorder_voice.start();
        });
    }
  }
})(jQuery);
