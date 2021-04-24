# testdrive-rush


$ rush init


Reset everything
----------------

  $ rush unlink
  $ rush purge
  $ rush update --full

  I think "rush update --purge"
  is same as "rush purge" + "rush update -full"


Install all package and create linkages
----------------------------------------

  $ rush update
  run this when ever any of the following has changed:
    - package.json
    - common/config/*


Make sure all dependencies are using the same version
-----------------------------------------------------

  $ rush check


Run build command in all project or library
--------------------------------------------

  $ rush build (incremental)

  $ rush rebuild (build everything)


Run a npm script in a project or library:
-----------------------------------------

  $ cd apps/my-app/
  $ rushx <name of script>


Add a npm package to a project or library
-----------------------------------------

  $ cd <project or library>
  $ rush add --package @mylibs/components


Remove a npm package to a project or library
---------------------------------------------

  Manually deleting the library from package.json and then run:
  "rush update" or "rush update --full"

  Ref: https://github.com/microsoft/rushstack/issues/1457


Deploying
----------
  $ cd <root>
  $ rush init-deploy -p my-app
  $ rush deploy --overwrite -p my-app







