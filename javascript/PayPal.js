console.dir(document);
// document.body.children[1].children[0].children[1].children[0].children[0].children[1].href='https://www.paypal.com/ro/webapps/mpp/home';
// document.body.children[1].children[0].children[0].children[1].href='https://www.paypal.com/ro/webapps/mpp/home';
// folosire selectori si schimbare
// am schimbat titlu si text
let element = document.getElementById('extern');
element.textContent='PayPal..';
// let element_nou= document.getElementsByClassName('detaliu');
// element_nou[1].textContent='Now with one integration, you can customize the payments experience and enable your sellers to accept payments from 250 million+ PayPal customers, in over 100 currencies and across 200 markets, with advanced fraud protection and unprecedented control.We help protect your business and sellers from fraudulent transactions, using real-time intelligence and adaptive machine learning';
let element_nou2=document.getElementsByTagName('h2');
// am adaugat o imagine
var img = document.createElement("img");
img.src = "https://www.paypalobjects.com/webstatic/icon/pp258.png";
var source = document.getElementById("ulink");
source.appendChild(img);












// console.dir(document);
// document.body.children[1].children[0].href='https://www.google.com';  
// document.getElementById('external-link').;
// console.dir(document);


// const newObject={
//    someProperty: 'some value'
// };


// let anchorElement=document.getElementById('external-link');
// anchorElement.href = 'https://www.google.com/';
// anchorElement= document.querySelector('#external-id');

// console.dir(h1Element.nextElementSibling);

// h1Element=document.getElementById('first-title');

// console.dir(h1Element);
// let highlightedParagraph = document.querySelector('.highlighted-paragraph');

// console.dir(highlightedParagraph);

// highlightedParagraph.textContent = 'This was changed by Me!';

//adaugare element
// let  newAnchorElement = document.createElement('a');
// newAnchorElement.href='https://google.com';
// newAnchorElement.textContent = 'This leads to Google';
// let firstParagraph = document.querySelector('p');
// firstParagraph.append(newAnchorElement);


//stergere element

// let firstH1Element= document.querySelector('h1');
// <!-- firstH1Element.remove(); -->

//sau

// firstH1Element.parentElement.removeChild(firstH1Element);

//mutare elemente





