import React, { useState } from 'react';
import SectionContainer from './SectionContainer';
import { PROFILE } from '../constants';
import { Mail, Linkedin, MapPin, Send } from 'lucide-react';
import FadeIn from './FadeIn';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct mailto link for static site functionality
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="bg-corporate-900 dark:bg-slate-950 text-white transition-colors duration-300">
      <SectionContainer id="contact">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div>
            <FadeIn>
                <h2 className="text-3xl font-bold mb-6">Let's work together</h2>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                I am currently available for interviews and open to discussing how my skills in Data Analytics, AI, and Cloud Architecture can contribute to your team's success in Ireland.
                </p>
            </FadeIn>
            
            <div className="space-y-6">
              <FadeIn delay={100}>
                <div className="flex items-start gap-4">
                    <div className="bg-slate-800 dark:bg-slate-900 p-3 rounded-lg text-blue-400">
                    <Mail className="w-6 h-6" />
                    </div>
                    <div>
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Email</h4>
                    <a href={`mailto:${PROFILE.email}`} className="text-lg font-medium hover:text-blue-400 transition-colors">
                        {PROFILE.email}
                    </a>
                    </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={200}>
                <div className="flex items-start gap-4">
                    <div className="bg-slate-800 dark:bg-slate-900 p-3 rounded-lg text-blue-400">
                    <Linkedin className="w-6 h-6" />
                    </div>
                    <div>
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">LinkedIn</h4>
                    <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-blue-400 transition-colors">
                        linkedin.com/in/durga-prasad-reddy
                    </a>
                    </div>
                </div>
              </FadeIn>

              <FadeIn delay={300}>
                <div className="flex items-start gap-4">
                    <div className="bg-slate-800 dark:bg-slate-900 p-3 rounded-lg text-blue-400">
                    <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Location</h4>
                    <span className="text-lg font-medium">
                        {PROFILE.location}
                    </span>
                    </div>
                </div>
              </FadeIn>
            </div>
          </div>

          <FadeIn delay={400} direction="left">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 text-slate-900 dark:text-slate-100 shadow-xl transition-colors duration-300">
                <h3 className="text-xl font-bold mb-6">Send a Message</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                    <input 
                    type="text" 
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="Recruiter / Hiring Manager"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                    <input 
                    type="email" 
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="company@example.com"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                    <textarea 
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                    placeholder="I'd like to discuss a potential opportunity..."
                    ></textarea>
                </div>
                <button 
                    type="submit"
                    className="w-full bg-corporate-accent text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                    <Send className="w-4 h-4" />
                    Send Message
                </button>
                </form>
            </div>
          </FadeIn>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Contact;