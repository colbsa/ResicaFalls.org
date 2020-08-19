$(document).ready( function () {
  var campsites = $('#campsitesTable').DataTable( {
    paging: false
  } );
  var lodges = $('#lodgesTable').DataTable( {
    paging: false
  } );

  campsites.columns().flatten().each( function ( colIdx ) {
    if (colIdx > 0) {
      // Create the select list and search operation
      var select = $('<select />')
        .appendTo(
          campsites.column(colIdx).footer()
        )
        .on( 'change', function () {
          campsites
            .column( colIdx )
            .search( $(this).val() )
            .draw();
        } );

      // Get the search data for the first column and add to the select list
      campsites
        .column( colIdx )
        .cache( 'search' )
        .sort()
        .unique()
        .each( function ( d ) {
          select.append( $('<option value="'+d+'">'+d+'</option>') );
        } );
    }
  } );

  lodges.columns().flatten().each( function ( colIdx ) {
    if (colIdx > 0) {
      // Create the select list and search operation
      var select = $('<select />')
        .appendTo(
          lodges.column(colIdx).footer()
        )
        .on( 'change', function () {
          lodges
            .column( colIdx )
            .search( $(this).val() )
            .draw();
        } );

      // Get the search data for the first column and add to the select list
      lodges
        .column( colIdx )
        .cache( 'search' )
        .sort()
        .unique()
        .each( function ( d ) {
          select.append( $('<option value="'+d+'">'+d+'</option>') );
        } );
    }
  } );
} );
