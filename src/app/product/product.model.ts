export class Product {
    public productID: string;
    public name: string;
    public img: string;
    public price: string;
    public description: string;
    public weight: string;
  
    constructor( id: string,name: string, img: string, price: string, description: string, weight: string) {
      this.productID = id;
      this.name = name;
      this.img = img;
      this.price = price;
      this.description = description;
      this.weight = weight;
    }
  }
  