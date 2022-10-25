export default async function handler(req, res) {
  try {
    const query = req.query
    const { address } = query
    const result = await fetch(
      `https://www.miamidade.gov/Apps/PA/PApublicServiceProxy/PaServicesProxy.ashx?Operation=GetAddress&clientAppName=PropertySearch&from=1&myAddress=${address}&myUnit=&to=200`
    ).then((data) => data.json())

    if (!result.Completed) {
      return res.status(500).json({
        message:
          `Sorry. We could not find this property, or is not listed as a residential property.` ||
          result.Message,
        status: 500,
        code: 500,
      })
    }

    return res.status(200).json({ result, status: 200 })
  } catch (error) {
    return res.status(500).json({
      message: `Our system has detected an unexpected error.`,
      status: error.status,
      code: error.code,
    })
  }
}
