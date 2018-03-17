export class Survey {
     _id: string;
    _user: string;
    question: string;
    option1: {value: string, votes: number};
    option2: {value: string, votes: number};
    option3: {value: string, votes: number};
    option4: {value: string, votes: number};

    constructor()
    {
     this.question = '';
     this.option1 = { value: '' , votes: 0 } ;
     this.option2 = { value: '' , votes: 0 } ;
     this.option3 = { value: '' , votes: 0 } ;
     this.option4 = { value: '' , votes: 0 } ;
    }
  }

