public class Student{
    private String name;
    private int id;

    public Student(String name, String id){
        this.name = name;
        this.id = id;
    }
    public String getName(){
        return name;
    }
    public int getId(){
        return id;
    }
    public void displayInfo(){
        System.out.println("Name: "+name+"\nID: "+id);
    }
    public void updateId(String newId){
        this.id = newId;
    }
}