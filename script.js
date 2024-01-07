//your JS code here. If required
function removecolor (){
	var colorSelect = document.getElementById("colorSelect");
	var colorIndex = colorSelect.selectedIndex;

	if(colorIndex !== -1)
	{
		colorSelect.remove(colorIndex);
	}
}