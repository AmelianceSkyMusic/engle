import { useState, useEffect } from 'react';
import { useTypedSelector } from '../../../store/hooks/useTypedSelector';

interface ITimerProps {
  onEndCallback: () => void;
	duration: number;
}
export function Timer({ onEndCallback, duration }: ITimerProps) {
	const [seconds, setSeconds] = useState(duration);
	const { isLoading } = useTypedSelector((state) => state.words);

	useEffect((): undefined | (() => void) => {
		if (seconds >= 1) {
			const interval = setInterval(() => {
				if (!isLoading) setSeconds(seconds - 1);
			}, 1000);
			return () => clearInterval(interval);
		}
		onEndCallback();
		return undefined;
	}, [seconds, onEndCallback, isLoading]);
	return (
		<h4 className="sprint-game__counter h4 sprint-game__row-4">{seconds}</h4>
	);
}
