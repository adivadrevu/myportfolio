import { LightningElement, api } from 'lwc';

export default class PortfolioUserDetails extends LightningElement {
    @api recordId
    @api objectApiName
    
    downloadResume() {
        window.open("https://github.com/adivadrevu/adityavadrevu-resume/releases/download/v1.0/adityavadrevu-resume.pdf", "_blank");
    }
    
}