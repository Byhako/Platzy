# coding: utf-8
lib = File.expand_path('../lib',__FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)

Gem::Specification.new do |spec|
  spec.name           ="NAME"
  spec.version        = '1.0'
  spec.authors        =["Ruben E Acosta"]
  spec.email          = ["eldragondera1@gmail.com"]
  spec.summary        =%q{resumen}
  spec.description    =%q{descrition}
  spec.homepage       ="http://domain.com/"
  spec.license        ="MIT"

  spec.files          =['lib/NAME.rb']
  spec.executables    = ['bin/NAME']
  spec.test_files     = ['tests/test_NAME.rb']
  spec.require_paths  = ["lib"]
end
