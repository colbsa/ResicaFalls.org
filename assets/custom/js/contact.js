$(function() {
  var subject = getUrlParams('subject');
  var message = getUrlParams('message');
  if (subject.length > 1){
    $("#contactform-subject").replaceWith("<input type=\"text\" class=\"form-control\" name=\"subject\" id=\"requested_subject\" placeholder=\"\" value=\"" + subject + "\" disabled required>")
    if (message.length > 1)
      $("#contactform-message").text(message);
  }
});

function ContactUsAlert(alert_class, alert_headline, alert_text) {
  $("#alert-response").removeClass("alert-info");
  $("#alert-response").removeClass("alert-warning");
  $("#alert-response").removeClass("alert-danger");
  $("#alert-response").addClass(alert_class);
  $("#alert-headline").text(alert_headline);
  $("#alert-text").text(alert_text);
  $("#alert-response").removeClass("hidden")
  $("#alert-response").addClass("show")
}
$("#contactform").validate({
  rules: {
    name: {
      required: true,
      minlength: 2
    },
    email: {
      required: true,
      email: true
    },
    subject: {
      required: true,
    },
    message: {
      required: true,
      minlength: 5
    }
  },
  messages: {
    name: "Please tell us your name.",
    subject: "Please select a subject.",
    email: {
      required: "Please give us your email address.",
      email: "Please put your email address in the format of name@example.com"
    },
    message: "Please let us know what you want to say."
  },
  errorClass: "invalid",
  validClass: "valid",
  invalidHandler: function() {
    $("#contactform").addClass("was-validated");
  },
  submitHandler: function() {
    $("#contactform").addClass("was-validated");
    grecaptcha.execute();
  }
});
function ContactUs() {
  var alert_class = "alert-info";
  var alert_headline = "Loading...";
  var alert_text = "";
  ContactUsAlert(alert_class, alert_headline, alert_text)
  $("#contactform-name").prop('disabled', true);
  $("#contactform-email").prop('disabled', true);
  $("#contactform-subject").prop('disabled', true);
  $("#contactform-message").prop('disabled', true);
  $("#contactform-send").prop('disabled', true);
  $.ajax({
    url: '/assets/custom/php/contact_engine.php',
    method: 'POST',
    dataType: 'json',
    data: $("#contactform :input"),
    cache: false,
    headers: {
      "cache-control": "no-cache"
    },
    success: function(data) {
      if(data['success'] == true)
      {
        alert_class = "alert-success";
        alert_headline = "Thank you!";
        alert_text = "You should be hearing from a member of our team shortly.";
      }
      else
      {
        alert_class = "alert-danger";
        alert_headline = "Uh-Oh!";
        alert_text = data['error'];
      }
      ContactUsAlert(alert_class, alert_headline, alert_text);
    },
    error: function(data) {
      alert_class = "alert-danger";
      alert_headline = "Woops!";
      alert_text = "Sorry, but it looks like something has gone wrong. Please try again later.";
      ContactUsAlert(alert_class, alert_headline, alert_text);
    }
  });
};
