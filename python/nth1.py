def fun(a:int, b:str) -> int:
    return a + ord(b), ord(b)

print(fun(3, 'b'))