var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Emit() {
    // console.log(eventName)
    console.log(2);
    return function (f1, f2, f3) {
        console.log(f1, f2);
        console.log(3);
        console.log(3, f3);
    };
}
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.handleName = function () {
        console.log(1);
    };
    __decorate([
        Emit()
    ], Animal.prototype, "handleName", null);
    return Animal;
}());
var dog = new Animal('dog');
dog.handleName();
