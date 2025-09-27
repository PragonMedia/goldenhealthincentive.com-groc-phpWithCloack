
function loadRetreaverScript(key) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.async = true;
  script.defer = true;
  script.src = document.location.protocol + "//dist.routingapi.com/jsapi/v1/retreaver.min.js";

  script.onload = script.onreadystatechange = function () {
    if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
      Retreaver.configure({
        host: "api.routingapi.com",
        prefix: document.location.protocol === "https:" ? "https" : "http"
      });
      (new Retreaver.Campaign({
        campaign_key: key
      })).auto_replace_numbers();
    }
  };

  var target = document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0];
  target.appendChild(script);
}


function startCountdown() {
  var timeLeft = 30;
  var countdownElement = document.getElementById('countdown');
  var countdownInterval = setInterval(function () {
    var minutes = Math.floor(timeLeft / 60);
    var seconds = timeLeft % 60;
    var formattedTime = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    countdownElement.innerHTML = formattedTime;
    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
    }
    timeLeft--;
  }, 1000);
}


function loadImages() {
  let images = document.querySelectorAll('.lazyloading')
  images.forEach(image => {
    if (image.dataset.src) {
      image.src = image.dataset.src
    }
  })
}

let speed = 500;


function updateAgeGroup(ageGroup) {
  let url = new URL(window.location.href);
  url.searchParams.delete('u65consumer');
  url.searchParams.delete('o65consumer');
  if (ageGroup === 'under65') {
    url.searchParams.set('u65consumer', 'true');
  } else if (ageGroup === 'over65') {
    url.searchParams.set('o65consumer', 'true');
  }
  window.history.replaceState({}, '', url);
}


let is_below = false;
let is_between = false;
let is_71plus = false;


loadImages()


setTimeout(function () {
  $("#initTyping").remove();
  $("#msg1").removeClass("hidden").after(typingEffect());
  setTimeout(function () {
    $(".temp-typing").remove();
    $("#msg2").removeClass("hidden").after(typingEffect());
    scrollToBottom();
    setTimeout(function () {
      $(".temp-typing").remove();
      $("#msg3").removeClass("hidden").after(typingEffect());
      scrollToBottom();
      setTimeout(function () {
        $(".temp-typing").remove();
        $("#msg4").removeClass("hidden");
      }, speed);
    }, speed);
  }, speed);
}, speed);

var buttonValue;
var currentStep;


$("button.chat-button").on("click", function () {
  currentStep = $(this).attr("data-form-step");
  buttonValue = $(this).attr("data-form-value");

  if (currentStep == 1 || currentStep == 0) {
    $("#msg4").addClass("hidden");
    $("#userBlock1").removeClass("hidden");
    $("#agentBlock_q2").removeClass("hidden");
    $("#agentBlock_q2 .agent-chat").prepend(typingEffect());
    $("#msg_yes_q2").removeClass("hidden");
    scrollToBottom();
    setTimeout(function () {
      $(".temp-typing").remove();
      $("#msg_q2_1").removeClass("hidden").after(typingEffect());
      scrollToBottom();
      setTimeout(function () {
        $(".temp-typing").remove();
        $("#msg_q2_2").removeClass("hidden").after(typingEffect());
        scrollToBottom();
        setTimeout(function () {
          $(".temp-typing").remove();
          $("#msg_q2_3").removeClass("hidden")
          scrollToBottom();
        }, speed)
      }, speed)
    }, speed)
  }


  if (currentStep == 2) {

    $("#msg_q2_3").addClass("hidden");
    $("#userBlock_q2").removeClass("hidden");

    if (buttonValue == "under") {
      $("#msg_under_q2").removeClass("hidden");
      updateAgeGroup('under65');
      loadRetreaverScript("4d89c8aa5880c1e25ac2b3aaa9e76c6c");
      ageTrack('Under 65')
      is_below = true;
    } else if (buttonValue == "over") {
      $("#msg_over_q2").removeClass("hidden");
      updateAgeGroup('over65');
      ageTrack('65-70')
      is_between = true;
    } else {
      $("#msg_over71_q2").removeClass("hidden");
      ageTrack('71+')
      is_71plus = true
    }


    $("#agentBlock_q3").removeClass("hidden");
    $("#agentBlock_q3 .agent-chat").prepend(typingEffect());

    scrollToBottom();
    setTimeout(function () {
      $(".temp-typing").remove();
      $("#msg_q3_1").removeClass("hidden").after(typingEffect());
      scrollToBottom();
      setTimeout(function () {
        $(".temp-typing").remove();
        $("#msg_q3_2").removeClass("hidden");
        scrollToBottom();
      }, speed)
    }, speed)
  }

  if (currentStep == 4) {
    $("#msg_insurance_2").addClass("hidden");
    $("#userBlock_insurance").removeClass("hidden");
    if (buttonValue == "Yes") {
      $("#msg_yes_insurance").removeClass("hidden");
      scrollToBottom();
      setTimeout(function () {
        $("#agentBlock4").removeClass("hidden");
        scrollToBottom();
        setTimeout(function () {
          $(".temp-typing").remove();
          $("#msg18").removeClass("hidden").after(typingEffect());
          scrollToBottom();
          setTimeout(function () {
            $(".temp-typing").remove();
            $("#disconnected").removeClass("hidden")
          }, speed)
        }, speed)
      }, speed)
      return;

    } else {

      $("#msg_no_insurance").removeClass("hidden");

      scrollToBottom();

      setTimeout(function () {
        $("#agentBlock4").removeClass("hidden");
        scrollToBottom();

        setTimeout(function () {
          $(".temp-typing").remove();
          $("#msg13").removeClass("hidden").after(typingEffect());
          scrollToBottom();
          setTimeout(function () {
            $(".temp-typing").remove();
            $("#msg15").removeClass("hidden").after(typingEffect());
            scrollToBottom();
            setTimeout(function () {
              $(".temp-typing").remove();
              $("#msg16").removeClass("hidden").after(typingEffect());
              scrollToBottom();
              setTimeout(function () {
                $(".temp-typing").remove();
                $("#msg17").removeClass("hidden");
                scrollToBottom();
                startCountdown()
              }, speed)
            }, speed)
          }, speed)
        }, speed)
      }, speed)
    }
  }


  if (currentStep == 3) {

    $("#agentBlock4 .agent-chat").prepend(typingEffect());
    $("#msg_q3_2").addClass("hidden");
    $("#userBlock_q3").removeClass("hidden");

    if (buttonValue == "Yes") {
      $("#msg_yes_q3").removeClass("hidden");

      if (is_between) {
        loadRetreaverScript("4d89c8aa5880c1e25ac2b3aaa9e76c6c"); // 65 - 70 age
      }

      if (is_71plus) {
        PrimaryNumber.href = "tel:+12074202134";
        phone_retreaver.innerText = "+12074202134";
        loadRetreaverScript("6e528a73c909bb014f52b6e626f51de7"); // 71+ age
      }

    } else if (buttonValue == "No") {
      $("#msg_no_q3").removeClass("hidden");

      if (is_between) {
        PrimaryNumber.href = "tel:+18332431514";
        phone_retreaver.innerText = "+18332431514";
        loadRetreaverScript("7f6922529202be9bdd7c161fc85d0f86"); // 71+ age
      }
      if (is_71plus) {
        PrimaryNumber.href = "tel:+18332431514";
        phone_retreaver.innerText = "+18332431514";
        loadRetreaverScript("7f6922529202be9bdd7c161fc85d0f86"); // 71+ age
      }

    }
    scrollToBottom();

    setTimeout(function () {
      $("#agentBlock4").removeClass("hidden");
      scrollToBottom();
      setTimeout(function () {
        $(".temp-typing").remove();
        $("#msg13").removeClass("hidden").after(typingEffect());
        scrollToBottom();
        setTimeout(function () {
          $(".temp-typing").remove();
          $("#msg15").removeClass("hidden").after(typingEffect());
          scrollToBottom();
          setTimeout(function () {
            $(".temp-typing").remove();
            $("#msg16").removeClass("hidden").after(typingEffect());
            scrollToBottom();
            setTimeout(function () {
              $(".temp-typing").remove();
              $("#msg17").removeClass("hidden");
              scrollToBottom();
              startCountdown()
            }, speed)
          }, speed)
        }, speed)
      }, speed)
    }, speed)
  }
});

function scrollToBottom() {
  var object = $("main");
  $("html, body").animate({ scrollTop: object.offset().top + object.outerHeight() - $(window).height() }, "fast");
}

function typingEffect() {
  string = '<div class="temp-typing bg-gray-200 p-3 rounded-lg shadow-xs mt-2 inline-block">';
  string += '<div class="typing-animation">';
  string += '<div class="typing-dot"></div>';
  string += '<div class="typing-dot"></div>';
  string += '<div class="typing-dot"></div>';
  string += "</div>";
  string += "</div>";
  return string;
}


let userId = localStorage.getItem('user_id');
if (!userId) {
  userId = Math.random().toString(36).substring(2) + Date.now().toString(36);
  localStorage.setItem('user_id', userId);
}

let endpoint = "https://yourfinestsenior.com/dashboard/handler.php";


// Track CTA button clicks
function trackCtaClick() {
  $.get(endpoint, { type: 'cta_click', user_id: userId }, function (response) { });
}

$('#PrimaryNumber').click(function () {
  trackCtaClick();
  if (is_below) {
    $.get(endpoint, { type: 'click_to_call', category: 'Under 65' }, function (response) { });
  }
  if (is_between) {
    $.get(endpoint, { type: 'click_to_call', category: '65-70' }, function (response) { });
  }
  if (is_71plus) {
    $.get(endpoint, { type: 'click_to_call', category: '71+' }, function (response) { });
  }
})


$(".chat-button").click(function () {
  $.get(endpoint, { type: 'chat_click' }, function (response) { })
})

// Track age button clicks
function trackAgeClick(ageGroup) {
  $.get(endpoint, { type: 'age_click', user_id: userId, age_group: ageGroup }, function (response) { });
}

function ageTrack(age) {
  trackAgeClick(age);
  $.get(endpoint, { type: 'age_track', age: age }, function (response) { })
}
