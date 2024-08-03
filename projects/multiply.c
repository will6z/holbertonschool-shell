#include <stdio.h>

int main ()
{
	int num1;
	int num2;
	int result = num1 * num2;

	printf("Enter number to multiply ");
	scanf("%d", &num1);

	printf("Enter number to multiply by ");
	scanf("%d", &num2);

	result = num1 * num2;
	printf("%d * %d = %d\n", num1, num2, result);

	return 0;
}
