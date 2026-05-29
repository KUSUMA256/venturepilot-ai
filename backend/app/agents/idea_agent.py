from app.services.gemini_service import generate_response


def startup_idea_agent(user_input):

    prompt = f"""
    You are an expert startup consultant.

    User Domain:
    {user_input}

    Generate:
    1. Startup Name
    2. Problem Statement
    3. Solution
    4. Target Audience
    5. USP
    """

    result = generate_response(prompt)

    return result