#include <stdio.h>
#include <math.h>

void sqrt_of_max(int *arr, int len){
  int index;
  int max = -1000;
  for(int i = 0; i<len; i++){
    if (arr[i] > max) max = arr[i];
    index = i;
  }

  arr[index] = sqrt(max);
}

int main(){
  
  int gifts[] = {24, 64, 9, 4, 100};
  int k, len = 5;
  sqrt_of_max(gifts, len);

  printf("seconds: ");
  scanf ("%d", &k);

  for (int j = 0; j < k; j++){
    scanf("%d", &gifts[j]);
  }

  for (int j = 0; j < k; j++) {
    for (int i = 0; i < 5; i++) {
      printf ("%d, ", gifts[i]);
    }
  }

  return 0;
}


  

