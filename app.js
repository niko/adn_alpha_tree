/*
 * jQuery resize event - v1.1 - 3/14/2010
 * http://benalman.com/projects/jquery-resize-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,h,c){var a=$([]),e=$.resize=$.extend($.resize,{}),i,k="setTimeout",j="resize",d=j+"-special-event",b="delay",f="throttleWindow";e[b]=250;e[f]=true;$.event.special[j]={setup:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.add(l);$.data(this,d,{w:l.width(),h:l.height()});if(a.length===1){g()}},teardown:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.not(l);l.removeData(d);if(!a.length){clearTimeout(i)}},add:function(l){if(!e[f]&&this[k]){return false}var n;function m(s,o,p){var q=$(this),r=$.data(this,d);r.w=o!==c?o:q.width();r.h=p!==c?p:q.height();n.apply(this,arguments)}if($.isFunction(l)){n=l;return m}else{n=l.handler;l.handler=m}}};function g(){i=h[k](function(){a.each(function(){var n=$(this),m=n.width(),l=n.height(),o=$.data(this,d);if(m!==o.w||l!==o.h){n.trigger(j,[o.w=m,o.h=l])}});g()},e[b])}})(jQuery,this);

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
