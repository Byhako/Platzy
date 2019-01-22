class Ave
  def volar
    puts "Estoy volando"
  end
end

class Paloma < Ave

end

rita = Paloma.new

puts rita.volar
