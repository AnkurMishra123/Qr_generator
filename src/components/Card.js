import React, { useState } from 'react'

const Card = () => {

    const [input,setInput]=useState("");
    const [qr, setQr]= useState();
const [isLoading,setisLoading]= useState(false);

const getQRCode = async (e) =>{
    e.preventDefault()

    try{
        setisLoading(true)
        const res=await fetch (`https://api.qrserver.com/v1/create-qr-code/?
        size=200x200&data=${input}`)
        console.log(res);
        setQr(res.url)
    }catch (error) {
        console.log(error);
    }finally{
        setisLoading(false);
    }
}

  return (
    <form className='form' onSubmit={getQRCode}>
        <h1 className='title'>
            Qr Code Generator
        </h1>
        <input
        type='text'
        className='input'
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        required
        placeholder='Enter the URL or text' 
        />
        {isLoading && <div className='loading'><span></span>Loading...</div>}

        {!isLoading && (qr ? <img className='qr-code' src={qr} alt="qr_code" />: <div
        className='loading'>Generating Amazing OR code for You & your friends!</div>)}

    <input type='submit' className='submit' value="Generate OR Code" />
    </form>

    )
}

export default Card