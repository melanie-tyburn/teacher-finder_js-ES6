const teachers = [
  {
    name: 'Benjamin B.',
    language: 'PHP',
    specialty: 'Symfony',
  },
  {
    name: 'Benjamin N.',
    language: 'JavaScript',
    specialty: 'Data',
  },
  {
    name: 'Benoit',
    language: 'JavaScript',
    specialty: 'Data',
  },
  {
    name: 'Cécile',
    language: 'PHP',
    specialty: 'React',
  },
  {
    name: 'Fabien',
    language: 'JavaScript',
    specialty: 'React',
  },
  {
    name: 'Jean-Baptiste',
    language: 'PHP',
    specialty: 'Symfony',
  },
  {
    name: 'Jean-Christophe',
    language: 'PHP',
    specialty: 'Symfony',
  },
  {
    name: 'Luko',
    language: 'JavaScript',
    specialty: 'React',
  },
  {
    name: 'Quentin',
    language: 'JavaScript',
    specialty: 'React',
  },
  {
    name: 'Solène',
    language: 'PHP',
    specialty: 'React',
  },
  {
    name: 'Yann',
    language: 'JavaScript',
    specialty: 'Data',
  },
]

const app = {

  init: function() {
    // Récupération de l'entité app du HTML
    let app = document.getElementById('app')
    
    // Création du select
    let selectOption = document.createElement('select')
    // Ajout du sélecteur dans le DOM
    app.appendChild(selectOption);
    
    // Création d'un tableau d'options (car pour l'instant il n'y en a que 2 mais il peut y en avoir + par la suite)
    let optionsArray = ['PHP', 'JavaScript'];
    
    // Créer ces options dans le DOM et l'ajouter au select
    optionsArray.forEach(optionText => {
      let option = document.createElement('option');
      option.text = optionText;
      selectOption.appendChild(option);
    });

    // Création de la phrase contenant le compteur de résultats et intégration dans le DOM
    let phrase = document.createElement('h1')
    app.appendChild(phrase);

    // Créer et ajouter la liste des profs dans le DOM
    let liste = document.createElement('ul')
    app.appendChild(liste);  

    // Fonction qui renvoie le nombre de formateurs selon le langage choisi
    let numberTeachersLang = (selectedLanguage) => {
      let number = 0
      // Parcours du tableau : dès qu'une occurrence correspondant au langage sélectionné est trouvée, le nombre est incrémenté
      teachers.forEach(teacher => {
        teacher.language === selectedLanguage ? number++ : number
      })
      return number
    };  

    // Fonction pour mettre à jour la liste des enseignants en fonction de la sélection
    let updateTeacherList = (selectedLanguage) => {
      const arrayLanguageTeachers = teachers.filter(teacher => teacher.language === selectedLanguage);
      liste.innerHTML='';
      arrayLanguageTeachers.forEach(teacher => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${teacher.name} <div class='language'> ${teacher.language} </div>`;
        liste.appendChild(listItem);
      });
    }

    // Initialisation du compteur car la valeur par défaut est PHP
    phrase.textContent = `${numberTeachersLang(selectOption.value)} formateurs trouvés`
     
    // Initialisation de la liste par défaut
     updateTeacherList(selectOption.value);

    // Mise à jour de la phrase et donc du compteur à chaque changement du select
    selectOption.addEventListener('change', () => {
      phrase.textContent = `${numberTeachersLang(selectOption.value)} formateurs trouvés`
      updateTeacherList(selectOption.value);
    })
       

     

     

    
    
   
  },

};

// on initialise l'app dès que le document est prêt
document.addEventListener('DOMContentLoaded', app.init);
