public class Product{
    private String name;
    private double price;

    public Product(String name, double price){
        this.name = name;
        this.price = price;
    }
    public String getName(){
        return name;
    }
    public int price(){
        return price;
    }
    public void displayInfo(){
        System.out.println("Name: "+name+"\nPrice: "+price);
    }
    public void updatePrice(double newPrice){
        this.price = newPrice;
    }
}