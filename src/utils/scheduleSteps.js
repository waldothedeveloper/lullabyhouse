export const scheduleSteps = {
  typeOfCleaning: {
    id: 1,
    href: '/schedule/cleaningServiceType',
    title: `Choose a Service`,
    status: `current`,
    selectedService: null,
    description: `What type of cleaning service are you looking for?`,
  },
  address: {
    id: 2,
    href: '/schedule/getAddress',
    title: 'Enter your Address',
    status: 'upcoming',
    verifiedAddress: null,
    description:
      "Let's  get the details of your house for a more accurate estimate",
  },
  date: {
    id: 3,
    title: 'Choose Date & Time',
    href: '/schedule/getCustomerDateAndTime',
    status: 'upcoming',
    serviceFrecuency: null,
    verifiedDateAndTime: null,
    extras: [],
    description:
      'Please let us know what day and time you would like us come clean your home',
  },
}
