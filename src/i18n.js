// i18n.js
import { createI18n } from 'vue-i18n';

// Funktion zum Laden von Lokalisierungsnachrichten
async function loadLocaleMessages() {
  const messages = {};

  // Dynamisch importieren der Lokalisierungsdateien
  const locales = import.meta.globEager('./locales/*.json');

  Object.keys(locales).forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales[key].default;
    }
  });

  return messages;
}

export default createI18n({
  legacy: false,
  locale: 'de',
  fallbackLocale: 'en',
  messages: await loadLocaleMessages(),
});
