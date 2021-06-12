# tablas.py

n=input("escribe un numero:")

numero = int(n)

if(numero > 0):
  for i in range (numero, (numero * 11), numero):
    print (i)
elif (numero < 0):
  print("error")
