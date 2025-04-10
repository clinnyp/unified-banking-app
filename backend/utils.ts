export const formatCurrency = (amount: number) => {
  const formattedAmount = Intl.NumberFormat('en-NZ', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount)

  return `$${formattedAmount}`
}

