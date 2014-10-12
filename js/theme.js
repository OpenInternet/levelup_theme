/**
 * @file
 * A JavaScript file for the theme.
 */

(function ($, Drupal, window, document, undefined) {
  Drupal.behaviors.theme = {};
  Drupal.behaviors.theme.attach = function(context) {

    //Collapsible sections on nodes
    $('.small-links .link-txt').on('click', function(e) {
      relatedMenuParent = $(this).parent().next('div');
      visTest =  $('ul', relatedMenuParent);
      if ($(visTest).is(':visible')) {
        $('.resource-dropdown').hide();
        //$('.resource-link').removeClass('black-bg');
      } else {
        //$('.resource-link').removeClass('black-bg');
        $('.resource-dropdown').hide();
        $('ul', relatedMenuParent).show();
        //$(this).prev('.resource-link').addClass('black-bg');
      }
      e.preventDefault();
    });

    $(document).click(function(e) {
      if($(e.target).parents().index($('.region-topics')) == -1) {
        if($('.region-topics .resource-dropdown').is(":visible")) {
          //$('.region-topics .resource-link').removeClass('black-bg');
          $('.region-topics .resource-dropdown').hide()
        }
      }
    })

    $('#block-levelup-blocks-resource-links .link-wrap').hover(function() {
       var theContent = $('a.resource-link', this).attr('data');
       $(this).parent().append('<p class="link-popover">' + theContent + '</p>');
    }, function() {
      $('.resource-links .link-popover').remove();
    });
    
    // Add active classes
    var parts = window.location.pathname.split( '/' );
    currentPath = parts[1];
    opacLvl = '0.16';
    switch (currentPath) {

      case 'resources-for-trainers':
        $('.link-wrap.trainers a.resource-link').css('opacity', opacLvl).css('background-color', '#000');
        break;
      case 'resources-for-leading-trainings':
        $('.link-wrap.trainings a.resource-link').css('opacity', opacLvl).css('background-color', '#000');
        break;
      case 'about':
        $('.link-wrap.trainingtrainers a.resource-link').css('opacity', opacLvl).css('background-color', '#000');
        break;
      case 'topics':
        $('.link-wrap.topics a.resource-link').css('opacity', opacLvl).css('background-color', '#000');
        break;

    }

  }

})(jQuery, Drupal, this, this.document);
