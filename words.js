const GREEK_WORDS = [
    {
        "greek": "Ἄδωνις",
        "fonema": "Ádōnis",
        "spanish": "Adonis"
    },
    {
        "greek": "Ἀγαμέμνων",
        "fonema": "Agamémnōn",
        "spanish": "Agamenón"
    },
    {
        "greek": "ἀγαθός",
        "fonema": "agathós",
        "spanish": "Bueno / Bondadoso"
    },
    {
        "greek": "ἀγορά",
        "fonema": "agorá",
        "spanish": "Mercado / Plaza pública"
    },
    {
        "greek": "Αίας",
        "fonema": "Aías",
        "spanish": "Ayax"
    },
    {
        "greek": "Αἰγίσθος",
        "fonema": "Aigísthos",
        "spanish": "Egisto"
    },
    {
        "greek": "Αἰσχύλος",
        "fonema": "Aischýlos",
        "spanish": "Esquilo"
    },
    {
        "greek": "αἴσθησις",
        "fonema": "aísthēsis",
        "spanish": "Percepción sensorial"
    },
    {
        "greek": "αἰσθητική",
        "fonema": "aisthētikḗ",
        "spanish": "Estética"
    },
    {
        "greek": "αἰθήρ",
        "fonema": "aithḗr",
        "spanish": "Éter"
    },
    {
        "greek": "αἴτιον",
        "fonema": "aítion",
        "spanish": "Causa"
    },
    {
        "greek": "Ἀχαιοί",
        "fonema": "Akhaioí",
        "spanish": "Aqueos"
    },
    {
        "greek": "Ἀχιλλεύς",
        "fonema": "Akhilleús",
        "spanish": "Aquiles"
    },
    {
        "greek": "ἀκοή",
        "fonema": "akoḗ",
        "spanish": "Audición"
    },
    {
        "greek": "αλήθεια",
        "fonema": "alētheia",
        "spanish": "Verdad"
    },
    {
        "greek": "Ἀλέξανδρο ",
        "fonema": "Aléxandros",
        "spanish": "Alejandro"
    },
    {
        "greek": "ἄλγος",
        "fonema": "álgos",
        "spanish": "Dolor"
    },
    {
        "greek": "Αλκαίος",
        "fonema": "Alkaíos",
        "spanish": "Alceo"
    },
    {
        "greek": "Αλκιβιάδη",
        "fonema": "Alkibiádēs",
        "spanish": "Alcibíades"
    },
    {
        "greek": "Αλκίνοος",
        "fonema": "Alkínoos",
        "spanish": "Alcínoo"
    },
    {
        "greek": "Αλκμήνη",
        "fonema": "Alkmē̂nē",
        "spanish": "Alcmena"
    },
    {
        "greek": "ἀλληγορία",
        "fonema": "allēgoría",
        "spanish": "Alegoría"
    },
    {
        "greek": "ἀμφιβολία",
        "fonema": "amphibolía",
        "spanish": "Ambigüedad"
    },
    {
        "greek": "Ἀμφίων",
        "fonema": "Amphíōn",
        "spanish": "Anfión"
    },
    {
        "greek": "Ανακρέων",
        "fonema": "Anakréōn",
        "spanish": "Anacreonte"
    },
    {
        "greek": "ἀνάμνησις",
        "fonema": "anámnesis",
        "spanish": "Recuerdo"
    },
    {
        "greek": "ἀνάγκη",
        "fonema": "anánkē",
        "spanish": "Necesidad"
    },
    {
        "greek": "Ἀναξαγόρας",
        "fonema": "Anaxagóras",
        "spanish": "Anaxágoras"
    },
    {
        "greek": "Ανδρομάχη",
        "fonema": "Andromáchē",
        "spanish": "Andrómaca"
    },
    {
        "greek": "ἄνοια",
        "fonema": "ánoia",
        "spanish": "Locura"
    },
    {
        "greek": "ἄνθρωπος",
        "fonema": "ánthrōpos",
        "spanish": "Hombre / Ser humano"
    },
    {
        "greek": "Άντιγόνη",
        "fonema": "Antigónē",
        "spanish": "Antígona"
    },
    {
        "greek": "Αντίλοχος",
        "fonema": "Antílochos",
        "spanish": "Antíloco"
    },
    {
        "greek": "ἄπειρον",
        "fonema": "ápeiron",
        "spanish": "Infinito"
    },
    {
        "greek": "Ἀπελλῆς",
        "fonema": "Apellē̂s",
        "spanish": "Apeles"
    },
    {
        "greek": "Ἀφροδίτη",
        "fonema": "Aphrodítē",
        "spanish": "Afrodita"
    },
    {
        "greek": "Ἀπόλλων",
        "fonema": "Apóllōn",
        "spanish": "Apolo"
    },
    {
        "greek": "Ἀρχιμήδης",
        "fonema": "Archimḗdēs",
        "spanish": "Arquímedes"
    },
    {
        "greek": "Ἀρής",
        "fonema": "Arḗs",
        "spanish": "Ares"
    },
    {
        "greek": "ἀρετή",
        "fonema": "aretḗ",
        "spanish": "Virtud"
    },
    {
        "greek": "Ἄργος",
        "fonema": "Árgos",
        "spanish": "Argos"
    },
    {
        "greek": "Ἀρίσταρχος",
        "fonema": "Arístarkhos",
        "spanish": "Aristarco"
    },
    {
        "greek": "Ἀριστομένης",
        "fonema": "Aristoménēs",
        "spanish": "Aristómeno"
    },
    {
        "greek": "Αριστοφάνης",
        "fonema": "Aristophánēs",
        "spanish": "Aristófanes"
    },
    {
        "greek": "Ἀριστοτέλης",
        "fonema": "Aristotélēs",
        "spanish": "Aristóteles"
    },
    {
        "greek": "Αρκεσίλαος",
        "fonema": "Arkesílaos",
        "spanish": "Arcesílao"
    },
    {
        "greek": "ἀρχαί",
        "fonema": "arkhaí",
        "spanish": "Antiguo(s)"
    },
    {
        "greek": "ἀρχή",
        "fonema": "arkhḗ",
        "spanish": "Principio"
    },
    {
        "greek": "Ἄρτεμις",
        "fonema": "Ártemis",
        "spanish": "Artemisa"
    },
    {
        "greek": "Ἀταλάντη",
        "fonema": "Atalántē",
        "spanish": "Atalanta"
    },
    {
        "greek": "Αθηνά",
        "fonema": "Athēná",
        "spanish": "Atenea"
    },
    {
        "greek": "Βάκχαι",
        "fonema": "Bákchai",
        "spanish": "Las Bacantes"
    },
    {
        "greek": "Χαλκίς",
        "fonema": "Chalkís",
        "spanish": "Calcis"
    },
    {
        "greek": "Χείρων",
        "fonema": "Cheírōn",
        "spanish": "Quirón"
    },
    {
        "greek": "Δάμαστος",
        "fonema": "Dámastos",
        "spanish": "Dámaso"
    },
    {
        "greek": "Δήλος",
        "fonema": "Dēlos",
        "spanish": "Delos"
    },
    {
        "greek": "Δημήτηρ",
        "fonema": "Dēmētēr",
        "spanish": "Deméter"
    },
    {
        "greek": "δημοκρατία",
        "fonema": "dēmokratía",
        "spanish": "Democracia"
    },
    {
        "greek": "Δημόκριτος",
        "fonema": "Dēmókritos",
        "spanish": "Demócrito"
    },
    {
        "greek": "Δημοσθένης",
        "fonema": "Dēmosthénēs",
        "spanish": "Demóstenes"
    },
    {
        "greek": "διαλεκτική",
        "fonema": "dialektikḗ",
        "spanish": "Dialéctica"
    },
    {
        "greek": "διανοία",
        "fonema": "dianoía",
        "spanish": "Pensamiento"
    },
    {
        "greek": "διάνοια",
        "fonema": "diánoia",
        "spanish": "Razón / Pensamiento"
    },
    {
        "greek": "διχοτομία",
        "fonema": "dichotomía",
        "spanish": "División en dos"
    },
    {
        "greek": "δικαιοσύνη",
        "fonema": "dikaiosýnē",
        "spanish": "Justicia"
    },
    {
        "greek": "Διογένης",
        "fonema": "Diogénēs",
        "spanish": "Diógenes"
    },
    {
        "greek": "Διομήδης",
        "fonema": "Diomḗdēs",
        "spanish": "Diomedes"
    },
    {
        "greek": "Διόνυσος",
        "fonema": "Diónysos",
        "spanish": "Dionisio"
    },
    {
        "greek": "δόγμα",
        "fonema": "dógma",
        "spanish": "Doctrina / Decisión"
    },
    {
        "greek": "δόξα",
        "fonema": "dóxa",
        "spanish": "Opinión / Gloria"
    },
    {
        "greek": "εἶδος",
        "fonema": "eîdos",
        "spanish": "Forma / Esencia"
    },
    {
        "greek": "ἐκκλησία",
        "fonema": "ekklesía",
        "spanish": "Asamblea / Iglesia"
    },
    {
        "greek": "ἐκλεκτικός",
        "fonema": "eklektikós",
        "spanish": "Eclectismo"
    },
    {
        "greek": "Ηλέκτρα",
        "fonema": "Ēléktra",
        "spanish": "Electra"
    },
    {
        "greek": "Έλευσίς",
        "fonema": "Eleusís",
        "spanish": "Eleusis"
    },
    {
        "greek": "ἐλευθερία",
        "fonema": "eleuthería",
        "spanish": "Libertad"
    },
    {
        "greek": "ἔμπνευσις",
        "fonema": "émpneusis",
        "spanish": "Inspiración"
    },
    {
        "greek": "ἐνέργεια",
        "fonema": "enérgeia",
        "spanish": "Energía / Acto"
    },
    {
        "greek": "Εφέσος",
        "fonema": "Ephésos",
        "spanish": "Éfeso"
    },
    {
        "greek": "Επίχαρμος",
        "fonema": "Epíkharmos",
        "spanish": "Epícaro"
    },
    {
        "greek": "Ἐπίκουρος",
        "fonema": "Epíkouros",
        "spanish": "Epicuro"
    },
    {
        "greek": "Επίκτητος",
        "fonema": "Epíktētos",
        "spanish": "Epicteto"
    },
    {
        "greek": "ἐπιστήμη",
        "fonema": "epistḗmē",
        "spanish": "Conocimiento / Ciencia"
    },
    {
        "greek": "ἔργον",
        "fonema": "érgon",
        "spanish": "Trabajo / Obra"
    },
    {
        "greek": "ἔρις",
        "fonema": "éris",
        "spanish": "Discordia"
    },
    {
        "greek": "ἔρως",
        "fonema": "érōs",
        "spanish": "Amor"
    },
    {
        "greek": "ἔθνος",
        "fonema": "éthnos",
        "spanish": "Nación / Pueblo"
    },
    {
        "greek": "ἔθος",
        "fonema": "éthos",
        "spanish": "Costumbre / Carácter"
    },
    {
        "greek": "Εὐκλείδης",
        "fonema": "Eukleídēs",
        "spanish": "Euclides"
    },
    {
        "greek": "Εὔμαιος",
        "fonema": "Eúmaios",
        "spanish": "Eumeo"
    },
    {
        "greek": "Εὐριπίδης",
        "fonema": "Euripídēs",
        "spanish": "Eurípides"
    },
    {
        "greek": "Εὐρυδίκη",
        "fonema": "Eurydíkē",
        "spanish": "Eurídice"
    },
    {
        "greek": "Ευρυμάχη",
        "fonema": "Eurymáchē",
        "spanish": "Eurímaco"
    },
    {
        "greek": "Εὐρυπύλος",
        "fonema": "Eurypýlos",
        "spanish": "Eurípilo"
    },
    {
        "greek": "Ευσέβιος",
        "fonema": "Eusébios",
        "spanish": "Eusebio"
    },
    {
        "greek": "Ευθύδημος",
        "fonema": "Euthýdēmos",
        "spanish": "Eutidemo"
    },
    {
        "greek": "Εὐθύφρων",
        "fonema": "Euthýphrōn",
        "spanish": "Eutifrón"
    },
    {
        "greek": "Γαῖα",
        "fonema": "Gaîa",
        "spanish": "Gea"
    },
    {
        "greek": "Γλαῦκος",
        "fonema": "Glaûkos",
        "spanish": "Glauco"
    },
    {
        "greek": "Γοργίας",
        "fonema": "Gorgías",
        "spanish": "Gorgias"
    },
    {
        "greek": "αἵρεσις",
        "fonema": "haíresis",
        "spanish": "Elección / Opinión"
    },
    {
        "greek": "Ηκαβη",
        "fonema": "Hekabē",
        "spanish": "Hécuba"
    },
    {
        "greek": "Ἑκάτη",
        "fonema": "Hekátē",
        "spanish": "Hécate"
    },
    {
        "greek": "Ἕκτωρ",
        "fonema": "Héktōr",
        "spanish": "Héctor"
    },
    {
        "greek": "Εκτωρ",
        "fonema": "Hector",
        "spanish": "Héctor"
    },
    {
        "greek": "Ελένη",
        "fonema": "Helénē",
        "spanish": "Helena"
    },
    {
        "greek": "Ήλιος",
        "fonema": "Hḗlios",
        "spanish": "Helios"
    },
    {
        "greek": "Ἥφαιστος ",
        "fonema": "Hḗphaistos",
        "spanish": "Hefesto"
    },
    {
        "greek": "Ἥρα",
        "fonema": "Hḗra",
        "spanish": "Hera"
    },
    {
        "greek": "Ηρακλείδαι",
        "fonema": "Herakleídai",
        "spanish": "Los Heráclidas"
    },
    {
        "greek": "Ἡρακλείτου",
        "fonema": "Hērakleítou",
        "spanish": "Heráclito"
    },
    {
        "greek": "Ἡρακλῆς",
        "fonema": "Hēraklês",
        "spanish": "Heracles"
    },
    {
        "greek": "Ἑρμῆς",
        "fonema": "Hermēs",
        "spanish": "Hermes"
    },
    {
        "greek": "Ἡρόδοτος",
        "fonema": "Hēródotos",
        "spanish": "Heródoto"
    },
    {
        "greek": "Ἡσίοδος",
        "fonema": "Hēsíodos",
        "spanish": "Hesíodo"
    },
    {
        "greek": "Ἑστία",
        "fonema": "Hestía",
        "spanish": "Hestia"
    },
    {
        "greek": "Ἑστίας",
        "fonema": "Hestías",
        "spanish": "Hestías"
    },
    {
        "greek": "Ἱππίας",
        "fonema": "Hippías",
        "spanish": "Hipias"
    },
    {
        "greek": "Ἱπποκράτης",
        "fonema": "Hippokrátēs",
        "spanish": "Hipócrates"
    },
    {
        "greek": "Ιππόλυτος",
        "fonema": "Hippólytos",
        "spanish": "Hipólito"
    },
    {
        "greek": "Ὅμηρος",
        "fonema": "Hómēros",
        "spanish": "Homero"
    },
    {
        "greek": "ὁμοίωσις",
        "fonema": "homoíōsis",
        "spanish": "Semejanza"
    },
    {
        "greek": "ὕδωρ",
        "fonema": "hýdōr",
        "spanish": "Agua"
    },
    {
        "greek": "ὕλη",
        "fonema": "hýlē",
        "spanish": "Materia"
    },
    {
        "greek": "ὑποκείμενον",
        "fonema": "hypokeímemon",
        "spanish": "Sustrato"
    },
    {
        "greek": "ὑπόθεσις",
        "fonema": "hypóthesis",
        "spanish": "Suposición"
    },
    {
        "greek": "ἰδέα",
        "fonema": "idéa",
        "spanish": "Idea / Forma"
    },
    {
        "greek": "Ίων",
        "fonema": "Íōn",
        "spanish": "Ion"
    },
    {
        "greek": "Ιφιγένεια",
        "fonema": "Iphigéneia",
        "spanish": "Ifigenia"
    },
    {
        "greek": "Ἰάσων",
        "fonema": "Jáson",
        "spanish": "Jasón"
    },
    {
        "greek": "κακός",
        "fonema": "kakós",
        "spanish": "Malo"
    },
    {
        "greek": "Κάλχας",
        "fonema": "Kálchas",
        "spanish": "Calcante"
    },
    {
        "greek": "Καλλίας",
        "fonema": "Kallías",
        "spanish": "Calias"
    },
    {
        "greek": "Καλλίμαχος",
        "fonema": "Kallímachos",
        "spanish": "Calímaco"
    },
    {
        "greek": "καλλίστη",
        "fonema": "kallístē",
        "spanish": "El Bien (Forma)"
    },
    {
        "greek": "καλός",
        "fonema": "kalós",
        "spanish": "Hermoso / Bueno"
    },
    {
        "greek": "Καλυψώ",
        "fonema": "Kalypsṓ",
        "spanish": "Calipso"
    },
    {
        "greek": "Κασσάνδρα",
        "fonema": "Kassándra",
        "spanish": "Casandra"
    },
    {
        "greek": "Χοῖραι",
        "fonema": "Khoîrai",
        "spanish": "Las Suplicantes"
    },
    {
        "greek": "χρόνος",
        "fonema": "khrónos",
        "spanish": "Tiempo"
    },
    {
        "greek": "Κίρκη",
        "fonema": "Kírkē",
        "spanish": "Circe"
    },
    {
        "greek": "Κλεισθένης",
        "fonema": "Kleisthénēs",
        "spanish": "Clístenes"
    },
    {
        "greek": "Κλειτομήστρα",
        "fonema": "Kleitomḗstra",
        "spanish": "Clitemnestra"
    },
    {
        "greek": "Κλεόβουλος",
        "fonema": "Kleóboulos",
        "spanish": "Cleóbulo"
    },
    {
        "greek": "Κλεομένης",
        "fonema": "Kleoménēs",
        "spanish": "Cleómenes"
    },
    {
        "greek": "Κλεοπάτρα",
        "fonema": "Kleopátra",
        "spanish": "Cleopatra"
    },
    {
        "greek": "Κνωσός",
        "fonema": "Knōsós",
        "spanish": "Cnosos"
    },
    {
        "greek": "κοινός",
        "fonema": "koinós",
        "spanish": "Común / Público"
    },
    {
        "greek": "Κολχίς",
        "fonema": "Kolchís",
        "spanish": "Cólquide"
    },
    {
        "greek": "Κόλχις",
        "fonema": "Kólchis",
        "spanish": "Cólquida"
    },
    {
        "greek": "Κολοφών",
        "fonema": "Kolophṓn",
        "spanish": "Colofón"
    },
    {
        "greek": "Κόρινθος",
        "fonema": "Kórinthos",
        "spanish": "Corinto"
    },
    {
        "greek": "Κόρκυρα",
        "fonema": "Kórkyra",
        "spanish": "Corfú"
    },
    {
        "greek": "κόσμος",
        "fonema": "kósmos",
        "spanish": "Mundo / Orden"
    },
    {
        "greek": "Κρατύλος",
        "fonema": "Kratýlos",
        "spanish": "Crátilo"
    },
    {
        "greek": "Κρέων",
        "fonema": "Kréōn",
        "spanish": "Creonte"
    },
    {
        "greek": "Κριτίας",
        "fonema": "Kritías",
        "spanish": "Critias"
    },
    {
        "greek": "Κρίτων",
        "fonema": "Krítōn",
        "spanish": "Critón"
    },
    {
        "greek": "Κρόνος",
        "fonema": "Krónos",
        "spanish": "Crono"
    },
    {
        "greek": "Κύκλωπες",
        "fonema": "Kúklōpes",
        "spanish": "Los Cíclopes"
    },
    {
        "greek": "Κύπριαι",
        "fonema": "Kýpriai",
        "spanish": "Las Ciprias"
    },
    {
        "greek": "Κυρήνη",
        "fonema": "Kyrēnē",
        "spanish": "Cirene"
    },
    {
        "greek": "Λάχης",
        "fonema": "Láchēs",
        "spanish": "Laches"
    },
    {
        "greek": "Λακωνία",
        "fonema": "Laconía",
        "spanish": "Laconia / Lacedemonia"
    },
    {
        "greek": "Λαέρτης",
        "fonema": "Laértēs",
        "spanish": "Laertes"
    },
    {
        "greek": "Λαμία",
        "fonema": "Lamía",
        "spanish": "Lamia"
    },
    {
        "greek": "Λάρισα",
        "fonema": "Lárissa",
        "spanish": "Larisa"
    },
    {
        "greek": "Λεωνίδας",
        "fonema": "Leonídas",
        "spanish": "Leónidas"
    },
    {
        "greek": "Λευκάς",
        "fonema": "Leukás",
        "spanish": "Leucas"
    },
    {
        "greek": "λόγος",
        "fonema": "lógos",
        "spanish": "Palabra / Razón"
    },
    {
        "greek": "Λυκάων",
        "fonema": "Lykáōn",
        "spanish": "Licaón"
    },
    {
        "greek": "Λυκοῦργος",
        "fonema": "Lykoûrgos",
        "spanish": "Licurgo"
    },
    {
        "greek": "Μαραθών",
        "fonema": "Marathṓn",
        "spanish": "Maratón"
    },
    {
        "greek": "μάθησις",
        "fonema": "máthēsis",
        "spanish": "Aprendizaje"
    },
    {
        "greek": "Μήδεια",
        "fonema": "Mēdeia",
        "spanish": "Medea"
    },
    {
        "greek": "Μεγάλη Ἑλλάς",
        "fonema": "Megálē Hellás",
        "spanish": "Magna Grecia"
    },
    {
        "greek": "Μέγαρα",
        "fonema": "Mégara",
        "spanish": "Mégara"
    },
    {
        "greek": "Μεγαρικός",
        "fonema": "Megarikós",
        "spanish": "Megárico"
    },
    {
        "greek": "μελέτη",
        "fonema": "melétē",
        "spanish": "Estudio / Práctica"
    },
    {
        "greek": "Μελέτιος",
        "fonema": "Meletios",
        "spanish": "Melecio"
    },
    {
        "greek": "Μενάνδρος",
        "fonema": "Menándros",
        "spanish": "Menandro"
    },
    {
        "greek": "Μενέλαος",
        "fonema": "Menélaos",
        "spanish": "Menelao"
    },
    {
        "greek": "Μενέξενος",
        "fonema": "Menéxenos",
        "spanish": "Menéxeno"
    },
    {
        "greek": "Μένων",
        "fonema": "Menṓn",
        "spanish": "Menón"
    },
    {
        "greek": "Μέντωρ",
        "fonema": "Méntōr",
        "spanish": "Mentor"
    },
    {
        "greek": "Μεσσήνη",
        "fonema": "Messḗnē",
        "spanish": "Mesenia"
    },
    {
        "greek": "μεταβολή",
        "fonema": "metabolḗ",
        "spanish": "Cambio"
    },
    {
        "greek": "μέθοδος",
        "fonema": "méthodos",
        "spanish": "Método"
    },
    {
        "greek": "μέτρον",
        "fonema": "métron",
        "spanish": "Medida"
    },
    {
        "greek": "Μικῆναι",
        "fonema": "Mikēnai",
        "spanish": "Micenas"
    },
    {
        "greek": "Μίλητος",
        "fonema": "Mílētos",
        "spanish": "Mileto"
    },
    {
        "greek": "μιμητική",
        "fonema": "mīmētikḗ",
        "spanish": "Imitación"
    },
    {
        "greek": "Μύρμιδον",
        "fonema": "Mýrmidon",
        "spanish": "Mirmidón"
    },
    {
        "greek": "Μύρων",
        "fonema": "Mýron",
        "spanish": "Mirón"
    },
    {
        "greek": "Μυτιλήνη",
        "fonema": "Mytilḗnē",
        "spanish": "Mitilene"
    },
    {
        "greek": "Ναυσικάα",
        "fonema": "Nausikáa",
        "spanish": "Nausicaa"
    },
    {
        "greek": "Νάξος",
        "fonema": "Náxos",
        "spanish": "Naxos"
    },
    {
        "greek": "Νεμέσεις",
        "fonema": "Neméseis",
        "spanish": "Némesis"
    },
    {
        "greek": "Νέστωρ",
        "fonema": "Néstōr",
        "spanish": "Néstor"
    },
    {
        "greek": "Νίκη",
        "fonema": "Níkē",
        "spanish": "Victoria"
    },
    {
        "greek": "Νικόδημος",
        "fonema": "Nikódēmos",
        "spanish": "Nicodemo"
    },
    {
        "greek": "νόμος",
        "fonema": "nómos",
        "spanish": "Ley"
    },
    {
        "greek": "νοῦς",
        "fonema": "noûs",
        "spanish": "Intelecto / Mente"
    },
    {
        "greek": "Ὀδυσσεύς",
        "fonema": "Odysseús",
        "spanish": "Ulises"
    },
    {
        "greek": "Οι Ευμηλίδες",
        "fonema": "Oi Eumēlídes",
        "spanish": "Las Eumeles"
    },
    {
        "greek": "Οἰδίπους Τύραννος",
        "fonema": "Oidípous Týrannos",
        "spanish": "Edipo Rey"
    },
    {
        "greek": "Ολυμπία",
        "fonema": "Olympía",
        "spanish": "Olimpia"
    },
    {
        "greek": "ὄνειρος",
        "fonema": "óneiros",
        "spanish": "Sueño"
    },
    {
        "greek": "ὄγκος",
        "fonema": "ónkos",
        "spanish": "Volumen / Tamaño"
    },
    {
        "greek": "ὄντος",
        "fonema": "óntos",
        "spanish": "Ser / Existencia"
    },
    {
        "greek": "Ορέστης",
        "fonema": "Oréstēs",
        "spanish": "Orestes"
    },
    {
        "greek": "ὀρφισμός",
        "fonema": "orphismós",
        "spanish": "Orfismo"
    },
    {
        "greek": "ὀρθός",
        "fonema": "orthós",
        "spanish": "Recto / Correcto"
    },
    {
        "greek": "Οὐρανός",
        "fonema": "Ouranós",
        "spanish": "Urano"
    },
    {
        "greek": "παιδεία",
        "fonema": "paideía",
        "spanish": "Educación / Cultura"
    },
    {
        "greek": "Πάν",
        "fonema": "Pán",
        "spanish": "Pan"
    },
    {
        "greek": "Πανδώρα",
        "fonema": "Pandṓra",
        "spanish": "Pandora"
    },
    {
        "greek": "παραδείγματα",
        "fonema": "paradeígmata",
        "spanish": "Ejemplos"
    },
    {
        "greek": "παράδοξος",
        "fonema": "parádoxos",
        "spanish": "Paradoja"
    },
    {
        "greek": "Πάρις",
        "fonema": "Páris",
        "spanish": "Paris"
    },
    {
        "greek": "Παρμενίδης",
        "fonema": "Parmenídēs",
        "spanish": "Parménides"
    },
    {
        "greek": "πάθος",
        "fonema": "páthos",
        "spanish": "Pasión / Emoción"
    },
    {
        "greek": "Πάτροκλος",
        "fonema": "Pátroklos",
        "spanish": "Patroclo"
    },
    {
        "greek": "Πηιστράτος",
        "fonema": "Pēistrátos",
        "spanish": "Pisístrato"
    },
    {
        "greek": "Πέλλα",
        "fonema": "Pélla",
        "spanish": "Pella"
    },
    {
        "greek": "Πελοπόννησος",
        "fonema": "Pelopónnēsos",
        "spanish": "Peloponeso"
    },
    {
        "greek": "Πηνελόπη",
        "fonema": "Pēnelópē",
        "spanish": "Penélope"
    },
    {
        "greek": "Περγαμόν",
        "fonema": "Pergamón",
        "spanish": "Pérgamo"
    },
    {
        "greek": "Περικλῆς",
        "fonema": "Periklês",
        "spanish": "Pericles"
    },
    {
        "greek": "περίπατος",
        "fonema": "perípatos",
        "spanish": "Paseo / Discusión"
    },
    {
        "greek": "Πέρσαι",
        "fonema": "Pérsai",
        "spanish": "Los Persas"
    },
    {
        "greek": "Περσεφόνη",
        "fonema": "Persephónē",
        "spanish": "Perséfone"
    },
    {
        "greek": "Περσεύς",
        "fonema": "Perseús",
        "spanish": "Perseo"
    },
    {
        "greek": "Φαίδρος",
        "fonema": "Phaídros",
        "spanish": "Fedro"
    },
    {
        "greek": "Φαιήκες",
        "fonema": "Phaiḗkes",
        "spanish": "Feacios"
    },
    {
        "greek": "Φειδίας",
        "fonema": "Pheidías",
        "spanish": "Fidias"
    },
    {
        "greek": "Φίληβος",
        "fonema": "Phílēbos",
        "spanish": "Filebo"
    },
    {
        "greek": "Φίλιππος ",
        "fonema": "Phílippos",
        "spanish": "Filipo"
    },
    {
        "greek": "Φίλοκτητος",
        "fonema": "Phíloktētos",
        "spanish": "Filoctetes"
    },
    {
        "greek": "φιλοσοφία",
        "fonema": "philosofía",
        "spanish": "Filosofía"
    },
    {
        "greek": "φιλόσοφος",
        "fonema": "philósophos",
        "spanish": "Filósofo"
    },
    {
        "greek": "Φιλόστρατος",
        "fonema": "Philóstratos",
        "spanish": "Filóstrato"
    },
    {
        "greek": "Φοίνισσαι",
        "fonema": "Phoínissai",
        "spanish": "Las Fenicias"
    },
    {
        "greek": "Φοίνιξ",
        "fonema": "Phoínix",
        "spanish": "Fénix"
    },
    {
        "greek": "Φωκίδα",
        "fonema": "Phōkída",
        "spanish": "Fócida"
    },
    {
        "greek": "φύλον",
        "fonema": "phýlon",
        "spanish": "Tribu / Género"
    },
    {
        "greek": "φύσις",
        "fonema": "phýsis",
        "spanish": "Naturaleza"
    },
    {
        "greek": "Πίνδαρος",
        "fonema": "Píndaros",
        "spanish": "Píndaro"
    },
    {
        "greek": "Πλάτων",
        "fonema": "Plátōn",
        "spanish": "Platón"
    },
    {
        "greek": "πλάτος",
        "fonema": "plátos",
        "spanish": "Amplitud / Ancho"
    },
    {
        "greek": "Πλούταρχος",
        "fonema": "Ploútarchos",
        "spanish": "Plutarco"
    },
    {
        "greek": "πνεῦμα",
        "fonema": "pneûma",
        "spanish": "Espíritu"
    },
    {
        "greek": "πόλεμος",
        "fonema": "pólemos",
        "spanish": "Guerra"
    },
    {
        "greek": "πόλις",
        "fonema": "pólis",
        "spanish": "Ciudad-Estado / Ciudad"
    },
    {
        "greek": "Πολιτεία",
        "fonema": "Politeía",
        "spanish": "La República"
    },
    {
        "greek": "πολίτης",
        "fonema": "polítēs",
        "spanish": "Ciudadano"
    },
    {
        "greek": "πολιτική",
        "fonema": "politikḗ",
        "spanish": "Política"
    },
    {
        "greek": "Πολιτικός",
        "fonema": "Politikós",
        "spanish": "El Político"
    },
    {
        "greek": "Πολυδάμας",
        "fonema": "Polydámas",
        "spanish": "Polidamas"
    },
    {
        "greek": "Πολυκλείτος",
        "fonema": "Polykleítos",
        "spanish": "Policleto"
    },
    {
        "greek": "Πολύφημος",
        "fonema": "Polýphēmos",
        "spanish": "Polifemo"
    },
    {
        "greek": "πόνος",
        "fonema": "pónos",
        "spanish": "Dolor / Esfuerzo"
    },
    {
        "greek": "Πόσειδων",
        "fonema": "Póseidōn",
        "spanish": "Poseidón"
    },
    {
        "greek": "πρᾶξις",
        "fonema": "prâxis",
        "spanish": "Acción / Práctica"
    },
    {
        "greek": "Πραξιτέλης",
        "fonema": "Praxitélēs",
        "spanish": "Praxíteles"
    },
    {
        "greek": "Πρίαμος",
        "fonema": "Príamos",
        "spanish": "Príamo"
    },
    {
        "greek": "Προμηθεύς",
        "fonema": "Promētheús",
        "spanish": "Prometeo"
    },
    {
        "greek": "Προμηθεύς δεσμώτης",
        "fonema": "Promētheús desmṓtēs",
        "spanish": "Prometeo encadenado"
    },
    {
        "greek": "ψυχή",
        "fonema": "psychḗ",
        "spanish": "Alma"
    },
    {
        "greek": "πυρός",
        "fonema": "purós",
        "spanish": "Fuego"
    },
    {
        "greek": "Πύλος",
        "fonema": "Pýlos",
        "spanish": "Pilos"
    },
    {
        "greek": "Πυθαγόρας",
        "fonema": "Pythagóras",
        "spanish": "Pitágoras"
    },
    {
        "greek": "Ρήσος",
        "fonema": "Rhēsos",
        "spanish": "Reso"
    },
    {
        "greek": "Ρόδος",
        "fonema": "Rhódos",
        "spanish": "Rodas"
    },
    {
        "greek": "Σάμος",
        "fonema": "Sámos",
        "spanish": "Samos"
    },
    {
        "greek": "Σαπφώ",
        "fonema": "Sapphṓ",
        "spanish": "Safo"
    },
    {
        "greek": "Σαρπηδών",
        "fonema": "Sarpēdṓn",
        "spanish": "Sarpedón"
    },
    {
        "greek": "Σελήνη",
        "fonema": "Selḗnē",
        "spanish": "Selene"
    },
    {
        "greek": "σιωπή",
        "fonema": "siōpḗ",
        "spanish": "Silencio"
    },
    {
        "greek": "Σίσυφος",
        "fonema": "Sísyphos",
        "spanish": "Sísifo"
    },
    {
        "greek": "Σκάμανδρος",
        "fonema": "Skámandros",
        "spanish": "Escamandro"
    },
    {
        "greek": "Σκύθης",
        "fonema": "Skýthēs",
        "spanish": "Escitas"
    },
    {
        "greek": "Σωκράτης",
        "fonema": "Sōkrátēs",
        "spanish": "Sócrates"
    },
    {
        "greek": "Σόλων",
        "fonema": "Sólōn",
        "spanish": "Solón"
    },
    {
        "greek": "σοφία",
        "fonema": "sophía",
        "spanish": "Sabiduría"
    },
    {
        "greek": "σοφιστής",
        "fonema": "sophistḗs",
        "spanish": "Sofista"
    },
    {
        "greek": "Σοφοκλῆς",
        "fonema": "Sophoklês",
        "spanish": "Sófocles"
    },
    {
        "greek": "Σπάρτη",
        "fonema": "Spártē",
        "spanish": "Esparta"
    },
    {
        "greek": "στοιχεῖον",
        "fonema": "stoikheîon",
        "spanish": "Elemento"
    },
    {
        "greek": "στρατηγός",
        "fonema": "stratēgós",
        "spanish": "General / Líder militar"
    },
    {
        "greek": "Στράτων",
        "fonema": "Strátōn",
        "spanish": "Estratón"
    },
    {
        "greek": "σύμπαν",
        "fonema": "sýmpan",
        "spanish": "Universo"
    },
    {
        "greek": "συμπάθεια",
        "fonema": "sympátheia",
        "spanish": "Compatibilidad"
    },
    {
        "greek": "συμπόσιον",
        "fonema": "sympósion",
        "spanish": "Simposio / Banquete"
    },
    {
        "greek": "σύνοικος",
        "fonema": "sýnoikos",
        "spanish": "Convecino"
    },
    {
        "greek": "Ταλαίφρονες",
        "fonema": "Talaíphrónes",
        "spanish": "Los Talaíphrontes"
    },
    {
        "greek": "τέχνη",
        "fonema": "tékhnē",
        "spanish": "Arte / Habilidad"
    },
    {
        "greek": "Τηλέμαχος",
        "fonema": "Tēlémaxos",
        "c": "Telémaco"
    },
    {
        "greek": "Θανάτος",
        "fonema": "Thanátos",
        "spanish": "Tánatos"
    },
    {
        "greek": "θάνατος",
        "fonema": "thánatos",
        "spanish": "Muerte"
    },
    {
        "greek": "Θεαίτητος",
        "fonema": "Theaítētos",
        "spanish": "Teeteto"
    },
    {
        "greek": "Θήβαι",
        "fonema": "Thḗbai",
        "spanish": "Tebas"
    },
    {
        "greek": "Θέμιστοκλες",
        "fonema": "Thémistoklēs",
        "spanish": "Temístocles"
    },
    {
        "greek": "θεωρία",
        "fonema": "theōría",
        "spanish": "Teoría"
    },
    {
        "greek": "θεός",
        "fonema": "theós",
        "spanish": "Dios"
    },
    {
        "greek": "Θερμιστοκλῆς",
        "fonema": "Thermistoklês",
        "spanish": "Termistocles"
    },
    {
        "greek": "Θερμοπύλαι",
        "fonema": "Thermopýlai",
        "spanish": "Termópilas"
    },
    {
        "greek": "Θέσπις",
        "fonema": "Théspis",
        "spanish": "Tespis"
    },
    {
        "greek": "Θεσσαλονίκη",
        "fonema": "Thessaloníkē",
        "spanish": "Tesalónica"
    },
    {
        "greek": "Θέτις",
        "fonema": "Thétis",
        "spanish": "Tetis"
    },
    {
        "greek": "Θουκυδίδης",
        "fonema": "Thoukydídēs",
        "spanish": "Tucídides"
    },
    {
        "greek": "Τίμαιος",
        "fonema": "Tímaios",
        "spanish": "Timeo"
    },
    {
        "greek": "Τιμόθεος",
        "fonema": "Timótheos",
        "spanish": "Timoteo"
    },
    {
        "greek": "Τραχίνιαι",
        "fonema": "Trachíniai",
        "spanish": "Las Traquinias"
    },
    {
        "greek": "Τρωάδες",
        "fonema": "Troádes",
        "spanish": "Las Troyanas"
    },
    {
        "greek": "Τροία",
        "fonema": "Troía",
        "spanish": "Troya"
    },
    {
        "greek": "Τυδέως",
        "fonema": "Tydéōs",
        "spanish": "Tideo"
    },
    {
        "greek": "Ξενοφῶν",
        "fonema": "Xenophōn",
        "spanish": "Jenofonte"
    },
    {
        "greek": "Ζήνων",
        "fonema": "Zḗnōn",
        "spanish": "Zenón"
    },
    {
        "greek": "Ζέφυρος",
        "fonema": "Zéphyros",
        "spanish": "Zéfiro"
    },
    {
        "greek": "Ζεύς",
        "fonema": "Zeús",
        "spanish": "Zeus"
    },
    {
        "greek": "σωφροσύνη",
        "fonema": "Sophrosyne",
        "spanish": "Moderación"
    }, 
    {"greek": "ἀνάμνησις", "fonema": "anámnēsis", "spanish": "recuerdo"},
    {"greek": "αὐτάρκεια", "fonema": "autarkeia", "spanish": "autosuficiencia"},
    {"greek": "αμαρτία", "fonema": "hamartia", "spanish": "error trágico / pecado"},
    {"greek": "εὐδαιμονία", "fonema": "eudaimonía ", "spanish": "felicidad"},
    {"greek": "καιρός", "fonema": "kairós", "spanish": "momento adecuado u oportuno"},
    {"greek": "Φρόνησις", "fonema": "phronēsis ", "spanish": "sabiduría práctica"},
    {"greek": "πρᾱξις", "fonema": "praxis", "spanish": "práctica"},
    {"greek": "σκοπός", "fonema": "skopos", "spanish": "objetivo, propósito meta específica"},
    {"greek": "τέλος", "fonema": "telos", "spanish": "razón final, propósito último"},
    {"greek": "Ηθική", "fonema": "Ēthikḗ", "spanish": "Ética"},
    {"greek": "Οντολογία", "fonema": "Ontología", "spanish": "Ontología"},
    {"greek": "Παράδειγμα", "fonema": "Parádeigma", "spanish": "Ejemplo, modelo"},
    {"greek": "Πραγματικότητα", "fonema": "Pragmatikótēta", "spanish": "Realidad"},
    {"greek": "Ιδέα", "fonema": "Idéa", "spanish": "Idea"},
    {"greek": "Κόσμος", "fonema": "Kósmos", "spanish": "Mundo, universo, orden"},
    {"greek": "ψυχή", "fonema": "psyché", "spanish": "alma"},
    {"greek": "Μυθολογία", "fonema": "Mythología", "spanish": "Mitología"},
    {"greek": "ενέργεια", "fonema": "energeia", "spanish": "Energía"}
];
