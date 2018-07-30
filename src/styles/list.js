import { StyleSheet } from 'react-native'
import { spaces, colors } from './variables'


export const simple = StyleSheet.create({
	header: {
		backgroundColor: colors.lightGray,
		paddingHorizontal: spaces.xl,
		paddingVertical: spaces.sm,
		fontSize: 18,
	},
	itemView: {
		backgroundColor: colors.white,
		flexDirection: 'row',
		padding: spaces.md,
		borderBottomColor: colors.lightGray,
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	itemIcon: {
		width: 50,
		height: 50,
		borderRadius: 25,
		marginRight: spaces.lg
	},
	itemTitle: {

	},
	itemText: {

	},
})

export default {
	simple
}