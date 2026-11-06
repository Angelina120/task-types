export function getPersons(): Person[];

interface Person {
    name: string;
    age: number;
    gender: 'male' | 'female';
}

interface Employee extends Person {
    company: string;
}

export function personToString(person: Person | Employee): string;
