"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function Home() {

  const { data: session } = authClient.useSession() 

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e: React.FormEvent) => { 
    e.preventDefault();
    authClient.signUp.email(
      {
        name,
        email,
        password
      }, {
        onError: (ctx) => {
          window.alert(ctx.error.message)
        },
        onSuccess: () => {
          window.alert('success')
        },
      }
    )
  };

  const onLogin = (e: React.FormEvent) => { 
    e.preventDefault();
    authClient.signIn.email(
      {
        email,
        password
      }, {
        onError: (ctx) => {
          window.alert(ctx.error.message)
        },
        onSuccess: () => {
          window.alert('success')
        },
      }
    )
  };


  if(session){
    return (
      <div className="flex flex-col p-4 gap-y-4">
        <h1>hello {session.user.name}</h1>
        <Button onClick={() => authClient.signOut()}>Sign Out</Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-y-10">
      <div className="p-4 flex flex-col gap-y-4">
        <Input
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)} />
        <Input 
          placeholder="email" 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} />
        <Input 
          placeholder="password" 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={onSubmit}>
          Create User
        </Button>
      </div>
      <div className="p-4 flex flex-col gap-y-4">
        <Input 
          placeholder="email" 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} />
        <Input 
          placeholder="password" 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={onLogin}>
          Login
        </Button>
      </div>
    </div>

  );
}
