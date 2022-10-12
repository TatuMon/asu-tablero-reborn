import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createContext, useState } from 'react'

const TeamsContext = createContext({});
const [localTeam, setLocalTeam] = useState({name: "argentina", lov: "local"});
const [visitTeam, setVisitTeam] = useState({name: "brazil", lov: "visit"});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TeamsContext.Provider value={{localTeam, setLocalTeam, visitTeam, setVisitTeam}}>
      <Component {...pageProps} />
    </TeamsContext.Provider>
  )
}

export default MyApp
