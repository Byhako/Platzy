def porcentaje(a, b)
  raise TypeError, 'El primer arg no es numerico' if !a.is_a? Numeric

  raise TypeError, 'El segundo arg no es numerico' if !b.is_a? Numeric
  (a*100.0)/b
end

puts porcentaje(10, 100)

a = 1
b = '2'

begin
  c = a + b
  puts "Entre #{c}"
rescue
  puts "No puedo sumar #{a.class} con #{b.class}"
else
  # si no hay error ejecuto esto
  puts c
end

# ensure ejecuta halla o no error
def fullname(name, lastname)
  name + ' ' + lastname
rescue => e
  "El error es: #{e.message}"
ensure
  return lastname
end

puts fullname(3, 'Acosta')

