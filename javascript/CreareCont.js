const form = document.getElementById('form');
const name1 = document.getElementById('name');
const address = document.getElementById('address');
const gender = document.getElementById('gender');
const age = document.getElementById('age');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    
    e.preventDefault();
    validateInputs();
    
});


const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const nameValue = name1.value.trim();
    const addressValue = address.value.trim();
    const genderValue = address.value.trim();
    const ageValue = address.value.trim();
    // alert(emailValue)
    alert(isEmail(emailValue));
    alert(isPassword(passwordValue));

    if(nameValue === '') {
        setError(name1,'Name is required');
    } else {
        setSuccess(name1);
    }

    if(addressValue === '') {
        setError(address,'Adress is required');
    } else {
        setSuccess(address);
    }

    if(genderValue === '') {
        setError(gender,'Gender is required');
    } else {
        setSuccess(gender);
    }
    
    if(ageValue === '') {
        setError(age,'Age is required');
    } else {
        setSuccess(age);
    }
    if(usernameValue === '') {
        setError(username,'Username is required');
    } else {
        setSuccess(username);
    }
    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isEmail(emailValue)) {
       
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (!isPassword(passwordValue)) {
       setError(password, 'Parola trebuie sa aiba minim 8 caractere,ce contine cel putin un numar, un caracter special , o litera mare si una mica.')
    } else {
        setSuccess(password);
    }
   

};

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

function isEmail(email) {
    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    return emailRegex.test(email)
	// return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPassword(password){
    const passRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    return passRegex.test(password);
    //  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(password);
    // return /^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#\$%\^&\*])(?=.{8,})/.test(password);

}


const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;


// const isValidEmail = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }
// const isValidPassword = password => { 
  
//     const passRegex = /^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#\$%\^&\*])(?=.{8,})/;
//     passRegex.test(string(password).toLowerCase());
// 	// return passwordValue.match(password);
      
//     // if(inputText.value.match(mailformat))

  
//         }


// function CheckPassword(password) 
// { 
//     var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
//         if(password.value.match(passw)) 
//             { 
//             // alert('Correct')
//             return true;
//         }
//         else
//         { 
//                 // alert('Wrong...!')      
//                 return false;
//         }
// }


// alert(validateInputs)
function saveData()
    {
       
    
      
    var username,email,password,name1,address,age, gender;
    

    name1 = document.getElementById('name');
    address = document.getElementById('address');
    gender = document.getElementById('gender');
    age = document.getElementById('age');
    username=document.getElementById('username');
    email=document.getElementById('email');
    password=document.getElementById('password');
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const nameValue = name1.value.trim();
    const addressValue = address.value.trim();
    const genderValue = gender.value.trim();
    const ageValue = gender.value.trim();
    // alert(isValidPassword(password));
    // alert(isValidEmail(email));
    if( nameValue===' ' || addressValue===' ' || genderValue===' ' || ageValue===' ' ||  usernameValue===' ' || emailValue===' ' || passwordValue===' ' || isEmail(emailValue)===false || isPassword(passwordValue)===false)
      {
        alert("Valori incorecte");
      }
      else{
    var user_records=new Array();
    user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(user_records.some((v)=>{return v.email==email}))
    {
      alert("duplicate data");
    }
    else
    {
      user_records.push({
      "name" : nameValue,
      "address" : addressValue,
      "gender" : genderValue,
      "age" : ageValue,
      "username": usernameValue,
      "email": emailValue,
      "password": passwordValue
    })
    localStorage.setItem("users",JSON.stringify(user_records));
    window.location.href="LogIn.html";
    }
    
    }}