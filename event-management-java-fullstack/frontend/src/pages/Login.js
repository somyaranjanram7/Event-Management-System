import React, {useState} from 'react';

export default function Login({onAuth}){
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [msg,setMsg]=useState('');
  const handle=async()=>{
    const res = await fetch('/api/auth/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,password})});
    if(res.ok){ const data = await res.json(); onAuth(data.token, data.role); }
    else{ setMsg('Login failed'); }
  };
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Login</h2>
      <input className="w-full p-2 border mb-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
      <input type="password" className="w-full p-2 border mb-2" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
      <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={handle}>Login</button>
      <div className="text-red-600 mt-2">{msg}</div>
    </div>
  );
}
