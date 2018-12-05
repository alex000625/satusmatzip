var tab;
tab = sessionStorage.getItem('tabnumber');

$(document).ready(function(){


	//Select the first tab and div by default
	$('#tab_nav > ul > li > a').eq(tab).addClass( "selected" );
	$('#tab_nav > div').eq(tab).addClass( "selected" );
	$('#tab_nav > .selected > div').find('div').andSelf().css('display','block');

  //EVENT DELEGATION
	//This assigns an onclick event listener to the UL tag.
  //Then it checks what A tag was selected.
		$('#tab_nav > ul').on('click','a',function(){

        var aElement = $('#tab_nav > ul > li > a');
        var divContent = $('#tab_nav > div');

         /*Handle Tab Nav*/
			   aElement.removeClass( "selected");
			   $(this).addClass( "selected");

        /*Handle Tab Content*/
			   var clicked_index = aElement.index(this);
			   divContent.css('display','none');
			   divContent.eq(clicked_index).find('div').andSelf().css('display','block');


		   	$(this).blur();
			  return false;

		});


});//end ready

//Restaurant list js//
$(document).ready(function() {
    $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
    $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
});
