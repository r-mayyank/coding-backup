package com.may;

import java.util.Scanner;

public class Prac {
//    Create to get sum of cube of each number of a three digit number.
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("Enter three digit number: ");
        int n = in.nextInt();
        if (n<1000 && n>99){

        } else {
            System.out.println("INVALID INPUT");
        }
    }
    static int arm (int n) {
        int sum = 0;
        while (n > 0) {
            int rem = n%10;
            n = n/10;
            sum = sum + rem*rem*rem;
        }
        return sum;
    }
}
