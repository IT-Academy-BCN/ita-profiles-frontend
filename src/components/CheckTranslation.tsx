import { useTranslation } from 'react-i18next';
import { supportedLanguages } from '../lib/data/supportedLngs';

const CheckTranslation = () => {
  const {
    t,
    i18n: { changeLanguage: tr },
  } = useTranslation('translation');

  return (
    <div className="prose flex flex-col justify-center items-center gap-4 m-4">
      <h2 className="underline underline-offset-8">{t('project.title')}</h2>
      <p className="italic">{t('project.description')}</p>
      <select
        defaultValue="ca"
        className="select select-accent w-full max-w-xs"
        onChange={({ target: { value } }) => tr(value)}
      >
        <option disabled value="Idioma / Language">
          Idioma / Language
        </option>
        {supportedLanguages.map(({ name, code, country_code }) => (
          <option key={country_code} value={code}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CheckTranslation;
