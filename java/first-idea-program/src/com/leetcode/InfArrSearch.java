package com.leetcode;
// find position of an element in a sorted array of infinite numbers
//https://www.geeksforgeeks.org/find-position-element-sorted-array-infinite-numbers/
public class InfArrSearch {
    // taking a imaginary infinite array
    // so we cant use .length method
    public static void main(String[] args) {
        int arr[] = {3, 5, 7, 9, 10, 90, 100, 130,
                140, 160, 170};
        int ans = ans(arr, 10);
    }
    static int ans(int[] arr, int target){
// first find the range
        // start with box of 2
        int start = 0;
        int end = 1;

        //condition for if target is between the range
        while (target > arr[end]){
            int temp = end + 1;

            end = end + (end-start + 1) * 2;

            start = temp;
        }
        return (binarySearchAsc(arr, target, start, end));
    }
    static int binarySearchAsc(int[] arr, int target, int start, int end){

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
}
