// coleta de dados via fetch da api
const coletarDados = async (idFilme, apiKey) => {
    const response = await fetch(`https://www.omdbapi.com/?i=${idFilme}&apikey=${apiKey}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // armazenando dados no Local Storage
    const data = await response.json();
    localStorage.setItem(`${idFilme}_data`, JSON.stringify(data));
    return data;
};

export default coletarDados