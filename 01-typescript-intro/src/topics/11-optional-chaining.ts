
export interface Passenger{
    name:string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Aleja'
} 

const passenger2: Passenger = {
    name: 'Fernando',
    children: ['nata','eli']
} 

const printChildren = (passenger: Passenger) =>{
    
    const howManyChildren = passenger.children?.length ?? 0;
    console.log(passenger.name, howManyChildren)
}

printChildren(passenger1)