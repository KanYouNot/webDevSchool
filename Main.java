class Book{
    private String title;
    private String author;

    public Book(String title, String author){
        this.title = title;
        this.author = author;
    }
    public String getTitle(){
        return title;
    }
    public String getAuthor(){
        return author;
    }
    public void displayInfo(){
        System.out.println("Title: "+title+"\nAuthor: "+author);
    }
    public void updateTitle(String title){
        this.title = title;
    }
}

class Student{
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
    public void updateId(String id){
        this.id = id;
    }
}

class Movie{
    private String title;
    private int year;

    public Movie(String title, int year){
        this.title = title;
        this.year = year;
    }
    public String getTitle(){
        return title;
    }
    public int getYear(){
        return year;
    }
    public void displayInfo(){
        System.out.println("Title: "+title+"\nYear: "+year);
    }
    public void updateTitle(String title){
        this.title = title;
    }
}

class Person{
    private String firstName;
    private String lastName;

    public Person(String firstName, String lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    public String getFirstname(){
        return firstName;
    }
    public int getLastname(){
        return lastName;
    }
    public void displayInfo(){
        System.out.println("First name: "+firstName+"\nLast name: "+lastName);
    }
    public void updateLastname(String lastName){
        this.lastName = lastName;
    }
}

class Person{
    private String firstName;
    private String lastName;

    public Person(String firstName, String lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    public String getFirstname(){
        return firstName;
    }
    public int getLastname(){
        return lastName;
    }
    public void displayInfo(){
        System.out.println("First name: "+firstName+"\nLast name: "+lastName);
    }
    public void updateLastname(String lastName){
        this.lastName = lastName;
    }
}

public class Main{
    public static void main(String[] args){
        Book book = new Book("World", "William");
        book.displayInfo();

        Student student = new Student("Dave", 123);
        student.displayInfo();
    }
}