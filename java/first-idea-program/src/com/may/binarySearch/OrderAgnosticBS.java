package com.may.binarySearch;

public class OrderAgnosticBS {
    public static void main(String[] args) {
        int[] arr = {-18, -12, -8, -5, 0 ,4,7, 11, 14, 18, 44, 78, 87, 90};
//        int[] arr = {99, 80, 70, 22, 20, 18, 9, 0, -1};
        int target = 18;
        System.out.println(orderAgnosticBS(arr, target));
    }
    static int orderAgnosticBS(int[] arr, int target){
        int start = 0;
        int end = arr.length -1;

        boolean isAsc = arr[start]<arr[end];

        while (start <= end){
            int mid = start + (end - start) /2;

            if (arr[mid] == target){
                return mid;
            }

            if ((isAsc)){
                if (target < arr[mid]){
                    end = mid -1;
                } else {
                    start = mid + 1;
                }
            } else {
                if (target > arr[mid]){
                    end = mid -1;
                } else {
                    start = mid + 1;
                }
            }
        }
        return -1;
    }
}
