package GFG;

public class RearrangeArray {
     // Function for finding maximum and value pair
    public static int[] rearrange(int arr[], int n){
        // Complete the function
        int i = 0;
        while(i < n){
            if(arr[i] != -1 && arr[i] != 1){
                int temp = arr[arr[i]];
                arr[arr[i]] = arr[i];
                arr[i] = temp;
            }
           else{
               i++;
           }
        }
        return arr;
    }
}
// TimeComplexity:O(n)
// Auxiliary Space: O(1)