
// let num = 5 //kiểu dữ liệu number
// let str = "ra"// kiểu dữ liệu string
// //khởi tạo  một object học sinh
// let student={
//     name:"Le Van Tuan",
//     age: 30,
//     height: 164,
//     isDate: false,
//     className:["fukuoka","japan"],
//     teach(){
//         console.log("shain");
//     },
//     sleep(){
//         console.log("sleep");
//     },
// };
// key biểu hiện thuộc tính của học viên
// value =>có thể  là bất kỳ kiểu dữ liệu nào
// phương thức => một function

// let dog={
//     name: "sumo",
//     age: 1,
//     color: "black",
//     type: "pull",
    // height: 20,
    // weight: 4,
    // "the loai":"pull",
    
    // eat(){
    //     console.log("an");
    // },
    // run(){
    //     console.log("chay");
    // },

// };
// console.log("ten cua con cho la:", dog.name);
// console.log("tuoi cua cho la:",dog.age);
// console.log("chieu cao cua cho la:",dog.height);
// console.log("can nang cua cho la:",dog.weight);
// console.log("the loai cua cho la:",dog["the loai"]);
// thêm  mới  đối  tượng
// console.log("doi tuong dog truoc khi them moi la:",dog);
// dog.eyeColor="red";
// console.log("doi tuong dog sau khi them moi la:",dog);
// chỉnh  sửa  một đối  tượng
// console.log("truoc khi duoc cap nhat la:",dog);
// dog.name="cat";
// console.log("sau khi cap nhat la",dog);
// duyệt object
// let dog={
//     name: "sumo",
//     age: 1,
//     color: "black",
//     type: "pull",
// };
// let listDogKey=Object.keys(dog);
// console.log("danh sach key cua doi tuong dog",listDogKey);
// for (let i = 0; i < listDogKey.length; i++) {
//     console.log("key cua doi tuong dog la:",listDogKey[i]);
//     console.log("value cua doi tuong gog la:",dog[listDogKey[i]]);
    
// }
// let job={
//     name: "shain",
//     address: "japan",
//     time: "5 nam",
//     shain(){
//         console.log("nhan vien");
//     },
// }
// let city={
//     name: "Kawasaki",
//     "quoc gia": "japan",
//     "dien tich": null,

// }
// let listCityKey=Object.keys(city);
// for(i=0;i<length.listCityKey; i++){
//     console.log("key cua doi tuong city la:",listCityKey[i]);
//     console.log("value cua doi tuong city la:",city[listCityKey[i]]);

// }
//cách duyệt thứ 2
// for(let key in city){
//     console.log("key",key);
//     console.log("value",city[key]);
// }
//delete
// let city={
//     name: "Kawasaki",
//     "quoc gia": "japan",
//     "dien tich": null,

// }
// delete city.name;
// console.log("new city",city);
// // kiểm tra (check)
// let isCheck= "name" in city;
// console.log("name co ton trong city hay ko:",isCheck);

//Khởi tạo một đối tượng object với Cóntructor
// Fucntion Constructor
// function Employee(id, name, age, position, address, salary){
//     this.id=id;
//     this.name=name;
//     this.age=age;
//     this.position=position;
//     this.address=address;
//     this.salary=salary;
// }
// Employee.prototype.display=function(){
//     console.log("id cua nhan vien la:",this.id);
//     console.log("ten cua nhan vien la:",this.name);
//     console.log("tuoi cua nhan vien la:",this.age);
//     console.log("dia chi cua nhan vien la:", this.address);
//     console.log("chuc vu cua nhan vien la:", this.position);
//     console.log("luong cua nhan vien la:", this.salary);
// };
// // khoi tao
// let emloyeeTuan=new Employee(
//     "sv001",
//     "Le van Tuan",
//     30,
//     "nhan vien",
//     "japan",
//    " 20$",
// );
// emloyeeTuan.display();
// Class
class Student{
    constructor(id,name,age){
        this.id=id;
        this.name=name;
        this.age=age;
    }
    display(){
        console.log("id cua hoc sinh la:",this.id);
        console.log("nam cua hoc sinh la:",this.name);
        console.log("tuoi cua hoc sinh la:",this.age);
    }
}
let StudentTA=new Student("sv001","Le van Tuan",30);
StudentTA.display();
