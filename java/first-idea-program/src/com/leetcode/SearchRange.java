package com.leetcode;
//https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
public class SearchRange {
    public static void main(String[] args) {

    }
    public int[] searchRange(int[] nums, int target) {
        int[] ans = {-1, -1};
        int first = search(nums, target, true);
        int last = search(nums, target, false);

        ans[0] = first;
        ans[1] = last;
        return ans;
    }
    int search(int[] nums, int target, boolean findFirstIndex){
        int ans = -1;
        int start = 0;
        int end = nums.length -1;

        while(start<=end){
            int mid = start + (end-start)/2;

            if (target<nums[mid]){
                end = mid-1;
            } else if (target>nums[mid]){
                start = mid +1;
            } else {
                //potential ans
                ans = mid;
                if (findFirstIndex){
                    end = mid-1;
                } else{
                    start = mid +1;
                }
            }
        }
        return ans;
    }
}
