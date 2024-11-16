package com.leetcode;
//To count numbers of rotation in a rotated array
public class CountRotatedArr {
    public static void main(String[] args) {
        int[] arr = {4,5,6,7,0,1,2};
        int pivot = pivot(arr);
        if (pivot == -1){
            System.out.println("not rotated" + "0");
        }else {
            System.out.println(pivot + 1);
        }

    }
    static int pivot(int[] arr){
        int start = 0;
        int end = arr.length-1;
        while (start <= end){
            int mid = start + (end-start)/2;
            if (mid<end && arr[mid]>arr[mid+1]){
                return mid;
            }
            if (start < mid && arr[mid]<arr[mid-1]){
                return mid-1;
            }
            if (arr[mid] <= arr[start]){
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return -1;
    }
}
