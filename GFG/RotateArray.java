package GFG;

public class RotateArray {
    //Function to rotate an array by d elements in counter-clockwise direction. 
    static void rotateArr(int arr[], int d, int n){
        // add your code here
        // in case the rotating factor is greater than array length
        d%=n;
        //First reversing d elements from starting index.
        reverseArray(arr, 0, d-1);
        //Then reversing the last n-d elements.
        reverseArray(arr, d, n - 1); 
        //Finally, reversing the whole array.
        reverseArray(arr, 0, n - 1); 
    }

    static void reverseArray(int arr[], int start, int end){
        int temp;
        while (start < end) { 
           temp = arr[start]; 
           arr[start] = arr[end]; 
           arr[end] = temp;
           
           start++; 
           end--; 
        }
    }
}

// TimeComplexity:O(n)
// Auxiliary Space: O(1)