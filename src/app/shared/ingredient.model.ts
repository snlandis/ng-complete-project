//THIS IS THE LONG WAY. SHORT WAY ON LINE 11. ALSO SEE RECIPE.MODEL.TS
// export class Ingredient {
//   public name: string;
//   public amount: number;
//
//   constructor(name: string, amount: number){
//     this.name = name;
//     this.amount = amount;
//   }
// }
export class Ingredient {
  constructor(public name: string, public amount: number){
  }
}
