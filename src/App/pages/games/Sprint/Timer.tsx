import { useState, useEffect } from 'react';

interface ITimerProps {
  onEndCallback: () => void;
}
export function Timer({ onEndCallback }: ITimerProps) {
	const [seconds, setSeconds] = useState(60);
	useEffect((): undefined | (() => void) => {
		if (seconds >= 1) {
			const interval = setInterval(() => {
				setSeconds(seconds - 1);
			}, 1000);
			return () => clearInterval(interval);
		}
		onEndCallback();
		return undefined;
	}, [seconds, onEndCallback]);
	return (
		<h4 className="sprint-game__counter h4 sprint-game__row-4">{seconds}</h4>
	);
}
