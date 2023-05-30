import pickle
from datetime import date
 
name = 'data.pickle'

def readd():
    data = open(name, 'rb')
    rdata = pickle.load(data)
    for k,v in rdata.items():
        print(f'{k}, {v}:')
        

def writee():
    data = open(name, 'ab')
    print('Just type 1 or 0. 1 means Yes. 0 means No')
    value = None
    while True:
        value = int(input('Did you succeed today?: '))
        if not value == 1 or value == 0:
            continue
        else:
            break
    rdata = {date.today(): value}
    pickle.dump(rdata, data)



while True:
    methodd = input("Write or Read: ").lower()
    if methodd == 'write':
        writee()
    elif methodd == 'read':
        readd()
    else:
        print('Bye Bye! See you next time!')
        break