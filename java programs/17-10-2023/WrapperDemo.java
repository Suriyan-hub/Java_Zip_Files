import java.util.*;
public class WrapperDemo
 {

	public static void main(String[] args) {
		
		Integer intValue=42; //autoboxing
		int i=intValue.intValue(); //unboxing
		System.out.println("Integer: "+i);	
	}
}