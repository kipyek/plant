import React, { useState, useRef, useEffect } from 'react'
//...
import * as Notifications from 'expo-notifications'

import { registerForPushNotificationsAsync,
         schedulePushNotification,
         scheduleSolutionPushNotification
} from './src/services/push_notification'

const Drawer = createDrawerNavigator()


export default function App() {

  const called = useRef(false)
  const calledSoltionNotification = useRef(false)

  const [currentScreen, setCurrentScreen] = useState("SplashScreen")

  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();


  

 /**--------------------------End push notification test ----------------- */
 useEffect(() => {


  registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

  notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
    setNotification(notification);
    console.log(notification+"notificationListener");

  });

  responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
    console.log(response+"responseListener");
  });


},[]);

  useEffect(() => {

    setTimeout(() => {
      setCurrentScreen("StartScreen");
    }, 5000)
   
  

   // ...

   handlerSystemNotification()
   handlerSolutionotification()

  }, []);


  /** --------------------------- Start getting plants data  ------------------------------**/

//...


/** --------------------------- End getting plants data  ------------------------------**/



 
    function handlerSystemNotification() {


    if (!calledSoltionNotification.current && systemState == 'Auto' &&  solutionPump == 0) {

      calledSoltionNotification.current = true
      schedulePushNotification()
     
      return () => {
        Notifications.removeNotificationSubscription(notificationListener.current);
        Notifications.removeNotificationSubscription(responseListener.current);
  
      };

    }
    if(calledSoltionNotification.current == "true" && solutionPump != 0) {

      calledSoltionNotification.current = false

   
     }
   

  }

  function handlerSolutionotification() {
 

    if (!called.current && waterLevel <= 50) {

      scheduleSolutionPushNotification()
      called.current = true

      return () => {
        Notifications.removeNotificationSubscription(notificationListener.current);
        Notifications.removeNotificationSubscription(responseListener.current);
  
      };
      
    } if(called.current == "true" && waterLevel >= 50) {
     
      called.current = false
    }
  }  
 
 
  return (
  
      
         <>
         
         </>

  )

}