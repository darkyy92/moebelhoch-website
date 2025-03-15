
import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

interface FormField {
  id: string;
  label: string;
  type: string;
  placeholder?: string; // Make placeholder optional
  required?: boolean;
  rows?: number;
  options?: Array<{value: string, label: string}>; // Add options for select fields
}

interface ContactFormProps {
  title?: string;
  description?: string;
  fields: FormField[];
  submitButtonText?: string;
  successMessage?: string;
  emailTo?: string;
}

const ContactForm = ({
  title = "Offerte anfordern",
  description = "Für eine unverbindliche Offerte bitten wir Sie, untenstehende Angaben entsprechend auszufüllen.",
  fields,
  submitButtonText = "Offerte anfordern",
  successMessage = "Vielen Dank für Ihre Anfrage. Wir werden uns so schnell wie möglich bei Ihnen melden.",
  emailTo = "info@moebellift.ch"
}: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Anfrage gesendet!</h2>
          <p className="text-gray-600">{successMessage}</p>
          {emailTo && (
            <p className="mt-4 text-sm text-gray-500">
              Die Offerte wird per E-Mail an <span className="font-medium">{emailTo}</span> gesendet.
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
      {title && <h2 className="text-2xl font-bold text-movers-primary mb-2">{title}</h2>}
      {description && <p className="text-gray-600 mb-6">{description}</p>}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map((field) => (
          <div key={field.id}>
            <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">
              {field.label}{field.required && <span className="text-red-500">*</span>}
            </label>
            {field.type === 'textarea' ? (
              <textarea
                id={field.id}
                name={field.id}
                rows={field.rows || 4}
                className="form-control"
                placeholder={field.placeholder || ''}
                required={field.required}
              />
            ) : field.type === 'select' && field.options ? (
              <select
                id={field.id}
                name={field.id}
                className="form-control"
                required={field.required}
              >
                <option value="">{field.placeholder || 'Bitte wählen...'}</option>
                {field.options.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                id={field.id}
                name={field.id}
                className="form-control"
                placeholder={field.placeholder || ''}
                required={field.required}
              />
            )}
          </div>
        ))}
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full mt-6"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Wird gesendet...
            </span>
          ) : (
            submitButtonText
          )}
        </button>
      </form>
      
      {emailTo && (
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-3">
            Offerte geht per E-Mail an <span className="font-medium">{emailTo}</span>
          </p>
          <p className="text-sm text-gray-600">
            Gerne prüfen wir Ihre Anfrage und werden uns so rasch als möglich mit Ihnen in Verbindung setzen. Für weitere Informationen stehen wir Ihnen gerne zur Verfügung.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            <a href={`mailto:${emailTo}`} className="inline-flex items-center text-movers-secondary hover:text-movers-primary">
              <Mail size={18} className="mr-2" />
              <span>Per E-Mail</span>
            </a>
            <a href="tel:+41000000000" className="inline-flex items-center text-movers-secondary hover:text-movers-primary">
              <Phone size={18} className="mr-2" />
              <span>Telefonisch</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
