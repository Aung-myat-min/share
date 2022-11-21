import mypy
def fun(a:int, b:str) -> int:
    return a + ord(int(b))

print(fun(3, 'b'))