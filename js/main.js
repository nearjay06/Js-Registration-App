const firstName = document.querySelector("#firstName");
const secondName = document.querySelector("#secondName");
const contentArea = document.querySelector(".content");
const contentAreaInput = document.querySelector(".p-content");

//creating elements using createElement
const ourParagraph = document.createElement("p");/*should appear below the input and
should go away once input is deleted*/
const ourInputParagraph = document.createElement("p");

//our functions
firstName.oninput /*using the oninput event*/ = function(){
      ourInputParagraph.innerText= firstName.value;/*assigned the innertext of the
      paragraph to the value of the input with an id of firstName which
      was declared on line 2*/
   contentAreaInput.appendChild(ourInputParagraph);/*gets the paragraph and put it 
    within the div with class of p-content as declared above*/
    
};

firstName.onchange = function/*using the onchange event*/(){
      ourParagraph.innerText= firstName.value;
    contentArea.appendChild(ourParagraph);
    ourInputParagraph.innerText = "";
    firstName.value = " ";
};

lastName.oninput=function(){
    ourInputParagraph.innerText = lastName.value;
  contentAreaInput.appendChild(ourInputParagraph);

};

lastName.onchange = function(){
  ourParagraph,innerText = lastName.value;
 contentArea.appendChild(ourParagraph);
 ourInputParagraph.innerText= " ";
 lastName.value = " ";
};







console.log(firstName)
console.log(secondName)
console.log(ourParagraph)

// a dot(.) is for a class
//a hashtag (#) is for a unique identifier