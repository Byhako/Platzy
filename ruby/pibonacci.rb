fibo = [1,1]
impares = [1,1]

while impares[-1] < 40
  a = fibo[-1]
  b = fibo[-2]
  fibo.push(a+b)
  if fibo[-1]%2 != 0
    impares << fibo[-1]
  end
end

impares.pop()

print "Fibonacci: #{fibo}\n"
print "Impares #{impares}\n"
print "Suma #{impares.reduce (:+)}\n"

