package com.may;

import java.util.Arrays;

public class ArrayMax {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7};
        System.out.println(max(arr));
        reverseArray(arr);
        System.out.println(Arrays.toString(arr));
    }

    static void reverseArray(int[] arr) {
        int start = 0;
        int end = arr.length-1;

        while (start<end){
            sway(arr, start, end);
            start++;
            end--;
        }
    }

    static void sway(int[] arr, int start, int end){
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
    }

    static int max(int[] arr) {
        int max = arr[0];
        for (int i = 0; i < arr.length; i++) {
            if (arr[i]>max){
                max = arr[i];
            }
        }
        return max;
    }
}
