public class Movie{
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
    public void updateTitle(String newTitle){
        this.title = newTitle;
    }
}