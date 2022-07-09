"""
Debug the given function findZigZagSequence to return the appropriate zig zag sequence for the given input array.
You can modify at most three lines in the given code.
You cannot add or remove lines of code.
"""

def findZigZagSequence(a, n):
    a.sort()
    mid = int(n /2) # 1
    a[mid], a[n-1] = a[n-1], a[mid]

    st = mid + 1
    ed = n - 2 # 2
    while(st <= ed):
        a[st], a[ed] = a[ed], a[st]
        st = st + 1
        ed = ed - 1 # 3

    for i in range (n):
        if i == n-1:
            print(a[i])
        else:
            print(a[i], end = ' ')
    return

findZigZagSequence([2, 3, 5, 1, 4], 5) # 1 2 3 5 4



