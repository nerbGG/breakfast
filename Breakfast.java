import java.io.File;  
import java.io.FileNotFoundException;  
import java.util.Scanner; 
import java.util.Random; 
import java.util.ArrayList;


public class Breakfast{
   static int counter =0;
   static int [] nums = {99,99,99,99};
   // static String [] arr = {"waffles","pancakes","soup","noodle soup","spaghetti","bagels","laboulli","oatmeal"};
    static ArrayList<String> arr = new ArrayList<String>();
   public static void main (String [] args)
   {
      try {
      File food = new File("food.txt");
      Scanner reader = new Scanner(food);
      while (reader.hasNextLine()) {
         arr.add(reader.nextLine());
      }
      reader.close();
    } catch (FileNotFoundException e) {
      System.out.println("An error occurred.");
      e.printStackTrace();
    }  
      
      int size = arr.size();
      for(int i = 0; i < 9;i++)
       {  
         String sat = arr.get(getFood(size));
         String sun = arr.get(getFood(size));
         sun = check(sat,sun,size);
         System.out.println("Saturday: "+sat+" Sunday: "+sun);
         System.out.println("\n");
       }
   }
   public static String check(String sat,String sun, int size)
   {
      if(sun==sat)
      {
         System.out.println("sat is "+sat+" sun is: "+sun);
         System.out.println("getting new sun value");
         sun = arr.get(getFood(size));
         System.out.println("sun is now: "+sun);
         check(sat,sun,size);
      }
      return sun; 
   }
   
   public static int getFood(int size)
   {
      Random rand = new Random();
      if(counter == 4)
         counter = 0;
      int num = rand.nextInt(size);
      System.out.println("num: "+num);
      //System.out.println("possible value: "+arr[num]);
      
      num = checkNum(nums,num,size,rand);  
      nums[counter] = num;
      
      System.out.print("history:");
      for(int i =0; i< nums.length;i++)
      {
         if(nums[i] != 99)
         System.out.print(nums[i]);
      }
      
      counter++;   
      System.out.println();
      return num;
   }   

   public static int checkNum (int [] nums, int num,int size,Random rand)
   {
      for(int i =0; i < nums.length; i++)
      {
         if(num == nums[i])
         {
           System.out.println("num :"+num+" num[i]: "+nums[i]+" getting a new num");
           num = rand.nextInt(size);
           num = checkNum(nums,num,size,rand); 
         }  
      }
      System.out.println("num is now: "+num);
      return num;
   }



}