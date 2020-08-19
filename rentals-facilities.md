---
title: Reserve a Facility
layout: page
permalink: /rentals/facilities
excerpt: Resica Falls Scout Reservation is home to many cabins and campsites available for rental throughout the year.
dependencies:
- src: //cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js
- src: //cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js
scripts: 
- src: assets/custom/js/rentals-facilities.js

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
  <div class="col-lg-6">
    <h2>Campsites</h2>
    <table class="table table-striped table-responsive" id="campsitesTable">
      <thead>
        <tr class="text-nowrap">
          <th scope="col">Name</th>
          <th scope="col">Camp</th>
          <th scope="col">Tent Platforms</th>
          <th scope="col">Adirondacks</th>
          <th scope="col">Pavilions</th>
        </tr>
      </thead>
      <tbody>
      {% for facility in site.data.campsites %}
        <tr>
          <td class="text-nowrap" scope="row">{{facility.name}}</td>
          <td>{{facility.camp}}</td>
          <td>{% if facility.platforms %}&check;{% endif %}</td>
          <td>{% if facility.adirondacks %}&check;{% endif %}</td>
          <td>{% if facility.pavilion %}&check;{% endif %}</td>
        </tr>
      {%- endfor -%}
      </tbody>
      <tfoot>
        <tr class="text-nowrap">
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </tfoot>
    </table>
  </div>
  <div class="col-lg-6">
    <h2>Lodges</h2>
    <table class="table table-striped table-responsive" id="lodgesTable">
      <thead>
        <tr class="text-nowrap">
          <th scope="col">Name</th>
          <th scope="col">Capacity</th>
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
          <td class="text-nowrap" scope="row">{{facility.name}}</td>
          <td>{{facility.capacity}}</td>
          <td>{{facility.cost}}</td>
          <td>{% if facility.heat %}&check;{% endif %}</td>
          <td>{% if facility.water %}&check;{% endif %}</td>
          <td>{% if facility.fireplace %}&check;{% endif %}</td>
          <td>{% if facility.woodstove %}&check;{% endif %}</td>
        </tr>
      {%- endfor -%}
      </tbody>
      <tfoot>
        <tr class="text-nowrap">
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </tfoot>
    </table>
    <h2>Venues</h2>
    <table class="table table-striped table-responsive">
      <thead>
        <tr class="text-nowrap">
          <th scope="col">Name</th>
          <th scope="col">Cost</th>
          <th scope="col"><abbr title="Cabins"><i class="fas fa-home"></i></abbr></th>
          <th scope="col"><abbr title="Campsites"><i class="fas fa-campground"></i></abbr></th>
          <th scope="col"><abbr title="Capacity">Cap</abbr></th>
          <th scope="col">Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td scope="row">Resica Falls Scout Reservation</td>
          <td>&dollar;3400</td>
          <td>{{site.data.lodges.size}}</td>
          <td>{{site.data.campsites.size}}</td>
          <td>{{resica_cap | divided_by: 10 | round | times: 10}}</td>
          <td></td>
        </tr>
        <tr>
          <td scope="row">Big Springs Camp</td>
          <td>&dollar;750</td>
          <td>{{springs_lodges.size}}</td>
          <td>{{springs_sites.size}}</td>
          <td>{{springs_cap | divided_by: 10 | round | times: 10}}</td>
          <td></td>
        </tr>
        <tr>
          <td scope="row">Firestone Camp</td>
          <td>&dollar;1000</td>
          <td>{{firestone_lodges.size}}</td>
          <td>{{firestone_sites.size}}</td>
          <td>{{firestone_cap | divided_by: 10 | round | times: 10}}</td>
          <td></td>
        </tr>
        <tr>
          <td scope="row">Big Springs Dining Hall</td>
          <td>&dollar;125</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td scope="row">Big Springs Dining Hall &amp; Kitchen</td>
          <td>&dollar;250</td>
          <td></td>
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
