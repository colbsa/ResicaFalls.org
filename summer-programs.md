---
title: Programs & Opportunities
layout: page
permalink: /summer/programs
excerpt: Many traditional summer highlights are available alongside new programs and fun to have.
---

Resica Falls offers a full and diverse program to meet the needs of all of our campers. Our specially trained and skilled staff members provide instruction and supervision of the highest level in each of activities below as part of our summer camp program.

<div class="row justify-content-md-center text-center mb-4">
	<a class="col-md-4 btn btn-primary mb-4" href="/summer/register">Register Today</a>
</div>

{% for program in site.data.summer-programs %}

<div class="card my-3">
  <div class="row">
    <div class="col-md-3">
      {% picture thumb /img/summer/{{program.thumbnail}} --img class="w-100" --alt {{program.alt}} %}
    </div>
    <div class="col-md-9 p-3">
      <div class="card-block px-3">
        <h2 class="card-title">{{program.name}}</h2>
        <p class="card-text">{{program.description}}</p>
      </div>
    </div>
  </div>
</div>

{% endfor %}
