import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NoticeCard from './NoticeCard';
import LanguageSelector from './LanguageSelector';
import { translateText } from '../../utils/translation';
import { getDateOptions } from '../../utils/dateUtils';

const ViewNotices = () => {
  const [notices, setNotices] = useState([]);
  const [originalNotices, setOriginalNotices] = useState([]);
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState({});
  const [loading, setLoading] = useState(false);

  const staticContent = {
    notices: "Notices",
    posted: "Posted:",
    viewNotice: "View Notice",
    deadline: "Deadline:"
  };

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/notices');
        setOriginalNotices(response.data);
        if (language === 'en') setNotices(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNotices();
  }, [language]);

  useEffect(() => {
    const loadTranslations = async () => {
      if (language === 'en') {
        setTranslations({});
        setNotices(originalNotices);
        return;
      }

      if (!originalNotices.length) return;

      setLoading(true);
      const translatedStatic = {};
      
      for (const [key, value] of Object.entries(staticContent)) {
        translatedStatic[key] = await translateText(value, language);
      }

      const translatedNotices = await Promise.all(
        originalNotices.map(async notice => ({
          ...notice,
          translatedTitle: await translateText(notice.title, language)
        }))
      );

      setTranslations(translatedStatic);
      setNotices(translatedNotices);
      setLoading(false);
    };

    loadTranslations();
  }, [language, originalNotices]);

  const sortedNotices = [...notices].sort((a, b) => 
    new Date(b.postedDate) - new Date(a.postedDate)
  );

  const handleViewNotice = (pdfLink) => {
    window.open(pdfLink, '_blank');
  };

  return (
    <div className="min-h-screen my-28 font-inter">
      <div className="flex justify-between items-center px-12 mb-8">
        <span className="text-2xl font-bold">
          {translations.notices || staticContent.notices}
        </span>
        <LanguageSelector 
          language={language}
          setLanguage={setLanguage}
          loading={loading}
        />
      </div>

      {loading && (
        <div className="text-center py-8">Loading translations...</div>
      )}

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8">
          {sortedNotices.map((notice, index) => (
            <NoticeCard
              key={notice._id}
              notice={notice}
              language={language}
              translations={translations}
              staticContent={staticContent}
              handleViewNotice={handleViewNotice}
              dateOptions={getDateOptions(language)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewNotices;