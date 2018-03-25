require 'erb'

class Application
  def self.call(env)
    if env['PATH_INFO'] == '/'
      @mensaje = 'El lenguaje mas bonito.'
      html = ERB.new( File.open('index.html.erb').read )
      [200, {}, [html.result( binding )]]
    else
      [404, {}, ['No existe esta pagina']]
    end
  end
end