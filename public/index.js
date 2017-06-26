$(document).ready(() => {
	$('#formo').submit(e => {
		e.preventDefault();
		$.ajax('/fact', {
			cache: false,
			method: 'POST',
			data: {
				'n': $('#number').val
			},
			success: (result, status, xhr) => {
				$('#valor').html = result;
			},
			error: (xhr, status, error) => {
				console.log("deu ruim");
				console.log(error);
			}
		});
		return false;
	});
});
