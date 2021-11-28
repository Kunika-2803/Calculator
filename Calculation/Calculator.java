import java.util.Scanner;
import java.util.*;
class Calculator
{
	public static void main(String[] args)
	{
		Scanner sc=new Scanner(System.in);
		double num1=0;
		double num2=0;
		int input=0;
		while(input!=5)
		{
			if(input!=6)
			{
				System.out.println("Enter first number");
				num1=sc.nextDouble();
				System.out.println("Enter second number");
				num2=sc.nextDouble();
			}
			System.out.println("Enter 1 to add\nEnter 2 to subtract\nEnter 3 to multiply\nEnter 4 to divide");
			input=sc.nextInt();
			try
			{
			switch(input)
			{
				
				case 1:System.out.println("Result : "+(num1+num2)+"\n");
					break;
				case 2:System.out.println("Result : "+(num1-num2)+"\n");
					break;
				case 3:System.out.println("Result : "+(num1*num2)+"\n");
					break;
				case 4:	
					System.out.println("Result : "+String.format("%f",(num1/num2))+"\n");
					break;
				default:break;
			}
			}
			catch(ArithmeticException e)
			{
				System.out.println(e.getMessage());	
			}
			System.out.println("Enter 1 to continue with new value\nEnter 5 to get out\nEnter 6 to continue with previous value");
			input=sc.nextInt();
		}
	}
}