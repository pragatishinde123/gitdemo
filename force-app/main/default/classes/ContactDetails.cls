public class ContactDetails {
    @AuraEnabled
    public static list<contact> getcontact()
    {
        
        list<contact> conlist = [select Id,Name,Interviewer_Name__c,Interviewer_email__c from contact  limit 10];
        return conlist;


    }
    @AuraEnabled
    public static VOID updatecontact(id contacid,string InterviewerName,string email)
    {
        contact con=[select id,Interviewer_Name__c,Interviewer_email__c from contact where id=:contacid];
        con.Interviewer_Name__c=InterviewerName;
        con.Interviewer_email__c=email;
        update con;
        
        
    }
}