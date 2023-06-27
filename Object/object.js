// // 1. Tạo đối tượng person rỗng
let preson={};
// a. Thêm thuộc tính firstName và lastName với giá trị là “Nguyễn Văn” 
// và “Bình”
// preson.firstName="Nguyễn Văn",
// preson.lastName="Bình";
// console.log("Đối tượng sau khi thêm là:",preson);
// // b. Thay đổi giá trị lastName là “Hòa”
// preson.lastName="Hòa";
// console.log("Đối tượng sau khi thay đổi là:",preson);
// // c. Xóa thuộc tính lastName khỏi đối tượng
// preson.delete="lastName";
// console.log("Đối tượng sau khi xóa là:",preson);

// 2. Viết hàm checkEmpty kiểm tra đối tượng có thuộc tính không? Có thì trả 
// về true, ngược lại trả về false
// function checkEmpty(abc){
//     let keys=Object.keys(abc);
//     if(keys.length>0){
//         return true;
//     }else{
//         return false;
//     }
// }
// let person={
//     firstName: "Nguyễn Văn",
//     lastName:"Bình"
// };
// console.log(checkEmpty(person));;
// let emptyObject={};
// console.log(checkEmpty(emptyObject));

// 3. Xây dựng đối tượng chứa tiền lương của các nhân viên trong phòng. Viết 
// hàm tính tổng lương của các nhân viên trong phòng
// let preson=[
//     { "name":"Nguyễn Văn Bình",
//      "salary":500,},
//     {" name":"Nguyễn Văn Hòa",
//      "salary":600,},
// ];
// function calculateTotalSalary(preson){
//     let totalSalary=0;
//     for(let i=0; i<preson.length;i++){
//         totalSalary+=preson[i].salary;

//     }
//     return totalSalary;
// }
// let totalSalary=calculateTotalSalary(preson);
// console.log("Tổng tiền lương của nhân viên là:",totalSalary);

// 4. Tạo đối tượng menu gồm các thuộc tính width, height và title. Xây dựng 
// hàm nhân 2 giá trị các thuộc tính có giá trị là number
// let preson={
//     with:40,
//     height:120,
//     tilte:"menu",
// };
//   function multiplication2Number(object) {
//     let multi=1;
//     for (let i in object) {
//       if (!isNaN(object[i])) {
//         multi *= object[i];
//       }
//     }
//     return multi;
//   }
//   console.log("Hàm nhân 2 giá trị các thuộc tính có giá trị là number là:",multiplication2Number(preson));

  
//   5. Tạo đối tượng máy tính gồm 3 phương thức
//   a. Read(): nhận hai giá trị và lưu chúng dưới dạng thuộc tính đối 
//   tượng
//   b. Sum(): trả về tổng giá trị đã lưu
//   c. Mul(): trả về tích các giá trị đã lưu
// let calculator={
//    number1:0,
//     number2:0,
//     Read:function(a,b){
//         this.number1=a;
//         this.number2=b;
//     },
//     Sum:function(){
//         return this.number1+this.number2;
//     },
//     Mul:function(){
//         return this.number1*this.number2;
//     }
// };
// calculator.Read(5,10);
// console.log("Tổng giá trị đã lưu:",calculator.Sum());
// console.log("Tích các giá trị đã lưu:",calculator.Mul());

// 6. Xây dựng đối tượng book gồm các thuộc tính và phương thức sau:
// a. bookId: mã sách
// b. bookName: tên sách
// c. price: giá sách
// d. author: Các tác giả sách
// e. bookStatus: trạng thái sách
// f. inputData: cho phép nhập thông tin sách
// g. displayData: cho phép hiển thị các thông tin sách
// let book={
//     bookId: "",
//     bookName: "",
//     price:"",
//     author: "",
//     bookStatus: "",
//     inputData: function(bookId,bookName,price,author,bookStatus){
//         this.bookId=bookId;
//         this.bookName=bookName;
//         this.price=price;
//         this.author=author;
//         this.bookStatus=bookStatus;
//     },

//     displayInfo: function(){
//         console.log("bookId là:",this.bookId);
//         console.log("bookName là:",this.bookName);
//         console.log("price là:",this.price);
//         console.log("author là:",this.author);
//         console.log("bookStatus là:",this.bookStatus);
//     }

// }
// book.inputData("Sv001","Đắc nhân tâm","20$","Dale Carnegie","Available",)
// book.displayInfo();

// 7. Xây dựng các chức năng sau:
// a. Thêm dữ liệu sách và lưu vào mảng
// b. Hiển thị thông tin các sách
// c. Cho phép cập nhật thông tin sách
// d. Cho phép xóa sách
// e. Cho phép sắp xếp sách theo giá sách tăng dần
// f. Cho phép tìm kiếm sách theo tên sách