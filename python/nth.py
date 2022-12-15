import pickle

file = open('JP_list.pickle', 'br')
print(pickle.load(file))
