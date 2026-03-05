def swap_case(s):
    x = ""
    for i in range(0, len(s)):
        if s[i].isupper():
            x = x + s[i].lower()
        else:
            x = x + s[i].upper()
    return x

s = input()
result = swap_case(s)
print(result)