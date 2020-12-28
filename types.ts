//tsc types.ts //скомпилировать ts  (types.ts == название файла)
//node types.js //запустить джс (types.js == название файла)

const str: string = 'Hello';

const isFetch: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;

const message: string = 'Hello World';


const numberArray:number[] = [1,2,3,4,5,6,7,8];

const numberArray2:Array<number> = [1,2,3,4,5,6,7,8]; //generic types

const words:string[] = ['hello', 'world'];


//Tuple

const array: [string,number] = ['Stas', 22];


//Any
let anytype: any = 42;
anytype = '213';

// ====
function sayMyName(name:string):void { //фция ничего не возвратит
    console.log(name);
}

sayMyName('Stas Mischenko');


// Never
function throwError(message:string):never {
    throw new Error(message)

}


function infinite(): never {
    while (true){

    }
}


//Type

type Login = string

const login: Login = 'admin';
//const login2 : Login = 1; // not working because "type Login = string"


type ID = string | number;

const id1 : ID = 1231;
const id2 : ID = '1231';
// const id3 : ID = true;   // not working because "type ID = string | number;"


type someType = string | null | undefined;