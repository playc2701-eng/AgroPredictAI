import React, { useState } from 'react';

const LanguageToggle = () => {
  const [language, setLanguage] = useState('ru'); // Default to Russian

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'ru' ? 'ky' : 'ru'));
  };

  return (
    <div>
      <button onClick={toggleLanguage}>
        {language === 'ru' ? 'Switch to Kyrgyz' : 'Кириги переключить'}
      </button>
      <p>{language === 'ru' ? 'Выбранный язык: Русский' : 'Тандалган тил: Кыргызча'}</p>
    </div>
  );
};

export default LanguageToggle;