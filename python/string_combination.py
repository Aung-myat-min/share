output = ''
while True:
    string = input("Say something: ")
    string = string.lower()
    if string == '\end': break
    if string.startswith(('what, which, how, when, is')):
        output += string.capitalize() + '? '
    else:
        output += string.capitalize() + '. '
print(output)