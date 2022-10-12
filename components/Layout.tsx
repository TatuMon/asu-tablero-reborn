import Head from 'next/head';
import {FC, PropsWithChildren} from 'react';
import {BsMoon} from 'react-icons/bs' 

type LayoutData = PropsWithChildren & {
	title?: string
};

const Layout: FC<LayoutData> = ({children, title}: LayoutData) => {
  return (
  <>
    <Head>
      <title>{title || "ASU Tablero"}</title>
    </Head>

	  <main className="bg-cover bg-light-pattern dark:bg-dark-pattern">	
      <div className="mx-12">
        <div><BsMoon /></div>
        {children}
      </div>
	  </main>
	</>
  )
}

export default Layout;
