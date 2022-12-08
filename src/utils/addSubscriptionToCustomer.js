import { convertDollarsToCents } from '@/utils/convertDollarsToCents'
import { format } from 'date-fns'
//
export const addSubscriptionToCustomer = async (
  date,
  subscriptionPlans,
  card,
  id,
  price
) => {
  const { subscription } = await fetch(`/api/pricing/add_subscription`, {
    method: 'POST',
    headers: {
      'content-type': `application/json`,
    },
    body: JSON.stringify({
      startDate: format(date?.verifiedDateAndTime, 'yyyy MM dd').replaceAll(
        ' ',
        '-'
      ),
      planId: subscriptionPlans[0].id,
      amount: convertDollarsToCents(price?.notFormattedPrice),
      cardId: card.id,
      customerId: id,
    }),
  })
    .then((res) => res.json())
    .then((data) => data)

  return subscription
}
