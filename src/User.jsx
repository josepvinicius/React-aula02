import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';



export default function Posts() {

    const [users, setUsers] = useState ([]);
    const [loading, setLoading] = useState(false);

   const buscarUsers = async () => {
    setLoading(true);

    try{
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      
      await new Promise(resolve => setTimeout(resolve, 2000));

      setUsers(res.data);

    } catch (err) {
      console.error("Erro ao bucar posts:", err);

    } finally {
      setLoading(false)

    }
   };

   useEffect(() => {
    buscarUsers();

   }, []);

    return (
        <>
          <div className='container'>
            <h1>Posts</h1>
            <button 
            onClick={buscarUsers}
            disabled={loading}>
              {loading ? "Carregando..." : "Recarregar"}
            </button>
          </div>
          
          <div className='carregando'>
            {loading && <p>⏳ Carregando posts...</p>}
          </div>
          
          <div className='posts'>
            <ul className='box'>
            {users.map(user => (
                <li key={user.id}>
                  <h3>{user.name}</h3>
                  <p>{user.data}</p>
                </li>
                ))}
          </ul>
          </div>
          
        </>
      )
    }