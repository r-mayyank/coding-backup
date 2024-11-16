package com.leetcode;

import java.lang.reflect.Array;
import java.util.Arrays;

public class countNegatives2D {
    public static void main(String[] args) {
        int[][] grid = {{4,3,2,-1},{3,2,1,-1},{1,1,-1,-2},{-1,-1,-2,-3}};
        int target = 0;
        for (int i = 0; i < grid.length; i++) {
            int ans = binarySearch(grid[i], target);
            System.out.println(ans);
        }
    }

    static int binarySearch(int[] arr, int target) {
        int start = 0;
        int end = arr.length -1;
        int count = 0;

        boolean isAsc = arr[start] < arr[end];
        while(start<=end){
            int mid = start + (end - start) / 2;
            if (isAsc){
                if(target>arr[mid]){
                    start = mid + 1;
                } else if (target<arr[mid]){
                    end = mid - 1;
                } else {
                    count = count(arr, start, end);
                }
            }
            if (!isAsc){
                if(target>arr[mid]){
                    end = mid - 1;
                } else if (target<arr[mid]){
                    start = mid + 1;
                }
            }
        }
        return count;
    }
    static int count(int[] arr, int start, int end){
        System.out.println(Arrays.toString(arr));
        int count = 0;
        for (int i = start; i <= end; i++) {
            if (arr[i]<0){
                count++;
            }
        }
        return count;
    }
}
