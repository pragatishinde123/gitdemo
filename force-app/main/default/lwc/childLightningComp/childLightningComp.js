import { LightningElement,api } from 'lwc';

export default class ChildLightningComp extends LightningElement {
    @api name='';
    @api showmessage(greeting){
        alert(this.greeting+' Welcome to the world of Lightning Components.');
    }

    clickHandle(){
        const event = new CustomEvent('childmessage',{
            detail:{
                message:'Welcome to the world of Lightning Components.'
            }
    });

        this.dispatchEvent(event);

    }
}
