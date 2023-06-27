// 6. Xây dựng đối tượng book gồm các thuộc tính và phương thức sau:
// a. bookId: mã sách
// b. bookName: tên sách
// c. price: giá sách
// d. author: Các tác giả sách
// e. bookStatus: trạng thái sách
// f. inputData: cho phép nhập thông tin sách
// g. displayData: cho phép hiển thị các thông tin sách
// Xây dựng đối tượng sách
let action="Creat";
function Book(){
 this.inputData=function(){
    this.bookId=document.getElementById("bookId").value;
    this.bookName=document.getElementById("bookName").value;
    this.price=Number(document.getElementById("price").value);
    this.author=document.getElementById("author").value;
    this.bookStatus=document.querySelector("input[type='radio']:checked").value;
  }
  this.displayData=function(){
    document.getElementById("content").innerHTML+=`
    <tr>
    <td>${this.bookId}</td>
    <td>${this.bookName}</td>
    <td>${this.price}</td>
    <td>${this.author}</td>
    <td>${this.bookStatus}</td>
    <td>
        <button  onclick="editData('${this.bookId}')">Edit</button>
        <button onclick="deleteData('${this.bookId}')">Delete</button>
    </td>
</tr>
    `
  }
}
// Bài 7. Xây dựng các chức năng sau:
// a. Thêm dữ liệu sách và lưu vào mảng
// b. Hiển thị thông tin các sách
// c. Cho phép cập nhật thông tin sách
// d. Cho phép xóa sách
// e. Cho phép sắp xếp sách theo giá sách tăng dần
// f. Cho phép tìm kiếm sách theo tên sách
let arrBooks=[];
//Hiển thị thông tin sách
function displayListBook(){
    //Xóa trắng table
    document.getElementById("content").innerHTML="";
    for (let index = 0; index < arrBooks.length; index++) {
       arrBooks[index].displayData();
    }
}
//Thêm mới một sách
let btnSubmit=document.getElementById("btnSubmit");
btnSubmit.addEventListener("click",function(event){
    event.preventDefault();
    if(action=="Creat"){
        let newBook=new Book();
        // Nhập thông tin cho đối tượng newBook
        newBook.inputData();
        //Thêm  newBook vào mảng arrBook
        arrBooks.push(newBook);
        // Gọi lại hàm hiển thị tất cả sách
        displayListBook();
        // Xóa dữ liệu trên form
        clearDataForm();
    }else{
       //Cập nhật sách khi người dùng chọn submit Form
       let updateBook=new Book();
       updateBook.inputData();
       //Tìm kiếm book trong arrBook để cập nhật
       let indexUpdate=getIndexBookId(updateBook.bookId);
       if(indexUpdate>-1){
        arrBooks[indexUpdate]=updateBook;
       }
    //    for (let index = 0; index < arrBooks.length; index++) {
    //     if(arrBooks[index].bookId==updateBook.bookId){
    //         arrBooks[index]=updateBook;
    //         break;
    //     }
        
    //    }
       //Hiển thị lại dữ liệu
       displayListBook();
       clearDataForm();
       action="Creat";
       document.getElementById("bookId").readOnly=false;
    }
})
// Hàm clear data trên form
 function clearDataForm(){
    document.getElementById("bookId").value="";
    document.getElementById("bookName").value="";
    document.getElementById("price").value="";
    document.getElementById("author").value="";
    document.getElementById("active").checked=true;

 }
 // Cập nhật sách
 // Lấy thông tin sách cần cập nhật hiển thị trên form cho người dùng sửa
  function editData(bookId){
   let bookUpdate={};
   for (let index = 0; index < arrBooks.length; index++) {
    if(arrBooks[index].bookId==bookId){
        document.getElementById("bookId").value=arrBooks[index].bookId;
        document.getElementById("bookId").readOnly=true;
        document.getElementById("bookName").value=arrBooks[index].bookName;
        document.getElementById("price").value=arrBooks[index].price;
        document.getElementById("author").value=arrBooks[index].author;
        if(arrBooks[index].bookStatus=="active"){
            document.getElementById("active").checked=true;
        }else{
            document.getElementById("InActive").checked=true;
        }
        action="Edit";
        break;

    }
    
   }
  }
  // Xóa sách
function deleteData(bookId){
    let indexDelete=getIndexBookId(bookId);
    arrBooks.splice(indexDelete,1);
    displayListBook();
}
//　Tìm book theo bookId
function getIndexBookId(bookId){
    for (let index = 0; index <arrBooks.length; index++) {
        if(arrBooks[index].bookId==bookId){
            return index;
        }
        
    }
    return -1;
}
//Sắp xếp sách theo giá tăng dần
let btnSort=document.getElementById("btnSort");
btnSort.addEventListener("click",function(){
    arrBooks.sort((a,b)=>a.price-b.price);
    displayListBook();
});
//Tìm kiếm theo tên sách
let btnSearch=document.getElementById("btnSearch");
btnSearch.addEventListener("click",function(){
    let searchBookName=document.getElementById("searchBookName").value;
    document.getElementById("content").innerHTML="";
    for (let index = 0; index < arrBooks.length; index++) {
        if(arrBooks[index].bookName.includes(searchBookName)){
          document.getElementById("content").innerHTML+=`
          <tr>
          <td>${arrBooks[index].bookId}</td>
          <td>${arrBooks[index].bookName}</td>
          <td>${arrBooks[index].price}</td>
          <td>${arrBooks[index].author}</td>
          <td>${arrBooks[index].bookStatus}</td>
          <td>
              <button  onclick="editData('${arrBooks[index].bookId}')">Edit</button>
              <button onclick="deleteData('${arrBooks[index].bookId}')">Delete</button>
          </td>
      </tr>
          `  
        }
        
    }
})


  
document.onload=displayListBook();