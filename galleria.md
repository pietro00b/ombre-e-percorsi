---
layout: page
title: Galleria Fotografica
permalink: /galleria/
---

Benvenuti nella mia galleria fotografica. Qui potrete trovare una raccolta di immagini dei luoghi visitati.

<div class="gallery-container">
  {% for post in site.posts %}
    {% if post.gallery %}
      <div class="gallery-post">
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <div class="location">{{ post.location }}</div>
        <div class="image-gallery">
          {% for image in post.gallery limit:3 %}
            <figure>
              <a href="{{ post.url | relative_url }}">
                <img src="{{ '/assets/images/' | append: image.file | relative_url }}" alt="{{ image.caption }}">
              </a>
              <figcaption>{{ image.caption }}</figcaption>
            </figure>
          {% endfor %}
          {% if post.gallery.size > 3 %}
            <div class="more-images">
              <a href="{{ post.url | relative_url }}">+ {{ post.gallery.size | minus: 3 }} altre foto</a>
            </div>
          {% endif %}
        </div>
      </div>
    {% endif %}
  {% endfor %}
</div>
