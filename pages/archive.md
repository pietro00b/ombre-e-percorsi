---
layout: page
title: Archivio
subtitle: Tutti gli articoli organizzati per anno
permalink: /archivio/
---

<div class="archive-container">
  {% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
  
  {% for year in posts_by_year %}
  <section class="archive-year">
    <h2 class="year-title">{{ year.name }}</h2>
    
    <div class="archive-posts">
      {% for post in year.items %}
      <article class="archive-item">
        <div class="archive-meta">
          <time class="archive-date" datetime="{{ post.date | date_to_xmlschema }}">
            {{ post.date | date: "%d %b" }}
          </time>
          
          {% if post.location %}
          <span class="archive-location">{{ post.location }}</span>
          {% endif %}
        </div>
        
        <div class="archive-content">
          <h3 class="archive-title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h3>
          
          {% if post.categories.size > 0 %}
          <div class="archive-categories">
            {% for category in post.categories limit:2 %}
            <span class="category-tag small">{{ category }}</span>
            {% endfor %}
          </div>
          {% endif %}
          
          <p class="archive-excerpt">{{ post.excerpt | strip_html | truncate: 100 }}</p>
        </div>
      </article>
      {% endfor %}
    </div>
  </section>
  {% endfor %}
</div>

<style>
.archive-container {
  max-width: 900px;
  margin: 0 auto;
}

.archive-year {
  margin-bottom: 3rem;
}

.year-title {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 2rem;
  position: relative;
  padding-left: 2rem;
}

.year-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 12px;
  height: 12px;
  background: var(--primary-color);
  border-radius: 50%;
}

.archive-posts {
  border-left: 2px solid var(--border-color);
  margin-left: 1rem;
}

.archive-item {
  display: flex;
  gap: 2rem;
  padding: 1.5rem 0 1.5rem 2rem;
  position: relative;
  border-bottom: 1px solid var(--border-color);
}

.archive-item::before {
  content: '';
  position: absolute;
  left: -5px;
  top: 2rem;
  width: 8px;
  height: 8px;
  background: var(--primary-color);
  border-radius: 50%;
}

.archive-item:last-child {
  border-bottom: none;
}

.archive-meta {
  min-width: 120px;
  flex-shrink: 0;
}

.archive-date {
  display: block;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.archive-location {
  display: block;
  font-size: 0.9rem;
  color: var(--text-light);
}

.archive-content {
  flex: 1;
}

.archive-title {
  margin: 0 0 0.5rem 0;
  font-size: 1.3rem;
}

.archive-title a {
  color: var(--text-color);
  text-decoration: none;
}

.archive-title a:hover {
  color: var(--primary-color);
}

.archive-categories {
  margin-bottom: 0.5rem;
}

.category-tag.small {
  font-size: 0.75rem;
  padding: 0.2rem 0.5rem;
  margin-right: 0.5rem;
}

.archive-excerpt {
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
}

@media (max-width: 768px) {
  .archive-item {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .archive-meta {
    min-width: auto;
  }
  
  .archive-date, .archive-location {
    display: inline;
    margin-right: 1rem;
  }
}
</style>
