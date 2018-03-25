# class Application
#   def self.call(env)
#     if env['PATH_INFO'] == '/'
#       [200, {}, ['Hola Ruby']]
#     else
#       [404, {}, ['No existe esta pagina']]
#     end
#   end
# end
require  './application'
run Application
# run Proc.new { |env| [200, {}, ['Ruby']] }