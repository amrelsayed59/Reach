import { store } from 'react-notifications-component';

const APP_API = process.env.REACT_APP_API;
const KEY = process.env.REACT_APP_API_KEY;

export const getVideos = async (query: string, videoType: string, resultPerPage: number) => {
  return await fetch(
    `${APP_API}/search?part=snippet&maxResults=${resultPerPage}&type=${videoType}&q=${query}&key=${KEY}`
  )
    .then((res) => res.json())
    .then((result) => result)
    .catch((error) => {
      console.log('error happened', error);
      store.addNotification({
        title: 'Something Went Wrong!',
        message: 'Error Happened',
        type: 'danger',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animated', 'fadeIn'],
        animationOut: ['animated', 'fadeOut'],
        dismiss: {
          duration: 3000,
          onScreen: true,
          pauseOnHover: true,
        },
      });
    });
};
