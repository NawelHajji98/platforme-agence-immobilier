import { LightningElement } from 'lwc';

export default class LocalisationHomePage extends LightningElement {
   mapMakers;
   zoomLevel;
   listView;
   connectedCallback(){
       this.mapMakers=[
           {
               location:{
                   City:"Ajmar",
                   Country:"India",
                   PostalCode:"305001",
                   State:"RJ",
                   street:"Ajay Nagar"
               },
               title:"Salesforce Bolt",
               description:"I am here",
               icon:"standard:account"
           }
       ];
       this.zoomLevel=15;
       this.listView="visible";

   }
}