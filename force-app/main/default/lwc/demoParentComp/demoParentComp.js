import { LightningElement } from 'lwc';

export default class DemoParentComp extends LightningElement {
   /* parent to child communication
    name='vikas';
    sname;
    pobj ={
         name:'priti',
         age:23
     };

     handleNameChange(event){
        this.name = event.target.value;
     }
     handleSirNameChange(event){
        this.sname = event.target.value;
        console.log('asddd');
        console.log(this.sname);
        const comp= this.template.querySelector('c-demo-child-comp');
        comp.sirnametest(this.sname);
     }*/
        data1 = '';
        
        parentHandler(event){
 
         try {
            console.log('test3',event.detail);
         //this.data1 = event.detail;
         this.data1 = event.detail;
         console.log('parent event class called by child',this.data1);
         } catch (error) {
            console.log('error is',error.name);
         console.log('error is',error.message);
         console.log('error is',error.lineNumber);
         } 
         
        }

      constructor(){
         super();
         this.template.addEventListener('childevent',this.parentHandler.bind(this));
      }

} 