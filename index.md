---
layout: default
title: Home
---
# Ombre e Percorsi

Benvenuti in Ombre e Percorsi, un piccolo archivio di viaggio attraverso luoghi dimenticati, storie nascoste e memorie che resistono al tempo.

## Ultime storie

<div class="storie-recenti">
  {% for post in site.posts limit:3 %}
    <article class="storia-anteprima">
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <div class="storia-meta">
        <span class="data">{{ post.date | date: "%d/%m/%Y" }}</span>
        {% if post.location %}
        <span class="location">{{ post.location }}</span>
        {% endif %}
      </div>
      <div class="estratto">
        {{ post.excerpt }}
      </div>
      <a href="{{ post.url | relative_url }}" class="continua">Continua a leggere →</a>
    </article>
  {% endfor %}
</div>
