import { useAtomValue } from 'jotai'
import { PlayersAtom } from '../../atoms/Players.ts'
import Game from '../Game/Game.tsx'

export default function Display () {
  const players = useAtomValue(PlayersAtom)

  return <div className="p-8">
    <h1>

    </h1>

    <Game players={players} index={0} />
  </div>
}