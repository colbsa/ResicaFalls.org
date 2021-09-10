---
title: Dates & Rates
layout: page
permalink: /summer/register
excerpt: 7 great weeks to spend the summer with us! Which will you choose?
---

We're still preparing to open registration for 2022. You can reserve your spot today using the Declaration of Intent on the [Important Documents page](/documents). For information about 2022 camp season, check back in a few weeks, or contact us at hello@ResicaFalls.org.

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
            <td>Early Bird: $445 per Youth / $200 per Adult</td>
          </tr>
          <tr>
            <td>Regular: $475 per Youth / $200 per Adult</td>
          </tr>
          <tr>
            <td><em>Early bird offer ends December 15</em></td>
          </tr>
          <tr>
            <td><strong>Second Week: $250 per Youth</strong></td>
          </tr>
          <tr>
            <td><strong>Every unit receives 2 free adults!</strong><br>You will also earn 1 free adult for every 10 scouts after your first 20 scouts!</td>
          </tr>
      </tbody>
    </table>
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
    <div class="text-center">
      <a role="button" class="btn btn-primary btn-lg" href="https://colbsa.doubleknot.com/Rosters/logon.aspx?orgkey=541">View Your Current Registration</a>
    </div>
  </div>
</div>
