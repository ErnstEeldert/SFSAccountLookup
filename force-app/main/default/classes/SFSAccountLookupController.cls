public with sharing class SFSAccountLookupController {

    @AuraEnabled(cacheable=true)
    public static List<Account> findAccounts(String searchKey) {
        String key = '%' + searchKey + '%';
        return [
            SELECT Id, Name, Phone
            FROM Account
            WHERE Name LIKE :key
            WITH SECURITY_ENFORCED
            LIMIT 10
        ];
    }

}
