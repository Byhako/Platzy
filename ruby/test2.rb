require_relative './test1'
RSpec.describe 'test a test1' do
  it 'llamar al metodo' do
    expect(saludar).to eq "Hola Mundo"
  end
end

# http://rspec.info/

