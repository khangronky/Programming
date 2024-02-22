import java.util.*;

public class Date {
    public static boolean ktloi(int ngay, int thang, int nam) {
        if (ngay < 1)
            return true;
        else if (ngay > 28 && thang == 2 && nam % 4 != 0)
            return true;
        else if (ngay > 29 && thang == 2 && nam % 4 == 0)
            return true;
        else if (ngay > 30 && (thang == 4 || thang == 6 || thang == 9 || thang == 11))
            return true;
        else if (ngay > 31
                && (thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10 || thang == 12))
            return true;
        else if (thang < 1 || thang > 12)
            return true;
        else if (nam < 1)
            return true;
        else
            return false;
    }

    public static String thu(int ngay, int thang, int nam) {
        int t = 0;
        t += ngay;
        for (int i = 1; i < thang; i++) {
            if (i == 2 && nam % 4 != 0)
                t += 28;
            if (i == 2 && nam % 4 == 0)
                t += 29;
            if (i == 4 || i == 6 || i == 9 || i == 11)
                t += 30;
            if (i == 1 || i == 3 || i == 5 || i == 7 || i == 8 || i == 10 || i == 12)
                t += 31;
        }
        for (int i = 1; i < nam; i++) {
            if (i % 4 != 0)
                t += 365;
            if (i % 4 == 0)
                t += 366;
        }
        switch (t % 7) {
            case 0:
                return "thu bay";
            case 1:
                return "chu nhat";
            case 2:
                return "thu hai";
            case 3:
                return "thu ba";
            case 4:
                return "thu tu";
            case 5:
                return "thu nam";
            case 6:
                return "thu sau";
            default:
                return "";
        }
    }

    public static void main(String[] args) {
        while (true) {
            Scanner sc = new Scanner(System.in);
            System.out.print("Ngay: ");
            int ngay = sc.nextInt();
            System.out.print("Thang: ");
            int thang = sc.nextInt();
            System.out.print("Nam: ");
            int nam = sc.nextInt();
            if (ktloi(ngay, thang, nam))
                System.out.println("Sai dinh dang ngay thang nam, vui long thu lai");
            else {
                System.out.println("Ngay " + ngay + " thang " + thang + " nam " + nam + " la " + thu(ngay, thang, nam));
                break;
            }
        }
    }
}