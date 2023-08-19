import Sidebar from "./components/sidebar";
import "./page.css"

export default function Home() {
  return (
    <main>
      <div className="main_container">
        <div className="header">

        </div>
        <div className="sidebar">
          <Sidebar/>
        </div>
        <div className="content">

        </div>
      </div>
    </main>
  )
}
