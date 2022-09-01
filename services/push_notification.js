import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,

  }),
});


export async function registerForPushNotificationsAsync() {

  let token;
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}

export function scheduleSolutionPushNotification() {
  Notifications.scheduleNotificationAsync({
    content: {

      title: "🔔 Alerte",
      body: 'Le niveau d\'eau est bas, pouvez-vous vérifier votre système',
      data: { data: 'goes here' },
      sound: 'default',
      vibrate: false,
      priority: 'high',
    },
    trigger: { seconds: 3 },

  });
}
export function schedulePushNotification() {
  Notifications.scheduleNotificationAsync({
    content: {

      title: "⚠️ Avertissement",
      body: 'Warning!! Vérifier l\'état de la pompe solution',
      data: { data: 'goes here' },
      sound: 'default',
      vibrate: false,
      priority: 'high',
    },
    trigger: { seconds: 3 },

  });
}