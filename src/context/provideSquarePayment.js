import { createContext, useContext, useEffect, useState } from 'react'

import { payments } from '@square/web-sdk'
import { useDynamicCallback } from '@/hooks/use_dynamic_callback'

const FormContext = createContext({
  cardTokenizeResponseReceived: null,
  createPaymentRequest: null,
  payments: null,
})

const FormProvider = ({ applicationId, locationId, children, ...props }) => {
  const [instance, setInstance] = useState(null)
  const [createPaymentReq] = useState(null)

  useEffect(() => {
    const abortController = new AbortController()
    const { signal } = abortController

    const loadPayments = async () => {
      await payments(applicationId, locationId).then((res) => {
        if (res === null)
          throw new Error(`Square Web Payments SDK failed to load`)

        if (signal?.aborted) return

        setInstance(res)
        return res
      })
    }

    if (applicationId && locationId) loadPayments(signal)

    return () => abortController.abort()
  }, [applicationId, locationId])

  const cardTokenizeResponseReceived = async (rest) => {
    if (rest.errors || !props.createVerificationDetails) {
      await props.cardTokenizeResponseReceived(rest)
      return
    }
    const verifyBuyerResults = await (instance?.verifyBuyer(rest.token),
    props.createVerificationDetails())
    await props.cardTokenizeResponseReceived(rest, verifyBuyerResults)
  }

  const cardTokenizeResponseReceivedCallback = useDynamicCallback(
    cardTokenizeResponseReceived
  )

  if (!applicationId || !locationId) {
    return `Return some Error component maybe?`
  }
  if (!instance) return null

  const context = {
    cardTokenizedResponseReceived: cardTokenizeResponseReceivedCallback,
    createPaymentReq,
    payments: instance,
  }
  // console.log('context: ', context)

  return <FormContext.Provider value={context}>{children}</FormContext.Provider>
}

export const useForm = () => {
  const context = useContext(FormContext)

  if (context === undefined) {
    throw new Error('useForm must be used within a FormProvider')
  }

  return context
}

export default FormProvider
