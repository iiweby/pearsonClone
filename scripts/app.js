// Scrolls to The Top whe Clicked

document
	.getElementById("scrollToTop")
	.addEventListener("click", function (event) {
		event.preventDefault();
		scrollToTop();
	});
const scrollToTop = () => {
	const scrollDuration = 200;
	const scrollStep = -window.scrollY / (scrollDuration / 15);
	const scrollInterval = setInterval(() => {
		if (window.scrollY !== 0) {
			window.scrollBy(0, scrollStep);
		} else {
			clearInterval(scrollInterval);
		}
	}, 15);
};
