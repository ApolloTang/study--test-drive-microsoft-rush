# testdrive-rush


$ rush init

-------
// reset everything
$ rush purge
$ rush update --full
------

$ rush update
$ rush update --purge
$ rush build

---------
$ cd apps/my-app/
$ rushx start

---------
$ cd libs/components/
$ rushx start

---------
$ cd apps/my-app/
$ rush add --package @mylibs/components

---------
$ cd <root>
$ rush init-deploy -p my-app
$ rush deploy --overwrite -p my-app

---------
