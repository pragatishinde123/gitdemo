import { LightningElement } from 'lwc';
import getcontact from '@salesforce/apex/contactController.getcontact';


export default class Imperativedemo extends LightningElement {

    columns =[
        { label: 'Name', fieldName: 'Name' },
        { label: 'firstname', fieldName: 'firstname' },
        { label: 'lastname', fieldName: 'lastname'},
        { label: 'Email', fieldName: 'email' ,type:"email"},
        { label: 'Phone', fieldName: 'phone', type:"phone" },
    ];
    data=[];
    handleClick(){

        getcontact()
        .then((result) =>{
            console.log("result is",result);
            this.data=result;
        })
        .catch((error) => {
            console.log("error while getting the records",error);
        });
    }
 
}