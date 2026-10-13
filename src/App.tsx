import * as numberInput from "@zag-js/number-input"
import { normalizeProps, useMachine } from "@zag-js/react"
import { useId, useState } from "react"

const MAX = 10

export function App() {
  // The parent controls the value and never lets it go above MAX
  const [value, setValue] = useState("")

  const service = useMachine(numberInput.machine, {
    id: useId(),
    value,
    onValueChange(details) {
      setValue(details.valueAsNumber > MAX ? String(MAX) : details.value)
    },
  })

  const api = numberInput.connect(service, normalizeProps)

  return (
    <main style={{ fontFamily: "sans-serif", padding: 24 }}>
      <div {...api.getRootProps()}>
        <label {...api.getLabelProps()}>Quantity (at most {MAX})</label>
        <div {...api.getControlProps()}>
          <input data-testid="input" {...api.getInputProps()} />
        </div>
      </div>
      <p>
        Parent value: <output data-testid="value">{value}</output>
      </p>
      <p>
        Type <kbd>10</kbd>, then type a <kbd>0</kbd> after it. The parent keeps the value at 10, but the input shows
        100 until it loses focus.
      </p>
    </main>
  )
}
