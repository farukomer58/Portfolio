package com.hva;

public class Vak {

    private final double VOLDOENDE=5.5;
    private String naam;
    private int punten;
    private double cijfer;

    public Vak(String nieuweNaam, int nieuwePunten){
        naam=nieuweNaam;
        punten=nieuwePunten;
    }

    public int getPunten() {
        return punten;
    }

    public String getNaam() {
        return naam;
    }

    public double getCijfer() {
        return cijfer;
    }

    public void setCijfer(double cijfer) {
        this.cijfer = cijfer;
    }
    public int gehaaldePunten(){
        if (cijfer>=VOLDOENDE){
            return getPunten();
        }
        else{
            return 0;
        }
    }
}
