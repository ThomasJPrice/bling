'use client';

import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const supabase = createClient()

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) setError(error.message);
  };

  return (
    <form onSubmit={handleSignUp}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign Up</button>
      {error && <p>{error}</p>}
    </form>
  );
}