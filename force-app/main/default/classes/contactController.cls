public with sharing class contactController {
   

    @AuraEnabled(Cacheable=true)
        public static list<contact> getcontact() {
        list<contact> conlist =[select Id,Name,FirstName,LastName,Email,Phone from contact  limit 10];

        return conlist;
    }

    @AuraEnabled(Cacheable=true)
    public static list<account> getParentAccount(){
       return[select Id,Name,Industry from Account where AnnualRevenue=null];
    }
}