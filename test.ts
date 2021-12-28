function Emit() {
  // console.log(eventName)
  console.log(2)
  return function (f1: any, f2: string, f3: PropertyDescriptor) {
    console.log(f1, f2)
    console.log(3)
    console.log(3, f3)
  }
}

class Animal {
  name: string

  constructor(name: string) {
    this.name = name
  }

  @Emit()
  handleName() {
    console.log(1)
  }
}

const dog = new Animal('dog')

dog.handleName()
