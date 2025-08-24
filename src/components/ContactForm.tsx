import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, User, Phone, MessageSquare, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-card rounded-2xl p-8 shadow-xl border border-surface-light text-center">
        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gradient-primary mb-4">Message Sent!</h3>
        <p className="text-muted-foreground mb-6">
          Thank you for reaching out. I'll get back to you within 24 hours.
        </p>
        <Button
          variant="outline"
          onClick={() => setIsSubmitted(false)}
          className="hover:bg-cyber-blue hover:text-white transition-smooth"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl p-8 shadow-xl border border-surface-light">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
          <Mail className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gradient-primary">Get In Touch</h3>
          <p className="text-muted-foreground">Let's discuss your project</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="flex items-center text-sm font-medium text-foreground mb-2">
              <User className="h-4 w-4 mr-2 text-cyber-blue" />
              Name *
            </label>
            <Input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={`bg-surface border-surface-light focus:border-cyber-blue transition-smooth ${
                errors.name ? 'border-red-500' : ''
              }`}
              placeholder="Your full name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="flex items-center text-sm font-medium text-foreground mb-2">
              <Mail className="h-4 w-4 mr-2 text-cyber-purple" />
              Email *
            </label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`bg-surface border-surface-light focus:border-cyber-purple transition-smooth ${
                errors.email ? 'border-red-500' : ''
              }`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-foreground mb-2">
            <Phone className="h-4 w-4 mr-2 text-cyber-yellow" />
            Phone Number *
          </label>
          <Input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className={`bg-surface border-surface-light focus:border-cyber-yellow transition-smooth ${
              errors.phone ? 'border-red-500' : ''
            }`}
            placeholder="+1 (555) 123-4567"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-foreground mb-2">
            <MessageSquare className="h-4 w-4 mr-2 text-cyber-pink" />
            Message *
          </label>
          <Textarea
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            className={`bg-surface border-surface-light focus:border-cyber-pink transition-smooth min-h-[120px] resize-none ${
              errors.message ? 'border-red-500' : ''
            }`}
            placeholder="Tell me about your project, timeline, and budget..."
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <Button
          type="submit"
          variant="hero"
          className="w-full group"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
              Sending Message...
            </div>
          ) : (
            <>
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-quick" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;