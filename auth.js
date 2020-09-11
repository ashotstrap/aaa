import * as fb from 'firebase'


 var firebaseConfig = {
    apiKey: "AIzaSyC7ZKCHle6G67L1NFz_Eb2bL_L5cQEjZsk",
    authDomain: "remavtio.firebaseapp.com",
    databaseURL: "https://remavtio.firebaseio.com",
    projectId: "remavtio",
    storageBucket: "remavtio.appspot.com",
    messagingSenderId: "27810754105",
    appId: "1:27810754105:web:cb6a11c882f1f2581427e8"
  };

fb.initializeApp(firebaseConfig);

  console.log(fb);