import emailjs from '@emailjs/browser';

// EmailJS configuration
export const emailjsConfig = {
  serviceId: 'service_do66vs4',
  templateId: 'template_r4e8g4r',
  publicKey: 'sFlm3A9e62DOrXVNZ',
};

export const emailTemplate = {
  to_email: 'pasha34523452@gmail.com',
};

// Initialize EmailJS
export const initEmailJS = () => {
  try {
    // Initialize EmailJS with Public Key
    if (typeof emailjs !== 'undefined' && emailjs.init) {
      emailjs.init(emailjsConfig.publicKey);
    }
  } catch (error) {
    console.warn('EmailJS initialization failed:', error);
  }
};

// Validate configuration
export const validateConfig = (): string[] => {
  const errors: string[] = [];
  
  if (!emailjsConfig.serviceId) {
    errors.push('Service ID is not specified');
  }
  
  if (!emailjsConfig.templateId) {
    errors.push('Template ID is not specified');
  }
  
  if (!emailjsConfig.publicKey) {
    errors.push('Public Key is not specified');
  }
  
  return errors;
};

// Main email sending function
export const sendEmail = async (formData: {
  name: string;
  email: string;
  subject?: string;
  message: string;
}) => {
  try {
    // Initialize EmailJS
    initEmailJS();
    
    // Validate configuration
    const configErrors = validateConfig();
    if (configErrors.length > 0) {
      throw new Error(`EmailJS configuration errors: ${configErrors.join(', ')}`);
    }
    
    // Prepare template parameters
    const templateParams = {
      from_name: formData.name || 'Not specified',
      from_email: formData.email || 'Not specified',
      subject: formData.subject || 'No subject',
      message: formData.message || 'Empty message',
      to_email: emailTemplate.to_email,
      sent_date: new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      user_ip: 'Hidden for security',
    };
    
    console.log('Sending email with parameters:', templateParams);
    
    // Send email
    const result = await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      templateParams
    );
    
    console.log('EmailJS result:', result);
    
    if (result.status === 200) {
      return { success: true, message: 'Message sent successfully!' };
    } else {
      throw new Error(`Unexpected status: ${result.status}`);
    }
    
  } catch (error: any) {
    console.error('Error sending email:', error);
    
    // Handle different error types
    let errorMessage = 'Unknown error occurred while sending';
    
    if (error.status === 412) {
      errorMessage = 'Data validation error. Please check EmailJS settings.';
    } else if (error.status === 400) {
      errorMessage = 'Invalid request parameters.';
    } else if (error.status === 401) {
      errorMessage = 'Invalid Public Key.';
    } else if (error.status === 404) {
      errorMessage = 'Service ID or Template ID not found.';
    } else if (error.message) {
      errorMessage = error.message;
    }
    
    return { success: false, message: errorMessage };
  }
};

// Fallback function (mailto)
export const sendEmailFallback = (formData: {
  name: string;
  email: string;
  subject?: string;
  message: string;
}) => {
  const subject = encodeURIComponent(`Portfolio: ${formData.subject || 'No subject'}`);
  const body = encodeURIComponent(`New message from portfolio website



From: ${formData.name || 'Not specified'}
Email: ${formData.email || 'Not specified'}
Subject: ${formData.subject || 'No subject'}



Message:
${formData.message || 'Empty message'}



---
Sent: ${new Date().toLocaleString('en-US')}
From: Portfolio website dezmolio`);

  window.location.href = `mailto:${emailTemplate.to_email}?subject=${subject}&body=${body}`;
  
  return { success: true, message: 'Email client is opening!' };
};

