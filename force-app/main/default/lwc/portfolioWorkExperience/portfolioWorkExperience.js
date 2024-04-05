import { LightningElement, wire, api } from 'lwc';
import portfolioStringtoHtml from 'c/portfolioStringtoHtml';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';

export default class PortfolioWorkExperience extends LightningElement {
    @api recordId
    workExperienceList = []

    @wire(getRelatedListRecords, {
        parentRecordId: '$recordId',
        relatedListId: 'WorkExperience__r',
        fields: [
            'WorkExperience__c.StartDate__c',
            'WorkExperience__c.EndDate__c',
            'WorkExperience__c.Role__c',
            'WorkExperience__c.CompanyName__c',
            'WorkExperience__c.WorkLocation__c',
            'WorkExperience__c.Description__c',
            'WorkExperience__c.IsCurrent__c',
        ]
    })
    WorkExperienceHandler({ data, error }) {
        if (data) {
            console.log("WorkExperience Data", JSON.stringify(data));
            this.formatExperience(data);
        }
        if (error) {
            console.error(error);
        }
    }

    formatExperience(data) {
        this.workExperienceList = [...data.records].reverse().map(item => {
            let id = item.id;
            const { StartDate__c, EndDate__c, Role__c, CompanyName__c, WorkLocation__c, Description__c, IsCurrent__c } = item.fields;
            let StartDate = this.getValue(StartDate__c);
            let EndDate = this.getValue(EndDate__c);
            let Role = this.getValue(Role__c);
            let CompanyName = this.getValue(CompanyName__c);
            let WorkLocation = this.getValue(WorkLocation__c);
            let Description = this.getValue(Description__c);
            let IsCurrent = this.getValue(IsCurrent__c);

            return { id, StartDate, EndDate, Role, CompanyName, WorkLocation, Description, IsCurrent };
        });
        console.log("workExperienceList", JSON.stringify(this.workExperienceList));
    }

    getValue(data) {
        return data && (data.displayValue || data.value);
    }
}
