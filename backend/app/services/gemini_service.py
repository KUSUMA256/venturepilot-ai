from google import genai

client = genai.Client(
    api_key="AIzaSyDnEMDpQA_HYRzQ9ySMQePdvhmarzDal00"
)


def generate_response(prompt):

    response = client.models.generate_content(
        model="gemini-2.0-flash",
        contents=prompt
    )

    return response.text