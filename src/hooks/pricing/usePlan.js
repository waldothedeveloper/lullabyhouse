import { useEffect, useState } from 'react'

export const usePlan = (date) => {
  const [subscriptionPlans, setSubscriptionPlans] = useState(null)

  //
  useEffect(() => {
    if (date?.serviceFrecuency) {
      const { cadence } = date?.serviceFrecuency || null

      if (cadence) {
        fetch('/api/pricing/catalog')
          .then((res) => res.json())
          .then((data) => {
            const subPlan = data?.objects?.filter(
              (elem) =>
                elem?.subscriptionPlanData?.phases[0].cadence === cadence
            )
            setSubscriptionPlans(subPlan)
          })
      }
    }
  }, [date])

  return { subscriptionPlans }
}
