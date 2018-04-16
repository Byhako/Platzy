import numpy as np
import matplotlib.pyplot as plt

# paso 1. Calculo de la pendiente. (b)
def slope(x, y):
  n = len(x)
  s1 = 0
  s2 = sum(y)*sum(x)
  s3 = 0
  s4 = (sum(x))**2

  for i in range(n):
    s1 = s1 + y[i]*x[i]
    s3 = s3 + x[i]**2

  b = ( n*s1 - s2 )/( n*s3 - s4 )
  return b

# paso 2. Calculo del intercepto
def intercept(x, y, b):
  mx = np.mean(x)
  my = np.mean(y)
  a = my - b*mx
  return a

def regresion(x, y):
  b = slope(x, y)
  a = intercept(x, y, b)
  t = np.linspace(x[0], 35, 50)
  X = a + b*t
  print(X[-1])
  plt.plot(x,y, 'r-o')
  plt.plot(t,X, 'b')
  plt.xlabel('Metros Cuadrados', fontsize=18)
  plt.ylabel('Precio', fontsize=18)
  plt.show()


if(__name__=='__main__'):
  # meses = [1, 2, 3, 4, 5, 6]
  # ventas = [7000, 9000, 5000, 11000, 10000, 13000]
  # regresion(meses, ventas)
  metros = [5,15,20,25]
  precio = [375,487,450,500]
  regresion(metros, precio)


