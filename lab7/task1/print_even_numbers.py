n = int(input())
arr = []
for i in range(0,n):
    x = int(input())
    arr.append(x)
for i in arr:
    if i % 2 == 0:
        print(i, end=" ")