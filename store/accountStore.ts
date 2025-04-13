import { create } from "zustand";
import { fetchAccounts } from "../api/api";

type AccountState = {
  accounts: any[]
  from: any
  to: any
  amount: any

  updateFrom: (account) => void
  updateTo: (account) => void
  updateAmount: (amount) => void
  getAccounts: () => Promise<{ data: any }>
  resetTransferSelection: () => void
}

export const useAccountStore = create<AccountState>((set) => ({
  accounts: [],
  from: '',
  to: '',
  amount: '',

  updateFrom: (account) => set({ from: account }),
  updateTo: (account) => set({ to: account }),
  updateAmount: (amount) => set({ amount }),
  getAccounts: async () => {
    try {
      const { data } = await fetchAccounts()
      set({ accounts: data.items })
      return { data }
    } catch (error) {
      throw new Error(error)
    }
  },
  resetTransferSelection: () => set({
    from: '',
    to: '',
    amount: '',
  })
}))