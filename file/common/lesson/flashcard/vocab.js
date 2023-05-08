const is_not_firefox = (function () {
  //   e.preventDefault();
  //   e.stopPropagation();
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf("firefox") == -1) {
    return true;
  } else {
    return false;
  }
})();

var front = true;
const flip_card = function (e) {
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
      front = !front;
    },
  });
};

const loadScript_callback = function (url, callback) {
  $.getScript(url, function (data, textStatus, jqxhr) {
    if (jqxhr.status != 200) {
      loadScript_callback(url, callback);
    } else {
      callback();
    }
  });
};
let lastTime = 0;
const meantime = function () {
  let fullTime;
  let timeNow = new Date().getTime();
  fullTime = timeNow - lastTime;
  lastTime = timeNow;
  return fullTime;
};

let current_card = 0,
  number_card = 0,
  target_elm = null,
  all_vocab = false;

$(document).ready(function () {
  if (typeof is_tablet != "undefined") $("#icon_audio_click").addClass("audio_tablet");
  number_card = $(".card_flip").length;

  $(".item_wrap").click(function (event) {
    let meantimeFull = meantime();
    target_elm = $(event.target);
    if (!target_elm.is(".uba_audioButton") && meantimeFull > 1500) {
      flip_card(this);
    }
  });
  loadScript_callback("./assets/vendor/libAudio/audioShort_new.js", function () {
    $("#ubaPlayer").ubaPlayer({
      codecs: [{name: "MP3", codec: "audio/mpeg;"}],
    });
  });
});
const swiper = new Swiper(".hero_slider", {
  spaceBetween: 5,
  centeredSlides: true,
  speed: 2000,
  loop: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    init: function () {
      console.log("swiper initialized");
    },
  },
});
swiper.on("slideChange", function () {
  let currentEl,
    currentIndex = swiper.realIndex;
  currentEl = $(".ubaLetter")[`${currentIndex}`];
  currentEl.click();
});
