/*
This file contains references to the vendore libraries
we are using in this project. This is used by webpack in
the production build only*.
A separate bundle for vendor code is useful since it's
unlikely to change as often as the applicaton's code.
All the libraries we reference here will be cached until one of them change.
So basically, this avoids customers having to download a huge JS file
anytime a line of code changes.
They only have to download vendor.js when vendor library changes which be less frequent
Any files that aren't referenced ;here will be bundled into
main.js for production build
*/


/*eslint-disable no-unused-vars */
import fetch from 'whatwg-fetch'
