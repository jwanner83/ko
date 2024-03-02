import { useState } from 'react'
import Button from '../Common/Forms/Button.tsx'

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

  return <div className="px-5 py-4 text-sm bg-form-background-focus text-white rounded-xl w-full">
    <h3 className="text-lg font-bold mb-3">Game {index + 1}</h3>
    <div className="flex flex-col gap-2">
      <Button className="font-bold" disabled={!!(selected && selected !== match[0])} onClick={() => change(match[0])}>{match[0]}</Button>
      <Button className="font-bold" disabled={!!(selected && selected !== match[1])} onClick={() => change(match[1])}>{match[1]}</Button>
    </div>
  </div>
}