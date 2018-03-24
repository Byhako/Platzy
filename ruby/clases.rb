class Moto
  @@NRuedas = 2 # variable de clase

  #attr_reader :marca  # atributo re lectura
  #attr_writer :marca  # atributo de escritura
  attr_accessor :marca # atributo de lectura y escritura
  def initialize(params)
    @marca = params[:marca] # variable de instancia
    @color = params[:color]
  end

  # privado pero se puede heredar
  protected
  def mostrar
    puts "Moto marca #{@marca}, de color #{@color}."
  end

  # privado y no se puede heredar
  private
  def metodo
    puts "Soy un metodo privado."
  end

  # metodo de clase
  def self.ruedas
    puts "Todas las motos tienen #{@@NRuedas} ruedas."
  end

  public
  def presentacion
    puts "Mi marca es #{@marca}, y soy de color #{@color}."
  end

end

class Bicicleta < Moto
  def initialize(params)
    super(params)
    @tipo = params[:tipo]
  end
end


Moto.ruedas # invocamos el metodo sin necesidad de instanciar un objeto
obj = Moto.new({marca:'Kawasaki', color:'Blanca'})
puts obj.marca
obj.marca = 'Honda'
puts obj.marca

bic = Bicicleta.new({marca:'GW', color:'Rojo', tipo:'Playera'})
bic.presentacion

# Ruby tiene la palabra reservada "super”. Lo que hace super es obtener
# todas las líneas de código que tiene el mismo método en una clase padre.