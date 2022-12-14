import React, { useEffect, useState } from 'react';
import SideMenu from '../component/SideMenu';
import "./Type_dossier.css"; 
import TypeShow from '../component/TypeShow'; 
import axios from 'axios'


const Type_dossier = () => {  
    const [users , setUsers] = useState([]) 





    useEffect(()=> {  
         axios.get('/api/users') 
         .then (res=> {  
            setUsers(res.data)

         });

    })

    return (
        <div>

            <div className='page'> 
            <header id="header">
    <nav>
        <div class="container">
            <div class="text-center">
                <a href="/" class="nav-brand text-dark">Liste des types de dossier</a>
            </div>
        </div>
    </nav> 
    </header>
           
   <main id="site-main">
       <div class="container">
           <div class="box-nav d-flex justify-between">
               <a href="/AddTypeDossier" class="border-shadow">
                   <span class="text-gradient">Ajouter type Dossier </span>
               </a>
           </div>
          
           <form action="/" method="POST">
               <table class="table">
                   <thead class="thead-dark">
                       <tr> 
                           
                           <th>Email</th>
                           <th>FirstName</th>  
                           <th>LastName</th> 
                           <th>Age</th> 
                           <th>Action</th>
                       </tr>
                   </thead>
            <tbody>  
               
               
             {  
                users.map(({Email, Lastname , Firstname , Age}) => (
                <TypeShow Email={Email} Lastname={Lastname} Firstname={Firstname} Age={Age}  />
                ))
             }
               
               
    

            </tbody>
               </table>
           </form>
       </div>
   </main>




            </div>
        </div>
    );
};

export default Type_dossier;