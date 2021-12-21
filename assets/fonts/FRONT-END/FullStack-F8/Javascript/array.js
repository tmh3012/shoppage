console.log('-----------ARRAY----------')
var languages = [
    'Javascript',
    'PHP',
    'Ruby',
    'Python',
    'C#'
]
// kiểm ra một var có phải là array hay k
console.log(Array.isArray(myString4.split(', ')))
// 1. To string
console.log(languages.toString())
console.log(typeof languages.toString())

// 2. Join
// -- sử dụng join để phân tách chuỗi
console.log(languages.join(', '))

// 3. Pop
// -- sử dụng để xóa phần tử cuối cùng của array và trả về phần
// đã xóa. VD
console.log(languages.pop())

// 4. Push
// -- sử dụng push để thêm vào mãng giá trị mới và trả về số lượng
// độ dài của mãng.
console.log(languages.push('Java', 'R'))
// 5. Shift
// -- xóa đi phần tử ở đầu mãng và trả về phần tử đã xóa
console.log(languages.shift())
// 6. Unshift
// -- Thêm phần tử vào đầu mãng và trả về giá trị độ dài của mãng
console.log(languages.unshift('Javascript'))

// 7. Splicing
// -- sử dụng để xóa phần tử bất kỳ trong mãng 
// -- splice(x,y):  -- x là vị trí index của phần tử muốn xóa
//                  -- y là số lượng phần tử muốn xóa khỏi mãng
// console.log(languages.splice(1,1))

// thêm phần tử vào vị trí bất kỳ trong mãng. Sử dụng tham số thứ 3
console.log(languages.splice(1,1,'Javascript Basic'))
// 8. Concat
// sự dụng concat để nối hai array
var languages2 = [ 'Dart', 'C#', 'C++']
console.log(languages.concat(languages2))
// 9. slicing
// slice sử dụng để cắt mãng và copy với giá trị slice(0)
console.log(languages.slice(1,5))

console.log(languages)