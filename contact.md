---
title: Contact Us
layout: page
dependencies:
- src: https://www.google.com/recaptcha/api.js
- src: https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.1/jquery.validate.min.js
scripts: 
- src: assets/custom/js/contact.js

---

<div class="row">
  <div class="col-12 col-md-8">
    <h2>Send a Message</h2>
    <form id="contactform" onsubmit="event.preventDefault();" novalidate>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" name="name" id="contactform-name" placeholder="" value="" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" name="email" id="contactform-email" placeholder="" value="" required>
      </div>
      <div class="form-group">
        <label for="subject">Subject</label>
        <div class="input-group">
          <select class="form-control" name="subject" id="contactform-subject" required>
            <option value="">Select One</option>
            <option value="Summer Camp">Summer Camp</option>
            <option value="Reservations">Reservations</option>
            <option value="Property">Property</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea class="form-control" name="message" id="contactform-message" rows="4" required></textarea>
      </div>
      <div class="g-recaptcha"
        data-sitekey="{{ site.recaptcha }}"
        data-callback="ContactUs"
        data-size="invisible">
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary btn-block" id="contactform-send">Send</button>
      </div>
      <div class="alert alert-info fade hidden" role="alert" id="alert-response">
        <strong id="alert-headline"></strong> <span id="alert-text"></span>
      </div>
    </form>
  </div>
  <div class="col-12 col-md-4">
    <h2>Contact Info</h2>
    <address>
      <strong>Resica Falls Scout Reservation</strong><br>
      1200 Resica Falls Road<br>
      East Stroudsburg, PA 18302<br>
      <a href="resicafalls.org">ResicaFalls.org</a><br>
      <a href="mailto:hello@ResicaFalls.org">hello@ResicaFalls.org</a>
    </address>
    <h2>Phone Numbers</h2>
    <address>
      Phone: (570) 223-8312<br>
      Fax: (610) 668-2951
    </address>
  </div>
</div>
