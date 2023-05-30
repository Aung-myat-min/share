import csv

name = 'data.csv'

def readd():
    data = open(name, 'r')
    
    pass

def writee():
    pass

while True:
    methodd = input("Write or Read: ").lower()
    if methodd == 'write':
        writee()
    elif methodd == 'read':
        readd()
    else:
        print('Bye Bye! See you next time!')
        break