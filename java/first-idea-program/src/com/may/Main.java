package com.may;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        sum();
    }
    static void sum() {
        Scanner in = new Scanner(System.in);
        int num1, num2 , sum;
        System.out.print("Enter Number 1");
        num1 = in.nextInt();
        System.out.print("Enter Number 2");
        num2 = in.nextInt();
        sum = num1 + num2;
        System.out.println("The sum is =" + sum);
    }
}