---
layout: default
title: Home
---

<div class="posts-list">
  {% for post in paginator.posts %}
    <article class="post-item">
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <div class="post-meta">
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%-d %B %Y" }}</time>
      </div>
      <div class="post-excerpt">
        {{ post.excerpt }}
        <p><a href="{{ post.url | relative_url }}" class="read-more">Continua a leggere &rarr;</a></p>
      </div>
    </article>
  {% endfor %}
</div>

<!-- Pagination links -->
<div class="pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path | relative_url }}" class="previous">&laquo; Precedente</a>
  {% else %}
    <span class="previous disabled">&laquo; Precedente</span>
  {% endif %}
  <span class="page-number">Pagina {{ paginator.page }} di {{ paginator.total_pages }}</span>
  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path | relative_url }}" class="next">Successiva &raquo;</a>
  {% else %}
    <span class="next disabled">Successiva &raquo;</span>
  {% endif %}
</div>
