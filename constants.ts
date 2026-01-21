import { Shovel, Trees, Scissors, Sun, Ruler, Flower2 } from 'lucide-react';
import { NavItem, Service, Project, Testimonial, TeamMember } from './types';

export const COMPANY_NAME = "VDE Tuinprojecten";
export const COMPANY_PHONE = "+31 (0)6 1234 5678";
export const COMPANY_EMAIL = "info@vdetuinprojecten.nl";
export const COMPANY_ADDRESS = "Kastanjelaan 45, 3721 AB Bilthoven";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Over Ons', path: '/over-ons' },
  { label: 'Diensten', path: '/diensten' },
  { label: 'Projecten', path: '/projecten' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Tuinonderhoud',
    description: 'Zorgeloos genieten van uw tuin, het hele jaar door. Wij verzorgen het complete onderhoud van snoeien tot bemesten.',
    icon: Shovel,
    image: 'https://images.unsplash.com/photo-1557429287-b2e26467fc2b?auto=format&fit=crop&q=80&w=800',
    features: ['Snoeien & Knippen', 'Onkruidbestrijding', 'Bemesting', 'Voorjaarsbeurt']
  },
  {
    id: 's2',
    title: 'Tuinaanleg',
    description: 'Van droomontwerp tot realisatie. Wij leggen uw nieuwe tuin aan met oog voor detail, duurzaamheid en kwaliteit.',
    icon: Ruler,
    image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&q=80&w=800',
    features: ['Grondwerk', 'Beplanting', 'Vijvers', 'Verlichting']
  },
  {
    id: 's3',
    title: 'Boomverzorging',
    description: 'Specialistische zorg voor uw bomen. Van veilig snoeien op hoogte tot het aanplanten van volwassen bomen.',
    icon: Trees,
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800',
    features: ['Vormsnoei', 'Kappen & Rooien', 'Boomveiligheidscontrole', 'Aanplant']
  },
  {
    id: 's4',
    title: 'Bestrating & Terrassen',
    description: 'Ambachtelijk straatwerk voor opritten, terrassen en tuinpaden. Strak modern of klassiek gebakken klinkers.',
    icon: Sun,
    image: 'https://images.unsplash.com/photo-1621960783321-729930f76901?auto=format&fit=crop&q=80&w=800',
    features: ['Keramische tegels', 'Opritten', 'Sierbestrating', 'Herbestrating']
  },
  {
    id: 's5',
    title: 'Gras & Gazon',
    description: 'Een strak groen gazon is de basis van elke tuin. Wij leggen graszoden of zaaien in en verzorgen het onderhoud.',
    icon: Scissors,
    image: 'https://images.unsplash.com/photo-1558905544-3ded61434c56?auto=format&fit=crop&q=80&w=800',
    features: ['Graszoden leggen', 'Verticuteren', 'Maaiservice', 'Beregening']
  },
  {
    id: 's6',
    title: 'Beplantingsplannen',
    description: 'De juiste plant op de juiste plek. Wij creëren harmonieuze borders die in elk seizoen kleur en leven brengen.',
    icon: Flower2,
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=800',
    features: ['Borderontwerp', 'Seizoensbloeiers', 'Biodiversiteit', 'Wintergroen']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Stadsvilla Utrecht',
    category: 'Tuinaanleg',
    description: 'Complete renovatie van een monumentale stadstuin met moderne elementen en strakke lijnen.',
    image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=800',
    date: 'Maart 2024'
  },
  {
    id: 'p2',
    title: 'Landgoed de Hei',
    category: 'Onderhoud',
    description: 'Jaarlijks onderhoud van een landschappelijke tuin van 2500m2 met klassieke borders.',
    image: 'https://images.unsplash.com/photo-1574345479624-949e25e987c2?auto=format&fit=crop&q=80&w=800',
    date: 'Lopend'
  },
  {
    id: 'p3',
    title: 'Daktuin Amsterdam',
    category: 'Project',
    description: 'Aanleg van een duurzame daktuin met intensieve begroeiing, terras en uitzicht.',
    image: 'https://images.unsplash.com/photo-1632759904221-77864f14ad3e?auto=format&fit=crop&q=80&w=800',
    date: 'Juni 2023'
  },
  {
    id: 'p4',
    title: 'Japanse Tuin',
    category: 'Ontwerp & Aanleg',
    description: 'Sfeervolle Japanse tuin met vijverpartij, rotsen en exclusieve beplanting.',
    image: 'https://images.unsplash.com/photo-1579762184651-789269d0339a?auto=format&fit=crop&q=80&w=800',
    date: 'September 2023'
  },
  {
    id: 'p5',
    title: 'Bedrijfstuin TechPark',
    category: 'Zakelijk',
    description: 'Representatieve entree en lunchtuin voor kantoorpand met onderhoudsarme beplanting.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    date: 'Januari 2024'
  },
  {
    id: 'p6',
    title: 'Moderne Patiotuin',
    category: 'Tuinaanleg',
    description: 'Strakke lijnen en onderhoudsvriendelijk design voor een patiowoning.',
    image: 'https://images.unsplash.com/photo-1519302196144-8d45e41df2aa?auto=format&fit=crop&q=80&w=800',
    date: 'April 2024'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Familie Jansen',
    role: 'Particulier, Zeist',
    content: 'VDE Tuinprojecten heeft onze verwachtingen overtroffen. Vanaf het ontwerp tot de laatste tegel is er met enorme precisie gewerkt. Onze tuin is nu een verlengstuk van onze woonkamer.',
    rating: 5
  },
  {
    id: 't2',
    name: 'Erik de Vries',
    role: 'Eigenaar Restaurant De Kroon',
    content: 'Voor ons terras is een representatieve uitstraling essentieel. De mannen van VDE zorgen ervoor dat het er altijd piekfijn bij ligt. Betrouwbaar en proactief.',
    rating: 5
  },
  {
    id: 't3',
    name: 'Sophie van der Linden',
    role: 'Particulier, Bilthoven',
    content: 'Zeer vakkundig advies gekregen over de snoei van onze oude bomen. Je merkt dat ze echt passie hebben voor de natuur. Een aanrader!',
    rating: 4
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'tm1',
    name: 'Jan-Willem van Veen',
    role: 'Eigenaar & Tuinarchitect',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'tm2',
    name: 'Mark de Jong',
    role: 'Voorman Tuinaanleg',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'tm3',
    name: 'Lisa Bakker',
    role: 'Groenspecialist',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
  }
];