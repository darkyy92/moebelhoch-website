import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";

interface FormField {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  options?: Array<{value: string, label: string}>;
  defaultValue?: string;
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
  const [formData, setFormData] = useState<Record<string, string>>(() => {
    const initialData: Record<string, string> = {};
    fields.forEach(field => {
      if (field.defaultValue) {
        initialData[field.id] = field.defaultValue;
      }
    });
    return initialData;
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleInputChange = (id: string, value: string) => {
    setFormData(prev => ({ ...prev, [id]: value }));
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
      {description && <p className="text-gray-600 mb-8">{description}</p>}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          {fields.slice(0, 5).map((field) => (
            <div key={field.id} className={field.id === "email" ? "md:col-span-2" : ""}>
              <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">
                {field.label}{field.required && <span className="text-red-500">*</span>}
              </label>
              <input
                type={field.type}
                id={field.id}
                name={field.id}
                className="form-control"
                placeholder={field.placeholder || ''}
                required={field.required}
                onChange={(e) => handleInputChange(field.id, e.target.value)}
              />
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {fields.slice(5, 8).map((field) => (
            <div key={field.id}>
              <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">
                {field.label}{field.required && <span className="text-red-500">*</span>}
              </label>
              <input
                type={field.type}
                id={field.id}
                name={field.id}
                className="form-control"
                placeholder={field.placeholder || ''}
                required={field.required}
                onChange={(e) => handleInputChange(field.id, e.target.value)}
              />
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {fields.slice(8, 12).map((field) => (
            <div key={field.id}>
              <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">
                {field.label}{field.required && <span className="text-red-500">*</span>}
              </label>
              <input
                type={field.type}
                id={field.id}
                name={field.id}
                className="form-control"
                placeholder={field.placeholder || ''}
                required={field.required}
                onChange={(e) => handleInputChange(field.id, e.target.value)}
              />
            </div>
          ))}
        </div>

        {fields.slice(12).map((field) => (
          <div key={field.id}>
            <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">
              {field.label}{field.required && <span className="text-red-500">*</span>}
            </label>
            {field.type === 'radio' && field.options ? (
              <RadioGroupPrimitive.Root
                defaultValue={field.defaultValue}
                required={field.required}
                onValueChange={(value) => handleInputChange(field.id, value)}
                className="flex gap-4"
              >
                {field.options.map(option => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <RadioGroupPrimitive.Item
                      value={option.value}
                      id={`${field.id}-${option.value}`}
                      className={cn(
                        "aspect-square h-4 w-4 rounded-full border border-primary text-primary",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                        "disabled:cursor-not-allowed disabled:opacity-50"
                      )}
                    >
                      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                      </RadioGroupPrimitive.Indicator>
                    </RadioGroupPrimitive.Item>
                    <label
                      htmlFor={`${field.id}-${option.value}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </RadioGroupPrimitive.Root>
            ) : field.type === 'textarea' ? (
              <textarea
                id={field.id}
                name={field.id}
                rows={field.rows || 4}
                className="form-control"
                placeholder={field.placeholder || ''}
                required={field.required}
                onChange={(e) => handleInputChange(field.id, e.target.value)}
              />
            ) : null}
          </div>
        ))}
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full mt-8"
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
