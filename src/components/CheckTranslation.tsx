import { useTranslation } from 'react-i18next';

const CheckTranslation = () => {
  const { t, i18n } = useTranslation('translation');

  return (
    <div>
      <h1>{t('app.title')}</h1>
      <p>{t('app.description')}</p>
      <button onClick={() => i18n.changeLanguage('ca')}>Català</button>
      <button onClick={() => i18n.changeLanguage('en')}>English</button>
      <button onClick={() => i18n.changeLanguage('es')}>Español</button>
    </div>
  );
};

export default CheckTranslation;
