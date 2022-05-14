class Worker{
    constructor(name, experience, performance) {
        this.name= name;
        this.experience = experience;
        this.performance=performance;
    }
    
    describe(){
        return `${this.name} has ${this.experience} years of experience with a ${this.performance} rating.`;
    }
}
class Company{
    constructor(name){
        this.name = name;
        this.workers =[];
    }

    addWorker(worker){
        if (worker instanceof Worker){
            this.workers.push(worker);
        } else{
            throw new Error(`You may only add a current worker, your entry was not found: ${worker}`);
        
        }
    }
    describe(){
        return `${this.name} has ${this.workers.length} workers.`;
    }
}

class Menu {
    constructor() {
        this.companies = [];
        this.selectedCompany = null;
    }
    start(){
        let selection = this.showMainMenuOptions();
        while(selection != 0) {
            switch (selection) {
                case '1':
                    this.createCompany();
                    break;
                case'2' :
                    this.viewCompany();
                    break;
                case '3' :
                        this.deleteCompany();
                        break;
                case '4':
                    this.displayCompanies();
                    break;
                default:
                    selection = 0;
                }
                selection = this.showMainMenuOptions();
            }

            alert('Goodbye!');
        }

    showMainMenuOptions() {
        return prompt(`
            0) Exit
            1) Create new Company
            2) View Company
            3) Delete Company
            4) Display all Companies
        `);
    }

    showTeamMenuOptions(companyInfo){
        return prompt(`
        0) back
        1) Create worker
        2) Delete worker
        ---------
        ${companyInfo}
        `);
    }

    displayCompanies() {
        let companyString = '';
        for (let i = 0; i <this.companies.length; i++){
            companyString += i + ') ' + this.companies[i].name + '\n';
        }
        alert(companyString);
    }

    createCompany() {
        let name = prompt('enter name for new Company');
        this.companies.push(new Company(name));
    }

    viewCompany() {
        let index = prompt('Enter the index number of the Company you wish to view');
        if(index >-1 && index <this.companies.length){
            this.selectedCompany = this.companies[index];
            let description = 'Company Name: ' + this.selectedCompany.name + '\n';
            
            for (let i =0; i< this.selectedCompany.workers.length; i++){
                description += i + ') ' + this.selectedCompany.workers[i].name + `  Performance Rating:` + this.selectedCompany.workers[i].performance +  `  Years of Experience:` + this.selectedCompany.workers[i].experience ;
            } 
            let selection = this.showTeamMenuOptions(description);
            switch (selection){
                case '1':
                    this.createWorker();
                    break;
                case '2' :
                    this.deleteWorker();
            }
        }
    }

    deleteCompany(){
        let index = prompt('Enter the index  number of the Company you wish to delete');
        if(index > -1 && index < this.companies.length){
            this.companies.splice(index, 1);
        }
    }

    createWorker(){
        let name = prompt('Enter name for new Worker:');
        let experience= prompt('Enter the years of experience for the new worker');
        let performance = prompt( 'Enter the number relating to the performance rating of the worker:  1 = Below Average, 2 = Average, 3 = Above Average  ')
        this.selectedCompany.workers.push(new Worker(name, experience, performance));
    }

    deleteWorker(){
        let index = prompt('Enter the index number of the Worker you wish to delete');
        if (index > -1 && index < this.selectedCompany.workers.length){
            this.selectedCompany.workers.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();