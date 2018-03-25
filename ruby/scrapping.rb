# gem install nokogiri

require 'nokogiri'
require 'open-uri'

url = 'http://www.reactiongifs.com/'

5.times do |i|
  puts "\nPagina #{i}\n\n"
  document = Nokogiri::HTML(open(url))
  div_main = document.css('div#main')
  div_main.css('div.post').each do |post|
    title = post.css('h2').text
    gif_url = post.css('div.entry img').attr('src')
    File.open("gif/#{title}", 'w') do |file|
      puts "Descargando gif: #{title}."
      open(gif_url, 'r') do |gif|
        file.write(gif.read)
      end
    end
  end
  url = document.css('div.nav-entries div.nav-next a').attr('href')
end
