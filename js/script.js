const app = { 

    init: function() {
    
    
        // on écoute le click pour le bouton "Show me more !"
        document.getElementById('newFactButton').addEventListener('click', function() {
          app.fetchFunFact();
        });
    
        // on écoute le click pour l'icone fa-sun
        document.getElementById('darkThemeMode').addEventListener('click', function() {
          app.darkMode();
        })
      
        // on appelle la fonction fetchFunFact au lancement de la page
        app.fetchFunFact();
    
      },
    
      /**
       * Fonction qui envoi une requête à l'API pour mettre à jour le fun fact
       */
      fetchFunFact: async function() {
    
        const limit = 1;
    
        try {
          const response = await fetch('https://api.api-ninjas.com/v1/facts?limit=' + limit, {
            method: 'GET',
            headers: {
              'X-Api-Key': 'pl6ouC/FuYSKw+QfevQMGw==uQDXaXKxKrxgA1Yr'
            }
          });
      
          if (response.ok) {
            const result = await response.json();
            const funFact = result[0].fact;
            const funFactElement = document.getElementById('funFact');
            funFactElement.textContent = funFact;
          } else {
            throw new Error('Erreur lors de la requête');
          }
        } catch (error) {
          console.error('Erreur :', error.message);
        }
      },
    
      /**
       * fonction qui affiche un thème sombre sur la page 
       */
      darkMode: function() {
        
        // on récupère l'icône 
        const darkModeIcon = document.getElementById('darkThemeMode');
    
        // Si la class fa-sun est présente dans la balise <i>
        if(darkModeIcon.classList.contains('fa-sun')) {
          //on lui enlève la class fa-sun
          darkModeIcon.classList.remove('fa-sun');
          // on lui ajoute la class fa-moon
          darkModeIcon.classList.add('fa-moon');
          // et on affiche le mode sombre
          document.body.classList.add('darkTheme');
        } else {
          // si la class fa-sun n'est pas présente dans la balise <i>
          // on lui enlève la class fa-moon
          darkModeIcon.classList.remove('fa-moon');
          // on lui ajoute la class fa-sun
          darkModeIcon.classList.add('fa-sun');
          // et on enlève le mode sombre
          document.body.classList.remove('darkTheme')
        }
    
      }
    
    };
    
    // On appelle la fonction d'initialisation au chargement de la page
    document.addEventListener('DOMContentLoaded', app.init);
    