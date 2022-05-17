const validClassNameHandler =
	(regex = /p|m/, message = 'only p-* m-*') =>
	(props, propName, componentName) => {
		const classes = props[propName]?.split(' ') ?? [];
		if (classes.some((i) => !new RegExp(regex).test(i))) {
			return new Error(
				'Invalid prop `' +
					propName +
					'` supplied to' +
					' `' +
					componentName +
					`Validation failed ${message} `,
			);
		}
	};

export default validClassNameHandler;
