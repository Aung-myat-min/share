import pickle

files = open('japan.pickle', 'br')

data = {'love': 'AI'}
print(data)

def write_new():
    while True:
        inp = input('Meaning, In japanese:').split(',')
        if 'end' or 'stop' in inp: break
        inp = inp.split(',')
        
