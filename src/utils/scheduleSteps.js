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
    verifiedDateAndTime: null,
    description:
      'Please let us know what day and time you would like us come clean your home',
  },
  // phoneNumber: {
  //   id: 4,
  //   title: 'Enter your Contact Info',
  //   href: '/schedule/getCustomerDetails',
  //   status: 'upcoming',

  //   verifiedUserInfo: null,
  //   description:
  //     'You will need to be contacted in the event of an unforeseen event',
  // },
}

/* 
 STEP 4???
      verifiedUserInfo: {
        phone: 555-555-5555
        email: email@gmail.com
      }
      */
