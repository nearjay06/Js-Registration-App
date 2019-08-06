const firstName = document.querySelector("#firstName");
const secondName = document.querySelector("#secondName");
const ourContent = document.querySelector(".content");

//const ourPara = document.createElement ("span");
const ourList = [];
//onchange Method
firstName.onchange = function(){
    if (firstName.value.length<3 ||
        firstName.value === '' )
        {
            alert('Please enter atleast 3 characters');
        } else
        {

    ourList.push(firstName.value);//array method push
    console.log(ourList);
    //forEach method
    const ourPara = document.createElement("span");
    ourPara.className = "ourPara";
    ourList.forEach(function(item,index) {
        console.log(index,item);
        ourPara.innerHTML = item;

    let num = index + 1;

    ourPara.innerHTML = `${index + 1} . ${item}`
    ourContent.appendChild(ourPara);
  });

}};


