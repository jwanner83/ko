import { useEffect, useState } from 'react'
import Matchup from './Matchup.tsx'

interface Props {
  index: number
  players: string[]
}

export default function Game ({ players, index }: Props) {
  const [winners, setWinners] = useState<string[]>([])
  const [matchups, setMatchups] = useState<[string, string][]>([])

  useEffect(() => {
    let matchups: [string, string][] = []

    let first: string | undefined =  undefined

    for (const player of players) {
      if (!first) {
        first = player
        continue
      }

      matchups.push([first, player])
      first = undefined
    }
    setMatchups(matchups)
  }, [players])

  const select = (winner: string) => {
    setWinners([...winners, winner])
  }

  return <>
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-white mb-3">
        Round {index + 1}
      </h2>

      <div className="flex gap-3">
        {matchups.map((match, index) => <Matchup index={index} match={match} select={select}/>)}
      </div>
    </div>

    {winners.length === players.length / 2 && winners.length !== 1 && <Game players={winners} index={index + 1}/>}
    {winners.length === players.length / 2 && winners.length === 1 && <div>
        <h2 className="text-2xl font-bold text-white mb-3">
            Winner
        </h2>

        <div className="px-5 py-4 text-sm bg-form-background-focus text-white rounded-xl w-full">
            <h3 className="text-lg font-bold mb-2">{winners[0]}</h3>

            <p className="">
                Well done, {winners[0]}. You won.
            </p>
        </div>
    </div>}
  </>
}