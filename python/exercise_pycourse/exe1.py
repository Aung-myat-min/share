def dict_merge_sum(d1, d2):
    m = {}
    for i in d1.keys():
        if i in d2.keys():
            m[i] = d1[i] + d2[i]
        else:
            m[i] = d1[i]
    for i in d2.keys():
        if i not in d1.keys():
            m[i] = d2[i]

    return m

print(dict_merge_sum({'k': 20, 'm': 10, 'a':30},{'k':25, 'm':1490, 'n': 30}))