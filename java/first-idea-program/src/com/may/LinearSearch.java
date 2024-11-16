package com.may;

public class LinearSearch {
    public static void main(String[] args) {
        int[] nums = {23, 34, 45, 56, 67, 78, -11, 92, 22};
        int target = 56;
        System.out.println(linearSearch(nums, target));
        System.out.println(linearSearch2(nums, target));
        System.out.println(linearSearch3(nums, target));
    }

    private static int linearSearch(int[] nums, int target) {
        if (nums.length == 0) {
            return -1;
        }
        for (int index = 0; index < nums.length; index++) {
            if (nums[index] == target) {
                return index;
            }
        }
        return -1;
    }
    private static int linearSearch2(int[] nums,int target) {
        if (nums.length == 0) {
            return Integer.MAX_VALUE;
        }
        for (int ele : nums) {
            if (ele == target) {
                return ele;
            }
        }
        return Integer.MAX_VALUE;
    }
    private static boolean linearSearch3(int[] nums, int target) {
        if (nums.length == 0) {
            return false;
        }
        for (int index = 0; index < nums.length; index++) {
            if (nums[index] == target) {
                return true;
            }
        }
        return false;
    }
}
