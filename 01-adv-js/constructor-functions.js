function Employee(id, name, salary) {
    //this -> new object
    this.id = id;
    this.name = name;
    this.salary = salary;

    this.display = function () {
        console.log(this.id, this.name, this.salary);
    }
}

var emp = new Employee(100, 'Magesh', 10000)
emp.display();


function Spinner(){
    var counter = 0;

    this.up = function(){
        return ++counter;
    }

    this.down = function(){
        return --counter;
    }
}