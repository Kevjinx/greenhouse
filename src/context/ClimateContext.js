import { createContext, useContext, useState } from 'react'

// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%


export const ClimateContext = createContext()

export const useClimate = () => useContext(ClimateContext)

export default function ClimateProvider(props) {

	const [climate, setClimate] = useState(50)
	const [humidity, setHumidity] = useState(40)

	return (
		<ClimateContext.Provider value={{climate, setClimate, humidity, setHumidity}}>
			{props.children}
		</ClimateContext.Provider>
	)


}
