import ReactSlider from "react-slider";
import './Thermometer.css';
import { useState, useEffect } from "react";
import { useClimate } from "../../context/ClimateContext";


function Thermometer() {
  const { climate, setClimate } = useClimate();

  const [thermostat, setThermostat] = useState(climate)


  useEffect(() => {
    if (climate !== thermostat) {
      setTimeout(() => {
        if (climate > thermostat) setThermostat(prev => prev + 1)
        if (climate < thermostat) setThermostat(prev => prev - 1)
      }, 1000)
    }
  }, [climate, thermostat])

//s
  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {thermostat}°F</div>
      <ReactSlider
        value={climate}
        onAfterChange={(val) => setClimate(val)}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;