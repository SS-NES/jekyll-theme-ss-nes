# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-ss-nes"
  spec.version       = "1.1.0"
  spec.authors       = ["Vincent Twigt"]
  spec.email         = ["135724179+vtwigt@users.noreply.github.com"]

  spec.summary       = "Custom Jekyll theme for SS-NES landing page"
  spec.homepage      = "https://github.com/SS-NES/jekyll-theme-ss-nes"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README\.md|_config\.yml)!i) }

  spec.required_ruby_version = ">= 2.7.0"

  spec.add_runtime_dependency "jekyll", ">= 3.5", "< 5.0"
end
