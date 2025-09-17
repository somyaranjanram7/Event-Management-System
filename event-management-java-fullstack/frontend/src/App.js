import React, {useEffect, useState} from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import EventList from './pages/EventList';
import AdminDashboard from './pages/AdminDashboard';

function App(){
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);

  return (
    <div className="min-h-screen p-6">
      <header className="max-w-4xl mx-auto mb-6">
        <h1 className="text-3xl font-bold">Event Management System</h1>
      </header>
      <main className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
        {!token ? (
          <div className="grid grid-cols-2 gap-4">
            <Login onAuth={(t,r)=>{setToken(t); setRole(r)}}/>
            <Signup/>
          </div>
        ) : (
          <>
            <div className="mb-4">Logged in as <strong>{role}</strong></div>
            {role === 'ADMIN' ? <AdminDashboard token={token}/> : <EventList token={token}/>}
            <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded" onClick={()=>{setToken(null); setRole(null);}}>Logout</button>
          </>
        )}
        <hr className="my-6"/>
        <EventList token={token}/>
      </main>
    </div>
  );
}

export default App;
