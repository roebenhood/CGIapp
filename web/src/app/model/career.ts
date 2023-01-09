export class CareerGoal{
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public targetDate?: string,
        public completedDate?:string,
        public isCompleted?:boolean
    ){}
}