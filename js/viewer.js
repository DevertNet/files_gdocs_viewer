function viewGDocs(file, data) {
	var location = '';
	if (data === undefined) {
		var token = $('#sharingToken').val();
		location = OC.generateUrl('/s/'+token+'/download', null);
	}
	else {
		location = data.fileList.getDownloadUrl(file, data.dir);
	}
	

	OC.dialogs.confirm(t('files_gdocs_viewer', 'A new window will load with the Google Docs Website!'), t('files_gdocs_viewer', 'Open Google Doc File?'), function(answer){
		var loadMask = $('<div class="mask" style="background-image: url(' + OC.imagePath('core', 'loading.gif') + '); background-repeat: no-repeat;"></div>').appendTo('body');

		if(answer){
			var jqxhr = $.ajax( location, { dataType:'json' } )
			.done(function(data) {
				//console.log( data.url );
				if (typeof data !== 'undefined' && typeof data.url !== 'undefined') window.open(data.url, '_blank');
			})
			.fail(function() {
				OC.dialogs.info(t("files_gdocs_viewer", "Can't load/open gdoc file via ajax."), "Error: files_gdocs_viewer");
			})
			.always(function() {
				loadMask.remove();
			});
		}else{
			loadMask.remove();
		}
	}, true);
	
}

$(document).ready(function () {
	var mime;

	//make a loop for this :P
	if (typeof FileActions !== 'undefined' && FileActions !== 'undefined') {
		mime = 'application/gdoc';
		FileActions.register(mime, 'View', OC.PERMISSION_READ, '/owncloud/apps/files_gdocs_viewer/img/filetypes/', viewGDocs);
		FileActions.setDefault(mime, 'View');
		
		mime = 'application/gsheet';
		FileActions.register(mime, 'View', OC.PERMISSION_READ, '', viewGDocs);
		FileActions.setDefault(mime, 'View');
		
		mime = 'application/gslides';
		FileActions.register(mime, 'View', OC.PERMISSION_READ, '', viewGDocs);
		FileActions.setDefault(mime, 'View');
		
	} else if (typeof OCA !== 'undefined' && typeof OCA.Files !== 'undefined' && typeof OCA.Files.fileActions !== 'undefined') {
		mime = 'application/gdoc';
		OCA.Files.fileActions.register(mime, 'View', OC.PERMISSION_READ, '/owncloud/apps/files_gdocs_viewer/img/filetypes/', viewGDocs);
		OCA.Files.fileActions.setDefault(mime, 'View');
		
		mime = 'application/gsheet';
		OCA.Files.fileActions.register(mime, 'View', OC.PERMISSION_READ, '', viewGDocs);
		OCA.Files.fileActions.setDefault(mime, 'View');
		
		mime = 'application/gslides';
		OCA.Files.fileActions.register(mime, 'View', OC.PERMISSION_READ, '', viewGDocs);
		OCA.Files.fileActions.setDefault(mime, 'View');
	}
});
