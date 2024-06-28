class FirstThread extends Thread
{
	public void run() 
	{
      		System.out.println("Running...");
   	}

	public static void main(String args[])
	{
		FirstThread ft=new FirstThread();
		FirstThread ft1=new FirstThread();
		ft.start();
		ft1.start();
		System.out.println(" " + Thread.currentThread().getName());
	}
  
}