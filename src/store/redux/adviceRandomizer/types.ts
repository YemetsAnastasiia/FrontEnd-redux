export interface adviceRandomizerSliceState {
  slip: string[]
  error: any
  status: "default" | "loading" | "success" | "error"
}
