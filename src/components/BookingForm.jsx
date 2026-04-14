import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock, User, Mail, Loader2, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    date: '',
    timeSlot: ''
  });
  const [availableSlots, setAvailableSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  // Fetch available slots when date changes
  useEffect(() => {
    const fetchSlots = async () => {
      if (!formData.date) return;
      setLoading(true);
      try {
        const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
        const res = await fetch(`${apiBaseUrl}/api/bookings/available?date=${formData.date}`);
        const data = await res.json();
        if (data.success) {
          setAvailableSlots(data.data);
        }
      } catch (err) {
        console.error('Failed to fetch slots', err);
      } finally {
        setLoading(false);
      }
    };
    fetchSlots();
  }, [formData.date]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
      const res = await fetch(`${apiBaseUrl}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      
      if (data.success) {
        setStatus({ type: 'success', message: 'Booking confirmed! Check your email for details.' });
        setFormData({ clientName: '', clientEmail: '', date: '', timeSlot: '' });
      } else {
        setStatus({ type: 'error', message: data.message || 'Failed to book' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Connection failed. Is the server running?' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="glass-card p-8 md:p-10 max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <CalendarIcon className="text-primary" />
        Schedule Your Consultation
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-navy/70 flex items-center gap-2">
              <User size={16} /> Full Name
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:border-primary outline-none transition-all"
              placeholder="John Doe"
              value={formData.clientName}
              onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-navy/70 flex items-center gap-2">
              <Mail size={16} /> Email Address
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:border-primary outline-none transition-all"
              placeholder="john@example.com"
              value={formData.clientEmail}
              onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-navy/70 flex items-center gap-2">
              <CalendarIcon size={16} /> Preferred Date
            </label>
            <input
              type="date"
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:border-primary outline-none transition-all"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value, timeSlot: '' })}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-navy/70 flex items-center gap-2">
              <Clock size={16} /> Available Slots
            </label>
            <div className="relative">
              <select
                required
                disabled={!formData.date || loading}
                className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:border-primary outline-none transition-all appearance-none disabled:bg-slate-50"
                value={formData.timeSlot}
                onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
              >
                <option value="">Select a time</option>
                {availableSlots.map((slot) => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
              {loading && <Loader2 className="absolute right-4 top-3.5 animate-spin text-primary" size={18} />}
            </div>
          </div>
        </div>

        <AnimatePresence>
          {status.message && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`p-4 rounded-xl text-sm font-semibold flex items-center gap-3 ${status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}
            >
              {status.type === 'success' ? <CheckCircle2 size={18} /> : null}
              {status.message}
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="submit"
          disabled={submitting}
          className="btn btn-primary w-full py-4 text-lg font-bold disabled:opacity-70 disabled:cursor-not-allowed group"
        >
          {submitting ? (
            <Loader2 className="animate-spin" />
          ) : (
            <>Confirm Booking <CheckCircle2 className="ml-2" size={20} /></>
          )}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
