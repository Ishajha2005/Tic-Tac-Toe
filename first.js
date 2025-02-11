class Toyotacar{
    contructor(brand,mileage){
        console.log("creating new object");
        this.brand=brand;
        this.mileage=mileage;
    }
start(){
    console.log("start");
}
stop(){
    console.log("stop");
}

};

let fortuner= new Toyotacar("fortuner",10);//constructor
console.log(fortuner);
let lexus =new Toyotacar("lexus",12);//constructor
console.log(lexus);

