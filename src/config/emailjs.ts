import emailjs from '@emailjs/browser';

// EmailJS конфігурація
export const emailjsConfig = {
  serviceId: 'service_do66vs4',
  templateId: 'template_r4e8g4r',
  publicKey: 'sFlm3A9e62DOrXVNZ',
};

export const emailTemplate = {
  to_email: 'pasha34523452@gmail.com',
};

// Ініціалізація EmailJS
export const initEmailJS = () => {
  try {
    // Ініціалізуємо EmailJS з Public Key
    if (typeof emailjs !== 'undefined' && emailjs.init) {
      emailjs.init(emailjsConfig.publicKey);
    }
  } catch (error) {
    console.warn('EmailJS ініціалізація не вдалася:', error);
  }
};

// Валідація конфігурації
export const validateConfig = (): string[] => {
  const errors: string[] = [];
  
  if (!emailjsConfig.serviceId) {
    errors.push('Service ID не вказано');
  }
  
  if (!emailjsConfig.templateId) {
    errors.push('Template ID не вказано');
  }
  
  if (!emailjsConfig.publicKey) {
    errors.push('Public Key не вказано');
  }
  
  return errors;
};

// Основна функція відправки
export const sendEmail = async (formData: {
  name: string;
  email: string;
  subject?: string;
  message: string;
}) => {
  try {
    // Ініціалізуємо EmailJS
    initEmailJS();
    
    // Валідуємо конфігурацію
    const configErrors = validateConfig();
    if (configErrors.length > 0) {
      throw new Error(`Помилки конфігурації EmailJS: ${configErrors.join(', ')}`);
    }
    
    // Підготовляємо параметри для шаблону
    const templateParams = {
      from_name: formData.name || 'Невказано',
      from_email: formData.email || 'Невказано',
      subject: formData.subject || 'Без теми',
      message: formData.message || 'Порожнє повідомлення',
      to_email: emailTemplate.to_email,
      sent_date: new Date().toLocaleString('uk-UA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      user_ip: 'Приховано для безпеки',
    };
    
    console.log('Відправляємо email з параметрами:', templateParams);
    
    // Відправляємо email
    const result = await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      templateParams
    );
    
    console.log('EmailJS результат:', result);
    
    if (result.status === 200) {
      return { success: true, message: 'Повідомлення успішно надіслано!' };
    } else {
      throw new Error(`Неочікуваний статус: ${result.status}`);
    }
    
  } catch (error: any) {
    console.error('Помилка відправки email:', error);
    
    // Обробляємо різні типи помилок
    let errorMessage = 'Невідома помилка при відправці';
    
    if (error.status === 412) {
      errorMessage = 'Помилка валідації даних. Перевірте налаштування EmailJS.';
    } else if (error.status === 400) {
      errorMessage = 'Неправильні параметри запиту.';
    } else if (error.status === 401) {
      errorMessage = 'Неправильний Public Key.';
    } else if (error.status === 404) {
      errorMessage = 'Service ID або Template ID не знайдено.';
    } else if (error.message) {
      errorMessage = error.message;
    }
    
    return { success: false, message: errorMessage };
  }
};

// Fallback функція (mailto)
export const sendEmailFallback = (formData: {
  name: string;
  email: string;
  subject?: string;
  message: string;
}) => {
  const subject = encodeURIComponent(`Портфоліо: ${formData.subject || 'Без теми'}`);
  const body = encodeURIComponent(`Нове повідомлення з портфоліо сайту



Від: ${formData.name || 'Невказано'}
Email: ${formData.email || 'Невказано'}
Тема: ${formData.subject || 'Без теми'}



Повідомлення:
${formData.message || 'Порожнє повідомлення'}



---
Надіслано: ${new Date().toLocaleString('uk-UA')}
Від: Портфоліо сайт dezmolio`);

  window.location.href = `mailto:${emailTemplate.to_email}?subject=${subject}&body=${body}`;
  
  return { success: true, message: 'Лист відкривається у вашому поштовому клієнті!' };
};

