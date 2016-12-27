import firebase from 'firebase'

export function fireInit(func) {
	// !!!! Replace with your own Firebase settings !!!!!
	var config = {
    apiKey: "AIzaSyDzZeuk5iAFxBciQ1mDErvqe1UZF15Rf5c",
    authDomain: "sorndev.firebaseapp.com",
    databaseURL: "https://sorndev.firebaseio.com",
    storageBucket: "sorndev.appspot.com",
    messagingSenderId: "857410261779"
	}
	firebase.initializeApp(config)

	firebase.auth().onAuthStateChanged(function (user) {
	  if (user) {
	    func(true, user)
	  } else {
	    func(false)
	  }
	}, function(error) {
	  console.log(error)
	})
}
