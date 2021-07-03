---
title: Check-In Assignment Information
layout: page
permalink: /summer/assignments
excerpt: Check out the assigned check-in times and campsites.
---

<div class="row">
  <div class="col">
    <h2 class="text-center">Week 2 (July 4-9)</h2>
    <table class="table table-sm table-striped my-3 text-center">
      <tbody>
      {% for row in site.data.2021troops-week2 %}
        {% if forloop.first %}
        <tr>
          {% for pair in row %}
            <th>{{ pair[0] }}</th>
          {% endfor %}
        </tr>
        {% endif %}

        {% tablerow pair in row %}
          {{ pair[1] }}
        {% endtablerow %}
      {% endfor %}
      </tbody>
    </table>
  </div>
  <div class="col">
    <h2 class="text-center">Week 3 (July 11-16)</h2>
    <table class="table table-sm table-striped my-3 text-center">
      <tbody>
      {% for row in site.data.2021troops-week3 %}
        {% if forloop.first %}
        <tr>
          {% for pair in row %}
            <th>{{ pair[0] }}</th>
          {% endfor %}
        </tr>
        {% endif %}

        {% tablerow pair in row %}
          {{ pair[1] }}
        {% endtablerow %}
      {% endfor %}
      </tbody>
    </table>
  </div>
</div>

<div class="row">
  <div class="col">
    <h2 class="text-center">Week 4 (July 18-23)</h2>
    <table class="table table-sm table-striped my-3 text-center">
      <tbody>
      {% for row in site.data.2021troops-week4 %}
        {% if forloop.first %}
        <tr>
          {% for pair in row %}
            <th>{{ pair[0] }}</th>
          {% endfor %}
        </tr>
        {% endif %}

        {% tablerow pair in row %}
          {{ pair[1] }}
        {% endtablerow %}
      {% endfor %}
      </tbody>
    </table>
  </div>
  <div class="col">
    <h2 class="text-center">Week 5 (July 25-30)</h2>
    <table class="table table-sm table-striped my-3 text-center">
      <tbody>
      {% for row in site.data.2021troops-week5 %}
        {% if forloop.first %}
        <tr>
          {% for pair in row %}
            <th>{{ pair[0] }}</th>
          {% endfor %}
        </tr>
        {% endif %}

        {% tablerow pair in row %}
          {{ pair[1] }}
        {% endtablerow %}
      {% endfor %}
      </tbody>
    </table>
  </div>
</div>

<div class="row">
  <div class="col">
    <h2 class="text-center">Week 6 (August 1-6)</h2>
    <table class="table table-sm table-striped my-3 text-center">
      <tbody>
      {% for row in site.data.2021troops-week6 %}
        {% if forloop.first %}
        <tr>
          {% for pair in row %}
            <th>{{ pair[0] }}</th>
          {% endfor %}
        </tr>
        {% endif %}

        {% tablerow pair in row %}
          {{ pair[1] }}
        {% endtablerow %}
      {% endfor %}
      </tbody>
    </table>
  </div>
  <div class="col">
    <h2 class="text-center">Week 7 (August 8-13)</h2>
    <p class="text-center">Coming Soon!</p>
  </div>
</div>
