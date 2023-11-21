import { useTranslation } from 'react-i18next';

const CheckTranslation = () => {
  const { t, i18n: { changeLanguage :tr} } = useTranslation('translation');

  return (
    <div className="prose flex flex-col justify-center items-center gap-4 m-4">
      <h2 className='underline underline-offset-8'>{t('project.title')}</h2>
      <p className="italic">{t('project.description')}</p>
      <div className="space-x-4">
        <button
          className="btn btn-accent btn-outline "
          onClick={() => tr('ca')}
        >
          Català
        </button>
        <button
          className="btn btn-accent btn-outline"
          onClick={() => tr('en')}
        >
          English
        </button>
        <button
          className="btn btn-accent btn-outline"
          onClick={() => tr('es')}
        >
          Español
        </button>
      </div>
    </div>
  );
};

export default CheckTranslation;
