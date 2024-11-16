package com.may;

import java.util.Arrays;
import java.util.Scanner;

public class MultiDimensonalArray {
    static Scanner in = new Scanner(System.in);
    public static void main(String[] args) {
        int[][] str = new int[3][3];
//input
        for (int row = 0; row < str.length; row++) {
            for (int col = 0; col < str[row].length; col++) {
                str[row][col] = in.nextInt();
            }
        }

//output
        for (int row = 0; row < str.length; row++) {
            for (int col = 0; col < str[row].length; col++) {
                System.out.print(str[row][col] + " ");
            }
            System.out.println();
        }

        //output 2
        for (int row = 0; row < str.length; row++) {
            System.out.println(Arrays.toString(str[row]));
        }

        //output 3
        for (int[] row : str) {
            System.out.println(Arrays.toString(row));
            }


    }
}