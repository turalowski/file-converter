// Fetch the currently selected file in Finder
const selectedFileScript = `
   tell application "Finder"
       set theSelection to selection
       if (count of theSelection) is not 1 then
           error "No file selected"
       end if
       set theItem to item 1 of theSelection
       set thePath to POSIX path of (theItem as alias)
   end tell
   return thePath
   `;

   module.exports = {
    selectedFileScript
   }