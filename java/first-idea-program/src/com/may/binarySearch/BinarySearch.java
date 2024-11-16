package com.may.binarySearch;

public class BinarySearch {
    public static void main(String[] args) {
        int[] arr = {1,2};
        int target = 2;
        boolean Asc = checkAsc(arr);
        if (Asc){
            System.out.println(binarySearchAsc(arr, target));
        } else if (!Asc) {
            System.out.println(binarySearchDsc(arr, target));
        } else {
            System.out.println("Invalid array");
        }
    }
    //check if array is asc or dsc
    static boolean checkAsc(int[] arr){
        return arr[0] < arr[arr.length - 1];
    }
    // return the index
    static int binarySearchAsc(int[] arr, int target){
        int start = 0;
        int end = arr.length;

        while (start <= end) {
//            find the middle element
//            int mid = (start + end) / 2; // might be possible that (start + end) exceds int limit of java
            int mid = start + (end-start) / 2;

            if (target < arr[mid]){
                end = mid-1;
            } else if (target > arr[mid]) {
                start = mid+1;
            } else {
                return mid;
            }
        }

        return -1;
    }
    static int binarySearchDsc(int[] arr, int target) {
        int start = 0;
        int end = arr.length;
// {90, 80 , 70 ,60}
        while(start<=end){
            int mid = start + (end -start) /2;
            if (target< arr[mid]){
                start = mid + 1;
            } else if (target> arr[mid]) {
                end = mid -1;
            } else {
                return mid;
            }
        }
        return -1;
    }
}
