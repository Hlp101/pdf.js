async function translateText(text, targetLang) {
    const response = await fetch('https://libretranslate.de/translate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            q: text,
            target: targetLang,
            source: "auto" // Detecta automáticamente el idioma
        }),
    });

    const result = await response.json();
    return result.translatedText;
}
