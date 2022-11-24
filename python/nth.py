import time

start = time.time()
l = []
for i in range(100000):
    l.append(i*2)
print(time.time()-start)