---
layout: page
title: Galleria
subtitle: Una collezione visuale dei momenti catturati
permalink: /galleria/
---

<div class="gallery-container">
  {% assign image_posts = site.posts | where_exp: "post", "post.featured_image" %}
  
  {% if image_posts.size > 0 %}
  <div class="gallery-grid">
    {% for post in image_posts limit: 12 %}
    <div class="gallery-item">
      <div class="gallery-image-container">
        <img src="{{ post.featured_image | relative_url }}" alt="{{ post.title }}" loading="lazy">
        
        <div class="gallery-overlay">
          <div class="gallery-info">
            <h3 class="gallery-title">{{ post.title }}</h3>
            
            <div class="gallery-meta">
              <span class="gallery-date">{{ post.date | date: "%B %Y" }}</span>
              {% if post.location %}
              <span class="gallery-location">📍 {{ post.location }}</span>
              {% endif %}
            </div>
            
            {% if post.featured_image_caption %}
            <p class="gallery-caption">{{ post.featured_image_caption }}</p>
            {% endif %}
            
            <a href="{{ post.url | relative_url }}" class="gallery-read-btn">Leggi articolo</a>
          </div>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
  {% else %}
  <div class="no-images">
    <p>La galleria è ancora vuota.</p>
    <p>Le immagini appariranno qui quando pubblicherai articoli con immagini in evidenza.</p>
  </div>
  {% endif %}
</div>

<style>
.gallery-container {
  max-width: 1200px;
  margin: 0 auto;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.gallery-item {
  position: relative;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
}

.gallery-image-container {
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
}

.gallery-image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%);
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-info {
  color: white;
  width: 100%;
}

.gallery-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
}

.gallery-meta {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  opacity: 0.9;
}

.gallery-date {
  margin-right: 1rem;
}

.gallery-caption {
  font-size: 0.85rem;
  margin: 0.5rem 0;
  opacity: 0.8;
  line-height: 1.4;
}

.gallery-read-btn {
  display: inline-block;
  background: rgba(255,255,255,0.2);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  margin-top: 0.5rem;
  transition: background 0.3s ease;
}

.gallery-read-btn:hover {
  background: rgba(255,255,255,0.3);
}

.no-images {
  text-align: center;
  padding: 4rem 2rem;
  color: var(--text-light);
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .gallery-overlay {
    opacity: 1;
    background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%);
  }
}
</style>
