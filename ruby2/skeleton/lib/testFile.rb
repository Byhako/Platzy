class Humano
  attr_accessor :name, :age, :genre

  def initialize(name, age, genre)
    @name = name
    @age = age
    @genre = genre
  end
end

juan = Humano.new('Juan Perez', 15, 'Male')
