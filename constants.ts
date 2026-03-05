import { GuideData, Language } from './types';

export const INITIAL_GUIDE_DATA: GuideData = {
  propertyName: "Nitto House",
  hostName: "Domenico",
  hostImage: "https://lh3.googleusercontent.com/d/1rpoY5yZMqhUip1fPrje69AKGF78PN6wu",
  location: "Bari, Italy",
  address: "Via Giambattista Nitto de Rossi 15 B, 70123 Bari – Italia",
  coordinates: { lat: 41.1256, lng: 16.8614 },
  contacts: {
    phone: "+393472748733",
    whatsapp: "+393472748733",
    email: "nittohousebari@gmail.com",
    website: "www.nittohousebari.it",
    instagram: "@affittacamere_nittohouse_bari"
  },
  wifi: {
    name: "VODAFONE- A61671758",
    password: "BARI15bp3"
  },
  sections: [
    {
      id: "checkin",
      category: "checkin",
      icon: "key",
      title: {
        IT: "Check-in / Check-out",
        EN: "Check-in / Check-out",
        DE: "Check-in / Check-out",
        FR: "Check-in / Check-out",
        ES: "Check-in / Check-out",
        PL: "Zameldowanie / Wymeldowanie"
      },
      description: {
        IT: "Il giorno del tuo arrivo potrai accedere in struttura con un codice inviato giorni prima o sarai accolto direttamente da me. Check-in dalle 13:30. ||| Potrete lasciare l’appartamento autonomamente entro le 10:30, lasciando le chiavi sul tavolo nella stanza e chiudendo la porta della camera e dell'appartamento normalmente. Se desideri un check-out posticipato, contattami.",
        EN: "On the day of your arrival, you can access the property with a code sent days before or you will be welcomed directly by me. Check-in from 1:30 PM. ||| You can leave the apartment independently by 10:30 AM, leaving the keys on the table in the room and closing the room and apartment doors normally. If you want a late check-out, contact me.",
        DE: "Am Tag Ihrer Ankunft erhalten Sie Zugang zur Unterkunft mit einem Code, der Ihnen Tage zuvor zugesandt wurde, oder Sie werden direkt von mir empfangen. Check-in ab 13:30 Uhr. ||| Sie können das Apartment bis 10:30 Uhr selbstständig verlassen, indem Sie die Schlüssel auf dem Tisch im Zimmer lassen und die Zimmer- und Wohnungstüren normal schließen. Wenn Sie einen späten Check-out wünschen, kontaktieren Sie mich.",
        FR: "Le jour de votre arrivée, vous pourrez accéder à la propriété avec un code envoyé quelques jours avant ou vous serez accueilli directement par moi. Check-in à partir de 13h30. ||| Vous pouvez quitter l'appartement de manière autonome avant 10h30, en laissant les clés sur la table dans la chambre et en fermant les portes de la chambre et de l'appartement normalement. Si vous souhaitez un départ tardif, contactez-moi.",
        ES: "El día de su llegada, podrá acceder a la propiedad con un código enviado días antes o será recibido directamente por mí. Check-in a partir de las 13:30. ||| Puede dejar el apartamento de forma independiente antes de las 10:30, dejando las llaves sobre la mesa de la habitación y cerrando las puertas de la habitación y del apartamento normalmente. Si desea un check-out tardío, contácteme.",
        PL: "W dniu przyjazdu możesz uzyskać dostęp do obiektu za pomocą kodu wysłanego kilka dni wcześniej lub zostaniesz powitany bezpośrednio przeze mnie. Zameldowanie od 13:30. ||| Możesz samodzielnie opuścić apartament do godziny 10:30, zostawiając klucze na stole w pokoju i normalnie zamykając drzwi pokoju oraz apartamentu. Jeśli chcesz późne wymeldowanie, skontaktuj się ze mną."
      }
    },
    {
      id: "wifi",
      category: "wifi",
      icon: "wifi",
      title: {
        IT: "Connessione WiFi",
        EN: "WiFi Connection",
        DE: "WLAN-Verbindung",
        FR: "Connexion WiFi",
        ES: "Conexión WiFi",
        PL: "Połączenie WiFi"
      },
      description: {
        IT: "Dettagli WiFi",
        EN: "WiFi Details",
        DE: "WLAN-Details",
        FR: "Détails WiFi",
        ES: "Detalles WiFi",
        PL: "Szczegóły WiFi"
      }
    },
    {
      id: "services",
      category: "house",
      icon: "clipboard-list",
      title: {
        IT: "Servizi dell'appartamento",
        EN: "Apartment Services",
        DE: "Wohnungsservice",
        FR: "Services de l'appartement",
        ES: "Servicios del apartamento",
        PL: "Usługi w apartamencie"
      },
      description: {
        IT: "L'appartamento dispone di tutti i comfort necessari per un soggiorno piacevole:\n\n• Wifi Speed\n• Smart TV\n• Bollitore per The\n• Asciuga Capelli\n• Biancheria\n• Aria Condizionata\n\nNon trovi qualcosa di cui hai bisogno? Per favore, contattaci e se è qualcosa che abbiamo, te lo faremo sapere.",
        EN: "The apartment has all the necessary comforts for a pleasant stay:\n\n• Wifi Speed\n• Smart TV\n• Tea Kettle\n• Hair Dryer\n• Linens\n• Air Conditioning\n\nCan't find something you need? Please contact us and if it's something we have, we'll let you know.",
        DE: "Das Apartment verfügt über alle notwendigen Annehmlichkeiten für einen angenehmen Aufenthalt:\n\n• WLAN-Geschwindigkeit\n• Smart-TV\n• Wasserkocher\n• Haartrockner\n• Bettwäsche\n• Klimaanlage\n\nFinden Sie etwas nicht, was Sie brauchen? Bitte kontaktieren Sie uns und wenn wir es haben, lassen wir es Sie wissen.",
        FR: "L'appartement dispose de tout le confort nécessaire pour un séjour agréable :\n\n• Vitesse Wifi\n• Smart TV\n• Bouilloire à thé\n• Sèche-cheveux\n• Linge de maison\n• Climatisation\n\nVous ne trouvez pas quelque chose dont vous avez besoin ? Veuillez nous contacter et si c'est quelque chose que nous avons, nous vous le ferons savoir.",
        ES: "El apartamento cuenta con todas las comodidades necesarias para una estancia agradable:\n\n• Velocidad Wifi\n• Smart TV\n• Hervidor de té\n• Secador de pelo\n• Ropa de cama\n• Aire acondicionado\n\n¿No encuentras algo que necesitas? Por favor contáctanos y si es algo que tenemos, te lo haremos saber.",
        PL: "Apartament posiada wszystkie niezbędne udogodnienia dla przyjemnego pobytu:\n\n• Szybkie WiFi\n• Smart TV\n• Czajnik do herbaty\n• Suszarka do włosów\n• Pościel\n• Klimatyzacja\n\nNie możesz znaleźć czegoś, czego potrzebujesz? Skontaktuj się z nami, a jeśli to mamy, damy Ci znać."
      }
    },
    {
      id: "location_instructions",
      category: "house",
      icon: "map-pin",
      title: {
        IT: "Posizione e Istruzioni Utili",
        EN: "Location and Useful Instructions",
        DE: "Lage und nützliche Hinweise",
        FR: "Emplacement et instructions utiles",
        ES: "Ubicación e instrucciones útiles",
        PL: "Lokalizacja i przydatne instrukcje"
      },
      description: {
        IT: "VIA GIAMBATTISTA NITTO DE ROSSI 15 B, 70123 BARI – ITALIA\n(No, Via De Rossi è una strada diversa)\n\n• Citofonare a: NITTO - TROTTA, si aprirà il portone in automatico.\n• Terzo Piano, potrete utilizzare l'ascensore.\n• CHIUDERE BENE LE TRE PORTE DELL'ASCENSORE.\n• INSERITE CODICE PORTA che riceverete da me.\n• CAMERA NUMERO che riceverete da me.\n\nNella vostra camera troverete: la chiave della stanza (rossa), la chiave della porta dell'appartamento (blu), la chiave dell'ascensore e del portone.\n\nRegistrazione obbligatoria dei documenti per il comune di Bari e alla Polizia di Stato, entro il giorno del check in.\n\nAndare in giro:\nTi trovi nel cuore di BARI, Puglia. Il quartiere è noto per la sua vicinanza a ristoranti famosi, parchi per famiglie e un forte senso di sicurezza. È possibile raggiungere a piedi, in pochi minuti, tutte le vie del centro e dello shopping della città e ancora Bari Vecchia ed il mare. Tuttavia siamo anche molto vicini alle principali linee di autobus che ti porteranno ovunque.",
        EN: "VIA GIAMBATTISTA NITTO DE ROSSI 15 B, 70123 BARI – ITALY\n(No, Via De Rossi is a different street)\n\n• Intercom: NITTO - TROTTA, the door will open automatically.\n• Third Floor, you can use the elevator.\n• CLOSE THE THREE ELEVATOR DOORS PROPERLY.\n• ENTER DOOR CODE that you will receive from me.\n• ROOM NUMBER that you will receive from me.\n\nIn your room you will find: the room key (red), the apartment door key (blue), the elevator and main door key.\n\nMandatory registration of documents for the municipality of Bari and the State Police, by the day of check-in.\n\nGetting around:\nYou are in the heart of BARI, Puglia. The neighborhood is known for its proximity to famous restaurants, family parks and a strong sense of security. You can reach on foot, in a few minutes, all the downtown and shopping streets of the city and also Bari Vecchia and the sea. However, we are also very close to the main bus lines that will take you anywhere.",
        DE: "VIA GIAMBATTISTA NITTO DE ROSSI 15 B, 70123 BARI – ITALIEN\n(Nein, Via De Rossi ist eine andere Straße)\n\n• Gegensprechanlage: NITTO - TROTTA, die Tür öffnet sich automatisch.\n• Dritter Stock, Sie können den Aufzug benutzen.\n• SCHLIESSEN SIE DIE DREI AUFZUGSTÜREN RICHTIG.\n• GEBEN SIE DEN TÜRPIN EIN, den Sie von mir erhalten.\n• ZIMMERNUMMER, die Sie von mir erhalten.\n\nIn Ihrem Zimmer finden Sie: den Zimmerschlüssel (rot), den Wohnungstürschlüssel (blau), den Aufzugs- und Haustürschlüssel.\n\nObligatorische Registrierung von Dokumenten für die Gemeinde Bari und die Staatspolizei bis zum Tag des Check-ins.\n\nUnterwegs:\nSie befinden sich im Herzen von BARI, Apulien. Das Viertel ist bekannt für seine Nähe zu berühmten Restaurants, Familienparks und ein starkes Sicherheitsgefühl. Sie erreichen zu Fuß in wenigen Minuten alle Innenstadt- und Einkaufsstraßen der Stadt sowie Bari Vecchia und das Meer. Wir sind jedoch auch sehr nah an den wichtigsten Buslinien, die Sie überall hinbringen.",
        FR: "VIA GIAMBATTISTA NITTO DE ROSSI 15 B, 70123 BARI – ITALIE\n(Non, Via De Rossi est une rue différente)\n\n• Interphone : NITTO - TROTTA, la porte s'ouvrira automatiquement.\n• Troisième étage, vous pouvez utiliser l'ascenseur.\n• FERMEZ CORRECTEMENT LES TROIS PORTES DE L'ASCENSEUR.\n• ENTREZ LE CODE DE LA PORTE que vous recevrez de moi.\n• NUMÉRO DE CHAMBRE que vous recevrez de moi.\n\nDans votre chambre, vous trouverez : la clé de la chambre (rouge), la clé de la porte de l'appartement (bleue), la clé de l'ascenseur et de la porte principale.\n\nEnregistrement obligatoire des documents pour la municipalité de Bari et la police d'État, au plus tard le jour de l'enregistrement.\n\nSe déplacer :\nVous êtes au cœur de BARI, dans les Pouilles. Le quartier est connu pour sa proximité avec des restaurants célèbres, des parcs familiaux et un fort sentiment de sécurité. Vous pouvez rejoindre à pied, en quelques minutes, toutes les rues du centre-ville et commerçantes de la ville, ainsi que Bari Vecchia et la mer. Cependant, nous sommes également très proches des principales lignes de bus qui vous emmèneront partout.",
        ES: "VIA GIAMBATTISTA NITTO DE ROSSI 15 B, 70123 BARI – ITALIA\n(No, Via De Rossi es una calle diferente)\n\n• Intercomunicador: NITTO - TROTTA, la puerta se abrirá automáticamente.\n• Tercer piso, puede usar el ascensor.\n• CIERRE BIEN LAS TRES PUERTAS DEL ASCENSOR.\n• INGRESE EL CÓDIGO DE LA PUERTA que recibirá de mí.\n• NÚMERO DE HABITACIÓN que recibirá de mí.\n\nEn su habitación encontrará: la llave de la habitación (roja), la llave de la puerta del apartamento (azul), la llave del ascensor y de la puerta principal.\n\nRegistro obligatorio de documentos para el municipio de Bari y la Policía de Estado, a más tardar el día del check-in.\n\nMoverse:\nEstás en el corazón de BARI, Puglia. El barrio es conocido por su proximidad a famosos restaurantes, parques familiares y un fuerte sentido de seguridad. Se puede llegar a pie, en pocos minutos, a todas las calles del centro y comerciales de la ciudad y también a Bari Vecchia y al mar. Sin embargo, también estamos muy cerca de las principales líneas de autobús que te llevarán a cualquier parte.",
        PL: "VIA GIAMBATTISTA NITTO DE ROSSI 15 B, 70123 BARI – WŁOCHY\n(Nie, Via De Rossi to inna ulica)\n\n• Domofon: NITTO - TROTTA, drzwi otworzą się automatycznie.\n• Trzecie piętro, możesz skorzystać z windy.\n• ZAMKNIJ DOKŁADNIE TRZY DRZWI WINDY.\n• WPROWADŹ KOD DO DRZWI, który otrzymasz ode mnie.\n• NUMER POKOJU, który otrzymasz ode mnie.\n\nW swoim pokoju znajdziesz: klucz do pokoju (czerwony), klucz do drzwi apartamentu (niebieski), klucz do windy i głównych drzwi.\n\nObowiązkowa rejestracja dokumentów dla gminy Bari i Policji Państwowej, najpóźniej w dniu zameldowania.\n\nPoruszanie się:\nZnajdujesz się w sercu BARI, w Apulii. Okolica znana jest z bliskości słynnych restauracji, parków rodzinnych i silnego poczucia bezpieczeństwa. Możesz dotrzeć pieszo w kilka minut do wszystkich ulic w centrum i ulic handlowych miasta, a także do Bari Vecchia i morza. Jesteśmy jednak również bardzo blisko głównych linii autobusowych, które zabiorą Cię wszędzie."
      }
    },
    {
      id: "rules",
      category: "rules",
      icon: "clipboard-list",
      title: {
        IT: "Regole della Casa",
        EN: "House Rules",
        DE: "Hausregeln",
        FR: "Règlement Intérieur",
        ES: "Reglas de la Casa",
        PL: "Zasady Domu"
      },
      description: {
        IT: "1. NON FUMARE: Si prega di non fumare o svapare in casa.\n2. NO OSPITI: È tassativamente vietato introdurre persone di cui non sia stato registrato il documento d'identità e senza il consenso della struttura.\n3. NO ANIMALI: Vietato l'ingresso agli animali domestici.\n4. NO FESTE O EVENTI: Non sono ammesse feste o eventi. L'uso di droghe e il consumo eccessivo di alcol sono vietati.\n5. DANNI O GUASTI: Si prega di segnalare immediatamente all'host eventuali danni o malfunzionamenti in modo da poter riparare o sostituire l'oggetto danneggiato.",
        EN: "1. NO SMOKING: Please do not smoke or vape inside the house.\n2. NO GUESTS: It is strictly forbidden to bring in unregistered guests without host consent. ID registration is mandatory.\n3. NO PETS: Pets are not allowed.\n4. NO PARTIES OR EVENTS: Parties or events are not allowed. Drug use and excessive alcohol consumption are prohibited.\n5. DAMAGES OR FAULTS: Please report any damage or malfunctions to the host immediately.",
        DE: "1. RAUCHVERBOT: Bitte nicht im Haus rauchen oder dampfen.\n2. KEINE GÄSTE: Es ist strengstens verboten, nicht registrierte Personen ohne Zustimmung des Gastgebers mitzubringen.\n3. KEINE HAUSTIERE: Haustiere sind nicht gestattet.\n4. KEINE PARTYS: Partys oder Veranstaltungen sind nicht erlaubt. Drogenkonsum und übermäßiger Alkoholkonsum sind verboten.\n5. SCHÄDEN ODER DEFEKTE: Bitte melden Sie Schäden oder Störungen sofort dem Gastgeber.",
        FR: "1. NE PAS FUMER : Veuillez ne pas fumer ou vapoter dans la maison.\n2. PAS D'INVITÉS : Il est strictement interdit de faire entrer des personnes non enregistrées sans le consentement de l'hôte.\n3. PAS D'ANIMAUX : Les animaux domestiques ne sont pas admis.\n4. PAS DE FÊTES : Les fêtes ou événements ne sont pas autorisés. L'usage de drogues et l'alcool excessif sont interdits.\n5. DOMMAGES : Veuillez signaler immédiatement tout dommage ou dysfonctionnement à l'hôte.",
        ES: "1. NO FUMAR: Por favor, no fume ni vapee en la casa.\n2. NO INVITADOS: Está terminantemente prohibido introducir personas no registradas sin el consentimiento del anfitrión.\n3. NO MASCOTAS: No se admiten mascotas.\n4. NO FIESTAS: No se permiten fiestas o eventos. El uso de drogas y el consumo excesivo de alcohol están prohibidos.\n5. DAÑOS O AVERÍAS: Por favor, informe inmediatamente al anfitrión sobre cualquier daño.",
        PL: "1. ZAKAZ PALENIA: Prosimy nie palić ani nie używać e-papierosów w domu.\n2. ZAKAZ GOŚCI: Surowo zabrania się wprowadzania niezarejestrowanych gości bez zgody gospodarza. Rejestracja dokumentu tożsamości jest obowiązkowa.\n3. ZAKAZ ZWIERZĄT: Zwierzęta nie są akceptowane.\n4. ZAKAZ IMPREZ: Imprezy lub wydarzenia są niedozwolone. Używanie narkotyków i nadmierne spożycie alkoholu są zabronione.\n5. USZKODZENIA LUB USTERKI: Prosimy o natychmiastowe zgłaszanie gospodarzowi wszelkich uszkodzeń lub usterek."
      }
    },
    {
      id: "faq",
      category: "rules",
      icon: "info",
      title: {
        IT: "FAQ",
        EN: "FAQ",
        DE: "FAQ",
        FR: "FAQ",
        ES: "FAQ",
        PL: "FAQ"
      },
      description: {
        IT: "• DEPOSITO BAGAGLI DISPONIBILE SE ARRIVO PRIMA DEL CHECK-IN O SE DEVO LASCIARE DOPO IL CHECK-OUT?\nSì, abbiamo un deposito bagagli disponibile per i nostri ospiti che arrivano prima dell'orario di check-in o che devono lasciare dopo l'orario di check-out. Contattaci in anticipo per organizzare i dettagli.\n\n• È POSSIBILE AVERE LE LENZUOLA E GLI ASCIUGAMANI EXTRA?\nSì, possiamo fornire lenzuola e asciugamani extra, tuttavia è previsto un costo aggiuntivo per questo servizio. Contattaci in anticipo.\n\n• OFFRITE UN SERVIZIO NAVETTA DA E PER L'AEROPORTO?\nSì, disponiamo di un servizio navetta da e per l'aeroporto per i nostri ospiti. Questo servizio è disponibile a pagamento su prenotazione. Contattaci almeno 48 ore prima del tuo arrivo.\n\n• OFFRITE IL SELF CHECK-IN IN CASO DI ARRIVO TARDIVO?\nSì, offriamo la possibilità di effettuare il self check-in. Prima del tuo arrivo, ti invieremo le istruzioni dettagliate su come accedere.",
        EN: "• LUGGAGE STORAGE AVAILABLE IF I ARRIVE BEFORE CHECK-IN OR NEED TO LEAVE AFTER CHECK-OUT?\nYes, we have luggage storage available for our guests arriving before check-in time or needing to leave after check-out time. Contact us in advance to arrange details.\n\n• IS IT POSSIBLE TO HAVE EXTRA SHEETS AND TOWELS?\nYes, we can provide extra sheets and towels, however there is an additional cost for this service. Contact us in advance.\n\n• DO YOU OFFER A SHUTTLE SERVICE TO AND FROM THE AIRPORT?\nYes, we have an airport shuttle service for our guests. This service is available for a fee upon reservation. Contact us at least 48 hours before your arrival.\n\n• DO YOU OFFER SELF CHECK-IN IN CASE OF LATE ARRIVAL?\nYes, we offer the possibility of self check-in. Before your arrival, we will send you detailed instructions on how to access.",
        DE: "• GEPÄCKAUFBEWAHRUNG VERFÜGBAR, WENN ICH VOR DEM CHECK-IN ANKOMME ODER NACH DEM CHECK-OUT ABREISEN MUSS?\nJa, wir haben eine Gepäckaufbewahrung für unsere Gäste, die vor der Check-in-Zeit anreisen oder nach der Check-out-Zeit abreisen müssen. Kontaktieren Sie uns im Voraus, um Details zu vereinbaren.\n\n• IST ES MÖGLICH, ZUSÄTZLICHE BETTWÄSCHE UND HANDTÜCHER ZU BEKOMMEN?\nJa, wir können zusätzliche Bettwäsche und Handtücher zur Verfügung stellen, für diesen Service fallen jedoch zusätzliche Kosten an. Kontaktieren Sie uns im Voraus.\n\n• BIETEN SIE EINEN SHUTTLE-SERVICE ZUM UND VOM FLUGHAFEN AN?\nJa, wir haben einen Flughafen-Shuttle-Service für unsere Gäste. Dieser Service ist gegen Gebühr nach Reservierung verfügbar. Kontaktieren Sie uns mindestens 48 Stunden vor Ihrer Ankunft.\n\n• BIETEN SIE SELF-CHECK-IN BEI SPÄTER ANKUNFT AN?\nJa, wir bieten die Möglichkeit des Self-Check-ins. Vor Ihrer Ankunft senden wir Ihnen detaillierte Anweisungen zum Zugang.",
        FR: "• DÉPÔT DE BAGAGES DISPONIBLE SI J'ARRIVE AVANT L'ENREGISTREMENT OU SI JE DOIS PARTIR APRÈS LE DÉPART ?\nOui, nous avons une consigne à bagages disponible pour nos clients arrivant avant l'heure d'enregistrement ou devant partir après l'heure de départ. Contactez-nous à l'avance pour organiser les détails.\n\n• EST-IL POSSIBLE D'AVOIR DES DRAPS ET DES SERVIETTES SUPPLÉMENTAIRES ?\nOui, nous pouvons fournir des draps et des serviettes supplémentaires, cependant il y a un coût supplémentaire pour ce service. Contactez-nous à l'avance.\n\n• PROPOSEZ-VOUS UN SERVICE DE NAVETTE DEPUIS ET VERS L'AÉROPORT ?\nOui, nous avons un service de navette aéroport pour nos clients. Ce service est disponible moyennant des frais sur réservation. Contactez-nous au moins 48 heures avant votre arrivée.\n\n• PROPOSEZ-VOUS LE SELF CHECK-IN EN CAS D'ARRIVÉE TARDIVE ?\nOui, nous offrons la possibilité du self check-in. Avant votre arrivée, nous vous enverrons des instructions détaillées sur la façon d'y accéder.",
        ES: "• ¿GUARDAEQUIPAJE DISPONIBLE SI LLEGO ANTES DEL CHECK-IN O NECESITO SALIR DESPUÉS DEL CHECK-OUT?\nSí, tenemos consigna de equipaje disponible para nuestros huéspedes que llegan antes de la hora de check-in o que necesitan salir después de la hora de check-out. Contáctenos con anticipación para organizar los detalles.\n\n• ¿ES POSIBLE TENER SÁBANAS Y TOALLAS EXTRA?\nSí, podemos proporcionar sábanas y toallas adicionales, sin embargo hay un costo adicional por este servicio. Contáctenos con anticipación.\n\n• ¿OFRECEN SERVICIO DE TRANSPORTE DESDE Y HACIA EL AEROPUERTO?\nSí, tenemos un servicio de enlace con el aeropuerto para nuestros huéspedes. Este servicio está disponible por un suplemento bajo reserva. Contáctenos al menos 48 horas antes de su llegada.\n\n• ¿OFRECEN SELF CHECK-IN EN CASO DE LLEGADA TARDÍA?\nSí, ofrecemos la posibilidad de self check-in. Antes de su llegada, le enviaremos instrucciones detalladas sobre cómo acceder.",
        PL: "• CZY JEST DOSTĘPNA PRZECHOWALNIA BAGAŻU, JEŚLI PRZYJADĘ PRZED ZAMELDOWANIEM LUB MUSZĘ WYJECHAĆ PO WYMELDOWANIU?\nTak, mamy przechowalnię bagażu dostępną dla naszych gości przyjeżdżających przed czasem zameldowania lub muszących wyjechać po czasie wymeldowania. Skontaktuj się z nami z wyprzedzeniem, aby ustalić szczegóły.\n\n• CZY MOŻNA OTRZYMAĆ DODATKOWĄ POŚCIEL I RĘCZNIKI?\nTak, możemy zapewnić dodatkową pościel i ręczniki, jednak za tę usługę pobierana jest dodatkowa opłata. Skontaktuj się z nami z wyprzedzeniem.\n\n• CZY OFERUJECIE USŁUGĘ TRANSFERU Z I NA LOTNISKO?\nTak, mamy usługę transferu lotniskowego dla naszych gości. Ta usługa jest dostępna za opłatą po wcześniejszej rezerwacji. Skontaktuj się z nami co najmniej 48 godzin przed przyjazdem.\n\n• CZY OFERUJECIE SAMODZIELNE ZAMELDOWANIE W PRZYPADKU PÓŹNEGO PRZYJAZDU?\nTak, oferujemy możliwość samodzielnego zameldowania. Przed przyjazdem wyślemy Ci szczegółowe instrukcje, jak uzyskać dostęp."
      }
    },
    {
      id: "supermarkets_list",
      category: "local",
      icon: "shopping-cart",
      title: {
        IT: "Supermercati",
        EN: "Supermarkets",
        DE: "Supermärkte",
        FR: "Supermarchés",
        ES: "Supermercados",
        PL: "Supermarkety"
      },
      description: {
        IT: "• PENNY MARKET\nVia Brigata Regina Bari\nTel: 800 90 12 90\n\n• SUPERMERCATO DOK\nVia Brigata Regina, 12 Bari\nTel: +39 080 579 70 15\n\n• ANGOLO DEI SAPORI\nVia Francesco Crispi, 171 Bari\nTel: +39 392 090 38 01",
        EN: "• PENNY MARKET\nVia Brigata Regina Bari\nTel: 800 90 12 90\n\n• SUPERMERCATO DOK\nVia Brigata Regina, 12 Bari\nTel: +39 080 579 70 15\n\n• ANGOLO DEI SAPORI\nVia Francesco Crispi, 171 Bari\nTel: +39 392 090 38 01",
        DE: "• PENNY MARKET\nVia Brigata Regina Bari\nTel: 800 90 12 90\n\n• SUPERMERCATO DOK\nVia Brigata Regina, 12 Bari\nTel: +39 080 579 70 15\n\n• ANGOLO DEI SAPORI\nVia Francesco Crispi, 171 Bari\nTel: +39 392 090 38 01",
        FR: "• PENNY MARKET\nVia Brigata Regina Bari\nTel: 800 90 12 90\n\n• SUPERMERCATO DOK\nVia Brigata Regina, 12 Bari\nTel: +39 080 579 70 15\n\n• ANGOLO DEI SAPORI\nVia Francesco Crispi, 171 Bari\nTel: +39 392 090 38 01",
        ES: "• PENNY MARKET\nVia Brigata Regina Bari\nTel: 800 90 12 90\n\n• SUPERMERCATO DOK\nVia Brigata Regina, 12 Bari\nTel: +39 080 579 70 15\n\n• ANGOLO DEI SAPORI\nVia Francesco Crispi, 171 Bari\nTel: +39 392 090 38 01",
        PL: "• PENNY MARKET\nVia Brigata Regina Bari\nTel: 800 90 12 90\n\n• SUPERMERCATO DOK\nVia Brigata Regina, 12 Bari\nTel: +39 080 579 70 15\n\n• ANGOLO DEI SAPORI\nVia Francesco Crispi, 171 Bari\nTel: +39 392 090 38 01"
      }
    },
    {
      id: "attractions",
      category: "local",
      icon: "camera",
      title: {
        IT: "Cose da fare",
        EN: "Things to do",
        DE: "Dinge zu tun",
        FR: "Choses à faire",
        ES: "Cosas que hacer",
        PL: "Rzeczy do zrobienia"
      },
      description: {
        IT: "• BARI VECCHIA: Esplora il suggestivo centro storico di Bari, con le sue stradine pittoresche e l'atmosfera autentica.\n• BASILICA DI SAN NICOLA: Visita questa importante basilica dedicata a San Nicola, ricca di storia e spiritualità.\n• CASTELLO NORMANNO SVEVO: Scopri il Castello Normanno Svevo, un'imponente fortezza che racconta secoli di storia.\n• TEATRO MARGHERITA: Visita il Museo Teatro Margherita, un luogo che unisce arte e storia nel cuore di Bari.\n• BARI SOTTERRANEA: Scendi nelle profondità di Bari sotterranea per esplorare un lato nascosto e affascinante della città.\n• LUNGOMARE: Passeggia lungo il suggestivo lungomare di Bari, godendo della vista sul mare e sull'orizzonte.\n• PIACERI DELL'ENTROTERRA: Scopri i tesori storico-culturali dei dintorni di Bari con visite a Altamura, Conversano, Mola e Alberobello.",
        EN: "• BARI VECCHIA: Explore the charming historic center of Bari, with its picturesque streets and authentic atmosphere.\n• BASILICA DI SAN NICOLA: Visit this important basilica dedicated to Saint Nicholas, rich in history and spirituality.\n• NORMAN-SWABIAN CASTLE: Discover the Norman-Swabian Castle, an imposing fortress that tells centuries of history.\n• TEATRO MARGHERITA: Visit the Teatro Margherita Museum, a place that combines art and history in the heart of Bari.\n• UNDERGROUND BARI: Descend into the depths of underground Bari to explore a hidden and fascinating side of the city.\n• SEAFRONT: Walk along the suggestive seafront of Bari, enjoying the view of the sea and the horizon.\n• HINTERLAND PLEASURES: Discover the historical-cultural treasures of the surroundings of Bari with visits to Altamura, Conversano, Mola and Alberobello.",
        DE: "• BARI VECCHIA: Erkunden Sie das charmante historische Zentrum von Bari mit seinen malerischen Straßen und seiner authentischen Atmosphäre.\n• BASILICA DI SAN NICOLA: Besuchen Sie diese wichtige Basilika, die dem Heiligen Nikolaus gewidmet ist und reich an Geschichte und Spiritualität ist.\n• NORMANNISCH-STAUFISCHE BURG: Entdecken Sie die normannisch-staufische Burg, eine imposante Festung, die Jahrhunderte der Geschichte erzählt.\n• TEATRO MARGHERITA: Besuchen Sie das Museum Teatro Margherita, ein Ort, der Kunst und Geschichte im Herzen von Bari verbindet.\n• UNTERIRDISCHES BARI: Steigen Sie in die Tiefen des unterirdischen Bari hinab, um eine verborgene und faszinierende Seite der Stadt zu erkunden.\n• MEERESPROMENADE: Spazieren Sie entlang der eindrucksvollen Meerespromenade von Bari und genießen Sie den Blick auf das Meer und den Horizont.\n• FREUDEN DES HINTERLANDES: Entdecken Sie die historisch-kulturellen Schätze der Umgebung von Bari bei Besuchen in Altamura, Conversano, Mola und Alberobello.",
        FR: "• BARI VECCHIA : Explorez le charmant centre historique de Bari, avec ses rues pittoresques et son atmosphère authentique.\n• BASILIQUE DE SAN NICOLA : Visitez cette importante basilique dédiée à Saint Nicolas, riche en histoire et en spiritualité.\n• CHÂTEAU NORMAND-SOUABE : Découvrez le château normand-souabe, une imposante forteresse qui raconte des siècles d'histoire.\n• TEATRO MARGHERITA : Visitez le musée Teatro Margherita, un lieu qui allie art et histoire au cœur de Bari.\n• BARI SOUTERRAIN : Descendez dans les profondeurs du Bari souterrain pour explorer une facette cachée et fascinante de la ville.\n• FRONT DE MER : Promenez-vous le long du suggestif front de mer de Bari, en profitant de la vue sur la mer et l'horizon.\n• PLAISIRS DE L'ARRIÈRE-PAYS : Découvrez les trésors historico-culturels des environs de Bari avec des visites à Altamura, Conversano, Mola et Alberobello.",
        ES: "• BARI VECCHIA: Explora el encantador centro histórico de Bari, con sus pintorescas calles y su auténtica atmósfera.\n• BASÍLICA DE SAN NICOLA: Visita esta importante basílica dedicada a San Nicolás, rica en historia y espiritualidad.\n• CASTILLO NORMANDO-SUABO: Descubre el Castillo Normando-Suabo, una imponente fortaleza que cuenta siglos de historia.\n• TEATRO MARGHERITA: Visita el Museo Teatro Margherita, un lugar que combina arte e historia en el corazón de Bari.\n• BARI SUBTERRÁNEO: Desciende a las profundidades de Bari subterráneo para explorar un lado oculto y fascinante de la ciudad.\n• PASEO MARÍTIMO: Pasea por el sugerente paseo marítimo de Bari, disfrutando de la vista del mar y el horizonte.\n• PLACERES DEL INTERIOR: Descubre los tesoros histórico-culturales de los alrededores de Bari con visitas a Altamura, Conversano, Mola y Alberobello.",
        PL: "• BARI VECCHIA: Odkryj urocze historyczne centrum Bari z malowniczymi uliczkami i autentyczną atmosferą.\n• BAZYLIKA ŚW. MIKOŁAJA: Odwiedź tę ważną bazylikę poświęconą św. Mikołajowi, bogatą w historię i duchowość.\n• ZAMEK NORMAŃSKO-SZWABSKI: Odkryj Zamek Normańsko-Szwabski, imponującą fortecę, która opowiada wieki historii.\n• TEATRO MARGHERITA: Odwiedź Muzeum Teatro Margherita, miejsce łączące sztukę i historię w sercu Bari.\n• PODZIEMNE BARI: Zejdź w głębiny podziemnego Bari, aby odkryć ukrytą i fascynującą stronę miasta.\n• PROMENADA: Spaceruj wzdłuż sugestywnej promenady w Bari, podziwiając widok na morze i horyzont.\n• PRZYJEMNOŚCI W GŁĘBI LĄDU: Odkryj historyczno-kulturowe skarby okolic Bari podczas wizyt w Altamura, Conversano, Mola i Alberobello."
      }
    },
    {
      id: "beaches",
      category: "local",
      icon: "beach",
      title: {
        IT: "Spiagge",
        EN: "Beaches",
        DE: "Strände",
        FR: "Plages",
        ES: "Playas",
        PL: "Plaże"
      },
      description: {
        IT: "Se desideri una giornata al mare, visita le spiagge vicine come Polignano, Monopoli o Giovinazzo per un'esperienza balneare indimenticabile.\n\nSpiagge a Bari:\n• PANE E POMODORO\nMaps: https://www.google.com/maps/search/?api=1&query=Spiaggia+Pane+e+Pomodoro+Bari\n\n• TORRE QUETTA\nMaps: https://www.google.com/maps/search/?api=1&query=Torre+Quetta+Bari\n\n• LIDO SAN FRANCESCO\nMaps: https://www.google.com/maps/search/?api=1&query=Lido+San+Francesco+Bari",
        EN: "If you want a day at the beach, visit nearby beaches like Polignano, Monopoli or Giovinazzo for an unforgettable seaside experience.\n\nBeaches in Bari:\n• PANE E POMODORO\nMaps: https://www.google.com/maps/search/?api=1&query=Spiaggia+Pane+e+Pomodoro+Bari\n\n• TORRE QUETTA\nMaps: https://www.google.com/maps/search/?api=1&query=Torre+Quetta+Bari\n\n• LIDO SAN FRANCESCO\nMaps: https://www.google.com/maps/search/?api=1&query=Lido+San+Francesco+Bari",
        DE: "Wenn Sie einen Tag am Strand verbringen möchten, besuchen Sie die nahe gelegenen Strände wie Polignano, Monopoli oder Giovinazzo für ein unvergessliches Stranderlebnis.\n\nStrände in Bari:\n• PANE E POMODORO\nMaps: https://www.google.com/maps/search/?api=1&query=Spiaggia+Pane+e+Pomodoro+Bari\n\n• TORRE QUETTA\nMaps: https://www.google.com/maps/search/?api=1&query=Torre+Quetta+Bari\n\n• LIDO SAN FRANCESCO\nMaps: https://www.google.com/maps/search/?api=1&query=Lido+San+Francesco+Bari",
        FR: "Si vous souhaitez passer une journée à la plage, visitez les plages voisines comme Polignano, Monopoli ou Giovinazzo pour une expérience balnéaire inoubliable.\n\nPlages à Bari :\n• PANE E POMODORO\nMaps: https://www.google.com/maps/search/?api=1&query=Spiaggia+Pane+e+Pomodoro+Bari\n\n• TORRE QUETTA\nMaps: https://www.google.com/maps/search/?api=1&query=Torre+Quetta+Bari\n\n• LIDO SAN FRANCESCO\nMaps: https://www.google.com/maps/search/?api=1&query=Lido+San+Francesco+Bari",
        ES: "Si desea un día en la playa, visite las playas cercanas como Polignano, Monopoli o Giovinazzo para una experiencia costera inolvidable.\n\nPlayas en Bari:\n• PANE E POMODORO\nMaps: https://www.google.com/maps/search/?api=1&query=Spiaggia+Pane+e+Pomodoro+Bari\n\n• TORRE QUETTA\nMaps: https://www.google.com/maps/search/?api=1&query=Torre+Quetta+Bari\n\n• LIDO SAN FRANCESCO\nMaps: https://www.google.com/maps/search/?api=1&query=Lido+San+Francesco+Bari",
        PL: "Jeśli masz ochotę na dzień na plaży, odwiedź pobliskie plaże, takie jak Polignano, Monopoli lub Giovinazzo, aby przeżyć niezapomniane nadmorskie wrażenia.\n\nPlaże w Bari:\n• PANE E POMODORO\nMaps: https://www.google.com/maps/search/?api=1&query=Spiaggia+Pane+e+Pomodoro+Bari\n\n• TORRE QUETTA\nMaps: https://www.google.com/maps/search/?api=1&query=Torre+Quetta+Bari\n\n• LIDO SAN FRANCESCO\nMaps: https://www.google.com/maps/search/?api=1&query=Lido+San+Francesco+Bari"
      }
    },
    {
      id: "eat",
      category: "local",
      icon: "utensils",
      title: {
        IT: "Ristoranti",
        EN: "Restaurants",
        DE: "Restaurants",
        FR: "Restaurants",
        ES: "Restaurantes",
        PL: "Restauracje"
      },
      description: {
        IT: "• PIZZERIA - AL BUCO\nVia Giambattista Nitto de Rossi, 2/A BARI\n+39 080 574 0113\nMaps: https://www.google.com/maps/search/?api=1&query=Pizzeria+Al+Buco+Bari\n\n• RISTORANTE SELF SERVICE EL PEDRO\nCorso Vittorio Emanuele II, 15 BARI\n+39 080 521 1294\nMaps: https://www.google.com/maps/search/?api=1&query=Ristorante+Self+Service+El+Pedro+Bari\n\n• RISTORANTE - PICCINNI 28\nVia Niccolò Piccinni, 28 BARI\n+39 080 528 9457\nMaps: https://www.google.com/maps/search/?api=1&query=Ristorante+Piccinni+28+Bari\n\n• TRATTORIA - LA TANA DEL POLPO\nStrada Vallisa, 50 Bari\n+39 080 975 3338\nMaps: https://www.google.com/maps/search/?api=1&query=Trattoria+La+Tana+del+Polpo+Bari\n\n• PANZEROTTI - VENEZIA 40\nVia Venezia, 40 Bari\n+39 340 812 91 72\nMaps: https://www.google.com/maps/search/?api=1&query=Panzerotti+Venezia+40+Bari\n\n• PIZZERIA - DI COSIMO MAURO\nLargo Albicocca, 19 Bari\n+39 080 521 8740\nMaps: https://www.google.com/maps/search/?api=1&query=Pizzeria+Di+Cosimo+Mauro+Bari\n\n• MARIA DELLE SGAGLIOZZE\nStr. delle Crociate, 13 Bari\nMaps: https://www.google.com/maps/search/?api=1&query=Maria+delle+Sgagliozze+Bari",
        EN: "• PIZZERIA - AL BUCO\nVia Giambattista Nitto de Rossi, 2/A BARI\n+39 080 574 0113\nMaps: https://www.google.com/maps/search/?api=1&query=Pizzeria+Al+Buco+Bari\n\n• RISTORANTE SELF SERVICE EL PEDRO\nCorso Vittorio Emanuele II, 15 BARI\n+39 080 521 1294\nMaps: https://www.google.com/maps/search/?api=1&query=Ristorante+Self+Service+El+Pedro+Bari\n\n• RISTORANTE - PICCINNI 28\nVia Niccolò Piccinni, 28 BARI\n+39 080 528 9457\nMaps: https://www.google.com/maps/search/?api=1&query=Ristorante+Piccinni+28+Bari\n\n• TRATTORIA - LA TANA DEL POLPO\nStrada Vallisa, 50 Bari\n+39 080 975 3338\nMaps: https://www.google.com/maps/search/?api=1&query=Trattoria+La+Tana+del+Polpo+Bari\n\n• PANZEROTTI - VENEZIA 40\nVia Venezia, 40 Bari\n+39 340 812 91 72\nMaps: https://www.google.com/maps/search/?api=1&query=Panzerotti+Venezia+40+Bari\n\n• PIZZERIA - DI COSIMO MAURO\nLargo Albicocca, 19 Bari\n+39 080 521 8740\nMaps: https://www.google.com/maps/search/?api=1&query=Pizzeria+Di+Cosimo+Mauro+Bari\n\n• MARIA DELLE SGAGLIOZZE\nStr. delle Crociate, 13 Bari\nMaps: https://www.google.com/maps/search/?api=1&query=Maria+delle+Sgagliozze+Bari",
        DE: "• PIZZERIA - AL BUCO\nVia Giambattista Nitto de Rossi, 2/A BARI\n+39 080 574 0113\nMaps: https://www.google.com/maps/search/?api=1&query=Pizzeria+Al+Buco+Bari\n\n• RISTORANTE SELF SERVICE EL PEDRO\nCorso Vittorio Emanuele II, 15 BARI\n+39 080 521 1294\nMaps: https://www.google.com/maps/search/?api=1&query=Ristorante+Self+Service+El+Pedro+Bari\n\n• RISTORANTE - PICCINNI 28\nVia Niccolò Piccinni, 28 BARI\n+39 080 528 9457\nMaps: https://www.google.com/maps/search/?api=1&query=Ristorante+Piccinni+28+Bari\n\n• TRATTORIA - LA TANA DEL POLPO\nStrada Vallisa, 50 Bari\n+39 080 975 3338\nMaps: https://www.google.com/maps/search/?api=1&query=Trattoria+La+Tana+del+Polpo+Bari\n\n• PANZEROTTI - VENEZIA 40\nVia Venezia, 40 Bari\n+39 340 812 91 72\nMaps: https://www.google.com/maps/search/?api=1&query=Panzerotti+Venezia+40+Bari\n\n• PIZZERIA - DI COSIMO MAURO\nLargo Albicocca, 19 Bari\n+39 080 521 8740\nMaps: https://www.google.com/maps/search/?api=1&query=Pizzeria+Di+Cosimo+Mauro+Bari\n\n• MARIA DELLE SGAGLIOZZE\nStr. delle Crociate, 13 Bari\nMaps: https://www.google.com/maps/search/?api=1&query=Maria+delle+Sgagliozze+Bari",
        FR: "• PIZZERIA - AL BUCO\nVia Giambattista Nitto de Rossi, 2/A BARI\n+39 080 574 0113\nMaps: https://www.google.com/maps/search/?api=1&query=Pizzeria+Al+Buco+Bari\n\n• RISTORANTE SELF SERVICE EL PEDRO\nCorso Vittorio Emanuele II, 15 BARI\n+39 080 521 1294\nMaps: https://www.google.com/maps/search/?api=1&query=Ristorante+Self+Service+El+Pedro+Bari\n\n• RISTORANTE - PICCINNI 28\nVia Niccolò Piccinni, 28 BARI\n+39 080 528 9457\nMaps: https://www.google.com/maps/search/?api=1&query=Ristorante+Piccinni+28+Bari\n\n• TRATTORIA - LA TANA DEL POLPO\nStrada Vallisa, 50 Bari\n+39 080 975 3338\nMaps: https://www.google.com/maps/search/?api=1&query=Trattoria+La+Tana+del+Polpo+Bari\n\n• PANZEROTTI - VENEZIA 40\nVia Venezia, 40 Bari\n+39 340 812 91 72\nMaps: https://www.google.com/maps/search/?api=1&query=Panzerotti+Venezia+40+Bari\n\n• PIZZERIA - DI COSIMO MAURO\nLargo Albicocca, 19 Bari\n+39 080 521 8740\nMaps: https://www.google.com/maps/search/?api=1&query=Pizzeria+Di+Cosimo+Mauro+Bari\n\n• MARIA DELLE SGAGLIOZZE\nStr. delle Crociate, 13 Bari\nMaps: https://www.google.com/maps/search/?api=1&query=Maria+delle+Sgagliozze+Bari",
        ES: "• PIZZERIA - AL BUCO\nVia Giambattista Nitto de Rossi, 2/A BARI\n+39 080 574 0113\nMaps: https://www.google.com/maps/search/?api=1&query=Pizzeria+Al+Buco+Bari\n\n• RISTORANTE SELF SERVICE EL PEDRO\nCorso Vittorio Emanuele II, 15 BARI\n+39 080 521 1294\nMaps: https://www.google.com/maps/search/?api=1&query=Ristorante+Self+Service+El+Pedro+Bari\n\n• RISTORANTE - PICCINNI 28\nVia Niccolò Piccinni, 28 BARI\n+39 080 528 9457\nMaps: https://www.google.com/maps/search/?api=1&query=Ristorante+Piccinni+28+Bari\n\n• TRATTORIA - LA TANA DEL POLPO\nStrada Vallisa, 50 Bari\n+39 080 975 3338\nMaps: https://www.google.com/maps/search/?api=1&query=Trattoria+La+Tana+del+Polpo+Bari\n\n• PANZEROTTI - VENEZIA 40\nVia Venezia, 40 Bari\n+39 340 812 91 72\nMaps: https://www.google.com/maps/search/?api=1&query=Panzerotti+Venezia+40+Bari\n\n• PIZZERIA - DI COSIMO MAURO\nLargo Albicocca, 19 Bari\n+39 080 521 8740\nMaps: https://www.google.com/maps/search/?api=1&query=Pizzeria+Di+Cosimo+Mauro+Bari\n\n• MARIA DELLE SGAGLIOZZE\nStr. delle Crociate, 13 Bari\nMaps: https://www.google.com/maps/search/?api=1&query=Maria+delle+Sgagliozze+Bari",
        PL: "• PIZZERIA - AL BUCO\nVia Giambattista Nitto de Rossi, 2/A BARI\n+39 080 574 0113\nMaps: https://www.google.com/maps/search/?api=1&query=Pizzeria+Al+Buco+Bari\n\n• RISTORANTE SELF SERVICE EL PEDRO\nCorso Vittorio Emanuele II, 15 BARI\n+39 080 521 1294\nMaps: https://www.google.com/maps/search/?api=1&query=Ristorante+Self+Service+El+Pedro+Bari\n\n• RISTORANTE - PICCINNI 28\nVia Niccolò Piccinni, 28 BARI\n+39 080 528 9457\nMaps: https://www.google.com/maps/search/?api=1&query=Ristorante+Piccinni+28+Bari\n\n• TRATTORIA - LA TANA DEL POLPO\nStrada Vallisa, 50 Bari\n+39 080 975 3338\nMaps: https://www.google.com/maps/search/?api=1&query=Trattoria+La+Tana+del+Polpo+Bari\n\n• PANZEROTTI - VENEZIA 40\nVia Venezia, 40 Bari\n+39 340 812 91 72\nMaps: https://www.google.com/maps/search/?api=1&query=Panzerotti+Venezia+40+Bari\n\n• PIZZERIA - DI COSIMO MAURO\nLargo Albicocca, 19 Bari\n+39 080 521 8740\nMaps: https://www.google.com/maps/search/?api=1&query=Pizzeria+Di+Cosimo+Mauro+Bari\n\n• MARIA DELLE SGAGLIOZZE\nStr. delle Crociate, 13 Bari\nMaps: https://www.google.com/maps/search/?api=1&query=Maria+delle+Sgagliozze+Bari"
      }
    },
    {
      id: "parking_transfers",
      category: "local",
      icon: "parking",
      title: {
        IT: "Parking & Transfers",
        EN: "Parking & Transfers",
        DE: "Parken & Transfers",
        FR: "Parking & Transferts",
        ES: "Aparcamiento y Traslados",
        PL: "Parking i Transfery"
      },
      description: {
        IT: "PARKING\nIn strada potrete trovare posti liberi, in alternativa c'è un garage convenzionato a pochi metri al costo di € 10 per una notte (informate il responsabile del garage che state soggiornando presso Nitto House).\n\nAIRPORT TRANSFERS\nPotete contattarmi per ricevere informazioni per il transfer dall'aeroporto a Nitto House:\n€ 20,00 dalle ore 8:00 alle 20:00\n€ 25,00 dalle ore 20:00 alle 23:30\nMassimo 3 persone per ogni trasferimento.\n\nTRANSFER PER VISITE A:\n- Alberobello e Polignano a Mare\n- Matera\n- Grotte di Castellana\n- Castel del Monte\nMassimo 3 persone andata e ritorno. Costo di € 140,00 con auto privata. Partenza mattina o pomeriggio (in base alla disponibilità).\n\nPer i tour in tutta la Puglia, visitate il sito: https://www.placenpeople.com/language/it/home/\nLa struttura vi offre la possibilità di ricevere uno sconto su tutti i tour, inserendo il codice sconto: TRT3034",
        EN: "PARKING\nOn the street you can find free spaces, alternatively there is an affiliated garage a few meters away at a cost of € 10 per night (inform the garage manager that you are staying at Nitto House).\n\nAIRPORT TRANSFERS\nYou can contact me to receive information for the transfer from the airport to Nitto House:\n€ 20.00 from 8:00 to 20:00\n€ 25.00 from 20:00 to 23:30\nMaximum 3 people per transfer.\n\nTRANSFER FOR VISITS TO:\n- Alberobello and Polignano a Mare\n- Matera\n- Castellana Caves\n- Castel del Monte\nMaximum 3 people round trip. Cost of € 140.00 with private car. Morning or afternoon departure (subject to availability).\n\nFor tours throughout Puglia, visit the website: https://www.placenpeople.com/language/en/home/\nThe property offers you the possibility to receive a discount on all tours, by entering the discount code: TRT3034",
        DE: "PARKEN\nAuf der Straße finden Sie freie Plätze, alternativ gibt es wenige Meter entfernt eine Partnergarage zum Preis von 10 € pro Nacht (informieren Sie den Garagenmanager, dass Sie im Nitto House übernachten).\n\nFLUGHAFENTRANSFERS\nSie können mich kontaktieren, um Informationen für den Transfer vom Flughafen zum Nitto House zu erhalten:\n20,00 € von 8:00 bis 20:00 Uhr\n25,00 € von 20:00 bis 23:30 Uhr\nMaximal 3 Personen pro Transfer.\n\nTRANSFER FÜR BESUCHE NACH:\n- Alberobello und Polignano a Mare\n- Matera\n- Castellana-Höhlen\n- Castel del Monte\nMaximal 3 Personen Hin- und Rückfahrt. Kosten von 140,00 € mit privatem Auto. Abfahrt morgens oder nachmittags (je nach Verfügbarkeit).\n\nFür Touren in ganz Apulien besuchen Sie die Website: https://www.placenpeople.com/language/en/home/\nDie Unterkunft bietet Ihnen die Möglichkeit, einen Rabatt auf alle Touren zu erhalten, indem Sie den Rabattcode eingeben: TRT3034",
        FR: "PARKING\nDans la rue, vous pouvez trouver des places gratuites, sinon il y a un garage affilié à quelques mètres au prix de 10 € par nuit (informez le responsable du garage que vous séjournez à Nitto House).\n\nTRANSFERTS AÉROPORT\nVous pouvez me contacter pour recevoir des informations pour le transfert de l'aéroport à Nitto House :\n20,00 € de 8h00 à 20h00\n25,00 € de 20h00 à 23h30\nMaximum 3 personnes par transfert.\n\nTRANSFERT POUR VISITES À :\n- Alberobello et Polignano a Mare\n- Matera\n- Grottes de Castellana\n- Castel del Monte\nMaximum 3 personnes aller-retour. Coût de 140,00 € avec voiture privée. Départ le matin ou l'après-midi (selon disponibilité).\n\nPour des visites dans toutes les Pouilles, visitez le site Web : https://www.placenpeople.com/language/en/home/\nL'établissement vous offre la possibilité de bénéficier d'une réduction sur tous les circuits, en saisissant le code de réduction : TRT3034",
        ES: "APARCAMIENTO\nEn la calle puedes encontrar plazas libres, alternativamente hay un garaje afiliado a pocos metros a un costo de 10 € por noche (informa al gerente del garaje que te alojas en Nitto House).\n\nTRASLADOS AL AEROPUERTO\nPuedes contactarme para recibir información para el traslado desde el aeropuerto a Nitto House:\n20,00 € de 8:00 a 20:00\n25,00 € de 20:00 a 23:30\nMáximo 3 personas por traslado.\n\nTRASLADO PARA VISITAS A:\n- Alberobello y Polignano a Mare\n- Matera\n- Cuevas de Castellana\n- Castel del Monte\nMáximo 3 personas ida y vuelta. Costo de 140,00 € con coche privado. Salida por la mañana o por la tarde (sujeto a disponibilidad).\n\nPara tours por toda Puglia, visite el sitio web: https://www.placenpeople.com/language/en/home/\nEl establecimiento le ofrece la posibilidad de recibir un descuento en todos los tours, introduciendo el código de descuento: TRT3034",
        PL: "PARKING\nNa ulicy można znaleźć wolne miejsca, alternatywnie kilka metrów dalej znajduje się partnerski garaż w cenie 10 € za noc (poinformuj kierownika garażu, że zatrzymujesz się w Nitto House).\n\nTRANSFERY LOTNISKOWE\nMożesz skontaktować się ze mną, aby uzyskać informacje na temat transferu z lotniska do Nitto House:\n20,00 € od 8:00 do 20:00\n25,00 € od 20:00 do 23:30\nMaksymalnie 3 osoby na transfer.\n\nTRANSFER NA WYCIECZKI DO:\n- Alberobello i Polignano a Mare\n- Matera\n- Jaskinie Castellana\n- Castel del Monte\nMaksymalnie 3 osoby w obie strony. Koszt 140,00 € prywatnym samochodem. Wyjazd rano lub po południu (w zależności od dostępności).\n\nAby zapoznać się z wycieczkami po całej Apulii, odwiedź stronę internetową: https://www.placenpeople.com/language/en/home/\nObiekt oferuje możliwość uzyskania zniżki na wszystkie wycieczki po wpisaniu kodu rabatowego: TRT3034"
      }
    },
    {
      id: "transport",
      category: "local",
      icon: "bus",
      title: {
        IT: "Trasporti",
        EN: "Transport",
        DE: "Transport",
        FR: "Transport",
        ES: "Transporte",
        PL: "Transport"
      },
      description: {
        IT: "BUS\nSiamo anche molto vicini alle principali linee di autobus ti porteranno ovunque. A pochi metri la fermata del bus numero 16, il quale è un collegamento diretto da e per aereoporto di Bari.\n\nDALLA STAZIONE CENTRALE DEI TRENI:\nBUS n. 3-7-13-14-16-71\nfermata appartamento: \"VIA CRISPI - Angolo VIA BRIGATA BARI\" (vicino la pizzeria Al Buco)\n\nMETRO\nDall'aeroporto all'appartamento € 5 a persona prendere la METRO e scendere alla fermata \"BARI-CRISPI\" (durata 10 min.), in 2 minuti a piedi arriverete all’appartamento (vicino la Pizzeria Al Buco) http://www.ferrovienordbarese.it\n\nTAXI\nC'è il tradizionale taxi € 25,00\n\nBIKE\nBari è diventata a misura di bicicletta con piste ciclabili e stazioni di noleggio bici e monopattini in tutta la città, inclusa una stazione a circa 10 minuti a piedi da Nitto House.",
        EN: "BUS\nWe are also very close to the main bus lines that will take you anywhere. A few meters away is the bus stop number 16, which is a direct connection to and from Bari airport.\n\nFROM THE CENTRAL TRAIN STATION:\nBUS n. 3-7-13-14-16-71\napartment stop: \"VIA CRISPI - Corner VIA BRIGATA BARI\" (near the Al Buco pizzeria)\n\nMETRO\nFrom the airport to the apartment € 5 per person take the METRO and get off at the \"BARI-CRISPI\" stop (duration 10 min.), in 2 minutes on foot you will arrive at the apartment (near the Pizzeria Al Buco) http://www.ferrovienordbarese.it\n\nTAXI\nThere is the traditional taxi € 25.00\n\nBIKE\nBari has become bicycle-friendly with bike lanes and bike and scooter rental stations throughout the city, including a station about a 10-minute walk from Nitto House.",
        DE: "BUS\nWir sind auch ganz in der Nähe der wichtigsten Buslinien, die Sie überall hinbringen. Wenige Meter entfernt befindet sich die Bushaltestelle Nummer 16, die eine direkte Verbindung zum und vom Flughafen Bari ist.\n\nVOM HAUPTBAHNHOF:\nBUS Nr. 3-7-13-14-16-71\nHaltestelle Apartment: \"VIA CRISPI - Ecke VIA BRIGATA BARI\" (in der Nähe der Pizzeria Al Buco)\n\nMETRO\nVom Flughafen zum Apartment 5 € pro Person nehmen Sie die METRO und steigen an der Haltestelle \"BARI-CRISPI\" aus (Dauer 10 Min.), in 2 Minuten zu Fuß erreichen Sie das Apartment (in der Nähe der Pizzeria Al Buco) http://www.ferrovienordbarese.it\n\nTAXI\nEs gibt das traditionelle Taxi 25,00 €\n\nFAHRRAD\nBari ist fahrradfreundlich geworden mit Radwegen und Fahrrad- und Rollerverleihstationen in der ganzen Stadt, einschließlich einer Station etwa 10 Gehminuten vom Nitto House entfernt.",
        FR: "BUS\nNous sommes également très proches des principales lignes de bus qui vous emmèneront partout. A quelques mètres se trouve l'arrêt de bus numéro 16, qui est une connexion directe depuis et vers l'aéroport de Bari.\n\nDEPUIS LA GARE CENTRALE :\nBUS n. 3-7-13-14-16-71\narrêt appartement : \"VIA CRISPI - Angle VIA BRIGATA BARI\" (près de la pizzeria Al Buco)\n\nMÉTRO\nDe l'aéroport à l'appartement 5 € par personne prenez le MÉTRO et descendez à l'arrêt \"BARI-CRISPI\" (durée 10 min.), en 2 minutes à pied vous arriverez à l'appartement (près de la Pizzeria Al Buco) http://www.ferrovienordbarese.it\n\nTAXI\nIl y a le taxi traditionnel 25,00 €\n\nVÉLO\nBari est devenue adaptée aux vélos avec des pistes cyclables et des stations de location de vélos et de scooters dans toute la ville, y compris une station à environ 10 minutes à pied de Nitto House.",
        ES: "AUTOBÚS\nTambién estamos muy cerca de las principales líneas de autobús que te llevarán a cualquier parte. A pocos metros se encuentra la parada de autobús número 16, que es una conexión directa desde y hacia el aeropuerto de Bari.\n\nDESDE LA ESTACIÓN CENTRAL DE TREN:\nAUTOBÚS n. 3-7-13-14-16-71\nparada apartamento: \"VIA CRISPI - Esquina VIA BRIGATA BARI\" (cerca de la pizzería Al Buco)\n\nMETRO\nDesde el aeropuerto hasta el apartamento 5 € por persona tome el METRO y bájese en la parada \"BARI-CRISPI\" (duración 10 min.), en 2 minutos a pie llegará al apartamento (cerca de la Pizzería Al Buco) http://www.ferrovienordbarese.it\n\nTAXI\nExiste el taxi tradicional 25,00 €\n\nBICICLETA\nBari se ha vuelto amigable con las bicicletas con carriles bici y estaciones de alquiler de bicicletas y scooters en toda la ciudad, incluida una estación a unos 10 minutos a pie de Nitto House.",
        PL: "AUTOBUS\nJesteśmy również bardzo blisko głównych linii autobusowych, które zabiorą Cię wszędzie. Kilka metrów dalej znajduje się przystanek autobusu numer 16, który jest bezpośrednim połączeniem z i na lotnisko w Bari.\n\nZ GŁÓWNEGO DWORCA KOLEJOWEGO:\nAUTOBUS nr 3-7-13-14-16-71\nprzystanek apartamentu: \"VIA CRISPI - Róg VIA BRIGATA BARI\" (w pobliżu pizzerii Al Buco)\n\nMETRO\nZ lotniska do apartamentu 5 € za osobę wsiądź do METRA i wysiądź na przystanku \"BARI-CRISPI\" (czas trwania 10 min.), w 2 minuty pieszo dojdziesz do apartamentu (w pobliżu pizzerii Al Buco) http://www.ferrovienordbarese.it\n\nTAXI\nJest tradycyjna taksówka 25,00 €\n\nROWER\nBari stało się przyjazne dla rowerzystów dzięki ścieżkom rowerowym oraz stacjom wypożyczania rowerów i hulajnóg w całym mieście, w tym stacji około 10 minut spacerem od Nitto House."
      }
    },
    {
      id: "emergency",
      category: "local",
      icon: "siren",
      title: {
        IT: "Emergenza",
        EN: "Emergency",
        DE: "Notfall",
        FR: "Urgence",
        ES: "Emergencia",
        PL: "Nagły wypadek"
      },
      description: {
        IT: "NUMERO UNICO EMERGENZE: 112",
        EN: "SINGLE EMERGENCY NUMBER: 112",
        DE: "EINZIGE NOTRUFNUMMER: 112",
        FR: "NUMÉRO D'URGENCE UNIQUE : 112",
        ES: "NÚMERO ÚNICO DE EMERGENCIAS: 112",
        PL: "JEDEN NUMER ALARMOWY: 112"
      }
    }
  ]
};
