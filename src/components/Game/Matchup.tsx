import { useState } from 'react'

interface Props {
  index: number
  match: [string, string]
  select: (name: string) => void
}

export default function Matchup ({ match, select, index }: Props) {
  const [selected, setSelected] = useState<string | undefined>(undefined)

  const change = (name: string) => {
    setSelected(name)
    select(name)
  }

  return <div>
    <p>game {index + 1}</p>
    <div>
      <button style={{
        background: selected === match[0] ? 'blue' : ''
      }} onClick={() => change(match[0])}>{match[0]}</button>
      <span>vs.</span>
      <button style={{
        background: selected === match[1] ? 'blue' : ''
      }} onClick={() => change(match[1])}>{match[1]}</button>
    </div>
  </div>
}