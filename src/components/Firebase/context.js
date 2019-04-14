/**
 * Firebase context used to provide a Firebase instance to your entire application
 */

 import React from 'react';

 const FirebaseContext = React.createContext(null);


 export const withFirebase = Component => props => (
   <FirebaseContext.Consumer>
     {firebase => <Component {...props} firebase={firebase} />}
   </FirebaseContext.Consumer>
 )

 export default FirebaseContext;