import { useEffect, useState } from 'react'
import Matchup from './Matchup.tsx'

interface Props {
  players: string[]
}

export default function Game ({ players }: Props) {
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
    <div style={{
      background: 'gray',
      marginBottom: '10px'
    }}>
      {matchups.map((match, index) => <Matchup index={index} match={match} select={select} />)}
    </div>

    {winners.length === players.length / 2 && <Game players={winners} />}
  </>
}