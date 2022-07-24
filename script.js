//class Movie
class movie {
    constructor(title,studio,rating){
    this.title= title;
    this.studio=studio;
    this.rating=rating;
                      }}
var movie1 = new movie("xxx","eeeeee","pg")
console.log(movie1.title,movie1.studio,movie1.rating='pg13')

class movie2 {
    constructor(title,studio,rating){
    this.title= title;
    this.studio=studio;
    this.rating=rating;
                      }}
var movie02= new movie2("uuuu","ooooo","pg");
console.log(movie02.title,movie02.studio,movie02.rating)

class Movie3{
    constructor(title,studio,rating){
        this.title= title;
        this.studio=studio;
        this.rating=rating;
                          }
    rated(){
        for (let i = 0; i < this.rating.length; i++) {
            if (this.rating[i]=="pg")
            {console.log(this.title[i],this.studio[i],this.rating[i]);     
            }
            if (this.rating[i]=="pg-13")
            {console.log(this.title[i],this.studio[i],this.rating[i]);     
            }
        }
    }
}
let movie3= new Movie3(["kathi","vikram","singam"],["dream","rajkamal","studio green"],["pg","pg-13","pg"]);
movie3.rated();


//Class-circle
var Circle = /** @class */ (function () {
    function Circle(radius, color) {
        this.radius = 1.0;
        this.color = "Red";
        if (typeof (radius) !== "undefined") {
            this.radius = radius;
        }
        if (typeof (color) !== "undefined") {
            this.color = color;
        }
    }
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.getColor = function () {
        return this.color;
    };
    Circle.prototype.setColor = function (color) {
        this.color = color;
    };
    Circle.prototype.toString = function () {
        return "Radius: " + this.radius + " Color: " + this.color;
    };
    Circle.prototype.getArea = function () {
        return (2 * (Math.PI) * this.radius);
    };
    Circle.prototype.getCircumference = function () {
        return (2 * this.radius);
    };
    return Circle;
}());
var c1 = new Circle();
console.log("Constructor with no params: " + c1.toString());
var c2 = new Circle(3.5);
console.log("Constructor with one param: " + c2.toString());
var c3 = new Circle(2.2, 'Yellow');
console.log("getRadius: " + c3.getRadius());
c3.setRadius(3.3);
console.log("Radius value after setRadius: " + c3.getRadius());
console.log("getColor: " + c3.getColor());
c3.setColor("Blue");
console.log("Color Value after setColor: " + c3.getColor());
console.log(c3.toString());
console.log("Area: " + c3.getArea());
console.log("Circumference: " + c3.getCircumference());

//Write a person class to hold all details.
class persondetail{
    constructor(name,age,dob,gender,ph)
    {
        this.name=name
        this.age=age;
        this.dob=dob;
        this.gender=gender;
        this.ph=ph;
        
    }}

    class person1detail extends persondetail{
constructor(name,age,dob,gender,ph){
    super(name,age,dob,gender,ph)
}
    person1(){
        console.log("person1");
        console.log(this.name);
        console.log(this.age);
        console.log(this.dob);
        console.log(this.gender);
        console.log(this.ph);
    }}
class person2detail extends persondetail{
    constructor(name,age,dob,gender,ph){
        super(name,age,dob,gender,ph)
    }
person2(){
    console.log(" ")
        console.log("person2");
        console.log(this.name);
        console.log(this.age);
        console.log(this.dob);
        console.log(this.gender);
        console.log(this.ph);
}
}
const p1 = new person1detail("ranjith","26","23-06-1996","male","9791819342");
const p2 = new person2detail("siva","25","30-05-1994","male","8778166596");
p1.person1();
p2.person2();

//Write a class to claculate uber price.
console.log("Uber Prie Calculation");
class uber{
    constructor(vehiclemodel,km)
    {
    this.km=km;
    this.vehiclemodel=vehiclemodel
    }
}
 class uberprice extends uber
 {
    constructor(vehiclemodel,km){
        super(vehiclemodel,km)
  }
  pricedetail(){
    if (this.vehiclemodel==="suv") 
    {
        if (this.km>=50){
        console.log(`vehicle model is ${this.vehiclemodel}`)
        console.log(`kilometer is ${this.km}km`)
        console.log(`price is ${(this.km*10)}$`)     
        } 
        else 
        {
            console.log(`vehicle model is ${this.vehiclemodel}`)
            console.log(`kilometer is ${this.km}km`)
            console.log(`price is ${(this.km*13)}$`)
        }
    } else { 
        if (this.vehiclemodel==="hatchbag") 
        {
        if (this.km>=50)
        {
        console.log(`vehicle model is ${this.vehiclemodel}`)
        console.log(`kilometer is ${this.km}km`)
        console.log(`price is ${(this.km*7)}$`)  
        return 0; 
      } 
      else 
      {
        console.log(`vehicle model is ${this.vehiclemodel}`)
       console.log(`kilometer is ${this.km}km`)
       console.log(`price is ${(this.km*8)}$`)
       return 0;
      }
    }
     else 
     {
        if (this.vehiclemodel==="serdan")
        {
        if (this.km>=50)
        {
        console.log(`vehicle model is ${this.vehiclemodel}`)
        console.log(`kilometer is ${this.km}km`)
        console.log(`price is ${(this.km*9)}$`)
            
        } 
        else 
        {
        console.log(`vehicle model is ${this.vehiclemodel}`)
        console.log(`kilometer is ${this.km}km`)
        console.log(`price is ${(this.km*10)}$`)
        return 0;
        } 
        
        
    }
     
    
    }
  }
}
}
const r=new uberprice("serdan",50)
r.pricedetail();