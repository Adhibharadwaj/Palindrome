const button = document.getElementById('btn')
const number = document.getElementById('nam')

function myFunction(a){
    alert(`Entered value is ${a}`)
}


button.addEventListener('click',()=> {
    const str = number.value
    let str2 = ''
          
  for (i=str.length-1;i>=0;i--){
       str2 = str2 + str[i]
  }
  console.log(str2)
    if (str == str2) {
  alert(str + '  Is a palindrome')
}else
{
    alert(str + '  Is not a palindrome')
}
  })



  
