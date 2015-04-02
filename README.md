gDocs Viewer (.gsheet, .gdoc, .gslides) for OwnCloud v 7.x, 8.x
==================================

Open .gsheet, .gdoc, .gslides files from Google Docs in a new window. 

This app used the base code and the test below from https://github.com/Frank1604/files_gpxviewer_extended

==================================


HowTo Use
---------

** **IMPORTANT** **
This App modifies the `mimetypes.list.php` (`lib/private/mimetypes.list.php`) to enable .gsheet, .gdoc, .gslides support
Please check the Permissions for writing, at the moment the Installationroutine does **NOT** care about success or fail while overwrite the file.

If you **DON'T** want that the installer to modifies your `mimetypes.list.php`, create a file called `installed` located in the app-folder `sys` (`apps/files_gdocs_viewer/sys/`). This prevents the app to run the automatic-installation.

If you want to add the gpx support by yourself:

- Open the `mimetypes.list.php` and add

	```
	'gdoc' => array('application/gdoc', null),
	'gsheet' => array('application/gsheet', null),
	'gslides' => array('application/gslides', null),
	```

- Clear the filecache in the Database
	e.g. Sqlite3-Database on *nix:

	```
	sqlite3 /{path}/{to}/owncloud/data/owncloud.db 'DELETE FROM oc_filecache;'
	```


Normal-Installation:
---------
- Download Master as Zip.
- Unzip
- Rename the Folder to `files_gdocs_viewer`
- Upload to owncloud/apps
- Activate


[0]: https://github.com/Frank1604/files_gpxviewer_extended
[1]: http://owncloud.org/
