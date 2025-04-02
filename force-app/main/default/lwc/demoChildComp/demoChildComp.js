import { api, LightningElement, track } from 'lwc';

export default class DemoChildComp extends LightningElement {
    
       /* parent to child communication
       @api passName;
    @api pgObj;
    @api sirname;

    @api sirnametest(sirname){
        this.sirname=sirname;
    }*/
  
    name='';
        handleNameChange(event){
         try{
            this.name= event.target.value;
            console.log('test1',this.name);
            const myEvent = new CustomEvent('childevent',
                {detail : this.name,bubbles:true});
            this.dispatchEvent(myEvent);
            console.log('test2');
         }catch(e){
            console.log('child side',e);
         }
   } 
  /*  name;
        handleNameChange(event){
            this.name= event.target.value;
            console.log('test1');
            const myEvent = new CustomEvent('childevent',{detail : this.name});
            this.dispatchEvent(myEvent);
            console.log('test2');
        }*/

}