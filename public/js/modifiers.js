// press cancel -remove values from modal
function modalReset() {
    $(':input').val('');
  }

// modal autofocus on first element  
$('#exampleModal').on('shown.bs.modal', function () {
    $('#ContactName').trigger('focus')
})
