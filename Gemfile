source "https://rubygems.org"

# Jekyll compatibile con GitHub Pages
gem "jekyll", "~> 4.2.0"

# Plugin essenziali
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
  gem "jekyll-paginate", "~> 1.1"
end

# Piattaforme Windows
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance su Windows  
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# HTTP parser per Jekyll 4.2
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

# Lock versione per Ruby
gem "webrick", "~> 1.8"
