class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    // Getter for diameter
    get diameter() {
      return this.radius * 2;
    }
  
    // Setter for diameter
    set diameter(newDiameter) {
      this.radius = newDiameter / 2;
    }
  
    // Getter for circumference
    get circumference() {
      return 2 * Math.PI * this.radius;
    }
  
    // Setter for circumference
    set circumference(newCircumference) {
      this.radius = newCircumference / (2 * Math.PI);
    }
  
    // Getter for area
    get area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    // Setter for area
    set area(newArea) {
      this.radius = Math.sqrt(newArea / Math.PI);
    }
  }
  
  // اختبار الكود
  const circle = new Circle(6);
  console.log(circle.diameter); // 12
  console.log(circle.circumference); // 37.69911184307752
  console.log(circle.area); // 113.09733552923255
  
  // تغيير القيم باستخدام setter
  circle.diameter = 18;
  console.log(circle.radius); // 9
  
  circle.circumference = 62.83185307179586;
  console.log(circle.radius); // 10
  
  circle.area = 314.1592653589793;
  console.log(circle.radius); // 10
  