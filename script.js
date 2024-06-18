function analyserPhrase(phrase) {
    let longueur = 0;    
    let nbMots = 0; 
    let nbVoyelles = 0;  
     // liste des voyelles pour la vérification
    const voyelles = "aeiouAEIOU";
    // parcourir chaque caractère de la phrase
    for (let i = 0; i < phrase.length; i++) {
        let caractere = phrase[i];
        // compter chaque caractère, y compris les espaces et le point
        longueur++;  
        
        if (caractere === ' ') {
             // si le caractère est un espace, augmenter le compteur de mots
            nbMots++; 
        }
        
        if (voyelles.includes(caractere)) {
             // si le caractère est une voyelle, augmenter le compteur de voyelles
            nbVoyelles++; 
        }
    }
    
    //dernier caractère est le point, donc nous devons ajouter 1 
    nbMots++;
    
    return { longueur, nbMots, nbVoyelles };
}

const phrase = "Bonjour, comment ça va ?"; 
const resultat = analyserPhrase(phrase);

console.log("Phrase:", phrase);
console.log("Longueur de la phrase:", resultat.longueur);
console.log("Nombre de mots dans la phrase:", resultat.nbMots);
console.log("Nombre de voyelles dans la phrase:", resultat.nbVoyelles);
