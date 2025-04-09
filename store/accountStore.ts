import { create } from "zustand";
import { fetchAccounts } from "../api/api";

type AccountState = {
  accounts: any[]
  getAccounts: () => Promise<void>
}

export const useAccountStore = create<AccountState>((set) => ({
  accounts: [],
  getAccounts: async () => {
    try {
      const { data } = await fetchAccounts()
      set({ accounts: data.items })
    } catch (error) {
      throw new Error(error)
    }
  }
}))