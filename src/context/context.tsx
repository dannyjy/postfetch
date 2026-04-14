import { createContext } from "react"
import type { URLContextValue } from "../types/types"

const URLContext = createContext<URLContextValue | undefined>(undefined)

export { URLContext }
