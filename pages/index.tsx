import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Scoreboard.module.css'

const Scoreboard: NextPage = () => {   
  return (
    <Layout title="ASU 2022 | Tablero">
      <div id="tablero">
        <div className="local-column">
			<h1>Hola</h1>
		</div>
		
        <div className="neutral-column">
		</div>

        <div className="visit-column">
		</div>
      </div>
	</Layout>
  )
}

export default Scoreboard;
