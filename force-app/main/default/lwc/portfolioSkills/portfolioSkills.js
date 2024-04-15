import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import PROGRAMMINGLANGUAGES_FIELD from '@salesforce/schema/Portfolio__c.ProgrammingLanguages__c';
import WEBTECHNOLOGIES_FIELD from '@salesforce/schema/Portfolio__c.WebTechnologies__c';
import CLOUDSERVICES_FIELD from '@salesforce/schema/Portfolio__c.CloudServices__c';
import DATABASE_FIELD from '@salesforce/schema/Portfolio__c.Database__c';
import TOOLSFRAMEWORKS_FIELD from '@salesforce/schema/Portfolio__c.ToolsFrameworks__c';
import OPERATINGSYSTEM_FIELD from '@salesforce/schema/Portfolio__c.OperatingSystem__c';

export default class PortfolioSkills extends LightningElement {
    progSkills = []
    webSkills =[]
    cloudSkills =[]
    dataSkills = []
    toolSkills =[]
    operatingSkills =[]

    @api recordId;

    @wire(getRecord, {
        recordId: '$recordId',
        fields: [PROGRAMMINGLANGUAGES_FIELD, WEBTECHNOLOGIES_FIELD, CLOUDSERVICES_FIELD, DATABASE_FIELD, TOOLSFRAMEWORKS_FIELD, OPERATINGSYSTEM_FIELD]
    })
    skillHandler({ data, error }) {
        if (data) {
            console.log("Skills Data", JSON.stringify(data))
            this.formatSkills(data)
        }
        if (error) {
            console.error("Skills error", error)
        }
    }
    formatSkills(data){
        const {ProgrammingLanguages__c, WebTechnologies__c, CloudServices__c, Database__c, ToolsFrameworks__c, OperatingSystem__c} = data.fields
        this.progSkills = ProgrammingLanguages__c ? ProgrammingLanguages__c.value.split(','):[]
        this.webSkills = WebTechnologies__c ? WebTechnologies__c.value.split(','):[]
        this.cloudSkills = CloudServices__c ? CloudServices__c.value.split(','):[]
        this.dataSkills = Database__c ? Database__c.value.split(','):[]
        this.toolSkills = ToolsFrameworks__c ? ToolsFrameworks__c.value.split(','):[]
        this.operatingSkills = OperatingSystem__c ? OperatingSystem__c.value.split(','):[]

    }
}
