import React, { PureComponent } from 'react'
import cx from 'classnames'
import styles from './CategoryImage.module.scss'

import aiforgood from '../../img/categories/artifical_intelligence.jpg'
import AI from '../../img/categories/ai.jpg'
import Blockchain from '../../img/categories/blockchain.jpg'
import Bio_Tech from '../../img/categories/bio.jpg';
import Printing from '../../img/categories/3d-printing.jpg'
import Remote_sensing from '../../img/categories/remote-sensing.jpg' 
import IoT from '../../img/categories/iot.jpg'
import Data_analysis from '../../img/categories/data-analysis.jpg';
import Drones from '../../img/categories/drone&robotics.jpg'
import AR from '../../img/categories/vr.jpg'
import Geo_spacial from '../../img/categories/geo.jpg'


const ImageFile = (tags: string) => {
	switch (tags) {
		
		
		case "Blockchain":
			return Blockchain
		

		case 'IoT':
			return IoT

		
		case "AR/VR":
		
		return AR

		
			case "3D Printing":
			return Printing

			
		case "Bio Technology":
	
	 return Bio_Tech


	 
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
			return AI
	}
}



export default class Image extends PureComponent<{
	tags: string
	header?: boolean
	dimmed?: boolean
}> {
	public render() {
		const image = ImageFile(this.props.tags)
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


