package com.project;

import java.util.Scanner;

public class Trying {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
//self project - to make  a employ finder inside a department using nested switch
        System.out.print("Enter department name: ");
        String department = input.next();
        System.out.print("Enter Employ ID: ");
        int empID = input.nextInt();

        switch (department) {
            case "IT" -> {
                System.out.println("---IT Department---");
                switch (empID) {
                    case 1 -> System.out.println("Emp Name 1");
                    case 2 -> System.out.println("Emp Name 2");
                    default -> System.out.println("EMP ID" + empID + "doesn't exist in IT department");
                }
            }
            case "Management" -> {
                System.out.println("---Management Department---");
                switch (empID) {
                    case 1 -> System.out.println("Emp Name 1");
                    case 2 -> System.out.println("Emp Name 2");
                    default -> System.out.println("EMP ID" + empID + "doesn't exist in Management department");
                }
            }
        }
//       int day = input.nextInt();

//       switch (day) {
//           case 1,2,3,4,5 -> System.out.println("Weekday");
//           case 6,7 -> System.out.println("Weekend");
//           break
//       }
//
//        switch (day) {
//            case 1 -> System.out.println("Monday");
//            case 2 -> System.out.println("Tuesday");
//            case 3 -> System.out.println("Wednesday");
//            case 4 -> System.out.println("Thursday");
//            case 5 -> System.out.println("Friday");
//            case 6 -> System.out.println("Saturday");
//            case 7 -> System.out.println("Sunday");
//            default -> System.out.println("please enter valid day");
//        }
//        String fruit = input.next();
//
//        switch (fruit) {
//            case "Mango" -> System.out.println("King of fruit");
//            case "Apple" -> System.out.println("Red Fruit");
//            case "Orange" -> System.out.println("Round fruit");
//            case "Grape" -> System.out.println("Small fruit");
//            default -> System.out.println("Invalid fruit, please enter again: ");
//        }
    }
}