class Humano
  attr_accessor :name, :age, :genre

  def greet
    puts "hola, me llamo #{@name}"
  end
end

juan = Humano.new
juan.name = "Juanito Perez"
juan.age = 20
juan.genre = "Masculino"

puts juan.greet
