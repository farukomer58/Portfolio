package com.hva;

import java.util.Scanner;

/**
 *
 */

public class Main {

    public static void main(String[] args) {

        final int AANTAL_VAKKEN =4;
        Vak[] vakken = new Vak[AANTAL_VAKKEN];

        Scanner input = new Scanner(System.in);

        vakken[0] = new Vak("Fys",12);
        vakken[1] = new Vak("PAD",12);
        vakken[2] = new Vak("OOP",12);
        vakken[3] = new Vak("Fys",12);

        for(Vak vak: vakken){
            System.out.printf("%s: ",vak.getNaam());
            vak.setCijfer(input.nextDouble());
        }

    }
}
