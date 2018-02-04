(function($) {
  $.fn.inputDropper = function() {
    // Тут пишем функционал нашего плагина

    var checkBoxLength = this.find(':checkbox');
    
    checkBoxLength.change(function () {
      
      // var valDropper = $(this).is(":checked").siblings();
      // var checkedLength = checkBoxLength.size();

      var valChecked = $(this).siblings('label').html();

      var inputDropperVal = $(this).parent().parent().siblings('.input-dropper').children('.input-dropper-valuelue');

      var checkBoxChecked = $(this).parent().parent().find(":checkbox:checked").siblings().map(function() {
        return $(this).html();
      });

      var dataDef = inputDropperVal.data('valDef');

      if ($(this).is(':checked') || !$(this).is(':checked')) {

        inputDropperVal.empty();

        $.each(checkBoxChecked, function() {

          inputDropperVal.append(this);

        });

        // console.log(checkBoxChecked);
        
      } if (checkBoxChecked.length == 0) {

        inputDropperVal.empty().html(dataDef);

      }



      // console.log(valDropper);

    });

  };
})(jQuery);
