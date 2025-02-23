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
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      {!status === 'success' ? (
        <>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Stay Updated</h3>
          <p className="text-gray-600 mb-6">
            Subscribe to receive updates about new property listings and availability.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? (
                <span>Submitting...</span>
              ) : (
                <span>Join Waitlist</span>
              )}
            </button>
          </form>
        </>
      ) : (
        <div className="text-center py-8">
          <div className="text-green-500 text-4xl mb-4">✓</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
          <p className="text-gray-600">
            You'll receive updates about new properties and availability.
          </p>
        </div>
      )}
      {status === 'error' && (
        <p className="text-red-600 text-sm">Error submitting, please try again</p>
      )}
    </div>
  );
};

export default WaitlistForm;