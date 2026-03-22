export async function onRequestPost(context) {
  try {
    const { imageBase64 } = await context.request.json();

    const response = await fetch("https://generativelanguage.googleapis.com/v1/models/gemini-pro-vision:generateContent?key=SUA_API_KEY", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [{
          parts: [
            { text: "Analise esse prato e retorne calorias, proteína, carboidratos e gordura em JSON" },
            {
              inline_data: {
                mime_type: "image/jpeg",
                data: imageBase64
              }
            }
          ]
        }]
      })
    });

    const data = await response.json();

    // ⚠️ TEMPORÁRIO (vamos melhorar depois)
    return new Response(JSON.stringify({
      calories: 500,
      protein: 30,
      carbs: 50,
      fat: 20
    }), {
      headers: { "Content-Type": "application/json" }
    });

  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500
    });
  }
}
