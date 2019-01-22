def print_one
  yield
end

print_one { puts "Bloque corriendo" }

# lambda
dinos_algo = -> { puts "Te digo algo" }
dinos_algo.call
dinos_algo.()
dinos_algo.[]
dinos_algo.===


time_two = -> { puts "#{x*2}" }
time_two.call(5)

# procedimientos
t = Proc.new { |x,y|  puts 'Hola mundo' }
t.call
