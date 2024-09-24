const logoTrack = document.querySelector('.logo-track');

logoTrack.addEventListener('mouseover', () => {
    logoTrack.style.animationPlayState = 'paused';
});

logoTrack.addEventListener('mouseout', () => {
    logoTrack.style.animationPlayState = 'running';
});
