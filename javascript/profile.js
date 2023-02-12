
  
        var body=document.getElementsByTagName('body')[0];
        var cont=document.getElementsByClassName('container')[0];

        const h45=document.createElement('h4') ;
        let name1 = localStorage.getItem('name');
        h45.innerHTML='Name: '+name1;
        cont.appendChild(h45);
        console.log(name1);
  
        const h42=document.createElement('h4') ;
        let address = localStorage.getItem('address');
        h42.innerHTML='Adresa: '+address;
        cont.appendChild(h42);
        console.log(address);

        const h43=document.createElement('h4') ;
        let age = localStorage.getItem('age');
        h43.innerHTML='Varsta: '+age;
        cont.appendChild(h43);
        console.log(age);

         
        const h44=document.createElement('h4') ;
        let gender = localStorage.getItem('gender');
        h44.innerHTML='Gender: '+gender;
        cont.appendChild(h44);
        console.log(address);


        const h4=document.createElement('h4') 
        let username = localStorage.getItem('username');
        const continut='UserName';
        h4.innerHTML='UserName: '+username;
        cont.appendChild(h4)

        const h41=document.createElement('h4') ;
        let email = localStorage.getItem('email');
        h41.innerHTML='Email: '+email;
        cont.appendChild(h41)
        // console.log(username);
          
       


        // if(name=='')
        // {
        //   alert('U need to login first');
        //   window.location.href="LogIn.html";
        // }
        function Logout()
        {
          // let name1 = localStorage.getItem('name');
          // let address = localStorage.getItem('address');
          // let age = localStorage.getItem('age');
          // let gender = localStorage.getItem('gender');
          // let username = localStorage.getItem('username');
          // let email = localStorage.getItem('email');
          localStorage.setItem('email','')
          localStorage.setItem('username','');
          localStorage.setItem('email','');
          localStorage.setItem('age','');
          localStorage.setItem('gender','');
          localStorage.setItem('address','');
          localStorage.setItem('name','');
          window.location.href="LogIn.html";
        }
   