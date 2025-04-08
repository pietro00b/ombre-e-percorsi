---
layout: default
title: Galleria
---
<h1>Galleria Fotografica</h1>

<p>Benvenuti nella mia galleria fotografica. Qui potrete trovare una raccolta di immagini dei luoghi visitati.</p>

<div class="image-gallery">
  {% for post in site.posts %}
    {% if post.gallery %}
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <div class="location">{{ post.location }}</div>
      <div class="gallery-images">
        {% for image in post.gallery %}
          <figure>
            <img src="{{ '/assets/images/' | append: image.file | relative_url }}" alt="{{ image.caption }}">
            <figcaption>{{ image.caption }}</figcaption>
          </figure>
        {% endfor %}
      </div>
    {% endif %}
  {% endfor %}
</div>
