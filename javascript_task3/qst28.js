function Car(name, mileage, max_speed) {
    this.name = name;
    this.mileage = mileage;
    this.max_speed = max_speed;
  }
  var car1 = new Car("Toyota Camry", 5000, 120);
  var car2 = new Car("Honda Civic", 7000, 110);
   
  console.log(car1); 
  console.log(car2); 
  