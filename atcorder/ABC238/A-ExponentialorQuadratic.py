# ①データ構造
# ②処理を大分類に
# ③分類ごとに解決

# 1------
# 入力値
ｎ = int(input())
# 2のN乗
twoN = 2**n
# nの2乗
Ntwo = n**2
# ans
ans = "No"

# 2------
if twoN > Ntwo:
    ans = "Yes"

print(ans)