import { useMemo, useState } from 'react'

import { useSchedule } from '@/context/provideScheduleContext'

const formatUSD = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
  // roundingIncrement: 5,
})

const formatPercentage = new Intl.NumberFormat('en-US', {
  style: 'percent',
  currency: 'USD',
})

export const useCalculatePrice = () => {
  const [price, setPrice] = useState(null)
  const [products, setProducts] = useState(null)
  const { context } = useSchedule()
  const { address, date, typeOfCleaning } = context

  useMemo(() => {
    const pricePerSquareFeet =
      typeOfCleaning?.typesOfServices?.price_per_square_feet
    const squareFeet = address?.propertyDetails?.livableArea
    const discount = date?.serviceFrecuency?.discount * 100 ?? 0

    const basePrice = pricePerSquareFeet * squareFeet

    const totalExtras =
      date?.extras.length > 0
        ? date?.extras.reduce((prev, curr) => {
            if (curr.flat) {
              return prev + curr.price
            }
            return prev + 0
          }, 0)
        : 0

    const petPremiumCharge = date?.pets?.price

    const totalPrice = basePrice + totalExtras + petPremiumCharge

    const discountedPrice = totalPrice - (totalPrice * discount) / 100

    setPrice({
      basePrice: formatUSD.format(basePrice),
      discountedPrice: formatUSD.format(discountedPrice),
      petPremiumUpCharge: formatUSD.format(petPremiumCharge),
      totalPrice: formatUSD.format(totalPrice),
      discount: formatPercentage.format(date?.serviceFrecuency?.discount),
      discountAmountInCurrency: formatUSD.format(
        date?.serviceFrecuency?.discount * totalPrice
      ),
    })
    setProducts([
      {
        id: 1,
        address: address?.verifiedAddress,
        property: address?.propertyDetails,
        cleaning_service: typeOfCleaning?.typesOfServices?.title,
        date: date?.verifiedDateAndTime,
      },
    ])
  }, [address, typeOfCleaning, date])

  return { price, products, date, address, typeOfCleaning }
}

/*
your price should first add the main service + all of the extras


THEN

Calculate the % off, meaning the Discount or Coupon

Discount formula
The formula for discount is exactly the same as the percentage decrease formula:

discounted_price = original_price - (original_price * discount / 100)


Here's the source: https://www.omnicalculator.com/finance/discount

*/

// CARMENCITA ADDRESS 15560 SW 71 street, Miami FL.
// chanfing bed sheets
// cleaning windows inside and outside
// laundry

// 59.224000000000004
