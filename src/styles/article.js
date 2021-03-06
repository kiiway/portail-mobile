import { colors } from './variables';

export const article = {
	container: {
		borderWidth: 1,
		borderColor: colors.lightGray,
		marginHorizontal: 5,
		marginBottom:10,
		backgroundColor: colors.white,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		padding:10,
		paddingBottom: 5,
	},

	loadingIndicatorContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		flex:1,
	},
	loadingIndicatorText: {
		color: colors.lightGray,
	},
	articlesFeedContainer: {
		flex:1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 2,
		backgroundColor: colors.veryLightGray,
	},
	contentContainer: {
		backgroundColor: colors.white,
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		marginBottom:0,
		marginTop:3,
		maxWidth: '100%',
	},
	titleContainer: {
		maxWidth: '100%',
	},
	title: "text-align:left;font-size:20;",
	buttonContainer: {
		backgroundColor: colors.white,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 0,
		marginBottom:0,
		maxWidth: '100%',
		paddingVertical: 7,
		paddingTop: 17,
	},
	buttonImage: {
		height: 20
	},
	imageContainer: {
		backgroundColor: colors.veryLightGray,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 5,
		marginBottom:2,
		maxWidth: '100%',
	},
	contentMarkdown : {},
	descriptionConstants: {
		textColor: colors.black,
	},
	authorContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 3,
	},
	authorImage: {
		height:30,
		width:30,
	},
	dateText: {
		color: colors.gray,
	},
	dateContainer: {
		marginLeft: 8,
	},
	headersContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	authorText: {
		color: colors.black,
		marginLeft: 4,
	},
	fullActionsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'flex-end',
		width: '100%',
		marginVertical: 5,
	},
	onlyCommentsActionsContainer :{
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		width: '100%',
	},
	commentsIconText: {
		marginRight: 0.5,
		fontSize: 10,
		textAlign: 'center',
		width: 15,
		height: 15,
		color: colors.yellow,
	},
	actionIcon :{
		height:30,
		width: 30,
	}
};
