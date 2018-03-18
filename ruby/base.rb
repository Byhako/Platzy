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
  puts "El cero no es par ni impar.\n"
else
  if par
    puts "El número #{numero} es par.\n"
  else
    puts "El número #{numero} es impar.\n"
  end
end

# Metodos para iterar
array = Array(1..4)

array.each do |elemento|
  puts elemento
end

for i in array
  puts i
end

i = 0
while i<array.size
  puts array[i]
  i = i + 1
end

def es_primo(n)
  indice = (n/2).to_i
  array = Array(2..indice)
  array.each do |numero|
    x = n%numero
    if x == 0
      return false
    end
  end

  return true
end

print 'Números primos. Dame uno: '
numero = gets.chomp.to_i

if es_primo(numero)
  puts "El número #{numero} es primo."
else
  puts "El número #{numero}  NO es primo."
end

