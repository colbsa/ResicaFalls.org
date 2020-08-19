---
title: Reserve a Facility
layout: page
permalink: /rentals/facilities
excerpt: Resica Falls Scout Reservation is home to many cabins and campsites available for rental throughout the year.

---

## Cabins & Campsites
Resica Falls Scout Reservation is home to {{site.data.lodges.size}} cabins and {{site.data.campsites.size}} campsites available for rental at various points throughout the year. Review the table below to see the accommodations and facilities that are available with each. With such a numerous amount of facilities available, there is something available for any unit - Cub Pack, Scouts BSA Troop, Venturing Crew, or Sea Scout Ship - looking to complete any type of outdoor adventure. All lodges have electricity, refrigerators, stoves and a fire ring outside. Lodges with water have kitchen sinks and full bathrooms. All campsites cost $50 per weekend, comfortably hold 35 campers, have a fire ring and latrine in-site as well as water in close proximity.

{% contentfor sidebar %}

{% picture thumb /img/rentals/campsites/generic_creek.jpg --img class="img-fluid rounded" --alt A dome tent pitched with the entryway facing a small creek with fall foliage on the ground %}

<a class="btn btn-primary btn-block" href="https://colbsa.doubleknot.com/facilitysearch/2849" target="_blank">Book Now!</a>

{% endcontentfor %}

{% contentfor bottom %}

{% assign firestone_lodges = site.data.lodges | where: "camp", "Firestone" %}
{% assign firestone_sites = site.data.campsites | where: "camp", "Firestone" %}
{% assign springs_lodges = site.data.lodges | where: "camp", "Big Springs" %}
{% assign springs_sites = site.data.campsites | where: "camp", "Big Springs" %}

{% assign firestone_cap = firestone_sites.size | times: 35 %}
{% for facility in firestone_lodges %}
  {% assign firestone_cap = firestone_cap | plus: facility.capacity %}
{% endfor %}

{% assign springs_cap = springs_sites.size | times: 35 %}
{% for facility in springs_lodges %}
  {% assign springs_cap = springs_cap | plus: facility.capacity %}
{% endfor %}

{% assign resica_cap = firestone_cap | plus: springs_cap %}

<div class="row">
  <div class="col-md-6">
    <h2>Campsites</h2>
    <table class="table table-responsive table-sm text-center">
      <thead>
        <tr class="text-nowrap">
          <th class="text-left" scope="col">Name</th>
          <th scope="col">Tent Platforms</th>
          <th scope="col">Adirondacks</th>
          <th scope="col">Pavilions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" colspan="4" class="table-active">Big Springs</th>
        </tr>
      {% for facility in springs_sites %}
        <tr>
          <th class="text-nowrap text-left" scope="row">{{facility.name}}</th>
          <td>{% if facility.platforms %}<i class="fa fa-check"></i>{% endif %}</td>
          <td>{% if facility.adirondacks %}<i class="fa fa-check"></i>{% endif %}</td>
          <td>{% if facility.pavilion %}<i class="fa fa-check"></i>{% endif %}</td>
        </tr>
      {%- endfor -%}
        <tr>
          <th scope="row" colspan="4" class="table-active">Firestone</th>
        </tr>
      {% for facility in firestone_sites %}
        <tr>
          <th class="text-nowrap text-left" scope="row">{{facility.name}}</th>
          <td>{% if facility.platforms %}<i class="fa fa-check"></i>{% endif %}</td>
          <td>{% if facility.adirondacks %}<i class="fa fa-check"></i>{% endif %}</td>
          <td>{% if facility.pavilion %}<i class="fa fa-check"></i>{% endif %}</td>
        </tr>
      {%- endfor -%}
      </tbody>
    </table>
  </div>
  <div class="col-md-6">
    <h2>Lodges</h2>
    <table class="table table-responsive table-sm text-center">
      <thead>
        <tr class="text-nowrap">
          <th class="text-left" scope="col">Name</th>
          <th scope="col"><abbr title="Capacity">Cap</abbr></th>
          <th scope="col">Cost</th>
          <th scope="col">Heat</th>
          <th scope="col">Water</th>
          <th scope="col">Fireplace</th>
          <th scope="col">Wood Stove</th>
        </tr>
      </thead>
      <tbody>
      {% for facility in site.data.lodges %}
        <tr>
          <th class="text-nowrap text-left" scope="row">{{facility.name}}</th>
          <td>{{facility.capacity}}</td>
          <td>&dollar;{{facility.cost}}</td>
          <td>{% if facility.heat %}<i class="fa fa-check"></i>{% endif %}</td>
          <td>{% if facility.water %}<i class="fa fa-check"></i>{% endif %}</td>
          <td>{% if facility.fireplace %}<i class="fa fa-check"></i>{% endif %}</td>
          <td>{% if facility.woodstove %}<i class="fa fa-check"></i>{% endif %}</td>
        </tr>
      {%- endfor -%}
      </tbody>
    </table>
    <h2>Venues</h2>
    <table class="table table-responsive table-sm text-center">
      <thead>
        <tr class="text-nowrap">
          <th class="text-left" scope="col">Name</th>
          <th scope="col">Cost</th>
          <th scope="col"><abbr title="Cabins"><i class="fas fa-home"></i></abbr></th>
          <th scope="col"><abbr title="Campsites"><i class="fas fa-campground"></i></abbr></th>
          <th scope="col"><abbr title="Capacity">Cap</abbr></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th class="text-left" scope="row">Resica Falls Scout Reservation</th>
          <td>&dollar;3000</td>
          <td>{{site.data.lodges.size}}</td>
          <td>{{site.data.campsites.size}}</td>
          <td>{{resica_cap | divided_by: 10 | round | times: 10}}</td>
        </tr>
        <tr>
          <th class="text-left" scope="row">Big Springs Camp</th>
          <td>&dollar;1500</td>
          <td>{{springs_lodges.size}}</td>
          <td>{{springs_sites.size}}</td>
          <td>{{springs_cap | divided_by: 10 | round | times: 10}}</td>
        </tr>
        <tr>
          <th class="text-left" scope="row">Firestone Camp</th>
          <td>&dollar;1000</td>
          <td>{{firestone_lodges.size}}</td>
          <td>{{firestone_sites.size}}</td>
          <td>{{firestone_cap | divided_by: 10 | round | times: 10}}</td>
        </tr>
        <tr>
          <th class="text-left" scope="row">Big Springs Dining Hall</th>
          <td>&dollar;125</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th class="text-left" scope="row">Big Springs Dining Hall &amp; Kitchen</th>
          <td>&dollar;250</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <h2>Special Events</h2>
    Facility and venue prices are listed for Scouting groups and are based on a per weekend rental except where otherwise noted. Our facilities and camp venues are available for non-Scouting groups to rent. For more information on renting any part of Musser Scout Reservation for a special event, visit <a href="/rentals/private-events">Events in Camp</a>.
  </div>
</div>

{% endcontentfor %}
