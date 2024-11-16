package com.leetcode;
//https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
public class CountEven {
    public static void main(String[] args) {
        int[] numbers = {12,345,2,6,-7896};
        int count = 0;
        for ( int ele : numbers){
            if (even(ele)){
                count++;
            }
        }
        System.out.println(count2(-54321));
        System.out.println(count);
    }

    static boolean even(int numbers) {
        int digits = countDigits(numbers);
        if (digits%2 == 0){
            return true;
        }
        return false;
    }

    static int countDigits(int n) {
        if (n == 0){
            return 1;
        }
        if (n<0){
            n = n* -1;
        }
        int countDig = 0;
        while (n>0){
            n =n/10;
            countDig++;
        }
        return countDig;
    }
    static int count2(int num) {
        if (num<0){
            num = num*-1;
        }
        int count = (int) Math.log10(num) +1;
        return count;
    }
}
