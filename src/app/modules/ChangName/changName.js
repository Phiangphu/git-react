import React from 'react'
import FormikTextField from '../Common/components/CustomFormik/FormikTextField'
import AddButton from '../Common/components/Buttons/AddButton'
import { Grid } from '@material-ui/core'
function changName() {
	return (
		<Grid
			container
			direction="row"
			justify="center"
			alignItems="center"
		>
			<FormikTextField></FormikTextField>
			<AddButton></AddButton>
		</Grid>

	)
}

export default changName
