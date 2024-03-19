import java.util.Scanner;

public class Main {
    public static char digitAt(long k) {
        int n = 1;
        while (k - 9 * n * (int) Math.pow(10, n - 1) > 0) {
            k -= 9 * n * (int) Math.pow(10, n - 1);
            n++;
        }
        int max = (int) (Math.pow(10, n - 1) - 1 + Math.ceil(1.0 * k / n) - 1);
        k = k % n == 0 ? n : k % n;
        char digit = String.valueOf(max + 1).charAt((int)k - 1);
        return digit;
    }

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        int q = s.nextInt();
        long[] k = new long[q];
        for (int i = 0; i < q; i++) {
            k[i] = s.nextLong();
        }
        for (int i = 0; i < q; i++) {
            System.out.println(digitAt(k[i]));
        }
    }
}