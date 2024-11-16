package com.may;

public class SearchInRange {
    public static void main(String[] args) {
        int[] arr = {18 , 12, -7, 3, 14, 28};
        int start = 1;
        int end = 4;
        int target = 3;
        System.out.println(target + " is found at index: " + search(arr, start, end, target));
    }

    static int search(int[] arr, int start, int end, int target) {
        if (arr.length == 0){
            return -1;
        }

        for (int i = start; i <= end; i++) {
            if (target == arr[i]){
                return i;
            }
        }
        return -1;
    }
}
