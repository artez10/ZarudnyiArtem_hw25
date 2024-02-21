// 1. Створити клас Людина.
// Властивості:
// імʼя;
// стать.
// Методи:
// конструктор, який приймає два параметри: імʼя та стать.
// 2. Створити клас Квартира.
// Властивості:
// конструктор не потрібен;
// масив жителів, який при створенні пустий.
// Методи:
// додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.
// 3. Створити клас Будинок.
// Властивості:
// масив квартир, який при створенні пустий;
// максимальна кількість квартир.
// Методи:
// конструктор, який приймає один параметр: максимальну кількість квартир;
// додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.
// В якості демонстраціїї створити:
// декілька екземплярів класу Людина;
// декілька екземплярів класу Квартира;
// додадити екземпляри класу Людина до екземплярів класу Квартира;
// екземпляр класу Будинок;
// додадити екземпляри класу Квартира до екземплярів класу Будинок.






class Human {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

class Apartment {
    residents = [];
    
    addResident(resident) {
        this.residents.push(resident);
    }
}

class House {
    constructor(maxApartments) {
        this.apartments = [];
        this.maxApartments = maxApartments;
    }

    addApartment(apartment) {
        if(this.apartments.length > this.maxApartments) {
            console.log("No free Apartments")
        } else {
            this.apartments.push(apartment);
        }
    }
}

const firstHuman = new Human("Anna","female");
const secondHuman = new Human("Anton","male");
const thirdHuman = new Human("Maria","female");
const fourthHuman = new Human("Oleg","male");
const fifthHuman = new Human("Mykyta","male");

const firstApartment = new Apartment();
const secondApartment = new Apartment();
const thirdApartment = new Apartment();
const fourthApartment = new Apartment();
const fifthApartment = new Apartment();

firstApartment.addResident(firstHuman);
secondApartment.addResident(secondHuman);
thirdApartment.addResident(thirdHuman);
fourthApartment.addResident(fourthHuman);
fifthApartment.addResident(fifthHuman);

const newHouse = new House(6);

newHouse.addApartment(firstApartment);
newHouse.addApartment(secondApartment);
newHouse.addApartment(thirdApartment);
newHouse.addApartment(fourthApartment);
newHouse.addApartment(fifthApartment);

console.log(newHouse);