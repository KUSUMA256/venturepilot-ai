import google.generativeai as genai

API_KEY = "AIzaSyAyUIVEtaJ5r3VR4Rjpxie155xy_kK7xJs"

genai.configure(api_key=API_KEY)

model = genai.GenerativeModel("gemini-2.0-flash")

try:
    response = model.generate_content(
        "Say hello in one sentence."
    )

    print(response.text)

except Exception as e:

    print("ERROR:")
    print(e)