const stevenvideoiframe = '<iframe width="640" height="360" src="https://www.youtube.com/embed/CiejQyVI-F8"/>'

const craigvideoiframe = '<iframe  width="640" height="360" src="https://www.youtube.com/embed/Ln72UQjBgvM"/>'

const lastkidsvideoiframe = '<iframe width="640" height="360"src="https://www.youtube.com/embed/JnN5kzjZW-c"/>'

function setImage(imageHtml) {
	$('#right').empty().prepend(imageHtml)
}

$('.steven').on('click', function() {
  setImage(stevenvideoiframe)
})

$('.craig').on('click', function() {
  setImage(craigvideoiframe)
})

$('.lastkids').on('click', function() {
  setImage(lastkidsvideoiframe)
})