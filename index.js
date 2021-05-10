
class Mkulima{
  constructor(){
    this.vendors=[];
    this.orders=[];
    this.products=[];
    this.farms=[];
  }
  addFarm(farmId,name,farmer,phone,adress){
    return this.farms.push({farmId,name,farmer,phone,adress});
  }

  removeFarm(farmId){
    let remove=this.farms.find(remove=>remove.farmId==farmId)
    return delete this.farms[remove]
  }
  updateFarm(farmId,name,farmer,phone,adress){

    let shamba=this.farms.find(shamba=> shamba.farmId==farmId)
    shamba={
      farmId:farmId,
      name:name,
      farmer:farmer,
      phone:phone,
      adress:adress
    }
    return shamba

  }
  getfarm(farmId){
    let shamba1=this.farms.find(shamba1 => shamba1.farmId == farmId);
    return shamba1;

  }

  addProduct(productId,name,price){
    return this.products.push({productId,name,price});
  }
  removeProduct(productId){
    let product=this.products.find(product => product.productId === productId);
    return delete this.products[product];
  }
  updateProduct(productId,name,price){
    this.products.name=name;
    this.products.price=price;
    this.products.productId=productId;
let updates ={productId,name,price};
 return updates;
}
getProduct(productId){
  let product=this.products.find(product => product.productId === productId);
  return product


}
printProducts(){
  for(let items of this.products){
    console.log(`${items.name}: ${items.price}`);
  }
}

calculate_order_cost(productId,Quantity){
  var price=productId*Quantity
  return price
}

}

let garden= new Mkulima([],[],[]);
console.log(garden.addFarm(500,"Solio Farm","Grace","86065479","Kilimani"));
console.log(garden.addFarm(600,"Ilara farm","Johnson","9765322","Nyandarua"));
console.log(garden.removeFarm(500));
console.log(garden.getfarm(500));
console.log(garden.updateFarm(100,"Delamare farm","Munyiva","75386458","Kilifi"));
console.log(garden.addProduct(700,"Nuvita",80));
console.log(garden.addProduct(800,"manji",70));
console.log(garden.removeProduct(800))
console.log(garden.updateProduct(1000,"Nuvita","100"));
console.log(garden.getProduct("Nuvita"));
garden.printProducts();
console.log(garden.calculate_order_cost(700,2));
  