file = File.open('hola.txt', 'w')
file.puts 'Hola'
file.puts 'como estas'
file.close

leer = File.open('hola.txt', 'r')
data = leer.read
leer.close

print data


leer = File.open('hola.txt').readlines.each do |linea|
  print linea
  print "----------\n"
end

print "Archivo: #{leer} \n"
