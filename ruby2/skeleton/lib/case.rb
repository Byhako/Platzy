y = 20

par = case
  when y%2 == 0 then puts 'Variable par'
  when y%2 != 0 then puts 'Variable impar'
end

puts par

# LOOPS

x = 0

while x < 10
  puts "X vale #{x}"
  x += 1
end

10.times do |num| 
  puts "X vale #{num}"
end

x = 0

until x > 10 # mientras 'x' NO sea mayor a '10' ejecutar contenido
  puts "X vale #{x}"
  x += 1
end

for x in 1..5
  puts "X vale #{x}"
end

(0..5).each do |i|
  puts "El valor de i es #{i}"
end


# Se puede tomar control de los loops con las palabras clave next y redo

# next indicará la ejecucion de la siguiente iteración en el loop
# ignorando todo el codigo despues de este

# redo indicara la ejecucion de la ultima iteración en el loop
# ignorando todo el codigo despues de este

10.times do |i|
  puts "Iteracion #{i}" # Se ejecuta en cada iteración
  next if i > 2 # se pasa a la siguiente iteración cuando 'i' sea mayor a 2
  puts "Soy feliz" # Este loop dejara de ser felíz a partir de que 'i' tome el valor de 3
end


10.times do |i|
  puts "Iteracion #{i}" 
  redo if i > 2 # cuando 'i' es mayor a 2 se vuelve a ejecutar la ultima iteración
  # Esto provocara un loop infinito
end


# retry se utiliza en un rescate(rescue) y reintentará le ejecución del bloque begin-end

begin
  puts 'Hola' # Se ejecuta correctamente
  raise  # Generamos una excepción
rescue 
  retry # Intenta nuevamente la ejecución del bloque
end
