'use client';

import React, { useState } from 'react';

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  program: string;
  rollNo: string;
};

export default function Page() {
  return (
    <main style={{ padding: 24, maxWidth: 800, margin: '0 auto' }}>
      <h1>Registration 25-26</h1>
      <p>Please fill out the registration form below.</p>
      <RegistrationForm />
    </main>
  );
}

function RegistrationForm() {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    program: '',
    rollNo: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);

    // basic validation
    if (!form.fullName || !form.email) {
      setMessage('Name and email are required.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Failed to submit');
      const data = await res.json();
      setMessage(data.message ?? 'Registration submitted successfully.');
      setForm({ fullName: '', email: '', phone: '', program: '', rollNo: '' });
    } catch (err) {
      console.error(err);
      setMessage('Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'grid', gap: 12, marginTop: 16 }}
    >
      <label>
        Full name
        <input
          value={form.fullName}
          onChange={(e) => update('fullName', e.target.value)}
          placeholder="Your full name"
          required
          style={{ width: '100%', padding: 8, marginTop: 6 }}
        />
      </label>

      <label>
        Email
        <input
          type="email"
          value={form.email}
          onChange={(e) => update('email', e.target.value)}
          placeholder="you@example.com"
          required
          style={{ width: '100%', padding: 8, marginTop: 6 }}
        />
      </label>

      <label>
        Phone
        <input
          value={form.phone}
          onChange={(e) => update('phone', e.target.value)}
          placeholder="Mobile or landline"
          style={{ width: '100%', padding: 8, marginTop: 6 }}
        />
      </label>

      <label>
        Program
        <input
          value={form.program}
          onChange={(e) => update('program', e.target.value)}
          placeholder="e.g., B.Tech Computer Science"
          style={{ width: '100%', padding: 8, marginTop: 6 }}
        />
      </label>

      <label>
        Roll number
        <input
          value={form.rollNo}
          onChange={(e) => update('rollNo', e.target.value)}
          placeholder="Roll number (optional)"
          style={{ width: '100%', padding: 8, marginTop: 6 }}
        />
      </label>

      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <button
          type="submit"
          disabled={loading}
          style={{ padding: '8px 16px' }}
        >
          {loading ? 'Submitting…' : 'Submit'}
        </button>
        {message && <div style={{ color: '#064e3b' }}>{message}</div>}
      </div>
    </form>
  );
}
