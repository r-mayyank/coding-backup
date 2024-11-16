package com.may;

import java.util.Arrays;

public class MaxIn2D {
    public static void main(String[] args) {
        int[][] arr = {
                {22, 11, 7, 55, 32},
                {28, 12, 3, 9},
                {92, 38, 44, 26},
                {18, 90}
        };
        System.out.println(max(arr));
    }

    static int max(int[][] arr) {
        if (arr.length == 0){
            return -1;
        }
        int maxVal = arr[0][0];
        for (int[] ints : arr) {
            for (int element : ints) {
                if (maxVal < element){
                    maxVal = element;
                }
            }
        }
        return maxVal ;
    }
}
