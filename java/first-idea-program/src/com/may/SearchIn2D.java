package com.may;

import java.util.Arrays;

public class SearchIn2D {
    public static void main(String[] args) {
        int[][] arr = {
                {22, 11, 7, 55, 32},
                {28, 12, 3, 9},
                {92, 38, 44, 26},
                {18, 90}
        };
        int target = 38;
        int[] ans = search(arr, target);
        System.out.println(Arrays.toString(ans));
    }

    static int[] search(int[][] arr, int target) {
        if (arr.length == 0){
            return new int[] {-1, -1};
        }
        for (int row = 0; row < arr.length; row++) {
            for (int col = 0; col < arr[row].length; col++) {
                if (arr[row][col] == target){
                    return new int[] {row, col};
                }
            }
        }
        return new int[] {-1, -1};
    }
}
