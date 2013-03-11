(function($){
  var move_responses = function(){
    $('.post-container li.in-reply-to').each(
      function(i,elm){
        response = $(elm).closest('.post-container');
        if(parent_id = $(elm).children('a')[0].href.split('#')[1]){
            parent_elm = $('div.post-container[data-post-id="'+ parent_id +'"]')[0];
            if(!parent_elm)
              $(response).css('margin-top', '10px');
            if(response.parent().attr('name') != $(parent_elm).attr('name')){
              var author = response.data('post-author-username');
              var time = response.find('.timestamp').attr('title');
              response.after('<div style="border-bottom: 1px solid #ddd">Moved the response of '+ author +' @ '+ time +' to <a href="#'+ response.attr('name') +'">the corresponding thread</a>.</div>');
              $(parent_elm).append(response);
              response.css({'margin-left': '10px'});
              response.attr('id', response.attr('name'));
            }
        }
      }
    )
  }
  $('.stream-container').resize(move_responses);
  move_responses();
})(jQuery);
