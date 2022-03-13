public with sharing class BienListClass {
    public BienListClass() {

    }
    public static List<bienImmobilier> getBienImmobilierList() {
        return [SELECT Id, Name FROM Account ];
    }
}
