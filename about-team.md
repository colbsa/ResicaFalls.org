---
title: Meet the Team
layout: page
permalink: /about/team
excerpt: It takes a dedicated team to run a summer; meet them here!
---

{% for profile in site.data.profiles %}

{% assign include_image = "/img/profiles/" | append: profile.image %}
{% assign include_title = profile.name | append: " &mdash; " | append: profile.title %}

{% include section_card.html image=include_image title=include_title content=profile.bio %}

{% endfor %}
