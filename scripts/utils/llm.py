from mistralai import Mistral
import functools
import os

from . import logic

mistral_client = Mistral(api_key=os.environ["MISTRAL_API_KEY"])

with open(
    os.path.join(os.path.dirname(__file__), "parse_course_requirements_prompt.md")
) as f:
    parse_course_requirements_prompt = f.read()


@functools.cache
def parse_course_requirements(requirements: str) -> logic.And:
    if not requirements:
        return []

    chat_response = mistral_client.chat.parse(
        model="mistral-large-latest",
        messages=[
            {
                "role": "system",
                "content": parse_course_requirements_prompt,
            },
            {
                "role": "user",
                "content": requirements,
            },
        ],
        response_format=logic.And,
        max_tokens=256,
        temperature=0,
    )

    return chat_response.choices[0].message.parsed
