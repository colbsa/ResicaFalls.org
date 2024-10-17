---
title: Important Documents
layout: page
permalink: /documents/
excerpt: Flyers, information packets, and forms for summer camp and weekend excursions.
---

<div class="row">
  {%- for section in site.data.documents -%}
  <div class="col-md-6">
    <h2>{{section.name}}</h2>
    <hr>
    {%- for subsection in section.subsections -%}
      {%- if subsection.name -%}
        <strong>{{subsection.name}}</strong>
      {%- endif -%}
      <ul>
        {%- for file in subsection.files %}
          <li>
          {%- if file.url -%}
            <a href="{{file.url}}" target="_blank">{{file.name}}</a>
            {%- if file.updated-date -%}
              <em> (Updated {{file.updated-date | date: "%m/%d/%Y"}})</em>
            {%- endif -%}
          {%- else -%}
            {{file.name}} <em>(Coming&nbsp;
              {%- if file.coming-soon-date -%}
                {{file.coming-soon-date | date: "%B %Y"}})
              {%- else -%}
                Soon!)
              {%- endif -%}
            </em>
          {%- endif -%}
          </li>
        {%- endfor %}
      </ul>
      {%- endfor -%}
  </div>
  {% endfor -%}
</div>
