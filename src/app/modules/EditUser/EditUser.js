import React from 'react'
import { Grid } from '@material-ui/core'

function EditUser() {
	return (
		<div>
			<Grid
				container
				direction="row"
				justify="center"
				alignItems="center"
			>
				<FormikTextField></FormikTextField>
				<AddButton></AddButton>
			</Grid>
		</div>
	)
}

export default EditUser
