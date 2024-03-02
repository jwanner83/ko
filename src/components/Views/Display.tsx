import { useAtomValue } from 'jotai'
import { PlayersAtom } from '../../atoms/Players.ts'
import Game from '../Game/Game.tsx'

export default function Display () {
  const players = useAtomValue(PlayersAtom)

  return <div>
    <Game players={players} />
  </div>
}