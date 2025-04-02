import { LightningElement, wire } from 'lwc';
import getcontact from '@salesforce/apex/ContactController.getcontact';

export default class ContactList extends LightningElement {

    @wire(getcontact) contacts;
}