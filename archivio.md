---
layout: page
title: Archivio
permalink: /archivio/
---

<div class="archives">
  {% for post in site.posts %}
    {% unless post.next %}
      <h3 class="archive-year">{{ post.date | date: '%Y' }}</h3>
    {% else %}
      {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
      {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
      {% if year != nyear %}
        <h3 class="archive-year">{{ post.date | date: '%Y' }}</h3>
      {% endif %}
    {% endunless %}
    
    <div class="archive-item">
      <span class="archive-date">{{ post.date | date: "%-d %b" }}</span>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </div>
  {% endfor %}
</div>

<h2>Categorie</h2>
<div class="categories">
  {% assign sorted_categories = site.categories | sort %}
  {% for category in sorted_categories %}
    <div class="category-group" id="{{ category[0] | slugify }}">
      <h3>{{ category[0] }}</h3>
      <ul>
      {% for post in category[1] %}
        <li>
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          <span class="post-date">({{ post.date | date: "%-d %b %Y" }})</span>
        </li>
      {% endfor %}
      </ul>
    </div>
  {% endfor %}
</div>
