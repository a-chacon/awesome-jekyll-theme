# frozen_string_literal: true

require_relative 'lib/awesome-jekyll-theme/version'

Gem::Specification.new do |spec|
  spec.name = 'awesome-jekyll-theme'
  spec.version       = AwesomeJekyllTheme::VERSION
  spec.authors       = ['a-chacon']
  spec.email         = ['andres.ch@protonmail.com']

  spec.summary       = 'A clean, versatile Jekyll theme with minimalist design and robust features. Ideal for portfolios, blogs, and project showcases with responsive layouts and easy customization.'
  spec.homepage      = 'https://github.com/a-chacon/awesome-jekyll-portfolio'
  spec.license       = 'MIT'

  spec.files         = `git ls-files -z`.split("\x0").select do |f|
    f.match(/^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)/i)
  end

  spec.add_runtime_dependency 'jekyll', '~> 4.3'
  spec.add_dependency 'jekyll-archives', '~> 2.2.1'
  spec.add_dependency 'jekyll-polyglot', '~> 1.8'
  spec.add_dependency 'jekyll-seo-tag', '~> 2.8.0'

  spec.required_ruby_version = '>= 2.7.0'
end
