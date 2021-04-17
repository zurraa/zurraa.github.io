/*---------------- bg animation effect---------------*/
function bgAnimationItems(){
	const row = 7, cols = 10;
	for(let i = 0; i < row; i++){
		for(let j = 0; j < cols; j++){
			const div = document.createElement("div");
			div.className = 'col-$(j+1)';
			document.querySelection(".bg-animation-effect").appendChild(div);
		}
	}
}
bgAnimationItems();

allert("Selamat Datang Di Website Portofolio GUS")