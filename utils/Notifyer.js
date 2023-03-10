const notifyer = {

  async init() {
    const permission = await Notification.requestPermission();
    if(permission !== 'granted'){
      throw new Error('Permissão Negada');
    }
    else if(permission == 'granted'){
      return true;
    }
  },

  notify({ title, body, doubleBell = false, playSong = true}) {

    const icon = './assets/imgs/favicon-32x32.png';
    let audio = null;

    if(doubleBell) {
      audio = document.querySelector('#doubleBellSound');
    }
    else{
      audio = document.querySelector('#bellSound');
    }
    if(playSong) {
      audio.play();
    }
    
    try {
      new Notification(title, {
        body,
        icon
      });
    } 
    catch (error) {
      console.error(error);
    }
   

  }

}