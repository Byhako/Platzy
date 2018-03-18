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

