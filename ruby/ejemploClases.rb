#!/usr/bin/env ruby

class Anfitrion
  attr_accessor :nombres
  
  # Crea el objeto
  def initialize(nombres = "vacio")
     @nombres = nombres
  end
  
  def saludar
    if @nombres.nil?
      puts "..."
    elsif @nombres.respond_to?("each")
      #  @nombres es lista de algun tipo
      @nombres.each do |nombre|
      puts "Hola #{nombre}"
      end
    else
      puts "Hola #{@nombres}"
    end
  end
  
  def despedir
    if @nombres.nil?
      puts "..."
    elsif @nombres.respond_to?("join")
      # juntar elementos de lista usando coma como separador
      puts "Adiós #{nombres.join(", ")}. Vuelvan pronto."
    else
      puts "Adiós #{nombres}. Vuelve pronto."
    end
  end
  
end

if __FILE__ == $0

  ma = Anfitrion.new
  ma.saludar
  ma.despedir
  
  # Cambia el nombre a Selene
  ma.nombres = "Selene"
  ma.saludar
  ma.despedir
  
  # Cambia el nombre a lista de nombres
  ma.nombres = ["Tato", "Nati", "Paolo"]
  ma.saludar
  ma.despedir
  
  # Cambiarlo a nil
  ma.nombres = nil
  ma.saludar
  ma.despedir
  
end
