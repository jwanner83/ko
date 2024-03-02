import { FormEvent } from 'react'
import { useAtom } from 'jotai'
import { PlayersAtom } from '../../atoms/Players.ts'
import Box from '../Common/Box.tsx'
import Button from '../Common/Forms/Button.tsx'
import { PlayIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline'

interface Props {
  next: () => void
}

export default function Setup({ next }: Props) {
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

  const remove = (name: string) => {
    const filtered = players.filter(player => player !== name)
    setPlayers(filtered)
  }

  return <div className="h-full">
    <Box width="small" className="relative">
      <div className="pt-24 mb-20">
        <h1 className="text-8xl text-white">KO.</h1>
        <p className="text-white/70 mt-2">Create ko system games.</p>
      </div>

      <form onSubmit={add}>
        <h3 className="text-white font-bold mb-3">
          Add players
        </h3>

        <div className="flex gap-3">
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="w-full appearance-none bg-form-background text-white text-sm px-3 py-2 rounded-xl border-form-border border focus:bg-form-background-focus focus:border-form-border-focus focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-70"
          />
          <Button type="submit" className="flex items-center gap-2 font-bold">Add<PlusIcon
            className="w-5 h-5"/></Button>
        </div>
      </form>

      <div className="mt-8">
        <h3 className="text-white font-bold mb-3">
          Players
        </h3>

        {players.length === 0 && <div className="px-4 py-3 text-sm bg-form-background-focus text-white/60 rounded-xl w-full">
            no players yet
        </div>}

        <div className="flex flex-col gap-2 mb-8">
          {players.map(name => <div key={name} className="flex gap-2 items-center">
            <div className="px-4 py-3 text-sm bg-form-background-focus text-white rounded-xl w-full">
              {name}
            </div>
            <Button type="submit" className="bg-delete border-none text-red-500 h-[44px] w-[44px] px-4 py-4 flex items-center gap-2 font-bold text-sm" onClick={() => remove(name)}><TrashIcon
              className="w-5 h-5"/></Button>
          </div>)}
        </div>
      </div>

      <div className="flex justify-end pb-12">
        <Button type="submit" className="flex items-center gap-2 font-bold" disabled={players.length === 0 || players.length % 2 !== 0} onClick={() => next()}>Continue<PlayIcon
          className="w-5 h-5"/></Button>
      </div>
    </Box>
  </div>
}