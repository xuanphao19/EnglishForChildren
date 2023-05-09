// var prev_element = null;
// var style_box_nonvip =
//   "<style>.box_alert_vip{background-image: url(/file/common/libAudio/images/vip_bg.png);color: #fff;display: none;position: fixed;bottom: 3px;z-index: 9999;border-radius: 8px;background-color: #ee7600;background-repeat: no-repeat;width: 94%;left: 3%;height: 70px;padding:0px;}.box_vip_close {background: url(/file/common/libAudio/images/close.png) no-repeat;height: 22px;width: 22px;position: absolute;top: 10px;right: 10px;cursor: pointer;}</style>";
// var serv_curr = window.location.protocol + "//" + location.host;
// if (serv_curr == "https://www.tienganh123.com" || serv_curr == "http://www.tienganh123.com") {
//   style_box_nonvip =
//     "<style>#box_audio_nonvip{background-image: url(/file/common/libAudio/images/vip_bg.png);color: #fff;display: none;position: fixed;bottom: 3px;z-index: 9999;border-radius: 8px;background-color: #ee7600;background-repeat: no-repeat;width: 30%;left: 30%;height: 50px;padding:0px;}.box_vip_close {background: url(/file/common/libAudio/images/close.png) no-repeat;height: 22px;width: 22px;position: absolute;top: 10px;right: 10px;cursor: pointer;}</style>";
// }
// var str_nonvip =
//   style_box_nonvip +
//   '<div id="box_audio_nonvip" class="box_alert_vip">\
// <div class="box_vip_text" style="margin:7px 15px 0px 15px">Báº¡n pháº£i lÃ  <a href="/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" target="_blank" title="quyá»n lá»£i thÃ nh viÃªn VIP" style="color:#F2FF32; text-decoration:underline; font-weight:bold">thÃ nh viÃªn VIP</a> cá»§a Tiáº¿ngAnh123.Com <br>má»›i nghe Ä‘Æ°á»£c pháº§n nÃ y. <a href="/huong-dan/4668-cach-dat-the-vip-tren-tienganh123.html" target="_blank" title="ÄÄƒng kÃ½ thÃ nh viÃªn VIP" style="color:#F2FF32; text-decoration:underline; font-weight:bold">ÄÄƒng kÃ½ thÃ nh viÃªn VIP</a></div><div class="box_vip_close"></div></div>';
// var str_nonkid =
//   style_box_nonvip +
//   '<div id="box_audio_nonvip" class="box_alert_vip">\
// <div class="box_vip_text" style="margin:7px 15px 0px 15px">Báº¡n pháº£i lÃ  <a href="/huong-dan/214-quyen-loi-thanh-vien-vip-cua-tienganh123.html" target="_blank" title="quyá»n lá»£i thÃ nh viÃªn VIP" style="color:#F2FF32; text-decoration:underline; font-weight:bold">thÃ nh viÃªn VIP</a> cá»§a Tiáº¿ngAnh123.Com <br>má»›i nghe Ä‘Æ°á»£c pháº§n nÃ y. <a href="/huong-dan/4668-cach-dat-the-vip-tren-tienganh123.html" target="_blank" title="ÄÄƒng kÃ½ thÃ nh viÃªn VIP" style="color:#F2FF32; text-decoration:underline; font-weight:bold">ÄÄƒng kÃ½ thÃ nh viÃªn VIP</a></div><div class="box_vip_close"></div></div>';
// var lesson_vip = 0,
//   str_nonmember = 0;
// function PlayingAudioHide(element) {
//   if (element.hasClass("uba_hideAudio")) {
//     element
//       .children(".stt_par_hideaudio")
//       .children(0)
//       .attr("src", "//noidung.tienganh123.com/file/common/libAudio/images/speaker-playing.gif");
//     if (prev_element != null) {
//       if (element.attr("data-media-url") != prev_element.attr("data-media-url")) {
//         stopAudioHide(prev_element);
//       }
//     }
//     prev_element = element;
//   }
// }
// function stopAudioHide(element) {
//   if (element.hasClass("uba_hideAudio")) {
//     element
//       .children(".stt_par_hideaudio")
//       .children(0)
//       .attr("src", "//noidung.tienganh123.com/file/common/libAudio/images/speaker-stop.gif");
//   }
// }
(function ($) {
  var defaults = {
      audioButtonClass: "uba_audioButton",
      autoPlay: null,
      codecs: [
        {
          name: "OGG",
          codec: 'audio/ogg; codecs="vorbis"',
        },
        {
          name: "MP3",
          codec: "audio/mpeg",
        },
      ],
      continuous: false,
      extension: null,
      flashExtension: ".mp3",
      flashObjectID: "audioPlayer",
      loadingClass: "loading",
      loop: false,
      playerContainer: "player",
      playingClass: "playing",
      onEndClass: "on-ended-audio",
      playStartCallback: null,
      stopCallback: null,
      isPaid: 1,
      n_play: 0,
      volume: 1,
    },
    // audio,
    currentTrack,
    isPlaying,
    index_audio,
    // curr_audio,
    audio_s = [],
    $buttons_s,
    $tgt,
    $el,
    // playTrack,
    // resumeTrack,
    // pauseTrack,
    methods = {
      play: function (element, i) {
        if (!defaults.isPaid && defaults.n_play > 2) {
          currentTrack = "https://data.tienganh123.com/file/dungchung/vip_only_audio.mp3";
          // str_nonmember = str_nonvip;
        } else {
          currentTrack = element.attr("data-media-url");
        }
        element.attr("data-media-url", currentTrack);
        audio_s[i] = new Audio("");
        audio_s[i].id = "audio_" + i;
        audio_s[i].loop = defaults.loop ? "loop" : "";
        audio_s[i].volume = defaults.volume;
        audio_s[i].src = currentTrack;
        _methods.addListeners(audio_s[i]);
        audio_s[i].play();
        isPlaying = true;
      },
      play_app: function (element) {
        // $("#box_audio_nonvip").removeAttr("style");
        currentTrack = element.attr("data-media-url");
        if (currentTrack.indexOf(" ") >= 0) {
          currentTrack = currentTrack.replace(/ /g, "%20");
        }
        element.attr("data-media-url", currentTrack);
        if (audio_s[0]) {
          audio_s[0].pause();
          audio_s[0].src = currentTrack;
        } else {
          audio_s[0] = new Audio("");
          audio_s[0].id = "audio_s_";
          audio_s[0].loop = defaults.loop ? "loop" : "";
          audio_s[0].volume = defaults.volume;
          audio_s[0].src = currentTrack;
        }
        _methods.addListeners(audio_s[0]);
        audio_s[0].play();
        isPlaying = true;
      },
      pause: function (element) {
        index_audio = element.index("." + defaults.audioButtonClass);
        audio_s[index_audio].pause();
        isPlaying = false;
        element.removeClass(defaults.playingClass).addClass("audio_pause_uba");
        if (typeof defaults.stopCallback == "function") {
          defaults.stopCallback($tgt);
        }
      },
      pause_app: function () {
        isPlaying = false;
        audio_s[0].pause();
        $("." + defaults.playingClass).removeClass(defaults.playingClass);
        if (typeof defaults.stopCallback == "function") {
          defaults.stopCallback($tgt);
        }
      },
      pause_other: function (element) {
        isPlaying = false;
        index_audio = element.index("." + defaults.audioButtonClass);
        audio_s[index_audio].pause();
        element.removeClass(defaults.playingClass);
        if (typeof defaults.stopCallback == "function") {
          defaults.stopCallback($tgt);
        }
        currentTrack = element.attr("data-media-url");
        audio_s[index_audio].currentTime = 0;
      },
      resume: function (element) {
        isPlaying = true;
        index_audio = element.index("." + defaults.audioButtonClass);
        _methods.addListeners(audio_s[index_audio]);
        if (element.find(".stt_par_hideaudio").length == 1) {
          audio_s[index_audio].currentTime = 0;
        }
        audio_s[index_audio].play();

        element.addClass(defaults.playingClass);
        if (typeof defaults.playStartCallback == "function") {
          defaults.playStartCallback(element);
        }
      },
      resume_app: function () {
        isPlaying = true;
        _methods.addListeners(audio_s[0]);
        if ($tgt.find(".stt_par_hideaudio").length == 1) {
          audio_s[0].currentTime = 0;
        }
        audio_s[0].play();
        $tgt.addClass(defaults.playingClass);
        if (typeof defaults.playStartCallback == "function") {
          defaults.playStartCallback($tgt);
        }
      },
      resume_other: function (element) {
        isPlaying = true;
        index_audio = element.index("." + defaults.audioButtonClass);
        _methods.addListeners(audio_s[index_audio]);
        audio_s[index_audio].src = element.attr("data-media-url");
        audio_s[index_audio].play();
        element.addClass(defaults.playingClass);
      },
    },
    _methods = {
      init: function (options) {
        //set defaults
        $.extend(defaults, options);
        $el = this;
        $buttons_s = $("." + defaults.audioButtonClass);
        //listen for clicks on the controls
        $buttons_s.unbind("click");
        if ((typeof fromapp != "undefined" && fromapp) || (typeof checkApp == "function" && checkApp())) {
          $buttons_s.bind("click", function (i) {
            _methods.updateTrackState_app(this);
          });
        } else {
          $buttons_s.bind("click", function (i) {
            var inx_audio = $(this).index("." + defaults.audioButtonClass);
            _methods.updateTrackState(this, inx_audio);
          });
        }
        if (defaults.autoPlay) {
          methods.play(defaults.autoPlay);
        }
        types = defaults.codecs;
        for (var i = 0, ilen = types.length; i < ilen; i++) {
          var type = types[i];
          if (_methods.canPlay(type)) {
            defaults.extension = [".", type.name.toLowerCase()].join("");
            break;
          }
        }
        if (defaults.autoPlay) {
          methods.play(defaults.autoPlay);
        }
      },

      updateTrackState: function (element, i) {
        $tgt = $(element);
        if (!$tgt.hasClass(defaults.audioButtonClass)) {
          return;
        }
        var inx_audio_pl = $("." + defaults.playingClass).index("." + defaults.audioButtonClass);
        var inx_audio_onended = $("." + defaults.onEndClass).index("." + defaults.audioButtonClass);
        if (inx_audio_pl != i) defaults.n_play++;
        if ($("." + defaults.playingClass).length > 0 && inx_audio_pl != i) {
          methods.pause_other($("." + defaults.playingClass));
          $("." + defaults.playingClass).removeClass(defaults.playingClass);
        }
        var inx_audio_pl_ = $(".audio_pause_uba").index("." + defaults.audioButtonClass);
        if ($(".audio_pause_uba").length > 0 && inx_audio_pl_ != i) {
          methods.pause_other($(".audio_pause_uba"));
          $(".audio_pause_uba").removeClass("audio_pause_uba");
        }
        var media_u = $tgt.attr("data-media-url");
        if (media_u.indexOf(" ") >= 0) {
          media_u = media_u.replace(/ /g, "%20");
        }
        var file_name = media_u.split("/");
        var n_fn = file_name.length - 1;
        if (!audio_s[i] || (audio_s[i] && audio_s[i].src.indexOf("/" + file_name[n_fn]) < 0)) {
          $tgt.addClass(defaults.loadingClass);
          methods.play($tgt, i);
        } else {
          if ($tgt.find(".stt_par_hideaudio").length == 1) {
            methods.pause($tgt);
            methods.resume($tgt);
          } else {
            if (isPlaying) {
              methods.pause($tgt);
            } else {
              methods.resume($tgt);
            }
          }
        }
      },
      updateTrackState_app: function (element) {
        defaults.n_play++;
        $tgt = $(element);
        var media_u = $tgt.attr("data-media-url");
        if (media_u.indexOf(" ") >= 0) {
          media_u = media_u.replace(/ /g, "%20");
        }
        var file_name = media_u.split("/");
        var n_fn = file_name.length - 1;

        if (!$tgt.hasClass(defaults.audioButtonClass)) {
          return;
        }
        if (!audio_s[0]) {
          $tgt.addClass(defaults.loadingClass);
          methods.play_app($tgt);
        } else {
          if (!isPlaying) {
            if (currentTrack.indexOf(file_name[n_fn] + ".mp3") < 0) {
              $tgt.addClass(defaults.loadingClass);
              methods.play_app($tgt);
            } else {
              methods.resume_app();
            }
          } else {
            methods.pause_app();
            if (currentTrack.indexOf(file_name[n_fn] + ".mp3") < 0) {
              $tgt.addClass(defaults.loadingClass);
              methods.play_app($tgt);
            }
          }
        }
      },

      addListeners: function (elem) {
        $(elem).bind({
          canplay: _methods.onLoaded,
          error: _methods.onError,
          ended: _methods.onEnded,
        });
      },

      removeListeners: function (elem) {
        $(elem).unbind({
          canplay: _methods.onLoaded,
          error: _methods.onError,
          ended: _methods.onEnded,
        });
      },

      onLoaded: function () {
        $buttons_s.removeClass(defaults.loadingClass);
        $tgt.addClass(defaults.playingClass);
        if (typeof defaults.playStartCallback == "function") {
          defaults.playStartCallback($tgt);
        }
      },

      onError: function () {
        $buttons_s.removeClass(defaults.loadingClass);
        _methods.removeListeners(audio_s[index_audio]);
      },
      onEnded: function () {
        isPlaying = false;
        $tgt.removeClass(defaults.playingClass);
        $tgt.addClass(defaults.onEndClass);
        if (typeof defaults.stopCallback == "function") {
          defaults.stopCallback($tgt);
        }

        _methods.removeListeners(audio_s[index_audio]);
        if (defaults.continuous) {
          var $next = $tgt.next().length ? $tgt.next() : $(defaults.audioButtonClass).eq(0);
          methods.play($next);
        }
      },

      canPlay: function (type) {
        if (!document.createElement("audio").canPlayType) {
          return false;
        } else {
          return document
            .createElement("audio")
            .canPlayType(type.codec)
            .match(/maybe|probably/i)
            ? true
            : false;
        }
      },

      swfLoaded: function () {
        if (defaults.autoPlay) {
          setTimeout(function () {
            methods.play(defaults.autoPlay);
          }, 500);
        }
      },

      getFileNameWithoutExtension: function (fileName) {
        var fileNamePieces = fileName.split(".");
        fileNamePieces.pop();
        return fileNamePieces.join(".");
      },
    };

  $.fn.ubaPlayer = function (method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === "object" || !method) {
      return _methods.init.apply(this, arguments);
    } else {
      $.error("Method " + method + " does not exist on jquery.ubaPlayer");
    }
  };
})(jQuery);

// function PlayingAudioHide2(element) {
//   if (element.hasClass("uba_ctrl_game_hide")) {
//     element
//       .children("span")
//       .children(0)
//       .attr("src", "//noidung.tienganh123.com/file/common/libAudio/images/audio_playing_bt.gif");
//     if (prev_element != null) {
//       if (element.attr("data-media-url") != prev_element.attr("data-media-url")) {
//         stopAudioHide2(prev_element);
//       }
//     }
//     prev_element = element;
//   }
// }
// function stopAudioHide2(element) {
//   if (element.hasClass("uba_ctrl_game_hide")) {
//     element
//       .children("span")
//       .children(0)
//       .attr("src", "//noidung.tienganh123.com/file/common/libAudio/images/audio_stop_bt.gif");
//   }
// }
