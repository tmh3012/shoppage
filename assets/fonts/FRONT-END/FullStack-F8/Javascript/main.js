
// Tạo biến bossName và gán giá trị cho biến này là tên thú cưng của bạn
// Tạo biến bossAge và gán cho giá trị là số tuổi thú cưng của bạn
// Tạo biến senName để lưu tên của bạn
// Tạo biến senAge để lưu số tuổi của bạn
// Hiển thị giá trị biến bossName với hàm alert

// var bossName = 'my girlfriend',
//     bossAge = 20;
// var senName,
//     senAge;
// alert (bossName);

/**
 */
// Làm bài tập tại đây

var myString = 'Học Javascript tại F8';
var myString2 = 'JS và js'
var myString3 = '   abcxyz   ',
    myString4 = 'Python, Java, Javascript, PHP, C#, C++'
    myNumber = 15
    myArray = [
        'python',
        'php',
        'javascript',
        'ruby',
        'C#',
        'C++'
    ]
        
    
// 1. Length
// console.log(myString.length)
// console.log(myString.typeof)
// 2. Find index 
console.log(myString.indexOf('Javascript'))
console.log(myString.charAt(15))
// 3. Cut string

console.log(myString.slice(4, 14))
console.log(myString.slice(14))

// 4. Replace

console.log(myString2.replace('Javascript','Javascript tại F8'))
//  Sử dụng biểu thức chính quy để replace xuất hiện nhiều lần
console.log(myString2.replace(/JS/g,'Javascript'))

// 5. Convert to upper case
console.log(myString2.toUpperCase())
// 6. Convert to lower case
console.log(myString2.toLowerCase())

// 7. Trim - loại bỏ khoảng trắng ở hai đầu chuổi

console.log(myString3.trim())

// 8. Split 
// dùng để Conert String sang array (chuổi)
console.log(myString3.trim().split(''))


console.log(Number.isInteger(myNumber))


