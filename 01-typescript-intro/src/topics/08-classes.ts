export class Person {
    constructor(public name: string, private address: string) { }

}


export class Hero extends Person {

    constructor(public alterEgo: string, public age: number, public realName: string) {
        super(realName,'New yor')

    }
}


const iroman = new Hero('aleja', 45, 'Toni');

console.log(iroman);

