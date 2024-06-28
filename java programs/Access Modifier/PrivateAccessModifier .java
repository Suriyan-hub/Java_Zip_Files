class PrivateAccessModifier {
    private int privateVar;

    private void displayPrivateVar()
	 {
        System.out.println("Private variable: " + privateVar);
    }

    public static void main(String[] args) {
        PrivateAccessModifier obj = new PrivateAccessModifier();
        // Private access modifier restricts direct access from outside the class.
        // But we can access it through a public method.
        obj.privateVar = 10;
        obj.displayPrivateVar();
    }
}
