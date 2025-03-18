public class Person{
    private String firstName;
    private String lastName;

    public Person(String firstName, String lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    public String getFirstname(){
        return firstName;
    }
    public String getLastname(){
        return lastName;
    }
    public void displayInfo(){
        System.out.println("First name: "+firstName+"\nLast name: "+lastName);
    }
    public void updateLastname(String newLastName){
        this.lastName = newLastName;
    }
}