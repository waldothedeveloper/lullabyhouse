export const pricingTable = {
  typesOfServices: {
    basic: {
      price_per_square_feet: 0.18,
    },
    deep: {
      price_per_square_feet: 0.22,
    },
    vacantHouse: {
      // this is move in ~ move out
      price_per_square_feet: 0.33,
    },
    openHouse: {
      // when working with realtors
      price_per_square_feet: 0.22,
    },
    holiday: {
      price_per_square_feet: 0.35,
    },
    specialEvent: {
      // birthday parties and things like that
      price_per_square_feet: 0.28,
    },
  },
  serviceFrecuency: {
    justOnce: {
      discount: 0,
    },
    everyWeek: {
      discount: 20,
    },
    every2Weeks: {
      discount: 15,
    },
    onceAMonth: {
      discount: 10,
    },
  },
  extras: {
    changingBedSheets: {
      price: 5,
      perUnit: true,
      flat: false,
      perLoad: false,
    },
    dustingAndCleaningBlinds: {
      price: 20,
      perUnit: false,
      flat: false,
      perLoad: false,
    },
    exteriorWindowCleaning: {
      price: 6,
      perUnit: true,
      flat: false,
      perLoad: false,
    },
    fridgeCleaning: {
      price: 25,
      perUnit: false,
      flat: true,
      perLoad: false,
    },
    cabinetOrganization: {
      price: 50,
      perUnit: false,
      flat: true,
      perLoad: false,
    },
    washAndDryLaundry: {
      price: 10,
      perUnit: false,
      flat: false,
      perLoad: true,
    },
    interiorWindowCleaning: {
      price: 4,
      perUnit: true,
      flat: false,
      perLoad: false,
    },
    cleaningInteriorOfCabinets: {
      price: 35,
      perUnit: false,
      flat: true,
      perLoad: false,
    },
    ovenCleaning: {
      price: 35,
      perUnit: false,
      flat: true,
      perLoad: false,
    },
  },
}

/*

!1. Labor Costs
Contractors will receive 50% of the total flat rate.
The business will work with the remaining 50%

!2. Payroll Taxes
- This will take 0.18% of your labor cost

!3. Factor in Supplies Costs
- Add 6% to this

!4. Factor in Overhead
 - Add 50% to cover these costs

!5. Add your Markup
- Add 33% on top of your cost. You can reduce this number, but don't undersell yourself.



!The Operating Expenses are 30%
!Owner Compensation 50%
!Business Profit 5%
!Taxes 15%


Example with basic cleaning

price: $0.18 square foot

It will be $277 

50% of 277 is 138.50

50% of 138.50 is $69.25 for owner compensation
30% of 138.50 is $41.55 for operating expenses
5% of 138.50 is $6.95 for business profit
15% of 138.50 is $20.77 for taxes
*/
