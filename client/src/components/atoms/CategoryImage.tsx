import React, { PureComponent } from 'react'
import cx from 'classnames'
import styles from './CategoryImage.module.scss'

import Enviroment from '../../img/categories/green-energy.jpg';
import Food from '../../img/categories/Fruitsveggies.jpg';
import Shelter from '../../img/categories/shelter.png';
import Space from '../../img/categories/space.jpg';
import Water from '../../img/categories/water.jpg';
import Disaster_Resilience from '../../img/categories/data.jpg';
import Governance from '../../img/categories/politics.jpg';
import Learning  from '../../img/categories/learning.jpg';
import Prosperity from '../../img/categories/prosperity.jpg'
import Security from '../../img/categories/security.jpg'
import Health from '../../img/categories/health.jpg'
import Energy from "../../img/categories/solar-panels.jpg"
import aiforgood from '../../img/categories/artifical_intelligence.jpg'
import AI from '../../img/categories/ai.jpg'
import Blockchain from '../../img/categories/blockchain.jpg'
import Printing from '../../img/categories/3d-printing.jpg'
import Remote_sensing from '../../img/categories/remote-sensing.jpg' 
import Data_analysis from '../../img/categories/data-analysis.jpg';
import Drones from '../../img/categories/drone&robotics.jpg'
import AR from '../../img/categories/vr.jpg'
import Geo_spacial from '../../img/categories/geo.jpg'


const categoryImageFile = (category: string) => {
	switch (category) {
		
			case "Environment":
			return Enviroment

		
		
		case 'Health':
			return Health

	
			case "Food":
		 	return Food

		case 'Space':
			return Space

	
		case 'Water':
		return Water

	
	
			case "Energy":
			return Energy

		
		case 'Prosperity':
	 return Prosperity


	 
		case 'Security':
			return Security

		
		case 'Shelter':
			return Shelter

		
			case "Disaster Resilience":
				return Disaster_Resilience

		case "Governance":
					return Governance

		case "Learning":
				return Learning

				case AI:
		return AI

		
		case "Blockchain":
			return Blockchain
		

		

		
		case "AR/VR":
		
		return AR

		
			case "3D Printing":
			return Printing

			
		


	 
		case "Data Analytics":
	return Data_analysis

			
			
				case "Drones & Robotics":
				
			return Drones

			
		case "Remote Sensing":
	
				return Remote_sensing

		
		case 'Geo-spacial Tech':
			return Geo_spacial
		

		// technically no category
		// but corresponding to title of a channel
		case 'AI For Good':
			return aiforgood
		default:
			return aiforgood
	}
}



export default class CategoryImage extends PureComponent<{
	category: string
	header?: boolean
	dimmed?: boolean
}> {
	public render() {
		const image = categoryImageFile(this.props.category)
		const classNames = cx(styles.categoryImage, {
			[styles.header]: this.props.header,
			[styles.dimmed]: this.props.dimmed
		})

		return (
			<div
				className={classNames}
				style={{ backgroundImage: `url(${image})` }}
			/>
		)
	}
}


	// case 'Blockchain':
		// case "IoT":
		// case "AR/VR":
		// case "Bio-Tech":
		// case "3D Printing":
		// case "Data Analytics":
		// case "Drones & Robotics":
		// case "Remote Sensing":
		// case "Geo-spacial Tech":
		// case "Food tracebility data":
		// case "Farming & Logistics IoT data":
		// case "AR on-demand expert for farming":
		// case "Biotech, nanotech data on food shelve life enhancement, increasing yields & improving nutrition":
		// case "3D Printing of cultured meat":
		// case "Food Data Analytics":
		// case "Drones & Robotics for farming":
		// case "Remote Sensing for farming e.g soil & water analysis":
		// case "Geo-spacial Tech for farming e.g soil & water analysis":