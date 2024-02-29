// console.log("số 1")


// var i=1;
// while(i<=10) {
//         console.log(i);
//          i++; // i+1
// }

// do {
//     console.log("số");
    
// }while (i<0)
// for (let i=1 ; i<=10; i++) {
//     console.log(i);
// }

// const nameStudent = [
//     "Hải Đăng",
//     "Trần Nhi",
//     "Tiến Long",
//     "Phúc",
// ]
// console.log(nameStudent);
// console.log(nameStudent [0]);
// console.log(nameStudent [1]);
// console.log(nameStudent [2]);
// var i=0;//i là vị trí các phần tử
// while (i<=nameStudent.length) { 
//     console.log(nameStudent[i]);
//     i++
// }
// do {
//     console.log(nameStudent[i]);
//     i++;
// }while (i<nameStudent.length)
// const classes = new Array (
//     "JSB",
//     ["JSB01","JSB02"],//mảng con ở vị trí thứ 1,"JSB02 ở vị trí thứ 2"
//     "JSA",
//     "JSI",
// )
// delete classes[1];muốn xóa dòng nào thì ghi vị trí của nó vào []
// console.log(classes)
// console.log(classes.shift())//ngược lại với pop
// console.log(classes);
// console.log(classes.pop());xóa phần tử cuối và in ra ở đầu

// console.log("ĐỘ dài của mảng này là : " +classes.length);
// console.log(classes[1][1]);

const information = { //infor là đối tượng
    name:"Gia Hân", // 1hangf ntn là thuộc tính name gọi là key
    class: "JSA",
    language:["anh",
    {
        certificate1 : "Toeic",
        certificate2 : "IELTS",
    }  ,  "hàn"],
    Age:188,
}
console.log(information);
console.log(information.language[1].certificate2 );

// console.log(information.language[1]);cách để lấy chữ hàn ra
// console.log(information.name);// muốn lấy ra cái giá trị nào thfi ghi name gtrij đó
