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
      $(e).css("background-color", "rgb(248 248 190)");
      front = !front;
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
