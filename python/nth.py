def block_print(string):
    string = string.lower().strip()
    if not string:
        return ''
    res = []
    k = ''
    letters = {
        'a':' AAA \nA   A\nA   A\nAAAAA\nA   A\nA   A\nA   A',
        'b':'BBBB \nB   B\nB   B\nBBBB \nB   B\nB   B\nBBBB ',
        'c':' CCC \nC   C\nC    \nC    \nC    \nC   C\n CCC ',
        'd':'DDDD \nD   D\nD   D\nD   D\nD   D\nD   D\nDDDD ',
        'e':'EEEEE\nE    \nE    \nEEEEE\nE    \nE    \nEEEEE',
        'f':'FFFFF\nF    \nF    \nFFFFF\nF    \nF    \nF    ',
        'g':' GGG \nG   G\nG    \nG GGG\nG   G\nG   G\n GGG ',
        'h':'H   H\nH   H\nH   H\nHHHHH\nH   H\nH   H\nH   H',
        'i':'IIIII\n  I  \n  I  \n  I  \n  I  \n  I  \nIIIII',
        'j':'JJJJJ\n    J\n    J\n    J\n    J\n    J\nJJJJ ',
        'k':'K   K\nK  K \nK K  \nKK   \nK K  \nK  K \nK   K',
        'l':'L    \nL    \nL    \nL    \nL    \nL    \nLLLLL',
        'm':'M   M\nMM MM\nM M M\nM   M\nM   M\nM   M\nM   M',
        'n':'N   N\nNN  N\nN   N\nN N N\nN   N\nN  NN\nN   N',
        'o':' OOO \nO   O\nO   O\nO   O\nO   O\nO   O\n OOO ',
        'p':'PPPP \nP   P\nP   P\nPPPP \nP    \nP    \nP    ',
        'q':' QQQ \nQ   Q\nQ   Q\nQ   Q\nQ Q Q\nQ  QQ\n QQQQ',
        'r':'RRRR \nR   R\nR   R\nRRRR \nR R  \nR  R \nR   R',
        's':' SSS \nS   S\nS    \n SSS \n    S\nS   S\n SSS ',
        't':'TTTTT\n  T  \n  T  \n  T  \n  T  \n  T  \n  T  ',
        'u':'U   U\nU   U\nU   U\nU   U\nU   U\nU   U\n UUU ',
        'v':'V   V\nV   V\nV   V\nV   V\nV   V\n V V \n  V  ',
        'w':'W   W\nW   W\nW   W\nW W W\nW W W\nW W W\n W W ',
        'x':'X   X\nX   X\n X X \n  X  \n X X \nX   X\nX   X',
        'y':'Y   Y\nY   Y\n Y Y \n  Y  \n  Y  \n  Y  \n  Y  ',
        'z':'ZZZZZ\n    Z\n   Z \n  Z  \n Z   \nZ    \nZZZZZ',
        ' ':'     \n     \n     \n     \n     \n     \n     ',
    }
    for i in range(7):
        for j in string:
            if j in letters.keys():
                k += letters[j].split('\n')[i] + ' '
        res.append(k.rstrip())
        k = ''
    return '\n'.join(res)