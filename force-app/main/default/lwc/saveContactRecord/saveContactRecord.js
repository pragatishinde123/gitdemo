import { LightningElement ,api,wire} from 'lwc';
import getcontact from '@salesforce/apex/ContactDetails.getcontact';
import updatecontact from '@salesforce/apex/ContactDetails.updatecontact';
import { getObjectInfo } from "lightning/uiObjectInfoApi";

import Contact from '@salesforce/schema/Contact';

export default class SaveContactRecord extends LightningElement {
    @api recordId;
    name;
    email;

    @wire(getObjectInfo, { objectApiName: Contact })
    contacInfo;

    @wire (getcontact) contact({data,error})
    {

        if(data){
            this.name=data.Name;
            this.email=data.Email;   
       console.log(data);
     }
        else if(error){
            console.log(error);
         }
    }
    
    handleNameChange(event) {
        this.name = event.target.value;
    }
    handleEmailChange(event) {
        this.email = event.target.value;
    }

    handleSubmit(event){

        updatecontact({contId:this.recordId,name:this.name,email:this.email})
        .then(result => {
            alert('Updated');
        })
        .catch(error => {
            alert('Not Updated');
        });
    }

}