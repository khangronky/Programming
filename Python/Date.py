def ktloi(ngay, thang, nam):
    if ngay < 1: return True
    elif ngay > 28 and thang == 2 and nam % 4 != 0: return True
    elif ngay > 29 and thang == 2 and nam % 4 == 0: return True
    elif ngay > 30 and (thang == 4 or thang == 6 or thang == 9 or thang == 11): return True
    elif ngay > 31 and (thang == 1 or thang == 3 or thang == 5 or thang == 7 or thang == 8 or thang == 10 or thang == 12): return True
    elif thang < 1 or thang > 12: return True
    elif nam < 1: return True
    else: return False

def thu(ngay, thang, nam):
    t = 0
    t += ngay
    for i in range(1, thang):
        if i == 2 and nam % 4 != 0: t += 28
        if i == 2 and nam % 4 == 0: t += 29
        if i == 4 or i == 6 or i == 9 or i == 11: t += 30
        if i == 1 or i == 3 or i == 5 or i == 7 or i == 8 or i == 10 or i == 12: t += 31
    for i in range(1, nam):
        if i % 4 != 0: t += 365
        if i % 4 == 0: t += 366
    match t % 7:
        case 0: return "thu bay"
        case 1: return "chu nhat"
        case 2: return "thu hai"
        case 3: return "thu ba"
        case 4: return "thu tu"
        case 5: return "thu nam"
        case 6: return "thu sau"

while True:
    ngay = int(input("Ngay: "))
    thang = int(input("Thang: "))
    nam = int(input("Nam: "))
    if ktloi(ngay, thang, nam): print("Sai dinh dang ngay thang nam, vui long thu lai\n")
    else:
        print(f"{ngay}-{thang}-{nam} la {thu(ngay, thang, nam)}")
        break