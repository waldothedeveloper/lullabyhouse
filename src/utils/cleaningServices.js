import basic from '@/images/icons/basic_cleaning.png'
import dance from '@/images/icons/dance.png'
import deep from '@/images/icons/deep_cleaning.png'
import holiday from '@/images/icons/holiday.png'
import realtor from '@/images/icons/realtor_open_house.png'
import vacantHouse from '@/images/icons/vacant_house.png'

//
export const typesOfCleaningServices = [
  {
    id: 1,
    price_per_square_feet: 0.18,
    title: 'Basic',
    key: 'basic',
    description: `Dust, wipe down, scrub, floors & baseboards, emptying the trash, return supplies, changing bedding & make beds.`,
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
    id: 2,
    price_per_square_feet: 0.22,
    title: 'Deep',
    key: 'deep',
    description: `All included in basic, extended time for areas of focus, add-Ons such as inside oven, inside refrigerator, inside cabinets.`,
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
    id: 3,
    price_per_square_feet: 0.33,
    title: 'Vacant House (move in/out)',
    key: 'vacantHouse',
    description: `Every inch of the property will be spotless, we will clean microwaves, ovens, ranges, sanitizing coutertops, sinks, bathtubs, showers, cleaning inside drawers.`,
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
    id: 4,
    price_per_square_feet: 0.22,
    title: 'Open House',
    key: 'openHouse',
    description: `Ideal for local real state agents & realtors who are planning an open house showings. We will leave the property perfect for staging, zero cobwebs, zero dust.`,
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
    id: 5,
    price_per_square_feet: 0.35,
    title: 'Holiday',
    key: 'holiday',
    description: `We will cleanup your entryways and foyers used in grand holiday entrances, streak-free windows, clean stairs, pristine appliances, faucets, and fixtures, welcoming clean bathrooms.`,
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
    id: 6,
    price_per_square_feet: 0.28,
    title: 'Special Event (before/after party)',
    key: 'specialEvent',
    description: `Bottle, can & cup cleanup, dispose of leftover food, vacuum carpet & mop floors, return dishes & glasses to kitchen, clean dirty surfaces.`,
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
