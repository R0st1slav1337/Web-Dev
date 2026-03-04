n = int(input())
min = n
i = 2
while i < n:
    if (n % i == 0):
        if (i < min):
            min = i
    i += 1
print(min)