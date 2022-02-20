---
title: Dates & Rates
layout: page
permalink: /summer/register
excerpt: 7 great weeks to spend the summer with us! Which will you choose?
---

<div class="row">
  <div class="col">
    <table class="table table-striped my-3 ">
      <thead class="text-center">
        <tr>
          <th scope="col"><h2 class="my-0">Pricing</h2></th>
        </tr>
      </thead>
      <tbody class="text-center">
          <tr>
            <td>Early Bird: $475 per Youth / $200 per Adult</td>
          </tr>
          <tr>
            <td>Regular: $505 per Youth / $200 per Adult</td>
          </tr>
          <tr>
            <td>
              <strong>Early Bird offer ends March 1</strong><br>
              <em>$50 per Scout deposit must be paid to lock-in the Early Bird rate for each individual Scout</em>
            </td>
          </tr>
          <tr>
            <td><strong>Second Week: $375 per Youth</strong></td>
          </tr>
          <tr>
            <td><strong>Every unit receives 2 free adults!</strong><br>You will also earn 1 free adult for every 10 scouts after your first 20 scouts!</td>
          </tr>
      </tbody>
    </table>
    <div class="col alert alert-primary text-center">
      Please submit only one registration per unit. If you have already registered and would like to update your registration follow the link in your confirmation email or email <a href="mailto:camping@colbsa.org">camping@colbsa.org</a>.
    </div>
  </div>
  <div class="col">
    <table class="table table-striped my-3 text-center">
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
          {% if session.link %}
            <td><a class="btn btn-primary btn-block" href="{{session.link}}" target="_blank">Register Now</a></td>
          {% else %}
            <td>Coming Soon</td>
          {% endif%}
        </tr>
      {%- endfor -%}
      </tbody>
    </table>
  </div>
</div>
