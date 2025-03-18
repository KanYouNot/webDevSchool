public class Course{
    private String courseName;
    private int credits;

    public Course(String courseName, int credits){
        this.courseName = courseName;
        this.credits = credits;
    }
    public String getName(){
        return courseName;
    }
    public double getCredits(){
        return credits;
    }
    public void displayInfo(){
        System.out.println("Name: "+courseName+"\nCredits: "+credits);
    }
    public void updateCredits(int newCredits){
        this.credits = newCredits;
    }
}