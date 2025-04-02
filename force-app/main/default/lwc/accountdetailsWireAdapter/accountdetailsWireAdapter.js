import { LightningElement , wire} from 'lwc';
import getParentAccounts from '@salesforce/apex/accountController.getParentAccounts';

export default class AccountdetailsWireAdapter extends LightningElement {
    parentoptions= [];
    selParentAcc="";

    @wire(getParentAccounts) wired_parentaccounts({data,error}){
        this.parentoptions = [];   
        if(data){
                this.parentoptions=data.map((currentitem) => ({
                    label: currentitem.Name,
                    value: currentitem.Id
                
                    
                }));
            }
            else if(error){
                console.log("error while getting the parent records",error);
            }
     }
     
     handlechange(event){
        let {name,value}= event.target;
        if(name === "parentacc")
        {
            this.selParentAcc=value;
        }
     }
    
}