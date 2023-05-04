$('.update_cart').click(function(e){
	e.preventDefault()
	var product_id = $(this).attr("product_id");
	console.log(product_id)
	$.ajax(
	{
	    type:"POST",
	    url: "http://rubina.pythonanywhere.com/insert_cart/",
	    data:{
	      		'product_id' : product_id,
	      		'csrfmiddlewaretoken' : '{{ csrf_token }}',
		},
		dataType : 'json',
		success: function(response)
		{
			console.log(response['total_item_cart'])
			// $('#cart-total').text(response['total_item_cart'])
			window.location.reload();
		}
	})
});



$('.update_cart_quantity').click(function(e){
	e.preventDefault()
	var product_id = $(this).attr("product_id");
	var action = $(this).attr("action")
	console.log(product_id)
	$.ajax(
	{
	    type:"POST",
	    url: 'http://rubina.pythonanywhere.com/cart/update_item/',
	    data:{
	      		'product_id' : product_id,
	      		'action' : action,
	      		'csrfmiddlewaretoken' : '{{ csrf_token }}',
		},
		dataType : 'json',
		success: function(response)
		{

			window.location.reload();
		}
	})
});

