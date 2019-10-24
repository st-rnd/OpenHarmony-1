//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//
//                            openHarmony Library v0.01
//
//
//         Developped by Mathieu Chaptel, ...
//
//
//   This library is an open source implementation of a Document Object Model
//   for Toonboom Harmony. It also implements patterns similar to JQuery
//   for traversing this DOM.
//
//   Its intended purpose is to simplify and streamline toonboom scripting to
//   empower users and be easy on newcomers, with default parameters values,
//   and by hiding the heavy lifting required by the official API.
//
//   This library is provided as is and is a work in progress. As such, not every
//   function has been implemented or is garanteed to work. Feel free to contribute
//   improvements to its official github. If you do make sure you follow the provided
//   template and naming conventions and document your new methods properly.
//
//   This library doesn't overwrite any of the objects and classes of the official
//   Toonboom API which must remains available.
//
//   This library is made available under the MIT license.
//   https://opensource.org/licenses/mit
//
//   The repository for this library is available at the address:
//   https://github.com/cfourney/OpenHarmony/
//
//
//   For any requests feel free to contact m.chaptel@gmail.com
//
//
//
//
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////
//////////////////////////////////////
//                                  //
//                                  //
//          oDrawing class          //
//                                  //
//                                  //
//////////////////////////////////////
//////////////////////////////////////

/**
 * oDrawing Class
 * @class

 * @property   path           {string}                       The folder path of the element on the filesystem.
*/
function oDrawing( dom, name, oElementObject ){
  this._type = "drawing";
  this.$     = dom;

  this.name = name;
  this.element = oElementObject;
}
 

/**
 * .path
 * @return: {string}   The folder path of the drawing on the filesystem.
 */
Object.defineProperty( oDrawing.prototype, 'path', {
    get : function(){
         return fileMapper.toNativePath(Drawing.filename(this.element.id, this.name))
    }
})


// oDrawing Class methods