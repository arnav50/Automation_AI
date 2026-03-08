function checkElement(isPresent, isDisplayed, isEnabled) {
	const status = !isPresent
		? 'Not Found'
		: !isDisplayed
			? 'Hidden'
			: !isEnabled
				? 'Disabled'
				: 'Ready';

	const severity = !isPresent ? 'Critical' : (!isDisplayed || !isEnabled) ? 'Warning' : 'Ok';

	let action;
	switch (status) {
		case 'Not Found':
			action = 'Element not found in DOM. Verify selector or wait for page load.';
			break;
		case 'Hidden':
			action = 'Element present but not displayed. Consider waiting, scrolling, or checking CSS.';
			break;
		case 'Disabled':
			action = 'Element visible but disabled. Check preconditions or enable flow.';
			break;
		case 'Ready':
			action = 'Element ready for interaction.';
			break;
	}

	const result = { status, severity, action };
	console.log('Visibility check:', result);
	return result;
}


if (typeof module !== 'undefined' && module.exports) {
	module.exports = { checkElement };
}

// Example usage when run directly
if (require && require.main === module) {
	const sample = checkElement(true, true, false);
	// eslint-disable-next-line no-console
	console.log('Sample result:', sample);
}