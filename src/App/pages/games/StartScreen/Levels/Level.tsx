import React from 'react';

interface ILevelProps {
	level: string;
	title: string;
	className: string;
	setStartGameParam: ({
		groupNumber, pageNumber,
	}: {
		groupNumber: number; pageNumber: number;
	}) => void;
	groupNumber: number;
	pageNumber: number;
}

// eslint-disable-next-line space-in-parens, prefer-arrow-callback
const Level = React.memo( function Level({
	level, title, className, setStartGameParam, groupNumber, pageNumber,
}: ILevelProps) {
	return (
		<button
			type="button"
			className={`level col-4 col-xl-6 col-md-12 ${className}`}
			onClick={() => setStartGameParam({ groupNumber, pageNumber })}
		>
			<div className={`level__cerf ${className}`}>
				<h3 className="h3">{level}</h3>
			</div>
			<h4 className="h4">{title}</h4>
		</button>
	);
});

export {
	Level,
};
