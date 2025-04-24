export const formatNumber = (value: number, decimals = 4, minimumFractionDigits = 0) => {
	if (isNaN(value)) {
		return '';
	}

	const formatter = new Intl.NumberFormat('en-US', {
		style: 'decimal',
		minimumFractionDigits: minimumFractionDigits,
		maximumFractionDigits: decimals,
	});

	const formattedNumber = formatter.format(Number(value));

	return formattedNumber.replace(/,/g, '.');
};

export const countUp = (
	start: number,
	end: number,
	duration: number,
	isFormatNumber?: boolean,
) => {
	const [count, setCount] = useState(start);
	const startTime = useRef(0);

	useEffect(() => {
		const step = (timestamp: number) => {
			if (!startTime.current) startTime.current = timestamp;

			const progress = Math.min((timestamp - startTime.current) / duration, 1);

			setCount(Math.floor(start + progress * (end - start)));

			if (progress < 1) requestAnimationFrame(step);
		};

		requestAnimationFrame(step);
	}, [start, end, duration]);

	if (isFormatNumber) {
		return formatNumber(count);
	}

	return count;
};
