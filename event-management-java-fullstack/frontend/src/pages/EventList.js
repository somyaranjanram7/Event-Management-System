import React, {useEffect, useState} from 'react';

export default function EventList(){
  const [events,setEvents]=useState([]);
  useEffect(()=>{ fetch('/api/events').then(r=>r.json()).then(setEvents); },[]);
  return (
    <div className="mt-4">
      <h2 className="text-2xl font-semibold mb-4">Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {events.map(ev=>(
          <div key={ev.id} className="p-4 border rounded bg-gray-50">
            <h3 className="font-bold">{ev.title}</h3>
            <div className="text-sm">{ev.date} {ev.time}</div>
            <p className="mt-2">{ev.description}</p>
            {ev.imageUrl && <img src={ev.imageUrl} alt="" className="mt-2 w-full h-40 object-cover"/>}
          </div>
        ))}
      </div>
    </div>
  );
}
