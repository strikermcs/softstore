
import ru from '../locales/ru.json'
import ua from '../locales/ua.json'
import en from '../locales/en.json'

const locales = {
    'ru-Ru': ru,
    'en-Us': en,
    'ua-Ua': ua
}


export default function localizeFilter(key){
    const locale = 'ru-Ru'
    return locales[locale][key] || `[Localize error]: key ${key} not found`
}