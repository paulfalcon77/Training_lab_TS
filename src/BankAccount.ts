
export class BankAccount {
    public owner: string;
    private balans: number;

    constructor(owner: string, balans: number) {
        this.owner = owner;
        this.balans = balans;
    }

    deposit (addmoney: number): number {
        this.balans = this.balans + addmoney;
        return this.balans;
    }
}