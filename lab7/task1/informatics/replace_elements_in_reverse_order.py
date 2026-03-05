n = int(input())
arr = []
for i in range(0,n):
    x = int(input())
    arr.append(x)

for i in range(n // 2):
    arr[i], arr[n-1-i] = arr[n-1-i], arr[i]

print(*arr)