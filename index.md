---
layout: default
title: Home
---

<div class="posts-list">
  {% for post in site.posts %}
    <article class="post-item">
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <div class="post-meta">
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d %b %Y" }}</time>
      </div>
      <div class="post-excerpt">
        {{ post.excerpt }}
      </div>
    </article>
  {% endfor %}
</div>
