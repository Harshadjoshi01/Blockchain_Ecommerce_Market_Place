import Main from '../components/Main'
import Sidebar from '../components/Sidebar'

const styles = {
  container: `h-full w-full flex bg-gradient-to-r from-[#e0eafc] to-[#cfdef3]`,
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Sidebar/>
      <Main/>
    </div>
  )
}