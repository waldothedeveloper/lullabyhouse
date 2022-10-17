import basic from '@/images/icons/basic_cleaning.png'
import dance from '@/images/icons/dance.png'
import deep from '@/images/icons/deep_cleaning.png'
import holiday from '@/images/icons/holiday.png'
import realtor from '@/images/icons/realtor_open_house.png'
import vacantHouse from '@/images/icons/vacant_house.png'

//
export const typesOfCleaningServices = [
  {
    title: 'Basic Cleaning',
    description: `Dust, wipe down, scrub, floors & baseboards, emptying the trash, return supplies, changing bedding & make beds, and our 6 checkpoint list before we leave.`,
    id: 1,
    href: '#',
    icon: basic,
    iconForeground: 'text-teal-700',
    iconBackground: 'bg-teal-50',
    iconAttribution: (
      <a
        className="focus:outline-none"
        target="_blank"
        rel="noreferrer"
        href="https://www.flaticon.com/free-icons/cleaning"
        title="cleaning icons"
      >
        Cleaning icons created by Freepik
      </a>
    ),
  },
  {
    title: 'Deep Cleaning',
    description: `All included in basic, extended time for areas of focus, add-Ons such as inside oven, inside refrigerator, inside cabinets, plus our 6 checkpoint list before we leave.`,
    id: 2,
    href: '#',
    icon: deep,
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
    iconAttribution: (
      <a
        className="focus:outline-none"
        target="_blank"
        rel="noreferrer"
        href="https://www.flaticon.com/free-icons/cleaning"
        title="cleaning icons"
      >
        Cleaning icons created by Mariia Lov
      </a>
    ),
  },
  {
    title: 'Vacant House (move in/out)',
    description: `Every inch of the property will be spotless, sustainable cleaning products, cleaned microwaves, ovens, ranges, sanitizing coutertops, sinks, bathtubs, showers, cleaning inside drawers, and our 6 checkpoint list before we leave.`,
    id: 3,
    href: '#',
    icon: vacantHouse,
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
    iconAttribution: (
      <a
        className="focus:outline-none"
        target="_blank"
        rel="noreferrer"
        href="https://www.flaticon.com/free-icons/house"
        title="house icons"
      >
        House icons created by iconixar
      </a>
    ),
  },
  {
    title: 'Open House',
    description: `Ideal for local real state agents & realtors who are planning an open house showings. We will leave the property perfect for staging, zero cobwebs, zero dust, and our 6 checkpoint list before we leave.`,
    id: 4,
    href: '#',
    icon: realtor,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
    iconAttribution: (
      <a
        className="focus:outline-none"
        target="_blank"
        rel="noreferrer"
        href="https://www.flaticon.com/free-icons/real-estate"
        title="real estate icons"
      >
        Real estate icons created by dDara
      </a>
    ),
  },
  {
    title: 'Holiday',
    description: `We will cleanup your entryways and foyers used in grand holiday entrances, streak-free windows, impeccably clean stairs, pristine appliances, faucets, and fixtures, welcoming clean bathrooms, and our 6 checkpoint list before we leave.`,
    id: 5,
    href: '#',
    icon: holiday,
    iconForeground: 'text-rose-700',
    iconBackground: 'bg-rose-50',
    iconAttribution: (
      <a
        className="focus:outline-none"
        target="_blank"
        rel="noreferrer"
        href="https://www.flaticon.com/free-icons/holiday"
        title="holiday icons"
      >
        Holiday icons created by Freepik
      </a>
    ),
  },
  {
    title: 'Special Event (before/after party)',
    description: `Bottle, can & cup cleanup, dispose of leftover food, vacuum carpet & mop floors, return dishes & glasses to kitchen, clean dirty surfaces, and our 6 checkpoint list before we leave.`,
    id: 6,
    href: '#',
    icon: dance,
    iconForeground: 'text-indigo-700',
    iconBackground: 'bg-indigo-50',
    iconAttribution: (
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.flaticon.com/free-icons/party"
        title="party icons"
      >
        Party icons created by Freepik
      </a>
    ),
  },
]
