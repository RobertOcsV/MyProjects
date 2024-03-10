package com.exercises;

public class Main {
    public static void main(String[] args) {
        int resultY = 0;

        int[] numbers = { 2, 3, 5, 6 };

        for (int i = 0; i < numbers.length; i++) {
            int resultX = numbers[i] * numbers[i];
            resultY = resultY + resultX;

        }

    }
}