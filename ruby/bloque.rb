def ejecutar   #(&block)
  if block_given?
    #block.call
    yield
  else
    puts 'No tengo bloque'
  end
end

ejecutar { puts 'Hola' }

#  PROCS Y LAMBDAS

saludar = lambda { |nombre| puts "Hola #{nombre}" }
saludar.call('Selene')

despedir = proc { |nombre| puts "Adios #{nombre}" }
despedir.call('Omar')
