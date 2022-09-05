export function playAudio() {
	const gamePlaySoundButton$ = document.querySelector('.game__play-sound-button') as HTMLAudioElement;
	const audio$ = document.querySelector('#audio') as HTMLAudioElement;
	audio$.addEventListener('playing', () => {
		gamePlaySoundButton$.classList.add('playing');
	});
	audio$.pause();
	audio$.load();
	audio$.play();
	gamePlaySoundButton$.addEventListener('animationend', () => {
		gamePlaySoundButton$.classList.remove('playing');
	});

}
