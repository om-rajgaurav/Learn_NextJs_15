
import LineChart from "./line-chart"


// it shown inside page.tsx it will only execute a function which is export default
// we do not need to create their component in components folder because it read only pages.tsx so we can create multiple component in same folder 


export default function Dashboard() {
     return (
          <>
               <h1>line chart</h1>
               <LineChart />
          </>
     )
}