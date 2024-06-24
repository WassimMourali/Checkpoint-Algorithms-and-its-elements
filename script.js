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



/*
ALGORITHM analyserPhrase(phrase)
    VAR
        length := 0
        wordCount := 0
        vowelCount := 0
        vowels := "aeiouAEIOU"
        
    BEGIN
        FOR i := 0 TO length of phrase - 1 DO
            BEGIN
                character := phrase[i]
                
                length := length + 1
                
                IF character = ' ' THEN
                    wordCount := wordCount + 1
                END IF
                
                IF vowels contains character THEN
                    vowelCount := vowelCount + 1
                END IF
            END
            
        wordCount := wordCount + 1
        
        RETURN { length, wordCount, vowelCount }
    END


*/