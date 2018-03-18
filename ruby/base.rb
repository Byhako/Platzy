nombre = 'Ruben'

if nombre == 'Ruben'
  puts 'Hola Ruben'
elsif
  puts 'Hola otro'
else
  puts 'Nada'
end

puts "\nCual es su nombre?\n"
nombre = gets.chomp

case nombre
  when 'Ruben'
    puts 'Hola Ruben'
  when 'Tato'
    puts 'Hola Tato'
  else
    puts 'Hola tonto'
end

# Un numero es par?

print 'Dame un numero: '
numero = gets.chomp.to_i

par = numero%2==0

if numero==0
  puts "El cero no es par ni impar."
else
  if par
    puts "El número #{numero} es par."
  else
    puts "El número #{numero} es impar."
  end
end

# Metodos

