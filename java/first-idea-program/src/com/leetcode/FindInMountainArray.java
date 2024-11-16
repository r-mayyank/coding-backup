package com.leetcode;

public class FindInMountainArray {
    public static void main(String[] args) {

    }
    static int search(int[] arr, int target){
        int peak = findPeakMountain(arr);
        int firstTry = binarySearch(arr, target, 0, peak);
        if (firstTry != -1){
            return firstTry;
        }
        return binarySearch(arr, target, peak, arr.length-1);
    }
    static int findPeakMountain(int[] arr){
        int start  = 0;
        int end = arr.length-1;

        while (start < end){
            int mid = start + ( end - start )/2 ;
            if (arr[mid] > arr[mid + 1]){
                end = mid;
            } else {
                start = mid + 1;
            }
        }
        return start;
    }
    static int binarySearch(int[] arr, int target, int start, int end){
        while (start<=end){
            int mid = start + ( end - start) /2;
            if (target > arr[mid]){
                start = mid +1;
            } else if (target < arr[mid]) {
                end = mid -1;
            } else {
                return mid;
            }
        }
        return -1;
    }
}
