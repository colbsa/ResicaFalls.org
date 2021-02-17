---
title: Meet the Team
layout: page
permalink: /meet-the-team
excerpt: It takes a dedicated team to run a summer; meet them here!
---

{% for profile in site.data.profiles %}

<div class="row my-3">
  <div class="col-8 col-md-3 mx-auto pb-3">
    {% picture thumb {{"/img/profiles/" | append: profile.image}} --img class="w-100 rounded-circle" %}
  </div>
  <div class="col-12 col-md-9">
    <h2 class="card-title">{{profile.name | append: " &mdash; " | append: profile.title}}</h2>
    <p class="card-text">{{profile.bio}}</p>
  </div>
</div>

{% endfor %}
