import React, {useEffect, useState} from 'react';

export default function AdminDashboard(){
  const [events,setEvents]=useState([]);
  const [form,setForm]=useState({title:'',description:'',date:'',time:'',imageUrl:''});
  useEffect(()=>{ load(); },[]);
  const load=()=>fetch('/api/events').then(r=>r.json()).then(setEvents);
  const create=async()=>{ await fetch('/api/events',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)}); setForm({title:'',description:'',date:'',time:'',imageUrl:''}); load(); };
  const remove=async(id)=>{ await fetch('/api/events/'+id,{method:'DELETE'}); load(); };
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Admin Dashboard</h2>
      <div className="mb-4 p-4 border rounded">
        <h3 className="font-semibold">Create Event</h3>
        <input className="w-full p-2 border mb-2" placeholder="Title" value={form.title} onChange={e=>setForm({...form,title:e.target.value})}/>
        <textarea className="w-full p-2 border mb-2" placeholder="Description" value={form.description} onChange={e=>setForm({...form,description:e.target.value})}></textarea>
        <input className="p-2 border mb-2" type="date" value={form.date} onChange={e=>setForm({...form,date:e.target.value})}/>
        <input className="p-2 border mb-2" placeholder="Time" value={form.time} onChange={e=>setForm({...form,time:e.target.value})}/>
        <input className="w-full p-2 border mb-2" placeholder="Image URL" value={form.imageUrl} onChange={e=>setForm({...form,imageUrl:e.target.value})}/>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded" onClick={create}>Create</button>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Existing Events</h3>
        <div className="grid grid-cols-1 gap-3">
          {events.map(ev=>(
            <div key={ev.id} className="p-3 border rounded flex justify-between">
              <div>
                <div className="font-bold">{ev.title}</div>
                <div className="text-sm">{ev.date} {ev.time}</div>
              </div>
              <div>
                <button className="px-3 py-1 bg-red-500 text-white rounded" onClick={()=>remove(ev.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
