class CustomerStore
  def initialize
    @customers = {} #Los clientes se van a almacenar en un hash
    @next_id = 1 #Un consecutivo para asignarle a cada cliente
  end

  def all
  end

  def create(customer)
  end
  
  def delete(customer)
  end

  private 
    def next_customer_id
      @next_id += 1
    end
end