// Wait for the document to load before running the script 
(function ($) {
  
  // All content is now displayed on one page - no navigation needed
  
  $(window).on('load', function(){
    // Page is loaded - all content sections are visible by default
    console.log('Page loaded - all content visible');
  });
  
})(jQuery);
