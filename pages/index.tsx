import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Scoreboard.module.css'
import FlagLevel from '../components/FlagLevel'
import LowerLevel from '../components/LowerLevel'

const Scoreboard: NextPage = () => {
  return (
    <Layout title="ASU 2022 | Tablero">
      <div id="tablero">
		<FlagLevel />
		<LowerLevel />	
      </div>
	</Layout>
  )
}

export default Scoreboard;
