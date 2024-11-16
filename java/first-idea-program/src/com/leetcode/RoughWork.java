package com.leetcode;

import java.util.Arrays;

public class RoughWork {
    public static void main(String[] args) {
        int[][] grid = {{4,3,2,-1},{3,2,1,-1},{1,1,-1,-2},{-1,-1,-2,-3}};
        for (int i = 0; i < grid.length - 1; i++) {
            Arrays.sort(grid[i]);
            System.out.println(Arrays.toString(grid[i]));

        }
    }
    static int countNegativs(int[][] grid){
        int count = 0;
        for (int[] arr : grid){
            int ans = lastPositive(arr);
            if (arr.length-ans != -1){
                count += arr.length-ans;
            }
        }
        return count;
    }

    static int lastPositive(int[] arr) {
        int start = 0;
        int end = arr.length -1;
        while (start <= end){
            int mid = start + (end - start)/2;
            if (arr[mid] < 0) {
                end = mid - 1;
            } else {
                start = mid+1;
            }
        }
        return start;
    }
}
