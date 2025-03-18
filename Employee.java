public class Employee{
    private String name;
    private double salary;

    public Employee(String name, double salary){
        this.name = name;
        this.salary = salary;
    }
    public String getName(){
        return name;
    }
    public double getSalary(){
        return salary;
    }
    public void displayInfo(){
        System.out.println("Name: "+name+"\nSalary: "+salary);
    }
    public void updateSalary(double newSalary){
        this.salary = newSalary;
    }
}