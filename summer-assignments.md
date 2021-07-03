---
title: Check-In Assignment Information
layout: page
permalink: /summer/assignments
excerpt: Check out the assigned check-in times and campsites.
---

<div class="row">
  <div class="col">
    <h2>Week 2 (July 4-9)</h2>
    <table class="table table-responsive table-sm table-striped my-3 text-center">
      <thead>
        {% for row in site.data.2021troops-week2 %}
          {% if forloop.first %}
          <tr>
            {% for pair in row %}
              <th>{{ pair[0] }}</th>
            {% endfor %}
          </tr>
          {% endif %}
        {% endfor %}
      </thead>
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
</div>
