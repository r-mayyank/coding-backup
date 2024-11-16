package com.leetcode;

import java.util.Arrays;

//https://leetcode.com/problems/search-a-2d-matrix/
public class SearchIn2D {
    public static void main(String[] args) {
        int[][] matrix = {{1,3,5,7}, {10,11,16,20}, {23,30,34,60}};
        int target = 61;
        System.out.println(searchMatrix(matrix, target));
    }
    static boolean searchMatrix(int[][] matrix, int target){
        int ans = -1;
        for (int i = 0; i < matrix.length; i++) {
            ans = binarySearch(matrix[i], target);
            if (ans != -1){
                return true;
            }
        }
        return false;
    }
    static int binarySearch(int[] arr, int target){
        int start = 0;
        int end = arr.length -1;

        while (start <= end){
            int mid = start + (end - start) / 2;
            if (target > arr[mid]){
                start = mid + 1;
            } else if (target < arr[mid]){
                end = mid - 1;
            } else {
                return mid;
            }
        }
        return -1;
    }
}
