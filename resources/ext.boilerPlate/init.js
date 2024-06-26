const logAndStoreURL = () => {
  const currentPageURL = window.location.href;
  console.log(currentPageURL)
  return currentPageURL
}
async function takeSummary() {

  console.log("Le résumé a été pris !");

  // Envoie de la requête à l'API
  
  const API_KEY = '';
  const apiUrl = '';

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: `Fais moi le résumé de cette url: ${logAndStoreURL()}, maximum 450 mots.` }],
        max_tokens: 100,
      })
    });
    const data = await response.json();

    console.log("La response de l'API est :", data.choices[0].message.content); // Récupération du text de la préponse de l'IA
    //Ici nous pouvons afficher la réponse dans le chat
  } catch (error) {
    console.error("Erreur lors de la requête de l'API :", error)
  }

}

const button = document.querySelector(".mw-htmlform-submit");
button.addEventListener("click", takeSummary);
