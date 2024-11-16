package com.may;

public class MinArray {
    public static void main(String[] args) {
        int[] arr = {18, 12, -7, 3, 14, 28};
        System.out.println(min(arr));
    }

    static int min(int[] arr) {
        if (arr.length == 0) {
            return -1;
        }
        int minVal = arr[0];
        for (int i = 0; i < arr.length; i++) {
            if (arr[i]< minVal){
                minVal = arr[i];
            }
        }
        return minVal;
    }

    static int min2(int[] arr) {
        if (arr.length == 0) {
            return -1;
        }
        int minVal = arr[0];
        for (int ele : arr) {
            if (ele < minVal){
                minVal = ele;
            }
        }
        return minVal;
    }
}
