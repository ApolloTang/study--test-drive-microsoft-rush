# testdrive-rush


$ rush init

_________
// reset everything
$ rush purge
$ rush update --full

$ rush update
$ rush update --purge
$ rush build

_________
$ cd apps/my-app/
$ rushx start

_________
$ cd libs/components/
$ rushx start

_________
$ cd apps/my-app/
$ rush add --package @mylibs/components

_________
$ cd <root>
$ rush init-deploy -p my-app
$ rush deploy --overwrite -p my-app


_________
// Add a package:
$ cd apps/my-app
$ rush add --package example-lib

// removing a package:
manually deleting the library from package.json and then running
 rush update or rush update --full
https://github.com/microsoft/rushstack/issues/1457




