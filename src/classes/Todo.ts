export class Todo {
    private _title: string = '';
    private _isDone: boolean = false;
    private _editable: boolean = false;
    private _creationDate: Date;
    constructor(title?: string) {
        title ? this._title = title : '';
        this._creationDate = new Date();
    }
    get title(): string {
        return this._title;
    }
    set title(title:string){
        this._title = title;
    }
    get isDone(): boolean {
        return this._isDone;
    }
    set isDone(isDone: boolean) { 
        this._isDone = isDone;
    }
    get editable(): boolean {
        return this._editable;
    }
    set editable(editable: boolean) {
        this._editable = editable;
    }
    get creationDate(): Date {
        return this._creationDate;
    }
    set creationDate(creationDate: Date) {
        this._creationDate = creationDate;
    }

}