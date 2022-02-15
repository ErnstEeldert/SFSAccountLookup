import { LightningElement } from 'lwc';
import findAccounts from '@salesforce/apex/SFSAccountLookupController.findAccounts';


export default class SFSAccountLookup extends LightningElement {

    searchKey = '';
    accounts;
    error;

    handleKeyChange(event) {
        console.log(event.target.value)
        this.searchKey = event.target.value;
    }

    handleSearch() {
        findAccounts({ searchKey: this.searchKey })
            .then((result) => {
                this.accounts = result;
                this.error = undefined;
            })
            .catch((error) => {
                console.error(JSON.stringify(error));
                this.error = error;
                this.accounts = undefined;
            });
    }

}
