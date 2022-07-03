def strings_xor(s, t):
    res = ""
    for i in range(len(s)):
        if s[i] == t[i]: # changed from assignment (=) to comparison (==) operator
            res += '0'; # changed from = to +=
        else:
            res += '1'; # changed from = to +=

    return res

print(strings_xor('10101', '00101'))