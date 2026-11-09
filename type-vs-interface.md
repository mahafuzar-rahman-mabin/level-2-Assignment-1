## Type vs Interface in TypeScript: What's the Difference?

When i started learing TypeScript, i niticed that type and interface looked very similar.both can describ the stucture of and object.At frist i was confused about when to use each one. after preacting with same examples, i understood that thay have a few important differences.

understing type and interface:

an interface is maily used to define the structure of an object.

For example :

interface Iuser{
name:string;
age : number;
}

we can also user extends to reuse properties for another interface.

For example:

interface Istudent extends Iuser{
studentId : number;
}

on the other hand type is more flexible.It can define objects, unions and tuples.

For example unions:

type Status = "active" | "inactive";
type IUser = {
name : string;
age : number;
}

Anather important difference is declaration mergging.Interfaces whith the same name can be combined automatically, but type aliases cancont be declared agin with the same name.

-When should we use them?

I prefer using interface wwwhen defining objext structures or exteding existin inteefaces. for union tyypes , tuples, and other complex type combinations, I find type more useful.however,both are good chices for describing objects.

My Understanding:

Learning the differences between type and interface helps me write cleaner and more organized TypeScript code. I believe the best choice depends on the situation and the requirements of the project.
