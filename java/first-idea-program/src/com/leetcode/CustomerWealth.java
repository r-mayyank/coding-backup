package com.leetcode;
//https://leetcode.com/problems/richest-customer-wealth/
public class CustomerWealth {
    public static void main(String[] args) {
        int[][] accounts = {{1,2,3},{3,2,1}};
        maximumWealth(accounts);
    }
    static int maximumWealth(int[][] accounts){
        int ans = Integer.MIN_VALUE;
        for (int[] ints : accounts) {
            int sum = 0;
            for (int anInt : ints) {
                sum += anInt;
            }
            if (ans < sum) {
                ans = sum;
            }
        }
        return ans;
    }
}
