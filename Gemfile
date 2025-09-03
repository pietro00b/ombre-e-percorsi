source "https://rubygems.org"

# Jekyll core
gem "jekyll", "~> 4.3.0"

# GitHub Pages (per deployment)
gem "github-pages", group: :jekyll_plugins

# Plugin essenziali
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
  gem "jekyll-paginate-v2"
end

# Piattaforme Windows
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance su Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock versione per Ruby
gem "webrick", "~> 1.8"
