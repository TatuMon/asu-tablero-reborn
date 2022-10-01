import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Scoreboard.module.css'

const AdminScoreboard: NextPage = () => {   
  return (
    <Layout title="ASU 2022 | Admin">
      <div id="tablero">
        <div className="local-column">
			<h1>Hola admin!</h1>
		</div>

        <div className="neutral-column">
		</div>

        <div className="visit-column">
		</div>
      </div>
	</Layout>
  )
}

export default AdminScoreboard;
