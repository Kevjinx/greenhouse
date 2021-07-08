import './ClimateStats.css';
import { useClimate } from '../../context/ClimateContext'

function ClimateStats() {

  //keep rendering until condition meets



  const { humidity, climate }  = useClimate()
  // const [thermostat, setThermostat] = useState(climate)


  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (climate > thermostat) setThermostat(prev => prev + 1)
  //     if (climate < thermostat) setThermostat(prev => prev - 1)
  //     if (climate === thermostat) console.log('equal');
  //   }, 1000)
  //   // if (climate === thermostat) return (clearTimeout(timer))
  // }, [climate])


  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {climate}°F
      </div>
      <div className="humidity">
        Humidity {humidity}%
      </div>
    </div>
  )
}

export default ClimateStats;



// settimeout, condition(current vs desired temp)
//     useeffect and dependency
//   every render ==>