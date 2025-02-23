import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    const { error } = await supabase
      .from('emails')
      .insert({ email });

    if (error) {
      setStatus('error');
    } else {
      setStatus('success');
      setEmail('');
      
      // Optional: Reset status to 'idle' after 5 seconds if you want to allow re-submissions
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      {status !== 'success' ? (
        <>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Stay Updated</h3>
          <p className="text-gray-600 mb-6">
            Subscribe to receive updates about new property listings and availability.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-blue-600 text-white rounded-lg p-3 hover:bg-blue-700 transition-colors"
            >
              <Send className="w-5 h-5" />
              <span>{status === 'loading' ? 'Submitting...' : 'Notify Me'}</span>
            </button>
          </form>
        </>
      ) : (
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Thanks for joining!</h3>
          <p className="text-gray-600">
            We'll keep you updated when new properties become available.
          </p>
        </div>
      )}
    </div>
  );
};

export default WaitlistForm;