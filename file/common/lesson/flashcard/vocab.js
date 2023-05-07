function is_not_firefox() {
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf("firefox") == -1) {
    return true;
  } else {
    return false;
  }
}
function load_css(link_css) {
  var cre = document.createElement("link");
  cre.type = "text/css";
  cre.href = link_css;
  cre.rel = "stylesheet";
  var x = document.getElementsByTagName("head")[0];
  x.appendChild(cre);
}
var basic_url = window.location.protocol + "//" + location.host + "/";
var link_login = "/clogin",
  link_post = "ajax/";
if (typeof is_mobile != "undefined" || typeof is_tablet != "undefined") {
  link_login = "/login";
  link_post = "ajax/ajax/";
}

var obj_vbkd = {
  arr_char: [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
  ],
  post_url: window.location.protocol + "//" + location.host + "/",
  id_game: "",
  start_word: 0,
  next_w: 0,
  score: 0,
  word_curr: [],
  word_list: [],
  number: 0,
  list_again: [],
  html_non_vip_kid: "",
  is_mobile: 0,
  is_tablet: 0,
  loc: _loc,
  saved: false,
  list_alphabet: [
    "q.mp3",
    "w.mp3",
    "e.mp3",
    "r.mp3",
    "t.mp3",
    "y.mp3",
    "u.mp3",
    "i.mp3",
    "o.mp3",
    "p.mp3",
    "a.mp3",
    "s.mp3",
    "d.mp3",
    "f.mp3",
    "g.mp3",
    "h.mp3",
    "j.mp3",
    "k.mp3",
    "l.mp3",
    "z.mp3",
    "x.mp3",
    "c.mp3",
    "v.mp3",
    "b.mp3",
    "n.mp3",
    "m.mp3",
  ],
};
var game_vocab_kd = {
  check: function (str, value) {
    if (value.indexOf(str) == 0) {
      return true;
    } else {
      return false;
    }
  },
  input_key: function (key) {
    if (obj_vbkd.start_word == 0 && obj_vbkd.next_w == 1) {
      $("#vb_text_input span:first").html("");
      $("#vb_text_input span:last").show();
    }
    var str = $("#vb_text_input span:first").text();
    var str1 = $("#vb_text_input span:last").text();
    if (str != "") {
      str += key;
    } else {
      str = key;
    }
    //console.log(str);
    str = str.toLowerCase();
    obj_vbkd.word_curr.correct = obj_vbkd.word_curr.correct.toLowerCase();
    if (game_vocab_kd.check(str, obj_vbkd.word_curr.correct)) {
      obj_vbkd.start_word++;
      var n = str.length;
      if (obj_vbkd.word_curr.correct[n] == " " || obj_vbkd.word_curr.correct[n] == "-") {
        str += obj_vbkd.word_curr.correct[n];
        if (obj_vbkd.word_curr.correct[n] == " ") {
          str1 = str1.replace(" ", "");
        } else {
          str1 = str1.replace("-", "");
        }
      }
      $("#vb_text_input span:first").text(str);
      str1 = str1.replace("*", "");
      $("#vb_text_input span:last").text(str1);
      $("#vb_check_input").removeClass("false").css("top", "-50px");
      if (str == obj_vbkd.word_curr.correct) {
        obj_vbkd.score++;
        $(".vb_kbd_score .score").text(obj_vbkd.score);
        if (typeof is_mobile != "undefined") {
          $("#vb_check_input").addClass("true").animate({top: "0px"}, 500);
          //game_vocab_kd.next();
          setTimeout(function () {
            game_vocab_kd.next();
          }, 2000);
        } else {
          $("#vb_check_input")
            .addClass("true")
            .animate({top: "0px"}, 500, function () {
              game_vocab_kd.next();
            });
        }
      }
    } else {
      $("#vb_check_input").addClass("false").animate({top: "0px"}, 500);
    }
  },
  hint: function () {
    var key = obj_vbkd.word_curr.correct[obj_vbkd.start_word];
    if (key == " " || key == "-") {
      obj_vbkd.start_word += 1;
    }
    key = obj_vbkd.word_curr.correct[obj_vbkd.start_word];
    $(".ltt_key_item[alt=" + key + "]").click();
  },
  next: function () {
    if (obj_vbkd.score == 2 && !is_vip) {
      $(".vbkd_audio_alert").attr("media-url", obj_vbkd.audio_non_vip_kid);
      $(".vbkd_audio_alert").click();
      $(".end_game_box").addClass("box_non_vip").html(non_vip_alert);
      $(".vbkd_close").click(function () {
        game_vocab_kd.do_again();
      });
      $("#vbkd_alert").toggle("slide", {direction: "right"}, 700);
    } else {
      if (number_word == obj_vbkd.score) {
        $(".vbkd_audio_alert").click();
        $(".total_score_end").text(number_word + " /" + number_word);
        $("#vbkd_alert").toggle("slide", {direction: "right"}, 700);
      } else {
        obj_vbkd.next_w = 0;
        $("#vb_text_input").animate({top: "-47px", opacity: 0}, 300);
        setTimeout(function () {
          game_vocab_kd.asign();
        }, 400);
      }
    }
  },
  do_again: function () {
    if (is_vip) {
      obj_vbkd.word_list = game_vocab_kd.random_arr(obj_vbkd.word_list);
    }
    obj_vbkd.score = 0;
    $(".vb_kbd_score .score").text(0);
    $("#vbkd_alert").toggle("slide", {direction: "right"}, 500, function () {
      game_vocab_kd.asign();
    });
  },
  random_arr: function (arr) {
    for (var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
    return arr;
  },

  getAudio: function () {
    $.getScript("/file/common/game123/js/audio_game_vs1.js", function () {
      $("#game_ubaPlayer").ubaPlayer_game({
        audioButtonClass: "uba_ctrl",
        codecs: [{name: "MP3", codec: "audio/mpeg;"}],
        playStartCallback: _PlayingAudioHide2,
        stopCallback: _stopAudioHide2,
      });
    });
  },
  asign: function () {
    $(".ltt_key_item.active").removeClass("active");
    $("#vb_check_input").removeClass("true").css("top", "-50px");
    var inx = obj_vbkd.score;
    obj_vbkd.start_word = 0;
    obj_vbkd.word_curr = obj_vbkd.word_list[inx];
    $("#vb_text_input span:first").text(obj_vbkd.word_curr.correct);
    var str_hide = "";
    for (var i = 0; i < obj_vbkd.word_curr.correct.length; i++) {
      if (obj_vbkd.word_curr.correct[i] == " ") {
        str_hide += " ";
      } else if (obj_vbkd.word_curr.correct[i] == "-") {
        str_hide += "-";
      } else {
        str_hide += "*";
      }
    }
    $("#vb_text_input span:last").hide().text(str_hide);
    $("#vb_kbd_audio").attr("media-url", obj_vbkd.loc + obj_vbkd.word_curr.sound);
    $("#vb_text_input").animate({top: "0px", opacity: 1}, 700, function () {
      obj_vbkd.next_w = 1;
    });
    $("#vb_kbd_audio").trigger("click");
  },

  get_html: function () {
    console.log(obj_vbkd);
    var hd_game = "";
    if (typeof is_mobile != "undefined") {
      hd_game = hd_mobile;
      load_css(sever_vocab_kd + "vocab_keyboard/css/m_style_new.css");
    } else {
      load_css(sever_vocab_kd + "vocab_keyboard/css/style.css");
      if (obj_vbkd.is_tablet != 0) {
        hd_game = hd_mobile;
      } else {
        hd_game = hd_pc;
      }
    }
    // https://data.tienganh123.com/static_20/js/m-common.js?v=202103
    $("#game_vocab").html(obj_vbkd.tpl_game).show();
    $(".instruction_game_vbkd").html(hd_game);
    $(".vb_kbd_score .total_score").text(number_word);
    $(".ltt_key_item").each(function (i) {
      $(this).attr("media-url", obj_vbkd.loc_audio + obj_vbkd.list_alphabet[i]);
    });
    game_vocab_kd.getAudio();
    $(".ltt_key_item").click(function () {
      $(".ltt_key_item.active").removeClass("active");
      $(this).addClass("active");
      var key = $(this).text();
      game_vocab_kd.input_key(key);
    });

    $("#btn_start_vbkd").click(function () {
      $(this).parent().toggle("slide", {direction: "right"}, 500);
      game_vocab_kd.asign();
    });
    $("#do_again").click(function () {
      game_vocab_kd.do_again();
    });
    $("#vb_kbd_hint").click(function () {
      game_vocab_kd.hint();
    });
    if (typeof is_mobile == "undefined") {
      var bind_ev = "keypress";
      if (is_not_firefox()) {
        bind_ev = "keydown";
      }
      var code1 = 0,
        code = 0,
        n = 0,
        keyChar = "";
      $(document).bind(bind_ev, function (e) {
        n++;
        e.stopPropagation();
        code = e.keyCode ? e.keyCode : e.which;
        if (code != 231) {
          if (code == 8) {
            code = code1;
          } else {
            code1 = code;
          }
          if (code == 13) {
            $("#vb_kbd_audio").click();
          } else {
            keyChar = String.fromCharCode(code);
            keyChar = keyChar.toLowerCase();
            if ($.inArray(keyChar, obj_vbkd.arr_char) >= 0) {
              $(".ltt_key_item[alt=" + keyChar + "]").click();
            }
          }
        }
      });
      $("input,textarea").on("keydown", function (e) {
        e.stopPropagation();
      });
      $("input,textarea").on("keypress", function (e) {
        e.stopPropagation();
      });
    }
  },
};

var UNF = "undefined";
function loadScript_item(link_js, id) {
  var cre = document.createElement("script");
  cre.type = "text/javascript";
  cre.async = true;
  cre.src = link_js;
  var x = document.getElementById(id);
  x.appendChild(cre);
}
var front = true;
function flip_card(e) {
  $(e).flip({
    direction: "lr",
    "background-color": "red",
    speed: 350,
    onEnd: function () {
      if (!front) {
        $(e).find(".back").hide().prev().show().find(".uba_audioButton:eq(0)").click();
      } else {
        $(e).find(".face").hide().next().show().find(".uba_audioButton:eq(0)").click();
      }
      $(e).css("background-color", "#7968a8");
      front = !front;
      $("#kr_arrecord").hide();
    },
  });
}
function loadScript_callback(url, callback) {
  $.getScript(url, function (data, textStatus, jqxhr) {
    if (jqxhr.status != 200) {
      loadScript_callback(url, callback);
    } else {
      callback();
    }
  });
}

var target_elm = null,
  all_vocab = false;
if (typeof is_tablet == "undefined" && typeof is_mobile == "undefined") {
  loadScript_callback("https://www.tienganh123.com/file/common/lesson/record/record-pc.js", function () {
    var id_start = "krr_ispeak";
    var text_record = "krrt_text";
    $("#box_record").speech_chrome({id_start: id_start, text_record: text_record});
  });
}
$(document).ready(function () {
  if (typeof is_tablet != "undefined") $("#icon_audio_click").addClass("audio_tablet");
  number_card = $(".card_flip").length;
  $(".item_card").click(function (event) {
    target_elm = $(event.target);
    if (!target_elm.is(".uba_audioButton") && !target_elm.is(".recording_user")) {
      flip_card(this);
    }
  });
  loadScript_callback("https://www.tienganh123.com/file/common/libAudio/js/audioShort_new.js", function () {
    $("#ubaPlayer").ubaPlayer({
      codecs: [{name: "MP3", codec: "audio/mpeg;"}],
    });
  });
  $(".recording_user").click(function () {
    recordClick(this);
  });
});
var count_word = 0;

function card_back(e) {
  front = true;
  $("#kr_arrecord").hide();
  $(".card_next").show();
  if (current_card == 1) {
    $(".card_back").hide();
  }
  if (current_card > 0) {
    current_card = current_card - 1;
    var mg = $("#ul_card123").attr("left");
    mg = +left_inc;
    $("#ul_card123").animate(
      {
        left: "+=" + mg,
      },
      700,
    );

    $("#ta123_card_" + current_card + " .face")
      .show()
      .find(".uba_audioButton:eq(0)")
      .click();
    $("#ta123_card_" + current_card + " .back").hide();
  }
}
var el = $(".card_flip").width();
var current_card = 0,
  number_card = 0,
  left_inc = `${el}`;

function card_next(e) {
  front = true;
  $("#kr_arrecord").hide();
  $(".card_back").show();
  if (current_card == number_card - 1) {
    $(".card_next").hide();
  }
  if (current_card < number_card - 1) {
    current_card = current_card + 1;
    var mg = $("#ul_card123").attr("left");
    mg = -left_inc;
    $("#ul_card123").animate(
      {
        left: "+=" + mg,
      },
      700,
    );

    $("#ta123_card_" + current_card + " .face")
      .show()
      .find(".uba_audioButton:eq(0)")
      .click();
    $("#ta123_card_" + current_card + " .back").hide();
  }
}
