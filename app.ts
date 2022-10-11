// const x = (str: string): void => {
//
// }
//
// interface IUser <T>{
//     name: string,
//     age: number,
//     status: boolean,
//     data:T
// }
//
// type IDog = {
//     name:string,
//     age:number
// }
// const user: Partial<IUser> = {status:false}
//
// console.log(user.name);

// const user:IUser = {age:18, status:false, name:'max',data:[]}
//
// class User {
//
//     constructor(public id: number, protected name: string, private age: number) {
//         this.id = id;
//         this.name = name;
//         this.age = age;
//     }
// }

// const user = new User(15, 'Max', 15);
// console.log(user.id);
//
// user.

// interface IShapeActions {
//     area: () => number,
//     perimeter: () => number
// }
//
// interface IGreeting {
//     hello: () => void
// }
//
// class Rectangle implements IShapeActions, IGreeting {
//     constructor(private a: number, private b: number) {
//     }
//
//     area(): number {
//         return this.a * this.b
//     }
//
//     hello(): void {
//         console.log('Hello');
//     }
//
//     perimeter(): number {
//         return this.a * 2 + this.b * 2
//     }
//
// }
//
//
// const rectangle = new Rectangle(5, 10);
//
// class Triangle implements IShapeActions {
//     constructor(private a: number, private b: number, private c: number) {
//     }
//     private hi():void{
//         console.log('hi');
//     }
//     area(): number {
//         return this.a * this.b * this.c;
//     }
//
//     perimeter(): number {
//         this.hi()
//         return this.c * 2 / this.b
//     }
//
// }
//
// const triangle = new Triangle(1,2,3);
// // triangle.hi()
// const shapes:IShapeActions[] = [new Rectangle(2,5), triangle]
//
// for (let shape of shapes) {
//     console.log(shape.area());
//     console.log(shape.perimeter());
//
// }

// const asd = ()=>{
//     return 18
// }
//
// type MyFuncType = ReturnType<typeof asd>
//
// const a:MyFuncType = 15


import {userService} from './services';

// userService.getAll().then(value => console.log(value.data[0].username))

userService.getById(2).then(({data})=> console.log(data.address.city))
