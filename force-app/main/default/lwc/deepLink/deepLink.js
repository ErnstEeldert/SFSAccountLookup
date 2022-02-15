import { api, LightningElement } from 'lwc';

export default class DeepLink extends LightningElement {

    TYPES = {
        OVERVIEW: 'overview',
        DETAILS: 'details',
        RELATED: 'related',
        PRODUCTS: 'products',
        FEED: 'feed',
        LOCATION: 'location',
        EDIT: 'edit',
        CREATESERVICEREPORT: 'createservicereport',
        FLOW: 'flow',
        QUICKACTION: 'quickaction'
    }

    @api label;
    @api type = this.TYPES.OVERVIEW;
    @api recordId;
    @api apiName;

    @api
    get url() {
        let baseUrl = `com.salesforce.fieldservice://v1/sObject/${this.recordId}`
        if ( this.TYPES.FLOW == this.type || this.TYPES.QUICKACTION == this.type ) {
            return `${baseUrl}/${this.type}/${apiName}`
        } else if ( this.TYPES.OVERVIEW == this.type ) {
            return `${baseUrl}`
        } else {
            return `${baseUrl}/${this.type}`;
        }
    }

}