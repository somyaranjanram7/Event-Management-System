import React, {useState} from 'react';

export default function Signup(){
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [role,setRole]=useState('NORMAL');
  const [msg,setMsg]=useState('');
  const handle=async()=>{
    const res = await fetch('/api/auth/signup',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,email,password,role})});
    if(res.ok){ setMsg('Signup success. Please login.'); }
    else{ setMsg('Signup failed'); }
  };
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Signup</h2>
      <input className="w-full p-2 border mb-2" placeholder="Name" value={name} onChange={e=>setName(e.target.value)}/>
      <input className="w-full p-2 border mb-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
      <input type="password" className="w-full p-2 border mb-2" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
      <select className="w-full p-2 border mb-2" value={role} onChange={e=>setRole(e.target.value)}>
        <option value="NORMAL">Normal</option>
        <option value="ADMIN">Admin</option>
      </select>
      <button className="px-4 py-2 bg-green-600 text-white rounded" onClick={handle}>Signup</button>
      <div className="text-green-700 mt-2">{msg}</div>
    </div>
  );
}
