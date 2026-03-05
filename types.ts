
export enum Language {
  IT = 'IT',
  EN = 'EN',
  DE = 'DE',
  FR = 'FR',
  ES = 'ES',
  PL = 'PL'
}

export interface SectionItem {
  id: string;
  title: Record<language, string="">;
  description: Record<language, string="">;
  icon: string;
  link?: string;
  category: 'checkin' | 'checkout' | 'rules' | 'wifi' | 'house' | 'local' | 'transport';
}

export interface GuideData {
  propertyName: string;
  hostName: string;
  hostImage: string;
  location: string;
  address: string;
  coordinates: { lat: number; lng: number };
  contacts: {
    phone: string;
    whatsapp: string;
    email: string;
    website?: string;
    instagram?: string;
  };
  wifi: {
    name: string;
    password: string;
  };
  sections: SectionItem[];
}

export interface TranslationSet {
  welcome: string;
  yourHost: string;
  copyWifi: string;
  copied: string;
  addressCopied: string;
  getDirections: string;
  contactHost: string;
  adminMode: string;
  guestView: string;
  saveChanges: string;
  magicPolish: string;
  arrival: string;
  departure: string;
  checkinInstructions: string;
  checkoutInstructions: string;
  checkoutChecklist: string;
  msgArriving: string;
  msgCheckout: string;
  msgHelp: string;
  leaveReview: string;
  reviewText: string;
  checklist: {
    lights: string;
    belongings: string;
    windows: string;
    keys: string;
    host: string;
  };
}

export const TRANSLATIONS: Record<language, translationset=""> = {
  [Language.IT]: {
    welcome: "Benvenuti a Nitto House",
    yourHost: "Il tuo Host",
    copyWifi: "Copia Password WiFi",
    copied: "Copiato!",
    addressCopied: "Indirizzo copiato!",
    getDirections: "Come arrivare",
    contactHost: "Contattaci",
    adminMode: "Modalità Gestore",
    guestView: "Vista Ospite",
    saveChanges: "Salva Modifiche",
    magicPolish: "Perfeziona con AI",
    arrival: "Arrivo",
    departure: "Partenza",
    checkinInstructions: "Istruzioni Check-in",
    checkoutInstructions: "Istruzioni Check-out",
    checkoutChecklist: "Prima di andare via",
    msgArriving: "Sto arrivando!",
    msgCheckout: "Ho fatto il check-out",
    msgHelp: "Ho bisogno di aiuto",
    leaveReview: "Lascia una recensione",
    reviewText: "Ti è piaciuto il soggiorno? Lasciaci 5 stelle!",
    checklist: {
      lights: "Spegnere tutte le luci e aria condizionata",
      belongings: "Non dimenticare nessun effetto personale",
      windows: "Chiudi tutte le finestre e le porte",
      keys: "Togliere la scheda bianca e con le chiavi lasciarle su una mensola",
      host: "Avvisa l'host della tua partenza"
    }
  },
  [Language.EN]: {
    welcome: "Welcome to Nitto House",
    yourHost: "Your Host",
    copyWifi: "Copy WiFi Password",
    copied: "Copied!",
    addressCopied: "Address copied!",
    getDirections: "Get Directions",
    contactHost: "Contact Us",
    adminMode: "Host Mode",
    guestView: "Guest View",
    saveChanges: "Save Changes",
    magicPolish: "Polish with AI",
    arrival: "Arrival",
    departure: "Departure",
    checkinInstructions: "Check-in Instructions",
    checkoutInstructions: "Check-out Instructions",
    checkoutChecklist: "Before you leave",
    msgArriving: "I am arriving!",
    msgCheckout: "I have checked out",
    msgHelp: "I need help",
    leaveReview: "Leave a review",
    reviewText: "Did you enjoy your stay? Leave us 5 stars!",
    checklist: {
      lights: "Turn off all lights and air conditioning",
      belongings: "Do not forget any personal belongings",
      windows: "Close all windows and doors",
      keys: "Remove the white card and leave it with the keys on a shelf",
      host: "Notify the host of your departure"
    }
  },
  [Language.DE]: {
    welcome: "Willkommen in der Nitto House",
    yourHost: "Ihr Gastgeber",
    copyWifi: "WLAN-Passwort kopieren",
    copied: "Kopiert!",
    addressCopied: "Adresse kopiert!",
    getDirections: "Anfahrt",
    contactHost: "Kontakt",
    adminMode: "Host-Modus",
    guestView: "Gast-Ansicht",
    saveChanges: "Änderungen speichern",
    magicPolish: "Mit KI verfeinern",
    arrival: "Anreise",
    departure: "Abreise",
    checkinInstructions: "Check-in Anweisungen",
    checkoutInstructions: "Check-out Anweisungen",
    checkoutChecklist: "Bevor Sie gehen",
    msgArriving: "Ich komme an!",
    msgCheckout: "Ich habe ausgecheckt",
    msgHelp: "Ich brauche Hilfe",
    leaveReview: "Bewertung abgeben",
    reviewText: "Hat es Ihnen gefallen? Hinterlassen Sie uns 5 Sterne!",
    checklist: {
      lights: "Schalten Sie alle Lichter und die Klimaanlage aus",
      belongings: "Vergessen Sie keine persönlichen Gegenstände",
      windows: "Schließen Sie alle Fenster und Türen",
      keys: "Entfernen Sie die weiße Karte und lassen Sie sie mit den Schlüsseln auf einem Regal",
      host: "Benachrichtigen Sie den Gastgeber über Ihre Abreise"
    }
  },
  [Language.FR]: {
    welcome: "Bienvenue à Nitto House",
    yourHost: "Votre Hôte",
    copyWifi: "Copier le mot de passe WiFi",
    copied: "Copié !",
    addressCopied: "Adresse copiée !",
    getDirections: "Comment arriver",
    contactHost: "Contactez-nous",
    adminMode: "Mode Hôte",
    guestView: "Vue Invité",
    saveChanges: "Enregistrer les modifications",
    magicPolish: "Peaufiner avec l'IA",
    arrival: "Arrivée",
    departure: "Départ",
    checkinInstructions: "Instructions d'arrivée",
    checkoutInstructions: "Instructions de départ",
    checkoutChecklist: "Avant de partir",
    msgArriving: "J'arrive !",
    msgCheckout: "J'ai fait le check-out",
    msgHelp: "J'ai besoin d'aide",
    leaveReview: "Laisser un avis",
    reviewText: "Vous avez aimé votre séjour ? Laissez-nous 5 étoiles !",
    checklist: {
      lights: "Éteignez toutes les lumières et la climatisation",
      belongings: "N'oubliez aucun effet personnel",
      windows: "Fermez toutes les fenêtres et portes",
      keys: "Retirez la carte blanche et laissez-la avec les clés sur une étagère",
      host: "Informez l'hôte de votre départ"
    }
  },
  [Language.ES]: {
    welcome: "Bienvenidos a Nitto House",
    yourHost: "Tu Anfitrión",
    copyWifi: "Copiar contraseña WiFi",
    copied: "¡Copiado!",
    addressCopied: "¡Dirección copiada!",
    getDirections: "Cómo llegar",
    contactHost: "Contáctanos",
    adminMode: "Modo Anfitrión",
    guestView: "Vista Huésped",
    saveChanges: "Guardar cambios",
    magicPolish: "Perfeccionar con IA",
    arrival: "Llegada",
    departure: "Salida",
    checkinInstructions: "Instrucciones de llegada",
    checkoutInstructions: "Instrucciones de salida",
    checkoutChecklist: "Antes de irte",
    msgArriving: "¡Estoy llegando!",
    msgCheckout: "He hecho el check-out",
    msgHelp: "Necesito ayuda",
    leaveReview: "Dejar una reseña",
    reviewText: "¿Te gustó tu estancia? ¡Déjanos 5 estrellas!",
    checklist: {
      lights: "Apague todas las luces y el aire acondicionado",
      belongings: "No olvide ningún efecto personal",
      windows: "Cierre todas las ventanas y puertas",
      keys: "Retire la tarjeta blanca y déjela con las llaves en un estante",
      host: "Avise al anfitrión de su salida"
    }
  },
  [Language.PL]: {
    welcome: "Witamy w Nitto House",
    yourHost: "Twój Gospodarz",
    copyWifi: "Kopiuj hasło WiFi",
    copied: "Skopiowano!",
    addressCopied: "Adres skopiowany!",
    getDirections: "Jak dojechać",
    contactHost: "Skontaktuj się z nami",
    adminMode: "Tryb Gospodarza",
    guestView: "Widok Gościa",
    saveChanges: "Zapisz zmiany",
    magicPolish: "Popraw z AI",
    arrival: "Przyjazd",
    departure: "Wyjazd",
    checkinInstructions: "Instrukcje zameldowania",
    checkoutInstructions: "Instrukcje wymeldowania",
    checkoutChecklist: "Zanim wyjedziesz",
    msgArriving: "Przyjeżdżam!",
    msgCheckout: "Wymeldowałem się",
    msgHelp: "Potrzebuję pomocy",
    leaveReview: "Zostaw opinię",
    reviewText: "Podobał Ci się pobyt? Zostaw nam 5 gwiazdek!",
    checklist: {
      lights: "Wyłącz wszystkie światła i klimatyzację",
      belongings: "Nie zapomnij żadnych rzeczy osobistych",
      windows: "Zamknij wszystkie okna i drzwi",
      keys: "Wyjmij białą kartę i zostaw ją wraz z kluczami na półce",
      host: "Powiadom gospodarza o swoim wyjeździe"
    }
  }
};