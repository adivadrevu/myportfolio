import { LightningElement, wire, api } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'
import {getRecord, getFieldValue} from 'lightning/uiRecordApi'

import FULLNAME from '@salesforce/schema/Portfolio__c.Full_Name__c'
import COMPANY_LOCATION from '@salesforce/schema/Portfolio__c.CompanyLocation__c'
import COMPANY_NAME from '@salesforce/schema/Portfolio__c.Company_Name__c'
import DESIGNATION from '@salesforce/schema/Portfolio__c.Designation__c'

export default class Portfoliobanner extends LightningElement {
    @api recordId // = 'a00aj000005bYB7AAM'
    @api linkedinUrl // = "https://www.linkedin.com/in/adi77/"
    @api githubUrl // ="https://github.com/adivadrevu"
    @api youtubeUrl // ="https://youtube.com/@TheDeveloperCommodity-Lets"
    

    userPic = `${PortfolioAssets}/PortfolioAssets/adi.png`
    linkedin = `${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`
    github = `${PortfolioAssets}/PortfolioAssets/Social/github.svg`
    youtube = `${PortfolioAssets}/PortfolioAssets/Social/youtube.svg`

    
    @wire(getRecord,{recordId:'$recordId', fields:[FULLNAME,COMPANY_LOCATION,COMPANY_NAME,DESIGNATION]})
    portfolioData
    portfolioHandler({data, error}){
        if(data){
            console.log("record Data", JSON.stringify(data))
        }
        if(error){
            console.log("erro", error)
        }

    }
    get fullName(){
        return getFieldValue(this.portfolioData.data, FULLNAME)
    }
    get companyLocation(){
        return getFieldValue(this.portfolioData.data, COMPANY_LOCATION)
    }
    get companyName(){
        return getFieldValue(this.portfolioData.data, COMPANY_NAME)
    }
    get designation(){
        return getFieldValue(this.portfolioData.data, DESIGNATION)
    }
}