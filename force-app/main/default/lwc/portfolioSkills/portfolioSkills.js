import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import PROGRAMMINGLANGUAGES_FIELD from '@salesforce/schema/Portfolio__c.ProgrammingLanguages__c';
import WEBTECHNOLOGIES_FIELD from '@salesforce/schema/Portfolio__c.WebTechnologies__c';
import CLOUDSERVICES_FIELD from '@salesforce/schema/Portfolio__c.CloudServices__c';
import DATABASE_FIELD from '@salesforce/schema/Portfolio__c.Database__c';
import TOOLSFRAMEWORKS_FIELD from '@salesforce/schema/Portfolio__c.ToolsFrameworks__c';
import OPERATINGSYSTEM_FIELD from '@salesforce/schema/Portfolio__c.OperatingSystem__c';

export default class PortfolioSkills extends LightningElement {
    @api recordId;

    @wire(getRecord, {
        recordId: '$recordId',
        fields: [PROGRAMMINGLANGUAGES_FIELD, WEBTECHNOLOGIES_FIELD, CLOUDSERVICES_FIELD, DATABASE_FIELD, TOOLSFRAMEWORKS_FIELD, OPERATINGSYSTEM_FIELD]
    })
    skillHandler({ data, error }) {
        if (data) {
            console.log("Skills Data", JSON.stringify(data));
        }
        if (error) {
            console.error("Skills error", error);
        }
    }
}
