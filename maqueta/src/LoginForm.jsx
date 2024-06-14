import React from 'react'


const LoginForm = () => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Login</h1>
            <div className='input-box'>
                <input type="text" placeholder='Nombre' /></div> 
            <div className='input-box'>
                <input type="text" placeholder='Apellido' /></div>
            <div className='input-box'>
                <input type="email" placeholder='Email' /></div>
            <div className='input-box'>
                <input type="passwprd" placeholder='Contraseña' /></div>                
            <div className='input-box'>
                <input type="password" placeholder='Confirmar Contraseña' /></div>
            <div className='input-box'>
                <input type="tel" placeholder='Telefono' /></div>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default LoginForm
