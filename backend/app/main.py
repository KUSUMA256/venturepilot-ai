
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

import google.generativeai as genai
from dotenv import load_dotenv
import os

# -----------------------------------
# LOAD ENVIRONMENT VARIABLES
# -----------------------------------

load_dotenv()

API_KEY = os.getenv("GEMINI_API_KEY")
print("API KEY LOADED:", API_KEY[:10] if API_KEY else "NO KEY")

# -----------------------------------
# GEMINI CONFIG
# -----------------------------------

genai.configure(api_key=API_KEY)

model = genai.GenerativeModel(
    "gemini-2.0-flash"
)

# -----------------------------------
# FASTAPI APP
# -----------------------------------

app = FastAPI(
    title="VenturePilot AI Backend",
    version="1.0.0"
)

# -----------------------------------
# CORS
# -----------------------------------

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------------
# REQUEST MODEL
# -----------------------------------

class StartupRequest(BaseModel):
    idea: str

# -----------------------------------
# ROOT ROUTE
# -----------------------------------

@app.get("/")
def home():

    return {
        "message":
        "VenturePilot AI Backend Running 🚀"
    }

# -----------------------------------
# GENERATE STARTUP
# -----------------------------------

@app.post("/generate-startup")
async def generate_startup(
    data: StartupRequest
):

    prompt = f"""
You are a startup consultant.

Startup Idea:
{data.idea}

Generate:

1. Startup Name
2. Problem Solved
3. Target Audience
4. Revenue Model
5. Market Opportunity
6. Startup Category
7. Vision Statement

Keep answers short and professional.
"""

    try:
        
        response = model.generate_content(
            prompt
        )

        ai_output = response.text
        print("\n===== GEMINI RESPONSE =====\n")
        print(ai_output)
        print("\n==========================\n")

        return {

            "startup_name":
            f"{data.idea} AI",

            "problem":
            f"AI-powered solution focused on {data.idea}.",

            "audience":
            "Students, startups, creators, and businesses.",

            "revenue":
            "Subscription + Premium Plans + Enterprise Licensing.",

            "market":
            "Fast-growing AI and SaaS market with global demand.",

            "score":
            "92/100",

            "category":
            "AI SaaS",

            "vision":
            f"Become the leading AI platform for {data.idea}.",

            "raw_ai_output":
            ai_output

        }

    except Exception as e:

        return {

            "startup_name":
            f"{data.idea} AI",

            "problem":
            "AI-powered startup solution.",

            "audience":
            "Students, startups, creators, and businesses.",

            "revenue":
            "Subscription-based model.",

            "market":
            "Growing AI market.",

            "score":
            "92/100",

            "category":
            "AI SaaS",

            "vision":
            f"Become the leading AI platform for {data.idea}.",


        }

# -----------------------------------
# RUN SERVER
# -----------------------------------

if __name__ == "__main__":

    import uvicorn

    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True
    )