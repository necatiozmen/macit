export const setDeviceType = () => {

	let deviceType;
	let screenType;

	if (typeof window !== 'undefined') {
		if (window.matchMedia('(max-width: 575px)').matches) {
			deviceType = 'mobile';
			screenType = 'xSmall';
		} else if (window.matchMedia('(max-width: 767px)').matches) {
			deviceType = 'tablet';
			screenType = 'small';
		} else if (window.matchMedia('(max-width: 991px)').matches) {
			deviceType = 'tablet';
			screenType = 'medium';
		} else if (window.matchMedia('(max-width: 1199px)').matches) {
			deviceType = 'desktop';
			screenType = 'large';
		} else {
			deviceType = 'desktop';
			screenType = 'xLarge';
		}
	}

	return { deviceType, screenType };
};
