public class City{
    private String name;
    private int population;

    public City(String name, int population){
        this.name = name;
        this.population = population;
    }
    public String getName(){
        return name;
    }
    public double getPopulation(){
        return population;
    }
    public void displayInfo(){
        System.out.println("Name: "+name+"\nPopulation: "+population);
    }
    public void updatePopulation(int newPopulation){
        this.population = newPopulation;
    }
}