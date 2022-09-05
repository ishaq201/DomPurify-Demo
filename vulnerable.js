
  function toggleInactiveClass(arrayOfClasses){
    arrayOfClasses.forEach(el => {
      document.querySelector(`.${el}`).classList.toggle('inactive'); 
    })
  }
  
  function handleFormSubmit(e){
    e.preventDefault();
    const firstNameInput = document.querySelector('#nameField').value;
    const bioInput = document.querySelector('#bioField').value;
    const profileData = `
      <h2>${firstNameInput}</h2>
      <p>${bioInput}</p>
    `
    const profile = document.querySelector('.profile');
    profile.innerHTML = profileData;
    toggleInactiveClass(['profile', 'profile-form']);
  }
  
  document.querySelector('.profile-form').addEventListener('submit', handleFormSubmit);
  
  
  // example payloads
  
  // <img src="https://d33wubrfki0l68.cloudfront.net/88c115027b7d4be6a05e82bf3bc2f9d3574e73cc/b20e6/images/cp.svg" onload="alert('you got hacked');"/>
  // 
  // <img src="http://unsplash.it/100/asdf" onerror="document.querySelector('body').style.display = 'none';" />
  // 
  // <img src="http://unsplash.it/100/asdf" onerror="window.location = 'https://google.com'" />
  
  // HTML, SVG and MathML are permitted
  // , {USE_PROFILES: {html: true}
  
  
