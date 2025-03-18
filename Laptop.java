public class Laptop{
    private String brand;
    private String model;

    public Laptop(String brand, String model){
        this.brand = brand;
        this.model = model;
    }
    public String getBrand(){
        return brand;
    }
    public int getModel(){
        return model;
    }
    public void displayInfo(){
        System.out.println("Brand: "+brand+"\nModel: "+model);
    }
    public void updateModel(int NewModel){
        this.model = NewModel;
    }
}