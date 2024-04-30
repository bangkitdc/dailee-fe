import { ModuleList } from "../../components/privates/Home/ModuleList"
import { BottomNav } from "../../components/shares/BottomNav/BottomNav"

export const Home = () => {
  return (
    <div className="flex items-center min-h-screen flex-col">
      <div className="flex flex-col self-stretch flex-1 grow">
        <div>
          <h1>Good Morning, Uhuy!</h1>
        </div>

        <div>
          <ModuleList />
        </div>
      </div>
      <BottomNav
        screen={"home"}
      />
    </div>
  )
}