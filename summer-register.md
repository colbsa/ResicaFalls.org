---
title: 2026 Dates & Rates
layout: landing
permalink: /summer/register
excerpt: 6 great weeks to spend the summer with us! Which will you choose?
---

<style>
  .jumbotron {
    background: url(/img/summer/registration/cover.jpg) center no-repeat;
    background-size: cover;
    min-height: 75vh;
    margin: 0;
    padding: 0;
    position: relative;
  }
  .jumbotron-container {
    min-height: 75vh;
  }
  .divider {
    width: 100%;
    max-height: 30vh;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  h1 {
    font-size: 6em;
    line-height: 1em;
  }
  h2 {
    font-size: 3em;
    line-height: 1em;
  }
  .header-text{
      font-family: 'bebas-neue', serif;
      font-size: 4em;
      line-height: 1em;
  }
  .subheader-text{
    font-size: 1.5em;
    font-weight: bold;
  }
  .text-shadow {
    text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
                 0px 8px 13px rgba(0,0,0,0.1),
                 0px 18px 23px rgba(0,0,0,0.1);
  }
</style>

<div class="jumbotron jumbotron-fluid">
  <!-- <div class="d-flex flex-row justify-content-end align-items-center jumbotron-container">
    <div class="text-center mx-5">
      <h2 class="text-white">EXPERIENCE SCOUTING'S GREATEST ADVENTURE</h2>
      <h1 class="text-white">SCOUTS BSA RESIDENT CAMP</h1>
    </div>
  </div> -->
    <div class="d-flex flex-row justify-content-center align-items-center jumbotron-container">
    <div class="text-center mb-5 text-shadow text-white">
      <h1>{{page.title}}</h1>
    </div>
  </div>
  <svg class="divider" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="#fff" fill-opacity="1" d="M0,192L40,181.3C80,171,160,149,240,149.3C320,149,400,171,480,192C560,213,640,235,720,224C800,213,880,171,960,144C1040,117,1120,107,1200,117.3C1280,128,1360,160,1400,176L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
  <svg class="divider" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" ><path fill="#fff" fill-opacity="0.6" d="M0,160L40,144C80,128,160,96,240,85.3C320,75,400,85,480,122.7C560,160,640,224,720,234.7C800,245,880,203,960,165.3C1040,128,1120,96,1200,85.3C1280,75,1360,85,1400,90.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
  <svg class="divider" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="#fff" fill-opacity=".4" d="M0,96L40,101.3C80,107,160,117,240,122.7C320,128,400,128,480,117.3C560,107,640,85,720,90.7C800,96,880,128,960,149.3C1040,171,1120,181,1200,176C1280,171,1360,149,1400,138.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
</div>

<div class="container">
  <div class="row">
    <div class="col text-center">
      <div class="subheader-text mb-4">2026 PRICING</div>
    </div>
  </div>
  <div class="row mb-4">
    <div class="col-md-6 text-center">
      <div class="alert alert-primary">
        <strong>Early Bird Fee</strong><br />
        Cradle of Liberty Council - $625 per Scout<br />
        Out of Council - $635 per Scout <br />
        <em>(Based On The Per Scout Deposit)</em>
      </div>
      <div class="alert alert-secondary">
        <strong>Regular Fee</strong><br />
        $655 per Scout
      </div>
      <!-- <div class="alert alert-secondary">
        <strong>Second Week: $400 per Youth</strong><br>
        <em>Contact camping@colbsa.org to apply this discount.</em>
      </div> -->
      <div class="mb-2 mb-md-0">
        <strong>Pricing Now Includes All Merit Badge Supplies!</strong><br>
        Only additional fees are for external certifications.
      </div>
    </div>
    <div class="col-md-6 text-center">
      <div>
        <strong>Adult Fee</strong><br />
        $270 per Adult <br />
        <hr>
        <strong>Every Unit Receives at least 2 Free Adults!</strong>
        <ul class="list-unstyled mb-0">
          <li>1-29 Scouts - 2 Free Leaders</li>
          <li>30-39 Scouts - 3 Free Leaders</li>
          <li>40-49 Scouts - 4 Free Leaders</li>
          <li>50-59 Scouts - 5 Free Leaders</li>
        </ul>       
      </div>
    </div>
  </div>
  <hr>
  <div class="row mt-4">
    <div class="col text-center">
      <div class="subheader-text mb-4">2026 DATES</div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6">
      <table class="table table-striped text-center">
        <thead>
          <tr>
            <th scope="col">Session</th>
            <th scope="col">Dates</th>
            <th scope="col">Register</th>
          </tr>
        </thead>
        <tbody>
        {% for session in site.data.summer-sessions %}
          <tr>
            <td>{{session.name}}</td>
            <td>{{session.dates}}</td>
            {% if session.full %}
              <td><strong>FULL</strong></td>
            {% else %}
              {% if session.link %}
                <td><a class="btn btn-primary btn-block" href="{{session.link}}" target="_blank">Register Now</a></td>
              {% else %}
                <td>Coming Soon</td>
              {% endif%}
            {% endif%}
          </tr>
        {%- endfor -%}
        </tbody>
      </table>
    </div>
    <div class="col-md-6">
      <div class="alert alert-secondary">
        <div class="text-center mb-2">
          <strong>PAYMENT SCHEDULE</strong>
        </div>
        <strong>Feb 1</strong> - Unit Deposit of $300 & $50/Scout to lock-in the Early Bird fee for each Scout.<br>
        <strong>March 31</strong> - An additional $150 due per person to register for Merit Badges and Programs.<br>
        <strong>May 15</strong> - Full Payment is due before campsite assignments and check-in times are assigned.<br>
      </div><br />
      <div class="text-center">
        <strong>Please submit only one registration per unit.</strong><br>
        If you have already registered and would like to update your registration follow the link in your confirmation email or email camping@scoutingphilly.org.
      </div><br />
      <div class="text-center mt-3">
        <strong>Partnered boy and girl troops not in the combined pilot program should register for camp separately.</strong><br>
        This will assist in transferring advancement progress from Black Pug into Scoutbook.
      </div>
    </div>    
  </div>
</div>
