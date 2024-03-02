import { FormEvent } from 'react'
import { useAtom } from 'jotai'
import { PlayersAtom } from '../../atoms/Players.ts'

interface Props {
  next: () => void
}

export default function Setup ({ next }: Props) {
  const [players, setPlayers] = useAtom(PlayersAtom)

  const add = (event: FormEvent) => {
    event.preventDefault()
    const target = event.target as typeof event.target & HTMLFormElement & {
      name: {
        value: string
      }
    }
    setPlayers([...players, target.name.value])
    target.reset()
  }

  return <div>
    <form onSubmit={add}>
      <input type="text" name="name" placeholder="name"/>
      <button type="submit">Submit</button>
    </form>

    <div>
      current:

      {players.map(name => <p key={name}>
        {name}
      </p>)}
    </div>

    <button onClick={() => next()}>continue</button>
  </div>
}