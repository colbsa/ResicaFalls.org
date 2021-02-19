---
title: Weekend Activities
layout: page
permalink: /yearround/activities
excerpt: 
---

There’s something for everyone at Resica Falls! Our weekend campers have the opportunity to enjoy a tremendous array of activities around camp. Check out some of the activities below that are available from September through May.

{% for activity in site.data.weekend-activities %}

{% assign include_image = "/img/yearround/activities/" | append: activity.image %}
{% assign include_title = activity.name %}

{% include section_card.html image=include_image title=include_title content=activity.description %}

{% endfor %}
