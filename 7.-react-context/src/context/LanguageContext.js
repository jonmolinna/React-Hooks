import { createContext, useState } from 'react';

const LanguageContext = createContext();

const initialLanguage = "es";
const translations = {
    es: {
        headerTitle: "Mi aplicacion CON Context API",
        headerSubtitle: "Mi cabecera",
        headerLight: "Claro",
        headerDark: "Oscuro",
        buttonLogin: "Iniciar Sesión",
        buttonLogout: "Cerrar Sesion",
        mainWelcome: "Bievenido invitado",
        mainHello: "Hola Usuario",
        mainContent: "Mi Contenido principal",
        footerTitle: "Mi pie de pagina",
    },
    en: {
        headerTitle: "My application with Context API",
        headerSubtitle: "My header",
        headerLight: "Light",
        headerDark: "Dark",
        buttonLogout: "Logout",
        mainWelcome: "Welcome Guest",
        mainHello: "Hello User",
        mainContent: "My main content",
        footerTitle: "My footer"
    },
};

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(initialLanguage);
    const [texts, setTexts] = useState(translations[language]);

    const handleLanguage = (e) => {
        //console.log(e.target.value);
        if(e.target.value === "es"){
            setLanguage("es");
            setTexts(translations.es)
        } else {
            setLanguage("en");
            setTexts(translations.en)
        }
    };

    const data = { texts, handleLanguage };

    return <LanguageContext.Provider value={data}>
        { children }
    </LanguageContext.Provider>
};

export { LanguageProvider };

export default LanguageContext;